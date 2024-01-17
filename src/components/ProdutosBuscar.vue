<template>
  <section>
    <form action="">
      <input id="busca" name="busca" type="text" v-model="busca" />
      <input
        id="lupa"
        type="submit"
        value="Buscar"
        @click.prevent="buscarProdutos"
      />
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>
