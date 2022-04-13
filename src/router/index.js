import Vue from "vue";
import VueRouter from "vue-router";
import Deck from "../views/Deck.vue";
import Browse from "../views/Browse.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Deck",
    name: "Deck",
    component: Deck,
  },
  {
    path: "/browse",
    name: "Browse",
    component: Browse,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
