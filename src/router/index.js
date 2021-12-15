import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot",
    component: () => import("../views/Forgot.vue"),
    meta: {
      layout: "auth",
    },
  },
  {
    path: "/book/:id",
    name: "BookDetails",
    component: () => import("../views/BookDetails.vue"),
  },
  {
    path: "/book-category/:id",
    name: "BookCategory",
    component: () => import("../views/BookCategory.vue"),
  },
  {
    path: "/search/:string",
    name: "SearchResult",
    component: () => import("../views/SearchResult.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL || "/",
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
  routes,
});

export default router;
