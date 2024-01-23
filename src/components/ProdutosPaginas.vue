<template>
  <p>Página: {{ produtosPorPagina }} / Produtos: {{ produtosTotal }}</p>
  <ul>
    <li>
      <router-link :to="{ query: { _page: 1 } }">1</router-link>
    </li>
    <li>
      <router-link :to="{ query: { _page: 2 } }">2</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style scoped></style>
