<template>
    <div id="check">

        <!--主要内容开始-->
        <div class="container">
            <div  style="height:200px;border:#ebeef5 solid;margin:10px auto;padding: 30px 20px;width: 500px;">
                <div style="margin-bottom: 20px">
                    <p style="color: black;font-size: 20px">商家登录查看审核情况</p>
                </div>
                <div v-if="loginShow">
                <el-form ref="ruleForm" :model="ruleForm"   :rules="rules" label-width="150px">
                    <el-form-item class="el-form-item" label="账号" prop="account" >
                        <el-input v-model="ruleForm.account"></el-input>
                    </el-form-item>

                    <el-form-item class="el-form-item" label="密码" prop="password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                </el-form>
                <div style="text-align: center">
                    <el-button type="primary" style="margin-top: 12px;" @click="submitLogin('ruleForm')">登录查询</el-button>
                </div>
                </div>
                <div v-else>
                    <div class="pass" v-if="checkStatus=='审核通过'"><span>{{checkStatus}}</span></div>
                    <div class="check" v-else><span>{{checkStatus}}</span></div>
                    <div class="btn"><el-button type="primary"  @click="ReLogin">重新查询</el-button></div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Check",
        data(){
            return{
                ruleForm:{
                    account:'',
                    password:''
                },
                rules:{
                    account:[
                        { required: true, message: '请输入账号'},
                    ],
                    password:[
                        {required: true, message: '请输入密码'}
                    ]
                },
                loginShow:true,
                checkStatus:''
            }
        },
        created(){
           this.loginShow=true;
        },
        methods: {
            submitLogin(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios
                            .get(this.$target1+"/pms/store/queryStatus",{
                              params:{
                                  account:this.ruleForm.account,
                                  password:this.ruleForm.password
                              }
                        })
                                .then(response => {
                                    console.log(response.data.data);
                                    if (response.data.data == 0) {
                                          this.checkStatus='待审核';
                                          this.loginShow=false;
                                    } else if (response.data.data == 1){
                                        this.checkStatus='审核通过';
                                        this.loginShow=false;
                                    }else if(response.data.data == 2){
                                        this.checkStatus='被拒绝';
                                        this.loginShow=false;
                                    }else if(response.data.data==null){
                                        this.checkStatus='帐号不存在或帐号密码不正确!';
                                        this.loginShow=false;
                                    }
                                    this.ruleForm.account='';
                                    this.ruleForm.password='';
                                })
                                .catch(err => {
                                    return Promise.reject(err);
                                });
                    } else {
                        alert("出错，登陆时请填写完整账号密码")
                        return false;
                    }
                });
            },
            ReLogin(){
                this.loginShow=true;
            }
            // next() {
            //  this.$router.push({path:'/settle/settle4'})
            // },
            // last() {
            //  this.$router.push({path:'/settle/settle2'})
            // }
        }
    }
</script>

<style scoped>
    .container .el-form-item .el-input{
        width: 250px;height: 30px;
    }
    .container .check{
        color:red;
        font-size: 25px;
        font-weight:bold;
        margin:auto auto;
        text-align: center;
    }
    .container .pass{
        color:#00ff00;
        font-size: 25px;
        font-weight:bold;
        margin:auto auto;
        text-align: center;
    }
    .container .btn {
        width:98px;
        margin:60px auto;
        color:white;
    }


</style>
