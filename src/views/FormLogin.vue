<template>
  <form class="container">
    <div class="form-input">
      <input type="text" v-model="email" placeholder="email" />
      <input type="password" v-model="senha" placeholder="senha" />
      <input
        class="btn btn-login"
        id="lupa"
        type="submit"
        value="Login"
        @click.prevent="FormLogin"
      />
    </div>
    <router-link to="/formCadastro" class="link"
      >Não possui uma conta? Clique para cadastrar
      <img class="icon" src="../assets/seta.svg" alt="seta" />
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      senha: "",
    };
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
