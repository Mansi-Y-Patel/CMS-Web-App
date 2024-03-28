<template>
<aside class="pt-16 fixed z-40 h-screen w-52 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidenav" id="drawer-navigation">

    <div class="px-3 dark:bg-gray-800">
        <ul class="mx-2 my-4" id="sidebar">

            <!-- Dashboard -->
            <li class="my-4">
                <router-link to="/dashboard" :class="{ active: $route.path === '/dashboard' }" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-solid fa-cubes "></i>
                    <p class="ml-6 font-medium">Dashboard</p>
                </router-link>
            </li>

            <!-- Academia -->
            <li class="my-4">
                <router-link to="/academia" :class="{ active: $route.path === '/academia' }" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-solid fa-graduation-cap icon"></i>
                    <p class="ml-6 font-medium">Academia</p>
                </router-link>
            </li>

            <!-- Explore -->
            <li class="my-4">
                <router-link to="/explore" :class="{ active: $route.path === '/explore' }" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-solid fa-magnifying-glass icon"></i>
                    <p class="ml-6 font-medium">Explore</p>
                </router-link>
            </li>

            <!-- Circulars -->
            <li class="my-4">
                <router-link to="/circulars" :class="{ active: $route.path === '/circulars' }" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-regular fa-file icon"></i>
                    <p class="ml-6 font-medium">Circulars</p>
                </router-link>
            </li>

            <!-- Profile -->
            <li class="my-4">
                <router-link to="/profile" :class="{ active: $route.path === '/profile' }" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-regular fa-circle-user icon"></i>
                    <p class="ml-6 font-medium">Profile</p>
                </router-link>
            </li>

            <!-- Logout button -->
            <li class="my-4">
                <a href="" class="flex items-center p-2 text-base font-normal rounded-full dark:text-white hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 group">
                    <i class="fa-solid fa-right-from-bracket icon"></i>
                    <span class="ml-6 font-medium" @click="logout">Logout</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
</template>

<script>
// import { mapWritableState } from 'pinia'
// import { useUserStore } from '../store'
// const store = useUserStore()
export default {
    name: 'Aside',
    methods: {
        logout() {
            localStorage.clear()
            router.push('/login')
        }
    },
}
</script>

<style>
.router-link-active {
    --tw-bg-opacity: 1;
    background-color: rgb(28 100 242 / var(--tw-bg-opacity));
    color: white;
}
</style>