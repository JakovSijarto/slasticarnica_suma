import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/home.vue"
import NotFound from "../components/404.vue"

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || { top:0 }
      }
})

export default router 