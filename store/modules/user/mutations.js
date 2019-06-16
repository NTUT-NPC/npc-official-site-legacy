import * as types from './mutationTypes'

const mutations = {
  [types.APP_LOGIN](state) {
    state.isLogin = true
    state.isLoading = false
  },
  [types.APP_LOGOUT](state) {
    state.isLogin = false
    state.isLoading = false
  },
  [types.APP_LOADING](state) {
    state.isLoading = !state.isLoading
  }
}

export default mutations
