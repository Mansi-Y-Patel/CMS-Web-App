import Login from './login.vue'
import Dashboard from './dashboard.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Academia from './components/academia.vue'
import Explore from './components/explore.vue'
import Circulars from './components/circulars.vue'
import Profile from './components/profile.vue'
import Schedule from './components/schedule.vue'
import SubjectInfo from './components/subjectinfo.vue'
import Attendance from './components/attendance.vue'
import 'flowbite';

// import App from './App.vue'

const routes = [
    // { path: '/', component: App, meta: { requireauth: false } },
    // children: [
    //     { 
    //       path: '/dashboard/schedule', component: Schedule  }
    //   ]
    { path: '/dashboard', component: Dashboard, meta: { requireauth: true },  },
    { path: '/login', component: Login, meta: { requireauth: false } },
    { path: '/', component: Login, meta: { requireauth: false } },
    { path: '/academia', component: Academia, meta: { requireauth: true } },
    { path: '/explore', component: Explore, meta: { requireauth: true } },
    { path: '/circulars', component: Circulars, meta: { requireauth: true } },
    { path: '/profile', component: Profile, meta: { requireauth: true } },
    { path: '/schedule', component: Schedule, meta: { requireauth: true } },
    { path: '/subjectinfo/:id?', component: SubjectInfo, meta: { requireauth: true } },
    { path: '/attendance', component: Attendance, meta: { requireauth: true } },  
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'vue-active-link',
});

console.log(routes)
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireauth)) {
        if (localStorage.getItem("token") && localStorage.getItem("token") != null) {
            next()
            return
        }
        next('/login')
    }
    else {
        next()
    }
})

export default router