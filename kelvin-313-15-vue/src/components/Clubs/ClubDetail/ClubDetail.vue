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
      <club-nav @changed-section="changeSection"/>
      
    </div>
  </div>
</template>

<script>
import ClubNav from './ClubNav.vue'

export default {
  components: {
    ClubNav
  },
  data() {
    return {
      id: '',
      title: '',
      description: '',
      image: '',
      participants: [],
      section: 'info'
    }
  },
  created() {
    this.id = this.$route.params.id
    
    const club = this.$store.getters.getClub(this.id)
    if (club != null) {
      this.title = club.title
      this.description = club.description
      this.image = club.image
      this.participants = club.participants
    }
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
</style>
