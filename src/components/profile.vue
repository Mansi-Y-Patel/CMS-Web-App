<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <div class="flex text-2xl font-bold items-center justify-between">
            <p class="text-2xl font-bold px-4">Profile</p>

            <!-- Link to settings page -->
            <a href="">
                <i class="p-4 fa-solid fa-gear rounded-full hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"></i>
            </a>
        </div>

        <div class="gap-3 px-4">
            <div class="w-full">
                <!-- :src=[student.stuPhoto]  -->
                <div class="gap-1 m-1 items-center lg:grid lg:grid-cols-2 bg-white">
                    <!-- <div class="">
                        <img src="../images/photo.jpg" alt="Student Profile Picture" class="rounded-full w-44">
                    </div> -->

                    <!-- General Information -->
                    <div class="p-5">
                        <h3 class="text-md font-semibold">{{ student.stuFirstname }} {{student.stuLastname }}</h3>
                        <p>Department: {{ dept.deptName }} </p>
                        <p>Semester: {{student.fcurrsem}}</p>
                        <p>Class: </p>
                        <p>Batch: </p>
                        <p>Enrollment No.: {{student.stuEnroll}}</p>
                    </div>

                    <!-- Feedback form -->
                    <a href="https://forms.gle/UdqJJfG8cuhaFvaRA" target="_blank" class="my-2">
                        <div class="flex justify-between shadow-sm shadow-gray-500 rounded-lg p-5 items-center hover:bg-gray-100">
                            <div class="">
                                <div class="text-md font-medium p-2">
                                    Feedback Form
                                </div>
                                <div class="text-gray-500 p-2">
                                    Provide us your valuable feedback
                                </div>
                            </div>
                            <div class="px-3">
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="w-full p-4">
                <section class="bg-white dark:bg-gray-900">
                    <div class="">
                        <form action="#" class="overflow-hidden">

                            <!-- Personal Information -->
                            <h2 class="mb-8 text-xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
                            <div class="grid gap-4 sm:grid-cols-3 sm:gap-6 border-gray-300 border-1">
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuFirstname }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Middle Name</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuMiddlename }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuLastname }}</p>
                                </div>

                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuBloodgroup }}</p>
                                </div>

                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{student.stuDob}}</p>
                                </div>

                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{student.stuGender}}</p>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuNationality }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Religion</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuReligion }}</p>
                                </div>

                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Caste</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCast }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCategory }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile No.</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuMobile }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aadhar Card No.</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuAadharNumber }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail ID</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuEmail }}</p>
                                </div>
                            </div>

                            <!-- Permanent Address -->
                            <h2 class="my-8 text-xl font-bold text-gray-900 dark:text-white">Permanent Address</h2>
                            <div class="grid gap-4 sm:grid-cols-4 sm:gap-6">
                                <div class="sm:col-span-4">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuPerAddress }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuPerPincode }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuPerCity }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuPerState }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuPerCountry }}</p>
                                </div>
                            </div>

                            <!-- Current Address -->
                            <h2 class="my-8 text-xl font-bold text-gray-900 dark:text-white">Current Address</h2>
                            <div class="grid gap-4 sm:grid-cols-4 sm:gap-6">
                                <div class="sm:col-span-4">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCurrAddress }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCurrPincode }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCurrCity }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCurrState }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuCurrCountry }}</p>
                                </div>
                            </div>

                            <!-- Academic Information -->
                            <h2 class="my-8 text-xl font-bold text-gray-900 dark:text-white">Academic Information</h2>
                            <div class="grid gap-4 sm:grid-cols-3 sm:gap-6">
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ dept.deptName }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Alias</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ dept.deptAlias }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Code</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ dept.deptCode }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch Info.</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{  }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gujcet seat No.</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuGujecet }}</p>
                                </div>
                                <div class="w-full">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ACPC Rank</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuACPC }}</p>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last School</label>
                                    <p class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">{{ student.stuLastSchoolDetail }}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </main>
</div>
</template>

<script>
import 'flowbite';
import axios from '../axios.js'
import Aside from './aside.vue'
import Nav from './nav.vue'
export default {
    name: 'Profile',
    components: {
        Aside,
        Nav,
    },
    data() {
        return {
            student: [],
            dept:[],
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
        axios.defaults.headers.common = {
            'Authorization': `Bearer ${token}`
        }
        let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
        if (result.status == 200)
            this.student = result.data[0]
        console.log(this.student)

        let result1 = await axios.get(`/DepartmentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
        if (result1.status == 200)
            this.dept = result1.data[0]
        console.log(this.dept)
    },
}
</script>