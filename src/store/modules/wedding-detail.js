import Vue from 'vue'
import api from '../../api/weddings'
import * as types from '../mutation-types'

// initial state
const state = {
  currentWedding: null,
  isLoading: false,
  mode: 'new'
}

// getters
const getters = {
  currentWedding: state => state.currentWedding,
  mode: state => state.mode
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
    if (state.mode === 'update') {
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
    else {
      commit(types.UPDATE_WEDDING_SUCCESS, data)
    }
  },
  async createWedding ({ commit, state }, wedding) {
    commit(types.CREATE_WEDDING_REQUEST)
    var response
    try {
      response = await api.createWedding(wedding)
    }
    catch (e) {
      commit(types.CREATE_WEDDING_FAILURE, { errorMessage: e })
      return
    }

    if (response.status === 200 || response.status === 201) {
      commit(types.CREATE_WEDDING_SUCCESS, { wedding: response.data })
      commit(types.ADD_ITEM_ON_WEDDINGS, response.data)
    }
    else {
      commit(types.CREATE_WEDDING_FAILURE)
    }
  },
  async deleteWedding ({ commit, state }, wedding) {
    commit(types.DELETE_WEDDING_REQUEST)
    var response
    try {
      response = await api.deleteWedding(wedding.id)
    }
    catch (e) {
      commit(types.DELETE_WEDDING_FAILURE, { errorMessage: e })
      return
    }
    if (response.status === 200 || response.status === 201 || response.status === 204) {
      commit(types.DELETE_WEDDING_SUCCESS, { wedding: response.data })
      commit(types.DELETE_ITEM_ON_WEDDINGS, wedding)
    }
    else {
      commit(types.DELETE_WEDDING_FAILURE, { errorMessage: response.status })
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
  [types.CREATE_WEDDING_REQUEST] (state) {
    state.isLoading = true
  },
  [types.CREATE_WEDDING_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
    state.errorMessage = errorMessage
  },
  [types.CREATE_WEDDING_SUCCESS] (state, { wedding }) {
    if (!wedding) {
      state.isLoading = false
      return
    }
    state.mode = 'update'
    state.currentWedding = wedding
    state.isLoading = false
  },
  [types.DELETE_WEDDING_REQUEST] (state) {
    state.isLoading = true
  },
  [types.DELETE_WEDDING_FAILURE] (state, { errorMessage }) {
    state.isLoading = false
    state.errorMessage = errorMessage
  },
  [types.DELETE_WEDDING_SUCCESS] (state, { wedding }) {
    if (!wedding) {
      state.isLoading = false
      return
    }
    delete state.currentWedding
    state.isLoading = false
  },
  [types.SET_WEDDING_MODE] (state, mode) {
    state.mode = mode
    if (mode === 'new') {
      state.currentWedding = {
        brideHomeFilm: false,
        groomHomeFilm: false,
        date: Date.now(),
        confirm: true
      }
    }
  },
  [types.UPDATE_WEDDING_REQUEST] (state, data) {
    if (data.propertyName) {
      Vue.set(state.currentWedding, data.propertyName, data.value)
    }
    state.isLoading = true
  },
  [types.UPDATE_WEDDING_SUCCESS] (state, data) {
    if (data.propertyName) {
      Vue.set(state.currentWedding, data.propertyName, data.value)
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
