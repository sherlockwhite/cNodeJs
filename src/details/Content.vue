<template>
  <div>
<div class="topic" v-for="i in list" :key="i.id">
  <router-link :to='{path: "/user/"+i.author.loginname}' >
   <img :src='i.author.avatar_url' alt="用户头像"/>
  </router-link>
  <span class="count"><em>{{i.reply_count}}</em>/<em>{{i.visit_count}}</em></span>
  <el-tag :type='$tab[i.tab] && $tab[i.tab].type'>
    {{$tab[i.tab] && $tab[i.tab].name}}
  </el-tag>
  <router-link class='title' :to='{path:"/topic/"+i.id}'>{{i.title}}</router-link>
  <span class='time'>{{$moment(i.last_reply_at, 'YYYY-MM-DD').startOf('day').fromNow()}}</span>
</div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  props: {
    'list': Array
  },
  data () {
    return {
      article: []
    }
  }
}
</script>
<style lang='scss' scoped>
.topic{
  margin: 20px;
  display:flex;
  align-items: center;
  justify-content: space-between; //中间flex间隔
  img{
    width:50px;
    height:50px;
    border-radius:50%; //圆角
  }
  span.count{
    width:50px;
    text-align: center;
    em:first-child{
      font-size : 1em;
      color:purple;
    }
    em:last-child{
      font-size: 1em;
      color: grey;
    }
  }
  .title{
    width:60%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    text-decoration: none;
    color: rgb(127, 150, 255);
    font-weight: 600;
  }
  span.time{
    width: 70px;
    text-align: right;
  }
}
</style>
