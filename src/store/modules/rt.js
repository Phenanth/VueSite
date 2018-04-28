/* Vuex for state of the router */

const state = {
  presentPage: ''
}

const getters = {
  showPresentPage: state => state.presentPage
}

const actions = {
  alterPresentPage ({ commit }, newPage) {
    commit('ALTERPRESENTPAGE', newPage)
  }
}

const mutations = {
  ALTERPRESENTPAGE (state, newPage) {
    state.presentPage = newPage
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
