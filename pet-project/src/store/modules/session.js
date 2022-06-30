import axios from 'axios';
import { isEmpty } from 'lodash';

const state = {
    api_url: 'https://api.hatchways.io/assessment/students',
    students: [],
};
//getting data from state sending it to vue pages
const getters = {
    api_url: (state) => state.api_url,
    students: (state) => state.students,

};
//getting data we need for the application - simply api calls 
const actions = { 
    async getStudentInfo ({ commit, getters}) {
        try {
            const response = await axios.get(
                `https://api.hatchways.io/assessment/students`
            );

            if(!isEmpty(response.data)) {
              await commit(
                    'handleStudents', 
                    {
                        data: response.data
                    }
                ); 
            }   

        } catch (error) {
            console.log(error);
        }
    },
};

//used to update data in the state
const mutations = { 
    handleStudents(state, payload) {
        let students = [];
        let grades = [];

        for(let i = 0; i < payload.data.students.length; i+=1) {
            let average = 0;
            let total = 0;

            //include average mean grade for students
            payload.data.students[i].averageGrade = 0;
            grades =  payload.data.students[i].grades;

            for(var x=0; x < grades.length; x++){

                total += parseInt(grades[x]);

            }

            average = total / grades.length;
            average = average.toFixed(1);

            payload.data.students[i].averageGrade = average;

            students.push(payload.data.students[i])
        }

        state.students = students;

    },

};

export default {
    state,
    getters,
    actions,
    mutations
}