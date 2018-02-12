/**
 *Created by admin on 2018/1/15
 */
import * as types from './types'

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.setItem('token', data)
    state.token = data
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.token = null
  },
  [types.USERNAME]: (state, data) => {
    localStorage.setItem('username', data)
    state.username = data
  },
  [types.TEST]: (state, data) => {
    state.test = data
  },
  [types.DIRECTION]: (state, data) => {
    state.direction = data
  },
  [types.SET_TITLE]: (state, data) => {
    state.title = data
  }
}

export default mutations
