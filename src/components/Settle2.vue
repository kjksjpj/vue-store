<template>
    <div id="settle1">

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
                <el-steps active="2" finish-status="success">
                    <el-step title="提交入驻资料"></el-step>
                    <el-step title="商家等待审核"></el-step>
                </el-steps>
            </div>
            <div style="border:#f7f7f7 solid;margin: 10px 40px 0px 40px;display: flex;justify-content: center;padding: 30px 0px 30px 0px">
                <img src="../assets/imgs/shenhe.png">
                <p>平台后台管理员正在审核中 ...</p>
            </div>
        </div>
        <div style="display: flex;justify-content: center">
            <!--上一步-->
<!--            <div style="margin: 30px 10px 30px 40px;text-align: center">-->
<!--                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>-->
<!--            </div>-->
            <!--上一步-->
            <!--下一步-->
<!--            <div style="margin: 30px 10px 30px 40px;text-align: center">-->
<!--                <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>-->
<!--            </div>-->
            <!--下一步-->
        </div>
        <!--主要内容结束-->
    </div>

</template>

<script>
    export default {
        name: "Settle1",
        methods: {
         // next() {
         //     this.$router.push({path:'/settle/settle3'})
         // },
         // last() {
         //     this.$router.push({path:'/settle'})
         // }
     },


    }
</script>

<style >

</style>
