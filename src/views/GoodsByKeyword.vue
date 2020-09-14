<template>
    <div class="goods" id="goods" name="goods">


        <!--品牌展示区域 及 价格升降序-->
        <!--只有当点击三级分类的时候 才会显示这个区域 还没做-->
        <div style="height: 33px;display: flex;"  >
            <div class="title" style="width:8%;height:50px;margin-right: 10px;padding-left: 50px"><span class="tag-group__title">所有品牌：</span></div>
            <ul v-for="item in productbrand"  :key="item.id">
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
                brandId:'',//品牌分类id
                product: [], // 商品列表
                productbrand: [],//商品品牌信息
                total: 1, // 商品总量
                pageSize:20, // 每页显示的商品数量
                currentPage: 1, //当前页码
                search: "" // 关键字搜索条件
            };
        },


        created() {
            this.search =this.$route.query.search;
            this.getProductBySearch()
        },

        watch: {


            // 监听路由，接收搜索条件参数,并且调用getProductBySearch（）方法向后台请求数据
            //注意！这个方法不一定是在路由变化的时候才执行  如果是相同的路由 重新请求一次即可  怎么才算重新请求 这个问题尚待解决

          /*  $route: function (val) {
                    //console.log(val.query)
                    if(val.query.search != "") {
                        this.search = val.query.search;
                        this.getProductBySearch();
                    }

            }*/
        },
        //进入路由之前执行
       /* beforeRouteEnter: (to, from, next) => {
            //加载数据
            console.log("进入路由之前")
            console.log(to)
            next(vm => {
                    vm.search = to.query.search;
                    console.log(vm.search);
                    //进入路由之前执行方法  vm相当于当前组件的实例 即this
                    vm.getProductBySearch();
            });

        },*/

        methods: {
            //品牌和价格区域显示问题
            changeStatus(){
                //
                this.showBrandAndPrice=true;
            },

            // 通过搜索条件向后端请求商品数据
            getProductBySearch() {
                this.$axios
                    .get(this.$target1+"/search",{
                        params:{
                            keyword:this.search,
                        }
                    })
                    .then(
                        res=>{
                            this.product=res.data.data.products;
                            //关键词商品品牌聚合
                            this.productbrand=res.data.data.brand.value;
                            let num=this.productbrand.length;
                            this.productbrand.forEach((item)=>{
                                //解析之后push进去
                                this.productbrand.push(JSON.parse(item))
                            });
                            this.productbrand.splice(0,num);
                            //分页
                            this.total=res.data.data.total;
                            this.pageSize=res.data.data.pageSize;
                            this.currentPage=res.data.data.pageNum;
                        }
                    )
                    .catch(err=>{
                            console.log(err)
                        }
                    )

            },

            //根据选中的品牌向后台请求相应的商品
            getProductByBrandId:function(brandId){
                this.brandId=brandId;
                this.$axios
                    .get(this.$target1+"/search",{
                        params:{
                            keyword:this.search,
                            brand:this.brandId
                        }
                    })
                    .then(
                        res=>{
                            this.product=res.data.data.products;
                            //分页
                            this.total=res.data.data.total;
                            this.pageSize=res.data.data.pageSize;
                            this.currentPage=res.data.data.pageNum;
                        }
                    )
                    .catch(err=>{
                            console.log(err)
                        }
                    )

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

            mouseOver: function(){
                this.active = 'color:#f91424';
            },
            mouseLeave: function () {
                this.active = '';
            },

            // 页码变化调用currentChange方法
            currentChange(pageNum) {
                this.currentPage=pageNum;
                this.getData();
                //this.backtop();
            },

            // 页码变化向后端请求相应的分页商品
            getData(){
                this.$axios
                    .get(this.$target1+"/search",{
                        params:{
                            keyword:this.search,
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
            }


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
        margin-left: -13.7px;
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
