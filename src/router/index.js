import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Order = () => import('views/order/Order')
const routes = [
  {
      path:'',
      redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/order',
    component:Order
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
