<template>
    <Nav @toggle="isOpen=!isOpen" />
    <div class="flex">
        <Aside :class="[isOpen?'flex':'md:flex hidden']" />
        <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
            <p class="text-2xl font-bold px-4 mb-5">Meet our Developer Team</p>
            <section class="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-2 gap-6 m-8">
    
                <!-- Mansi -->
                <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                    <div class="mb-6 flex justify-center">
                            <img class="size-40 rounded-full" src="../images/photo.jpg">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Mansi Patel</h2>
                            <p class="text-black font-bold mb-3">Web Developer | UI/UX designer</p>
                            <p class="text-black font-semibold mb-1">Department: Computer Engineering</p>
                            <p class="text-black font-semibold">Batch: 2020-2024</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/mansi-y-patel/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
                        </div>
                    </div>
                </div>

                <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                    <div class="mb-6 flex justify-center">
                            <img class="size-40 rounded-full" src="../images/">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Varun Oza</h2>
                            <p class="text-black font-bold mb-3">Web Developer</p>
                            <p class="text-black font-semibold mb-1">Department: Computer Engineering</p>
                            <p class="text-black font-semibold">Batch: 2020-2024</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/varun-oza/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
                        </div>
                    </div>
                </div>
    
            </section>
        </main>
    </div>
    </template>
    
    <script>
    import Aside from './aside.vue'
    import Nav from './nav.vue'
    
    export default {
        name: 'AboutUs',
        components: {
            Aside,
            Nav,
        },
        data() {
            return {
                isOpen: false,
            };
        },
    }
    </script>