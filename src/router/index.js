import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Index,
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../pages/List.vue"),
    },
  ],
});

export default router;
