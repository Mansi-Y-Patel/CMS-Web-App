<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full px-4 bg-white md:ml-52 h-auto pt-20">
        <div class="p-2 m-1 flex font-semibold text-3xl rounded-b-lg">
            {{ $route.params.id? $route.params.id:"subject not found" }}
        </div>

        <div class="lg:grid lg:grid-cols-2 mt-4">
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Theory</p>
                <div class="" v-if="chartData && chartData.length>1">
                    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
                </div>
                <div class="" v-else>Loading...</div>
            </div>
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Practical</p>
                <div class="" v-if="chartDatap && chartDatap.length>1">
                    <GChart type="BarChart" :data="chartDatap" :options="chartOptions" />
                </div>
                <div class="" v-else>Loading...</div>
            </div>
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Lesson plan</p>
            </div>
            <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
                <p class="text-lg font-semibold p-2">Lab plan</p>
            </div>
        </div>

        <div class="p-4 m-1 shadow-md shadow-gray-400 rounded-lg">
            <p class="text-lg font-semibold p-2">Reference Books</p>
            <div class="mx-5 my-2" v-for="books in refbook">
                {{books}}
            </div>
        </div>

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
        GChart
    },
    data() {
        return {
            subjectinfo: [],
            attendance: [],
            subjects: [],
            refbook: [],
            chartData: [
                ['Subject', 'Present', 'Absent', {
                    role: 'annotation'
                }]
            ],
            chartDatap: [
                ['Subject', 'Present', 'Absent', {
                    role: 'annotation'
                }]
            ],
            chartOptions: {
                height: 300,
                responsive: true,
                isStacked: 'percent',
                chartArea: {
                    left: 50,
                    top: 10,
                    bottom: 40,
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
                // annotations: {
                //     boxStyle: {
                //         rx: 80,
                //         ry: 80,
                //     }
                // },

                
            }
        }
    },
    methods: {
        // for theory
        async fetchAtt(token, subject) {
            // console.log(subject)
            let inputob = {
                inputOb: {
                    "loadDetail": {
                        "ayId": 9,
                        "ttLoadType": "Theory",
                        "fSubjectId": 880
                    },
                    "stuEnroll": "200410107059"
                }
            }

            let attd = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId?access_token=${token}`, inputob)
            // console.log(attd)
            let attendance
            if (attd.status == 200) {
                // console.log(attd.data.attndList)
                attendance = _.filter(attd.data.attndList.ddClassSchedules, record => {
                    return record.attndanceInfos.length > 0
                })
                this.present = _.countBy(attendance, record => {
                    return record.attndanceInfos[0].attPresent == 1
                })
                console.log(this.present)
                // console.log(subject.subAlias, this.present)
                const presentcount = this.present.true ?? 0
                const absentcount = this.present.false ?? 0
                console.log(presentcount)

                this.chartData.push([subject.subAlias, presentcount, absentcount, presentcount + absentcount])
                // console.log(this.chartData)
            }
        },

        // for practical
        async fetchAttp(token, subject) {
            // console.log(subject)
            let inputobp = {
                inputOb: {
                    "loadDetail": {
                        "ayId": 9,
                        "ttLoadType": "Practical",
                        "fSubjectId": 880
                    },
                    "stuEnroll": "200410107059"
                }
            }

            let attdp = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId?access_token=${token}`, inputobp)
            // console.log(attdp)
            let attendancep
            if (attdp.status == 200) {
                // console.log(attdp.data.attndList)
                attendancep = _.filter(attdp.data.attndList.ddClassSchedules, record => {
                    return record.attndanceInfos.length > 0
                })
                this.presentp = _.countBy(attendancep, record => {
                    return record.attndanceInfos[0].attPresent == 1
                })
                // console.log(this.presentp)
                // console.log(subject.subAlias, this.presentp)
                const presentcountp = this.presentp.true ?? 0
                const absentcountp = this.presentp.false ?? 0

                this.chartDatap.push([subject.subAlias, presentcountp, absentcountp, presentcountp + absentcountp])
                // console.log(this.chartDatap)
            }
        },
        // drawchart() {}
    },
    async mounted() {
        let query = {
            where: {
                subId: 1039
            }
        }

        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        const academicyear = await util.fetchacademicyear()
        console.log(academicyear)

        const student = await util.fetchstuInfo()
        console.log(student.stuId)

        const currayid = await util.fetchacademicyear()
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}?access_token=${token}`)
        let timetable
        if (result3.status == 200)
            timetable = result3.data
        const list = _.find(timetable.ttRecordList, record => {
            // console.log(record)
            return record.timetableRecordInfos.length > 0
        })
        // console.log(list)
        const subjectlist = _.uniqBy(list.timetableRecordInfos, ob => {
            // console.log(ob.subjectInfos.subName)
            return ob.subjectInfos.subName
        })

        this.subjects = []
        subjectlist.map(ob => {
            this.subjects.push(ob.subjectInfos)
        })
        console.log(this.subjects)

        this.subjects.forEach((record) => {
            console.log(record.subId)
        })
        this.subjects.map((subject) => {
            this.fetchAtt(token, subject)
        })
        this.subjects.map((subject) => {
            this.fetchAttp(token, subject)
        })

        let result = await axios.get(`LpIds?filter=${JSON.stringify(query)}&access_token=${token}
        `);
        if (result.status == 200)
            this.subjectinfo = result.data
        this.refbook = result.data[0].refBook.split('\n')
        // console.log(result.data[0].refBook.split('\n'))
    },
}
</script>import { stringify } from 'postcss'
