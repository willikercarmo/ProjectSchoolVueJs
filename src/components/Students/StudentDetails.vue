<template>
  <div>
    <Title :text="`Student: ${student.name}`" :btnBack="!showing">
      <button v-show="showing" class="btn btn-editar" @click="edit()">
        Edit
      </button>
    </Title>
    <table>
      <tbody>
        <tr>
          <td class="colPequeno">Id:</td>
          <td>
            <label> {{ student.id }} </label>
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Name:</td>
          <td>
            <label v-if="showing"> {{ student.name }} </label>
            <input v-else v-model="student.name" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Surname:</td>
          <td>
            <label v-if="showing"> {{ student.surname }} </label>
            <input v-else v-model="student.surname" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Birth Date:</td>
          <td>
            <label v-if="showing"> {{ student.birthDate }} </label>
            <input v-else v-model="student.birthDate" type="text" />
          </td>
        </tr>
        <tr>
          <td class="colPequeno">Professor:</td>
          <td>
            <label v-if="showing"> {{ student.professor.name }} </label>
            <select v-else v-model="student.professor">
              <option
                v-for="(professor, index) in professors"
                :key="index"
                v-bind:value="professor"
              >
                {{ professor.name }}
              </option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 10px">
      <div v-if="!showing">
        <button class="btn btn-save" @click="save1(student)">Save</button>
        <button class="btn btn-cancel" @click="cancel1()">Cancel</button>
      </div>
    </div>
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
      student: {},
      id: this.$route.params.id,
      showing: true,
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/students/" + this.id)
      .then((response) => response.json())
      .then((student) => (this.student = student));

    this.$http
      .get("http://localhost:3000/professors")
      .then((response) => response.json())
      .then((professor) => {
        this.professors = professor;
      });
  },
  methods: {
    edit() {
      this.showing = !this.showing;
    },
    save1(_student) {
      let _studentEdit = {
        id: _student.id,
        name: _student.name,
        surname: _student.surname,
        birthDate: _student.birthDate,
        professor: _student.professor,
      };

      this.$http.put(
        "http://localhost:3000/students/" + _studentEdit.id,
        _studentEdit
      );
      this.showing = !this.showing;
    },
    cancel1() {
      this.showing = !this.showing;
    },
  },
};
</script>

<style scoped>
.colPequeno {
  width: 20%;
  
}

input,
select {
  margin: 0px;
  padding: 5px 10px;
  font-size: 0.9em;
  border: 1px solid silver;
  border-radius: 5px;
  font-family: Montserrat;
  background-color: rgb(245, 245, 245);
  width: 95%;
}

select {
  height: 38px;
  width: 100%;
}

.btn-editar {
  float: right;
  background-color: rgb(76, 186, 249);
}

.btn-save {
  float: right;
  background-color: rgb(79, 196, 68);
}

.btn-cancel {
  float: left;
  background-color: rgb(249, 186, 92);
}
</style>
