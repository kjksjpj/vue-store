<!--
 * @Description: 我的订单页面组件
 * @Author: hai-27
 * @Date: 2020-02-20 17:21:54
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:36:27
 -->
<template>
  <div class="order">
    <!-- 我的订单头部 -->
    <div class="order-header">
      <div class="order-header-content">
        <router-link to="/orderList" >
          <p>
            <i class="el-icon-s-order" style="font-size: 30px;color: #ff6700;"></i>
            查看我的订单
            <span style="font-size: small" v-if="orderStatus==0">
              <i class="el-icon-back" style="font-size: 30px;color: #ff6700;"></i>去我的订单页面，查看所有待付款订单并重新付款
            </span>
          </p>
        </router-link>
      </div>
    </div>
    <!-- 我的订单头部END -->

    <!-- 我的订单主要内容 -->
    <div class="order-content" v-if="orders!=null">
      <div class="content" >
        <ul>
          <!-- 我的订单表头 -->
          <li class="order-info">
            <div class="order-id">订单编号:{{orders.orderToken}}</div>
            <!--倒计时  支付超过半小时就自动取消该订单-->
            <span style="margin-left: 100px" v-if="orderStatus==0">订单将在<strong>30分钟</strong>后关闭，请尽快完成支付</span>
            <div class="order-time">支付状态:
              <span v-if="orderStatus==1">支付成功</span>
              <span v-else-if="orderStatus==0">待支付</span>
            </div>
          </li>
          <li class="header">
            <div class="pro-img"></div>
            <div class="pro-name">商品名称</div>
            <div class="pro-price">单价</div>
            <div class="pro-num">数量</div>
            <div class="pro-total">小计</div>
          </li>
          <!-- 我的订单表头END -->

          <!-- 订单列表 -->
          <li class="product-list" v-for="item in orders.items" :key="item.skuId">
            <div class="pro-img">
                <img @click="toDetail(item.skuId)"  :src="item.defaultImages" />
            </div>
            <div class="pro-name">
                <span @click="toDetail(item.skuId)" style="position: absolute;top:20%;line-height: 30px;">{{item.title}}</span>
            </div>
            <div class="pro-price">{{item.price|priceFormat}}元</div>
            <div class="pro-num">{{item.count}}</div>
            <div class="pro-total pro-total-in">{{item.price * item.count|priceFormat}}元</div>
          </li>
        </ul>
        <div class="order-bar">
          <div class="order-bar-left">
            <span class="order-total">
              共
              <span class="order-total-num">{{itemNum}}</span> 件商品
            </span>
          </div>
          <div class="order-bar-right">
            <span>
              <span class="total-price-title">合计：</span>
              <span class="total-price">{{orders.totalPrice|priceFormat}}元</span>
            </span>
          </div>
          <!-- 订单列表END -->
        </div>
      </div>
      <div style="margin-top:-40px;"></div>
    </div>
    <!-- 我的订单主要内容END -->

    <!-- 订单为空的时候显示的内容 -->
    <div v-else class="order-empty">
      <div class="empty">
        <h2>您的订单还是空的！</h2>
        <p>快去购物吧！</p>
      </div>
    </div>
    <!-- 订单为空的时候显示的内容END -->
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      orderStatus:0,//订单支付状态
      orders: {}, // 订单列表
      timer:null,//定时器
    };
  },
  created(){
    //console.log("这是接受路由参数"+this.$route.params)
    /*this.orders = this.$route.params;*/
    this.orders.orderToken = this.$route.params.orderToken;
    this.orders.address = this.$route.params.address;
    this.orders.items= this.$route.params.items;
    this.orders.totalPrice = this.$route.params.totalPrice;

   /* console.log("这是接受路由参数页面的data==")
    console.log(this.orders)
    console.log(this.orders.orderToken)*/

    //轮询请求 (每隔4s)后台订单状态
    //订单还没生成就调用订单状态
   /* this.getOrderStatus();*/

   this.timer = setInterval(this.getOrderStatus,1000 * 4);
   //页面离开时清除定时器配合下面这段代码才有效果！
   this.$once('hook:beforeDestroy', () => {
      clearInterval(this.timer);
    });
  },
  //页面离开时清除定时器
  beforeRouteLeave(to,from,next){
     if(this.timer){
       clearInterval(this.timer);
     }
     next();
  },
  //页面销毁时清除定时器
  beforeDestroy(){
    clearInterval(this.timer)
  },
  computed:{
    //计算商品总件数
    itemNum(){
      let totalNum=0;
      this.orders.items.forEach(item=>{
        totalNum+=item.count;
      })
      return totalNum;
    }
  },




 /* activated() {


    // 获取订单数据
    this.$axios
      .post("/api/user/order/getOrder", {
        user_id: this.$store.getters.getUser.user_id
      })
      .then(res => {
        if (res.data.code === "001") {
          let orders = res.data.orders;
          for (let item of res.data.orders) {
            console.log(item);
            for (let v of item) {
              console.log(v);
              let n = v.product_id-8;
              v.product_name = v.product_id < 8 ? "桌子"+v.product_id : "椅子"+n.toString();
              v.product_picture = v.product_id < 8 ? "https://img13.360buyimg.com/n7/jfs/t1/100189/38/9294/334257/5e0d8aa7Ef7f71cae/cc1dd9d230bbbe8b.jpg" : "https://img13.360buyimg.com/n7/jfs/t1/116060/10/10544/393628/5ef002c9E7d99f5d5/f970c315a82468ee.jpg";

            }
          }
          this.orders = orders;

        } else {
          this.notifyError(res.data.msg);
        }
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },*/

 /* watch: {
    // 通过订单信息，计算出每个订单的商品数量及总价
    orders: function(val) {
      let total = [];
      for (let i = 0; i < val.length; i++) {
        const element = val[i];

        let totalNum = 0;
        let totalPrice = 0;
        for (let j = 0; j < element.length; j++) {
          const temp = element[j];
          totalNum += temp.product_num;
          totalPrice += temp.product_price * temp.product_num;
        }
        total.push({ totalNum, totalPrice });
      }
      this.total = total;
    }
  },*/
  methods:{
    //请求订单状态
    getOrderStatus(){
      console.log("调用轮询请求后台订单状态")
      this.$axios
              .get(this.$target1+'/oms/order/status/'+this.orders.orderToken)
              .then(res=>{
                   console.log("后台返回的订单状态==")
                   console.log(res.data)
                  this.orderStatus=res.data.data;
                //一旦订单状态为1或4 就清楚定时器
                 if(this.orderStatus==1 || this.orderStatus==4){
                  clearInterval(this.timer)
                  }
              })
              .catch(err => {
                return Promise.reject(err);
              })
    },
    //打开商品详情页面
    toDetail(skuID) {
      let routeOne = this.$router.resolve({
        name: "Details",
        query: {
          productID: skuID
        }
      });
      window.open(routeOne.href, '_blank');
    },
  }
};
</script>
<style scoped>
.order {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
/* 我的订单头部CSS */
.order .order-header {
  height: 64px;
  border-bottom: 2px solid #ff6700;
  background-color: #fff;
  margin-bottom: 20px;
}
.order .order-header .order-header-content {
  width: 1225px;
  margin: 0 auto;
}
.order .order-header p {
  font-size: 28px;
  line-height: 58px;
  float: left;
  font-weight: normal;
  color: #424242;
}
/* 我的订单头部CSS END */
.order .content {
  width: 1225px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 50px;
}

.order .content ul {
  background-color: #fff;
  color: #424242;
  line-height: 85px;
}
/* 我的订单表头CSS */
.order .content ul .order-info {
  height: 60px;
  line-height: 60px;
  padding: 0 26px;
  color: #424242;
  border-bottom: 1px solid #ff6700;
}
.order .content ul .order-info .order-id {
  float: left;
  color: #ff6700;
}
.order .content ul .order-info .order-time {
  float: right;
}

.order .content ul .header {
  height: 85px;
  padding-right: 26px;
  color: #424242;
}
/* 我的订单表头CSS END */

/* 订单列表CSS */
.order .content ul .product-list {
  height: 85px;
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.order .content ul .pro-img {
  float: left;
  height: 85px;
  width: 120px;
  padding-left: 80px;
}
.order .content ul .pro-img img {
  height: 80px;
  width: 80px;
}
.order .content ul .pro-name {
  float: left;
  width: 380px;
  height: 80px;
  position: relative;
}
.order .content ul .pro-name a {
  color: #424242;
}
.order .content ul .pro-name a:hover {
  color: #ff6700;
}
.order .content ul .pro-price {
  float: left;
  width: 160px;
  padding-right: 18px;
  text-align: center;
}
.order .content ul .pro-num {
  float: left;
  width: 190px;
  text-align: center;
}
.order .content ul .pro-total {
  float: left;
  width: 160px;
  padding-right: 81px;
  text-align: right;
}
.order .content ul .pro-total-in {
  color: #ff6700;
}

.order .order-bar {
  width: 1185px;
  padding: 0 20px;
  border-top: 1px solid #ff6700;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
}
.order .order-bar .order-bar-left {
  float: left;
}
.order .order-bar .order-bar-left .order-total {
  color: #757575;
}
.order .order-bar .order-bar-left .order-total-num {
  color: #ff6700;
}
.order .order-bar .order-bar-right {
  float: right;
}
.order .order-bar .order-bar-right .total-price-title {
  color: #ff6700;
  font-size: 14px;
}
.order .order-bar .order-bar-right .total-price {
  color: #ff6700;
  font-size: 30px;
}
/* 订单列表CSS END */

/* 订单为空的时候显示的内容CSS */
.order .order-empty {
  width: 1225px;
  margin: 0 auto;
}
.order .order-empty .empty {
  height: 300px;
  padding: 0 0 130px 558px;
  margin: 65px 0 0;
  background: url(../assets/imgs/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}
.order .order-empty .empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
.order .order-empty .empty p {
  margin: 0 0 20px;
  font-size: 20px;
}
/* 订单为空的时候显示的内容CSS END */
</style>
