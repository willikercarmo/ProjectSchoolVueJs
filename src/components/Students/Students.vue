<template>
  <div>
    <Title
      :text="
        professorId != undefined
          ? 'Professor: ' + professor.name
          : 'All Students'
      "
    />
    <div v-if="professorId != undefined">
      <input
        type="text"
        placeholder="Student's name"
        v-model="name"
        v-on:keyup.enter="addStudent()"
      />
      <button class="btn btn-input1" @click="addStudent()">Add</button>
    </div>
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </thead>
      <tbody v-if="students.length">
        <tr v-for="(student, index) in students" :key="index">
          <td class="colPequeno">{{ student.id }}</td>
          <router-link :to="`/student-details/${student.id}`" tag="td" style="cursor: pointer">
            {{ student.name }} {{ student.surname }}</router-link>
          <td>
            <button class="btn btn-danger1" @click="removeStudent(student)">
              Remove
            </button>
          </td>
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
      title: "Student",
      professorId: this.$route.params.prof_id,
      professor: {},
      name: "",
      students: [],
    };
  },
  created() {
    if (this.professorId) {
      this.loadingProfessors();
      this.$http
        .get("http://localhost:3000/students?professor.id=" + this.professorId)
        .then((response) => response.json())
        .then((students) => (this.students = students));
    } else {
      this.$http
        .get("http://localhost:3000/students")
        .then((response) => response.json())
        .then((students) => (this.students = students));
    }
  },
  props: {},
  methods: {
    addStudent() {
      let _student = {
        name: this.name,
        surname: "",
        professor: {
          id: this.professor.id,
          name: this.professor.name,
        },
      };

      this.$http
        .post("http://localhost:3000/students", _student)
        .then((response) => response.json())
        .then((student) => {
          this.students.push(student);
          this.name = "";
        });

      this.students.forEach((student) => {
        console.log(student);
        console.log("---------------");
      });
    },
    removeStudent(student) {
      this.$http
        .delete(`http://localhost:3000/students/${student.id}`)
        .then(() => {
          let _index = this.students.indexOf(student);
          this.students.splice(_index, 1);
        });
    },
    loadingProfessors() {
      this.$http
        .get("http://localhost:3000/professors/" + this.professorId)
        .then((response) => response.json())
        .then((professor) => {
          this.professor = professor;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: calc(100% - 195px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: #687f7f;
  display: inline;
}

.btn-input1 {
  width: 150px;
  width: 150px;
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  display: inline;
  background-color: rgb(116, 115, 115);
}

.btn-input1:hover {
  padding: 20px;
  margin: 0px;
  border: 0px;
}
</style>
