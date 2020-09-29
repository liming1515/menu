import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginFun from '../views/loginFun.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/loginFun' },
  { path: '/loginFun', component: LoginFun }
]

const router = new VueRouter({
  routes
})

export default router
