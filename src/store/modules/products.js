/**
 *Created by admin on 2018/1/31
 */
import shop from '../../api/shop'
import * as types from '../types'

const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProduct(products => {
      commit(types.RECEIVE_PRODUCTS, {products})
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, {products}) {
    state.all = products
  },
  [types.ADD_TO_CART] (state, {id}) {
    state.all.find(product => product.id === id).inventory--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
