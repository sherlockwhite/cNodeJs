<template>
<div class="home">
  <el-tabs v-model="tab" @tab-click="change">
    <el-tab-pane label="全部" name="all">
      <Content :list='list' />
    </el-tab-pane>
    <el-tab-pane label="精华" name="good"><Content :list='list' /></el-tab-pane>
    <el-tab-pane label="分享" name="share"><Content :list='list' /></el-tab-pane>
    <el-tab-pane label="问答" name="ask"><Content :list='list' /></el-tab-pane>
    <el-tab-pane label="招聘" name="job"><Content :list='list' /></el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import Content from '@/details/Content'
import {getTopic} from '@/utils/api'

export default {
  name: 'index',
  data () {
    return {
      page: 1,
      limit: 20,
      tab: 'all',
      list: [],
      store: {}
    }
  },
  components: {
    Content
  },
  methods: {
    change () {
      const store = this.store
      if (!store[this.tab]) {
        this.limit = 20
        this.list = []
        this.getData()
        return false
      }
      this.limit = store[this.tab].limit
      this.list = store[this.tab].data
    },
    getData () {
      getTopic({
        page: this.page,
        limit: this.limit,
        tab: this.tab
      }).then(res => {
        this.list = res.data
        this.limit = this.limit + 10
        const store = res.data
        this.store[this.tab] = {
          limit: this.limit,
          data: store
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
<style scoped>
.home{
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}
</style>
