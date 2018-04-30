# myweb

> 学习VueJS框架并搭建个人网站的练习工程。

## 进度更新

2018-04-29:

（App.vue）Vuex中lightOn状态预计通过computed属性计算本页表现形式。需要对css样式修改，消除下拉菜单选项的间隔。

2018-04-30:

Login与其他页面切换时存在因边框是否出现导致的选项错位，考虑把.active改写成边框存在但透明。
ctn内容与hd做到hd单独置顶 ctn内容居中，考虑把hd从ctn标签中分出来。

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
