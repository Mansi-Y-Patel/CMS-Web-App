<template>    
    <div class="">
        {{ record.subjectInfos.subAlias }}: {{ record.subjectInfos.subName }}
    </div>
</template>

<script>
import _ from 'lodash'
export default{
    name:"Subjects",
    props:["record"]
}
</script>