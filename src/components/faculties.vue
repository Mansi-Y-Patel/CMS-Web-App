<template>    
    <div class="">
        {{ record.facultyInfos?.firstName[0] }}{{ record.facultyInfos?.middleName[0] }}{{ record.facultyInfos?.lastName[0] }}: {{ record.facultyInfos?.firstName }} {{ record.facultyInfos?.lastName }}

    </div>
</template>

<script>
import _ from 'lodash'
export default{
    name:"Faculties",
    props:["record"]
}
</script>