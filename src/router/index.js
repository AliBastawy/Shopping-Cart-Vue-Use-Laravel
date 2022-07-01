import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import CheckOut from '../components/CheckOut.vue'
import Success from '../components/Success.vue'
import ErrorPage from '../components/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: "Cart",
    component: Cart
  },
  {
    path: '/Checkout',
    name: "Checkout",
    component: CheckOut
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/error",
    name: "Error",
    component: ErrorPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
