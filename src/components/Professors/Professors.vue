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
          <td>{{ professor.name }} {{ professor.surname }}</td>
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
      professors: [
        { id: 1, name: "Natalia" },
        { id: 2, name: "Luis" },
        { id: 3, name: "Natalia" },
      ],
    };
  },
};
</script>

<style scoped></style>
