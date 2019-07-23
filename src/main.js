// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/plugins/ele'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import tab from '@/utils/tab'

Vue.config.productionTip = false
moment.locale('zh-cn')
Vue.prototype.$tab = tab
Vue.prototype.$moment = moment
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
