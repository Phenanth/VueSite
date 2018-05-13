import Vue from 'vue'
import Vuex from 'vuex'
import router from './modules/rt.js'
import style from './modules/style.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    router,
    style,
    user
  }
})
