import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios');

// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.use(ElementUI);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount("#app");
