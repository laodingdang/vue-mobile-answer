import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./config/http";

Vue.config.productionTip = false;
Vue.use(http);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
