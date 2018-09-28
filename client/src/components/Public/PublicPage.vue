<template>
  <div class="container">
    <div class="row">
      <div
        v-for="(book, index) in books"
        :key="index"
        class="col-xs-12 col-sm-6 col-lg-4 club-card"
        >
        <public-item v-bind="book"/>
      </div>
    </div>
  </div>
</template>

<script>
import PublicItem from './PublicItem.vue'

export default {
  components: {
    PublicItem
  },
  data() {
    return {

    }
  },
  created () {
    this.$store.dispatch('fetchBooks')
  },
  computed: {
    books () {
      return this.$store.getters.getBooks
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.club-card {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
</style>
