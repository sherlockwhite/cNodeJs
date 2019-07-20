<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='/' style="margin-right: 20px">index</router-link>
    <router-link to='/about' style="margin-right: 20px">about</router-link>
    <router-link to='/user' style="margin-right: 20px">user</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
