<!--
 * @Description: 商品详情页面组件
 * @Author: hai-27
 * @Date: 2020-02-16 20:20:26
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-07 21:59:26
 -->
<template>
  <div id="details">
    <!-- 头部 -->
    <div class="page-header">

    </div>
    <!-- 头部END -->

    <!-- 主要内容 -->
    <div class="main" style="display: flex">
      <!-- 左侧商品轮播图 -->
      <div class="block" style="width: 300px;height: 400px;margin: 0px 50px 0px 50px">
        <el-carousel style="width:300px;height:400px;" v-if="productPicture.length>1">
          <el-carousel-item v-for="item in productPicture" :key="item.id">
            <img align="middle" style="width:100%;height:100%;" :src="item"/>
          </el-carousel-item>
        </el-carousel>
        <div v-if="productPicture.length==1">
          <img
                  style="width:100%;height:100%;"
                  :src="productPicture[0]"
          />
        </div>
      </div>
      <!-- 左侧商品轮播图END -->

      <!-- 右侧内容区大 -->
      <div class="content" style="width: 60%">
        <!-- 右侧内容区小-->
        <el-card class="box-card" id="con" >
          <!--商品描述区域-->
          <div slot="header" class="clearfix">
            <span>
               <h1 class="name">{{productDetail.spuName}}</h1>
               <p class="intro">{{productDetail.skuTitle}}</p>
            </span>
            <div class="item hide" id="p-ad" clstag="shangpin|keycount|product|slogana" data-hook="hide"
                 title="" style="display: block; color: #e4393c;margin-bottom: 5px;padding-top: 5px">
              {{productDetail.subTitle}}
            </div>
          </div>
          <!--商品描述区域结束-->
          <div style="background-color:#f7f7f7">
            <!--价格区域-->
            <div class="text item" style="background-color:#f7f7f7;padding: 3px;display: flex;align-items: baseline">
              <h1 class="name" style="font-size: 14px;height: 40px;float: left;font-family: simsun;
              color: #999;">价格 </h1>
              <span class="price-span" style="padding-left: 10px;color: #f91424">{{productDetail.price|priceFormat}}</span>
              <!--累计评价超链接-->
             <!-- <div style="width: 60px;height: 50px;align-self: flex-end;margin-left:35%;border-left: solid 1px #e6e6e6;text-align: center;">
                <h1 style="font-size: 14px;height: 30px;float: right;font-family: simsun;
              color: #999;">累计评价</h1>
                <a  @click="goComment()" @mouseover="mouseOver" @mouseleave="mouseLeave"
                   :style="active">
                  <strong>1000+</strong>
                </a>
              </div>-->
            </div>
            <!--价格区域结束-->
            <!--配送 、重量区域-->
            <div class="text item" style="height:50px;padding:3px;">
             <!-- <div class="ps" style="display: flex;align-items: center">
                <h1 class="ps-title" style="font-size: 14px;height: 40px;float: left;font-family: simsun;
              color: #999;">
                  配送至
                </h1>
                <el-form class="ps-address">
                  <el-form-item style="padding: 10px">
                    <el-select placeholder="请选择收货地址">
                      <el-option label="区域一"></el-option>
                      <el-option label="区域二"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </div>-->
              <p class="weight" style="font-size: 14px;float: left;font-family: simsun;
              color: #999;">
                重量 0.01kg
              </p>

              <br>
              <p  style="font-size: 14px;float: left;font-family: simsun;
              color: #999;">
                 <el-tag style="margin-left: 5px" size="mini"
                      v-for="item in productDetail.sales"
                      :key="item.skuId"
                      type="danger"
                      effect="plain">
                {{ item.type }}{{item.desc}}
              </el-tag>
              </p>

            </div>
            <!--配送区域结束-->




          </div>

          <!--规格参数开始-->
          <div class="text item" style="padding: 10px 20px 10px 3px ">
            <div class="choose1" >
              <h1 class="title" style="font-size: 14px;float: left;font-family: simsun;height: auto;line-height: 40px;
              color: #999;padding-right: 10px;">
                规格参数
              </h1>
              <el-radio-group fill="#b31d28" text-color="#ffffff" v-model="radioDefult"  @change="changeProductID" size="mini" >
                <el-radio-button   type="primary" :disabled="storeFlag" style="margin-top: 6px;" v-for="(item, key) in saleAttrs" :key="key"
                                 :label=item[0] border>{{item[1]}}
                </el-radio-button>
              </el-radio-group>
              <!--              <el-radio-group v-model="radio" v-for="(item, key) in saleAttrs" :key="key">-->
              <!--                <el-radio-button @change="changeProductID(item[0])" :label=item[0] border>{{item[1]}}</el-radio-button>-->
              <!--              </el-radio-group>-->
              <!--              <el-row v-for="(item, key) in saleAttrs" :key="key">-->
              <!--                <el-button @click="changeProductID(item[0])">{{item[1]}}</el-button>-->
              <!--              </el-row>-->
            </div>
          </div>
          <!--规格参数end-->

          <!--库存开始-->
          <div class="text item" style="padding: 10px 20px 10px 3px ">
            <div>
              <h1 class="title" style="font-size: 14px;float: left;font-family: simsun;height: 40px;line-height: 40px;
              color: #999;padding-right: 10px;">
                库存
              </h1>
              <h1  style="font-size: 14px;float: left;font-family: simsun;height: 40px;line-height: 40px;
              color: #999;padding-right: 10px;" v-if="productDetail.store==true">
                有货
              </h1>
              <h1  style="font-size: 14px;float: left;font-family: simsun;height: 40px;line-height: 40px;
              color: #999;padding-right: 10px;" v-else>
                无货
              </h1>
            </div>
          </div>
          <!--库存END-->

        </el-card>
        <!--  右侧内容区小END-->

        <!-- 内容区底部按钮 -->
        <div class="button" style="display:flex;margin: 10px 10px 10px 10px">

          <div style="height: 44px;line-height: 44px">
            <el-input-number :disabled="storeFlag" v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>

          <el-button type="primary"  style="margin-left: 3%;background-color: #b31d28;border: none; color: white;padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 12px;
                    cursor: pointer;"  @click="addShoppingcart(radioDefult);open()">加入购物车
          </el-button>
          <el-popover
              placement="bottom"
              title="去分享吧"
              trigger="click"
              :content="shareContent"
              v-model="shareVisible">
            <el-button type="primary" style="margin-left: 3%;background-color: #b31d28;border: none; color: white;padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 12px;
                    cursor: pointer;" slot="reference" @click="this.shareVisible = !this.shareVisible">
              <i class="el-icon-share"></i>去分享</el-button>
          </el-popover>
         <!-- <el-button type="primary" style="margin-left: 3%;background-color: #b31d28;border: none; color: white;padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 12px;
                    cursor: pointer;">收藏
          </el-button>-->
        </div>
        <!-- 内容区底部按钮END -->
        <div class="pro-policy">
         <!-- <ul>
            <li>
              <i class="el-icon-circle-check"></i> 集厂聚品自营
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 集厂聚品发货
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 7天无理由退货
            </li>
            <li>
              <i class="el-icon-circle-check"></i> 7天价格保护
            </li>
          </ul>-->
        </div>
      </div>
      <!-- 右侧内容区大END -->

    </div>
    <!-- 主要内容END -->

    <!--底部tab：商品描述，规格包装，商品评价-->
    <div class="main-box" id="mainBox" style="padding: 80px 20px 20px 20px">

      <div class="main">
        <el-tabs type="border-card" :value="value" @tab-click="handleClick">
          <el-tab-pane :key="item.name" v-for="(item) in editableTabs" :label="item.title" :name="item.name">
            <tab-component :spuId="spuId" :groups="groups" :brandEntity="brandEntity" :is=item.content ></tab-component>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>


  </div>
</template>
<script>
  import {mapActions} from "vuex";
  /*注意路径 ../表示上一级*/
  import Reviews from "../components/ProductReviews";
  import Error from "../components/Error";
  import ProductDesciption from "../components/ProductDesciption";


  export default {
    data() {
      return {
        editableTabs: [{
          title: '商品描述',
          name: '1',
          content: 'ProductDesciption',
        }, {
          title: '规格包装',
          name: '2',
          content: ''
        }, {
          title: '商品评价',
          name: '3',
          content: 'Reviews'
        }, {
          title: '售后保障',
          name: '4',
          content: ''
        }],
        active: 'color: #005ea7;',
        value: '1',
        num: 1,
        storeFlag: true, // 控制“加入购物车按钮是否可用”
        productID: "", // 商品id
        productDetail: "", // 商品详细信息
        // productPicture: this.productDetail.images // 商品图片
        //套餐的默认值
        radioDefult: "",
        //子组件用的
        groups: "",
        spuId: "",//商品评价组件用的

        //显示分享链接框
        shareVisible: false,
      };
    },

    computed: {
      //邀请人
      shareUser: function () {
        return  this.$route.query.shareUser
      },

      //分享的内容
      shareContent: function () {

        const urlStr = window.location.href.toString().substring(0,window.location.href.toString().lastIndexOf("/"))
        const urlStr2 = urlStr.substring(0,urlStr.lastIndexOf("/"))
        if (this.$store.state.user.user !== "") {
          return urlStr2 + "/goods/details?productID=" + this.productID + "&shareUser=" + this.$store.state.user.user.username;
        } else {
          return urlStr2 + "/goods/details?productID=" + this.productID
        }
      },

      //返回品牌信息
      brandEntity: function () {
        return this.productDetail.brandEntity;
      },
      //返回groups
      // groups: function () {
      //   return this.productDetail.groups;
      // },
      //返回商品照片
      productPicture: function () {
        return this.productDetail.images;
      },
      //返回套餐列表
      saleAttrs: function () {
        let data = new Map();
        for (let item of this.productDetail.saleAttrs) {
          if (data.has(item.skuId)) {
            data.set(item.skuId, data.get(item.skuId) + " " + item.attrValue);
          } else {
            data.set(item.skuId, item.attrValue);
          }
        }
        return data;
      },
    },
    /*局部注册子组件*/
    components: {
      Reviews,
      Error,
      ProductDesciption,
    },
    // 通过路由获取商品id
    activated() {
      if (this.$route.query.productID != undefined) {
        this.productID = this.$route.query.productID;
      }
      if (this.$route.query.shareUser != undefined) {
        this.setWhoShare(this.$route.query.shareUser);
      }
      this.getProduceDetail(this.productID);
      this.radioDefult = this.productID;

    },
    watch: {
      // 监听商品id的变化，请求后端获取商品数据
      productID: function (val) {
        this.getProduceDetail(val)
        // this.getDetails(val);
        // this.getDetailsPicture(val);
      },
      //返回groups,传给子组件
      groups: function () {
        return this.productDetail.groups;
      },
    },
    methods: {
      ...mapActions(["setWhoShare"]),

      //若该商品无货，提示用户无货
      open() {
        if (this.storeFlag==true){
          this.$alert('该商品暂时没有库存，请选购其他商品', '提示', {
            confirmButtonText: '我知道了',
          /*  callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }*/
          });
        }
      },
      //跳转到评论
      goComment() {
        this.value='3';
        console.log(this.value)
        // 注册表单盒子的类名为 form-wrap-app
        this.$el.querySelector('.main-box').scrollIntoView();
      },


      mouseOver: function () {
        this.active = 'color: #FF0000';
      },
      mouseLeave: function () {
        this.active = '';
      },
      handleChange(value) {
        console.log(value);
      },
      handleClick(tab, event) {
        //点击商品评价时  调用商品评价组件中的方法
        console.log(tab, event);
      },
      ...mapActions(["unshiftShoppingCart", "addShoppingCartNum"]),
      addShoppingcart(productID){
        //alert("进来了")
        if (this.storeFlag==true){
          this.$alert('该商品暂时没有库存，请选购其他商品', '提示', {
            confirmButtonText: '我知道了',
          /*  callback: action => {
              this.$message({
                type: 'info',
                message: `action: ${ action }`
              });
            }*/
          });
        } else {
            this.$axios
                .post(this.$target1+"/cart", {
                  skuId: productID,
                  count: this.num
                })
                .then(res => {
                      // 提示加入购物车成功
                      this.notifySucceed(res.data.msg);

                    }
                )
                .catch(err => {
                  return Promise.reject(err);
                });
        }
      },
      //得到商品详情
      getProduceDetail(sku) {
        this.$axios
            .get(this.$target1 + "/item/" + sku)
            .then(res => {
              if (res.data.code === 0) {
                this.productDetail = res.data.data;
                this.spuId = this.productDetail.spuId;
                this.storeFlag =!(res.data.data.store);
              } else {
                this.notifyError(res.data.msg);
              }
            })
            .catch(err => {
              this.notifyError(err);
            });
      },
      // 加入购物车
      // addShoppingCart() {
      //   // 判断是否登录,没有登录则显示登录组件
      //   if (!this.$store.getters.getUser) {
      //     this.$store.dispatch("setShowLogin", true);
      //     return;
      //   }
      //   this.$axios
      //       .post("/api/user/shoppingCart/addShoppingCart", {
      //         user_id: this.$store.getters.getUser.user_id,
      //         product_id: this.productID
      //       })
      //       .then(res => {
      //         switch (res.data.code) {
      //           case "001":
      //             // 新加入购物车成功
      //             // productName: "", // 商品名称
      //             //     productImg: "", // 商品图片
      //             // eslint-disable-next-line no-case-declarations
      //             let n = parseInt(this.productID) - 8;
      //             res.data.shoppingCartData[0].productName = this.productID < 8 ? "桌子" + this.productID : "椅子" + n.toString();
      //             res.data.shoppingCartData[0].productImg = this.productID < 8 ? "https://img13.360buyimg.com/n7/jfs/t1/100189/38/9294/334257/5e0d8aa7Ef7f71cae/cc1dd9d230bbbe8b.jpg" : "https://img13.360buyimg.com/n7/jfs/t1/116060/10/10544/393628/5ef002c9E7d99f5d5/f970c315a82468ee.jpg";
      //             this.unshiftShoppingCart(res.data.shoppingCartData[0]);
      //             this.notifySucceed(res.data.msg);
      //             break;
      //           case "002":
      //             // 该商品已经在购物车，数量+1
      //             this.addShoppingCartNum(this.productID);
      //             this.notifySucceed(res.data.msg);
      //             break;
      //           case "003":
      //             // 商品数量达到限购数量
      //             this.dis = true;
      //             this.notifyError(res.data.msg);
      //             break;
      //           default:
      //             this.notifyError(res.data.msg);
      //         }
      //       })
      //       .catch(err => {
      //         return Promise.reject(err);
      //       });
      // },
      //修改正在查看的商品
      changeProductID(label) {
        this.productID = label;
        this.getProduceDetail(this.productID);
      },
      // addCollect() {
      //   // 判断是否登录,没有登录则显示登录组件
      //   if (!this.$store.getters.getUser) {
      //     this.$store.dispatch("setShowLogin", true);
      //     return;
      //   }
      //   this.$axios
      //       .post("/api/user/collect/addCollect", {
      //         user_id: this.$store.getters.getUser.user_id,
      //         product_id: this.productID
      //       })
      //       .then(res => {
      //         if (res.data.code == "001") {
      //           // 添加收藏成功
      //           this.notifySucceed(res.data.msg);
      //         } else {
      //           // 添加收藏失败
      //           this.notifyError(res.data.msg);
      //         }
      //       })
      //       .catch(err => {
      //         return Promise.reject(err);
      //       });
      // }
    }
  };
</script>
<style>
  /* 头部CSS */
  @import "../assets/css/index.css";

  #con {

  }


  #details .page-header {
    height: 64px;
    margin-top: -20px;
    z-index: 4;
    background-color: #f7f7f7;
    border-bottom: 1px solid #e0e0e0;
    -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  }

  #details .page-header .title {
    width: 1225px;
    height: 64px;
    line-height: 64px;
    font-size: 18px;
    font-weight: 400;
    color: #212121;
    margin: 0 auto;
  }

  #details .page-header .title p {
    float: left;
  }

  #details .page-header .title .list {
    height: 64px;
    float: right;
  }

  #details .page-header .title .list li {
    float: left;
    margin-left: 20px;
  }

  #details .page-header .title .list li a {
    font-size: 14px;
    color: #616161;
  }

  #details .page-header .title .list li a:hover {
    font-size: 14px;
    color: #ff6700;
  }

  /* 头部CSS END */
  #details .main .content .pro-policy li {
    float: left;
    margin-right: 20px;
    color: #b0b0b0;
  }

  .main-box {
    padding-bottom: 20px;
  }

  /* 主要内容CSS END */
</style>
