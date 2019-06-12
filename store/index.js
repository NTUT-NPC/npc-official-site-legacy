import user from './modules/user'

export const state = () => ({
  ...user.state
})

export const mutations = {
  ...user.mutations
}

export const actions = {
  ...user.actions
}
