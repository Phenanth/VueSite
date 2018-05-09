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

2018-04-29:

（App.vue）Vuex中lightOn状态预计通过computed属性计算本页表现形式。需要对css样式修改，消除下拉菜单选项的间隔。

2018-04-30:

Login与其他页面切换时存在因边框是否出现导致的选项错位，考虑把.active改写成边框存在但透明。
ctn内容与hd做到hd单独置顶 ctn内容居中，考虑把hd从ctn标签中分出来。
检查input.css内容是否有与index.css冲突的部分，每次点进login回到其他页面后nav-bar就失去导航效果了。

2018-05-07:

Need to build the connection with database by using axios to call functions in the dbHelper.js (Using axios to link the front and the back.)
Also need to write the express server functions (In dbHelper.js) to make responses to the front calls.

![运行模式.jpg](https://upload-images.jianshu.io/upload_images/4945773-441d55a252bca92e.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

2018-05-08

Created some javascript scripts for connecting front side and the back side. Didn't do debugging job, will try afterwards.

2018-05-09

Server can only work when the axios using the GET method to send data.
Need to find the reason.

Later in this day:

Validated the data (username, password) are transfered correctly.
I wonder why `this.$router.push()` rearly worked in `Login.vue` and `Register.vue`

Also optimized the router so when login or register is clicked, the page will instantly jump to the target webpage.

I think I will try to connect database and store the users tomorrow. if I have extra time, I will also do some optimizations in the vuex.
