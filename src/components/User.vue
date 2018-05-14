<!DOCTYPE html>
<template>
  <div class="wrapper">
    <h1>User Info</h1>
  </div>
</template>
<script>
import router from '../router/index.js'
import api from '../api/axios.js'
export default {
  name: 'User',
  created: function () {
    this.checkLogin()
  },
  methods: {
    checkLogin: function () {
      api.isLogin().then(({
        data
      }) => {
        if (data.success) {
          return ;
        } else {
          localStorage.removeItem('token')
          this.$store.dispatch('logout')
          alert(data.message)
          router.push('Login')
          router.go(0)
        }
      })
    }
  }
}
</script>
<style>
</style>
