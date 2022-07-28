import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/home',
    name:'home',
    redirect:'/home/Good',
    component:()=>import("../views/HomeView.vue"),
    children:[
      {
        path:'Good',
        name:'Good',
        component:()=>import("../components/GoodComponents/GoodCom.vue")
      },
      {
        path:'Order',
        name:'Order',
        component:()=>import("../components/OrderComponents/OrderMana.vue")
      },
      {
        path:'User',
        name:'User',
        component:()=>import("../components/UserComponents/UserCom.vue")
      },
      {
        path:'Info',
        name:'Info',
        component:()=>import("../components/UserComponents/UserInfo.vue")
      },
      {
        path:'AfterServe',
        name:'AfterServe',
        component:()=>import("../components/ServiceComponents/AfterSaleCom.vue")
      },
      {
        path:'GoodServe',
        name:'GoodServe',
        component:()=>import("../components/ServiceComponents/GoodService.vue")
      },
      {
        path:'QA',
        name:'QA',
        component:()=>import("../components/ServiceComponents/QA.vue")
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
  {
    path:"/Test",
    name:'Test',
    component:()=>import("../views/TestView.vue"),
    children:[
      {
        path:'Good',
        name:'GoodT',
        component:()=>import("../components/GoodComponents/GoodCom.vue")
      },
      {
        path:'Order',
        name:'OrderT',
        component:()=>import("../components/OrderComponents/OrderMana.vue")
      },
      {
        path:'User',
        name:'UserT',
        component:()=>import("../components/UserComponents/UserCom.vue")
      },
      {
        path:'Info',
        name:'InfoT',
        component:()=>import("../components/UserComponents/UserInfo.vue")
      },
      {
        path:'AfterServe',
        name:'AfterServeT',
        component:()=>import("../components/ServiceComponents/AfterSaleCom.vue")
      },
      {
        path:'GoodServe',
        name:'GoodServeT',
        component:()=>import("../components/ServiceComponents/GoodService.vue")
      },
      {
        path:'QA',
        name:'QAT',
        component:()=>import("../components/ServiceComponents/QA.vue")
      },
    ]

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
