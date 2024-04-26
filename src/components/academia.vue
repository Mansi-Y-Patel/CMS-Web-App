<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <div class="" v-if="loading">
            <Spinner></Spinner>
        </div>
        
        <div class="flex text-2xl font-bold items-center justify-between">
            <p class="text-2xl font-bold px-4">Academia</p>

            <!-- Link to Attendance page -->
            <router-link to="/academia/attendance" :class="{ active: $route.path === '/academia/attendance' }">
                <i class="fa-solid fa-chart-simple p-4 rounded-full hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"></i>
            </router-link>
        </div>

        <section class="bg-white dark:bg-gray-900">

            <!-- Subjects -->
            <div class="lg:grid lg:grid-cols-3">
                <div v-for="subject in subjects" class="m-2">
                    <button @click="navigateto(subject)" class="w-full text-left p-4 lg:h-36 bg-blue-600 text-white rounded-lg shadow-gray-400 shadow-md hover:bg-blue-700 dark:bg-gray-800">
                        <h2 class="mb-2 text-xl font-extrabold text-white">
                            {{ subject.subAlias }}
                        </h2>
                        <div class="flex justify-between items-center">
                            <div class="grid items-center">
                                <span class="font-small dark:text-white">
                                    {{ subject.subName }}
                                </span>
                                <span class="font-small dark:text-white">
                                    {{ subject.subCode }}
                                </span>
                            </div>
                            <i class="fa-solid fa-arrow-right font-bold text-2xl"></i>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<script>
import 'flowbite';
import _ from 'lodash'
import axios from '../axios.js'
import Aside from './aside.vue'
import Nav from './nav.vue'
import util from '../util.js'
import Spinner from './spinner.vue'

export default {
    name: 'Academia',
    components: {
        Aside,
        Nav,
        Spinner
    },
    data() {
        return {
            attendance: [],
            subjects: [],
            loading: false,
        }
    },
    async mounted() {
        this.loading = true
        try {
            const token = JSON.parse(localStorage.getItem('token'))
            const academicyear = await util.fetchacademicyear()
            const student = await util.fetchstuInfo()
            let currayid = await util.fetchacademicyear()
            let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}`)
            let timetable
            if (result3.status == 200)
                timetable = result3.data
                const list = _.find(timetable.ttRecordList, record => {
                    return record.timetableRecordInfos.length > 0
                })
                const subjectlist= _.uniqBy(list.timetableRecordInfos,ob => {
                    return ob.subjectInfos.subName 
                })

                this.subjects = []
                subjectlist.map(ob => {
                    this.subjects.push(ob.subjectInfos)
                })
            }
            catch(error) {
                console.log("Error", error)
            }
            finally {
                this.loading = false
            }
    },
    methods: {
        navigateto(subject){
            this.$router.push(`/academia/subjectinfo/${subject.subId}`)
        }
    }
}
</script>