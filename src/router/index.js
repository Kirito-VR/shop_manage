import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/home',
    name:'home',
    component:()=>import("../views/HomeView.vue"),
    children:[
      {
        path:'/Good',
        name:'Good',
        component:()=>import("../components/GoodComponents/GoodCom.vue")
      },
      {
        path:'/Order',
        name:'Order',
        component:()=>import("../components/OrderComponents/OrderMana.vue")
      },
      {
        path:'/User',
        name:'User',
        component:()=>import("../components/UserComponents/UserCom.vue")
      },
      {
        path:'/Info',
        name:'Info',
        component:()=>import("../components/UserComponents/UserInfo.vue")
      },
    ]
  },
  {
    path: '/',
    name: 'login',
    component:()=>import("../views/LoginView.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
