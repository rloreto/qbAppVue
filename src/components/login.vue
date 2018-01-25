<template>
  <div class="layout-padding docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">

      <q-input v-model="email" type="email" float-label="Email" clearable />
      <q-input v-model="password" type="password" float-label="Password" />
      <q-btn color="primary" @click="login">Enviar</q-btn>
    </div>
  </div>
</template>

<script>
import {
  QBtn,
  QInput,
  QToggle,
  QIcon,
  QField,
  QTooltip,
  QPopover
} from 'quasar'
import { mapGetters } from 'vuex'
export default {
  components: {
    QBtn,
    QInput,
    QToggle,
    QIcon,
    QField,
    QTooltip,
    QPopover
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login (e, done) {
      var email = this.$data.email
      var password = this.$data.password
      if (email && password) {
        this.$store.dispatch('login', {email, password}).then(() => {
          if (this.isAuthenticated) {
            this.$router.replace(this.$route.query.redirect || '/events/weddings')
          }
        })
      }
    }
  },
  computed: mapGetters({
    isAuthenticated: 'isAuthenticated',
    isLoading: 'isLoading',
    error: 'error'
  })
}
</script>
