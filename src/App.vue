<template>
  <div id="app">
      <Headers/>
    <div class="main"> <router-view/></div>
  </div>
</template>

<script>
import Headers from '@/components/header.vue'
export default {
  name: 'App',
  components: {
    Headers
  }
}
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB","Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .main {
    margin:auto;
    margin-top: 40px; 
    width:1200px;
  }
</style>
