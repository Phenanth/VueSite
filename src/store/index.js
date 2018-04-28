import Vue from 'vue'
import Vuex from 'vuex'
import rt from './modules/rt.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rt
  }
})
