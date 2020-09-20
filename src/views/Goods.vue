<template>
  <div class="goods" id="goods" name="goods">


    <!-- 分类标签 -->
    <div class="nav" style="background-color:#fbfdff;height:auto;display: flex;flex-direction: column;margin: 0px 0px 10px 0px;">
        <span style="border-bottom:1px dashed #ddd;"></span>
      <div class="product-nav"  style="margin: 10px 0 0px 0px">
<!--        <div class="title" style="width:6%;height:auto;margin-right: 10px"> </div>-->
        <div class="tag-group">
          <ul  v-for="(item,index) in categoryList" :key="item.catId" style="margin-left: 50px">
              <li :class="{active:oneIndex==index}" style="font-size: 15px;float:left;margin-left: 30px;color: #666; list-style:none;cursor: pointer;"
                       @click="categoryClick(item.catId,index);displayChange(1)">
                     <a class="category" :title="item.name">{{item.name}}</a>
              </li>
          </ul>
        </div>
      </div>
        <span  style="border-bottom:1px dashed #ddd; margin-top: 10px"></span>

      <div class="product-nav-change" style="margin: 10px 0 0px 0" >
<!--        <div class="title" style="width:6%;height:auto;margin-right: 10px"></div>-->
        <div class="tag-group" >
          <ul  v-for="(item,index) in categoryList2" :key="item.catId" style="margin-left: 50px">
            <li :class="{active:twoIndex==index}" style="font-size: 15px;float:left;margin-left: 30px;color: #666; list-style:none;cursor: pointer"
                @click="categoryClickk(item.catId,index),displayChange(2)" >
                  <a class="category">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
        <span v-if="this.categoryList2.length!=0" style="border-bottom:1px dashed #ddd; margin-top: 10px"></span>
      <div class="product-nav-change" style="margin: 10px 0 0px 0" >
<!--        <div class="title" style="width:6%;height:auto;margin-right: 10px"></div>-->
        <div class="tag-group" >
          <ul  v-for="(item,index) in categoryList3" :key="item.catId" style="margin-left: 50px">
            <li :class="{active:threeIndex==index}" style="font-size: 15px;float:left; list-style:none;margin-left: 30px;color: #666;cursor: pointer"
                @click="categoryClickkk(item.catId,index);" >
              <a class="category" > {{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
        <span v-if="this.categoryList3.length!=0" style="border-bottom:1px dashed #ddd;margin:10px 0 10px 0 "></span>

        <div class="tag-group">
            <ul v-for="item in productbrand" :key="item.id" style="margin-left: 50px">

                <li style="font-size: 15px;float:left; list-style:none;margin-left: 30px;color: #666;cursor: pointer" @click="getProductByBrandId(item.id)">
                    <a class="category">{{item.name}}</a>
                </li>

            </ul>
        </div>
        <span v-if="this.productbrand.length!=0" style="border-bottom:1px dashed #ddd;margin:10px 0 10px 0 "></span>
        <div style="height: 33px;display: flex;margin-left: 5%" v-if="product.length>0" >
            <ul >
                <li style="font-size: 15px;float:left; list-style:none;color: #666;cursor: pointer" >
                <span title="价格"  class="priceButton" href="javascript:void(0);" @click="searchPrice()">
                    价格&nbsp;<span >{{this.priceflag}}</span></span>
                </li>
            </ul>
        </div>


    </div>
    <!-- 分类标签END -->

    <!--品牌展示区域 及 价格升降序-->
    <!--只有当点击三级分类的时候 才会显示这个区域 还没做-->


    <!-- 主要内容区 -->
    <div class="main">
      <div class="list">
        <!--这是一个插槽，点击MyList到MyList组件，-->
        <MyList :list="product" :listbrand="productbrand" v-if="product.length>0"></MyList>

        <div v-else class="none-product">抱歉没有找到相关的商品，请看看其他的商品</div>
      </div>


      <!-- 分页 -->
      <div class="pagination" v-if="product.length>0">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                :current-page="currentPage"
                @current-change="currentChange"
        >
        </el-pagination>
      </div>
      <!-- 分页END -->


    </div>
    <!-- 主要内容区END -->
  </div>
</template>
<script>

  export default {
    data() {
      return {
        showBrandAndPrice:false,
        styleObject1: {
          marginBottom: '10px',
          display: 'none'
        },
        styleObject2: {
          marginBottom: '10px',
          display: 'none'
        },
        oneIndex:-1,
        twoIndex:-1,
        threeIndex:-1,
        priceSearch:'',
        priceflag:'↑',
        priceIndex:1,
        tags: [
          { id:1,name: '未选择'},
          { id:2,name: '未选择'},
          { id:3,name: '未选择'},
        ],
        searchQuery:{
          catelog3:'',
          brandId:'',
          keyword:'',
          total: 1, // 商品总量
          pageSize:20, // 每页显示的商品数量
          currentPage: 1, //当前页码
        },//请求参数
        //active: 'color: #005ea7;',
        categoryList3:"",//三级分类列表
        categoryList2:"",//二级分类列表
        categoryList: "", //一级分类列表
        catId:"",   //三级分类id 相当于接口中的catelogId
        product: [], // 商品列表
        productbrand: [],//商品品牌信息
        total: 1, // 商品总量
        pageSize:20, // 每页显示的商品数量
        currentPage: 1, //当前页码

      };
    },

    //created中的方法只会执行一次
    created() {
      // 获取一级分类列表
      this.getCategory();
      //获取全部商品
      this.getAllProduct();
    },

    watch: {
        $route: function (val) {
          if(val.path == "/goods"){
            this.getAllProduct();
          }
      }

    },


    methods: {
      //品牌和价格区域显示问题
      changeStatus(){
        //
        this.showBrandAndPrice=true;
      },

      //分类显示问题
      displayChange(flag){
        //alert(1);
        //只要display是none 即二三级分类只要有一个是隐藏的 就把它显示出来 即把display属性删除
        if (this.styleObject1.display=='none' || this.styleObject2.display=='none') {
          if(flag==1){
            delete  this.styleObject1.display;
          }else if(flag==2){
            delete  this.styleObject2.display;
          }
        }
        //如果点的是一级分类 而且二三级分类都是显示的 就把三级分类隐藏起来 即把display属性设为none 注意这里直接给display赋值就相当于在对象中加了这个属性
        if (flag==1 && !("display" in this.styleObject1 || "display" in this.styleObject2)){
          this.styleObject2.display='none';
        }
        //console.log(this.styleObject)

        },

        searchPrice(){
            let flag=this.priceIndex
            //升序
            if (flag==1){
                this.priceflag='↑'
                this.priceIndex=2
                this.product.sort((a,b)=>a.price-b.price)
            }
            //降序
            if (flag==2){
                this.priceflag='↓'
                this.priceIndex=1
                this.product.sort((a,b)=>b.price-a.price)
            }
            this.priceSearch="1"

        },
      //每次点击全部商品就会获取所有的商品
      getAllProduct(){
        //console.log("进来了")
        this.catId="",
                this.$axios
                        .get(this.$target1+"/search", {
                          params:{
                          }
                        })
                        .then(
                                res=>{
                                  this.product=res.data.data.products;
                                  //将商品品牌 分类置为初始的样子
                                  this.productbrand=[];
                                  this.tags= [
                                    { id:1,name: '未选择'},
                                    { id:2,name: '未选择'},
                                    { id:3,name: '未选择'},
                                  ];
                                  this.styleObject1.display='none';
                                  this.styleObject2.display='none';
                                  //分页
                                  this.total=res.data.data.total;
                                  //alert(res.data.data.total);
                                  this.pageSize=res.data.data.pageSize;
                                  this.currentPage=res.data.data.pageNum;

                                }
                        )
                        .catch(err=>{
                                  console.log(err)
                                }
                        )

      },

      // 向后端请求一级分类列表数据
      getCategory() {

        this.$axios
                .get(this.$target1+"/pms/category",{
                  params:{
                    level:1,
                    parentCid:0
                  }

                })
                .then(
                        res=>{
                          //console.log(res.data.data)
                          this.categoryList =res.data.data;
                        }
                )
                .catch(err=>{
                          console.log(err)
                        }
                )

      },

      //根据选中的品牌向后台请求相应的商品
      getProductByBrandId:function(brandId){
        this.$axios
                .get(this.$target1+"/search", {
                  params:{
                    //拿到选中的三级分类的商品id
                    catelog3:this.catId,
                    brand:brandId
                  }
                })
                .then(
                        res=>{
                          this.product=res.data.data.products;
                          //分页
                          this.pageSize=res.data.data.pageSize;
                          this.currentPage=res.data.data.pageNum;
                          this.total=res.data.data.total;
                        }
                )
      },

      // //点击分类，将标签改为选中的分类名称
      // categoryClick1:function (catId,level){
      //   if(level==1){
      //     //点击一级 把二级三级置为未选择
      //     this.tags[1].name="未选择";
      //     this.tags[2].name="未选择";
      //     //用find（）方法根据catId查找categorylist中相应的对象，注意：不能用过滤器 不能改变原对象数组的值
      //     let item = this.categoryList.find((item)=>{
      //       //千万注意这里是三个===  被坑了一个小时
      //       return  item.catId === catId;
      //     })
      //     //把找到的item.name赋给this.tags[0].name
      //     this.tags[0].name=item.name;
      //   }else if(level==2){
      //     //点击二级 把三级置为未选择
      //     this.tags[2].name="未选择";
      //     let item = this.categoryList2.find((item)=>{
      //       return  item.catId === catId;
      //     }
      //     )
      //     this.tags[1].name=item.name;
      //   }else {
      //     let item = this.categoryList3.find((item)=>{
      //       return  item.catId === catId;
      //     })
      //     this.tags[2].name=item.name;
      //   }
      //
      // },

      //点击一级分类跳出相应的二级分类
      categoryClick:function (catId,index) {
        //console.log(catId)
        this.priceflag='↑';
          this.oneIndex=index
          this.categoryList2 ='';
          this.twoIndex =-1;
          this.threeIndex =-1;
          this.categoryList3 ='';
        this.$axios
                .get(this.$target1+"/pms/category",{
                  params:{
                    level:2,
                    parentCid:catId
                  }

                })
                .then(
                        res=>{
                          //console.log(res.data.data)
                          this.categoryList2 =res.data.data;
                        }
                )

      },

      //点击二级分类跳出相应的三级分类
      categoryClickk:function (catId,index) {
        //console.log(catId)
          this.priceflag='↑';
          this.twoIndex=index;
          this.categoryList3 ='';
        this.$axios
                .get(this.$target1+"/pms/category",{
                  params:{
                    level:3,
                    parentCid:catId
                  }

                })
                .then(
                        res=>{
                          //console.log(res.data.data)
                          this.categoryList3 =res.data.data;
                        }
                )

      },

      //点击三级分类出来相应的商品，同时出来商品的所有品牌
      categoryClickkk:function(catId,index){
        this.priceflag='↑';
          this.threeIndex=index
        this.$axios
                .get(this.$target1+"/search", {
                  params:{
                    catelog3:catId
                  }
                })
                .then(
                        res=>{
                          //console.log(res.data.data.brand.value);
                          this.product=res.data.data.products;
                          this.productbrand=res.data.data.brand.value;
                          //遍历this.productbrand 把每一项解析成对象
                          let num=this.productbrand.length;
                          this.productbrand.forEach((item)=>{
                            //解析之后push进去
                             this.productbrand.push(JSON.parse(item))
                          });
                          //删除原先的json字符串形式 是splice 不是slice
                          this.productbrand.splice(0,num);
                          //把catId给data 及时更新不同商品的品牌信息
                          this.catId=catId;

                          //分页
                          this.pageSize=res.data.data.pageSize;
                          this.currentPage=res.data.data.pageNum;
                          this.total=res.data.data.total;
                        }
                )
      },

      // 返回顶部
/*      backtop() {
        const timer = setInterval(function () {
          const top = document.documentElement.scrollTop || document.body.scrollTop;
          const speed = Math.floor(-top / 5);
          document.documentElement.scrollTop = document.body.scrollTop =
              top + speed;

          if (top === 0) {
            clearInterval(timer);
          }
        }, 20);
      },*/


      // 页码变化调用currentChange方法
      currentChange(pageNum) {
        this.currentPage=pageNum;
        this.getData();
        //this.backtop();
      },

      //页码变化向后端请求相应的分页商品
     getData(){
       this.$axios
               .get(this.$target1+"/search",{
                 //三级分类商品
                 params:{
                   catelog3:this.catId,
                   pageNum:this.currentPage
                 }

               })
               .then(
                       res=>{
                         //console.log(res.data.data)
                         this.product =res.data.data.products;
                         //alert(res.data.data.total);
                         this.currentPage=res.data.data.pageNum;
                       }
               )
               .catch(err=>{
                         console.log(err)
                       }
               )
     },



    }
  };
</script>

<style >
    .priceButton{
        /*color: red;*/
        display: block;
        padding: 0 10px 0px;
        line-height: 30px;
        color: #666;
        font-size: 14px;
        background-color: #dec2a6;
    }

  .active {
    background: #dec2a6;
    /*border-radius: 5px;*/
  }
 /* 价格升降序css*/
  a.curr {
    float: left;
    padding: 0 9px;
    height: 23px;
    border: 1px solid #CCC;
    line-height: 23px;
    margin-right: -1px;
    background: #FFF;
    color: #333;
  }
 /* 价格升降序cssEND*/

  a.category :link{
    color: #333;
    font-weight: 600;
  }
  a.category :visited{
    background-color: #73c2d7;
  }
  a.category:hover{
    color: #ff6700;
    display:block;

  }
  .goods {
    background-color: #f5f5f5;
  }

  /* 面包屑CSS */
  .el-tabs--card .el-tabs__header {
    border-bottom: none;
  }

  .goods .breadcrumb {
    height: 50px;
    background-color: white;
    margin: 0px 30px 10px 30px;
  }

  .goods .breadcrumb .el-breadcrumb {
    line-height: 30px;
    font-size: 16px;
    margin: 0px 50px 10px 50px;
  }



  .nav .product-nav .title {
    width: 50px;
    font-size: 16px;
    font-weight: 700;
    float: left;
  }

  /* 分类标签CSS END */

  /* 主要内容区CSS */
  .goods .main {
    margin: 0 auto;
    max-width: 1225px;
  }

  .goods .main .list {
    padding-top: 14.5px;
    overflow: auto;
  }

  .goods .main .pagination {
    height: 50px;
    text-align: center;
  }

  .goods .main .none-product {
    color: #333;
    margin-left: 30px;
    text-align: center;
  }

  /* 主要内容区CSS END */
</style>
