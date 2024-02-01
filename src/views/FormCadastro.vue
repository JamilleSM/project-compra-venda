<template>
  <form class="container">
    <div class="form-input">
      <h2>Dados Pessoais:</h2>
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
      <h2>Endereço:</h2>
      <input type="text" v-model="userData.cep" placeholder="Digite seu cep" />
      <input
        type="text"
        v-model="userData.bairro"
        placeholder="Digite seu bairro"
      />
      <input type="text" v-model="userData.rua" placeholder="Digite sua rua" />
      <input
        type="text"
        v-model="userData.numero"
        placeholder="Digite o logradouro"
      />
      <input
        type="text"
        v-model="userData.cidade"
        placeholder="Digite sua cidade"
      />
      <input
        type="text"
        v-model="userData.estado"
        placeholder="Digite seu estado"
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
    Usuário já cadastrado! {{ errorMessage }}.
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
        cep: "",
        bairro: "",
        rua: "",
        numero: "",
        cidade: "",
        estado: "",
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

        this.userData = "";
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
h2 {
  margin-bottom: 10px;
}
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
  margin-bottom: 44px;
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
  margin-bottom: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
  margin-left: 8px;
  margin-bottom: 20px;
}
</style>
