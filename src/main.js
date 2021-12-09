import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import uk from "uikit";
import responsive from "vue-responsive";
import { Plugin } from 'vue-fragment'
import VueWindowSize from 'vue-window-size';
import ukIcons from "uikit/dist/js/uikit-icons";
import "./assets/fontawesome/css/all.css";

Vue.config.productionTip = false;

uk.use(ukIcons);
Vue.use(Plugin)
Vue.use(responsive);
Vue.use(VueWindowSize);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
