import Vue from 'vue'
import api from '../../api/login'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  isLoading: false,
  errorMessage: '',
  isAuthenticated: false
}

// getters
const getters = {
  isAuthenticated: state => state.isAuthenticated,
  authenticationError: state => state.errorMessage
}

// actions
const actions = {
  login: async ({ commit, state }, data) => {
    commit(types.LOGIN_REQUEST)
    var response
    try {
      response = await api.authentication(data.email, data.password)
    }
    catch (e) {
      Vue.cookie.delete('token')
      Vue.cookie.delete('authUser')
      commit(types.LOGIN_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200 || response.status === 201) {
      if (response.data && response.data.token && response.data.token.length > 0) {
        Vue.cookie.set('token', response.data.token, '1d')
        Vue.cookie.set('authUser', JSON.stringify(response.data.user), '1d')
        commit(types.LOGIN_SUCCESS)
      }
    }
    else {
      Vue.cookie.delete('token')
      Vue.cookie.delete('authUser')
      commit(types.LOGIN_FAILURE)
    }
  },
  logout: ({ commit, state }) => {
    commit(types.LOGOUT_REQUEST)
    Vue.cookie.delete('token')
    Vue.cookie.delete('authUser')
    commit(types.LOGOUT_SUCCESS)
  }
}

// mutations
const mutations = {
  [types.LOGIN_REQUEST] (state) {
    state.isLoading = true
    state.isAuthenticated = false
  },
  [types.LOGIN_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
    state.errorMessage = errorMessage
    state.isAuthenticated = false
  },
  [types.LOGIN_SUCCESS] (state) {
    state.isAuthenticated = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
