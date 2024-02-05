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

export const LOGIN_SUCCESS_MESSAGE = "Login bem-sucedido";
export const LOGIN_ERROR_MESSAGE =
  "Falha no login. Verifique suas credenciais.";
export const GENERIC_ERROR_MESSAGE =
  "Erro ao fazer login. Verifique suas credenciais.";

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
    handleLoginError(message) {
      this.showErro = true;
      this.errorMessage = message;

      setTimeout(() => {
        this.showErro = false;
      }, 5000);
    },

    async FormLogin() {
      try {
        const { data } = await api.login(this.loginData);

        if (data && data.message === LOGIN_SUCCESS_MESSAGE) {
          this.$router.push("/");
          console.log("Usuário autenticado com sucesso");
        } else {
          this.handleLoginError(LOGIN_ERROR_MESSAGE);
        }
      } catch (error) {
        this.handleLoginError(GENERIC_ERROR_MESSAGE);
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
