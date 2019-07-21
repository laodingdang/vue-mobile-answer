import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import http from "./config/http";
import "./style/common.css";
import "./config/rem.js";
import "./mock.js";

Vue.use(http);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
