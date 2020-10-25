import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate'

import Blog from './modules/blog'
import Products from './modules/products'
import Static from './modules/static'
import User from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Blog,
    Products,
    Static,
    User
  },
  plugins: [ VuexPersistedState() ]
})
