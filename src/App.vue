<script setup>
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <Header />
    <router-link to="/">Home</router-link>
    <Footer />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Arial";
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
  background-color: #000;
}

a {
  color: #345;
  list-style: none;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
}
</style>
