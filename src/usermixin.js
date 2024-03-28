export default {
    data(){
        loggedInUser:{};
        currAcademicyearId:null
    },
    async created() {
        let query = {
            where: {
                isCurrent: 1
            }
        }

        let result = await axios.get(`/AcademicYearInfos?filter=${JSON.stringify(query)}`);
        if (result.status == 200)
            this.currAcademicyearId = result.data
        console.log(result)
        console.log(currAcademicyearId)
    },
};

