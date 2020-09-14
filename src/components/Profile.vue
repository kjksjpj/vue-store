
<template>
  <div class="all-container">
    <div class="all-container-padding bg" >
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <el-form :model="userlist" :rules="rules" ref="EditorUserForms">
            <el-form-item label="头像" prop="avatar_url" :label-width="formLabelWidth">
<!--              <el-upload class="avatar-uploader" action="//shujiaoke.oss-cn-hangzhou.aliyuncs.com" :before-upload="beforeupload" :data="uploadParm" :show-file-list="false" :on-success="handleUpSuccess">-->
<!--                <img v-if="userlist.avatar_url" :src="userlist.avatar_url" class="avatar">-->
<!--                <i v-else class="el-icon-plus avatar-uploader-icon " style="width:80px;height:80px;"></i>-->
<!--              </el-upload>-->
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
              <el-col :span="8"> <el-input v-model="userlist.username" disabled ></el-input></el-col>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname" :label-width="formLabelWidth">
              <el-col :span="8">  <el-input v-model="userlist.nickname" placeholder="请输入昵称"></el-input></el-col>
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
              <el-col :span="8">  <el-input v-model="userlist.mobile" placeholder="请输入手机号"></el-input></el-col>
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
              <el-col :span="8">  <el-input v-model="ruleForm.pass" placeholder="请输入原密码" type="password"></el-input></el-col>
            </el-form-item>
            <el-form-item label="新密码" prop="newpass" :label-width="formLabelWidth">
              <el-col :span="8"><el-input v-model="ruleForm.newpass" placeholder="请输入新密码" id="newkey" type="password"></el-input></el-col>
            </el-form-item>
            <el-form-item label="重复新密码" prop="checknewpass" :label-width="formLabelWidth">
              <el-col :span="8">  <el-input v-model="ruleForm.checknewpass" placeholder="请再次输入新密码" id='newkey1' type="password"></el-input></el-col>
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
  import { mapGetters } from "vuex";
  export default {
    data() {
      /*****检验两次密码是否一致***/
      let validatePass = (rule, value, callback) => {
        const passwordRule = /^[a-zA-Z]\w{5,17}$/;
        if (value === "") {
          callback(new Error("请输入新密码"));
        } else if (passwordRule.test(value)&&this.ruleForm.checknewpass !== ""){
            this.$refs.ruleForm.validateField("checknewpass");
            return callback();
          }else{
          return callback(
                  new Error("字母开头,长度6-18之间,允许字母数字和下划线")
              );
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
        formLabelWidth: "150px",
        // imageUrl: '',
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
              validator: validatePass,
              trigger: "blur"
            }
          ],
          checknewpass: [
            {
              validator: validatePass2,
              trigger: "blur"
            }
          ],
        }
      };
    },
    created() {
      this.getUser();
      // this.upload();
    },
    computed: {
      ...mapGetters(["username"])
    },
    methods: {
      save(){
        alert("已保存")
      },
      handleAvatarSuccess(response, file) {
        this.userlist.header=file.response.data;
        console.log(this.userlist.header);
      },
      // beforeAvatarUpload(file) {
      //   // const isJPG = file.type === 'image/jpeg';
      //   // const isLt2M = file.size / 1024 / 1024 < 2;
      //   //
      //   // if (!isJPG) {
      //   //   this.$message.error('上传头像图片只能是 JPG 格式!');
      //   // }
      //   // if (!isLt2M) {
      //   //   this.$message.error('上传头像图片大小不能超过 2MB!');
      //   // }
      //   // return isJPG && isLt2M;
      // },
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
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //上传参数图片初始化
      // upload() {
      //   const currentTimeStamp = new Date().getTime() / 1000;
      //   if (
      //       this.uploadParams == null ||
      //       this.uploadParams.expire + 3 < currentTimeStamp
      //   ) {
      //     this.$store
      //         .dispatch("GetUploadParams")
      //         .then(req => {
      //           this.uploadParm = req.data;
      //         })
      //         .catch(err => {
      //           this.$message({ message: err.message, type: "warning" });
      //         });
      //   } else {
      //     this.uploadParm = this.uploadParams;
      //   }
      // },
      // 上传之前
      // beforeupload() {
      //   this.uploadParm.key = this.uploadParm.dir
      //       + guid();
      //   console.log(this.uploadParm)
      // },
      //图片上传上传成功
      // handleUpSuccess(response, file) {
      //   var newfile = {
      //     name: file.name,
      //     type: file.raw.type,
      //     // size: bytesToSize(file.size),
      //     url: this.uploadParm.key
      //   };
      //   // postData("file", newfile)
      //   this.$axios({
      //     method:'post',
      //     url:"file",
      //     params:{
      //       newfile
      //     }
      //   })
      //       .then(response => {
      //     if (response.status == 200) {
      //       this.$message({ message: "修改成功", type: "success" });
      //       this.userlist.style_file_id = response.data.id;
      //       this.userlist.avatar_url = this.baseUrl + response.data.url;
      //     } else {
      //       this.$message({ message: "修改失败", type: "error" });
      //     }
      //   });
      //   console.log(this.userlist);
      // },
      //修改密码
      submitForm() {
        let obj = {
          username: this.username,
          password: this.pass,
          newpwd: this.newpass
        };
        // console.log(obj);
        // postData("接口", obj)
        this.$axios({
          method:'post',
          url:this.$target1+"/ums/member/update",
          params:{
            obj
          }
        })
            .then(response => {
          if (response.status == 200) {
            this.$message({
              message: "保存成功",
              type: "success"
            });
          } else {
            this.$message({
              message: "修改失败" + response.message,
              type: "error"
            });
          }
        });
      },
      // 编辑提交的方法
      EditorUserClick() {
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
                  message: "编辑成功",
                  type: "success"
                });
              } else {
                this.$message({
                  message: "修改失败" + response.message,
                  type: "error"
                });
              }
            });
          }
        });
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
    margin:0 auto;
    width:200px;
  }

</style>