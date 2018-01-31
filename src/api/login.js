import Vue from 'vue'

const publicAccessToken = '12F2G71AD432F69CB1281F7117B0'

export default {
  authentication (email, password) {
    console.log(Vue.http)
    return Vue.axios.post(
      '/auth',
      { access_token: publicAccessToken },
      {
        headers: {
          Authorization: 'Basic ' + btoa(email + ':' + password)
        }
      }
    )
  }
}
