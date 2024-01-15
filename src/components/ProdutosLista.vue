<template>
  <section>
    <h1>Lista</h1>
  </section>
</template>

<script setup>
import { api } from "../api/services.js";

const methods = {
  getProdutos() {
    api.get("/produto").then((response) => {
      this.produtos = response.data;
    });
  },
};
onMounted(() => {
  methods.getProdutos();
});
</script>
