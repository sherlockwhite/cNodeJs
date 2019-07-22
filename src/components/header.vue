<template>
  <div class="header">
    <div class="info">
      <a href="/"><img :src="require('@/assets/img/cnodejs.svg')"/></a>
    </div>

  </div>
</template>
<script>
export default {
  name: 'header'

}
</script>
<style scoped lang="scss">
  .header{
    width:100%;
    height:50px;
    background-color: #444444;
    > div.info{
      width:1200px;
      height: 100%;
      margin:auto;
      a{
        width: 120px;
        height: 50px;
        display: block;
        float:left;
        img{
          padding-top: 10px;
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
