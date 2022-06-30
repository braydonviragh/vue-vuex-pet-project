<template>
    <div>
        <h2>I Am a List of Students</h2>
        <div v-for="student in $store.getters.students">
            <Student :student="student" />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Student from './Student.vue'

    export default {
        name: 'StudentList',
        components:{
            Student,
        },
        methods: {
          ...mapActions([
            'getStudentInfo',
          ]),
          averageGrade() { 

          }
        },
        beforeMount() { 
            this.getStudentInfo();
        }
    }
  
</script>

<style scoped>

</style>