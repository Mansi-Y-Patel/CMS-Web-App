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
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Mansi Y. Patel</h2>
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
                            <img class="size-40 rounded-full" src="../images/Varun.jpg">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Varun N. Oza</h2>
                            <p class="text-black font-bold mb-3">Web Developer</p>
                            <p class="text-black font-semibold mb-1">Department: Computer Engineering</p>
                            <p class="text-black font-semibold">Batch: 2020-2024</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/varun-oza/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
                        </div>
                    </div>
                </div>

                <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                    <div class="mb-6 flex justify-center">
                            <img class="size-40 rounded-full" src="">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Dr. Neha Soni</h2>
                            <p class="text-black font-bold mb-3">Project Mentor</p>
                            <p class="text-black font-semibold mb-1">Head of Department of Computer Engineering</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/neha-soni-01736016b/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
                        </div>
                    </div>
                </div>

                <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                    <div class="mb-6 flex justify-center">
                            <img class="size-40 rounded-full" src="../images/Milin Patel.jpg">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Prof. Milin M. Patel</h2>
                            <p class="text-black font-bold mb-3">Project Guide</p>
                            <p class="text-black font-semibold mb-1">Faculty of Information Technology</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/milin-patel-372b52192/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
                        </div>
                    </div>
                </div>

                <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                    <div class="mb-6 flex justify-center">
                            <img class="size-40 rounded-full" src="../images/Keyur Suthar.jpg">
                    </div>
                    <div class="grid grid-flow-col">
                        <div class="grid justify-center items-center">
                            <h2 class="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Prof. Keyur S. Suthar</h2>
                            <p class="text-black font-bold mb-3">Project Guide</p>
                            <p class="text-black font-semibold mb-1">Faculty of Computer Engineering</p>
                        </div>
                        <div class="text-black items-center">
                            <a href="https://www.linkedin.com/in/keyur-suthar-a7a2b516/" target="_blank"><i class="fa-brands fa-linkedin text-3xl flex justify-center" style="color:#0077b5;"></i></a>
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