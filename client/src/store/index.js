import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate'

import Shop from './modules/shop/module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Shop
  },
  plugins: [ VuexPersistedState() ]
})
