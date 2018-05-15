<!DOCTYPE html>
<template>
<div id="app" class="app">
  <div class="nav">
    <div class="logo">
      <img class="img-logo" src="../static/img/logo.png" alt="Logo of the Website." width="60" height="60" @click="goTo('User')">
    </div>
    <div class="nav-bar">
      <li class="nav-bar-list fn-hidden"></li>
<!--       <li class="nav-bar-list" :class="{ active : this.showPage === '/Dairy' }" @click="goTo('Dairy')">日记</li>
<li class="nav-bar-list" :class="{ active : this.showPage === '/Note' }" @click="goTo('Note')">笔记</li>
<li class="nav-bar-list" :class="{ active : this.showPage === '/Essay' }" @click="goTo('Essay')">杂记</li>
<li class="nav-bar-list" :class="{ active : this.showPage === '/Report' }" @click="goTo('Report')">报告</li> -->
      <li class="nav-bar-list" :class="{ active : this.showPage === '/' }" @click="goTo('/')">主页</li>
    </div>
    <div class="nav-foot"></div>
  </div>
  <div class="ctn">
    <div class="hd">
      <div class="toggle-bar">
        <span>小玩意</span>
        <i class="fa fa-angle-down"></i></span>
        <div class="dp-ctn">
          <p>Sample Text.</p>
        </div>
      </div>
      <div class="toggle-bar">
        <span>页面设置</span>
        <i class="fa fa-angle-down"></i></span>
        <div class="dp-ctn">
          <p @click="changeTheme()">{{ turnLight }}</p>
          <p>Sample Text.</p>
        </div>
      </div>

      <div v-if="isLogedIn">
        <div class="btn-login" @click="doLogout()">Log Out</div>
      </div>
      <div v-else>
        <div class="btn-login" @click="goTo('Login')">Log In</div>
      </div>
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
  computed: {
    turnLight: function () {
      let light = this.$store.getters.showLightOnState
      let content = ''
      if (light === true) {
        content = '关灯'
      } else if (light === false) {
        content = '开灯'
      }
      return content
    },
    isLogedIn: function () {
      return localStorage.getItem('token') || this.$store.getters.showTokenState
    }
  },
  methods: {
    goTo (rt) {
      router.push(rt)
      this.changePage()
    },
    doLogout () {
      this.$store.dispatch('logout');
      router.go(0)
      router.push('/')
    },
    changePage () {
      this.$store.dispatch('alterPresentPage', this.$route.path)
      this.showPage = this.$store.getters.showPresentPage
    },
    changeTheme() {
      this.$store.dispatch('alterLightOn')
    }
  },
  watch: {
    '$route': 'changePage'
  }
}
</script>

<style>

body {
margin: 0px;
top: 0px;
background-color: #202126;
}
.app {
height: 100vh;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: flex-start;
overflow-x: hidden;
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
margin: 0px; /*参数10px效果：选中标签后标签左移*/
padding: 13px;
padding-right: 10px;
color: lightgray;
text-align: center;
}
.nav-bar-list:hover {
background-color: #404650;
}
.active {
margin: auto;
background-color: #202126;
border-right: 20px solid #367060;
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
display: flex;
justify-content: flex-end;
height: 45px;
width: 100%;
background-color: #367060;
}
.toggle-bar {
position: relative; /* 作用：保持鼠标下移下拉菜单依然出现 */
display: inline-block;
color: lightgray;
line-height: 45px;
width: 100px;
text-align: center;
}
.dp-ctn {
display: none;
position: absolute;
width: 100px;
margin: auto;
background-color: #367060;
}
.toggle-bar:hover .dp-ctn {
display: block;
}
.dp-ctn p {
position: relative;
margin: 0px;
line-height: 35px;
font-size: 14px;
}
.dp-ctn p:hover {
display: block;
background-color: #215245;
}
.triangle:after {
content: "▶";
color: gray;
display: inline-block;
transform: scale(0.5) rotate(90deg);
}
.btn-login {
float: right;
color: lightgray;
line-height: 45px;
width: 100px;
text-align: center;
background-color: #42052f;
}
.btn-login:hover {
background-color: #710a35;
}
.ctn-box {
height: 80%;
display: flex;
justify-content: center;
align-items: center;
color: lightgray;
}
.fn-hidden {
visibility: hidden;
}
.btn-default {
  color: lightgray;
  border-color: #202126;
  background-color:  #367060;
}
button.btn-default:hover {
  color: white;
  background-color: #4d8676;
}
</style>
