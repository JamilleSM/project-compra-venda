<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/logo.svg" alt="logo" />
      </router-link>
      <router-link to="/formLogin" class="btn">Login</router-link>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgb(0, 0, 0, 0.2);
}

.log {
  padding: 10px 0;
}

.logo img {
  width: 180px;
}
</style>
