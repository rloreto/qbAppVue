<template>
</template>

<script>
  export default {
    created: function () {
      this.$store.dispatch('logout').then(() => {
        this.$router.replace('/login')
      })
    }
  }
</script>
