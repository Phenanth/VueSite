<!DOCTYPE html>
<template>
<div id="app" class="wrapper">
  <div class="nav">
    <div class="logo">
      <img class="img-logo" src="../static/img/logo.png" alt="Logo of the Website." width="60" height="60">
    </div>
    <div class="nav-bar">
      <li class="nav-bar-list fn-hidden"></li>
      <li class="nav-bar-list" :class="{ active : this.showPage === '/Dairy' }" @click="goTo('Dairy')">日记</li>
      <li class="nav-bar-list" :class="{ active : this.showPage === '/Note' }" @click="goTo('Note')">笔记</li>
      <li class="nav-bar-list" :class="{ active : this.showPage === '/Essay' }" @click="goTo('Essay')">杂记</li>
      <li class="nav-bar-list" :class="{ active : this.showPage === '/Report' }" @click="goTo('Report')">报告</li>
      <li class="nav-bar-list" :class="{ active : this.showPage === '/' }" @click="goTo('/')">主页</li>
    </div>
    <div class="nav-foot"></div>
  </div>
  <div class="ctn">
    <div class="hd">
      <div class="btn-login" @click="goTo('Login')">Log In</div>
    </div>
    <div class="ctn-box">
     <router-view/>
    </div>
  </div>
</div>
</template>

<script>
import router from './router/index.js'
export default {
  name: 'App',
  data: function () {
    return {
      showPage: ''
    }
  },
  created: function () {
    this.$store.dispatch('alterPresentPage', this.$route.path)
    this.showPage = this.$store.getters.showPresentPage
  },
  methods: {
    goTo (rt) {
      router.push(rt)
      this.changePage()
    },
    changePage () {
      this.$store.dispatch('alterPresentPage', this.$route.path)
      this.showPage = this.$store.getters.showPresentPage
    }
  },
  watch: {
    '$route': 'changePage'
  }
}
</script>

<style>
body {
margin: auto;
}
.wrapper {
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: flex-start;
overflow-x: hidden;
overflow-y: hidden;
}
li {
text-align: center;
list-style: none;
}
a {
color: lightgray;
text-decoration: none;
display: inline-block;
}
.logo {
height: 10%;
}
.img-logo {
border: 2px solid #367060;
}
.nav {
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
height: 100%;
width: 140px;
background-color: #363840;
}
.nav-bar {
height: 70%;
}
.nav-bar-list {
margin-top: 0px;
width: 130px;
margin: 10px;
padding: 10px;
color: lightgray;
text-align: center;
}
.nav-bar-list:hover {
background-color: #404650;
}
.active {
margin: auto;
background-color: #202126;
border-right: 15px solid #367060;
}
.nav-foot {
width: 160px;
background-color: #367060;
height: 10px;
}
.ctn {
display: flex;
flex-direction: column;
height: 100%;
width: calc(100% - 140px);
background-color: #202126;
}
.hd {
justify-content: flex-end;
height: 45px;
width: 100%;
background-color: #252830;
}
.btn-login {
float: right;
color: lightgray;
line-height: 45px;
width: 100px;
text-align: center;
background-color: #365850
}
.btn-login:hover {
background-color: #367060;
}
.ctn-box {
display: flex;
justify-content: center;
align-items: center;
color: lightgray;
}
.fn-hidden {
visibility: hidden;
}
</style>
