<template>

  <div id="settle">
      <!--顶部-->
      <div class="top" style="margin-left: 5% ;">
          <span style="font-size:24px;">集厂聚品</span>
          <el-divider direction="vertical"></el-divider>
          <span style="font-size:20px;">商家入驻</span>
      </div>
      <!--顶部步骤条-->
     <div style="height: 60px;background-color: #f7f7f7;margin: 10px 40px 10px 40px;padding: 0px 20px 0px 20px">
         <el-steps :active="active" finish-status="success">
             <el-step title="提交入驻资料"></el-step>
             <el-step title="商家等待审核"></el-step>
<!--             <el-step title="查看审核情况"></el-step>-->
<!--             <el-step title="店铺上线"></el-step>-->
         </el-steps>
     </div>
      <!--中间部分-->
      <div class="container">
          <div style="height: 40px;background-color:#f7f7f7;margin: 0px 40px 0px 40px">
              <p style="line-height: 40px;padding-left: 20px">阶段一 :提交入驻资料</p>
          </div>
          <!--中间主体部分-->
          <div class="el-form" style="display: flex;justify-content: flex-start;">
          <!--主体基本信息部分-->
         <div v-if="baseShow" style="border:#f7f7f7;margin:10px auto;padding: 10px 10px;">
             <div style="margin-bottom: 20px">
                 <p style="color: #f93e7a">入驻基本资料信息</p>
             </div>
             <el-form ref="ruleForm" :model="ruleForm"   :rules="rules">
                 <el-form-item class="el-form-item" label="联系人姓名" prop="name" label-width="130px">
                     <el-input v-model="ruleForm.name"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item class="el-form-item" label="联系人手机" prop="phone" label-width="130px">
                     <el-input v-model="ruleForm.phone"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item  class="el-form-item" label="联系人电子邮箱" prop="email" label-width="130px">
                     <el-input v-model="ruleForm.email"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item class="el-form-item" label="公司名称" prop="companyName" label-width="130px">
                     <el-input v-model="ruleForm.companyName"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item class="el-form-item" label="经营范围" prop="scope" label-width="130px">
                     <el-input v-model="ruleForm.scope"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item class="el-form-item" label="公司所在地"  prop="located">
                     <div class="divwrap">
                         <v-distpicker :province="province" :city="city" :area="region" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
                     </div>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item  class="el-form-item" label="公司详细地址"  prop="address" label-width="130px">
                     <el-input type="textarea" v-model="ruleForm.address"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item  class="el-form-item" label="店铺名字"  prop="shopName" label-width="130px">
                     <el-input  v-model="ruleForm.shopName"></el-input>
                 </el-form-item>
                 <div style="height: 10px">
                 </div>
                 <el-form-item  class="el-form-item" label="店铺类型"  prop="shopType" label-width="130px">
                     <select v-model="ruleForm.shopType" style="width:80px;height:30px;">
                         <option value="旗舰店">旗舰店</option>
                         <option value="专卖店">专卖店</option>
                         <option value="专营店">专营店</option>
                     </select>
                 </el-form-item>
             </el-form>

             <div style="margin: 0 auto;text-align: center">
                 <el-button type="primary" style="margin-top: 12px;" @click="submitBase('ruleForm')">下一步</el-button>
             </div>
         </div>
              <!--主体基本信息部分END-->



              <!--主体公司信息部分开始-->
              <div  v-if="certShow" style="border:#f7f7f7 solid;margin:10px auto;padding: 10px 20px;">
                  <div style="margin-bottom: 20px">
                      <p style="color: #f93e7a;">入驻公司资质信息</p>
<!--                      <span>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;</span>-->
<!--                      <button  @click="back">回到基本资料信息界面</button>-->
                  </div>

                  <el-form ref="ruleForm1" :model="ruleForm1"   :rules="rules1" label-width="150px">
                      <el-form-item class="el-form-item" label="法人姓名" prop="lrName" >
                          <el-input v-model="ruleForm1.lrName"></el-input>
                      </el-form-item>
                      <el-form-item class="el-form-item" label="法人身份证号" prop="lrId" >
                          <el-input v-model="ruleForm1.lrId"></el-input>
                      </el-form-item>
                      <el-form-item  class="el-form-item" label="法人身份证电子照" >
                        <el-upload
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
                      </el-form-item>
<!--                      <div style="height: 10px">-->
<!--                      </div>-->
                      <el-form-item class="el-form-item" label="营业执照注册号"  prop="licenseId">
                          <el-input v-model="ruleForm1.licenseId"></el-input>
                      </el-form-item>
<!--                      <div style="height: 10px">-->
<!--                      </div>-->
                      <el-form-item class="el-form-item" label="营业执照电子照"  >
                        <el-upload
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
                        </el-upload>
                      </el-form-item>
<!--                      <div style="height: 10px">-->
<!--                      </div>-->
                      <el-form-item  class="el-form-item" label="银行开户许可电子照" >
                        <el-upload
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
                        </el-upload>
                      </el-form-item>
                  </el-form>
                  <div style="text-align: center">
                      <el-button type="primary" style="margin-top: 12px;margin-right:5px" @click="back1">上一步</el-button>
                      <el-button type="primary" style="margin-top: 12px;" @click="submitCert('ruleForm1')">下一步</el-button>
                  </div>

              </div>
            <div v-if="actShow" style="height:200px;border:#f7f7f7 solid;margin:10px auto;padding: 30px 20px;width: 500px;">
              <div style="margin-bottom: 20px">
                <span style="color: #f93e7a;">激活企业账号密码</span>
<!--                <span>-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&ndash;&gt;</span>-->
<!--               <button  @click="back1">回到公司资质信息界面</button>-->
              </div>
              <el-form ref="ruleForm2" :model="ruleForm2"   :rules="rules2" label-width="100px">
                <el-form-item class="el-form-item" label="账号" prop="account">
                  <el-input v-model="ruleForm2.account"></el-input>
                </el-form-item>
                <div style="height: 10px">
                </div>
                <el-form-item class="el-form-item" label="密码" prop="password">
                  <el-input v-model="ruleForm2.password" show-password></el-input>
                </el-form-item>
              </el-form>
              <div style="text-align: center">
                <el-button type="primary" style="margin-top: 12px;margin-right:5px;" @click="back2">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="submitAct('ruleForm2')">提交</el-button>
              </div>
            </div>



              <!--主体公司信息部分END-->



          </div>
          <!--中间主体部分END-->
      </div>
      <!--  中间部分end-->




  </div>
</template>

<script>
    import VDistpicker from 'v-distpicker'
    export default {
        name: "Settle.vue",
        components: { VDistpicker },
        data(){
            return{
                active: 1,
              //第一张表单
                ruleForm: {
                    name: '',
                    phone: '',
                    email: '',
                    companyName:'',
                    scope:'',
                    located:'',
                    address:'',
                    shopName:'',
                    shopType:'',
                },
              //第二张表单
                ruleForm1:{
                    lrName:'',
                    lrId:'',
                    imageUrl:[],
                    licenseId:'',
                    imageUrl1:[],
                    imageUrl2:[],
                },
              //文件参数
              fileList:[],
              fileList1:[],
              fileList2:[],
              limitNum:5,
              limitNum1:5,
              limitNum2:5,
              //第三张表单
              ruleForm2:{
                account:'',
                password:''
              },
              //地址插件参数
                province:'',
                city:'',
                region:'',
              //显示这三个表单
                baseShow:true,
                certShow:false,
                actShow:false,
              //第一个表单规则
                rules:{
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
                    address:[
                        { required: true, message: '请输入公司详细地址'},
                    ],
                    shopName:[
                        { required: true, message: '请输入期望店铺名称'},
                    ],
                    shopType:[
                        { required: true,message: '请选择期望店铺类型'},
                    ],
                },
              //第二个表单规则
                rules1:{
                    lrName:[
                        { required: true, message: '请输入法人姓名'},
                    ],
                    lrId:[
                        {required: true, message: '请输入法人身份证号'}
                    ],
                    licenseId:[
                        {required: true, message: '请输入营业执照注册号'}
                    ]
                },
              //第三个表单规则
              rules2:{
                account:[
                  { required: true, message: '请输入账号'},
                ],
                password:[
                  {required: true, message: '请输入密码'}
                ]
              }
            };
        },
      created(){
          this.baseShow=true;
          this.certShow=false;
          this.actShow=false;
      },
      activated(){
          //一进来这个页面会做的事情
        //地址插件置为空
        this.province='';
        this.city='';
        this.region='';
        //文件显示都置空
        this.fileList=[];
        this.fileList1=[];
        this.fileList2=[];
        //所有之前输入的值都置空
        for(let key in this.ruleForm){
          this.ruleForm[key] = '';
        }
        for(let key1 in this.ruleForm1){
          this.ruleForm1[key1] = '';
        }
        for(let key2 in this.ruleForm2){
          this.ruleForm2[key2] = '';
        }
        //出现第一个界面提示填写信息
        this.baseShow=true;
        this.certShow=false;
        this.actShow=false;
      //   console.log(this.ruleForm.name,
      //       this.ruleForm.phone,
      //       this.ruleForm.email,
      //       this.ruleForm.companyName,
      //       this.ruleForm.scope,
      //       this.ruleForm.located,
      //       this.ruleForm.address,
      //       this.ruleForm.shopName,
      //       this.ruleForm.shopType,
      //       this.ruleForm1.lrName,
      //       this.ruleForm1.lrId,
      //       this.ruleForm1.imageUrl,
      //       this.ruleForm1.licenseId,
      //       this.ruleForm1.imageUrl1,
      //       this.ruleForm1.imageUrl2,
      //       this.ruleForm2.account,
      //       this.ruleForm2.password)
      },
        methods: {
            //地址插件选择时的方法
            onChangeProvince: function (a) {
                this.province = a.value;
            },
            onChangeCity: function (a) {
                this.city = a.value;
            },
            onChangeArea: function (a) {
                this.region = a.value;
            },
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
            //这里不提交，只是保存当前第一个表单信息
            submitBase(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert("success")
                        //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
                        const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
                        // 邮箱规则：数字、字母、下划线 + @ + 数字、英文 + . +英文（长度是2-4）
                        const userEmailRule =/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
                        this.ruleForm.located=this.province+this.city+this.region;
                        if(!userTelephoneRule.test(this.ruleForm.phone)){
                            alert("请填写11位数正确的手机号码");
                        }else if(!userEmailRule.test(this.ruleForm.email)){
                            alert("请填写正确的邮箱号：数字/字母/下划线+@+数字/英文+.+英文（长度是2-4）");
                        }else if(this.province==''||this.city==''||this.region==''){
                            alert("请选择省市区");
                        }else{
                            // this.notifySucceed("保存成功！");
                            this.baseShow=false;
                            this.certShow=true;
                        }
                    } else {
                        alert("出错，请填写完整入驻基本资料信息")
                        return false;
                    }
                });
            },
            back1(){//回到第一个填写界面
                this.baseShow=true;
                this.certShow=false;
            },
            back2(){//回到第二个界面
                // this.baseShow=false;
                this.certShow=true;
                this.actShow=false;
            },
          //这里不提交，只是保存当前第二个表单信息
            submitCert(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
                        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                        if(!reg.test(this.ruleForm1.lrId)){
                            alert("请填写正确身份证号");
                        }else if(this.fileList==''){
                            alert("请上传法人身份证电子照");
                        }else if(this.fileList1==''){
                            alert("请上传营业执照电子照");
                        }else if(this.fileList2==''){
                            alert("请上传银行开户许可电子照");
                        }else{
                          // this.notifySucceed("保存成功！");
                          this.certShow=false;
                          this.actShow=true;
                        }
                    } else {
                        alert("出错，请填写完整入驻公司资质信息")
                        return false;
                    }
                });
            },
          //真正提交的是这里，三个表单信息一起提交
          submitAct(formName){
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
                this.$axios
                    .get(this.$target1+"/pms/store/queryAccount", {
                      params:{
                        account:this.ruleForm2.account
                      }
                    })
                    .then(
                        res=>{
                          //系统中不存在该账号，则可以提交所有数据
                          if (res.data.code == 0) {
                            this.$axios({
                              method:'post',
                              url:this.$target1+"/pms/store",
                              contentType:"application/json;charset=utf-8",//数据中有些不是json格式，这里必须统一设置json格式
                              data:{
                                contactName:this.ruleForm.name,
                                contactPhone:this.ruleForm.phone,
                                contactEmail:this.ruleForm.email,
                                companyName:this.ruleForm.companyName,
                                businesScope:this.ruleForm.scope,
                                companyLocated:this.ruleForm.located,
                                companyAdress:this.ruleForm.address,
                                storeName:this.ruleForm.shopName,
                                shopType:this.ruleForm.shopType,
                                legalPerson:this.ruleForm1.lrName,
                                personalNo:this.ruleForm1.lrId,
                                personImg:this.ruleForm1.imageUrl,
                                licenseId:this.ruleForm1.licenseId,
                                licenseImg:this.ruleForm1.imageUrl1,
                                bankImg:this.ruleForm1.imageUrl2,
                                loginAccount:this.ruleForm2.account,
                                loginPassword:this.ruleForm2.password
                              },dataType:"json",
                            })
                                .then(response => {
                                  if (response.status == 200) {
                                    this.$message({
                                      message: "提交成功",
                                      type: "success"
                                    });
                                    //清空之前的填写值
                                    for(let key in this.ruleForm){
                                      this.ruleForm[key] = '';
                                    }
                                    for(let key1 in this.ruleForm1){
                                      this.ruleForm1[key1] = '';
                                    }
                                    for(let key2 in this.ruleForm2){
                                      this.ruleForm2[key2] = '';
                                    }
                                    this.province='';//地址插件置为空
                                    this.city='';
                                    this.region='';
                                    this.$router.push({path:'/settle/settle2'});//跳转到给用户提示的审核页面
                                    this.baseShow=true;//复原显示页面
                                    this.certShow=false;
                                    this.actShow=false;
                                  } else {
                                    this.$message({
                                      message: "提交失败" + response.message,
                                      type: "error"
                                    });
                                  }
                                })
                                .catch(err => {
                                  return Promise.reject(err);
                                });
                          }else{
                            alert("账户已激活，不能重复激活，请重新填写");
                          }
                        }
                    )
                    .catch(err=>{
                      return Promise.reject(err);
                        }
                    )
              } else {
                alert("出错，请填写完整账号密码，以便于查询审核情况")
                return false;
              }
            });
          }
        }

        }
</script>

<style >
    .container .el-form-item .el-input{
        width: 300px;height: 30px;
    }
    .container .el-form-item textarea{
      width: 300px;height: 60px;
    }
    .el-form-item .divwrap{
        width:800px;
        height:40px;
    }
    /*.avatar-uploader .el-upload {*/
    /*    border: 1px dashed #d9d9d9;*/
    /*    border-radius: 6px;*/
    /*    cursor: pointer;*/
    /*    position: relative;*/
    /*    overflow: hidden;*/
    /*}*/
    /*.avatar-uploader .el-upload:hover {*/
    /*    border-color: #409EFF;*/
    /*}*/
    /*.avatar-uploader-icon {*/
    /*    font-size: 28px;*/
    /*    color: #8c939d;*/
    /*    width: 178px;*/
    /*    height: 178px;*/
    /*    line-height: 178px;*/
    /*    text-align: center;*/
    /*}*/
    /*.avatar {*/
    /*    width: 178px;*/
    /*    height: 178px;*/
    /*    display: block;*/
    /*}*/

</style>
