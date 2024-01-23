import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FormLogin from "../views/FormLogin.vue";
import FormCadastro from "../views/FormCadastro.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/formLogin",
      name: "formLogin",
      component: FormLogin,
    },
    {
      path: "/formCadastro",
      name: "formCadastro",
      component: FormCadastro,
    },
  ],
});

export default router;
