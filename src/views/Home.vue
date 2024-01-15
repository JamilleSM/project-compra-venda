<script setup>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";
</script>

<template>
  <section>
    <h1>Compre ou Venda</h1>
    <ProdutosBuscar />
    <ProdutosLista />
  </section>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  color: #000;
  margin-top: 40px;
  text-align: center;
}
</style>
