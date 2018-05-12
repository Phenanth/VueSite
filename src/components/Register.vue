<!DOCTYPE html>
<template>
  <div class="rt-ctn">
    <h1>Register</h1>
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
        <button class="btn btn-primary" @click="regester(formdata)">Register</button>
      </div>
      <div class="col-md-5">
        <button class="btn btn-default" @click="reset()">Reset</button>
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
  name: 'Register',
  data: function () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    regester: function ( form ) {
      if (form.username !== '' && form.password !== '') {
        let opt = form
        api.doRegister(opt).then(({
          data
        }) => {
          if (data.info == 504) {
            alert('Duplicated account!')
          } else {
            if (data.success) {
              alert('Account registed.')
              router.go(0)
              router.push('/')
            } else {
              alert('Sign up failed.')
            }
          }
        })
      } else {
        return ;
      }
    },
    reset: function () {

    },
    goTo: function (rt) {
      router.push(rt)
      this.changePage()
    },
    changePage: function () {
      this.$store.dispatch('alterPresentPage', this.$route.path)
      this.showPage = this.$store.getters.showPresentPage
    }
  }
}
</script>
<style>
.rt-ctn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>