<template>
  <p>Página: {{ produtosPorPagina }} / Produtos: {{ produtosTotal }}</p>
  <ul>
    <li>
      <router-link :to="{ query: { _page: 1 } }"
        ><img class="icon" src="../assets/setaesquerda.svg" alt="seta"
      /></router-link>
    </li>
    <li>
      <router-link :to="{ query: { _page: 2 } }">
        <img class="icon" src="../assets/setadireita.svg" alt="seta" />
      </router-link>
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

<style scoped>
ul {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

p {
  color: #4f63ac;
}
</style>
