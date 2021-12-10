import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import UiKit from "uikit";
import responsive from "vue-responsive";
import { Plugin } from 'vue-fragment'
import VueWindowSize from 'vue-window-size';
import UiKitIcons from "uikit/dist/js/uikit-icons";
import "./assets/fontawesome/css/all.css";
import Default from "./layouts/Default"
import Auth from "./layouts/Auth"

Vue.config.productionTip = false;

UiKit.use(UiKitIcons);
Vue.use(Plugin)
Vue.use(responsive);
Vue.use(VueWindowSize);

Vue.component('default-layout', Default);
Vue.component('auth-layout', Auth);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
