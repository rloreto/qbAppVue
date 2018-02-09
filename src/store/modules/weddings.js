import Vue from 'vue'
import api from '../../api/weddings'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  weddings: [],
  isLoading: false,
  errorMessage: '',
  currentPage: 0,
  selectedYear: (new Date()).getFullYear(),
  isLastPage: false
}

// getters
const getters = {
  weddings: state => state.weddings,
  isLoading: state => state.isLoading,
  error: state => state.errorMessage,
  currentPage: state => state.currentPage,
  isLastPage: state => state.isLastPage,
  selectedYear: state => state.selectedYear
}

// actions
const actions = {
  getWeddings: async ({ commit, state }, data) => {
    commit(types.GET_WEDDINGS_REQUEST)
    var response
    try {
      response = await api.getWeddings(data.page, 5, data.year)
    }
    catch (e) {
      commit(types.GET_WEDDINGS_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200) {
      let isLastPage = (response.data.length !== 5)
      commit(types.GET_WEDDINGS_SUCCESS, { weddings: response.data, isLastPage })
    }
    else {
      commit(types.GET_WEDDINGS_FAILURE)
    }
  },
  setYear: ({ commit, state }, data) => {
    commit(types.SET_YEAR_REQUEST)
    commit(types.SET_YEAR_SUCCESS, data.year)
  }
}
// mutations
const mutations = {
  [types.GET_WEDDINGS_REQUEST] (state) {
    state.isLoading = true
  },
  [types.GET_WEDDINGS_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
    state.errorMessage = errorMessage
  },
  [types.GET_WEDDINGS_SUCCESS] (state, { weddings, isLastPage }) {
    if (weddings && weddings.length === 0) {
      state.isLoading = false
      return
    }
    let items = []
    for (let i = 0; i < weddings.length; i++) {
      items.push(weddings[i])
    }
    state.weddings = state.weddings.concat(items)
    state.currentPage++
    state.isLoading = false
    state.isLastPage = isLastPage
  },
  [types.SET_YEAR_REQUEST] (state) {
    state.isLoading = true
  },
  [types.SET_YEAR_SUCCESS] (state, year) {
    state.isLoading = false
    state.weddings = []
    state.currentPage = 0
    state.isLastPage = false
    state.selectedYear = year
  },
  [types.SET_YEAR_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
  },
  [types.UPDATE_ITEM_ON_WEDDINGS] (state, wedding) {
    let targetIndex = 0
    for (let i = 0; i < state.weddings.length; i++) {
      if (state.weddings[i].id === wedding.id) {
        targetIndex = i
      }
    }
    Vue.set(state.weddings, targetIndex, wedding)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
