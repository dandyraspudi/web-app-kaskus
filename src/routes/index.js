import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: 'list-menu',
        name: 'Main Layout',
        component: () => import(/* webpackChunkName: "MainLayout" */ '../layouts/MainLayout.vue'),
        children: [
            {
                path: 'list-menu',
                name: 'List Menu',
                component: () => import(/* webpackChunkName: "List-Menu" */ '../views/ListMenu.vue'),
            },
            {
                path: 'detail-menu/:id_menu',
                name: 'Detail Menu',
                component: () => import(/* webpackChunkName: "Detail-Menu" */ '../views/DetailMenu.vue'),
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;