<template>
    <div class="profile-wrapper"> 
        <div class="profile-image">
            <font-awesome-icon icon="fa-regular fa-circle-info" />
            <img class="tactic-icon" :src='student.pic'/> 
        </div>
        <div class="profile-bottom">
            <div>
                <p class="profile-name">{{student.firstName}} {{student.lastName}}</p>
                <p class="profile-info">{{student.email}} {{student.company}}</p>
                <p class="profile-info">{{student.skill}} {{student.city}}</p>
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
    .profile-wrapper { 
        border: 1px solid #218648;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        overflow: hidden;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .profile-image { 
        border: 1px solid gray;
        border-radius: 100%;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        padding: 20px;
    }

    .profile-name { 
        font-weight: bold;
        font-size: 22px;
    }

</style>