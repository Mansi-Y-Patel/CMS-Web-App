<template>
<div class="w-full bg-gray-50 dark:bg-gray-900">
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
            <div class="">
                <table class="w-full">
                    <tr class="">
                        <th class="p-1"></th>
                        <th class="p-1">MON</th>
                        <th class="p-1">TUE</th>
                        <th class="p-1">WED</th>
                        <th class="p-1">THU</th>
                        <th class="p-1">FRI</th>
                        <th class="p-1">SAT</th>
                    </tr>
                    <tr class="">
                        <th class="p-2">9.45</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-3 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">10.45</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">11.45</th>
                        <td colspan="6" class="p-2 m-2 bg-gray-200 rounded-lg">Lunch Break</td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">12.25</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">1.25</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">2.25</th>
                        <td colspan="6" class="p-2 m-2 bg-gray-200 rounded-lg">Break</td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">2.40</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                    <tr class=" ">
                        <th class="p-2">3.35</th>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                        <td class="p-2 bg-gray-200 rounded-lg">
                            <div class="flex  gap-2 justify-around">
                                <p>CN</p>
                                <p>AMR</p>
                                <p>305</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <div class="p-4 my-3 lg:grid lg:grid-cols-2 w-full gap-3">

                <!-- Subject list -->
                <div class="w-full shadow-sm shadow-gray-500 rounded-lg p-3 m-2">
                    <div class="flex text-xl font-medium px-2 items-center">
                    <i class="fa-solid fa-book p-2"></i>
                    <p class="p-2">Subjects</p>
                    </div>
                    
                    <div class="m-2">
                        <p class="p-1">CN</p>
                        <p class="p-1">AI</p>
                    </div>
                </div>

                <!-- Faculties -->
                <div class="w-full shadow-sm shadow-gray-500 rounded-lg p-3 m-2">
                    <div class="flex text-xl font-medium px-2 items-center">
                        <i class="fa-solid fa-graduation-cap p-2"></i>
                        <p class="p-2">Faculties</p>
                        </div>
                    <p class="text-xl font-medium px-2"></p>
                    <div class="m-2">
                        <p class="p-1">CN</p>
                        <p class="p-1">AI</p>
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
export default {
    name: 'Schedule',
    components: {
        Aside,
        Nav
    },
    data() {
        return {
            student: [],
            attendance: [],
            list:[]
        }
    },
    async mounted() {
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
        console.log(timetable)
            this.list = _.filter(timetable.ttRecordList, record => {
                // console.log(record)
                return record.timetableRecordInfos.length > 0
            })
            console.log(this.list[0].timetableRecordInfos)
            console.log(this.list[0].timetableRecordInfos[0])


            // if(this.list[0].timetableRecordInfos[0].ttDay== 'MONDAY' && this.list[0].timetableRecordInfos[0].ttStartTime== '01:25:00') {
            //     console.log(this.list[0].timetableRecordInfos[0].subjectInfos.subName)
            // }

    },
}
</script>


<style>
    td, th {
        border: white 3px solid;
        text-align: center;
    }
</style>