import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favoritos from "../views/Favoritos.vue";
const routes = [
  {
    //Rota Home '/'
    path: "/",
    name: "Home",
    component: Home,
  },
  {
  //Rota favoritos '/Favoritos'
    path: "/Favoritos",
    name: "Favoritos",
    component: Favoritos,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
