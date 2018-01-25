import axios from 'axios'

// const _baseUrl = 'https://qbapi.azurewebsites.net/api/weddings'
const _baseUrl = 'http://localhost:9000/api/'
const publicAccessToken = '12F2G71AD432F69CB1281F7117B0'

export default {
  authentication (email, password) {
    return axios.post(
      _baseUrl + 'auth',
      { access_token: publicAccessToken },
      {
        headers: {
          Authorization: 'Basic ' + btoa(email + ':' + password)
        }
      }
    )
  }
}
