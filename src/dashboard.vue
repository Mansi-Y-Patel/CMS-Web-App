<template>
<div class="w-full dark:bg-gray-900">
    <Nav />

    <div class="flex w-full">
        <Aside />
        <main class="w-full p-4 bg-white md:ml-52 pt-16">
            <div class="" v-if="loading">
                <Spinner></Spinner>
            </div>
            
            <div class=" lg:grid lg:grid-cols-2  gap-1 m-0 w-full">
                <div class="w-full h-full">
                    <div class="h-1/5 flex gap-2 m-2 rounded-lg">

                        <!-- Name -->
                        <div class="text-lg items-center w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg">Welcome<br><span class="font-bold">{{ student.stuFirstname }} {{ student.stuLastname }}</span> </div>

                        <!-- Link to Schedule page -->
                        <router-link to="/dashboard/schedule" :class="{ active: $route.path === '/dashboard/schedule' }" class="flex items-center text-lg font-semibold w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg justify-around hover:bg-gray-100 hover:text-blue-600">
                            <p class="">Schedule</p>
                            <i class="fa-regular fa-calendar text-2xl"></i>
                        </router-link>
                    </div>

                    <div class="h-4/5 flex flex-col gap-2 m-2 text-black">

                        <!-- Ongoing -->
                        <div v-if="currTTrecord" class="h-1/2  flex justify-between p-2 shadow-md shadow-gray-400  rounded-lg">
                            <div class="p-1 w-2/3 mx-4 ">
                                <p class="mb-2">Ongoing</p>
                                <p class="font-bold text-lg">{{currTTrecord?.subjectInfos?.subName ?? "No Ongoing lecture/lab"}}</p>
                                <p class="my-2" v-if="currTTrecord?.subjectInfos?.subName"><i class="fa-solid fa-graduation-cap mr-2"></i>{{currTTrecord?.facultyInfos?.firstName}} {{currTTrecord?.facultyInfos?.lastName}}</p>
                                <p class="" v-if="currTTrecord?.subjectInfos?.subName"><i class="fa-solid fa-location-dot text-sm mr-4"></i>{{currTTrecord.locationInfos?.locName}} ({{currTTrecord.ttLoadType}})</p>
                            </div>
                            <div class="p-1 w-1/3 mx-4">
                                <GChart v-if="chartData && chartOptions" type="PieChart" :data="chartData" :options="chartOptions" />
                            </div>
                        </div>
                        <div class="h-1/2 p-7 shadow-md shadow-gray-400 rounded-lg " v-else>
                            <p class="mb-2">Ongoing</p>
                            <p class="font-bold text-lg w-1/2">No Ongoing lecture/lab</p>
                        </div>

                        <!-- Upcoming -->
                        <div v-if="nextTTrecord" class="h-1/2 flex justify-between p-2 shadow-md shadow-gray-400 rounded-lg">
                            <div class="p-1 w-2/3 mx-4">
                                <p class="mb-2">Upcoming</p>
                                <p class="font-bold text-lg">{{nextTTrecord[0]?.subjectInfos?.subName ?? "No Upcoming lecture/lab"}}</p>
                                <p class="my-2" v-if="this.nextTTrecord[0]?.subjectInfos?.subName"><i class="fa-solid fa-graduation-cap mr-2"></i>{{nextTTrecord[0]?.facultyInfos?.firstName}} {{nextTTrecord[0]?.facultyInfos?.lastName}}</p>
                                <p class="" v-if="nextTTrecord[0]?.subjectInfos?.subName"><i class="fa-solid fa-location-dot text-sm mr-4"></i>{{nextTTrecord[0]?.locationInfos?.locName}} ({{nextTTrecord[0]?.ttLoadType}})</p>
                            </div>
                            <div class="p-1 w-1/3 mx-4">
                                <GChart v-if="chartDatap && chartOptions" type="PieChart" :data="chartDatap" :options="chartOptions" />
                            </div>
                        </div>
                        <!-- <div v-else class="h-1/2 p-7 shadow-md shadow-gray-400 rounded-lg ">
                            <p class="mb-2">Upcoming</p>
                            <p class="font-bold text-lg">No Upcoming lecture/lab</p>
                        </div> -->
                    </div>
                </div>

                <div class="w-full h-full">

                    <!-- Calendar -->
                    <div class="items-center h-2/3 rounded-lg shadow-md shadow-gray-400 m-2">
                        <div class="p-2">
                            <div class="header">
                                <button @click="prevMonth" class="month-button hover:bg-gray-100 hover:rounded-full hover:text-blue-600 w-6"><i class="fa-solid fa-chevron-left"></i></button>
                                <span class="font-bold">{{ currentMonth }}</span>
                                <button @click="nextMonth" class="month-button hover:bg-gray-100  hover:rounded-full hover:text-blue-600 w-6"><i class="fa-solid fa-chevron-right"></i></button>
                            </div>
                            <div class="days-header">
                                <div v-for="dayName in dayNames" :key="dayName" class="day-name">{{ dayName }}</div>
                            </div>
                            <div class="days">
                                <div v-for="day in days" :key="day.date" :class="{ day: true, 'current': isCurrentDate(day.date), 'prev-month': day.isPrevMonth, 'next-month': day.isNextMonth }">
                                    {{ day.day }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Announcements -->
                    <div class="h-1/3 m-2 p-3 rounded-lg shadow-md shadow-gray-400 object-cover">
                        <p class="text-lg font-bold">Announcements:</p>
                        <div class="p-1">
                            <p>Exam fees</p>
                            <p>College fees</p>
                            <p>Transportation fees</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- To-do list -->
            <div class="mt-6">
                <div class="p-4 m-2 rounded-lg shadow-md shadow-gray-400">
                    <div class="grid lg:grid-cols-2 gap-2 w-full">
                        <p class="text-lg font-bold p-2">To-Do List</p>
                        <div class="grid lg:grid-cols-2 gap-2 ml-2">
                            <input v-model="newNote" @keyup.enter="addNote" placeholder="Add a new note" class="p-2 rounded-lg border border-gray-500">
                            <button @click="addNote" class="p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 hover:font-semibold">Add</button>
                        </div>
                    </div>
                   
                    <div v-if="todolist.length === 0" class="p-3">{{ noNotesMessage }}</div>
                    <div v-else class="rounded-sm p-5">
                        <ul class="grid lg:grid-cols-2 gap-3">
                            <li v-for="task in todolist" class="items-center p-2 border border-gray-300 rounded-lg">
                                <input type="checkbox"  :checked="task.todoCompleted==1"  @change="(e)=>updateStatus(e.target.checked,task.todoId)" class="mr-2 " :class="{'line-through':task.todoCompleted==1 } ">
                                <span :class="{ completed: task.todoCompleted }" class="text-wrap">{{ task.todoContent }}</span>
                                <div class="float-right">
                                    <!-- <button @click="editNote(todoId)" class="mx-4 w-16 bg-gray-800 rounded-2xl text-white p-1 hover:bg-black hover:font-semibold">Edit</button> -->
                                    <button @click="deleteNote(task.todoId)" class="w-16 bg-gray-800	rounded-2xl text-white p-1 hover:bg-black hover:font-semibold">Delete</button>
                                </div>
                            </li>
                        </ul>
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
import axios from './axios.js';
import util from './util.js';
import Aside from './components/aside.vue';
import Nav from './components/nav.vue';
import Spinner from './components/spinner.vue'

import {
    watchEffect
} from 'vue';
import {
    ref,
} from 'vue';
import {
    computed
} from 'vue';
import {
    GChart
} from 'vue-google-charts';

export default {
    name: 'Dashboard',
    components: {
        Aside,
        Nav,
        GChart,
        Spinner
    },

    // To-do list setup
    setup() {
        const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
        const newNote = ref('');
        const showAddForm = ref(false);

        watchEffect(() => {
            localStorage.setItem('notes', JSON.stringify(notes.value));
        });

        return {
            notes,
            newNote,
            showAddForm,
            noNotesMessage,
            addNote,
            deleteNote,
            editNote,
            saveNotes,
        };
    },

    data() {
        return {
            student: [],
            todolist: [],
            attendance: [],
            timetable: [],
            currTTrecord: {},
            nextTTrecord: {},
            loading: false,

            noNotesMessage: "No To-Do\'s created.",
            dayNameList: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"],
            newNote: '',
        };
    },

    methods: {

        // To-do list method
        async addNote() {
            if (this.newNote.trim() === '') return;
            try {
                    const todoItem =       {
                "todoId": 0,
                "todoContent": this.newNote,
                "todoCompleted": 0,
                "todoOwner": localStorage.getItem("userid"),
                }
                await axios.post(`/Todos`,todoItem)
                this.fetchTodo()
                this.newNote = '';
            }
            catch(error) {
                console.log(error)
            }
        },
        async deleteNote(todoId) {
            try {
                await axios.delete(`/Todos/${todoId}`)
                this.fetchTodo()
            }
            catch(error) {
                console.log(error)
            }
        },
        async updateStatus(status,todoId) {
            console.log(status)
            try {
                    const todoItem =       {
                "todoCompleted": status==true?1:0,
                }
                await axios.patch(`/Todos/${todoId}`,todoItem)
                this.fetchTodo()
            }
            catch(error) {
                console.log(error)
            }
        },
        // editNote(index) {
        //     const newText = prompt('Enter new text:');
        //     if (newText !== null) {
        //         this.notes[index].text = newText;
        //     }
        // },
        toggleCompleted(todoId) {
            this.todolist[todoId].completed = !this.todolist[todoId].completed;
        },

        // Donut chart
        drawchart() {

                this.chartData = null
                this.chartOptions = {
                    pieHole: 0.3,
                    width: 140,
                    height: 140,
                    pieSliceTextStyle: {
                        color: 'white',
                        bold: 'true',
                        fontSize: 10,
                    },
                    slices: [{
                        color: '#6eb0ff'
                    }, {
                        color: '#1c64f2'
                    }],
                    legend: 'none',
                    chartArea: {
                        left: 5,
                        right: 25,
                        top: 5,
                        bottom: 5
                    },
                    backgroundColor: "transparent",
                }
        },

        async fetchTodo() {
            let query1 = {
            where: {
                todoOwner: localStorage.getItem("userid")
            }
            }
            // Fetch TO-DO stored in API
            let todourl = `/Todos?filter=${JSON.stringify(query1)}`
            let result2 = await axios.get(todourl);
            if (result2.status == 200){
                this.todolist = [...result2.data]
            }
        },

        // Fetching attendance of ongoing lecture
        async fetchAtt() {
            
            if (!this.currTTrecord) {
                return
            }
            let inputob = {
                inputOb: {
                    "ayId": this.currayid,
                    "loadDetail": {
                        "ttLoadType": this.currTTrecord.ttLoadType,
                        "fSubjectId": this.currTTrecord.fSubjectId
                    },
                    "stuEnroll": this.student.stuEnroll
                }
            }

            let attd = await axios.post(`/TimeTableInfos/getStudentAttdBySubjectId`, inputob)
            let attendance
            if (attd.status == 200) {
                attendance = _.filter(attd.data.attndList.ddClassSchedules, record => {
                    return record.attndanceInfos.length > 0
                })
                this.present = _.countBy(attendance, record => {
                    return record.attndanceInfos[0].attPresent == 1
                })
                let presentcount = this.present.true ?? 0
                let absentcount = this.present.false ?? 0
                if ((presentcount + absentcount) != 0) {
                    this.chartData = [
                    ['', ''],
                    ['Absent', absentcount],
                    ['Attended', presentcount]
                ]
                }
            }
        },

        // Fetching attendance of upcoming lecture
        async fetchAttp() {
            let inputobp = {
                inputOb: {
                    "ayId": this.currayid,
                    "loadDetail": {
                        "ttLoadType": this.nextTTrecord[0].ttLoadType,
                        "fSubjectId": this.nextTTrecord[0].fSubjectId
                    },
                    "stuEnroll": this.student.stuEnroll
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
                let presentcountp = this.presentp.true ?? 0
                let absentcountp = this.presentp.false ?? 0
                if ((presentcountp + absentcountp) != 0) {
                    this.chartDatap = [
                    ['', ''],
                    ['Absent', absentcountp],
                    ['Attended', presentcountp]
                ]
                }
            }
        },
    },

    async mounted() {
        this.loading=true
        try {
        let query = {
            where: {
                stuEmail: localStorage.getItem("email")
            }
        }

        let academicyear = await util.fetchacademicyear()
        this.student = await util.fetchstuInfo()

        // Personal information of student
        let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}`);
        if (result.status == 200)
            this.student = result.data[0]

        // Timetable info
        this.currayid = await util.fetchacademicyear()
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${this.student.stuId}/${this.currayid}`)
        let timetable
        if (result3.status == 200) {
            timetable = result3.data
            const list = _.filter(timetable.ttRecordList, record => {
                return record.timetableRecordInfos.length > 0
            })
            if (list && list.length > 0){

            this.timetable = list[0].timetableRecordInfos
            const currDay = this.dayNameList[new Date().getUTCDay() - 1]
            const currHour = new Date().getHours() % 12
            const currMinute = new Date().getMinutes()

            // For Ongoing lecture/lab
            this.currTTrecord = _.find(this.timetable, ob => {
                const ttString = ob.ttStartTime.split(":")
                const ttString1 = ob.ttEndTime.split(":")
                const ttHour = parseInt(ttString[0])
                const ttMinute = parseInt(ttString[1])
                const ttHour1 = parseInt(ttString1[0])
                const ttMinute1 = parseInt(ttString1[1])
                const ttStartDuration = ttHour * 3600 + ttMinute * 60
                const ttEndDuration = ttHour1 * 3600 + ttMinute1 * 60
                const currDuration = currHour * 3600 + currMinute * 60
                return (currDay == ob.ttDay) && (currDuration >= ttStartDuration && currDuration <= ttEndDuration)
            })

            // For Upcoming lecture/lab
            let tempTime 
            if (!this.currTTrecord) {
                const tempDate =new Date()
                tempTime =  `${tempDate.getHours()}:${tempDate.getMinutes()}` 
            }
            const temp12 = _.filter(this.timetable, ob => {
                const ttString1 = this.currTTrecord?this.currTTrecord.ttEndTime.split(":"):tempTime.split(":")
                const ttString = ob.ttStartTime.split(":")
                const ttHour = parseInt(ttString[0])
                const ttMinute = parseInt(ttString[1])
                const ttHour1 = parseInt(ttString1[0])
                const ttMinute1 = parseInt(ttString1[1])

                // const totalSeconds = ((hours1>=1 && hours1<7)?(hours1+12):hours1) * 3600 + (minutes1) * 60;

                const ttStartDuration = ((ttHour>=1 && ttHour<7)?(ttHour+12):ttHour) * 3600 + ttMinute * 60
                const ttEndDuration = ((ttHour1>=1 && ttHour1<7)?(ttHour1+12):ttHour1) * 3600 + ttMinute1 * 60 
                return (currDay == ob.ttDay) && (ttEndDuration <= ttStartDuration)
            })

            this.nextTTrecord = _.sortBy(temp12,ob => {
                    const [hours, minutes, seconds] = ob.ttStartTime.split(':');
                    const hours1= parseInt(hours) 
                    const minutes1= parseInt(minutes) 
                    const totalSeconds = ((hours1>=1 && hours1<7)?(hours1+12):hours1) * 3600 + (minutes1) * 60;
                    console.log(hours1,totalSeconds)
                    return totalSeconds
                })
            console.log(this.nextTTrecord)
            // this.nextTTrecord.forEach(element => {
            //     console.log(element.subjectInfos.subName)
            // });
        }    
        }

        this.drawchart()
        await this.fetchTodo()
        await this.fetchAtt()
        await this.fetchAttp()

        }
        catch(error){
            console.log("Error",error)
        }
        finally {
                this.loading = false
            } 
    },

    // Calendar
    setup() {
        const currentDate = new Date();
        const currentYear = ref(currentDate.getFullYear());
        const currentMonthIndex = ref(currentDate.getMonth());
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const prevMonth = () => {
            if (currentMonthIndex.value === 0) {
                currentYear.value--;
                currentMonthIndex.value = 11;
            } else {
                currentMonthIndex.value--;
            }
        };

        const nextMonth = () => {
            if (currentMonthIndex.value === 11) {
                currentYear.value++;
                currentMonthIndex.value = 0;
            } else {
                currentMonthIndex.value++;
            }
        };

        const days = computed(() => {
            const daysInMonth = [];
            const firstDay = new Date(currentYear.value, currentMonthIndex.value, 1).getDay();
            const lastDate = new Date(currentYear.value, currentMonthIndex.value + 1, 0).getDate();

            // Dates from the previous month
            const prevMonthLastDate = new Date(currentYear.value, currentMonthIndex.value, 0).getDate();
            const daysBefore = Array.from({
                length: firstDay
            }, (_, i) => ({
                day: prevMonthLastDate - firstDay + i + 1,
                date: new Date(currentYear.value, currentMonthIndex.value, -firstDay + i + 1),
                isPrevMonth: true,
                isNextMonth: false
            }));

            for (let i = 1; i <= lastDate; i++) {
                const date = new Date(currentYear.value, currentMonthIndex.value, i);
                daysInMonth.push({
                    day: i,
                    date,
                    isPrevMonth: false,
                    isNextMonth: false
                });
            }

            // Dates from the next month
            const lastDay = new Date(currentYear.value, currentMonthIndex.value, lastDate).getDay();
            const daysAfter = Array.from({
                length: 6 - lastDay
            }, (_, i) => ({
                day: i + 1,
                date: new Date(currentYear.value, currentMonthIndex.value + 1, i + 1),
                isPrevMonth: false,
                isNextMonth: true
            }));

            return [...daysBefore, ...daysInMonth, ...daysAfter];
        });

        const currentMonth = computed(() => {
            return new Date(currentYear.value, currentMonthIndex.value).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
            });
        });

        const isCurrentDate = (date) => {
            const today = new Date();
            return date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
        };

        return {
            currentMonth,
            days,
            dayNames,
            prevMonth,
            nextMonth,
            isCurrentDate
        };
    },

}
</script>

<style>
.header {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
}

.days-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    font-weight: 500;
}

.day-name {
    padding: 5px;
    text-align: center;
}

.days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
}

.day {
    padding: 5px;
    text-align: center;
    cursor: pointer;
}

.day:hover {
    background-color: rgb(243 244 246);
    font-weight: bold;
    color: rgb(28 100 242);
    border-radius: 10px;
}

.day.current {
    font-weight: bold;
    color: white;
    --tw-bg-opacity: 1;
    background-color: rgb(28 100 242 / var(--tw-bg-opacity));
    border-radius: 10px;
}

.prev-month {
    color: rgb(166, 165, 165);
}

.next-month {
    color: rgb(166, 165, 165);
}

.current {
    font-weight: bold;
}
</style>