<template>
    <div>
        <div class="student-list-wrapper">
            <Student  v-for="student in $store.getters.students" :student="student" />
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
    .student-list-wrapper { 
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>