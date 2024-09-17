import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

import { useUserStore } from "@/stores/user-store";

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: "text-yellow-500", // additional class for active link
});

route.beforeEach((to, from, next) => {
    if (!to.meta.requiresAuth) {
        next();
        return;
    }
    const userStore = useUserStore();
    if (userStore.userLoggedIn) {
        next();
    } else {
        next({ name: "Home" });
    }
});

export default route;
