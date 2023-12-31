import { RouteRecordRaw } from "vue-router";

const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    component: () => import("../components/AppsPage.vue"),
    name: "home",
  },
  {
    path: "/:id/",
    component: () => import("../components/AppDetailPage.vue"),
    name: "app-detail",
  },
  {
    path: "/auth/",
    component: () => import("../components/AuthPage.vue"),
    name: "auth",
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/newapp/",
    component: () => import("../components/NewAppPage.vue"),
    name: "new-app",
  },
];

export default routes;
