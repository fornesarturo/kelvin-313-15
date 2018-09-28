<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="text-center book-image">
      <img :src="image" width="500" height="200" alt="Club Image">
    </div>
    <p>{{ overview }}</p>
    <div class="text-left book-image">
      <h3>Diálogo</h3>
    </div>
    <ul class="list-group list-group-flush">
      <li 
        class="list-group-item text-left"
        v-for="(message, index) in messages"
        :key="index"
        >
        {{ message.author }} -- {{ message.text }}
      </li>
    </ul>
    <form class="dialog-form" @submit.prevent="newMessage">
      <div class="input-group mb-3">
        <input
          v-model="currentMessage"
          type="text"
          class="form-control"
          placeholder="Escribe un comentario"
          aria-label="Escribe un comentario"
          aria-describedby="basic-addon2"
        >
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    messagesId: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      id: '',
      currentMessage: '',
      title: '',
      overview: '',
      image: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  created () {
    this.id = this.$route.params.id
    this.$store.dispatch('fetchMessages', this.id)
    const book = this.$store.getters.getBook(this.id)
    if (book != null) {
      this.title = book.title
      this.overview = book.overview
      this.image = book.image
    }
  },
  methods: {
    newMessage () {
      if (this.currentMessage === '') return
      this.$store.commit('addMessage', {id: this.id, text: this.currentMessage})
      this.currentMessage = ''
    }
  }
}
</script>

<style scoped>
.dialog-form {
  margin-top: 10px;
}
.book-image {
  margin-bottom: 15px;
}
</style>
