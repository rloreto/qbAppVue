import api from '../../api/weddings'
import * as types from '../mutation-types'

// initial state
const state = {
  currentWedding: null,
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
      commit(types.GET_WEDDING_SUCCESS, { wedding: response.data })
    }
    else {
      commit(types.GET_WEDDINGS_FAILURE)
    }
  },
  async updateWedding ({ commit, state }, {id, data}) {
    if (state.currentWedding[data.propertyName] === data.value) {
      commit(types.UPDATE_WEDDING_SUCCESS, data)
      return
    }
    commit(types.UPDATE_WEDDING_REQUEST, data)
    var response
    try {
      if (data.propertyName) {
        const obj = {}
        obj[data.propertyName] = data.value
        response = await api.updateWedding(id, obj)
      }
      else {
        commit(types.GET_WEDDING_FAILURE, { errorMessage: 'Propertyn name is empty' })
      }
    }
    catch (e) {
      commit(types.GET_WEDDING_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200) {
      if (response.data) {
        commit(types.UPDATE_WEDDING_SUCCESS, data)
        commit(types.UPDATE_ITEM_ON_WEDDINGS, response.data)
      }
    }
    else {
      commit(types.UPDATE_WEDDING_FAILURE)
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
  },
  [types.UPDATE_WEDDING_REQUEST] (state, data) {
    if (data.propertyName) {
      state.currentWedding[data.propertyName] = data.value
    }
    state.isLoading = true
  },
  [types.UPDATE_WEDDING_SUCCESS] (state, data) {
    if (data.propertyName) {
      state.currentWedding[data.propertyName] = data.value
    }
    state.isLoading = false
  },
  [types.UPDATE_WEDDING_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
