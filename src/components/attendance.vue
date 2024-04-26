<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        
        <p class="text-2xl font-bold px-4">Attendance</p>

        <div class="lg:flex w-full mt-4 gap-3">
            
            <!-- Theory Attendance -->
            <div class="p-1 m-1 shadow-md shadow-gray-400 rounded-lg w-full">
                <p class="text-lg font-semibold p-3">Theory</p>
                <div class="" v-if="chartData && chartData.length>1">
                    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>
                    <div class="opacity-75 z-50">
                        <div class="flex justify-center items-center ">
                            <div class="fas fa-spinner fa-spin fa-2x text-blue-700"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Practical Attendance -->
            <div class="p-1 m-1 shadow-md shadow-gray-400 rounded-lg w-full">
                <p class="text-lg font-semibold p-3">Practical</p>
                <div class="" v-if="chartDatap && chartDatap.length>1">
                    <GChart type="ColumnChart" :data="chartDatap" :options="chartOptions" />
                </div>
                <div class="p-3" v-else>
                    <div class="opacity-75 z-50">
                        <div class="flex justify-center items-center ">
                            <div class="fas fa-spinner fa-spin fa-2x text-blue-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        GChart,
    },
    data() {
        return {
            attendance: [],
            subjects: [],
            present: [],
            student:[],
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
                height: 280,
                responsive: true,
                // isStacked: true,
                isStacked: 'percent',
                chartArea: {
                    left: 40,
                    top: 10,
                    bottom: 40,
                },
                colors: ['#1c64f2', 'B4D4FF'],
                vAxis: {
                    gridlines: {
                        color: "transparent",
                    },
                    baselineColor: "transparent",
                    textPosition: "none",
                },
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
            let student2 = await util.fetchstuInfo()
            let inputob = {
                inputOb: {
                    "loadDetail": {
                        "ayId": this.currayid,
                        "ttLoadType": "Theory",
                        "fSubjectId": subject.subId
                    },
                    "stuEnroll": student2.stuEnroll
                }
            }

            let attd = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId`, inputob)
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
                const presentcount = this.present.true ?? 0
                const absentcount = this.present.false ?? 0

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
            let student1 = await util.fetchstuInfo()
            let inputobp = {
                inputOb: {
                    "loadDetail": {
                        "ayId": this.currayid,
                        "ttLoadType": "Practical",
                        "fSubjectId": subject.subId
                    },
                    "stuEnroll": student1.stuEnroll
                }
            }

            let attdp = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId`, inputobp)
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
            }
        },
    },

    async mounted() {
        const token = JSON.parse(localStorage.getItem('token'))
        const academicyear = await util.fetchacademicyear()
        const student = await util.fetchstuInfo()
        const currayid = await util.fetchacademicyear()
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}`)
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