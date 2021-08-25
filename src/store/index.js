import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    urlAPI: 'http://localhost:5000/'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    verUrlAPI(state){
      return state.urlAPI
    }
  }
})
