<template>
<Nav @toggle="isOpen=!isOpen" />
<div class="flex">
    <Aside :class="[isOpen?'flex':'md:flex hidden']" />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <p class="text-2xl font-bold px-4">Circulars</p>
        <section class="p-2 bg-white dark:bg-gray-900">
            <div class="py-6 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
                <div class="font-semibold">No Circulars</div>
                <!-- <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-y-0">
                    <div class="shadow-md shadow-gray-400 rounded-lg p-6">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-lg font-bold dark:text-white">Fees Pending</h3>
                            <i class="fa-solid fa-paperclip text-lg"></i>
                        </div>
                        <p class="text-gray-500 dark:text-gray-400">
                            Deadline for the payment of fees for semester 7
                        </p>
                    </div>
                    <div class="shadow-md shadow-gray-400 rounded-lg p-6">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-lg font-bold dark:text-white">Scholarship Guidelines</h3>
                            <i class="fa-solid fa-paperclip text-lg"></i>
                        </div>
                        <p class="text-gray-500 dark:text-gray-400">
                            eligibility criteria for scholarships and guidelines to apply for them
                        </p>
                    </div>
                    <div class="shadow-md shadow-gray-400 rounded-lg p-6">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-lg font-bold dark:text-white">Placement details</h3>
                            <i class="fa-solid fa-paperclip text-lg"></i>
                        </div>
                        <p class="text-gray-500 dark:text-gray-400">
                            List of companies visiting for placements
                        </p>
                    </div>
                    <div class="shadow-md shadow-gray-400 rounded-lg p-6">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-lg font-bold dark:text-white">Academic calendar</h3>
                            <i class="fa-solid fa-paperclip text-lg"></i>
                        </div>
                        <p class="text-gray-500 dark:text-gray-400">
                            Academic calendar for 7th semester including holiday list
                        </p>
                    </div>
                    <div class="shadow-md shadow-gray-400 rounded-lg p-6">
                        <div class="flex justify-between mb-2">
                            <h3 class="text-lg font-bold dark:text-white">Internship review</h3>
                            <i class="fa-solid fa-paperclip text-lg"></i>
                        </div>
                        <p class="text-gray-500 dark:text-gray-400">
                            Schedule for the reviews during final
                        </p>
                    </div>
                    
                </div> -->
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
    name: 'Circulars',
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
