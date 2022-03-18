import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile"),
  },
  {
    path: "/messages",
    component: () => import("@/views/Messages"),
  },
  {
    path: "/settings",
    component: () => import("@/views/Settings"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
