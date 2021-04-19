import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
