import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
<<<<<<< HEAD
import vuetify from './plugins/vuetify';

=======
import vuetify from "./plugins/vuetify";
>>>>>>> c88ab32d10192104f33dcc73bbd520dbeaf74390
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
<<<<<<< HEAD

import {BootstrapVueIcons } from 'bootstrap-vue'

=======
import { BootstrapVueIcons } from "bootstrap-vue";
>>>>>>> c88ab32d10192104f33dcc73bbd520dbeaf74390

Vue.use(BootstrapVueIcons);
import "./services/firebase";
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
