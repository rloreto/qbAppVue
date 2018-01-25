import Vue from 'vue'
import axios from 'axios'

// const _baseUrl = 'https://qbapi.azurewebsites.net/api/weddings'
const _baseUrl = 'http://localhost:9000/api/weddings'

export default {
  getWedding (id, cb) {
    const _token = Vue.cookie.get('token')
    return axios.get(_baseUrl + '/' + id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  getWeddings (page, cb) {
    const _token = Vue.cookie.get('token')
    return axios.get(_baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  }
}
