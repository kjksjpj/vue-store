/*
 * @Description: 全局变量
 * @Author: hai-27
 * @Date: 2020-02-23 13:40:18
 * @LastEditors: hai-27
 * @LastEditTime: 2020-03-05 01:41:50
 */
exports.install = function (Vue) {
  Vue.prototype.$target = "http://47.115.85.237:3000/"; // 线上后端地址
  Vue.prototype.$target1 = "http://3v3g463245.qicp.vip"; // wg后端接口地址
  Vue.prototype.$target2 = "http://127.0.0.1:81";
  // Vue.prototype.$target = "http://localhost:3000/"; // 本地后端地址
  // 封装提示成功的弹出框
  Vue.prototype.notifySucceed = function (msg) {
    this.$notify({
      title: "成功",
      message: msg,
      type: "success",
      offset: 100
    });
  };
  // 封装提示失败的弹出框
  Vue.prototype.notifyError = function (msg) {
    this.$notify.error({
      title: "错误",
      message: msg,
      offset: 100
    });
  };
  // 时间格式化
  Vue.prototype.dateFormat = function (date) {
    date = new Date(date);
    var YY = date.getFullYear() + '-';
    var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
    var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return YY + MM + DD +" "+hh + mm + ss;
  };
}