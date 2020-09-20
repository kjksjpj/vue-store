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

        <!-- 我的订单（待付款）主要内容 -->
        <div class="order-content" >
            <div style="margin: auto;padding:10px 20px 10px 30px;width: 800px;height: 100px;background: #FFF7EB;">
                <h3 style="font-size: 16px;font-weight: normal">当前订单状态：商品已拍下，请在<strong>30分钟</strong>内付款：若未及时付款，系统将自动取消订单</h3>
                <div class="order-content-list">
                    <ul>
                        <li style="margin-top: 20px">
                            <span style="margin-right: 5px">
                                点击这里
                            </span>
                            <span>
                               <el-button  size="small" @click="trySubmit(unpaidOrder.orderSn)" style="background-color: #ff360e;color:white">付款</el-button>
                            </span>
                        </li>
                        <li >
                            <span style="margin-right: 5px">
                                如果您不想购买，可以
                            </span>
                            <span>
                                <a  style="font-size: 14px;color: #6766f7;cursor: pointer" id="cancelOrder">取消订单</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content" >
                <div style="width: 800px;height:50px;padding:10px 20px 10px 30px;">
                    收货地址：{{this.address}}
                    <br>
                    会员昵称:{{unpaidOrder.memberUsername}}
                </div>
                <ul>
                    <!-- 我的订单表头 -->
                    <li class="order-info">
                        <div class="order-id">订单号:{{unpaidOrder.orderSn}}</div>
                        <div class="order-time">创建时间: {{unpaidOrder.createTime| dateFormat}}</div>
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
                    <li class="product-list" v-for="item in unpaidOrder.orderItemEntities" :key="item.id">
                        <div class="pro-img">
                            <img @click="toDetail(item.skuId)"  :src="item.skuPic" />
                        </div>
                        <div class="pro-name">
                            <span @click="toDetail(item.skuId)" style="position: absolute;
                                line-height: 30px">{{item.spuName}}</span>
                        </div>
                        <div class="pro-price">{{item.skuPrice}}元</div>
                        <div class="pro-num">{{item.skuQuantity}}</div>
                        <div class="pro-total pro-total-in">{{item.skuPrice * item.skuQuantity}}元</div>
                    </li>
                </ul>


                <!-- 订单列表END -->


                <!-- 结算列表 -->
                <div class="section-count">
                    <div class="money-box">
                        <ul>
                            <li>
                                <span class="title">商品件数：</span>
                                <span class="value">{{itemNum}}件</span>
                            </li>
                            <li>
                                <span class="title">商品总价：</span>
                                <span class="value">{{unpaidOrder.totalAmount}}元</span>
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
                                <span class="value">0千克</span>
                            </li>
                            <li>
                                <span class="title">运费：</span>
                                <span class="value">0元</span>
                            </li>
                            <li class="total">
                                <span class="title">应付总额：</span>
                                <span class="value">
                                <span class="total-price">{{unpaidOrder.totalAmount}}</span>元
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 结算列表END -->

            </div>
            <div style="margin-top:-40px;"></div>
        </div>
        <!-- 我的订单（待付款）主要内容END -->



    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 1,//步骤条当前激活步骤
                orderStatus:0,//订单支付状态
                address: "", // 收货地址
                orderSn:'',//待付款订单的大订单编号
                allUnpaidOrder:[],//所有未付款订单
                unpaidOrder:{},//指定的未付款订单
            };
        },

        // 通过路由获取订单编号
        created() {
            if (this.$route.query.orderSn != undefined) {
                this.orderSn = this.$route.query.orderSn;
                this.getOrderDetail(this.orderSn);
            }
        },
        watch: {
            // 监听订单编号的变化，请求后端获取订单详情
            orderSn: function (val) {
                this.getOrderDetail(val)
            },
        },
        computed:{
            //计算商品总件数
            itemNum(){
                let totalNum=0;
                this.unpaidOrder.orderItemEntities.forEach(item=>{
                    totalNum+=item.skuQuantity;
                })
                return totalNum;
            }
        },
        methods: {
            //获取待付款订单详情信息
            getOrderDetail(OrderSn){
                //alert("进来了")
                this.$axios
                    .get(this.$target1+'/oms/order/unpaid')
                    .then(res=>{
                        //console.log(res.data)
                        this.allUnpaidOrder=res.data.data;
                        //返回
                        let newarr = this.allUnpaidOrder.find(item=>{
                            return item.orderSn==OrderSn;
                        })
                        this.unpaidOrder = newarr;
                        //获取订单地址
                        this.address = this.unpaidOrder.receiverName+','+
                            this.unpaidOrder.receiverPhone+','+
                            this.unpaidOrder.receiverProvince+'\xa0\xa0\xa0'+
                            this.unpaidOrder.receiverCity+'\xa0\xa0\xa0'+
                            this.unpaidOrder.receiverRegion+'\xa0\xa0\xa0'+
                            this.unpaidOrder.receiverDetailAddress;
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    })
            },
            //未付款的订单再次付款
            trySubmit(orderSn){
                this.$axios
                    .get(this.$target1 + "/order/trySubmit/",{
                        params: {
                            orderSn: orderSn,
                        },
                    })
                    .then(res => {
                        //console.log(res);
                        switch (res.data.code) {
                            case 0: {
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
            //取消订单调用后台改变订单状态
            updateStatus(orderSn){
                this.$axios
                    .get(this.$target1 + "oms/orderitem/updateStatus",{
                        params: {
                            id: orderSn,
                            itemStatus: 4,
                        },
                    })
                    .then(res => {
                        console.log(res);

                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
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
