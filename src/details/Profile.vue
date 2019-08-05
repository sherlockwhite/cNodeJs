<template>
  <div class="profile">
    <router-link class="user" :to="{path: '/user/'+user.loginname}">
    <img :src="user.avatar_url" alt="用户头像"/>
    <span>{{user.loginname}}</span>
    </router-link>
    <div>积分：{{user.score}}</div>
    <div>
      Github：
      <a :href='"https://github.com/" + user.githubUsername' target="_blank" rel="nofollow noopener noreferrer">
        {{user.githubUsername}}
      </a>
    </div>
    <div>
      注册时间：
      {{$moment(user.create_at, 'YYYY-MM-DD')
      .startOf('day')
      .fromNow()}}
    </div>
  </div>
</template>
<script>
// vuex
import {getUser} from '@/utils/api'
import event from '@/utils/eventProxy'
export default {
  name: 'profile',
  props: ['loginname'],
  data () {
    return {
      user: {}
    }
  },
  methods: {
    fetchData (loginname) {
      getUser(loginname).then((res) => {
        this.user = res.data
        event.trigger('user', res.data)
      })
    }
  },
  created () {
    if (!this.loginname) return
    this.fetchData(this.loginname)
  },
  watch: {
    loginname () {
      if (!this.loginname) return
      this.fetchData(this.loginname)
    }
  }
}
</script>
<style lang="scss" scoped>
.profile{
  display:flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  > a {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      margin: 0 20px 0 0;
    }
    .user {
      margin-bottom: 10px;
    }
  }
}
</style>
