import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/stroeAuth'
import post from '@/store/stroePost'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    post
  }
})
