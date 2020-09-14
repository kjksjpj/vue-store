<!--
 * @Description: 确认订单页面组件
 * @Author: hai-27
 * @Date: 2020-02-23 23:46:39
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-29 13:10:21
 -->
<template>
  <div class="confirmOrder">
    <!-- 头部 -->
    <div class="confirmOrder-header">
      <div class="header-content">
        <p>
          <i class="el-icon-s-order"></i>
        </p>
        <p>确认订单</p>
      </div>
    </div>
    <!-- 头部END -->

    <!-- 主要内容容器 -->
    <div class="content">
      <!-- 选择地址 -->
      <div class="section-address">
        <p class="title">收货地址</p>
        <div class="address-body">
          <ul v-if="address !== []">
            <li @click="changeAddress(item.id)"
              :class="item.id == confirmAddress ? 'in-section' : ''"
              v-for="item in address"
              :key="item.id"
            >
              <h2>{{item.name}}</h2>
              <p class="phone">{{item.phone}}</p>
              <p class="address">{{item.addr}}</p>
            </li>
            <li class="add-address" @click="dialogFormVisible = true">
              <i class="el-icon-circle-plus-outline"></i>
              <p>添加新地址</p>
            </li>
          </ul>
          <ul v-else>
            <li class="add-address" @click="dialogFormVisible = true">
              <i class="el-icon-circle-plus-outline"></i>
              <p>添加新地址</p>
            </li>
          </ul>

          <!--          添加地址弹出框开始-->
          <el-dialog title="添加收货地址" :visible.sync="dialogFormVisible" width="40%">
            <Address></Address>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="getAddressJson">关 闭</el-button>
            </div>
          </el-dialog>
          <!--          添加地址弹出框开始-->

        </div>
      </div>
      <!-- 选择地址END -->

      <!-- 商品及优惠券 -->
      <div class="section-goods">
        <p class="title">商品及优惠券</p>
        <div class="goods-list">
          <ul>
            <li v-for="item in orderConfirmInfo.orderItems" :key="item.id">
              <img @click="toDetail(item.skuId)" :src="item.defaultImages" style="cursor: pointer" />
              <span @click="toDetail(item.skuId)" class="pro-name" style="cursor: pointer">{{item.title}}</span>
              <span class="pro-price">{{item.price}}元 x {{item.count}}</span>
              <span class="pro-status"></span>
              <span class="pro-total">{{item.price * item.count}}元</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 商品及优惠券END -->

      <!-- 配送方式 -->
      <div class="section-shipment">
        <p class="title">配送方式</p>
        <p class="shipment">包邮</p>
      </div>
      <!-- 配送方式END -->

      <!-- 发票 -->
      <div class="section-invoice">
        <p class="title">发票</p>
        <p class="invoice">电子发票</p>
        <p class="invoice">个人</p>
        <p class="invoice">商品明细</p>




      </div>
      <!-- 发票END -->

      <!-- 结算列表 -->
      <div class="section-count">
        <div class="money-box">
          <ul>
            <li>
              <span class="title">商品件数：</span>
              <span class="value">{{checkNum}}件</span>
            </li>
            <li>
              <span class="title">商品总价：</span>
              <span class="value">{{totalPrice}}元</span>
            </li>
            <li>
              <span class="title">活动优惠：</span>
              <span class="value">-0元</span>
            </li>
            <li>
              <span class="title">优惠券抵扣：</span>
              <span class="value">-0元</span>
            </li>
            <li>
              <span class="title">重量：</span>
              <span class="value">{{totalWeight}}千克</span>
            </li>
            <li>
              <span class="title">运费：</span>
              <span class="value">0元</span>
            </li>
            <li class="total">
              <span class="title">应付总额：</span>
              <span class="value">
                <span class="total-price">{{totalPrice}}</span>元
              </span>
            </li>


          </ul>
        </div>
      </div>
      <!-- 结算列表END -->
      <!-- 结算导航 -->
      <div class="section-bar">
        <div class="btn">
          <router-link to="/shoppingCart" class="btn-base btn-return">返回购物车</router-link>
            <a  @click="dialogVisible = true,commitOrder()" class="btn-base btn-primary">付款
            </a>
          <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose">
            <span>是否完成支付</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="dialogVisible = false,transmit()">完成</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <!-- 结算导航END -->
    </div>
    <!-- 主要内容容器END -->
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Address from "../components/Address";

export default {
  name: "",
  components: {Address},
  data() {
    return {
      dialogFormVisible: false, //是否显示添加地址组件
      orderConfirmInfo: "", //后台返回的数据
      confirmAddress: "", // 选择的地址id
      newHtml: "", //后台返回的html
      dialogVisible: false,
    };
  },
  created() {
    this.getOrderConfirm();
    // 如果没有勾选购物车商品直接进入确认订单页面,提示信息并返回购物车
    if (this.orderConfirmInfo !== "" && this.orderConfirmInfo.orderItems === "") {
      this.notifyError("请勾选商品后再结算");
      this.$router.push('/shoppingCart');
    }

  },
  computed: {
    //通过orderConfirmInfo，组装地址信息,得到地址列表，手机，id，姓名
    address() {
      let addresses = [];
      if (this.orderConfirmInfo === "") {
        return;
      }
        this.orderConfirmInfo.address.forEach(item => {
          let addr = item.province + " " + item.city + " " + item.region + " " + item.detailAddress;
          let address = new Object();
          address.id = item.id;
          address.addr = addr;
          address.phone = item.phone;
          address.name = item.name;
          addresses.push(address)
        });
      return addresses;
    },
    //选中的地址
    checkedAddress() {
      let address = this.orderConfirmInfo.address.find(item => {
        if(item.id === this.confirmAddress) {
          return item;
        }
      });
      return address;
    },
    //得到商品总数
    checkNum() {
      let sum = 0;
      this.orderConfirmInfo.orderItems.forEach(item => {
        sum += item.count;
      })
      return sum;
    },
    //得到总价格
    totalPrice() {
      let totalPrice = 0;
      this.orderConfirmInfo.orderItems.forEach(item => {
        totalPrice += item.price * item.count;
      })
      return totalPrice;
    },
    //得到总重量
    totalWeight() {
      let totalWeight = 0;
      this.orderConfirmInfo.orderItems.forEach(item => {
        totalWeight += item.weight;
      })
      return totalWeight;
    }
  },

  methods: {
    ...mapActions(['deleteShoppingCart', 'setWhoShare', 'setDistInfo', 'setIsJoinDist']),
    addOrder() {
    /*  this.$axios
        .post("/api/user/order/addOrder", {
          user_id: this.$store.getters.getUser.user_id,
          products: this.getCheckGoods
        })
        .then(res => {
          let products = this.getCheckGoods;
          switch (res.data.code) {
            // “001”代表结算成功
            case "001":
              for (let i = 0; i < products.length; i++) {
                const temp = products[i];
                // 删除已经结算的购物车商品
                this.deleteShoppingCart(temp.id);
              }
              // 提示结算结果
              this.notifySucceed(res.data.msg);
              // 跳转我的订单页面
              this.$router.push({ path: "/order" });
              break;
            default:
              // 提示失败信息
              this.notifyError(res.data.msg);
          }
        })
        .catch(err => {
          return Promise.reject(err);
        });*/
    },



    timeFN(){
      this.commitOrder();
      /*this.transmit();*/
    },

    //传值  传递数据给order组件
    transmit(){
      //console.log("调用到了传值方法")
      this.$router.push({
        name: "Order",
        params: {
          orderToken: this.orderConfirmInfo.orderToken,
          address: this.checkedAddress,
          items: this.orderConfirmInfo.orderItems,
          totalPrice: this.totalPrice,
      }
    })

    },
    //提交订单
    commitOrder() {
      console.log("调用到了提交订单方法")
      this.$axios
          .post(this.$target1 + "/order/submit", {
            orderToken: this.orderConfirmInfo.orderToken,
            address: this.checkedAddress,
            payType: 1,
            items: this.orderConfirmInfo.orderItems,
            bound: 1000,
            totalPrice: this.totalPrice,
          })
          .then(res => {
            //console.log(res);
            switch (res.data.code) {
              case 0: {
                //获得分销系统的用户信息
                this.getDistributionUserInfo();
                //查看是否有邀请人
                if (this.$store.state.shareInfo.whoShare !== undefined) {
                  if (this.$store.state.user.isJoinDist === false) {
                    //加入分销
                    this.join();
                  }
                  //分销的交易结算
                    this.distTrade(this.orderConfirmInfo.orderToken, this.totalPrice)
                }
                //在分销系统中提交交易
                this.newHtml = res.data.data;
                let myWindow=window.open('','','fullscreen=1');
                myWindow.document.write(this.newHtml)
                myWindow.focus();
              }
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });

    },

    //查看用户分销信息
    getDistributionUserInfo() {
      let user = this.$store.state.user.user;
      this.$axios
          .get(this.$target2 + "/api/v1/getUserInfo", {params: {userId: user.username}})
          .then(res => {
            if (res.data.success === true) {
              this.setDistInfo(res.data.data);
              this.setDistInfo(true);
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
    },
    //分销交易
    distTrade(id, price) {
      this.$axios({
        method: 'post',
        url: this.$target2 + "/api/v1/trade",
        data: {
          disAmount: price,
          disSetUserId: this.$store.state.user.user.username,
          orderId: id,
          secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
        }
      })
          .then(res => {
              console.log(res)
          })
          .catch(err => {
            return Promise.reject(err);

          })
    },

    //加入分销
    join() {
      let user = this.$store.state.user.user;
      this.$axios({
        method: 'post',
        url: this.$target2 + "/api/v1/memberAdd",
        data: {
          disModelId: this.$store.state.shareInfo.whoShare,
          disNote: "nothing",
          disPlatformId: "dist",
          disUserName: user.username,
          disUserId: user.username,
          secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
        }
      })
          .then(res => {
            if (res.data.success === true) {
              this.getDistributionUserInfo();
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });

    },

    //创建页面时，获取需确认订单信息
    getOrderConfirm() {
      this.$axios
          .get(this.$target1 + "/order/confirm")
          .then(res => {
            this.orderConfirmInfo = res.data.data;
            //将默认地址id填入confirmAddress
              let address = this.orderConfirmInfo.address.find(item => {
                if(item.defaultStatus === 1) {
                  return item;
                }
              });
              //console.log(res.data.data)
              this.confirmAddress = address.id;

          })
          .catch(err => {
            console.log('错误信息：' + err)
            return Promise.reject(err);
          });
    },
    //选择的地址改变
    changeAddress(value) {
      this.confirmAddress = value;
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
    //获得用户的地址
    getAddressJson(){
      this.dialogFormVisible = false;
      this.getOrderConfirm();
    },
  }
};
</script>
<style scoped>
.confirmOrder {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
/* 头部CSS */
.confirmOrder .confirmOrder-header {
  background-color: #fff;
  border-bottom: 2px solid #ff6700;
  margin-bottom: 20px;
}
.confirmOrder .confirmOrder-header .header-content {
  width: 1225px;
  margin: 0 auto;
  height: 80px;
}
.confirmOrder .confirmOrder-header .header-content p {
  float: left;
  font-size: 28px;
  line-height: 80px;
  color: #424242;
  margin-right: 20px;
}
.confirmOrder .confirmOrder-header .header-content p i {
  font-size: 45px;
  color: #ff6700;
  line-height: 80px;
}
/* 头部CSS END */

/* 主要内容容器CSS */
.confirmOrder .content {
  width: 1225px;
  margin: 0 auto;
  padding: 48px 0 0;
  background-color: #fff;
}

/* 选择地址CSS */
.confirmOrder .content .section-address {
  margin: 0 48px;
  overflow: hidden;
}
.confirmOrder .content .section-address .title {
  color: #333;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 20px;
}
.confirmOrder .content .address-body li {
  float: left;
  color: #333;
  width: 220px;
  height: 178px;
  border: 1px solid #e0e0e0;
  padding: 15px 24px 0;
  margin-right: 17px;
  margin-bottom: 24px;
}
.confirmOrder .content .address-body .in-section {
  border: 1px solid #ff6700;
}
.confirmOrder .content .address-body li h2 {
  font-size: 18px;
  font-weight: normal;
  line-height: 30px;
  margin-bottom: 10px;
}
.confirmOrder .content .address-body li p {
  font-size: 14px;
  color: #757575;
}
.confirmOrder .content .address-body li .address {
  padding: 10px 0;
  max-width: 180px;
  max-height: 88px;
  line-height: 22px;
  overflow: hidden;
}
.confirmOrder .content .address-body .add-address {
  text-align: center;
  line-height: 30px;
}
.confirmOrder .content .address-body .add-address i {
  font-size: 30px;
  padding-top: 50px;
  text-align: center;
}
/* 选择地址CSS END */

/* 商品及优惠券CSS */
.confirmOrder .content .section-goods {
  margin: 0 48px;
}
.confirmOrder .content .section-goods p.title {
  color: #333;
  font-size: 18px;
  line-height: 40px;
}
.confirmOrder .content .section-goods .goods-list {
  padding: 5px 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.confirmOrder .content .section-goods .goods-list li {
  padding: 10px 0;
  color: #424242;
  overflow: hidden;
}
.confirmOrder .content .section-goods .goods-list li img {
  float: left;
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.confirmOrder .content .section-goods .goods-list li .pro-name {
  float: left;
  width: 650px;
  line-height: 30px;
}
.confirmOrder .content .section-goods .goods-list li .pro-price {
  float: left;
  width: 150px;
  text-align: center;
  line-height: 30px;
}
.confirmOrder .content .section-goods .goods-list li .pro-status {
  float: left;
  width: 99px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
.confirmOrder .content .section-goods .goods-list li .pro-total {
  float: left;
  width: 190px;
  text-align: center;
  color: #ff6700;
  line-height: 30px;
}
/* 商品及优惠券CSS END */

/* 配送方式CSS */
.confirmOrder .content .section-shipment {
  margin: 0 48px;
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
}
.confirmOrder .content .section-shipment .title {
  float: left;
  width: 150px;
  color: #333;
  font-size: 18px;
  line-height: 38px;
}
.confirmOrder .content .section-shipment .shipment {
  float: left;
  line-height: 38px;
  font-size: 14px;
  color: #ff6700;
}
/* 配送方式CSS END */

/* 发票CSS */
.confirmOrder .content .section-invoice {
  margin: 0 48px;
  padding: 25px 0;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
}
.confirmOrder .content .section-invoice .title {
  float: left;
  width: 150px;
  color: #333;
  font-size: 18px;
  line-height: 38px;
}
.confirmOrder .content .section-invoice .invoice {
  float: left;
  line-height: 38px;
  font-size: 14px;
  margin-right: 20px;
  color: #ff6700;
}
/* 发票CSS END */

/* 结算列表CSS */
.confirmOrder .content .section-count {
  margin: 0 48px;
  padding: 20px 0;
  overflow: hidden;
}
.confirmOrder .content .section-count .money-box {
  float: right;
  text-align: right;
}
.confirmOrder .content .section-count .money-box .title {
  float: left;
  width: 126px;
  height: 30px;
  display: block;
  line-height: 30px;
  color: #757575;
}
.confirmOrder .content .section-count .money-box .value {
  float: left;
  min-width: 105px;
  height: 30px;
  display: block;
  line-height: 30px;
  color: #ff6700;
}
.confirmOrder .content .section-count .money-box .total .title {
  padding-top: 15px;
}
.confirmOrder .content .section-count .money-box .total .value {
  padding-top: 10px;
}
.confirmOrder .content .section-count .money-box .total-price {
  font-size: 30px;
}
/* 结算列表CSS END */

/* 结算导航CSS */
.confirmOrder .content .section-bar {
  padding: 20px 48px;
  border-top: 2px solid #f5f5f5;
  overflow: hidden;
}
.confirmOrder .content .section-bar .btn {
  float: right;
}
.confirmOrder .content .section-bar .btn .btn-base {
  float: left;
  margin-left: 30px;
  width: 158px;
  height: 38px;
  border: 1px solid #b0b0b0;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
}
.confirmOrder .content .section-bar .btn .btn-return {
  color: rgba(0, 0, 0, 0.27);
  border-color: rgba(0, 0, 0, 0.27);
}
.confirmOrder .content .section-bar .btn .btn-primary {
  background: #ff6700;
  border-color: #ff6700;
  color: #fff;
}
/* 结算导航CSS */

/* 主要内容容器CSS END */
</style>
