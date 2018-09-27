<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-sm-6 col-xs-6 col-lg-6">
        <button @click="createClub" type="button" class="btn btn-outline-secondary btn-lg btn-create-event">Crear Club de Lectura</button>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(club, index) in clubs"
        :key="index"
        class="col-xs-12 col-sm-6 col-lg-4 club-card"
        >
        <club-item v-bind="club"/>
      </div>
    </div>
  </div>
</template>

<script>
import ClubItem from './ClubItem.vue'

export default {
  components: {
    ClubItem
  },
  data() {
    return {

    }
  },
  created () {
    this.$store.dispatch('fetchClubs')
  },
  computed: {
    clubs () {
      return this.$store.getters.getClubs
    }
  },
  methods: {
    createClub () {
      // eslint-disable-next-line
      console.log("Creating event!")
    }
  }
}
</script>

<style scoped>
.club-card {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>