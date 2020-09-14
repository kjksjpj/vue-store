<template>
    <div class="order">
        <!-- 我的订单头部 -->
        <div class="order-header">
            <div class="order-header-content">
                <el-steps   :active="active" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="拍下商品" ></el-step>
                    <el-step title="付款到支付宝" ></el-step>
                    <el-step title="待发货" ></el-step>
                    <el-step title="确认收货" ></el-step>
                </el-steps>
            </div>
        </div>
        <!-- 我的订单头部END -->

        <!-- 我的订单（除待付款）主要内容 -->
        <div class="order-content" >
            <div style="margin: auto;padding:10px 20px 10px 30px;width: 800px;height: auto;background: #FFF7EB;">
                <h3 v-if="orderDetailInfo.itemStatus==4" style="font-size: 16px;font-weight: normal">当前订单状态：交易关闭</h3>
                <h3 v-else-if="orderDetailInfo.itemStatus==1" style="font-size: 16px;font-weight: normal">当前订单状态：商品已付款，等待商家发货</h3>
                <h3 v-else-if="orderDetailInfo.itemStatus==2" style="font-size: 16px;font-weight: normal">当前订单状态：商家已发货，宝贝正在路上</h3>
                <h3 v-else-if="orderDetailInfo.itemStatus==3" style="font-size: 16px;font-weight: normal">当前订单状态：您已成功收到宝贝</h3>
                <br>
                <div class="order-content-list" v-if="orderDetailInfo.itemStatus==2||orderDetailInfo.itemStatus==3" style="display: flex"><i class="el-icon-info"></i>
                    <span>物流信息：</span>
                    <ul>
                        <li>
                            <span style="font-size: 12px;">快递公司：</span>{{orderDetailInfo.deliveryCompany}}
                        </li>
                        <li>
                            <span style="font-size: 12px">快递单号：</span>{{orderDetailInfo.deliverySn}}
                        </li>
                        <li>
                            <span style="font-size: 12px">发货时间：</span>{{orderDetailInfo.deliveryTime| dateFormat}}
                        </li>
                     </ul>
                </div>
                <span  v-if="orderDetailInfo.itemStatus==3"><i class="el-icon-info"></i>确认收货时间：{{orderDetailInfo.receiveTime| dateFormat}}</span>
                <span  v-if="orderDetailInfo.itemStatus==4"><i class="el-icon-info"></i>原因：未及时付款</span>
            </div>
            <div class="content" >
                <div style="width: 800px;height:50px;padding:10px 20px 10px 30px;">
                    收货地址：{{address}}
                    <br>
                    <br>
                    会员昵称: {{orderDetailInfo.memberUsername}}
                </div>
                <ul>
                    <!-- 我的订单表头 -->
                    <li class="order-info">
                        <div class="order-id">订单号:{{orderDetailInfo.id}}</div>
                        <div class="order-time">创建时间: {{orderDetailInfo.createTime| dateFormat}}</div>
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
                    <li class="product-list">
                        <div class="pro-img">
                            <img @click="toDetail(orderDetailInfo.skuId)"  :src="orderDetailInfo.skuPic" />
                        </div>
                        <div class="pro-name">
                            <span @click="toDetail(orderDetailInfo.skuId)" style="position: absolute;
                                line-height: 30px">{{orderDetailInfo.spuName}}</span>
                        </div>
                        <div class="pro-price">{{orderDetailInfo.skuPrice}}元</div>
                        <div class="pro-num">{{orderDetailInfo.skuQuantity}}</div>
                        <div class="pro-total pro-total-in">{{orderDetailInfo.skuPrice * orderDetailInfo.skuQuantity}}元</div>
                    </li>
                </ul>


                    <!-- 订单列表END -->


                <!-- 结算列表 -->
                <div class="section-count">
                    <div class="money-box">
                        <ul>
                            <li>
                                <span class="title">商品件数：</span>
                                <span class="value">{{orderDetailInfo.skuQuantity}}件</span>
                            </li>
                            <li>
                                <span class="title">商品总价：</span>
                                <span class="value">{{orderDetailInfo.skuPrice * orderDetailInfo.skuQuantity}}元</span>
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
                                <span class="title" v-if="orderDetailInfo.itemStatus==4">应付总额：</span>
                                <span class="title" v-else>实付总额：</span>
                                <span class="value">
                                <span class="total-price">{{orderDetailInfo.skuPrice * orderDetailInfo.skuQuantity}}</span>元
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 结算列表END -->

            </div>
            <div style="margin-top:-40px;"></div>
        </div>
        <!-- 我的订单（除待付款）主要内容END -->



    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: '',//步骤条当前激活步骤
                orderStatus:0,//订单支付状态
                orders: {}, // 所有订单列表
                orderDetailInfo:{},//订单详情信息
                orderToken:'',//订单编号
                address: "", // 收货地址
                orderSn:'',//待付款订单的大订单编号
            };
        },

        // 通过路由获取订单id
        created() {
            if (this.$route.query.orderToken != undefined) {
                this.orderToken = this.$route.query.orderToken;
                this.getOrderDetail(this.orderToken);
            }
        },
        watch: {
            // 监听订单编号的变化，请求后端获取订单详情
            orderToken: function (val) {
                this.getOrderDetail(val)
            },
        },
        methods: {
            //获取订单(除待付款之外)详情信息
            getOrderDetail(OrderId){
                this.$axios
                    .get(this.$target1+'/oms/orderitem/allOrder')
                    .then(res=>{
                        //console.log(res.data)
                        this.orders=res.data.data;
                        //返回
                        let newarr = this.orders.find(item=>{
                            return item.id==OrderId;
                        })
                        this.orderDetailInfo = newarr;
                        if (this.orderDetailInfo.itemStatus==0){
                            this.active=1;
                        }else if (this.orderDetailInfo.itemStatus==1){
                            this.active=2
                        }else if (this.orderDetailInfo.itemStatus==2){
                            this.active=3
                        }else if (this.orderDetailInfo.itemStatus==3){
                            this.active=4
                        }
                        //console.log(this.orderDetailInfo)
                        //获取订单地址
                        this.address = this.orderDetailInfo.receiverName+','+
                            this.orderDetailInfo.receiverPhone+','+
                            this.orderDetailInfo.receiverProvince+'\xa0\xa0\xa0'+
                            this.orderDetailInfo.receiverCity+'\xa0\xa0\xa0'+
                            this.orderDetailInfo.receiverRegion+'\xa0\xa0\xa0'+
                            this.orderDetailInfo.receiverDetailAddress;
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
       /* background-color: #f5f5f5;*/
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
        width: 1000px;
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
        margin-top: 30px;
        border: #e4e7ed solid;
    }

    .order .content ul {
        background-color: #fff;
        color: #424242;
        line-height: 85px;
    }
    .order .order-content-list ul li:before{
        display: inline-block;
        content: "●";
        padding-right: 10px;
        color: #666;
        font-size:6px;
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
        display: inline-block;
        height: 85px;
        padding: 15px 26px 15px 0;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
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
        height: 85px;
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


    /* 结算列表CSS */
    .order .content .section-count {
        margin: 0 48px;
        padding: 20px 0;
        overflow: hidden;
    }
    .order .content .section-count .money-box {
        float: right;
        text-align: right;
    }
    .order .content .section-count .money-box .title {
        float: left;
        width: 126px;
        height: 30px;
        display: block;
        line-height: 30px;
        color: #757575;
    }
    .order .content .section-count .money-box .value {
        float: left;
        min-width: 105px;
        height: 30px;
        display: block;
        line-height: 30px;
        color: #ff6700;
    }
    .order .content .section-count .money-box .total .title {
        padding-top: 15px;
    }
    .order .content .section-count .money-box .total .value {
        padding-top: 10px;
    }
    .order .content .section-count .money-box .total-price {
        font-size: 30px;
    }
    /* 结算列表CSS END */

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
