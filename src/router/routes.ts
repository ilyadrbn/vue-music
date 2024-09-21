import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/home",
        redirect: { name: "Home" },
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/PageHome.vue"),
    },
    {
        path: "/manage-music",
        alias: "/manage",
        name: "Manage",
        component: () => import("@/pages/PageManage.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/song/:id",
        name: "Song",
        component: () => import("@/pages/PageSong.vue"),
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
