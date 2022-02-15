import Vue from "vue";
import Router from "vue-router";
import Students from "./components/Students/Students.vue";
import StudentDetails from "./components/Students/StudentDetails.vue";
import Professor from "./components/Professors/Professors.vue";
import About from "./components/About/About.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/professors',
            name: 'professors',
            component: Professor
        },
        {
            path: '/students/:prof_id',
            name: 'students',
            component: Students
        },
        {
            path: '/students-all',
            name: 'students',
            component: Students
        },
        {
            path: '/student-details/:id',
            name: 'student-details',
            component: StudentDetails
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
});
