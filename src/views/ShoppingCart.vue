<template>
  <div class="shoppingCart">
    <!-- 购物车头部 -->
    <div class="cart-header">
      <div class="cart-header-content">
        <p>
          <i class="el-icon-shopping-cart-full" style="color:#ff6700; font-weight: 600;"></i>
          我的购物车
        </p>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，希望您购物愉快，天天开心！</span>
      </div>
    </div>
    <!-- 购物车头部END -->

    <!-- 购物车主要内容区 -->
    <div class="content" v-if="this.shoppingCart.length>0">
      <ul>
        <!-- 购物车表头 -->
        <li class="header">
          <div class="pro-check" >
            <el-popover placement="right" v-model="visible">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 10px 0 0">
                <el-button
                        type="primary"
                        size="mini"
                        @click="deleteSomeItem()"
                >确定</el-button>
                <el-button
                        type="text"
                        size="mini" @click="visible = false"
                >取消</el-button>
              </div>
              <!--<el-button slot="reference" style="margin-left: 20px">删除选中商品</el-button>-->
            </el-popover>
          </div>
          <div class="pro-img"></div>
          <div class="pro-name">商品名称</div>
          <div class="pro-price">单价</div>
          <div class="pro-num">数量</div>
          <div class="pro-total">小计</div>
          <div class="pro-action">操作</div>
        </li>
        <!-- 购物车表头END -->

        <!-- 购物车列表 -->
        <li class="product-list" v-for="item in shoppingCart" :key="item.skuId">
          <div class="pro-check">
            <el-checkbox v-model="item.check" @change="checkChange($event,item.skuId)"></el-checkbox>
          </div>
          <div class="pro-img">
            <a @click="getProductDetails(item.skuId)" style="cursor: pointer;">
              <img :src="item.defaultImages" />
            </a>
          </div>
          <div class="pro-name">
            <a @click="getProductDetails(item.skuId)" style="cursor: pointer;position: absolute;line-height: 30px">
            {{item.title}}
            </a>
          </div>
          <div class="pro-price">{{item.price|priceFormat}}元</div>
          <div class="pro-num">
            <!--这里写$event即可 下面就能获取到当前的值了-->
            <el-input-number
              size="small"
              v-model="item.count"
              @change="ChangeNum(item.skuId,$event)"
              :min="1"
              :max="1000"
            ></el-input-number>
          </div>
          <div class="pro-total pro-total-in" >{{item.price*item.count|priceFormat}}元</div>
          <div class="pro-action">
            <el-popover >
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 10px 0 0">
                <el-button
                  type="primary"
                  size="mini"
                  @click="deleteItem(item.skuId)"
                >确定</el-button>
              </div>
              <i class="el-icon-error" slot="reference" style="font-size: 18px;"></i>
            </el-popover>
          </div>
        </li>
        <!-- 购物车列表END -->
      </ul>
      <div style="height:20px;background-color: #f5f5f5"></div>
      <!-- 购物车底部导航条 -->
      <div class="cart-bar">
        <div class="cart-bar-left">
          <span>
            <router-link to="/goods">继续购物</router-link>
          </span>
          <span class="sep">|</span>
          <span class="cart-total">
           已选择
            <span class="cart-total-num">{{checkNum}}</span> 样;
             共
            <span class="cart-total-num">{{getNum}}</span> 件商品，
         <!--   <span class="cart-total-num">{{getNum}}</span> 件-->
          </span>
        </div>
        <div class="cart-bar-right">
          <span>
            <span class="total-price-title">合计：</span>
            <span class="total-price">{{getTotalPrice|priceFormat}}元</span>
          </span>
          <router-link :to="checkNum > 0 ? '/confirmOrder' : ''">
            <div :class="checkNum > 0 ? 'btn-primary' : 'btn-primary-disabled'">去结算</div>
          </router-link>
        </div>
      </div>
      <!-- 购物车底部导航条END -->
    </div>
    <!-- 购物车主要内容区END -->

    <!-- 购物车为空的时候显示的内容 -->
    <div v-else class="cart-empty">
      <div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>快去购物吧！</p>
      </div>
    </div>
    <!-- 购物车为空的时候显示的内容END -->
  </div>
</template>
<script>
//import { mapActions } from "vuex";
//import { mapGetters } from "vuex";

export default {
  data() {
    return {
      visible:false,
      shoppingCart:[],
    };
  },
  created() {
      this.getShoppingCart();
  },
  methods: {
    //获取购物车数据
    getShoppingCart(){
      //console.log("进来了")
      this.$axios
              .get(this.$target1+"/cart")
              .then(res=>{
                    this.shoppingCart=res.data.data;
                   //console.log(this.shoppingCart)
                })
              .catch(error=>
                console.log(error)
              )
    },

    //...mapActions(["updateShoppingCart", "deleteShoppingCart", "checkAll"]),

    // 修改商品数量
    ChangeNum( productID,currentValue) {
      // 当修改数量时，默认勾选
      //this.updateShoppingCart({ key: key, prop: "check", val: true });
      // 向后端发起更新购物车的数据库信息请求
      this.$axios
        .post(this.$target1+"/cart/update", {
          skuId: productID,
          count:currentValue
        })
        .then(res => {
              // 提示更新成功信息
              this.notifySucceed(res.data.msg);
          }
        )
        .catch(err => {
          return Promise.reject(err);
        });
    },

    // 更新购物车商品是否勾选的状态
    checkChange(val, skuId) {
      //console.log(val,skuId)
      this.shoppingCart.find(item=>{
        if(item.skuId==skuId){
          item.check=val
        }
     })
    },
    //批量删除购物车商品
    deleteSomeItem(){

    },
    // 删除购物车商品
    deleteItem(productID) {
      //alert(productID)
      this.$axios
              //请求更新后台数据库
              .post(this.$target1+"/cart/delete/"+productID)
              .then(res => {
                //更新data中的shoppongCart
                this.deleteShoppingCart(productID)
                this.notifySucceed(res.data.msg);
              })
              .catch(err => {
                return Promise.reject(err);
              });
    },
    //删除的同时更新data中的shoppongCart
    deleteShoppingCart (productID) {
      // 根据id删除shoppingCart中对应的数据
      // 1、找到skuId所对应数据的索引
      var index = this.shoppingCart.findIndex(item=>{
        return item.skuId == productID;
      });
      // 2、根据索引删除对应数据
      this.shoppingCart.splice(index, 1);
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
  computed: {
    //返回已选择的商品件数
    checkNum: function () {
      let newFilArr = this.shoppingCart.filter( (item) =>{
        return item.check==true;
      } )
      //console.log(newFilArr.length)
      return newFilArr.length;
    },
    //商品总件数
      getNum:function () {
          var TotalCount=0;
          this.shoppingCart.forEach(item=>{
              TotalCount+=item.count
          })
          //alert(TotalCount)
          return TotalCount;
      },
    // 计算商品的总价
    getTotalPrice: function() {
      var t = 0;
      this.shoppingCart.forEach(item => {
        if(item.check==true){
          t += item.price * item.count;
        }
      });
      return t;
    },


  }
  /*computed: {
    ...mapGetters([
      //"getShoppingCart",
      //"getCheckNum",
      //"getTotalPrice",
      //"getNum"
    ]),
    isAllCheck: {
      get() {
        return this.$store.getters.getIsAllCheck;
      },
      set(val) {
        this.checkAll(val);
      }
    }
  }*/
};
</script>
<style scoped>
.shoppingCart {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
/* 购物车头部CSS */
.shoppingCart .cart-header {
  height: 64px;
  border-bottom: 2px solid #ff6700;
  background-color: #fff;
  margin-bottom: 20px;
}
.shoppingCart .cart-header .cart-header-content {
  width: 1225px;
  margin: 0 auto;
}
.shoppingCart .cart-header p {
  font-size: 28px;
  line-height: 58px;
  float: left;
  font-weight: normal;
  color: #424242;
}
.shoppingCart .cart-header span {
  color: #757575;
  font-size: 12px;
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 30px;
  margin-left: 15px;
}
/* 购物车头部CSS END */

/* 购物车主要内容区CSS */
.shoppingCart .content {
  width: 1225px;
  margin: 0 auto;
  background-color: #fff;
}

.shoppingCart .content ul {
  background-color: #fff;
  color: #424242;
  line-height: 85px;
}
/* 购物车表头及CSS */
.shoppingCart .content ul .header {
  height: 85px;
  padding-right: 26px;
  color: #424242;
}
.shoppingCart .content ul .product-list {
  height: 85px;
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.shoppingCart .content ul .pro-check {
  float: left;
  height: 85px;
  width: 110px;
}
.shoppingCart .content ul .pro-check .el-checkbox {
  font-size: 16px;
  margin-left: 24px;
}
.shoppingCart .content ul .pro-img {
  float: left;
  height: 85px;
  width: 120px;
}
.shoppingCart .content ul .pro-img img {
  height: 80px;
  width: 80px;
}
.shoppingCart .content ul .pro-name {
  float: left;
  width: 380px;
  height: 80px;
  position: relative;
}
.shoppingCart .content ul .pro-name a {
  color: #424242;
}
.shoppingCart .content ul .pro-name a:hover {
  color: #ff6700;
}
.shoppingCart .content ul .pro-price {
  float: left;
  width: 140px;
  padding-right: 18px;
  text-align: center;
}
.shoppingCart .content ul .pro-num {
  float: left;
  width: 150px;
  text-align: center;
}
.shoppingCart .content ul .pro-total {
  float: left;
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.shoppingCart .content ul .pro-total-in {
  color: #ff6700;
}
.shoppingCart .content ul .pro-action {
  float: left;
  width: 80px;
  text-align: center;
}
.shoppingCart .content ul .pro-action i:hover {
  color: #ff6700;
}
/* 购物车表头及CSS END */

/* 购物车底部导航条CSS */
.shoppingCart .cart-bar {
  width: 1225px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
}
.shoppingCart .cart-bar .cart-bar-left {
  float: left;
}
.shoppingCart .cart-bar .cart-bar-left a {
  line-height: 50px;
  margin-left: 32px;
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left a:hover {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-left .sep {
  color: #eee;
  margin: 0 20px;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total {
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total-num {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-right {
  float: right;
}
.shoppingCart .cart-bar .cart-bar-right .total-price-title {
  color: #ff6700;
  font-size: 14px;
}
.shoppingCart .cart-bar .cart-bar-right .total-price {
  color: #ff6700;
  font-size: 30px;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #ff6700;
  color: #fff;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary-disabled {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #e0e0e0;
  color: #b0b0b0;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary:hover {
  background-color: #f25807;
}
/* 购物车底部导航条CSS END */
/* 购物车主要内容区CSS END */

/* 购物车为空的时候显示的内容CSS */
.shoppingCart .cart-empty {
  width: 1225px;
  margin: 0 auto;
}
.shoppingCart .cart-empty .empty {
  height: 300px;
  padding: 0 0 130px 558px;
  margin: 65px 0 0;
  background: url(../assets/imgs/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}
.shoppingCart .cart-empty .empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
.shoppingCart .cart-empty .empty p {
  margin: 0 0 20px;
  font-size: 20px;
}
/* 购物车为空的时候显示的内容CSS END */
</style>
