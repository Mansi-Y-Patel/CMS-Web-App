<template>
<Nav />
<div class="flex">
    <Aside />
    <main class="w-full p-4 bg-white md:ml-52 h-auto pt-20">
        <div class="flex text-2xl font-bold items-center justify-between">
            <p class="text-2xl font-bold px-4">Academia</p>

            <!-- Link to Attendance page -->
            <router-link to="/attendance" :class="{ active: $route.path === '/attendance' }">
                <i class="fa-solid fa-chart-simple p-4 rounded-full hover:text-blue-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"></i>
            </router-link>
        </div>

        <section class="bg-white dark:bg-gray-900">

            <!-- Subjects -->
            <div class="lg:grid lg:grid-cols-3">
                <div v-for="subject in subjects" class="m-2">
                    <!-- <routerlink to="/subjectinfo/:id?" :class="{ active: $route.path === '/subjectinfo/:id?' }"> -->
                    <div class="p-4 lg:h-36 bg-blue-600 text-white rounded-lg shadow-gray-400 shadow-md hover:bg-blue-700 dark:bg-gray-800">
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
                    </div>
                    <!-- </routerlink> -->
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
export default {
    name: 'Academia',
    components: {
        Aside,
        Nav,
    },
    data() {
        return {
            attendance: [],
            subjects: []
        }
    },
    async mounted() {

        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        const academicyear = await util.fetchacademicyear()
        console.log(academicyear)

        const student = await util.fetchstuInfo()
        console.log(student.stuId)
        // let result = await axios.get(`/SubjectInfos?filter=${JSON.stringify(query)}&access_token=${token}`);

        
        let currayid = await util.fetchacademicyear()
        // currayid=10-1
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}?access_token=${token}`)
        let timetable
        if (result3.status == 200)
            timetable = result3.data
            const list = _.find(timetable.ttRecordList, record => {
                return record.timetableRecordInfos.length > 0
            })
            const subjectlist= _.uniqBy(list.timetableRecordInfos,ob => {
                console.log(ob.subjectInfos.subName)
                return ob.subjectInfos.subName 
            })

            this.subjects = []
            subjectlist.map(ob => {
                this.subjects.push(ob.subjectInfos)
            })

            

            // this.subjects.forEach((record) => {
            //     console.log(record.subName)
            // })
           

        // let result = await axios.get(`/TimeTableInfos/getSubjectListByClassId/${academicyear}/5?access_token=ieBMCTyDaJQvsLHc7Ai6RI1atkh1RAqsO9OK0XwUX5rHjwDKG25BX3G7YLbMd9JA`);
        // let att = await axios.get(`/StudentAttendanceInfos/count?where=%7B%22stuId%22%3A3981%2C%20%22ttSem%22%3A7%2C%20%22fSubjectId%22%3A1037%2C%20%22ttLoadType%22%3A%22Theory%22%2C%20%22attPresent%22%3A1%7D&access_token=ERHEJwTC6ARGHPkltZiIkL5xxMgqHFWTJ7Kwj8Gu25I23wD0J9JbyxWBQn4uaw05`);
        
        // this.subject.subjectList.forEach((record) => {
        //     console.log(record.subId)
        // })
    },
}
</script>