/* Vuex for status about page styling */

const state = {
	lightOn: false
}

const getters = {
	showLightOnState: state => state.lightOn
}

const actions = {
  alterLightOn ({ commit }) {
    commit('ALTERLIGHTON');
  }
}

const mutations = {
  ALTERLIGHTON ( state ) {
    state.lightOn = !state.lightOn
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
