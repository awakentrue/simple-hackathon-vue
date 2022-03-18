import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ClickOutside } from "./directives/click-outside.js";
import { Plugin } from "vue-fragment";
import { IconsPlugin } from "@/plugins/icons-plugin";
import "./main.css";

Vue.directive("click-outside", ClickOutside);
Vue.use(IconsPlugin);
Vue.use(Plugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
