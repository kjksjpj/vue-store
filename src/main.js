/*
 * 入口文件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-04 23:38:41
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import cookie from 'js-cookie'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './element-variables.scss'
Vue.use(ElementUI);
Vue.use(VueAxios, axios)




// 全局函数及变量
import Global from './Global';
Vue.use(Global);

import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.withCredentials = true;



// 全局请求拦截器
// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     // 跳转error页面
//     router.push({ path: "/error" });
//     return Promise.reject(error);
//   }
// );
// http request 拦截器
axios.interceptors.request.use(


    config => {
      //debugger
      if (cookie.get('wg')) {
        config.headers['token'] = cookie.get('wg');
      }

      // alert(cookie.get('MALL_TOKEN'))
      console.log(config.headers)
      return config

    },
    err => {
      return Promise.reject(err);
    })
// 全局响应拦截器
axios.interceptors.response.use(
  res => {
    if (res.data.code ===1) {
      // 1表示没有登录
      // 提示没有登录
      // alert(res.data.data)
      Vue.prototype.notifyError(res.data.msg);
      // 修改vuex的showLogin状态,显示登录组件
      store.dispatch("setShowLogin", true);
    }
    if (res.data.code === "500") {
      // 500表示服务器异常
      // 跳转error页面
      router.push({ path: "/error" });
    }
    return res;
  },
  error => {
    // 跳转error页面
    router.push({ path: "/error" });
    return Promise.reject(error);
  }
);

// 全局拦截器,在进入需要用户权限的页面前校验是否已经登录
router.beforeResolve((to, from, next) => {
  const loginUser = store.state.user.user;
 // console.log(to.fullPath)
  // 判断路由是否设置相应校验用户权限
  if (to.meta.requireAuth) {
    if (!loginUser) {
      // 没有登录，显示登录组件，并在登录成功后跳转到拦截前需要进入的页面
      store.dispatch("setShowLogin", true);
      if (from.name == null) {
        //此时，是在页面没有加载，直接在地址栏输入链接，进入需要登录验证的页面
        next("/");
        return;
      }
      //终止导航
      next(false);
      return;
     /* next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })*/
    }
  }
  next();
});



/**
 *  金额初始化处理
 * @param value 调用过滤器时，输入的文本
 */
Vue.filter('priceFormat',(value)=> {
    return '￥'+value.toFixed(2)//保留两位小数
  }
)


// 相对时间过滤器,把时间戳转换成时间
// 格式: 2020-02-25 21:43:23
Vue.filter('dateFormat', (dataStr) => {
  var time = new Date(dataStr);
  function timeAdd0 (str) {
    if (str < 10) {
      str = '0' + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(h) + ':' + timeAdd0(mm) + ':' + timeAdd0(s);
});

Vue.filter('dateFormat1', (dataStr) => {
  var time = new Date(dataStr);
  function timeAdd0 (str) {
    if (str < 10) {
      str = '0' + str;
    }
    return str;
  }
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' ;
});



//全局组件
import MyMenu from './components/MyMenu';
Vue.component(MyMenu.name, MyMenu);
import MyList from './components/MyList';
Vue.component(MyList.name, MyList);
import MyLogin from './components/MyLogin';
Vue.component(MyLogin.name, MyLogin);
import MyRegister from './components/MyRegister';
Vue.component(MyRegister.name, MyRegister);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
