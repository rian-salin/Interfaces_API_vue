import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/CadastroApi',
    name: 'CadastroApi',
    
    component: () => import(/* webpackChunkName: "CadastroApi" */ '../views/CadastroApiView.vue')
  },
  {
    path: '/Homol&Produc',
    name: 'Homol&Produc',
    
    component: () => import(/* webpackChunkName: "Homol&Produc" */ '../views/Homol&ProducView.vue')
  }
]
    
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
    
export default router
