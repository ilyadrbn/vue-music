import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        redirect: { name: "Home" },
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/HomePage/AppHome.vue"),
    },
    {
        path: "/manage-music",
        name: "Manage",
        component: () => import("@/pages/ManagePage/AppManage.vue"),
    },
    {
        path: "/:catchAll(.*)*",
        redirect: { name: "Home" },
    },
];

export default routes;
