import * as types from './mutationTypes'

const mutations = {
  [types.APP_LOGIN](state) {
    state.isLogin = true
  }
}

export default mutations
