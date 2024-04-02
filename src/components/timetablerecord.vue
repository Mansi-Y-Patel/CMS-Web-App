<template>    
    <div class="shadow-sm shadow-blue-600 rounded-lg p-2 w-full">
        {{ parseInt(record.ttStartTime.split(":")[0]) }}-{{ record.ttEndTime }}<br>
        {{ record.subjectInfos.subAlias }} ({{record.ttLoadType}})<br>
        {{ record.facultyInfos?.firstName[0] }}{{ record.facultyInfos?.middleName[0] }}{{ record.facultyInfos?.lastName[0] }}<br>
        {{ record.locationInfos?.locName }}
    </div>
</template>

<script>
export default{
    name:"TimeTableRecord",
    props:["record"]
}
</script>