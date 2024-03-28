import axios from './axios.js'
export default {
    async fetchacademicyear() {
        let query = {
            where: {
                isCurrent: 1
            }
        }
        let currAcademicyearId = localStorage.getItem("curr_ay")
        if (!currAcademicyearId) {
            let result = await axios.get(`/AcademicYearInfos?filter=${JSON.stringify(query)}`);
            if (result.status == 200)
                currAcademicyearId = result.data[0].ayId
            console.log(currAcademicyearId)
            localStorage.setItem("curr_ay", currAcademicyearId)
        }
        return currAcademicyearId
    },

    async fetchstuInfo() {
        const token = JSON.parse(localStorage.getItem('token'))
        let query = {
            where: {
                stuEmail: localStorage.getItem("email")
            }
        }
        let student = JSON.parse(localStorage.getItem("studentinfo"))
        if (!student) {

            let result = await axios.get(`/StudentInfos?filter=${JSON.stringify(query)}&access_token=${token}`);
            if (result.status == 200) {

                student = result.data[0]
                console.log(student)
                localStorage.setItem("studentinfo", JSON.stringify(student))
                return student
            }
        }
        return student
    }
}
