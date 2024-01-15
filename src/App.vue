<script setup>
import { RouterLink } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-link to="/">Home</router-link>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}
</style>
