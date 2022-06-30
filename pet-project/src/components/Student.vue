<template>
    <div class="profile-wrapper"> 
        <div class="profile-image">
            <img class="tactic-icon" :src='student.pic'/> 
        </div>
        <div class="profile-bottom">
            <div>
                <p>{{student.firstName}} {{student.lastName}}</p>
                <p>{{student.email}} {{student.company}}</p>
                <p>{{student.skill}} {{student.city}}</p>
                <div>
                    <p>Average Grade</p>
                    <div>
                        {{student.averageGrade}}
                    </div>
                    <p>Most Recent Grades</p>
                    <div>
                        <span  v-for="grade in student.grades.slice(0, 4)"> {{grade}}, </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        props: ['student'],
    }
</script>

<style scoped>

</style>