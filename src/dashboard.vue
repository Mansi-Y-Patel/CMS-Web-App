<template>
<div class="w-full dark:bg-gray-900">
    <Nav />

    <div class="flex">
        <Aside />
        <main class="w-full p-4 bg-white md:ml-52 pt-16">
            {{ currTTrecord.subjectInfos?.subName }}<br>
            {{nextTTrecord}}
            <div class=" lg:grid lg:grid-cols-2  gap-1 m-0 w-full">
                <div class="w-full h-full">
                    <div class="h-1/5 flex gap-2 m-2 rounded-lg">

                        <!-- Name -->
                        <div class="text-lg items-center  w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg">Welcome<br><span class="font-bold">{{ student1.stuFirstname }} {{ student1.stuLastname }}</span> </div>

                        <!-- Link to Schedule page -->
                        <router-link to="/schedule" :class="{ active: $route.path === '/schedule' }" class="flex items-center text-lg font-semibold w-1/2 p-4 shadow-md shadow-gray-400 rounded-lg justify-around hover:bg-gray-100 hover:text-blue-600">
                            <p class="">Schedule</p>
                            <i class="fa-regular fa-calendar text-2xl"></i>
                        </router-link>
                    </div>

                    <!-- Ongoing and upcomimg lectures -->
                    <div class="h-4/5 flex flex-col gap-2 m-2 text-black">

                        <!-- Ongoing -->
                        <div class="h-1/2  flex justify-between p-2 shadow-md shadow-gray-400  rounded-lg">
                            <div class="p-1 w-2/3 mx-4 ">
                                <p class="mb-2">Ongoing</p>
                                <p class="font-bold text-lg">{{currTTrecord.subjectInfos?.subName ?? "No Ongoing lecture/lab"}}</p>
                                <p class="my-2" v-if="currTTrecord.subjectInfos?.subName"><i class="fa-solid fa-graduation-cap mr-2"></i>{{currTTrecord.facultyInfos.firstName}} {{currTTrecord.facultyInfos.lastName}}</p>
                                <p class="" v-if="currTTrecord.subjectInfos?.subName"><i class="fa-solid fa-location-dot text-sm mr-4"></i>{{currTTrecord.locationInfos?.locName}} ({{currTTrecord.ttLoadType}})</p>
                            </div>
                            <div class="p-1 w-1/3 mx-4">
                                <GChart type="PieChart" :data="chartData" :options="chartOptions" class="" />
                            </div>
                        </div>

                        <!-- Upcoming -->
                        <div class="h-1/2 flex justify-between p-2 shadow-md shadow-gray-400 rounded-lg">
                            <div class="p-1 w-2/3 mx-4 text-lg">
                                <p class="mb-4">Upcoming</p>
                                <p class="font-bold text-lg">{{nextTTrecord.subjectInfos?.subName ?? "No Ongoing lecture/lab"}}</p>
                                <!-- <p class="my-2" v-if="this.nextTTrecord.subjectInfos?.subName"><i class="fa-solid fa-graduation-cap mr-2"></i>{{nextTTrecord.facultyInfos.firstName}} {{nextTTrecord.facultyInfos.lastName}}</p>
                                <p class="" v-if="nextTTrecord.subjectInfos?.subName"><i class="fa-solid fa-location-dot text-sm mr-4"></i>{{nextTTrecord.locationInfos?.locName}} ({{nextTTrecord.ttLoadType}})</p> -->
                            </div>
                            <div class="p-1 w-1/3 mx-4">
                                <GChart type="PieChart" :data="chartData" :options="chartOptions" class="" />
                            </div>
                        </div>
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
                        <p class="text-medium font-bold">Announcements:</p>
                        <div class="overflow-y-scroll h-4/5 p-1">
                            <p>fees</p>
                            <p>fees</p>
                            <p>fees</p>
                            <!-- <p>fees</p>
                            <p>fees</p>
                            <p>fees</p> -->
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
                    <div v-if="notes.length === 0" class="no-notes">{{ noNotesMessage }}</div>
                    <div v-else class="rounded-sm p-5">
                        <ul class="grid lg:grid-cols-2 gap-3">
                            <li v-for="(note, index) in notes" :key="index" class="items-center p-1">
                                <input type="checkbox" v-model="note.completed" @change="saveNotes" class="mr-2">
                                <span :class="{ completed: note.completed }">{{ note.text }}</span>
                                <button @click="editNote(index)" class="mx-4 w-16 bg-gray-800 rounded-2xl text-white p-1 hover:bg-black hover:font-semibold">Edit</button>
                                <button @click="deleteNote(index)" class="w-16 bg-gray-800	rounded-2xl text-white p-1 hover:bg-black hover:font-semibold">Delete</button>
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
        GChart
    },
    setup() {
        const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
        const newNote = ref('');
        const showAddForm = ref(false);
        const noNotesMessage = 'No To-Do\'s created. Create one now by pressing the add button above.';

        watchEffect(() => {
            localStorage.setItem('notes', JSON.stringify(notes.value));
        });

        const addNote = () => {
            if (newNote.value.trim() === '') return;
            notes.value.push({
                text: newNote.value,
                completed: false
            });
            newNote.value = '';
        };

        const deleteNote = index => {
            notes.value.splice(index, 1);
        };

        const editNote = index => {
            const newText = prompt('Enter new text:', notes.value[index].text);
            if (newText !== null) {
                notes.value[index].text = newText;
            }
        };

        const saveNotes = () => {
            // Triggered by watchEffect
        };

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
            student1: [],
            todolist: [],
            student: [],
            attendance: [],
            timetable: [],
            currTTrecord: {},
            nextTTrecord: {},
            dayNameList: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"],
            notes: [
            { text: 'Example note 1', completed: false },
            { text: 'Example note 2', completed: true },
            ],
            newNote: '',
        };
    },
    methods: {
        addNote() {
            if (this.newNote.trim() === '') return;
            this.notes.push({
                text: this.newNote,
                completed: false
            });
            this.newNote = '';
        },
        deleteNote(index) {
            this.notes.splice(index, 1);
        },
        editNote(index) {
            const newText = prompt('Enter new text:');
            if (newText !== null) {
                this.notes[index].text = newText;
            }
        },
        toggleCompleted(index) {
            this.notes[index].completed = !this.notes[index].completed;
        },
        drawchart() {
            this.chartData = [
                    ['', ''],
                    ['Absent', 1],
                    ['Attended', 4]
                ],
                this.chartOptions = {
                    pieHole: 0.3,
                    width: 140,
                    height: 140,
                    pieSliceTextStyle: {
                        color: 'white',
                        bold: 'true',
                        fontSize: 13,
                    },
                    slices: [{
                        color: 'black'
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

        async fetchAtt(token, subject) {
            // console.log(subject)
            let inputob = {
                inputOb: {
                    "loadDetail": {
                        "ayId": 10,
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
                const presentcount = this.present.true ?? 0
                const absentcount = this.present.false ?? 0

                if ((presentcount + absentcount) != 0) {
                    this.chartData.push([presentcount, absentcount])
                }
                console.log(this.chartData)
            }
        },
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

        const academicyear = await util.fetchacademicyear()
        console.log(academicyear)

        const student = await util.fetchstuInfo()
        console.log(student.stuId)

        // Personal information of student
        let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
        if (result.status == 200)
            this.student1 = result.data[0]
        // console.log(this.student1)

        // TO-DO
        // let result2 = await axios.get(`/Todo/Todo_find/${localStorage.getItem('userid')}&access_token=${token}`);
        // if (result2.status == 200)
        // this.todolist = result2.data[0]
        // console.log(this.todolist)

        // Timetable info
        let currayid = await util.fetchacademicyear()
        let result3 = await axios.get(`/TimeTableInfos/getTTRecordListByStudent/${student.stuId}/${currayid}?access_token=${token}`)
        let timetable
        if (result3.status == 200) {
            timetable = result3.data
            const list = _.filter(timetable.ttRecordList, record => {
                return record.timetableRecordInfos.length > 0
            })

            // console.log(list[0].timetableRecordInfos)
            this.timetable = list[0].timetableRecordInfos

            const currDay = this.dayNameList[new Date().getUTCDay() - 1]
            const currHour = new Date().getHours() % 12
            const currMinute = new Date().getMinutes()

            // for Ongoing lecture/lab
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

            // for Upcoming lecture/lab
            this.nextTTrecord = _.filter(this.timetable, ob => {
                const ttString1 = this.currTTrecord.ttEndTime.split(":")
                const ttString = ob.ttStartTime.split(":")
                const ttHour = parseInt(ttString[0])
                const ttMinute = parseInt(ttString[1])
                const ttHour1 = parseInt(ttString1[0])
                const ttMinute1 = parseInt(ttString1[1])
                const ttStartDuration = ((ttHour>=1 && ttHour<7)?(ttHour+12):ttHour) * 3600 + ttMinute * 60
                const ttEndDuration = ((ttHour1>=1 && ttHour1<7)?(ttHour1+12):ttHour1) * 3600 + ttMinute1 * 60 
                return (currDay == ob.ttDay) && (ttEndDuration <= ttStartDuration)
            })
            console.log(this.nextTTrecord.subjectInfos?.subName)
            this.nextTTrecord.forEach(element => {
                console.log(element.subjectInfos.subName)
            });
        }
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
