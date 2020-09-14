<!--
 * @Description: 登录组件
 * @Author: hai-27
 * @Date: 2020-02-19 20:55:17
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-01 15:34:08
 -->
<template>
  <div id="myLogin">
    <el-dialog title="登录" width="300px" center :visible.sync="isLogin">
      <el-form :model="LoginUser" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-user-solid" placeholder="请输入账号" v-model="LoginUser.name"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
                  prefix-icon="el-icon-view"
                  type="password"
                  placeholder="请输入密码"
                  v-model="LoginUser.pass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="Login" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
<!--      <span>您还没有账户？=></span><el-button type="text" @click="isLogin = false,isRegister=true">注册</el-button>-->
    </el-dialog>
  </div>
</template>
<script>
  import {mapActions} from "vuex";

  export default {
    name: "MyLogin",
    data() {
      // 用户名的校验方法
      let validateName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error("请输入用户名"));
        }
        // 用户名以字母开头,长度在5-16之间,允许字母数字下划线
        const userNameRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        if (userNameRule.test(value)) {
          this.$refs.ruleForm.validateField("checkPass");
          return callback();
        } else {
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
      return {
        isRegister: false, // 控制注册组件是否显示
        LoginUser: {
          name: "",
          pass: ""
        },
        // 用户信息校验规则,validator(校验方法),trigger(触发方式),blur为在组件 Input 失去焦点时触发
        rules: {
          name: [{validator: validateName, trigger: "blur"}],
          pass: [{validator: validatePass, trigger: "blur"}]
        }
      };
    },
    computed: {
      // 获取vuex中的showLogin，控制登录组件是否显示
      isLogin: {
        get() {
          return this.$store.getters.getShowLogin;
        },
        set(val) {
          this.$refs["ruleForm"].resetFields();
          this.setShowLogin(val);
        }
      }
    },
    methods: {
      ...mapActions(["setUser", "setShowLogin"]),
      Login() {
        // 通过element自定义表单校验规则，校验用户输入的用户信息
        this.$refs["ruleForm"].validate(valid => {
              // 如果通过校验开始登录
              if (valid) {
                this.$axios({
                  method: 'post',
                  url: this.$target1 + "/auth/accredit/",
                  // responseType: 'json',
                  withCredentials: true,
                  params: {
                    username: this.LoginUser.name,
                    password: this.LoginUser.pass
                  }
                })
                    .then(res => {
                      // “0”代表登录成功，其他的均为失败
                      if (res.data.code == 0) {
                        this.$axios
                            .get(this.$target1 + "/ums/member/getUserInfo", {
                              withCredentials: true
                            })
                            .then(res1 => {
                              // “0”代表发送成功，其他的均为失败
                              if (res1.data.code == 0) {
                                // 登录信息存到本地
                                let user = JSON.stringify(res1.data.data);
                                localStorage.setItem("user", user);
                                // 登录信息存到vuex
                                this.setUser(res1.data.data);
                              }
                            })
                            .catch(err => {
                              return Promise.reject(err);
                            });
                        // 隐藏登录组件
                        this.isLogin = false;
                        // 弹出通知框提示登录成功信息
                        this.notifySucceed(res.data.msg);
                      }else {
                        // 清空输入框的校验状态
                        this.$refs["ruleForm"].resetFields();
                        // 弹出通知框提示登录失败信息
                        this.notifyError(res.data.msg);
                      }

                      // if (valid) {
                      //   this.isLogin = false;
                      //   let user = JSON.stringify({user_id: this.LoginUser.name, username: this.LoginUser.name})
                      //   localStorage.setItem("user", user);
                      //   this.setUser({user_id: this.LoginUser.name, username: this.LoginUser.name});
                      //   this.notifySucceed("成功")
                      // }
                    })
                    .catch(err => {
                  return Promise.reject(err);
                });
              }
            })
      },

      // Register() {
      //   this.isLogin = false;
      //   this.isRegister(true);
      // }
    }
  };
</script>
<style>
</style>
