import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/ComputerView'
  },
  {
    path: '/MobileView',
    name: 'MobileView',
    component: () => import('../views/mobileView.vue')
  },
  {
    path:"/ComputerView",
    name:"ComputerView",
    component:() => import("../views/computerView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
