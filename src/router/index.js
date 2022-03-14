import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
// import SinglePageProduct from "../views/SinglePageProduct.vue";
import Dashboard from "../views/Dashboard.vue";
import AboutDashboard from "../views/AboutDashboard.vue";
import ContactsDashboard from "../views/ContactsDashboard.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  // {
  //   path: "/singlePageProduct",
  //   name: "Single Page Product",
  //   component: SinglePageProduct,
  // },
  {
    path: "/singlePageProduct/:id",
    name: "Single Page Product",
    component: () =>
      import(
        /* webpackChunkName: "singlePageProduct" */ "../views/SinglePageProduct.vue"
      ),
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/contactsDashboard",
    name: "contactsDashboard",
    component: ContactsDashboard,
  },
  {
    path: "/aboutDashboard",
    name: "aboutDashboard",
    component: AboutDashboard,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
