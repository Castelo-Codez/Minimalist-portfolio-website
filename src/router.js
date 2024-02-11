import {createRouter, createWebHistory} from "vue-router";
const $routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/Home.vue"),
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: () => import("./views/portfolio.vue"),
    },
    {
        path: "/contact-me",
        name: "contact",
        component: () => import("./views/contact.vue"),
    },
];
const $router = createRouter({
    history: createWebHistory(),
    routes: $routes,
});

export default $router;
