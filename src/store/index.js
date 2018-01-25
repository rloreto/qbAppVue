import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import weddings from './modules/weddings'
import weddingDetail from './modules/wedding-detail'
import authentication from './modules/authentication'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    weddingDetail,
    weddings,
    authentication
  },
  strict: debug
})
