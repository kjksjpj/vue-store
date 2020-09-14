<template>
    <div id="settle3">

        <!--主要内容开始-->
        <div class="container">
            <!--顶部-->
            <div class="top" style="margin-left: 5% ;">
                <span style="font-size:24px;">集厂聚品</span>
                <el-divider direction="vertical"></el-divider>
                <span style="font-size:20px;">商家入驻</span>
            </div>
            <!--顶部步骤条-->
            <div style="height: 60px;background-color: #f7f7f7;margin: 10px 40px 30px 40px;padding: 0px 20px 0px 20px">
                <el-steps active="3" finish-status="success">
                    <el-step title="提交入驻资料"></el-step>
                    <el-step title="商家等待审核"></el-step>
                    <el-step title="完善店铺信息"></el-step>
                    <el-step title="店铺上线"></el-step>
                </el-steps>
            </div>
            <div style="margin: 30px 60px 30px 60px ">
                <div style="height: 40px;background-color:#f7f7f7;margin: 10px 40px 0px 40px">
                    <p style="line-height: 40px;padding-left: 20px">阶段三 :完善店铺信息</p>
                </div>
                <!--主体部分-->
                <div style="height: 400px;background-color:#ffffff;margin: 0px 40px 30px 40px;border: #f7f7f7 solid">
                    <div style="margin: 30px 10px 30px 40px">
                        <p style="margin: 10px 10px 10px 10px;font-size: 20px">
                            选择店铺类型
                        </p>
                        <el-radio-group v-model="radio1">
                            <el-radio :label="1" style="">旗舰店</el-radio>
                            <el-radio :label="2">专营店</el-radio>
                            <el-radio :label="3">备选项</el-radio>
                        </el-radio-group>
                    </div>
                    <div style="margin: 30px 10px 30px 40px">
                        <p style="margin: 10px 10px 10px 10px;font-size: 20px">
                            选择商品类型
                        </p>
                        <el-radio-group v-model="radio2">
                            <el-radio :label="4" style="">家具</el-radio>
                            <el-radio :label="5">美妆</el-radio>
                            <el-radio :label="6">运动装备</el-radio>
                        </el-radio-group>
                    </div>
                    <div style="margin: 30px 10px 30px 40px">
                        <p style="margin: 10px 10px 10px 10px;font-size: 20px">
                            选择商品类型
                        </p>
                        <el-radio-group v-model="radio2">
                            <el-radio :label="4" style="">家具</el-radio>
                            <el-radio :label="5">美妆</el-radio>
                            <el-radio :label="6">运动装备</el-radio>
                        </el-radio-group>
                    </div>
                </div>
            </div>
        </div>

        <div style="display: flex;justify-content: center">
            <!--上一步-->
            <div style="margin: 30px 10px 30px 40px;text-align: center">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
            </div>
            <!--上一步-->
            <!--下一步-->
            <div style="margin: 30px 10px 30px 40px;text-align: center">
                <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>
            </div>
            <!--下一步-->
        </div>
        <!--主要内容结束-->
    </div>

</template>

<script>
    export default {
        name: "Settle3",
        methods: {
         next() {
             this.$router.push({path:'/settle/settle4'})
         },
         last() {
             this.$router.push({path:'/settle/settle2'})
         }
     },
    }
</script>

<style scoped>

</style>
