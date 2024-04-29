<template>
<div class="w-full dark:bg-gray-900">
    <Nav class="navbar" />

    <div class="flex">
        <Aside class="sidebar "/>

        <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
            <div v-if="loading">
                <Spinner></Spinner>
            </div>

            <div class="flex text-2xl font-bold items-center justify-between">
                <p class="text-2xl font-bold px-4">Schedule</p>

                <!-- Download pdf file of timetable -->
                <button onclick="window.print()">
                    <i class="fa-solid fa-file-arrow-down p-4 rounded-full hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"></i>
                </button>
            </div>

            <!-- Timetable -->
            <div v-for="dayName in dayNameList" class="p-2 m-2 w-full">
                <h2 class="font-bold m-1">{{ dayName }}</h2>
                <div class="grid lg:grid-flow-col" v-if="timetable">
                    <div v-for="record,index in timetableByDay(dayName)" class="m-1">
                        <div>
                            <TimeTableRecordInfo :record="record"></TimeTableRecordInfo>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-4 my-3 lg:grid lg:grid-cols-2 w-full gap-3">

                <!-- Subject list -->
                <div class="w-full shadow-sm shadow-gray-500 rounded-lg p-1 m-2">
                    <div class="flex font-medium px-2 items-center">
                        <i class="fa-solid fa-book p-1"></i>
                        <p class="p-1">Subjects</p>
                    </div>
                    <div class="gap-2 m-4">
                        <div v-for="record in subjectList" class="">
                            <Subjects :record="record" class=""></Subjects>
                        </div>
                    </div>
                </div>

                <!-- Faculties -->
                <div class="w-full shadow-sm shadow-gray-500 rounded-lg p-1 m-2">
                    <div class="flex font-medium px-2 items-center">
                        <i class="fa-solid fa-graduation-cap p-1"></i>
                        <p class="p-1">Faculties</p>
                    </div>
                    <div class="m-4">
                        <div v-for="record in facultyList" class="">
                            <Faculties :record="record"></Faculties>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
import 'flowbite';
import _ from 'lodash'
import axios from '../axios.js';
import Aside from './aside.vue'
import Nav from './nav.vue'
import util from '../util.js'
import TimeTableRecordInfo from './timetablerecord.vue';
import Subjects from './subjects.vue'
import Faculties from './faculties.vue'
import Spinner from './spinner.vue'
export default {
    name: 'Schedule',
    components: {
        Aside,
        TimeTableRecordInfo,
        Nav,
        Subjects,
        Faculties,
        Spinner
    },
    data() {
        return {
            student: [],
            attendance: [],
            timetable: [],
            loading: false,
            dayNameList: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
        }
    },
    async mounted() {
        this.loading = true
        try{
            const token = JSON.parse(localStorage.getItem('token'))
            const academicyear = await util.fetchacademicyear()
            const student = await util.fetchstuInfo()

        let currayid = await util.fetchacademicyear()
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}`)

        let timetable
        if (result3.status == 200) {
            timetable = result3.data
            const list = _.filter(timetable.ttRecordList, record => {
                return record.timetableRecordInfos.length > 0
            })
            this.timetable = list[0].timetableRecordInfos
        }
        } 
        catch(error) {
            console.log("Error", error)
        }
        finally {
            this.loading = false
        }  
    },
    computed: {
        timetableByDay() {
            return dayName =>{
                const temp = _.filter(this.timetable, ob => {
                    return ob.ttDay == dayName
                })

                return _.sortBy(temp,ob => {
                    const [hours, minutes, seconds] = ob.ttStartTime.split(':');
                    const hours1= parseInt(hours) 
                    const minutes1= parseInt(minutes) 
                    const totalSeconds = ((hours1>=1 && hours1<7)?(hours1+12):hours1) * 3600 + (minutes1) * 60;
                    return totalSeconds
                })
            } 
        },
        subjectList() {
            return _.uniqBy(this.timetable, ob => ob.subjectInfos ?.subId)
        },
        facultyList() {
            return _.uniqBy(this.timetable, ob => ob.facultyInfos ?.empId)
        },
    },
}
</script>