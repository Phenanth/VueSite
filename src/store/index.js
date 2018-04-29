import Vue from 'vue'
import Vuex from 'vuex'
import rt from './modules/rt.js'
import style from './modules/style.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rt,
    style
  }
})
