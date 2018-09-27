<template>
  <ul class="list-group list-group-flush">
    <li 
      class="list-group-item" 
      v-for="(participant, index) in participants"
      :key="index"
      >
      {{ participant }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    participants: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
