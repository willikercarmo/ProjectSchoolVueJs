<template>
  <div>
    <Title text="Professors" />
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Students Count</th>
      </thead>
      <tbody v-if="professors.length">
        <tr v-for="(professor, index) in professors" :key="index">
          <td>{{ professor.id }}</td>

          <router-link
            v-bind:to="'/students/' + professor.id"
            tag="td"
            style="cursor: pointer"
          >
            {{ professor.name }} {{ professor.surname }}
          </router-link>

          <td>{{ professor.countStudents }}</td>
        </tr>
      </tbody>
      <tfoot v-else>
        Student not found!
      </tfoot>
    </table>
  </div>
</template>

<script>
import Title from "../_Shared/Title";

export default {
  components: {
    Title,
  },
  data() {
    return {
      professors: [],
      students: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/students")
      .then((response) => response.json())
      .then((students) => {
        this.students = students;
        this.loadingProfessors();
      });
  },
  props: {},
  methods: {
    countStudentsByProfessor() {
      this.professors.forEach((professor, index) => {
        professor = {
          id: professor.id,
          name: professor.name,
          countStudents: this.students.filter(
            (student) => student.professor.id == professor.id
          ).length,
        };
        this.professors[index] = professor;
      });
    },
    loadingProfessors() {
      this.$http
        .get("http://localhost:3000/professors")
        .then((response) => response.json())
        .then((professor) => {
          this.professors = professor;
          this.countStudentsByProfessor();
        });
    },
  },
};
</script>

<style scoped></style>
