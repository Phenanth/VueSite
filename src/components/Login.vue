<!DOCTYPE html>
<!DOCTYPE html>
<template>
<div class="rt-ctn">
  <h1>Login</h1>
  <form>
    <div class="form-group">
      <label>Username</label>
      <input type="email" class="form-control" placeholder="Email" v-model="formdata.username">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="Password" class="form-control" placeholder="Password" v-model="formdata.password">
    </div>
    <div class="row form-gourp">
      <div class="col-md-1"></div>
      <div class="col-md-4">
        <button class="btn btn-primary" @click="goTo('Register')">Register</button>
      </div>
      <div class="col-md-5">
        <button class="btn btn-default" @click="login(formdata)">Log In</button>
      </div>
      <div class="col-md-1"></div>
    </div>
  </form>
</div>
</template>

<script>
import api from '../api/axios.js'
import router from '../router/index.js'
export default {
  name: 'Login',
  data: function () {
    return {
      showPage: '',
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function ( form ) {
      if (form.username !== '' && form.password !== '') {
        let opt = form
        api.doLogin(opt).then(({
          data
        }) => {
        if (!data.info) {
          alert('Account not exist!')
        }
        if (data.success) {
          console.log('Account successfully signed in.')
          router.go(0)
          router.push('/')
        } else {
          alert('Login failed!')
        }
      })
    } else {
      return false
    }
    },
    // I will try to remove this by using goTo() in app.vue
    // since it is a redundancy problem.
    goTo: function (rt) {
      router.push(rt)
      this.changePage()
    },
    changePage: function () {
      this.$store.dispatch('alterPresentPage', this.$route.path)
      this.showPage = this.$store.getters.showPresentPage
    },
  }
}
</script>

<style>

/* .ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}*/
.rt-ctn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*.hd {
  display: none;
} */

/* .login-title {
  text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
} */


</style>
