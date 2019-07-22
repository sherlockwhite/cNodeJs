import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import topic from '@/components/topic'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: topic
    },
    {
      path: '/user/:id',
      name: 'user',
      component: user
    },
    {
      path: '/user',
      redirect: '/'
    },
    {
      path: '/topic',
      redirect: '/'
    }
  ]
})
