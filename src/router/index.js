import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步引入路由组件, 实现路由懒加载
const homePage = () => import("../pages/homePage/homePage.vue")
const classify = () => import("../pages/classify/classify.vue")
const classifyList = () => import("../pages/classifyList/classifyList.vue")
const brandList = () => import("../pages/brandList/brandList.vue")
const shopCart = () => import("../pages/shopCart/shopCart.vue")
const mine = () => import( "../pages/mine/mine.vue")

Vue.use(VueRouter)

export default new VueRouter({
  // mode:"history",
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: "/homePage"
    },
    // 首页
    {
      path:"/homePage",
      component: homePage
    },
    // 分类页
    {
      path:"/classify",
      component: classify,
      children:[
        {
          path:"",
          redirect:"classifyList"
        },
        {
          path: "classifyList",
          component: classifyList
        },
        {
          path: "brandList",
          component: brandList
        }
      ]
    },
    // 购物车页
    {
      path:"/shopCart",
      component: shopCart
    },
    // 我的
    {
      path:"/mine",
      component: mine
    },
  ]
})
