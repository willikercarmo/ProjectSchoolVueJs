<template>
  <div>
    <Title text=Student />
    <div>
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
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }} {{ student.surname }}</td>
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
      name: "",
      students: [
        {
          id: 1,
          name: "Williker",
          surname: "Carmo",
        },
        {
          id: 2,
          name: "Terezinha",
          surname: "Carvalho",
        },
        {
          id: 3,
          name: "Wanessa",
          surname: "Camargo",
        },
      ],
    };
  },
  props: {},
  methods: {
    addStudent() {
      let _student = {
        name: this.name,
      };
      this.students.push(_student);
      this.students.forEach((student) => {
        console.log(student);
        console.log("---------------");
      });
      this.name = "";
    },
    removeStudent(student) {
      let _index = this.students.indexOf(student);
      this.students.splice(_index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  /* width: calc(100% - 150px); */
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: #687f7f;
  display: inline;
}

.btn-input1 {
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
