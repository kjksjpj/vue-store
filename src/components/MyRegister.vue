<!--
 * @Description: 用户注册组件
 * @Author: hai-27
 * @Date: 2020-02-19 22:20:35
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-01 15:34:34
 -->
<template>
  <div id="register">
    <el-dialog title="注册" width="400px" center :visible.sync="isRegister">
      <el-form
        :model="RegisterUser"
        :rules="rules"
        status-icon
        ref="ruleForm"
        class="demo-ruleForm"
      >
<!--        <el-form-item prop="email">-->
<!--          <el-input-->
<!--                  prefix-icon="el-icon-message"-->
<!--                  placeholder="请输入邮箱"-->
<!--                  v-model="RegisterUser.email"-->
<!--          ></el-input>-->
<!--        </el-form-item>-->
        <el-form-item prop="name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            v-model="RegisterUser.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请输入密码"
            v-model="RegisterUser.pass"
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPass">
          <el-input
            prefix-icon="el-icon-view"
            type="password"
            placeholder="请再次输入密码"
            v-model="RegisterUser.confirmPass"
          ></el-input>
        </el-form-item>
        <el-form-item prop="telephone">
          <el-input
                  prefix-icon="el-icon-phone"
                  placeholder="请输入手机号"
                  v-model="RegisterUser.telephone"
                  style="width:220px;"
          ></el-input>&nbsp;&nbsp;&nbsp;

          <el-button v-show="show" @click="getCode">获取验证码</el-button>
          <el-button v-show="!show" class="count">{{count}} s</el-button>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
                  prefix-icon="el-icon-question"
                  placeholder="请输入验证码"
                  v-model="RegisterUser.code"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="Register" style="width:100%;">注册</el-button>
        </el-form-item>
      </el-form>
      <span>已经拥有账户？=></span><el-button type="text" @click="login">登录</el-button>
    </el-dialog>
  </div>
</template>
<script>
import {mapActions} from "vuex";

export default {
  name: "MyRegister",
  props: ["register"],
  data() {
    // 邮箱的校验方法
    // let validateEmail = (rule, value, callback) => {
    //       if (!value) {
    //         return callback(new Error("请输入邮箱"));
    //       }
      //邮箱规则：数字、字母、下划线 + @ + 数字、英文 + . +英文（长度是2-4）
      //     const userEmailRule =/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
      //     if (userEmailRule.test(value)) {
      //       this.$refs.ruleForm.validateField("checkPass");
      //       return callback();
      //     } else {
      //       return callback(
      //         new Error("邮箱输入错误")
      //     );}
      // };
    // 用户名的校验方法
    let validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"));
      }
      // 用户名以字母开头,长度在5-16之间,允许字母数字下划线
      const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (userNameRule.test(value)) {
        //判断数据库中是否已经存在该用户名
        // this.$axios
        //   .post("/api/users/findUserName", {
        //     userName: this.RegisterUser.name
        //   })
        //   .then(res => {
        //     // “001”代表用户名不存在，可以注册
        //     if (res.data.code == "001") {
              this.$refs.ruleForm.validateField("checkPass");
              return callback();
            }
      // else {
      //         return callback(new Error(res.data.msg));
      //       }
      //     })
          // .catch(err => {
          //   return Promise.reject(err);
          // });
      // }
      else {
        return callback(new Error("字母开头,长度5-16之间,允许字母数字下划线"));
      }
    };
    // 密码的校验方法
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      // 密码以字母开头,长度在6-18之间,允许字母数字和下划线
      const passwordRule = /^[a-zA-Z]\w{5,17}$/;
      if (passwordRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(
          new Error("字母开头,长度6-18之间,允许字母数字和下划线")
        );
      }
    };
    // 确认密码的校验方法
    let validateConfirmPass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入确认密码"));
      }
      // 校验是否以密码一致
      if (this.RegisterUser.pass != "" && value === this.RegisterUser.pass) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(new Error("两次输入的密码不一致"));
      }
    };
    // 手机号的校验方法
    let validateTelephone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      }
      //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
      const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
      if (userTelephoneRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(
            new Error("手机号输入错误")
        );}
    };
    // 验证码的校验方法
    let validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      }
      //验证码规则：6位数。
      const userCodeRule =/^\d{6}$/;
      if (userCodeRule.test(value)) {
        this.$refs.ruleForm.validateField("checkPass");
        return callback();
      } else {
        return callback(
            new Error("验证码输入错误")
        );}
    };
    return {
      isRegister: false, // 控制注册组件是否显示
      RegisterUser: {
        // email:"",
        name: "",
        pass: "",
        confirmPass: "",
        telephone:"",
        code:""
      },
      // 用户信息校验规则,validator(校验方法),trigger(触发方式),blur为在组件 Input 失去焦点时触发
      rules: {
        // email: [{ validator: validateEmail, trigger: "blur" }],
        name: [{ validator: validateName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        confirmPass: [{ validator: validateConfirmPass, trigger: "blur" }],
        telephone: [{ validator: validateTelephone, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }]
      },
      show: true,
      count: '',
      timer: null
    };
  },
  watch: {
    // 监听父组件传过来的register变量，设置this.isRegister的值
    register: function(val) {
      if (val) {
        this.isRegister = val;
      }
    },
    // 监听this.isRegister变量的值，更新父组件register变量的值
    isRegister: function(val) {
      if (!val) {
        this.$refs["ruleForm"].resetFields();
        this.$emit("fromChild", val);
      }
    }
  },
  methods: {
    ...mapActions([ "setShowLogin"]),
    login() {
      // 点击登录按钮, 通过更改vuex的showLogin值显示登录组件
      this.isRegister = false;
      this.setShowLogin(true);
    },
    Register() {
      // 通过element自定义表单校验规则，校验用户输入的用户信息
      this.$refs["ruleForm"].validate(valid => {
        //如果通过校验开始注册
        if (valid) {
          // this.$axios.post(this.$target1+"/ums/member/register", {
          //   username: this.RegisterUser.name,
          //   password: this.RegisterUser.pass,
          //   mobile: this.RegisterUser.telephone,
          //   code1: '123'
          // })
          this.$axios({
            method:'post',
            url:this.$target1+"/ums/member/register/",
            params:{
              username: this.RegisterUser.name,
              password: this.RegisterUser.pass,
              mobile: this.RegisterUser.telephone,
              code: this.RegisterUser.code
            }
          })
              .then(res => {
              // “0”代表注册成功，其他的均为失败
              if (res.data.code == 0) {
                // 隐藏注册组件
                this.isRegister = false;
                // 弹出通知框提示注册成功信息
                this.notifySucceed(res.data.msg);
              } else {
                // 弹出通知框提示注册失败信息
                this.notifyError(res.data.msg);
              }
            })
            .catch(err => {
              return Promise.reject(err);
            });
        } else {
          return false;
        }
      });
    },
    getCode(){
      const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/
      if(userTelephoneRule.test(this.RegisterUser.telephone)){
        this.$axios
            .get(this.$target1+"/ums/member/send/"+this.RegisterUser.telephone, {
            })
            .then(res => {
              // “0”代表发送成功，其他的均为失败
              if (res.data.code == 0) {
                if(this.$store.state.shareInfo.whoShare != undefined) {
                  this.joinDist(this.name, this.$store.state.shareInfo.whoShare);
                }
                  // 弹出通知框提示注册成功信息
                this.notifySucceed(res.data.msg);
              } else {
                // 弹出通知框提示注册失败信息
                this.notifyError(res.data.msg);
              }
            })
            .catch(err => {
              return Promise.reject(err);
            });
        //设置60秒倒计时计时器
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }else{
        alert("请输入正确的手机号！")
      }
    },
    //加入分销
    joinDist(username, upperId) {
      this.$axios({
        method: 'post',
        url: this.$target2 + "/api/v1/memberAdd",
        data: {
          disModelId: upperId,
          disNote: "nothing",
          disPlatformId: "",
          disUserName: username,
          disUserId: username,
          secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
        }
      })
          .then(res => {
            if (res.data.success === true) {
              // this.getDistributionUserInfo();
              console.log('加入分销成功')
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
    },
  }
};
</script>
<style>
</style>