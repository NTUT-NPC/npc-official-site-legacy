import * as types from './mutationTypes'

const mutations = {
  [types.APP_LOGIN](state) {
    state.isLogin = true
  },
  [types.APP_LOGOUT](state) {
    state.isLogin = false
  }
}

export default mutations
