<template>
  <div class="card" @click="click">
    <img class="card-img-top" :src="image" width="350" height="150" alt="Imagen club">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'A club'
    },
    image: {
      type: String,
      default: 'https://via.placeholder.com/350x150'
    }
  },
  methods: {
    click () {
      // eslint-disable-next-line
      console.log(`Clicker ${this.title}`)
      this.$router.push({ path: `clubs/${this.id}` })
    }
  }
}
</script>

<style scoped>

</style>
