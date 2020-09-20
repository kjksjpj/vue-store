<!--
 * @Description: 项目根组件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-05 13:14:48
 -->
<template>
  <div id="app" name="app">
    <el-container>
      <!-- 顶部导航栏 -->
      <div class="topbar">
        <div class="nav">

          <ul>

              <li class="cart" style="margin-right: 100px" @mouseleave="displayChange(false)">

                  <div class="cartTitle"  style="text-align: center" id="shopCartTitle">
                      <a class="shopCart" @mouseover="getShopCartContent(),displayChange(true)"  @click="goShoppingCart" style="cursor: pointer;height: 40px;line-height: 40px;">
                          <i class="el-icon-shopping-cart-full" style="line-height: 40px;font-size: larger;color: #f91424;"></i>
                          <span style="color: #f91424;margin-left: 5px">购物车</span>
                          <span style="color: #5fa0b2;margin-left: 5px">{{this.shoppingCart.length}}</span>

                      </a>
                  </div>

                  <!--<div class="cartReady" v-show="kong" style="background: #fff url(//img.alicdn.com/tps/i3/T1b1m3XkVpXXXXXXXX-32-32.gif) no-repeat 50% 50%;">
                  </div>-->
                      <div id="shopCartContent" style="overflow-y:scroll;width:300px;display: none;
                  border:#afacb1 1px solid;background-color:white;position: absolute;z-index: 1000001">

                       <div style="font-size: 12px;font-weight: 700;text-align: left;margin-left: 10px;color: black">
                                 <strong>最近加入的宝贝：</strong>
                        </div>

                        <ul>
                         <li style="margin-bottom: 5px" class="product-list" v-for="item in shoppingCart" :key="item.skuId" >

                             <div id="shopCartContentItem" style="display: flex;">
                                 <!--商品图片-->
                                 <div class="pro-img" style=" width: 40px;
                                            height: 40px;">
                                     <a @click="getProductDetails(item.skuId)" style="cursor: pointer">
                                         <img :src="item.defaultImages"  style="
                                            margin-left: 5px;
                                            width: 40px;
                                            height: 40px;
                                            display: inline-block;
                                           " />
                                     </a>
                                 </div>

                                 <!--商品标题-->
                                 <div class="pro-text" style="
                                        font-size:11px;width:160px;height:40px;
                                         overflow: hidden;">
                                     <div class="pro-name">
                                         <a  class="pro-text-a"  @click="getProductDetails(item.skuId)" style="color:black;cursor: pointer;" >
                                             {{item.title}}
                                         </a>
                                     </div>
                                 </div>


                                 <!--商品价格-->
                                 <div class="pro-price" style="color: #ff714f;">{{item.price|priceFormat}}</div>
                             </div>

                         </li>
                     </ul>

                      <div style="margin-top: 10px"><hr  width="98%"  color=#987cb9 SIZE=1></div>


                      <div style="text-align: right;margin-right: 20px;">

                          <p>
                              <a  href="/#/shoppingCart" target="_blank" style="color: #fff; background: #f40;display: inline-block;
                                    vertical-align: middle;
                                    padding: 0 10px;
                                    height: 25px;
                                    font-size: 12px;
                                    line-height: 25px;">
                              查看我的购物车
                              </a>
                          </p>
                      </div>
                  </div>


              </li>

            <li v-if="!this.$store.getters.getUser" style="margin-right: 20px">
              <el-button type="text" @click="login">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text" @click="register = true">注册</el-button>
            </li>
            <li v-else style="margin-right: 20px">
              <el-dropdown>
                    <span class="el-dropdown-link">
                            欢迎{{this.$store.getters.getUser.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-popover placement="top-start" width="180" v-model="visible">
                        <p>确定退出登录吗？</p>
                        <div style="text-align: right; margin: 10px 0 0">
                          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                          <el-button type="primary" size="mini" @click="logout">确定</el-button>
                        </div>
                        <el-dropdown-item type="text" slot="reference">退出登录</el-dropdown-item>
                      </el-popover>
                    </el-dropdown-menu>
              </el-dropdown>
            </li>


              <!--heshan 个人中心-->
              <li style="margin-right: 20px">
              <el-dropdown >
                  <span class="el-dropdown-link">个人中心</span>
                  <el-dropdown-menu slot="dropdown">
                      <router-link to="/user/profile">
                          <el-dropdown-item>个人信息</el-dropdown-item>
                      </router-link>
                      <router-link to="/user/address">
                          <el-dropdown-item>收货地址</el-dropdown-item>
                      </router-link>
                     <!-- <router-link to="/order">
                          <el-dropdown-item>我的钱包</el-dropdown-item>
                      </router-link>-->
                      <router-link to="/orderList"  target="_blank"  tag="a">
                          <el-dropdown-item>我的订单</el-dropdown-item>
                      </router-link>
                  <!--    <router-link to="/collect">
                          <el-dropdown-item>收藏的商品</el-dropdown-item>
                      </router-link>
                      <router-link to="/collect">
                          <el-dropdown-item>关注的店铺</el-dropdown-item>
                      </router-link>-->
                  </el-dropdown-menu>
              </el-dropdown>
              </li>
              <!--heshan 个人中心END-->

            <li style="margin-right: 20px">
              <el-dropdown >
                <span class="el-dropdown-link">商家入驻</span>
                <el-dropdown-menu slot="dropdown">
                  <router-link to="/Settlement">
                    <el-dropdown-item>填写入驻信息</el-dropdown-item>
                  </router-link>
                  <router-link to="/Check">
                    <el-dropdown-item>查询审核情况</el-dropdown-item>
                  </router-link>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
      <!-- 顶部导航栏END -->

      <!-- 顶栏容器 -->
      <el-header>
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                active-text-color="#409eff"
                router
        >
          <div class="logo">
            <router-link to="/">
              <img src="./assets/imgs/logo.png" alt/>
            </router-link>
          </div>

          <el-menu-item index="/" style="font-size: 20px;color: #ff6700">首页</el-menu-item>
          <el-menu-item index="/goods"  @click="searchAll" style="font-size: 20px;color: #ff6700">全部商品</el-menu-item>
         <!-- <el-menu-item index="/about" style="margin-right: 30px">关于我们</el-menu-item>-->


          <div class="so" style="margin-left: 250px">
                  <el-input placeholder="请输入关键字" v-model="search" @keyup.enter.native="searchClick">
                      <el-button  icon="el-icon-search" @click="searchClick" >搜索</el-button>
                  </el-input>


          </div>



         <!--  <div class="cartTitle" style="margin-top: 9px;text-align: center;" >
              <a class="shopCart"   @click="goShoppingCart" style="cursor: pointer;height: 40px;line-height: 40px;margin:0px 5px 0px 5px">
                    <i class="el-icon-shopping-cart-full" style="line-height: 40px;font-size: larger;color: #f91424;"></i>
                        <span style="color: #f91424;margin-left: 5px">我的购物车</span>
                  <span style="color: #5fa0b2;margin-left: 5px">{{getNum}}</span>
              </a>
           </div>-->



        </el-menu>
      </el-header>
      <!-- 顶栏容器END -->

      <!-- 登录模块 -->
      <MyLogin></MyLogin>
      <!-- 注册模块 -->
      <MyRegister :register="register" @fromChild="isRegister"></MyRegister>



      <!-- 主要区域容器 -->
        <!--点击el-main到main.vue中-->
      <el-main>
        <keep-alive>
          <router-view v-if="isRouterAlive"></router-view>
        </keep-alive>
      </el-main>
      <!-- 主要区域容器END -->

      <!-- 底栏容器 -->
      <el-footer>
        <div class="footer">
          <div class="ng-promise-box">
            <div class="ng-promise">
              <p class="text">
                <a class="icon1" href="javascript:;">7天无理由退换货</a>
                <a class="icon2" href="javascript:;">满99元全场免邮</a>
                <a class="icon3" style="margin-right: 0" href="javascript:;">100%品质保证</a>
              </p>
            </div>
          </div>
         <!-- <div class="github">
            <a href="https://github.com/hai-27/vue-store" target="_blank">
              <div class="github-but"></div>
            </a>
          </div>-->
          <div class="mod_help">
            <p>
              <router-link to="/">首页</router-link>
              <span>|</span>
              <router-link to="/goods">全部商品</router-link>
             <!-- <span>|</span>-->
              <!--<router-link to="/about">关于我们</router-link>-->
            </p>
           <!-- <p class="coty">商城版权所有 &copy; 2012-2021</p>-->
          </div>
        </div>
      </el-footer>
      <!-- 底栏容器END -->
    </el-container>
  </div>
</template>

<script>
  import {mapActions} from "vuex";
  import {mapGetters} from "vuex";
  //  ./代表当前路径  不能不写  必须加上
  //import ShopCart from  "./views/ShoppingCart"
  import { Loading } from 'element-ui';


  export default {
    beforeUpdate() {
      this.activeIndex = this.$route.path;
    },
      provide (){
          //控制刷新页面
          return {
              reload:this.reload
          }
      },
    data() {
      return {
          isRouterAlive:true,//控制刷新页面
          loading:true,//控制loading显示隐藏
        shoppingCart:[],//购物车内容
        activeIndex: "", // 头部导航栏选中的标签
        search: "", // 搜索条件
        register: false, // 是否显示注册组件
        visible: false ,// 是否退出登录
        //categoriesList:[],
      };
    },
    created() {
      // 获取浏览器localStorage，判断用户是否已经登录
      if (localStorage.getItem("user")) {
        // 如果已经登录，设置vuex登录状态
        this.setUser(JSON.parse(localStorage.getItem("user")));
      }
    },
      /*局部注册子组件*/

    computed: {
      ...mapGetters(["getUser"]),
        //返回购物车商品总数
      /*  getNum:function () {
            var TotalCount=0;
            this.shoppingCart.forEach(item=>{
                TotalCount+=item.count
            })
            //alert(TotalCount)
            return TotalCount;
        }*/

    },
    watch: {
      // 获取vuex的登录状态
      getUser: function (val) {
        if (val === "") {
          // 用户没有登录
          this.setShoppingCart([]);
        } else {
          // 用户已经登录,获取该用户的购物车信息
        /*  this.$axios
              .post("/api/user/shoppingCart/getShoppingCart", {
                user_id: val.user_id
              })
              .then(res => {
                if (res.data.code === "001") {
                  // 001 为成功, 更新vuex购物车状态
                  this.setShoppingCart(res.data.shoppingCartData);
                } else {
                  // 提示失败信息
                  this.notifyError(res.data.msg);
                }
              })
              .catch(err => {
                return Promise.reject(err);
              });*/
        }
      }
    },
    methods: {
      ...mapActions(["setUser", "setShowLogin", "setShoppingCart","setDistInfo"]),
        //控制刷新页面
        reload (){
            this.isRouterAlive = false
            this.$nextTick(function(){
                this.isRouterAlive = true
            })
        },
      login() {
        // 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
        this.setShowLogin(true);
      },
      // 退出登录
      logout() {
          //清除cookie
        this.visible = false;
        // 清空本地登录信息
        localStorage.setItem("user", "");
        // 清空vuex登录信息
        this.setUser("");
        this.setDistInfo("");
        this.notifySucceed("成功退出登录");
        this.$axios
            .get(this.$target1+"/auth/logOut")
            .catch(error=>
                console.log(error)
            )



      },
      // 接收注册子组件传过来的数据
      isRegister(val) {
        this.register = val;
      },
        // 点击全部商品按钮
        searchAll() {
                // 跳转到Goods页面
                 this.$router.push(
                    {path: "/goods",
                    query:{
                        search:null,
                    }}
                );
        },
      // 点击搜索按钮
      searchClick() {
        if (this.search != "") {
          // 跳转到goodsByKeyword页面,并传递搜索条件
            let routeUrl =this.$router.resolve(
              {path: "/goodsByKeyword",
                  query: {
                         search: this.search
              }
              }
          );
            window.open(routeUrl.href, '_blank');

        }
      },
        //点击购物车
       goShoppingCart(){
           // 跳转到shoppingcart组件页面
         this.$router.push({ path: '/shoppingCart'})
       },
        //鼠标悬浮我的购物车展示购物车预览
        getShopCartContent(){
            let loadingInstance = Loading.service({ text:"加载中", spinner:"el-icon-loading",
            background:"rgba(252,250,255,0.8)",target:document.querySelector("#shopCartContent")});
            this.$axios
                .get(this.$target1+"/cart")
                .then(res=>{
                    this.shoppingCart=res.data.data;
                    //console.log(this.shoppingCart)
                    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                        loadingInstance.close();
                    });
                })
                .catch(error=>
                    console.log(error)
                )
        },
        //悬浮展示
        displayChange(flag){
          if(flag){
              document.getElementById('shopCartContent').style.display = 'block';
          }else {
              document.getElementById('shopCartContent').style.display = 'none';
          }
        },
        // 点击商品查看详情
        getProductDetails(product_id){
            let routeUrl =this.$router.resolve(
                {path: "/goods/details",
                    query: {
                        productID: product_id
                    }
                }
            );
            window.open(routeUrl.href, '_blank');

        },


    },

  };
</script>

<style>
  /* 全局CSS */
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  #app .el-header {
    padding: 0;
  }

  #app .el-main {
    min-height: 300px;
    padding: 20px 0;
  }

  #app .el-footer {
    padding: 0;
  }

  a,
  a:hover {
    text-decoration: none;
  }
  .pro-text-a :hover{
      color: yellow;
  }

  /* 全局CSS END */

  /* 顶部导航栏CSS */
  .topbar {
    height: 40px;
    background-color: #3d3d3d;
    margin-bottom: 20px;
  }

  .topbar .nav {
    width: 1225px;
    margin: 0 auto;
  }

  .topbar .nav ul {
      float: right;
     /* margin: 0px 50px 0px 50px;*/
  }

  .topbar .nav li {
    float: left;
    height: 40px;
    color: #b0b0b0;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
   /* margin-left: 20px;*/
  }

  .topbar .nav .sep {
    color: #b0b0b0;
    font-size: 12px;
    margin: 0 5px;
  }

  .topbar .nav li .el-button {
    color: #b0b0b0;
  }

  .topbar .nav .el-button:hover {
    color: #fff;
  }

  .topbar .nav li a {
    color: #b0b0b0;
  }

  .topbar .nav a:hover {
    color: #fff;
  }

/*  .topbar .nav .shopCart {
    width: 120px;
    background: #424242;
  }*/

/*  .topbar .nav .shopCart:hover {
    background: #fff;
  }

  .topbar .nav .shopCart:hover a {
    color: #ff6700;
  }

  .topbar .nav .shopCart-full {
    width: 120px;
    background: #ff6700;
  }

  .topbar .nav .shopCart-full a {
    color: white;
  }*/

  /* 顶部导航栏CSS END */

  /* 顶栏容器CSS */
  .el-header .el-menu {
    display: flex;
    flex-direction:row;
    max-width: 1225px;
    margin: 0 auto;
  }

  .el-header .logo {
    height: 60px;
    width: 189px;
    float: left;
    margin-right: 60px;
  }

  .el-header .so {
      width: 300px;
      margin-right: 80px;
      line-height: 60px;
  }
  .el-header .cart{
      /*去除点击后出现边框*/
      outline:none;
  }
  .el-header  .cartTitle{
      height: 40px;
      border: 1px solid #eae7ec;;
  }
  .el-header  .cartTitle:hover{
      height: 40px;
      border: 1px solid #d71c1f;;
  }




  /* 顶栏容器CSS END */

  /* 底栏容器CSS */
  .footer {
    width: 100%;
    text-align: center;
    background: #2f2f2f;
    padding-bottom: 20px;
  }

  .footer .ng-promise-box {
    border-bottom: 1px solid #3d3d3d;
    line-height: 145px;
  }

  .footer .ng-promise-box {
    margin: 0 auto;
    border-bottom: 1px solid #3d3d3d;
    line-height: 145px;
  }

  .footer .ng-promise-box .ng-promise p a {
    color: #fff;
    font-size: 20px;
    margin-right: 210px;
    padding-left: 44px;
    height: 40px;
    display: inline-block;
    line-height: 40px;
    text-decoration: none;
    background: url("./assets/imgs/us-icon.png") no-repeat left 0;
  }

  .footer .github {
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
  }

  .footer .github .github-but {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background: url("./assets/imgs/github.png") no-repeat;
  }

  .footer .mod_help {
    text-align: center;
    color: #888888;
  }

  .footer .mod_help p {
    margin: 20px 0 16px 0;
  }

  .footer .mod_help p a {
    color: #888888;
    text-decoration: none;
  }

  .footer .mod_help p a:hover {
    color: #fff;
  }

  .footer .mod_help p span {
    padding: 0 22px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #b0b0b0;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  /* 底栏容器CSS END */
</style>
