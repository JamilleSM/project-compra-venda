<template>
  <section class="produtos-container">
    <div v-if="produtos && produtos.length" class="produtos">
      <div class="produto" v-for="(produto, index) in produtos" :key="index">
        <router-link to="" />
        <div>
          <img
            v-if="produto.fotos"
            :src="produto.fotos[0].src"
            :alt="produto.fotos[0].titulo"
          />
          <router-link to="/" class="btn-2">sale</router-link>
        </div>
        <h2 class="titulo">{{ produto.nome }}</h2>
        <p>{{ produto.descricao }}</p>
        <p class="preco">{{ "R$ " + produto.preco }}</p>
      </div>
      <ProdutosPaginas
        :produtosTotal="produtosTotal"
        :produtosPorPagina="produtosPorPagina"
      />
    </div>
    <div v-else-if="produtos && produtos.length === 0">
      <p class="resultado">
        Sem resultados para o produto pesquisado. Por favor tente outro termo.
      </p>
    </div>
  </section>
</template>

<script>
import { api } from "../api/services.js";
import { serialize } from "../util/help.js";
import ProdutosPaginas from "./ProdutosPaginas.vue";

export default {
  name: "ProdutosLista",
  components: {
    ProdutosPaginas,
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
      produtosTotal: 0,
    };
  },
  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },
  methods: {
    getProdutos() {
      api.get(this.url).then((response) => {
        this.produtosTotal = response.headers["x-total-count"];
        console.log(response);
        this.produtos = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
  color: #000;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgb(0, 0, 0, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
}

.produto:hover {
  box-shadow: 0 6px 12px rgb(0, 0, 0, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
  margin-top: 15px;
}

.preco {
  color: #444;
  margin-top: 10px;
  font-weight: bold;
}

.resultado {
  text-align: center;
  margin-top: 10px;
}

.btn-2 {
  display: inline-block;
  padding: 4px 18px;
  background: #000;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgb(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  font-family: "Arial";
}
</style>
