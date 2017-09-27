import axios from 'axios'

const _baseUrl = 'https://qbapi.azurewebsites.net/api/weddings'
const _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmVlNGY0ZDdjNGIwNzYwMzIxNDdjYyIsImlhdCI6MTQ5NjI0NTUxNH0.hDs7nk-QeZZ6OBRAe7JaW8YEt00e2yo9Up2y_nyEpBE'

export default {
  getWedding (id, cb) {
    return axios.get(_baseUrl + '/' + id, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  },
  getWeddings (page, cb) {
    return axios.get(_baseUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + _token
      }
    })
  }
}
