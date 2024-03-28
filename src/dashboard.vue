<template>
<div class="w-full bg-gray-50 dark:bg-gray-900">
    <Nav />

    <div class="flex">
        <Aside />
        <main class="w-full p-4 bg-white md:ml-52 h-auto pt-16">
            <div class=" lg:grid lg:grid-cols-2  gap-1 m-0 w-full">
                <div class="w-full">

                    <div class="flex gap-2 m-2 rounded-lg">

                        <!-- Name -->
                        <div class="text-lg items-center  w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg">Welcome<br><span class="font-bold">{{ student.stuFirstname }} {{ student.stuLastname }}</span> </div>

                        <!-- Link to Schedule page -->
                        <router-link to="/schedule" :class="{ active: $route.path === '/schedule' }" class="flex items-center text-lg font-semibold w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg justify-around hover:bg-gray-100 hover:text-blue-600">
                            <p class="">Schedule</p>
                            <i class="fa-regular fa-calendar text-2xl"></i>
                        </router-link>
                    </div>

                    <!-- Ongoing and upcomimg lectures -->
                    <div class="flex flex-col gap-2 m-2 text-black">
                        <div class="flex justify-between p-2 shadow-md shadow-gray-400  rounded-lg">
                            <div class="p-2 w-2/3 mx-4 ">
                                <p class="">Ongoing</p>
                                <!-- {{  new Date() }} -->
                                <p class="font-bold text-xl my-3">Mobile application development</p>
                                <p class="font-bold">Lab</p>
                            </div>
                            <div class="p-2 w-1/3 mx-4">
                                <GChart type="PieChart" :data="chartData" :options="chartOptions" class="" />
                            </div>
                        </div>
                        <div class="flex justify-between p-2 shadow-md shadow-gray-400 rounded-lg">
                            <div class="p-2 w-2/3 mx-4">
                                <p class="">Upcoming</p>
                                <p class="font-bold text-xl my-3"></p>
                                <p class="font-bold"></p>
                            </div>
                            <div class="p-2 w-1/3 mx-4">
                                <GChart type="PieChart" :data="chartData" :options="chartOptions" class="" />
                            </div>
                        </div>
                    </div>

                    <!-- To-do list -->
                    <div class="p-3 m-2 rounded-lg shadow-md shadow-gray-400">
                        <p class="text-medium font-bold">To-Do</p>
                        <!-- <h1 class="text-medium font-bold">To-Do List</h1>
                        <div class="flex mb-10">
                            <input v-model="newNote" @keyup.enter="addNote" placeholder="Add a new note" class="flex flex-1 p-2 mr-2 border-1 rounded-sm border-gray-500">
                            <button @click="addNote" class="add-button bg-blue-700 rounded-lg text-white w-full p-1">Add</button>
                        </div>
                        <div v-if="notes.length === 0" class="text-center p-2">{{ noNotesMessage }}</div>
                        <div v-else class="border-1 rounded-sm max-h-2 overflow-y-auto">
                            <ul>
                                <li v-for="(note, index) in notes" :key="index" class="flex items-center p-2 border-b border-gray-800">
                                    <input type="checkbox" v-model="note.completed" @change="saveNotes" class="mr-2">
                                    <span :class="{ completed: note.completed }">{{ note.text }}</span>
                                    <button @click="editNote(index)" class="edit-button">Edit</button>
                                    <button @click="deleteNote(index)" class="delete-button">Delete</button>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                </div>
                <div class="w-full">

                    <!-- Calendar -->
                    <div class="rounded-lg shadow-md shadow-gray-400 m-2">
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
                    <div class="m-2 p-3 rounded-lg shadow-md shadow-gray-400">
                        <p class="text-medium font-bold">Announcements:</p>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<script>
import 'flowbite';
import moment from 'moment';
import axios from './axios.js';
import util from './util.js';
import Aside from './components/aside.vue';
import Nav from './components/nav.vue';
import {
    ref,
    computed
} from 'vue';
import {
    GChart
} from 'vue-google-charts';
import { size } from 'lodash';

export default {
    name: 'Dashboard',
    components: {
        Aside,
        Nav,
        GChart
    },
    data() {
        return {
            student: [],
            todolist: [],
        }
    },
    methods: {
        drawchart() {
            this.chartData = [
                    ['Effort', 'Amount given'],
                    ['Absent',1],
                    ['Attended',4]
                ],
                this.chartOptions = {
                        pieHole: 0.4,
                        width:145,
                        height:145,
                        pieSliceTextStyle: {
                            color: 'white',
                            bold:'true',
                            fontSize: 13,
                        },
                        slices: [{color: 'black'}, {color: '#1c64f2'}],
                        legend: 'none',
                        chartArea:{left:5, right:5, top:5, bottom:5},
                        backgroundColor: "transparent",
                }
        }
    },
    async mounted() {
        this.drawchart()

        let query = {
            where: {
                stuEmail: localStorage.getItem("email")
            }
        }
        let query1 = {
            where: {
                userId: localStorage.getItem("userid")
            }
        }

        const token = JSON.parse(localStorage.getItem('token'))
        console.log(token)

        let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
        if (result.status == 200)
            this.student = result.data[0]
        console.log(this.student)

        // let result2 = await axios.get(`/Todo/Todo_find/${localStorage.getItem('userid')}&access_token=${token}`);
        // if (result2.status == 200)
        // this.todolist = result2.data[0]
        // console.log(this.todolist)

        const currayid = await util.fetchacademicyear()

        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${this.student.stuId}/${currayid}?access_token=${token}`)
        if (result3.status == 200)
            this.timetable = result3.data
        console.log(this.timetable.ttRecordList)
        console.log(new Date())
    },
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
