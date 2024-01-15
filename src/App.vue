<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
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
