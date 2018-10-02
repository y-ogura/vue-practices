// TODO:: ここにstoreの処理を書く
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  account: {}
}

const mutations = {
  setCurrentAccount (state, value) {
    state.account = value
    window.localStorage.setItem('account', JSON.stringify(value))
  }
}

const createStore = () => new Vuex.Store({
  state,
  mutations
})

export default createStore