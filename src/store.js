import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const apiRoot = 'https://127.0.0.0:3000/api/'

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    logged: false,
    loggeddate: null,
  },
  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
    SETLOGGED (state) {
      state.logged = true
      localStorage.setItem('logged', true)
    },
  },
  getters: {
    isAuth: state => {
      const auther = localStorage.getItem('logged')
      return auther
    },
  },
  actions: {
    login (context) {
      return new Promise((resolve) => {
        context.commit('SETLOGGED')
        resolve('login')
      })
    },
  },
})
