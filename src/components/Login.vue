<!DOCTYPE html>
<!DOCTYPE html>
<template>
<div class="rt-ctn">
  <h1 class="login-title">Login</h1>
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
        <button class="btn btn-primary">Register</button>
      </div>
      <div class="col-md-5">
        <button class="btn btn-default" @click="login('formdata')">Log In</button>
      </div>
      <div class="col-md-1"></div>
    </div>
  </form>
</div>
</template>

<script>
import api from '../api/axios.js'
export default {
  name: 'Login',
  data: function () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function ( form ) {
      this.$refs[form].validate(valid => {
        if (valid) {
          let opt = form
          api.doLogin(opt)
        } else {
          return false
        }
      })
    }
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
