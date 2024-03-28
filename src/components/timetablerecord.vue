<template>    
    <div class="border-b">
        
        {{ record.ttStartTime }}-{{ record.ttEndTime }}<br/>{{ record.subjectInfos.subName }}
    </div>
</template>

<script>
export default{
    name:"TimeTableRecord",
    props:["record"]
}
</script>