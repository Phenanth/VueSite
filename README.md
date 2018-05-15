# myweb

> 学习VueJS框架并搭建个人网站的练习工程。

## Build Setup

```
# If you are having problems for the eslint, try the following commands in your project file:
sudo npm install eslint -g
eslint --init

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run server
cd server
node server.js

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 进度更新

### 2018-04-29:

（App.vue）Vuex中lightOn状态预计通过computed属性计算本页表现形式。需要对css样式修改，消除下拉菜单选项的间隔。

### 2018-04-30:

Login与其他页面切换时存在因边框是否出现导致的选项错位，考虑把.active改写成边框存在但透明。
ctn内容与hd做到hd单独置顶 ctn内容居中，考虑把hd从ctn标签中分出来。
检查input.css内容是否有与index.css冲突的部分，每次点进login回到其他页面后nav-bar就失去导航效果了。

### 2018-05-07:

Need to build the connection with database by using axios to call functions in the dbHelper.js (Using axios to link the front and the back.)
Also need to write the express server functions (In dbHelper.js) to make responses to the front calls.

![运行模式.jpg](https://upload-images.jianshu.io/upload_images/4945773-441d55a252bca92e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 2018-05-08

Created some javascript scripts for connecting front side and the back side. Didn't do debugging job, will try afterwards.

### 2018-05-09

Server can only work when the axios using the GET method to send data.
Need to find the reason.

Later in this day:

Validated the data (username, password) are transfered correctly.
I wonder why `this.$router.push()` rearly worked in `Login.vue` and `Register.vue`

Also optimized the router so when login or register is clicked, the page will instantly jump to the target webpage.

I think I will try to connect database and store the users tomorrow. if I have extra time, I will also do some optimizations in the vuex.

### 2018-05-10

Started work on the database, connected with it.

### 2018-05-12

Hot overload effect of vuejs failed, need to check why.

Today worked on the login and the register SQL query, may need to optimize the way accounts were stored in the database, and the validating of an e-mail adress during the register period.

Afterwards I will try to design the loged-in UI and the Login & Register page UI, maybe even the page to show user's information.

Re-install the vue-cli, and the hot overload effect was working again.

### 2018-05-13

Today's work:
- Created localStorage after loged in. (Done)
- Shared the token in the vuex. (Done)
- If time's enough, design the loged in UI. (Done)

But there are some problems, such as the vuex-store acctually is not effective in sharing the state of token because whether the user is loged in is judged by a compute attribution which returns the data in the localStorage.

Next time I may work on the authentication of the token, in whether it is a correct token aspect and if it is still in time limit aspect (For now, the user will only be logged out mannually.) I also need to optimize the `createToken.js` so that it won't return the same token all the time.

### 2018-05-14

Today's work:
- Added logic to judge if the token is still in time or exists.
- Created "User-Info" page.
- Added logic in "User-Info" & "Login" page.
Which bans the user from using the page when user is not logged (former case) or logged in (latter case).

Some problems:
- It is not able to refresh the token state in vuex
Once I wanted to refresh it in `App.vue`, the log-out logic will be not effective (maybe it's because I also use vuex to act as the log-out logic.)

It's won't be a big deal if I don't use the veux to share the token, but it is exactly a redundancy, which is annoying.

Maybe I will start to design the home page, which means I will add some test-data into the database and select them out to display them, It may seems like `nian`, I haven't decided yet.

Or I will optimize the registering logic and add some validation to it, cause it is too simple now.

Laterly I finished the validating logic,and there are some problems I met:
- `emailer.js` will always return a valid code either the mail was sent or not.
Which means I can't transfer the error state of the email sending process, so some times the user will be puzzled: why I can't get my validating email? (Sometimes it's because the email adress is not valid, but I can't transfer the state of the email-sending so users usually won't know this.)

And There is still a lot things to do with optimizing the content of the validating email. Also need to make a decision on what I want to display on the home page or on other components. 

### 2018-05-15

- Designed the `Home.vue` and `U.I.vue` and some data tables.

Need to fix the nav-bar and the header.