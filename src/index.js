import { createRouter, createWebHistory } from "vue-router";
import Dashboard from './src/dashboard.vue'
import Academia from './components/academia.vue'
import 'flowbite';

const routes = [
    {
        path:'/dashboard',
        component: Dashboard,
        children:[
            {
                path: '/academia',
                name: 'Academia',
                component: Academia
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router