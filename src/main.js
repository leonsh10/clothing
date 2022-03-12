import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import {BootstrapVueIcons } from 'bootstrap-vue'
import Vuetify from 'vuetify';
Vue.use(Vuetify);


Vue.use(BootstrapVueIcons)
import "./services/firebase";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify : new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
