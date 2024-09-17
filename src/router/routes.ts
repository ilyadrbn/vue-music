import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        redirect: { name: "Home" },
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/AppHome.vue"),
    },
    {
        path: "/manage-music",
        alias: "/manage",
        name: "Manage",
        component: () => import("@/pages/AppManage.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: { name: "Home" },
    },
];

export default routes;
