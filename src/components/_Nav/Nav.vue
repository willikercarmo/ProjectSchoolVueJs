<template>
  <div class="margin-top1">
    <nav class="margin-main1">
      <router-link to="/professors">Professors</router-link>
      <router-link to="/students">Students</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.margin-top1 {
  background-color: rgb(230, 230, 230);
}

nav {
  padding: 20px 20px 20px 0px;
}

nav a {
  padding: 10px;
  text-decoration: none;
  background-color: white;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}

nav .router-link-active{
background-color: rgb(160, 160, 160);
color: white;
}
</style>
