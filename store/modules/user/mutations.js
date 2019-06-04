import * as types from './mutationTypes'

const mutations = {
  [types.APP_SIGNUP](state) {
    state.isLogin = true
  }
}

export default mutations
