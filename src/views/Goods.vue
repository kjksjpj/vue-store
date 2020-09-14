<template>
  <div class="goods" id="goods" name="goods">


    <!-- 分类标签 -->
    <div class="nav" style="background-color:#fbfdff;height:auto;display: flex;flex-direction: column;margin: 0px 30px 10px 30px;padding: 10px 0px 10px 20px">


      <div class="product-nav"  style="margin-bottom: 10px;">
        <div class="title" style="width:6%;height:auto;margin-right: 10px"> </div>
        <div class="tag-group">
          <ul  v-for="item in categoryList" :key="item.catId">
              <li style="font-size: 15px;float:left; list-style:none;margin:0px 0px 10px 0px;cursor: pointer;"
                       @click="categoryClick(item.catId);categoryClick1(item.catId,1);displayChange(1)">
                     <a class="category" >{{item.name}}<el-divider direction="vertical"></el-divider></a>
              </li>
          </ul>
        </div>
      </div>

      <div class="product-nav-change" :style="styleObject1" >
        <div class="title" style="width:6%;height:auto;margin-right: 10px"></div>
        <div class="tag-group" >
          <ul  v-for="item in categoryList2" :key="item.catId">
            <li style="font-size: 15px;float:left; list-style:none;margin:0px 0px 10px 0px;cursor: pointer"
                @click="categoryClickk(item.catId),categoryClick1(item.catId,2),displayChange(2)" >
                  <a class="category" > {{item.name}}<el-divider direction="vertical"></el-divider></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="product-nav-change"  :style="styleObject2" >
        <div class="title" style="width:6%;height:auto;margin-right: 10px"></div>
        <div class="tag-group" >
          <ul  v-for="item in categoryList3" :key="item.catId">
            <li style="font-size: 15px;float:left; list-style:none;margin:0px 0px 10px 0px;cursor: pointer"
                @click="categoryClickkk(item.catId);categoryClick1(item.catId,3);" >
              <a class="category" > {{item.name}}<el-divider direction="vertical"></el-divider></a>
            </li>
          </ul>
        </div>
      </div>

      <div style="margin-bottom: 10px">
        <el-tag style="margin-right: 5px" color="#ffffff" size="mini"
                v-for="tag in tags"
                :key="tag.id"
        >
          <p style="color: #f91424;">{{tag.name}}</p>
        </el-tag>
      </div>

    </div>
    <!-- 分类标签END -->

    <!--品牌展示区域 及 价格升降序-->
    <!--只有当点击三级分类的时候 才会显示这个区域 还没做-->
    <div style="height: 33px;display: flex;"  >
      <div class="title" style="width:8%;height:50px;margin-right: 10px;padding-left: 50px"><span class="tag-group__title">所有品牌：</span></div>
      <ul v-for="item in productbrand" :key="item.id">
        <li style="float:left; list-style:none;margin:0px 10px 0px 0px;cursor: pointer" @click="getProductByBrandId(item.id)">
            <a class="category">{{item.name}}</a>
        </li>
      </ul>

      <div style="margin: 0px 10px 0px 500px">
        <a href="javascript:;" class="curr" >
          <span class="fs-tit" style="">价格</span>
          <em class="fs-up" style="font-style: normal;">
            <button @click="priceSort(1)" ><i class="el-icon-caret-top" ></i></button>
            <button @click="priceSort(2)"><i class="el-icon-caret-bottom"></i></button>
          </em>
        </a>
      </div>
    </div>

    <!--品牌展示区域END 及 价格升降序-->


    <!-- 主要内容区 -->
    <div class="main">
      <div class="list">
        <!--这是一个插槽，点击MyList到MyList组件，-->
        <MyList :list="product" :listbrand="productbrand" v-if="product.length>0"></MyList>

        <div v-else class="none-product">抱歉没有找到相关的商品，请看看其他的商品</div>
      </div>


      <!-- 分页 -->
      <div class="pagination">
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


    //价格升降序
     priceSort:function(flag){
           if(flag==1){
             //把商品按价格升序排列
             this.product.sort((a,b)=>a.price-b.price)
           }else if (flag==2){
             //把商品按价格降序排列
             this.product.sort((a,b)=>b.price-a.price)
           }
      },

    /*  up(name){
        return function (obj1, obj2) {
          let val1 = obj1[name]
          let val2 = obj2[name]
          return val1 - val2
        }
      },
      down (name) {
        return function (obj1, obj2) {
          let val1 = obj1[name]
          let val2 = obj2[name]
          return val2 - val1
        }
      },*/

     /* mouseOver: function(){
        this.active = 'color:#f91424';
      },
      mouseLeave: function () {
        this.active = '';
      },*/

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

      //点击分类，将标签改为选中的分类名称
      categoryClick1:function (catId,level){
        if(level==1){
          //点击一级 把二级三级置为未选择
          this.tags[1].name="未选择";
          this.tags[2].name="未选择";
          //用find（）方法根据catId查找categorylist中相应的对象，注意：不能用过滤器 不能改变原对象数组的值
          let item = this.categoryList.find((item)=>{
            //千万注意这里是三个===  被坑了一个小时
            return  item.catId === catId;
          })
          //把找到的item.name赋给this.tags[0].name
          this.tags[0].name=item.name;
        }else if(level==2){
          //点击二级 把三级置为未选择
          this.tags[2].name="未选择";
          let item = this.categoryList2.find((item)=>{
            return  item.catId === catId;
          }
          )
          this.tags[1].name=item.name;
        }else {
          let item = this.categoryList3.find((item)=>{
            return  item.catId === catId;
          })
          this.tags[2].name=item.name;
        }

      },

      //点击一级分类跳出相应的二级分类
      categoryClick:function (catId) {
        //console.log(catId)
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
      categoryClickk:function (catId) {
        //console.log(catId)
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
      categoryClickkk:function(catId){
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
    color: #f91424;
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

  /* 面包屑CSS END */

  /* 分类标签CSS */
 /* .goods .nav {
    background-color: white;
  }*/


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
