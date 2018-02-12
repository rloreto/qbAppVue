import Vue from 'vue'

export default {
  getWedding (id) {
    const _token = Vue.cookie.get('token')
    return Vue.axios.get('/weddings/' + id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  createWedding (wedding) {
    const _token = Vue.cookie.get('token')
    return Vue.axios.post('/weddings', wedding, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  updateWedding (id, wedding) {
    const _token = Vue.cookie.get('token')
    return Vue.axios.put('/weddings/' + id, wedding, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  deleteWedding (id) {
    const _token = Vue.cookie.get('token')
    return Vue.axios.delete('/weddings/' + id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  getWeddings (page, pageNumber, year) {
    const query = '?limit=' + pageNumber + '&page=' + (page + 1) + '&sort=Date&ini=' + year + '-1-1&end=' + year + '-12-31'
    const _token = Vue.cookie.get('token')
    return Vue.axios.get('/weddings/' + query, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  }
}
