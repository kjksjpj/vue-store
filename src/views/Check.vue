<template>
    <div id="check">

        <!--主要内容开始-->
        <div class="container" v-if="checkShow">
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
                    <div class="pass" v-if="checkStatus=='审核通过'">
                        <span>{{checkStatus}}</span>
                    </div>
                    <div class="check" v-else>
                        <span>{{checkStatus}}</span>
                    </div>
                    <div class="btn" v-if="checkStatus=='帐号不存在或帐号密码不正确!'">
                        <el-button type="primary"  @click="ReLogin">重新查询</el-button>
                    </div>
                    <div style="text-align: center;margin-top: 50px;" v-if="checkStatus=='审核通过'">
                        <el-button type="primary" style="margin-right:20px" @click="ReLogin">重新查询</el-button>
                        <el-button type="primary"  @click="show">查看信息</el-button>
                    </div>
                    <div style="text-align: center;margin-top: 50px;" v-if="checkStatus=='被拒绝'||checkStatus=='待审核'">
                        <el-button type="primary" style="margin-right:20px" @click="ReLogin">重新查询</el-button>
                        <el-button type="primary" style="margin-right:20px"  @click="show">查看信息</el-button>
                        <el-button type="primary"  @click="ReShow">修改信息</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showInfo" style="border:#f7f7f7;">

            <el-form label-width="200px" style="width:800px;margin:0 auto;border: 1px solid grey;">
                <el-form-item label="联系人姓名:" class="label"><span>{{this.info.name}}</span></el-form-item>
                <el-form-item label="联系人手机:" class="label"><span>{{this.info.phone}}</span></el-form-item>
                <el-form-item label="联系人电子邮箱:" class="label"><span>{{this.info.email}}</span></el-form-item>
                <el-form-item label="公司名称:" class="label"><span>{{this.info.companyName}}</span></el-form-item>
                <el-form-item label="经营范围:" class="label"><span>{{this.info.scope}}</span></el-form-item>
                <el-form-item label="公司所在地:" class="label"><span>{{this.info.located}}</span></el-form-item>
                <el-form-item label="公司详细地址:" class="label"><span>{{this.info.address}}</span></el-form-item>
                <el-form-item label="店铺名字:" class="label"><span>{{this.info.shopName}}</span></el-form-item>
                <el-form-item label="店铺类型:" class="label"><span>{{this.info.shopType}}</span></el-form-item>
                <el-form-item label="法人姓名:" class="label"><span>{{this.info.lrName}}</span></el-form-item>
                <el-form-item label="法人身份证号:" class="label"><span>{{this.info.lrId}}</span></el-form-item>
                <el-form-item label="法人身份证电子照:" class="label">
                    <div style="display: inline-block;" v-for="item in this.info.imageUrl" :key="item">
<!--                        <img :src="item"/>-->
                        <el-image
                                style="width: 100px; height: 100px;margin-right: 10px;"
                                :src="item"
                                >
                        </el-image>
                    </div>

                </el-form-item>
                <el-form-item label="营业执照注册号:" class="label"><span>{{this.info.licenseId}}</span></el-form-item>
                <el-form-item label="营业执照电子照:" class="label">
                    <div style="display: inline-block;" v-for="item1 in this.info.imageUrl1" :key="item1">
                        <el-image
                                style="width: 100px; height: 100px;margin-right: 10px;"
                                :src="item1"
                        >
                        </el-image>
                    </div>
                </el-form-item>
                <el-form-item label="银行开户许可电子照:" class="label">
                    <div style="display: inline-block;" v-for="item2 in this.info.imageUrl2" :key="item2">
                        <el-image
                                style="width: 100px; height: 100px;margin-right: 10px;"
                                :src="item2"
                        >
                        </el-image>
                    </div>
                </el-form-item>
                <el-form-item label="账号:" class="label"><span>{{this.info.account}}</span></el-form-item>
                <el-form-item label="密码:" class="label"><span>{{this.info.password}}</span></el-form-item>
            </el-form>
            <el-button type="primary" style="margin-left:50%;margin-top:10px;" @click="returnTo">返回</el-button>

        </div>
        <div v-if="upInfo" style="border:#f7f7f7;margin-left:400px;padding: 10px 10px;">
            <el-form ref="ruleForm1" :model="ruleForm1"   :rules="rules1">
                <el-form-item class="el-form-item" label="联系人姓名" prop="name" label-width="130px">
                    <el-col :span="8"> <el-input v-model="ruleForm1.name"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="联系人手机" prop="phone" label-width="130px">
                    <el-col :span="10"> <el-input v-model="ruleForm1.phone"></el-input></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="联系人电子邮箱" prop="email" label-width="130px">
                    <el-col :span="10"> <el-input v-model="ruleForm1.email"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="公司名称" prop="companyName" label-width="130px">
                    <el-col :span="10"><el-input v-model="ruleForm1.companyName"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="经营范围" prop="scope" label-width="130px">
                    <el-col :span="10"> <el-input v-model="ruleForm1.scope"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="公司所在地"  prop="located" label-width="130px">
                    <el-col :span="10"><el-input type="textarea" v-model="ruleForm1.located"></el-input></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="公司详细地址"  prop="address" label-width="130px">
                    <el-col :span="10"><el-input type="textarea" v-model="ruleForm1.address"></el-input></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="店铺名字"  prop="shopName" label-width="130px">
                    <el-col :span="8"><el-input  v-model="ruleForm1.shopName"></el-input></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="店铺类型"  prop="shopType" label-width="130px">
                    <el-col :span="8"><select v-model="ruleForm1.shopType" style="width:80px;height:30px;">
                        <option value="旗舰店">旗舰店</option>
                        <option value="专卖店">专卖店</option>
                        <option value="专营店">专营店</option>
                    </select></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="法人姓名" prop="lrName" label-width="130px">
                    <el-col :span="8"><el-input v-model="ruleForm1.lrName"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="法人身份证号" prop="lrId" label-width="130px">
                    <el-col :span="10"> <el-input v-model="ruleForm1.lrId"></el-input></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="法人身份证电子照" label-width="130px">
                    <el-col :span="10"> <el-upload
                            class="upload-demo"
                            action="http://3v3g463245.qicp.vip/pms/store/uploadOssFile"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                            :on-remove="handleRemove"
                            :file-list="fileList"
                            :limit="limitNum"
                            :on-exceed="exceedFile"
                            :on-error="handleError"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    </el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="营业执照注册号"  prop="licenseId" label-width="130px">
                    <el-col :span="10"><el-input v-model="ruleForm1.licenseId"></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="营业执照电子照"  label-width="130px">
                    <el-col :span="10"> <el-upload
                            class="upload-demo"
                            action="http://3v3g463245.qicp.vip/pms/store/uploadOssFile"
                            :on-success="handleAvatarSuccess1"
                            :before-upload="beforeAvatarUpload1"
                            :on-remove="handleRemove1"
                            :file-list="fileList1"
                            :limit="limitNum1"
                            :on-exceed="exceedFile1"
                            :on-error="handleError1"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload></el-col>
                </el-form-item>
                <el-form-item  class="el-form-item" label="银行开户许可电子照" label-width="138px">
                    <el-col :span="10"><el-upload
                            class="upload-demo"
                            action="http://3v3g463245.qicp.vip/pms/store/uploadOssFile"
                            :on-success="handleAvatarSuccess2"
                            :before-upload="beforeAvatarUpload2"
                            :on-remove="handleRemove2"
                            :file-list="fileList2"
                            :limit="limitNum2"
                            :on-exceed="exceedFile2"
                            :on-error="handleError2"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="账号" prop="account" label-width="130px">
                    <el-col :span="8"><el-input v-model="ruleForm1.account" disabled></el-input></el-col>
                </el-form-item>
                <el-form-item class="el-form-item" label="密码" prop="password" label-width="130px">
                    <el-col :span="8"><el-input v-model="ruleForm1.password"></el-input></el-col>
                </el-form-item>
            </el-form>
            <div>
                <el-button type="primary" style="margin-left:210px;" @click="updateInfo('ruleForm1')">修改</el-button>
                <el-button type="primary" style="margin-left:20px;" @click="giveUp">取消</el-button>
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
                ruleForm1: {
                    name: '',
                    phone: '',
                    email: '',
                    companyName:'',
                    scope:'',
                    located:'',
                    address:'',
                    shopName:'',
                    shopType:'',
                    lrName:'',
                    lrId:'',
                    imageUrl:[],
                    licenseId:'',
                    imageUrl1:[],
                    imageUrl2:[],
                    account:'',
                    password:''
                },
                info:{
                    name: '',
                    phone: '',
                    email: '',
                    companyName:'',
                    scope:'',
                    located:'',
                    address:'',
                    shopName:'',
                    shopType:'',
                    lrName:'',
                    lrId:'',
                    imageUrl:[],
                    licenseId:'',
                    imageUrl1:[],
                    imageUrl2:[],
                    account:'',
                    password:''
                },
                //文件参数
                fileList:[],
                fileList1:[],
                fileList2:[],
                limitNum:5,
                limitNum1:5,
                limitNum2:5,
                //查询审核状况的参数规则限制
                rules:{
                    account:[
                        { required: true, message: '请输入账号'},
                    ],
                    password:[
                        {required: true, message: '请输入密码'}
                    ]
                },
                //修改入驻信息的参数规则限制
                rules1:{
                    name: [
                        { required: true, message: '请输入联系人姓名'},
                    ],
                    phone:[
                        { required: true, message: '请输入联系人手机号码'},
                    ],
                    email:[
                        { required: true, message: '请输入联系人电子邮箱'},
                    ],
                    companyName:[
                        { required: true, message: '请输入公司名称'},
                    ],
                    scope:[
                        { required: true, message: '请输入公司经营范围'},
                    ],
                    located:[
                        { required: true, message: '请输入公司所在地'},
                    ],
                    address:[
                        { required: true, message: '请输入公司详细地址'},
                    ],
                    shopName:[
                        { required: true, message: '请输入期望店铺名称'},
                    ],
                    shopType:[
                        { required: true,message: '请选择期望店铺类型'},
                    ],
                    lrName:[
                        { required: true, message: '请输入法人姓名'},
                    ],
                    lrId:[
                        {required: true, message: '请输入法人身份证号'}
                    ],
                    licenseId:[
                        {required: true, message: '请输入营业执照注册号'}
                    ],
                    password:[
                        {required: true, message: '请输入密码'}
                    ]
                },
                checkShow:true,//查询状态不是拒绝的结构
                upInfo:false,//修改时回显商家入驻信息
                showInfo:false,//查看商家入驻信息
                loginShow:true,//输入账号密码的结构
                checkStatus:'',//审核状态
                upAccount:'',//用于修改商家入驻信息的账号密码接口存储值
                upPassword:'',
                id:''//修改的商家入驻信息id
            }
        },
        created(){
           this.checkShow=true;
           this.loginShow=true;
        },
        activated(){
            //一进来这个页面会做的事情
            //所有之前输入的值都置空
            for(let key in this.ruleForm){
                this.ruleForm[key] = '';
            }
            //出现第一个界面提示填写信息
            this.checkShow=true;
            this.loginShow=true;
            this.upInfo=false;
            this.showInfo=false;
              // console.log(
              //     this.ruleForm.account,
              //     this.ruleForm.password)
        },
        methods: {
            //登录查询审核结果
            submitLogin(formName){
                // console.log(formName);
                // this.checkStatus='被拒绝';
                // this.loginShow=false;
                this.upAccount=this.ruleForm.account;
                this.upPassword=this.ruleForm.password;
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
                                    if(response.data.data==null){
                                        this.checkStatus='帐号不存在或帐号密码不正确!';
                                        this.loginShow=false;
                                    }else if (response.data.data.merchantsAudit == 0) {
                                          this.checkStatus='待审核';
                                          this.loginShow=false;
                                    } else if (response.data.data.merchantsAudit == 1){
                                        this.checkStatus='审核通过';
                                        this.loginShow=false;
                                    }else if(response.data.data.merchantsAudit == 2){
                                        this.checkStatus='被拒绝';
                                        this.loginShow=false;
                                    }
                                    // this.ruleForm.account='';
                                    // this.ruleForm.password='';
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
            //重新查询
            ReLogin(){
                this.loginShow=true;
            },
            returnTo(){
                this.showInfo=false;
                this.checkShow=true;
                // this.loginShow=true;
                this.submitLogin('ruleForm');
            },
            //以下为修改入驻信息时的方法
            //第一个图片上传方法
            //上传之前设置的方法
            beforeAvatarUpload() {
                console.log("第一个上传之前");
                return true;
            },
            //删除时方法
            handleRemove(file) {
                for(let i=0;i<this.fileList.length;i++){
                    if(file.uid==this.fileList[i].uid){
                        this.fileList.splice(i,1);
                    }
                }
                console.log(this.fileList);
            },
            //上传成功时存数据方法
            handleAvatarSuccess(response) {
                    this.fileList.push({url:response.data});
                    console.log(this.fileList);
            },
            // 文件超出个数限制时的钩子
            exceedFile(){
                this.$message.error('只能上传'+this.limitNum+'个文件');
            },
            //上传失败
            handleError(){
                this.$message.error("上传文件失败")
            },
            //第二个图片上传方法
            beforeAvatarUpload1() {
                console.log("第二个上传之前");
                return true;
            },
            handleRemove1(file) {
                for(let i=0;i<this.fileList1.length;i++){
                    if(file.uid==this.fileList1[i].uid){
                        this.fileList1.splice(i,1);
                    }
                }
                console.log(this.fileList1);
            },
            handleAvatarSuccess1(response) {
                this.fileList1.push({url:response.data});
                console.log(this.fileList1);
            },
            exceedFile1(){
                this.$message.error('只能上传'+this.limitNum1+'个文件');
            },
            handleError1(){
                this.$message.error("上传文件失败")
            },
            //第三个图片上传方法
            beforeAvatarUpload2(){
                console.log("第三个上传之前");
                return true;
            },
            handleRemove2(file) {
                for(let i=0;i<this.fileList2.length;i++){
                    if(file.uid==this.fileList2[i].uid){
                        this.fileList2.splice(i,1);
                    }
                }
                console.log(this.fileList2);
            },
            handleAvatarSuccess2(response) {
                this.fileList2.push({url:response.data});
                console.log(this.fileList2);
            },
            exceedFile2(){
                this.$message.error('只能上传'+this.limitNum2+'个文件');
            },
            handleError2(){
                this.$message.error("上传文件失败")
            },
            //展示入驻信息
            show(){
                this.$axios
                        .get(this.$target1+"/pms/store/queryStatus",{
                            params:{
                                account:this.upAccount,
                                password:this.upPassword
                            }
                        })
                        .then(
                                res=>{
                                    this.info.name=res.data.data.contactName;
                                    this.info.phone=res.data.data.contactPhone;
                                    this.info.email=res.data.data.contactEmail;
                                    this.info.companyName=res.data.data.companyName;
                                    this.info.scope=res.data.data.businesScope;
                                    this.info.located=res.data.data.companyLocated;
                                    this.info.address=res.data.data.companyAdress;
                                    this.info.shopName=res.data.data.storeName;
                                    this.info.shopType=res.data.data.shopType;
                                    this.info.lrName=res.data.data.legalPerson;
                                    this.info.lrId=res.data.data.personalNo;
                                    this.info.licenseId=res.data.data.licenseId;
                                    this.info.account=res.data.data.loginAccount;
                                    this.info.password=res.data.data.loginPassword;
                                    //以下是遍历图片赋值
                                    let arr = (res.data.data.personImg).split(",");
                                    this.info.imageUrl=[];
                                    for(let i=0;i<arr.length;i++){
                                        this.info.imageUrl.push(arr[i]);
                                    }
                                    let arr1 = (res.data.data.licenseImg).split(",");
                                    this.info.imageUrl1=[];
                                    for(let j=0;j<arr1.length;j++){
                                        this.info.imageUrl1.push(arr1[j]);
                                    }
                                    let arr2 = (res.data.data.bankImg).split(",");
                                    this.info.imageUrl2=[];
                                    for(let k=0;k<arr2.length;k++){
                                        this.info.imageUrl2.push(arr2[k]);
                                    }
                                    this.checkShow=false;
                                    this.loginShow=false;
                                    this.upInfo=false;
                                    this.showInfo=true;
                                }
                        )
            },
            //入驻信息回显
            ReShow(){
                this.checkShow=false;
                this.upInfo=true;
                this.$axios
                        .get(this.$target1+"/pms/store/queryStatus",{
                            params:{
                                account:this.upAccount,
                                password:this.upPassword
                            }
                        })
                        .then(
                                res=>{
                                     this.id=res.data.data.id;
                                     this.ruleForm1.name=res.data.data.contactName;
                                     this.ruleForm1.phone=res.data.data.contactPhone;
                                     this.ruleForm1.email=res.data.data.contactEmail;
                                     this.ruleForm1.companyName=res.data.data.companyName;
                                     this.ruleForm1.scope=res.data.data.businesScope;
                                     this.ruleForm1.located=res.data.data.companyLocated;
                                     this.ruleForm1.address=res.data.data.companyAdress;
                                     this.ruleForm1.shopName=res.data.data.storeName;
                                     this.ruleForm1.shopType=res.data.data.shopType;
                                     this.ruleForm1.lrName=res.data.data.legalPerson;
                                     this.ruleForm1.lrId=res.data.data.personalNo;
                                     //以下是遍历图片回显
                                     // this.fileList=res.data.data.personImg;
                                    let arr = (res.data.data.personImg).split(",");
                                    // console.log(arr.length);
                                    this.fileList=[];
                                    for(let i=0;i<arr.length;i++){
                                        this.fileList.push({url:arr[i]})
                                    }
                                    console.log(this.fileList);
                                     this.ruleForm1.licenseId=res.data.data.licenseId;
                                     // this.fileList1=res.data.data.licenseImg;
                                    let arr1 = (res.data.data.licenseImg).split(",");
                                    this.fileList1=[];
                                    for(let j=0;j<arr1.length;j++){
                                        this.fileList1.push({url:arr1[j]})
                                    }
                                    console.log(this.fileList1);
                                     // this.fileList2=res.data.data.bankImg;
                                    let arr2 = (res.data.data.bankImg).split(",");
                                    this.fileList2=[];
                                    for(let k=0;k<arr2.length;k++){
                                        this.fileList2.push({url:arr2[k]})
                                    }
                                    console.log(this.fileList2);
                                     this.ruleForm1.account=res.data.data.loginAccount;
                                     this.ruleForm1.password=res.data.data.loginPassword;
                                }
                        )
            },
            //放弃修改
            giveUp(){
                this.upInfo=false;
                this.checkShow=true;
                // this.loginShow=true;
                this.submitLogin('ruleForm');
            },
            //提交修改信息
            updateInfo(formName) {
                //图片赋值
                this.ruleForm1.imageUrl=[];
                for(let i=0;i<this.fileList.length;i++){
                    this.ruleForm1.imageUrl.push(this.fileList[i].url);
                }
                console.log(this.ruleForm1.imageUrl);
                this.ruleForm1.imageUrl1=[];
                for(let j=0;j<this.fileList1.length;j++){
                    this.ruleForm1.imageUrl1.push(this.fileList1[j].url);
                }
                console.log(this.ruleForm1.imageUrl1);
                this.ruleForm1.imageUrl2=[];
                for(let k=0;k<this.fileList2.length;k++){
                    this.ruleForm1.imageUrl2.push(this.fileList2[k].url);
                }
                console.log(this.ruleForm1.imageUrl2);
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
                        const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
                        // 邮箱规则：数字、字母、下划线 + @ + 数字、英文 + . +英文（长度是2-4）
                        const userEmailRule =/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
                        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
                        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                        if(!userTelephoneRule.test(this.ruleForm1.phone)){
                            alert("请填写11位数手机号码");
                        }else if(!userEmailRule.test(this.ruleForm1.email)){
                            alert("请填写正确的邮箱号：数字/字母/下划线+@+数字/英文+.+英文（长度是2-4）");
                        }else if(!reg.test(this.ruleForm1.lrId)){
                            alert("请填写正确身份证号");
                        }else if(this.ruleForm1.imageUrl==''){
                            alert("请上传法人身份证电子照");
                        }else if(this.ruleForm1.imageUrl1==''){
                            alert("请上传营业执照电子照");
                        }else if(this.ruleForm1.imageUrl2==''){
                            alert("请上传银行开户许可电子照");
                        }else{
                            this.$axios({
                                method:'post',
                                url:this.$target1+"/pms/store/updateStoreInfo",
                                contentType:"application/json;charset=utf-8",//数据中有些不是json格式，这里必须统一设置json格式
                                data:{
                                    id:this.id,
                                    loginAccount:this.ruleForm1.account,
                                    contactName:this.ruleForm1.name,
                                    contactPhone:this.ruleForm1.phone,
                                    contactEmail:this.ruleForm1.email,
                                    companyName:this.ruleForm1.companyName,
                                    businesScope:this.ruleForm1.scope,
                                    companyLocated:this.ruleForm1.located,
                                    companyAdress:this.ruleForm1.address,
                                    storeName:this.ruleForm1.shopName,
                                    shopType:this.ruleForm1.shopType,
                                    legalPerson:this.ruleForm1.lrName,
                                    personalNo:this.ruleForm1.lrId,
                                    personImg:this.ruleForm1.imageUrl,
                                    licenseId:this.ruleForm1.licenseId,
                                    licenseImg:this.ruleForm1.imageUrl1,
                                    bankImg:this.ruleForm1.imageUrl2,
                                    loginPassword:this.ruleForm1.password
                                },dataType:"json",
                            })
                                    .then(response => {
                                        if (response.status == 200) {
                                            this.$message({
                                                message: "修改成功",
                                                type: "success"
                                            });
                                            //回到原来查看审核状态界面
                                            this.upInfo=false;
                                            // this.checkShow=true;
                                            // this.loginShow=true;
                                            // this.showInfo=false;
                                            this.checkShow=true;
                                            // this.loginShow=true;
                                            //如果做了修改密码的操作,回到第一个登录界面
                                            if(this.ruleForm1.password!=this.upPassword){
                                                this.loginShow=true;
                                                this.ruleForm.account='';
                                                this.ruleForm.password='';
                                            }else{
                                                this.submitLogin('ruleForm');
                                            }

                                        } else {
                                            this.$message({
                                                message: "修改失败" + response.message,
                                                type: "error"
                                            });
                                        }
                                    })
                                    .catch(err => {
                                        return Promise.reject(err);
                                    });
                        }
                    } else {
                        alert("出错，修改时请填写完整入驻资料信息")
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
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
    .container .btn{
        width:98px;
        margin-top:60px;
        margin-left: 200px;
        color:white;
        display: inline-block;
    }
    .container .reject{
        margin-left:400px;
        margin-top:10px;
    }
    .container .reject .el-button{
        background-color: #ff714f;
        color:white;
    }
    .el-form-item .divwrap{
        width:800px;
        height:40px;
    }
    .label .el-form-item__label{
        color: grey;
        font-size: 20px;
    }
    .label span{
        color:black;
        font-size:20px;
    }



</style>
