<template>
  <div style="background-color: rgb(245,245,245)">
    <main>
      <!--      订单信息start-->
      <div class="order-info">
        <h3 class="o-title">评价订单</h3>
        <div>
          <span class="order-id">订单号： <a href="Order.vue">{{orderInfo.id}}</a></span>
          <!-- <span class="order-time">{{orderInfo.createTime}}</span>-->
          <span class="order-time">创建时间： {{orderInfo.createTime|dateFormat}}</span>

        </div>
      </div>
      <!--      订单信息end-->

      <!--      快递评价start-->
    <!--  <el-row class="delivery-review-title" :gutter="0">
        <el-col :span="2"><img style="margin: 10px 20px;"
                               src="//misc.360buyimg.com/user/myjd/comment/1.0.0/css/i/bg-who1.png"></el-col>
        <el-col :span="3">
          <div style="color: #333; font: 700 14px/30px SimSun; line-height: 95px; border-right: 1px solid rgb(245,245,245)">
            物流服务评价
          </div>
        </el-col>
        <el-col :span="6">
          <div class="delivery-review-content">快递包装
            <el-rate class="delivery-review-start"
                     v-model="value"
                     show-text>
            </el-rate>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="delivery-review-content">送货服务
            <el-rate class="delivery-review-start"
                     v-model="value"
                     show-text>
            </el-rate>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="delivery-review-content">配送员服务
            <el-rate class="delivery-review-start"
                     v-model="value"
                     show-text>
            </el-rate>
          </div>
        </el-col>
      </el-row>-->
      <!--      快递评价end-->

      <!--      商品评价start-->
      <el-row style="margin-top: 11px;">
        <el-col :span="5" style="border-right: 1px solid rgb(245,245,245)">
          <div class="product-description">
            <img :src="orderInfo.skuPic"
                 height="100px" width="100px" />
            <div>{{orderInfo.spuName}}</div>
            <div>{{orderInfo.skuName}}</div>
            <div>￥{{orderInfo.skuPrice}}</div>
          </div>
        </el-col>
        <el-col :span="19" style="padding: 50px 50px">
          <div>商品评分
            <el-rate class="delivery-review-start"
                     v-model="star"
                     show-text>
            </el-rate>
          </div>
          <el-form style="margin-top: 20px; " size="small" ref="form" :model="data" label-width="80px">
            评价晒单
            <el-input type="textarea" :rows="4" v-model="content"></el-input>
          </el-form>
          <div style="margin-top: 20px">
            <el-upload
                    :action="this.$target1 + '/pms/store/uploadOssFile'"
                    list-type="picture-card"
                    :on-remove="handleRemove"
                    :file-List="fileList"
                    :on-success="handleAvatarSuccess">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-col>
      </el-row>
      <!--      商品评价end-->

      <el-row style="margin-top: 11px;">
        <div style="text-align: center">
          <el-button style="margin: 20px auto; height: 50px; width: 150px" type="primary" @click="onSubmit">发表
          </el-button>
        </div>
      </el-row>
      <br>
    </main>

  </div>

</template>

<script>
  export default {
    name: "Review",
    components: {},
    data() {
      return {
        //文件列表
        fileList: [],

        //评论文字
        content: "",

        //星星
        star: "",

        //订单信息
        orderInfo: {

        },

        //无用
        value: "",
      }
    },
    created() {
      //this.fetchData();
      console.log(this.$route.query)
      this.orderInfo.id = this.$route.query.orderId;
      this.orderInfo.spuName = this.$route.query.spuName;
      this.orderInfo.skuName = this.$route.query.skuName;
      this.orderInfo.skuPrice = this.$route.query.skuPrice;
      this.orderInfo.skuPic = this.$route.query.skuPic;
      this.orderInfo.spuId = this.$route.query.spuId
      this.orderInfo.createTime = this.$route.query.createTime
    },
    methods: {

      //上传成功回调 (无用)
     /* handleAvatarSuccess1(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res);
        console.log(file);
        if (res.code === 0) {
         /!* let pic = new Object();
          pic.type = file.raw.type;*!/
         // pic.url = res.data;
          this.fileList.push(res.data);
        }
      },*/
      //上传成功时存数据方法
      handleAvatarSuccess(response,file,fileList) {
        //console.log(fileList)
        this.fileList=[];
        for(let index in fileList){
          this.fileList.push(fileList[index].response.data);
        }
        //this.fileList.splice(0,num)
        //console.log(fileList)
      },

      //remove图片
      handleRemove(file,fileList) {
        this.fileList=[];
        for(let index in fileList){
          this.ruleForm1.imageUrl1.push(fileList[index].response.data);
        }
        console.log(this.fileList);
      },

      //提交表单
      onSubmit() {
        this.$axios({
          method: 'post',
          url: this.$target1 + "/pms/spucomment/addComment",
          contentType:"application/json;charset=utf-8",
          data: {
            skuId: this.orderInfo.skuId,
            spuName: this.orderInfo.spuName,
            spuId: this.orderInfo.spuId,
            spuAttributes: this.orderInfo.skuName,
            resources: this.fileList,
            content: this.content,
            star: this.star,
            orderSn:this.orderInfo.id
          },
           dataType:"json",

        }).then(res => {
          console.log(res);
          if(res.data.code==0){
            this.notifySucceed(res.data.msg);
          }
        }).catch(err => {
          return Promise.reject(err);
        });
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  main {
    width: 80%;
    margin: 0 auto;
    color: #666;
    font: 15px/150% tahoma, arial, Microsoft YaHei, Hiragino Sans GB, "\u5b8b\u4f53", sans-serif;
  }

  .order-info {
    text-align: center;
    font: 12px/22px verdana;
    color: #999;
    padding: 15px;
    margin-bottom: 15px;
  }

  .o-title {
    font: 700 16px/26px "Microsoft YaHei";
    color: #333;
  }

  .order-id {
    margin: 20px;
  }

  .order-id a {
    color: #333;
    text-decoration: none;
  }

  .el-row {
    background-color: white;
    /*padding: 20px 10px 20px 45px;*/
  }

  .delivery-review-title {
    /*padding: 20px 10px 20px 45px;*/
  }

  .delivery-review-content {
    line-height: 95px;
    padding-left: 15px;
  }

  .delivery-review-start {
    display: inline;
    padding-left: 5px;
  }


  .product-description {
    text-align: center;
    padding: 50px;
  }

  .product-description div {
    margin-top: 8px;
  }


</style>
