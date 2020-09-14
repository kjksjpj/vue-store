/*
 * @Description: 路由配置
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:58:48
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('../components/Error.vue')
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/Goods.vue'),
  },
  {
    path: '/goodsByKeyword',
    name: 'GoodsByKeyword',
    component: () => import('../views/GoodsByKeyword.vue'),
  },
  {
    path: '/distribution',
    name: 'Distribution',
    component: () => import('../views/Distribution'),
    meta: {
      requireAuth: true // 需要验证登录状态
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/goods/details',
    name: 'Details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/goods/details/reviews',
    name: 'reviews',
    component: () => import('../components/ProductReviews1')
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue'),
   /* meta: {
      requireAuth: true // 需要验证登录状态
    }*/
  },
  {
    path: '/collect',
    name: 'Collect',
    component: () => import('../views/Collect.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path:'/Settlement',
    component: ()=> import('../views/Settlement.vue')
  },
  {
    path:'/settle',
    component:()=> import('../views/Settle.vue')
  },
  {
    path:'/check',
    component:()=> import('../views/Check.vue')
  },
  {
    path:'/settle/settle2',
    component:()=> import('../components/Settle2.vue')
  },
  {
    path:'/settle/settle3',
    component:()=> import('../components/Settle3.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/confirmOrder',
    name: 'ConfirmOrder',
    component: () => import('../views/ConfirmOrder.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import('../views/OrderList.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import('../views/Review.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: () => import('../views/OrderDetail.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/unpaidOrderDetail',
    name: 'UnpaidOrderDetail',
    component: () => import('../views/UnpaidOrderDetail.vue'),
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: () => import('../components/Profile'),
      /*  meta: {
        requireAuth: true // 需要验证登录状态
        }*/

      },
      {
        path: 'portal',
        component: () => import('../components/Portal')
      },
    /*  {
        path: 'orderList',
        component: () => import('../views/OrderList')
      },*/
      {
        path: 'favorite',
        component: () => import('../components/Favorite')
      },
      {
        path: 'address',
        component: () => import('../components/Address'),
        meta: {
          requireAuth: true // 需要验证登录状态
        }
      },
    ],
    meta: {
      requireAuth: true // 需要验证登录状态
    }
  }
]

const router = new Router({
  mode: 'history',  //去掉url中的#
  // base: '/dist',
  // mode: 'history',
  routes
})

/* 由于Vue-router在3.1之后把$router.push()方法改为了Promise。所以假如没有回调函数，错误信息就会交给全局的路由错误处理。
vue-router先报了一个Uncaught(in promise)的错误(因为push没加回调) ，然后再点击路由的时候才会触发NavigationDuplicated的错误(路由出现的错误，全局错误处理打印了出来)。*/
// 禁止全局路由错误处理打印
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router
