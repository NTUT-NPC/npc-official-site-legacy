import * as types from './mutationTypes'

const actions = {
  signUp({ commit }) {
    commit(types.APP_SIGNUP)
  }
}

export default actions
