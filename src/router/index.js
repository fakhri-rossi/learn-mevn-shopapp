import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/product/IndexPage.vue'
import ProductDetail from '../views/product/DetailPage.vue'
import Cart from '../views/cart/IndexPage.vue'
import NotFound from '@/views/errors/NotFound.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product',
    component: Product
  },
  {
    path: '/product/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/cart/:user_id',
    name: 'cart',
    component: Cart
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
