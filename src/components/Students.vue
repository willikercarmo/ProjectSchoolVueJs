<template>
  <div>
    <h1>{{ title }}</h1>
    <input
      type="text"
      placeholder="Student's name"
      v-model="name"
      v-on:keyup.enter="addStudent()"
    />

    <table border="1px">
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>
            <button class="btn" @click="Remove()">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Student",
      name: "",
      students: [
        {
          id: 1,
          name: "Williker Carmo",
        },
        {
          id: 2,
          name: "Terezinha Carvalho",
        },
        {
          id: 3,
          name: "Wanessa Camargo",
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
      this.name = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
