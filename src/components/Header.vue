<script setup></script>

<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="../assets/ranek.svg" alt="logo" />
      </router-link>
      <router-link to="/" class="btn">Vender / Login</router-link>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
}
</style>
