import api from '../../api/weddings'
import * as types from '../mutation-types'

// initial state
const state = {
  all: [],
  weddings: [],
  isLoading: false,
  errorMessage: '',
  currentPage: 0
}

// getters
const getters = {
  weddings: state => state.weddings,
  isLoading: state => state.isLoading,
  error: state => state.errorMessage,
  currentPage: state => state.currentPage
}

// actions
const actions = {
  async getWeddings ({ commit, state }, data) {
    commit(types.GET_WEDDINGS_REQUEST)
    var response
    try {
      response = await api.getWeddings(data.page)
    }
    catch (e) {
      commit(types.GET_WEDDINGS_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200) {
      if (response.data && response.data.length > 0) {
        commit(types.GET_WEDDINGS_SUCCESS, { weddings: response.data })
      }
    }
    else {
      debugger
      commit(types.GET_WEDDINGS_FAILURE)
    }
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
  [types.GET_WEDDINGS_SUCCESS] (state, { weddings }) {
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
