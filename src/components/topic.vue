<template>
<div class="topic">

  <div class="left">
      <div class="title" v-html="topic.title"/>
      <div class='info'>
        <span>发布于&nbsp;{{$moment(topic.create_at,'YYYY-MM-DD').startOf('day').fromNow()}}&nbsp;•&nbsp;</span>
        作者：<router-link :to="{path:'/user/'+topic.loginname}">{{topic.loginname}}</router-link>&nbsp;•&nbsp;
        <span>{{topic.visit_count}}次浏览！！&nbsp;.&nbsp;</span>
        <span>{{$tab[topic.tab] && $tab[topic.tab].name}}</span>
      </div>
      <Divider/>
      <div class="content" v-html="topic.content"/>
      <Reply :data='topic.replies'/>
    </div>

  <div class="right">
    <Profile :loginname='topic.loginname'/>
    <other/>
    <recent/>
  </div>

</div>
</template>
<script>
import Divider from '@/details/Divider'
import Reply from '@/details/Reply'
import Profile from '@/details/Profile'
import other from '@/details/otherTopic'
import recent from '@/details/recentReply'
import {getDetail} from '@/utils/api'
export default {
  name: 'topic',
  components: {
    Divider,
    Reply,
    Profile,
    other,
    recent
  },
  data () {
    return {
      topic: {}
    }
  },
  methods: {
    fetchData (id) {
      getDetail(id).then(res => {
        console.log(res.data)
        this.topic = {...res.data, ...res.data.author}
      })
    }
  },
  created () {
    this.fetchData(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.fetchData(to.params.id)
    next()
  }
}
</script>
<style lang="scss" scoped>
$grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
.topic{
  display:flex;
  margin-bottom: 100px;
  text-decoration: none;
  color: rgb(127, 150, 255);
  .title{
    color:black;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .content{
    color: #333;
    line-height: 1.6;
    margin-bottom: 50px;
    /deep/ img{
      width: 100%;
    }
  }
  .left{
    width: 72%;
    float: left;
    box-shadow: $grey-shadow;
    padding: 20px;
    .info{
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #838383;
    }
  }
  .right{
    float: right;
    width: 25%;
    height: 100%;
    margin-left: 2%
  }
}
</style>
