import { createRouter, createWebHashHistory  } from "vue-router";

import home from "../components/home.vue"
import torte from "../components/torte.vue"
import kolacinakomad from "../components/kolacinakomad.vue"
import poklonkutije from "../components/poklonkutije.vue"
import kontakt from "../components/kontakt.vue"
import korpa from "../components/korpa.vue"
import NotFound from "../components/404.vue"

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/torte',
        component: torte
    },
    {
        path: '/kolacinakomad',
        component: kolacinakomad
    },
    {
        path: '/poklonkutije',
        component: poklonkutije
    },
    {
        path: '/kontakt',
        component: kontakt
    },
    {
        path: '/korpa',
        component: korpa
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