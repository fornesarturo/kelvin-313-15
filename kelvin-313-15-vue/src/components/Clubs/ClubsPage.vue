<template>
  <div class="container club-container">
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
      clubs: [
        { title: "Hola", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola1", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola2", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola3", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola4", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola5", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola6", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola7", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola8", description: "Description", image: "https://via.placeholder.com/350x150" },
        { title: "Hola9", description: "Description", image: "https://via.placeholder.com/350x150" }
      ]
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
.club-container {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
