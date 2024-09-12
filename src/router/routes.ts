import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/HomePage/AppHome.vue"),
    },
];

export default routes;
