<template>
  <div>
<div class="topic" v-for="i in list" :key="i.id">
  <router-link to="/user/${i.author.loginname}" >
<!--    <img :src='i.author.avatar_url' alt="用户头像"/>-->
  </router-link>
  <span class="count" ><em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em></span>
  <el-tag :type='$tab[item.tab] && $tab[item.tab].type'>
    {{$tab[item.tab] && $tab[item.tab].name}}
  </el-tag>
</div>
  </div>
</template>
<script>
export default {
  name: 'topic',
  props: ['list'],
  data () {
    return {
      article: []
    }
  },
  created () {
    console.log(this.list)
  }
}
</script>
