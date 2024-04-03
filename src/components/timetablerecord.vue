<template>    
    <div class="shadow-sm shadow-blue-800 bg-blue-100 text-blue-700 font-medium rounded-lg p-2 w-full">
        <!-- {{ parseInt(record.ttStartTime.split(":")[0]) }}-{{ record.ttEndTime }}<br> -->
        <div class="my-1 ">{{ record.ttStartTime}}-{{ record.ttEndTime }}<br></div>
        <div class="my-1">{{ record.subjectInfos.subAlias }} ({{record.ttLoadType}})<br></div>
        <div class="mr-1 my-1"><i class="fa-solid fa-graduation-cap text-sm"></i>
        {{ record.facultyInfos?.firstName[0] }}{{ record.facultyInfos?.middleName[0] }}{{ record.facultyInfos?.lastName[0] }}
        <i class="fa-solid fa-location-dot text-sm ml-4 mr-2"></i>{{ record.locationInfos?.locName }}</div>
    </div>
</template>

<script>
export default{
    name:"TimeTableRecord",
    props:["record"]
}
</script>