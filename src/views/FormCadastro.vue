<template>
  <form class="container">
    <div class="form-input">
      <input
        type="text"
        v-model="userData.email"
        placeholder="Digite seu email"
      />
      <input
        type="text"
        v-model="userData.nome"
        placeholder="Digite seu nome"
      />
      <input
        type="password"
        v-model="userData.senha"
        placeholder="Digite uma senha"
      />
      <input
        type="password"
        v-model="userData.senha"
        placeholder="Confime a senha"
      />
      <input
        class="btn btn-login"
        id="lupa"
        type="submit"
        value="Cadastrar"
        @click.prevent="FormCadastro"
      />
    </div>
    <router-link to="/formLogin" class="link"
      >Já possui uma conta? Clique para fazer login
      <img class="icon" src="../assets/seta.svg" alt="seta" />
    </router-link>
  </form>

  <div v-if="showSuccess" class="success-message">
    Usuário cadastrado com sucesso!
  </div>
  <div v-if="showErro" class="error-message">
    Usuário já cadastrado! {{ errorMessage }}
  </div>
</template>

<script>
import { api } from "@/api/services";

export default {
  data() {
    return {
      userData: {
        nome: "",
        email: "",
        senha: "",
      },
      showSuccess: false,
      showErro: false,
      errorMessage: "",
    };
  },
  methods: {
    async FormCadastro() {
      try {
        const response = await api.post("/usuario", this.userData);
        console.log("usuario cadastrado");

        this.userData.nome = "";
        this.userData.email = "";
        this.userData.senha = "";

        this.showSuccess = true;

        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      } catch (error) {
        console.log("erro ao cadastrar", error);

        this.showErro = true;
        this.errorMessage = error.response.data.message;

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

.success-message {
  color: green;
  margin-top: 10px;
  margin-left: 8px;
}

.error-message {
  color: red;
  margin-top: 10px;
  margin-left: 8px;
}
</style>
