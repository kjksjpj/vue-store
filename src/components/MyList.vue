<!--
 * @Description: 列表组件，用于首页、全部商品页面的商品列表
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-04-05 13:22:22
 -->
<template>
  <div id="myList" class="myList" >
    <ul>
      <li v-for="item in list"  :key="item.skuId" style="margin: 20px;">
        <!--<el-popover placement="top">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 10px 0 0">
            <el-button type="primary" size="mini" @click="deleteCollect(item.product_id)">确定</el-button>
          </div>
          <i class="el-icon-close delete" slot="reference" v-show="isDelete"></i>
        </el-popover>-->

         <div @click="getProductDetails(item.skuId)" style="cursor: pointer">
        <!--<router-link :to="{ path: '/goods/details', query: {productID:item.skuId} }">-->
          <img :src="item.pic" alt />
          <h3 style="color: black;font-size: 16px">
           <a v-html="item.title"></a>
          </h3>
          <p>
            <span><em style="font-style: normal;"></em>{{item.price|priceFormat}}</span>

          </p>
<!--            <h3>{{item.storeName}}</h3>-->
          <div class="p-icons" id="J_pro_100012749298" data-done="1" style="margin-top:10px;overflow: hidden;zoom: 1;height: 18px;padding-left: 70px">
            <i class="goods-icons J-picon-tips J-picon-fix" data-idx="1" data-tips="京东自营，品质保障"
               style="float: left;
                  height: 16px;
                  line-height: 16px;
                  padding: 0 3px;
                  /*margin-right: 3px;*/
                  overflow: hidden;
                  text-align: center;
                  font-style: normal;
                  font-size: 12px;
                  background: #e23a3a;
                  color: #FFF;
                  cursor: default;
                  border-radius: 2px;">
              推荐
            </i>
            <i class="goods-icons4 J-picon-tips" style="border-color:#4d88ff;color:#4d88ff;float: left;
                  height: 14px;
                  line-height: 14px;padding: 0 3px;
                  border: 1px solid #e23a3a;
                  margin-left: 10px;
                  overflow: hidden;
                  text-align: right;
                  font-style: normal;
                  font-size: 12px;
                  border-radius: 2px;
                  " data-idx="1" data-tips="品质服务，放心购物">
              {{item.storeName}}
            </i>
          </div>
        <!--</router-link>-->
         </div>

      </li>



    </ul>
  </div>
</template>
<script>
export default {
  name: "MyList",
  // list为父组件传过来的商品列表
  props: ["list", "isMore", "isDelete"],
  data() {
    return {};
  },
  computed: {
    // 通过list获取当前显示的商品的分类ID，用于“浏览更多”链接的参数
    categoryID: function() {
      let categoryID = [];
      if (this.list != "") {
        for (let i = 0; i < this.list.length; i++) {
          const id = this.list[i].category_id;
          if (!categoryID.includes(id)) {
            categoryID.push(id);
          }
        }
      }
      return categoryID;
    }
  },

  methods: {
    getProductDetails(product_id){
      // 跳转到Details组件页面
      this.$router.push({ path: "/goods/details", query: {productID: product_id}})
    },
    deleteCollect(product_id) {
      this.$axios
        .post("/api/user/collect/deleteCollect", {
          user_id: this.$store.getters.getUser.user_id,
          product_id: product_id
        })
        .then(res => {
          switch (res.data.code) {
            case "001":
              // 删除成功
              // 删除删除列表中的该商品信息
              for (let i = 0; i < this.list.length; i++) {
                const temp = this.list[i];
                if (temp.product_id == product_id) {
                  this.list.splice(i, 1);
                }
              }
              // 提示删除成功信息
              this.notifySucceed(res.data.msg);
              break;
            default:
              // 提示删除失败信息
              this.notifyError(res.data.msg);
          }
        })
        .catch(err => {
          return Promise.reject(err);
        });
    }
  }
};
</script>
<style scoped>
.myList ul li {
  border:1px solid transparent;
  z-index: 1;
  float: left;
  width: 200px;
  height: 250px;
  padding: 10px 0;
  margin: 0 0 14.5px 13.7px;
  background-color: white;
 /* -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: relative;*/
}
.myList ul li:hover {
  border: #f91424 1px solid;
  /*z-index: 2;*/
/*  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);*/
 /* -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);*/
}
.myList ul li img {
  display: block;
  width: 170px;
  height: 170px;
  /*background: url(../assets/imgs/placeholder.png) no-repeat 50%;*/
  margin: 0 auto;
}
.myList ul li h2 {
  margin: 25px 10px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.myList ul li h3 {
  margin: 5px 10px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #b0b0b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.myList ul li p {
  margin: 10px 10px 10px;
  text-align: center;
  color: #ff6700;
}
.myList ul li p .del {
  margin-left: 0.5em;
  color: #b0b0b0;
  text-decoration: line-through;
}
.myList #more {
  text-align: center;
  line-height: 280px;
}
.myList #more a {
  font-size: 18px;
  color: #333;
}
.myList #more a:hover {
  color: #ff6700;
}
.myList ul li .delete {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
.myList ul li:hover .delete {
  display: block
}
.myList ul li .delete:hover {
  color: #ff6700;
}
</style>
