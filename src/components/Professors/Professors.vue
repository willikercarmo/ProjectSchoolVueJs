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

          <router-link to="/students" tag="td" style="cursor: pointer">
            {{ professor.name }} {{ professor.surname }}
          </router-link>

          <td>3</td>
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
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/professors")
      .then((response) => response.json())
      .then((professors) => (this.professors = professors));
  },
  props: {},
};
</script>

<style scoped></style>
