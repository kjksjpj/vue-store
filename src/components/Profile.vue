
<template>
  <div style="margin-left: 20px;">
    <div style="width:800px;">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <el-form :model="userlist" :rules="rules" ref="EditorUserForms">
            <el-form-item label="头像" prop="avatar_url" :label-width="formLabelWidth">
              <el-upload
                      class="avatar-uploader"
                      action="http://3v3g463245.qicp.vip/pms/store/uploadOssFile"
                      :show-file-list="false"
                      :on-success="handleAvatarSuccess"
              >
                <img v-if="userlist.header" :src="userlist.header" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
              <el-col :span="12"> <el-input v-model="userlist.username" disabled ></el-input></el-col>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname" :label-width="formLabelWidth">
              <el-col :span="12">  <el-input v-model="userlist.nickname" placeholder="请输入昵称"></el-input></el-col>
            </el-form-item>
            <el-form-item label="性别" prop="sex" :label-width="formLabelWidth">
              <el-col :span="8">
                <label for="male">
                <input type="radio" id="male" value="1" v-model="userlist.sex">男
              </label>
                <label for="female">
                  <input type="radio" id="female" value="2" v-model="userlist.sex">女
                </label>
              </el-col>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile" :label-width="formLabelWidth">
              <el-col :span="12">  <el-input v-model="userlist.mobile" placeholder="请输入手机号"></el-input></el-col>
            </el-form-item>
<!--            <el-form-item label="银行卡号" prop="account" :label-width="formLabelWidth">-->
<!--              <el-col :span="8"> <el-input v-model="userlist.account" placeholder="请输入银行卡号"></el-input></el-col>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="用户角色" prop="full_name" :label-width="formLabelWidth">-->
<!--              <el-col :span="8">-->
<!--                <el-input v-model="userlist.full_name" disabled ></el-input>-->
<!--              </el-col>-->
<!--            </el-form-item>-->
          </el-form>
          <div class="btnstyle">
            <el-button type="primary" @click="EditorUserClick">保存</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="修改密码" name="second">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="原密码" prop="pass" :label-width="formLabelWidth">
              <el-col :span="12">  <el-input v-model="ruleForm.pass" placeholder="请输入原密码" type="password" show-password></el-input></el-col>
            </el-form-item>
            <el-form-item label="新密码" prop="newpass" :label-width="formLabelWidth">
              <el-col :span="12"><el-input v-model="ruleForm.newpass" placeholder="请输入新密码" id="newkey" type="password" show-password></el-input></el-col>
            </el-form-item>
            <el-form-item label="重复新密码" prop="checknewpass" :label-width="formLabelWidth">
              <el-col :span="12">  <el-input v-model="ruleForm.checknewpass" placeholder="请再次输入新密码" id='newkey1' type="password" show-password></el-input></el-col>
            </el-form-item>
          </el-form>
          <div class="btnstyle">
            <el-button type="primary"  @click="submitForm('ruleForm')">保存</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  //这一步很重要，一般我们直接从后台拿过来输出来会是在data里面，但是我发现却在store里面，这里就要用到vuex
  import {mapActions, mapGetters} from "vuex";
  export default {
    data() {
      /*****检验两次密码是否一致***/
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入新密码"));
        } else if (this.ruleForm.checknewpass !== ""){
            this.$refs.ruleForm.validateField("checknewpass");
            return callback();
          }else{
          return callback();
          }
        };
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.newpass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {},//修改密码的表单
        activeName: "first",
        userlist: {
          header:'',
          username:'',
          nickname:'',
          sex:'',
          mobile:'',
        },//用户信息表单
        formLabelWidth: "280px",
        /***校验***/
        rules: {
          pass: [
            {
              required: true,
              trigger: "blur",
              message: "请输入密码"
            }
          ],
          newpass: [
            {
              required: true,
              validator: validatePass,
              trigger: "blur"
            }
          ],
          checknewpass: [
            {
              required: true,
              validator: validatePass2,
              trigger: "blur"
            }
          ],
          header:[
            {
              required: true,
              message:'请上传头像'
            }
          ],
          nickname:[
            {
              required: true,
              message:'请填写昵称'
            }
          ],
          sex:[
            {
              required: true,
              message:'请选择性别'
            }
          ],
          mobile:[
            {
              required: true,
              message:'请填写手机号'
            }
          ]
        }
      };
    },
    created() {
      this.getUser();
    },
    computed: {
      ...mapGetters(["username"])
    },
    methods: {
      ...mapActions(["setUser"]),
      //上传图片
      handleAvatarSuccess(response, file) {
        this.userlist.header=file.response.data;
        console.log(this.userlist.header);
      },
      // 获取个人用户的信息
      getUser() {
        this.$axios
            .get(this.$target1 + "/ums/member/getUserInfo", {
              withCredentials: true
            })
            .then(res => {
              // “0”代表发送成功，其他的均为失败
              if (res.data.code == 0) {
                this.userlist.header = res.data.data.header;
                this.userlist.username=res.data.data.username;
                this.userlist.nickname=res.data.data.nickname;
                this.userlist.sex=res.data.data.gender;
                this.userlist.mobile=res.data.data.mobile;
              }
            })
            .catch(err => {
              return Promise.reject(err);
            });
      },
      //tab切换
      handleClick(tab) {
        if(tab.name == 'first'){
          // 触发‘获取个人信息’事件
          this.getUser();
        }
      },
      //修改密码
      submitForm() {
        // 密码以字母开头,长度在6-18之间,允许字母数字和下划线
        const passwordRule = /^[a-zA-Z]\w{5,17}$/;
        if(!passwordRule.test(this.ruleForm.newpass)){
          alert("密码以字母开头,长度在6-18之间,允许字母数字和下划线");
        }else{
          this.$refs.ruleForm.validate(valid => {
            if(valid) {
              this.$axios
                  .get(this.$target1 + "/ums/member/updatePassword", {
                    params: {
                      password: this.ruleForm.pass,
                      newpassword: this.ruleForm.newpass,
                    }
                  })
                  .then(response => {
                    if (response.data.code == 0) {
                      this.$message({
                        message: "修改成功",
                        type: "success"
                      });
                      this.ruleForm.pass='';
                      this.ruleForm.newpass='';
                      this.ruleForm.checknewpass='';
                      // this.activeName='first';
                      // 清空本地登录信息
                      localStorage.setItem("user", "");
                      // 清空vuex登录信息
                      this.setUser("");
                      this.notifySucceed("修改密码成功，已退出登录，请重新登录");
                      this.$router.push({path:'/'});//跳到首页
                    }else if (response.data.code == 1) {
                      alert("原始密码填写错误，修改失败！")
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
            }else{
              alert("修改密码信息填写有误");
              return false;
            }
          })
        }
      },
      // 编辑提交的方法
      EditorUserClick() {
        //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
        const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
        if(!userTelephoneRule.test(this.userlist.mobile)){
          alert("请填写11位数正确的手机号码");
        }else if(this.userlist.header==''){
          alert("请上传头像");
        }else{
          this.$refs.EditorUserForms.validate(valid => {
            if (valid) {
              this.$axios({
                method:'post',
                url:this.$target1+"/ums/member/update",
                params:{
                  header:this.userlist.header,
                  nickname:this.userlist.nickname,
                  gender:this.userlist.sex,
                  mobile:this.userlist.mobile
                }
              })
                  .then(response => {
                    if (response.status == 200) {
                      this.$message({
                        message: "修改成功",
                        type: "success"
                      });
                    } else {
                      this.$message({
                        message: "修改失败" + response.message,
                        type: "error"
                      });
                    }
                  });
            }else{
              alert("信息填写有误");
              return false;
            }
          });
        }
      }
    }
  };
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .btnstyle{
    margin-left:380px;
    width:200px;
  }

</style>