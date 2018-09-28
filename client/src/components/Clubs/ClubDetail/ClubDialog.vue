<template>
  <div>
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
      currentMessage: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  created () {
    this.$store.dispatch('fetchMessages', this.messagesId)
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
</style>
