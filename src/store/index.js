/**
 *Created by admin on 2018/1/15
 */
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import mutations from './mutations'

import cart from './modules/cart'
import products from './modules/products'

import actions from './actions'

Vue.use(VueRouter)
Vue.use(Vuex)

const state = {
  token: null,
  activeName: 'first',
  username: '',
  direction: 'forward',
  title: ''
}

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    cart,
    products
  },
  actions
})
