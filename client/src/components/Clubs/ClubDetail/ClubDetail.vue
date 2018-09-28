<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row justify-content-left">
          <div class="col-12 text-left">
            <h1>{{ title }}</h1>
          </div>
          <div class="col-12 text-left">
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <img :src="image" width="500" height="200" alt="Club Image">
      </div>
    </div>
    <div class="row club-detail-content">
      <div class="col-12">
        <club-nav @changed-section="changeSection"/>
        <div class="club-detail-section">
          <club-info v-show="section=='info'" :title="currentBook"/>
          <club-participants v-show="section=='participants'" :participants="participants"/>
          <club-dialog v-show="section=='dialog'" :messagesId='id'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClubNav from './ClubNav.vue'
import ClubInfo from './ClubInfo.vue'
import ClubParticipants from './ClubParticipants.vue'
import ClubDialog from './ClubDialog.vue'

export default {
  components: {
    ClubNav, ClubInfo, ClubParticipants, ClubDialog
  },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      image: '',
      participants: [],
      currentBook: '',
      section: 'info'
    }
  },
  created() {
    this.id = this.$route.params.id
    
    const club = this.$store.getters.getClub(this.id)
    // eslint-disable-next-line
    console.log(club)
    if (club != null) {
      this.participants = club.participants
      this.title = club.title
      this.description = club.description
      this.image = club.image
      this.currentBook = club.currentBook
    }
    // eslint-disable-next-line
    console.log("Participants: ", this.participants)
  },
  methods: {
    changeSection (section) {
      this.section = section
    }
  }
}
</script>

<style scoped>
.club-detail-content {
  margin-top: 35px;
}
.club-detail-section {
  margin-top: 35px;
}
</style>
