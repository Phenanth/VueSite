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
    <div class="row">
      <div class="col-md-7 form-group">
        <label>Validation</label>
        <input type="text" class="form-control" placeholder="Validate code" v-model="formdata.validCode">
      </div>
      <div class="col-md-4 btn-valid">
        <button class="btn btn-info" @click="sendValidCode()">Send Email</button>
      </div>
    </div>
    <div class="row form-gourp">
      <div class="col-md-1"></div>
      <div class="col-md-5">
        <button class="btn btn-primary" @click="regester(formdata)">Register</button>
      </div>
      <div class="col-md-4">
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
        password: '',
        validCode: ''
      },
      validData: {
        username: '',
        validCode: ''
      }
    }
  },
  methods: {
    regester: function ( form ) {
      if (this.validData.validCode == form.validCode && form.validCode !== '') {
        console.log(form.username, )
        if (form.username == this.validData.username) {
          let opt = form
          api.doRegister(opt).then(({
            data
          }) => {
            if (data.info == 504) {
              alert('Duplicated account!')
            } else {
              if (data.success) {
                router.go(0)
                router.push('/')
              } else {
                alert('Registering failed.')
              }
            }
          })
        } else {
          alert('Please keep the email as same as the one you choose to send valid code.')
        }
      } else {
        alert('Please input the correct valid code.');
      }
    },
    sendValidCode: function () {
      if (this.formdata.username !== '') {
        this.validData.username = this.formdata.username
        // Remember to use object to transfer data.
        let opt =  {
          username: this.formdata.username
        }
        api.sendValidCode(opt).then(({
          data
        }) => {
          if (data.success) {
            this.validData.validCode = data.validData
            console.log(this.validData)
          } else {
            alert(data.message)
          }
        })
      } else {
        alert('Please input the email.')
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

.btn-valid {
}
</style>