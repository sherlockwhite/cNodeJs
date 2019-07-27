<template>
  <div class='reply'>
    <div><span>{{data.length}}</span>&nbsp;条回复</div>
    <div v-for="(reply,index) in data" :key="reply.id">
      <router-link :to="{path:'/user/'+reply.author.loginname}">
        <img :src="reply.author&&reply.author.avatar_url" alt='头像'/>
      </router-link>
    <div>
      <div class="info">
        <p>
          <span>{{index+1}}楼&nbsp;</span>
          <router-link :to="{path:'/user/'+reply.author.loginname}">
          {{reply.author.loginname}}
          </router-link>
          <span>
              &nbsp;
              {{$moment(reply.create_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}}
            </span>
        </p>
        <span class="thumbs">
          <img v-if="reply.ups.length" :src="require('@/asserts/img/thumbs-up.svg')"
        </span>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'reply',
  props: ['data']
}
</script>
<style lang="scss" scoped>
.reply{

}
</style>
