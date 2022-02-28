import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Products from "../views/Products.vue";
import SinglePageProduct from "../views/SinglePageProduct.vue";
import Dashboard from "../views/Dashboard.vue";
import ProductDashboard from "../views/ProductDashboard.vue";
import AboutDashboard from "../views/AboutDashboard.vue";
import ContactsDashboard from "../views/ContactsDashboard.vue";
import UsersDashboard from "../views/UsersDashboard.vue";

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
  {
    path: "/singlePageProduct",
    name: "Single Page Product",
    component: SinglePageProduct,
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
    path: "/productsDashboard",
    name: "productsDashboard",
    component: ProductDashboard,
  },
  {
    path: "/contactsDashboard",
    name: "contactsDashboard",
    component: ContactsDashboard,
  },
  {
    path: "/usersDashboard",
    name: "usersDashboard",
    component: UsersDashboard,
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
