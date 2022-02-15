<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" placeholder="Student's name" v-model="name" />

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
  name: "Students",
  data() {
    return {
      title: "Student",
      name: "Students",
    };
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
