<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" placeholder="Student's name" v-model="name"
    v-on:keyup.enter="addStudent()" />

    <table border="1px">
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Williker</td>
          <td>
            <button class="btn" @click="Remove()">Remove</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Terezinha</td>
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
      students: [],
    };
  },
  props: {},
  methods: {
    addStudent() {
      this.students.push(this.name);
      this.students.forEach(student => {
        console.log(student);
        console.log("---------------");
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
