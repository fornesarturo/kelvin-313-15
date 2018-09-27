<template>
  <ul class="nav nav-pills nav-fill">
    <li>
      <a
        @click.prevent="clicked('info')"
        class="nav-item club-nav-item"
        :class="{'nav-link':true, 'active': section==='info'}" 
        href="#"
        >
        Información
      </a>
    </li>
    <li>
      <a
        @click.prevent="clicked('participants')"
        class="nav-item club-nav-item"
        :class="{'nav-link':true, 'active': section==='participants'}" 
        href="#"
        >
        Participantes
      </a>
    </li>
    <li>
      <a
        @click.prevent="clicked('dialog')"
        class="nav-item club-nav-item"
        :class="{'nav-link':true, 'active': section==='dialog'}" 
        href="#"
        >
        Diálogo
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      section: 'info'
    }
  },
  methods: {
    clicked (section) {
      this.section = section
      this.$emit('changed-section', section)
    }
  }
}
</script>

<style scoped>
.club-nav-item.active {
  background-color: #1BBC9B;
}
.club-nav-item {
  color: #1BBC9B;
}
</style>
