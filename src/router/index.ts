import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { localCache } from "@/utils/index";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue"),
    children: []
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-Found",
    component: () => import("@/views/notFound/notFound.vue")
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to, from) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token", "sessionStorage");
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    return "/main/analysis/overview";
  }
});
export default router;
