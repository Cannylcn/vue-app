/**
 *Created by admin on 2018/1/15
 */
// import api from '../axios'
// import Vue from 'vue'
// import router from '../router/index'
import * as types from './types'

export default {
  UserLogin ({ commit }, data) {
    commit(types.LOGIN, data)
  },
  UserLogout ({ commit }) {
    commit(types.LOGOUT)
  },
  UserName ({ commit }, data) {
    commit(types.USERNAME, data)
  },
  changeTest ({ commit }, data) {
    commit(types.TEST, data)
  },
  updateDirection ({ commit }, data) {
    commit(types.DIRECTION, data)
  },
  addToCart ({ commit }, product) {
    if (product.inventory > 0) {
      commit(types.ADD_TO_CART, {
        id: product.id
      })
    }
  },
  updateTitle ({ commit }, data) {
    commit(types.SET_TITLE, data)
  }
}
