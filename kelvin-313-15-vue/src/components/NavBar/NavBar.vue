<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <router-link
      to="/home"
      active-class="active"
      class="nav-item"
      exact
      >
        <a class="navbar-brand" href="#">
            <img src="../../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Kelvin 313.15
        </a>
    </router-link>

    <button class="navbar-toggler" @click="collapse=!collapse" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div :class="{'collapse':collapse, 'navbar-collapse':true}">
      <ul class="navbar-nav">
        <nav-bar-link @click-link="clickedLink" to="/public" label="Público"/>
        <nav-bar-link @click-link="clickedLink" to="/clubs" label="Clubes"/>
        <nav-bar-link @click-link="clickedLink" to="/" label="Sign Out"/>
      </ul>
    </div>

  </nav>
</template>

<script>
import NavBarLink from './NavBarLink.vue'
export default {
  components: {
    NavBarLink
  },
  data () {
    return {
      collapse: true
    }
  },
  methods: {
    clickedLink () {
        // eslint-disable-next-line
        console.log("Here!")
        this.collapse = false
    }
  }
}
</script>