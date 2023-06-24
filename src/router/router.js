import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: () =>import("../views/InformationReview.vue"),
    },
    {
      path:"/upload",
      name:"upload",
      component: ()=>import("../views/UploadDocuments.vue")
    },
  ],
});

export default router;
