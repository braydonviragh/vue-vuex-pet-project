<template>
  <div>
    <h1>Student List</h1>
    <StudentList/>
  </div>
</template>

<script>
import StudentList from './components/StudentList.vue'
import { mapActions } from 'vuex';

  export default {
    name: 'Student Pet Project',
    components:{
      StudentList
    },
  }
</script>

<style scoped>

</style>
