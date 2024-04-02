<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <p class="text-2xl font-bold px-4 mb-5">Explore more about us!</p>
        <section class="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-2 gap-3">

            <!-- Placement -->
            <div class="p-8 items-center  rounded-lg shadow-sm shadow-gray-700">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">Placement</h2>
                    <p class="text-black font-medium mb-3">Explore the opportunities</p>
                    <p class="text-black mb-1">Hundreds of companies visiting every year in search of talented students.</p>
                </div>
                <!-- <div class="grid grid-cols-2 gap-4">
                    <img class="w-full rounded-lg" src="../images/placement/placement3.jpeg">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../images/placement/Placement_cell1.jpeg">
                </div> -->

                <div id="gallery" class="relative w-full" data-carousel="slide">
                    <!-- Carousel wrapper -->
                    <div class="relative h-56 overflow-hidden md:h-96">
                        <!-- Item 1 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                        <!-- Item 2 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                        <!-- Item 3 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                        <!-- Item 4 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                        <!-- Item 5 -->
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        </div>
                    </div>
                    <!-- Slider controls -->
                    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </div>

            <!-- Prakarsh -->
            <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">Prakarsh</h2>
                    <p class="text-black font-medium mb-3">A National Level Technical Symposium</p>
                    <p class="text-black mb-1">Workshops and events speacially design to make students learn with fun.</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <img class="w-full rounded-lg" src="../images/prakarsh/prakarsh1.png">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../images/prakarsh/prakarsh2.jpg">
                </div>
            </div>

            <!-- Malhar -->
            <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">Malhar</h2>
                    <p class="text-black font-medium mb-3">Annual function</p>
                    <p class="text-black mb-1">Talent shows conducted by our students as well as teachers.</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <img class="w-full rounded-lg" src="../images/malhar/Malhar.png">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../images/malhar/malhar2.png">
                </div>
            </div>

            <!-- Spandan -->
            <div class="p-8 items-center rounded-lg shadow-sm shadow-gray-700">
                <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">Spandan</h2>
                    <p class="text-black font-medium mb-3">College Level Sports Festival</p>
                    <p class="text-black mb-1">Students from all the departments compete with each other in various sports including Cricket, Football, Volleball and many more.</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <img class="w-full rounded-lg" src="../images/spandan.jpg">
                    <img class="mt-4 w-full lg:mt-10 rounded-lg" src="../images/spandan2.jpeg">
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<script>
import 'flowbite';
import Aside from './aside.vue'
import Nav from './nav.vue'
export default {
    name: 'Explore',
    components: {
        Aside,
        Nav,
    }
}
</script>
