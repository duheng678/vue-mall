import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

import toast from "components/common/toast";
Vue.use(toast);
Vue.use(VueLazyload, {
  loading: require("./assets/img/common/placeholder.png")
});

Vue.config.productionTip = false;

FastClick.attach(document.body);
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
