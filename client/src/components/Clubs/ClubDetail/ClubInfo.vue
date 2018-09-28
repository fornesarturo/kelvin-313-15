<template>
  <div class="text-left">
    <h2>Leyendo: {{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'No hay libro seleccionado'
    }
  }
}
</script>

<style scoped>

</style>
