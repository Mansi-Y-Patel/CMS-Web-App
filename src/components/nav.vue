<template>
<nav class="fixed bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
        <div class="flex items-center w-full">
            <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" class="p-2 mr-2 rounded-full cursor-pointer md:hidden hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                <svg aria-hidden="true" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
                <span class="sr-only">Toggle sidebar</span>
            </button>

            <div class="flex justify-between w-full">
                <div class="flex items-center mr-4">
                    <img src="../images/logo1.png" class="mr-3 h-8" />
                    <span class="self-center lg:text-xl font-semibold whitespace-nowrap dark:text-white text-wrap">Sardar
                        Vallabhbhai Patel Institute of Technology</span>
                </div>
                <div class="bg-blue-600 lg:mx-1 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full dark:bg-gray-600">
                    <div class="font-medium  text-white dark:text-gray-300">{{fn}}{{ln}}</div>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import axios from '../axios.js';
import 'flowbite';
export default {
    name: 'Nav',
    data() {
        return {
            student: [],
            fn: [],
            ln: [],
        }
    },
    async mounted() {
        let query = {
            where: {
                stuEmail: localStorage.getItem("email")
            }
        }
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
        if (result.status == 200)
            this.student = result.data[0]
        console.log(this.student)

        this.fn = result.data[0].stuFirstname.charAt(0)
        this.ln = result.data[0].stuLastname.charAt(0)
    },
}
</script>
