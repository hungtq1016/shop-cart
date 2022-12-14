import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:"/productdesc/:id",
    name:"ProductDescriptionDrawer",
    component:()=>import('../components/product/ProductDescriptionDrawer.vue')
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import('../views/Cart.vue')
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
