<template>
<div class="w-full dark:bg-gray-900">
    <Nav />

    <div class="flex">
        <Aside />
        <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">

            <div class="flex text-2xl font-bold items-center justify-between">
                <p class="text-2xl font-bold px-4">Schedule</p>

                <!-- Download pdf file of timetable -->
                <a href="" onclick="window.print();">
                    <i class="fa-solid fa-file-arrow-down p-4 rounded-full hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"></i>
                </a>
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
export default {
    name: 'Schedule',
    components: {
        Aside,
        TimeTableRecordInfo,
        Nav,
        Subjects,
        Faculties
    },
    data() {
        return {
            student: [],
            attendance: [],
            timetable: [],
            dayNameList: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
        }
    },
    async mounted() {
        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        const academicyear = await util.fetchacademicyear()
        console.log(academicyear)

        const student = await util.fetchstuInfo()
        console.log(student.stuId)

        let currayid = await util.fetchacademicyear()
        // currayid=10-1
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}?access_token=${token}`)

        let timetable
        if (result3.status == 200) {
            timetable = result3.data
            const list = _.filter(timetable.ttRecordList, record => {
                return record.timetableRecordInfos.length > 0
            })
            console.log(list[0].timetableRecordInfos)
            console.log(list[0].timetableRecordInfos[0])
            this.timetable = list[0].timetableRecordInfos
        }
    },
    computed: {
        timetableByDay() {

            return dayName => _.filter(this.timetable, ob => {
                const [hours, minutes, seconds] = ob.ttStartTime.split(':');
                const totalSeconds = (+hours) * 60 * 60 + (+minutes) * 60 + (+seconds);
                console.log("---", totalSeconds, ob.ttStartTime)
                return ob.ttDay == dayName
            })
        },
        subjectList() {
            return _.uniqBy(this.timetable, ob => ob.subjectInfos ?.subId)
        },
        facultyList() {
            return _.uniqBy(this.timetable, ob => ob.facultyInfos ?.empId)
        },
    }
}
</script>