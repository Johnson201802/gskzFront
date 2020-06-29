import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false
  },
  getters:{
  },
  mutations: {
    changelogin:(state,data)=>{
      state.islogin = data
    }
  },
  actions: {
  },
  modules: {
  }
})
