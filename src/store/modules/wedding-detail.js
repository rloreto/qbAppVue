import api from '../../api/weddings'
import * as types from '../mutation-types'

// initial state
const state = {
  currentWedding: {},
  isLoading: false
}

// getters
const getters = {
  currentWedding: state => state.currentWedding
}

// actions
const actions = {
  async getWedding ({ commit, state }, id) {
    commit(types.GET_WEDDING_REQUEST)
    var response
    try {
      response = await api.getWedding(id)
    }
    catch (e) {
      commit(types.GET_WEDDING_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200) {
      if (response.data) {
        commit(types.GET_WEDDING_SUCCESS, { wedding: response.data })
      }
    }
    else {
      commit(types.GET_WEDDINGS_FAILURE)
    }
  }
}

// mutations
const mutations = {
  [types.GET_WEDDING_REQUEST] (state) {
    state.isLoading = true
  },
  [types.GET_WEDDING_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
    state.errorMessage = errorMessage
  },
  [types.GET_WEDDING_SUCCESS] (state, { wedding }) {
    if (!wedding) {
      state.isLoading = false
      return
    }
    state.currentWedding = wedding
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
