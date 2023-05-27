import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/index')
    },
    // {
    //     path: '/home',
    //     component: () => import('../views/home'),
    //     children: [
    //         {
    //             path: 'map',
    //             component: () => import('../views/floor'),
    //         }
    //     ]
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
