import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import products from "./modules/products";
import about from "./modules/about";
import contact from "./modules/contact";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    products,
    about,
    contact,
  },
});
