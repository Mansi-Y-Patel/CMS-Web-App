<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <p class="text-2xl font-bold px-4">Attendance</p>

        <div class="lg:flex w-full mt-4 gap-3">
            <div class="p-1 m-1 shadow-md shadow-gray-400 rounded-lg w-full">
                <p class="text-lg font-semibold p-3">Theory</p>
                <div class="" v-if="chartData && chartData.length>1">
                    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>Loading...</div>
            </div>

            <div class="p-1 m-1 shadow-md shadow-gray-400 rounded-lg w-full">
                <p class="text-lg font-semibold p-3">Practical</p>
                <div class="" v-if="chartDatap && chartDatap.length>1">
                    <GChart type="ColumnChart" :data="chartDatap" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>Loading...</div>
            </div>
        </div>

        <!-- <div class="" v-if="chartData[1]">
            {{ chartData[1][0] }}
            <progress :max="chartData[1][1]+chartData[1][3]" :value="chartData[1][1]">
        </progress></div> -->
    </main>
</div>
</template>

<script>
import 'flowbite';
import _ from 'lodash'
import axios from '../axios.js';
import Aside from './aside.vue'
import Nav from './nav.vue'
import util from '../util.js'
import {
    GChart
} from 'vue-google-charts';

export default {
    name: 'Attendance',
    components: {
        Aside,
        Nav,
        GChart
    },
    data() {
        return {
            attendance: [],
            subjects: [],
            present: [],
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
                isStacked: true,
                chartArea: {
                    left: 50,
                    top: 10,
                    bottom: 40,
                },
                // width_units: '%',
                colors: ['#1c64f2', 'B4D4FF'],
                vAxis: {
                    gridlines: {
                        color: "transparent",
                    },
                    baselineColor: "transparent",
                    textPosition: "none",
                    // borderRadius: 50,
                },
                // series: {
                //     borderRadius: 20,
                // },
                hAxis: {
                    textStyle: {
                        fontSize: '12',
                    },
                }
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
                        "ayId": 10,
                        "ttLoadType": "Theory",
                        "fSubjectId": subject.subId
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
                // console.log(this.present)
                // console.log(subject.subAlias, this.present)
                const presentcount = this.present.true ?? 0
                const absentcount = this.present.false ?? 0

                this.chartData.push([subject.subAlias, presentcount, absentcount, presentcount + absentcount])
                // console.log(this.chartData)
            }
        },
        // drawchart() {},

        // for practical
        async fetchAttp(token, subject) {
            // console.log(subject)
            let inputobp = {
                inputOb: {
                    "loadDetail": {
                        "ayId": 10,
                        "ttLoadType": "Practical",
                        "fSubjectId": subject.subId
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
        // this.drawchart()

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
        this.subjects.map((subject) => {
            this.fetchAtt(token, subject)
        })
        this.subjects.map((subject) => {
            this.fetchAttp(token, subject)
        })
    },
}
</script>
