<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar/NavBar.vue'
import Login from './components/Login/Login.vue'

export default {
  name: 'app',
  components: {
    HelloWorld, NavBar, Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
