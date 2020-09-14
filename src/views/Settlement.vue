<template>
    <div id="settlement">
        <!--顶部-->
        <div class="top" style="margin-left: 5% ;">
            <span style="font-size:24px;">集厂聚品</span>
            <el-divider direction="vertical"></el-divider>
            <span style="font-size:20px;">商家入驻</span>
            <!--如果未登录 会跳转到登录界面 已登陆 则跳转到入驻界面-->
            <router-link to="/settle">
                <button type="button" style="margin-left: 25%;background-color: #b31d28;border: none; color: white;padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    cursor: pointer;">
                    立即入驻
                </button>
            </router-link>
        </div>

        <!--中间轮播图-->
        <div class="block" style="margin: 30px 10px 10px 20px">
            <el-carousel  height="250px" :interval="3000" arrow="always" style="width:1225px">
                <el-carousel-item v-for="item in imgList" :key="item.name">
                    <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <!--下部入驻流程-->
        <div class="bottom" style="background-color: #f7f7f7">
             <div style="text-align: center;border-bottom: #9d9d9d;margin: 40px 0px 40px 0px;font-size: 30px;">
                 <p style="padding: 30px 0px 20px 0px">入驻流程</p>
             </div>


             <div class="sui-grid-row" style="display:flex; justify-content: space-around;height: 500px">
                <div class="section sui-grid-6" >
                    <div class="content">
                        <h3 class="section-title" style="color:#409EFF ;font-size: 20px;margin-bottom: 20px">阶段一</h3>
                        <div style="display: flex">
                            <div style="height: 50px;width: 50px">
                                <img src="../assets/imgs/set1.png">
                            </div>
                            <p style="color:#409EFF ;font-size: 25px;margin-bottom: 30px">提交入驻资料</p>
                        </div>
                        <ul>
                            <li>填写联系人及企业信息</li>
                            <li>店铺命名及选择类型</li>
                            <li>填写法人信息及上传资质信息</li>
                            <li>激活商家账号保存信息</li>
                        </ul>
                    </div>
                </div>
                <div class="section sui-grid-6">
                    <div class="content">
                        <h3 class="section-title" style="color:#d4237a ;font-size: 20px;margin-bottom: 20px">阶段二</h3>
                        <div style="display: flex">
                            <div style="height: 50px;width: 50px">
                                <img src="../assets/imgs/set2.png">
                            </div>
                            <p style="color:#d4237a ;font-size: 25px;margin-bottom: 30px">商家等待审核</p>
                        </div>
                        <ul>
                            <li>后台企业评估</li>
                            <li>后台资质审核</li>
                            <li>后台审查店铺</li>

                        </ul>
                    </div>
                </div>

                <div class="section sui-grid-6">
                    <div class="content">
                        <h3 class="section-title" style="color:#10b96e ;font-size: 20px;margin-bottom: 20px">阶段三</h3>
                        <div style="display: flex">
                            <div style="height: 50px;width: 50px">
                                <img src="../assets/imgs/set3.png">
                            </div>
                            <p style="color:#10b96e ;font-size: 25px;margin-bottom: 30px">完善店铺信息</p>
                        </div>
                        <ul>
                            <li>登陆查询审核结果</li>
                            <li>进入商家系统完成开店前相关任务</li>
                            <li>锁定保证金/缴纳年费</li>
                        </ul>
                    </div>
                </div>

                <div class="section sui-grid-6">
                    <div class="content">
                        <h3 class="section-title" style="color:#d81e06 ;font-size: 20px;margin-bottom: 20px">阶段四</h3>
                        <div style="display: flex">
                            <div style="height: 50px;width: 50px">
                                <img src="../assets/imgs/set4.png">
                            </div>
                            <p style="color:#d81e06 ;font-size: 25px;margin-bottom: 30px">店铺上线</p>
                        </div>
                        <ul>
                            <li>设置店铺商品信息</li>
                            <li>发布商品</li>
                            <li>管理销售情况</li>
                        </ul>
                    </div>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: "Settlement",
        data(){
            return{
                imgList: [
                    {
                        name: "lj",
                        src: require('../../static/carousel1.png'),
                        title: "这是lj.png"
                    },
                    {
                        name: "logo",
                        src: require('../../static/carousel2.png'),
                        title: "这是logo.png"
                    },
                    {
                        name: "bg",
                        src: require('../../static/carousel3.png'),
                        title: "这是bg.png"
                    },
                ]
            }
        }
    }
</script>

<style>
    .top span{
        color: #ff0036;
    }

    .bottom .sui-grid-6  ul li:before{
        display: inline-block;
        content: "●";
        padding-right: 10px;
        color: #666;
        font-size:6px;
    }


</style>