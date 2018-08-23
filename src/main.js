import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import 'vue-ydui/dist/ydui.base.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-easytable/libs/themes-base/index.css'
import {VTable,VPagination} from 'vue-easytable'

Vue.use(ElementUI);
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

// import ydui from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';

import App from './App'
import plugin from './plugin';
import routes, {beforeEach, afterEach} from './routes.js';
import api from './api'
//default as tt,  console.log(`${tt} == ${routes}, ${beforeEach}, ${afterEach}`);

//禁止网页嵌入
if (top.location.href != location.href) { //&& location.href != ''
  top.location.href = location.href;
}

//check login 初始化用户会话状态
// state.user.token = methods.getCookieToken();
// kit.info().end(function (err, res) {
//   if (err || !res.ok) {
//     state.user.auth = false;
//     return;
//   }
//   state.user.auth = true;
// });
// plugin.methods.callApi('/user/info', {}, function (ok, data, msg) {
// if (ok) {
//    plugin.state.user = data;
// } else {
//    window.location.hash = '#/user/login';
// }
//    return false;
// }, true);

if (!window.Promise) {
  require('es6-promise').polyfill();
}

// FastClick.attach(document.body);
// document.addEventListener && document.addEventListener('DOMContentLoaded', function () {
//   FastClick.attach(document.body);
// }, false);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(plugin);

// Vue.use(ydui);

Vue.filter( 'formatNumber' , function(data,n) {
  return data.toFixed(n);  //四舍五入,参数为保留的位数;
});

let router = new VueRouter({
  routes
  //,strict: process.env.NODE_ENV !== 'production'
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

//初始入口路由路径(hash模式) //?!#
// let validReg = new RegExp('^(#/bus/form|#/bus/order|#/bus/orderins|#/boat/form|#/boat/order|#/msg|#/tran|#/user|#/admin)');
// if (!validReg.test(window.location.hash)) {
//   window.location.hash = '#/';
// }

let app = new Vue({
  el: '#app',
  //store,
  mode: "hash", //mode: 'history', base: __dirname,
  router,
  template: '<App/>',
  //components: {App: require('./App')},
  components: {App}
  //, render: h => h(App)
});

//隐藏加载提示
let lb = document.getElementById('_gLoading');
if (lb) {
  lb.style.display = 'none';
}
