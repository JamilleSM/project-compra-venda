<template>
  <form class="container">
    <div class="form-input">
      <input type="text" v-model="loginData.email" placeholder="email" />
      <input type="password" v-model="loginData.senha" placeholder="senha" />
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

  <div v-if="showErro" class="error-message">
    {{ errorMessage }}
  </div>
</template>

<script>
import { api } from "@/api/services";

export default {
  data() {
    return {
      loginData: {
        email: "",
        senha: "",
      },
      showErro: false,
      errorMessage: "",
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    };
  },
  methods: {
    async FormLogin() {
      try {
        const response = await api.login(this.loginData);

        if (
          response &&
          response.data &&
          response.data.message === "Login bem-sucedido"
        ) {
          this.$router.push("/");
          console.log("Usuário autenticado com sucesso");
        } else {
          this.showErro = true;
          this.errorMessage = "Falha no login. Verifique suas credenciais.";

          setTimeout(() => {
            this.showErro = false;
          }, 5000);
        }
      } catch (error) {
        this.showErro = true;
        this.errorMessage = "Erro ao fazer login. Verifique suas credenciais.";

        setTimeout(() => {
          this.showErro = false;
        }, 5000);
      }
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

.error-message {
  color: red;
  margin-top: 10px;
  margin-left: 8px;
}
</style>
