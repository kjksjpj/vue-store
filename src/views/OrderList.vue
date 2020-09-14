<template>
  <div class="order">
    <!-- 我的订单头部 -->
    <div class="order-header">
      <div class="order-header-content">
        <p>
          <i class="el-icon-s-order" style="font-size: 30px;color: #ff6700;"></i>
          我的订单
        </p>
      </div>


    </div>
    <!-- 我的订单头部END -->

    <!--订单状态选项卡-->
    <div style="margin-left: 50px">
      <el-tabs v-model="activeName" @tab-click="getAllOrderByStatus()">
        <el-tab-pane label="所有订单" name="00"></el-tab-pane>
        <el-tab-pane name="0"><span slot="label">待付款<span
            style="margin-left: 5px;color: #ff6700;">{{ orderNum('0') }}</span></span></el-tab-pane>
        <el-tab-pane name="1"><span slot="label">待发货<span
            style="margin-left: 5px;color: #ff6700;">{{ orderNum('1') }}</span></span></el-tab-pane>
        <el-tab-pane name="2"><span slot="label">待收货<span
            style="margin-left: 5px;color: #ff6700;">{{ orderNum('2') }}</span></span></el-tab-pane>
        <el-tab-pane name="3"><span slot="label">待评价<span
            style="margin-left: 5px;color: #ff6700;">{{ orderNum('3') }}</span></span></el-tab-pane>
        <!--<el-tab-pane label="已失效" name="4"></el-tab-pane>-->
        <!--  <el-tab-pane label="退款中" name="5"></el-tab-pane>-->
      </el-tabs>
    </div>
    <!--订单状态选项卡END-->

    <!-- 我的订单（除待付款）主要内容 -->
    <div class="order-content" v-if="(allOrder!=null)&&(this.activeName!='0')">
      <div class="content" v-for="item in allOrder" :key="item.id">
        <ul>
          <!-- 我的订单表头 -->
          <li class="order-info">
            <div class="order-time">订单时间: {{ item.createTime| dateFormat }}</div>
            <div class="order-id">订单号:{{ item.id }}</div>
            <!--倒计时  支付超过半小时就自动取消该订单-->
            <div class="order-time" style="margin-right: 250px">状态:

              <span v-if="item.itemStatus==1" style="color: #ff330a"><i class="el-icon-s-shop"></i>等待商家发货</span>
              <span v-if="item.itemStatus==2" style="color: #f91424">已发货</span>
              <span v-if="item.itemStatus==3" style="color: #ff330a">已确认收货</span>
              <span v-if="item.itemStatus==4" style="color: #ff330a"><i class="el-icon-error"></i>交易关闭</span>
              <span v-if="item.itemStatus==5">退款中</span>

              <div style="display: inline-block;padding-left: 30px">
                <a @click="toOrderDetail(item.id)">订单详情<i class="el-icon-s-order"></i></a>
              </div>


            </div>
          </li>
          <!-- 我的订单表头END -->
          <li class="header">
            <div class="pro-img"></div>
            <div class="pro-name">商品名称</div>
            <div class="pro-price">单价</div>
            <div class="pro-num">数量</div>
            <div class="pro-total">小计</div>
          </li>
          <!-- 我的订单表头END -->

          <!-- 订单列表 -->
          <li class="product-list">
            <div class="pro-img">
              <img @click="toDetail(item.skuId)" :src="item.skuPic"/>
            </div>
            <div class="pro-name">
              <a @click="toDetail(item.skuId)" style="position: absolute;
                                line-height: 30px;cursor: pointer">{{ item.spuName }}</a>
            </div>
            <div class="pro-price">{{ item.skuPrice }}元</div>
            <div class="pro-num">{{ item.skuQuantity }}</div>
            <div class="pro-total pro-total-in">{{ item.skuPrice * item.skuQuantity }}元</div>
          </li>
        </ul>
        <div class="order-bar">
          <div class="order-bar-left">
            <span class="order-total">
              共
              <span class="order-total-num">{{ item.skuQuantity }}</span> 件商品
            </span>
          </div>
          <div class="order-bar-right">
            <!--待收货订单可以 查看物流、确认收货-->
            <el-button v-if="item.itemStatus==2" style="margin-right: 40px;"
                       @click="dialogTableVisible = true,trackingInformation(item.id)">查看物流
            </el-button>
            <el-dialog title="物流信息" :visible.sync="dialogTableVisible">
              <el-table :data="gridData">
                <el-table-column property="date" label="快递公司" width="150"></el-table-column>
                <el-table-column property="name" label="快递单号" width="200"></el-table-column>
                <el-table-column property="address" label="发货时间"></el-table-column>
              </el-table>
            </el-dialog>
            <el-button v-if="item.itemStatus==2" style="margin-right: 40px;" @click="dialogVisible = true">确认收货
            </el-button>
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
            >
              <span>确定收货吗？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false,comfirmAccept(item.id)">确 定</el-button>
              </span>
            </el-dialog>
            <el-button v-if="item.itemStatus==3" style="margin-right: 40px;" @click="toReview(item)">去评价（这里连接你的评价）
            </el-button>
            <span>
              <span class="total-price-title">合计：</span>
              <span class="total-price">{{ item.skuPrice * item.skuQuantity }}元</span>
            </span>
          </div>
          <!-- 订单列表END -->
        </div>
      </div>
      <div style="margin-top:-40px;"></div>


    </div>
    <!-- 我的订单（除待付款）主要内容END -->

    <!-- 我的订单(待付款订单)主要内容 -->
    <div class="order-content" v-if="this.activeName=='0'&&this.allUnpaidOrder!=null">
      <div class="content" v-for="(item,index) in allUnpaidOrder" :key="index">
        <ul>
          <!-- 我的订单表头 -->
          <li class="order-info">
            <div class="order-time">订单时间: {{ item.createTime| dateFormat }}</div>
            <div class="order-id">订单号:{{ item.orderSn }}</div>

            <div class="order-time" style="margin-right: 250px">状态:

              <span style="color: #ff330a">待付款</span>

              <div style="display: inline-block;padding-left: 30px">
                <a @click="toThisOrderDetail(item.orderSn)">订单详情<i class="el-icon-s-order"></i></a>
              </div>

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
          <li class="product-list" v-for="(item1,index1) in item.orderItemEntities" :key="index1">
            <div class="pro-img">
              <img @click="toDetail(item1.skuId)" :src="item1.skuPic"/>
            </div>
            <div class="pro-name">
              <a @click="toDetail(item1.skuId)" style="position: absolute;
                                line-height: 30px;cursor: pointer">{{ item1.spuName }}</a>
            </div>
            <div class="pro-price">{{ item1.skuPrice }}元</div>
            <div class="pro-num">{{ item1.skuQuantity }}</div>
            <div class="pro-total pro-total-in">{{ item1.skuPrice * item1.skuQuantity }}元</div>
          </li>
        </ul>
        <div class="order-bar">
          <div class="order-bar-left">
            <!--  <span class="order-total">
                共
                <span class="order-total-num"></span> 件商品
              </span>-->
          </div>
          <div class="order-bar-right">
            <!--待付款订单可以再次支付-->
            <el-button style="margin-right: 40px;" @click="trySubmit(item.orderSn)">去付款</el-button>
            <span>
              <span class="total-price-title">合计：</span>
              <span class="total-price">{{ item.totalAmount }}元</span>
            </span>
          </div>
          <!-- 订单列表END -->
        </div>
      </div>
      <div style="margin-top:-40px;"></div>
    </div>
    <!-- 我的订单(待付款订单)主要内容END -->

    <!-- 订单为空的时候显示的内容 -->
    <div v-else-if="(allOrder==null)||(allOrder.length==0)||(allUnpaidOrder==null&&this.activeName=='0')"
         class="order-empty">
      <div class="empty">
        <h2>您还没有相关的订单</h2>
        <p v-if="activeName=='00'">快去购物吧！</p>
      </div>
    </div>
    <!-- 订单为空的时候显示的内容END -->
  </div>
</template>

<script>

export default {
  name: "",
  inject: ['reload'],
  data() {
    return {
      activeName: '0',//选项卡选中选项
      allOrder: {}, // 所有订单信息以及不同状态的订单信息
      allUnpaidOrder: {}, // 待付款de订单信息
      orders: [],//接口中返回的所有订单信息
      gridData: [{
        date: '1',
        name: '2',
        address: '3'
      }],//订单物流信息
      dialogTableVisible: false,
      dialogVisible: false,
    };
  },

  created() {
    this.getAllOrder();
    this.getAllUnpaidOrder();
  },
  methods: {
    //请求所有订单信息
    getAllOrder() {
      this.$axios
          .get(this.$target1 + '/oms/orderitem/allOrder')
          .then(res => {
            //console.log(res.data)
            this.orders = res.data.data;
            this.allOrder = this.orders;
          })
          .catch(err => {
            return Promise.reject(err);
          })
    },
    //请求待付款订单信息
    getAllUnpaidOrder() {
      this.$axios
          .get(this.$target1 + '/oms/order/unpaid')
          .then(res => {
            this.allUnpaidOrder = res.data.data;
            //allUnpaidOrder为空
          })
          .catch(err => {
            return Promise.reject(err);
          })
    },
    //根据选项卡的值过滤出不同状态的订单(除了所有订单和待付款订单)
    getAllOrderByStatus() {
      if (this.activeName != '00' && this.activeName != '0') {
        let orderByStatus = this.orders.filter((item => {
          let status = parseInt(this.activeName);
          return item.itemStatus == status;
        }))
        this.allOrder = orderByStatus;
        //console.log(this.allOrder)
      } else if (this.activeName == '00') {
        this.allOrder = this.orders;
      }/*else if(this.activeName == '0'){
          //如果点击待付款订单，显示待付款订单
            this.allOrder=this.allUnpaidOrder;

        }*/
    },
    //计算不同状态订单的总数
    orderNum: function (orderStatus) {
      if (orderStatus != '0') {
        let neworderlist = this.orders.filter(item => {
          return item.itemStatus == orderStatus;
        })
        return neworderlist.length;
      } else if (this.allUnpaidOrder != null) {
        return this.allUnpaidOrder.length
      } else {
        return 0
      }
    },
    //请求订单状态
    /*      getOrderStatus(){
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
          },*/

    //打开订单详情(不包含待付款)页面
    toOrderDetail(orderId) {
      let routeOne = this.$router.resolve({
        name: "OrderDetail",
        query: {
          orderToken: orderId
        }
      });
      window.open(routeOne.href, '_blank');
    },
    //打开订单详情（待付款）页面
    toThisOrderDetail(orderSn) {
      let routeOne = this.$router.resolve({
        name: "UnpaidOrderDetail",
        query: {
          orderSn: orderSn
        }
      });
      window.open(routeOne.href, '_blank');
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

    //未付款的订单再次付款
    trySubmit(orderSn) {
      this.$axios
          .get(this.$target1 + "/order/trySubmit/", {
            params: {
              orderSn: orderSn,
            },
          })
          .then(res => {
            //console.log(res);
            switch (res.data.code) {
              case 0: {
                this.newHtml = res.data.data;
                let myWindow = window.open('', '', 'fullscreen=1');
                myWindow.document.write(this.newHtml)
                myWindow.focus();
              }
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
    },

    //点击查看物流获取订单物流信息
    trackingInformation(orderId) {
      let newOrder = this.allOrder.find(item => {
        return item.id === orderId;
      })
      //console.log(newOrder)
      this.gridData[0].date = newOrder.deliveryCompany;
      this.gridData[0].name = newOrder.deliverySn;
      let deliveryTimeFormat = this.dateFormat("yyyy-MM-dd hh:mm:ss", newOrder.deliveryTime)
      this.gridData[0].address = deliveryTimeFormat;
      //console.log(this.gridData)
    },

    //确认收货调用后台改变订单状态
    comfirmAccept(orderId) {
      //alert("1")
      this.$axios
          .get(this.$target1 + "/oms/orderitem/updateStatus", {
            params: {
              id: orderId,
              itemStatus: 3,
            },
          })
          .then(res => {
            //提示确认收货成功 并且重新加载页面
            this.notifySucceed(res.data.msg);
            //this.reload();
          })
          .catch(err => {
            return Promise.reject(err);
          });
    },

    //去评价
    toReview(item) {
      let routeUrl = this.$router.resolve({
        path: '/review',
        query: {
          orderId: item.id,
          spuName: item.spuName,
          skuName: item.skuName,
          skuPrice: item.skuPrice,
          skuPic: item.skuPic,
          spuId: item.spuId,
        }
      });
      window.open(routeUrl.href, '_blank');
    },

  },

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
.order .content ul a {
  color: #090504;
  cursor: pointer;
}

.order .content ul a:hover {
  color: #ff360e;
}

.order .content ul .order-info {
  height: 60px;
  line-height: 60px;
  padding: 0 26px;
  color: #424242;
  border-bottom: 1px solid #ff6700;
}

.order .content ul .order-info .order-id {
  float: left;
  color: #090504;
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
  height: 80px;
  float: left;
  width: 380px;
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
  width: 1165px;
  padding: 0 30px;
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
