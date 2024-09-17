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
        alias: "/manage",
        name: "Manage",
        component: () => import("@/pages/ManagePage/AppManage.vue"),
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
