// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//  声明使用插件VueRouter是一个构造函数
Vue.use(VueRouter)

// 向外暴露一个路由器对象
export default new VueRouter({//传一个配置对象
//配所有路由
  routes: [//数组
    {
      path: '/msite',
      component :MSite,
         meta: {
           showFooter:true
         }//值为某一个组件
    },
    {
      path :'/search',
      component :Search,
         meta: {
           showFooter:true
         }
     },
     {
       path :'/order',
       component :Order,
         meta: {
           showFooter:true
         }
      },
      {
//路径最好是小写
      path :'/profile',
      component :Profile,
         meta: {
           showFooter:true
         }
       },
//默认为msite首页
       {
       path: '/',
       redirect: '/msite'
   },
      {
//路径最好是小写
      path :'/login',
      component :Login
       },
  ]
})
