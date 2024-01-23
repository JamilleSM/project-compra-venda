<template>
  <form class="container">
    <div class="form-input">
      <input type="text" v-model="email" placeholder="Digite seu email" />
      <input type="text" v-model="nome" placeholder="Digite seu nome" />
      <input type="password" v-model="senha" placeholder="Digite uma senha" />
      <input type="password" v-model="senha" placeholder="Confime a senha" />
      <input
        class="btn btn-login"
        id="lupa"
        type="submit"
        value="Cadastrar"
        @click.prevent="FormCadastro"
      />
    </div>
    <router-link to="/formLogin" class="link"
      >Já possui uma conta? Clique para fazer Login
      <img class="icon" src="../assets/seta.svg" alt="seta" />
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
    };
  },
  methods: {
    FormCadastro() {
      this.$axios.post("login", {
        nome: this.nome,
        email: this.email,
        senha: this.senha,
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
}

.form-input {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.btn-login {
  width: 400px;
  margin: 0 auto;
  margin-bottom: 24px;
  margin-top: 10px;
}

.link {
  color: #4f63ac;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  margin-left: 8px;
}
</style>
