<template>
  <div>
    <div style="display: flex; width: 50%">
      <h2>{{ text }}</h2>
      <div class="back">
        <slot></slot>
        <button v-show="btnBack" class="btn btn-back" @click="back1()">
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    btnBack: Boolean,
  },
  methods: {
    back1() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}

.btn-back {
  float: right;
  background-color: rgb(199, 199, 199);
}
</style>
