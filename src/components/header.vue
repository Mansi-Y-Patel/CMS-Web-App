<template>
    <!-- <router-link v-if="isauth" :to="{path:'/dashboard'}">Dashboard</router-link> -->
    <!-- <router-link v-if="!isauth" :to="{path:'/login'}">Login</router-link> -->
    <!-- <button v-else @click="logout">Logout</button> -->
</template>

<script>
 import router from '../router';
    export default {
    name: 'Header',
    data: () => {
        return {
            isauth: localStorage.getItem("token")&&localStorage.getItem("token")!=null,
        };
    },
    methods: {
        logout() {
            localStorage.clear()
            router.push('/login')
        }
    }
}
</script>