// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AlertPlugin, ToastPlugin, ConfirmPlugin, AjaxPlugin } from 'vux'
import axios from './axios'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(AjaxPlugin)

/* eslint-disable no-new */
new Vue({
  axios,
  store,
  router,
  render: h => h(App)
})
  .$mount('#app')
