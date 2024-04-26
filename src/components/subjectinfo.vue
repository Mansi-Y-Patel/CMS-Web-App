<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full px-4 bg-white md:ml-52 h-auto pt-20">
        <div class="text-2xl font-bold px-4">
            {{ subjectinfo?subjectinfo.subName:"subject not found" }}
        </div>

        <div class="lg:grid lg:grid-cols-2 mt-4">

            <!-- Theory attendance -->
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Theory</p>
                <div class="" v-if="chartData && chartData.length>1">
                    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>
                    <div class="opacity-75 z-50">
                        <div class="flex justify-center items-center ">
                            <div class="fas fa-spinner fa-spin fa-2x text-blue-700"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Practical attendance -->
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Practical</p>
                <div class="" v-if="chartDatap && chartDatap.length>1">
                    <GChart type="BarChart" :data="chartDatap" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>
                    <div class="opacity-75 z-50">
                        <div class="flex justify-center items-center ">
                            <div class="fas fa-spinner fa-spin fa-2x text-blue-700"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lesson plan -->
            <!-- <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Lesson plan</p>
            </div> -->

            <!-- Lab plan -->
            <!-- <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Lab plan</p>
            </div> -->
        </div>

        <!-- Reference books -->
        <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
            <p class="text-lg font-semibold p-2">Reference Books</p>
            <div class="mx-5 my-2" v-for="books in refbook">
                {{books}}
            </div>
        </div>

        <!-- Google drive link -->
        <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
            <p class="text-lg font-semibold p-2">Google Drive Link</p>
            <div class="mx-5 my-2">
            </div>
        </div>

        <!-- <div class="text-xl font-semibold my-4 mx-2">Study material</div>
        <div class="lg:grid lg:grid-cols-2 mt-4">
            <div class="m-1 p-4 bg-blue-600 text-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 class="mb-2 text-xl font-extrabold tracking-tight text-white">

                </h2>
                <div class="flex justify-between items-center">
                    <div class="grid items-center">
                        <span class="font-small dark:text-white">
                        </span>
                        <span class="font-small dark:text-white">
                        </span>
                    </div>
                    <i class="fa-solid fa-arrow-right font-bold text-2xl"></i>
                </div>
            </div>
            <div class="p-4 m-1 bg-blue-600 text-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 class="mb-2 text-xl font-extrabold tracking-tight text-white">

                </h2>
                <div class="flex justify-between items-center">
                    <div class="grid items-center">
                        <span class="font-small dark:text-white">
                        </span>
                        <span class="font-small dark:text-white">
                        </span>
                    </div>
                    <i class="fa-solid fa-arrow-right font-bold text-2xl"></i>
                </div>
            </div>
        </div> -->

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
import {
    GChart
} from 'vue-google-charts';

export default {
    name: 'SubjectInfo',
    components: {
        Aside,
        Nav,
        GChart,
    },
    data() {
        return {
            currayid: -1,
            subjectinfo: [],
            attendance: [],
            subjects: [],
            refbook: [],
            chartData: [
                ['Subject', 'Present',{
                    role: 'annotation'
                }, 'Absent']
            ],
            chartDatap: [
                ['Subject', 'Present',{
                    role: 'annotation'
                }, 'Absent']
            ],
            chartOptions: {
                height: 100,
                responsive: true,
                isStacked: 'percent',
                chartArea: {
                    left: 30,
                    top: 10,
                    bottom: 40,
                    right:100,
                },
                colors: ['#1c64f2', 'B4D4FF'],
                hAxis: {
                    gridlines: {
                        color: "transparent",
                    },
                    baselineColor: "transparent",
                    textPosition: "none",
                },
                vAxis: {
                    textPosition: "none",
                },
            }
        }
    },
    methods: {
        // for theory
        async fetchAtt(token, subject) {
            let enroll = await util.fetchacademicyear()
            let inputob = {
                inputOb: {
                    "loadDetail": {
                        "ayId": this.currayid,
                        "ttLoadType": "Theory",
                        "fSubjectId": subject
                    },
                    "stuEnroll": enroll.stuEnroll
                }
            }

            let attd = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId`, inputob)
            // console.log(attd)
            let attendance
            if (attd.status == 200) {
                attendance = _.filter(attd.data.attndList.ddClassSchedules, record => {
                    return record.attndanceInfos.length > 0
                })
                this.present = _.countBy(attendance, record => {
                    return record.attndanceInfos[0].attPresent == 1
                })
                console.log(this.present)
                const presentcount = this.present.true ?? 0
                const absentcount = this.present.false ?? 0
                console.log(presentcount)

                if ((presentcount + absentcount) != 0) {
                this.chartData.push([subject.subAlias, presentcount,((presentcount*100)/(presentcount + absentcount)).toFixed(0)+"%", absentcount])
                }
                else {
                    this.chartData.push([subject.subAlias, presentcount,"0%", absentcount]) 
                }
            }
        },

        // for practical
        async fetchAttp(token, subject) {
            let enroll2 = await util.fetchacademicyear()
            let inputobp = {
                inputOb: {
                    "loadDetail": {
                        "ayId": this.currayid,
                        "ttLoadType": "Practical",
                        "fSubjectId": subject
                    },
                    "stuEnroll": enroll2.stuEnroll
                }
            }

            let attdp = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId`, inputobp)
            // console.log(attdp)
            let attendancep
            if (attdp.status == 200) {
                attendancep = _.filter(attdp.data.attndList.ddClassSchedules, record => {
                    return record.attndanceInfos.length > 0
                })
                this.presentp = _.countBy(attendancep, record => {
                    return record.attndanceInfos[0].attPresent == 1
                })
                const presentcountp = this.presentp.true ?? 0
                const absentcountp = this.presentp.false ?? 0

                if ((presentcountp + absentcountp) != 0) {
                this.chartDatap.push([subject.subAlias, presentcountp,((presentcountp*100)/(presentcountp + absentcountp)).toFixed(0)+"%", absentcountp])
                }
                else {
                    this.chartDatap.push([subject.subAlias, presentcountp,"0%", absentcountp]) 
                }
                // console.log(this.chartDatap)
            }
        },
        // drawchart() {}
    },
    async mounted() {
        let query = {
            where: {
                subId: this.$route.params.id
            }
        }

        const token = JSON.parse(localStorage.getItem('token'))
        const academicyear = await util.fetchacademicyear()
        const rr = await axios.get(`/subjectInfos/${this.$route.params.id}`)
        if (rr.status == 200)
        this.subjectinfo = rr.data
        this.currayid = await util.fetchacademicyear()
        this.fetchAtt(token, this.$route.params.id)
        this.fetchAttp(token, this.$route.params.id)

        let result = await axios.get(`LpIds?filter=${JSON.stringify(query)}
        `);
        if (result.status == 200)
        this.refbook = result.data[0].refBook.split('\n')
        // console.log(result.data[0].refBook.split('\n'))
    },
}
</script>import { stringify } from 'postcss'
