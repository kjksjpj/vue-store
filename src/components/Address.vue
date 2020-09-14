<template>
  <div>
    <div>
      <div><h2>收货地址</h2></div>
    </div>
    <el-tabs v-model="activeName">
    <el-tab-pane label="查看收货地址" name="one">
  <div class="the-address" v-if="this.addressList.length>0">
    <div class="adr-tent" id="vue-address">
      <div v-if="isShow" class="show">
        <h3>修改收货地址信息</h3>
        <br>
        <el-form>
          <el-form-item label="收货人姓名:" label-width="150px">
            <el-col :span="10">
            <el-input
                    type="text"
                    autosize
                    placeholder="请输入收货人姓名"
                    v-model="upaddress.upname">
            </el-input>
            </el-col>
          </el-form-item>
            <div style="margin: 5px 0;"></div>
            <el-form-item label="收货人手机号:" label-width="150px">
              <el-col :span="15">
              <el-input
                  type="text"
                  placeholder="请输入收货人手机号"
                  v-model="upaddress.upphone">
              </el-input>
              </el-col>
            </el-form-item>
          <div style="margin: 5px 0;"></div>
          <el-form-item label="收货人所在地区:" label-width="150px">
            <el-col :span="20">
<!--            <el-input-->
<!--                    type="text"-->
<!--                    placeholder="请输入收货人所在地区"-->
<!--                    v-model="upaddress.upregion">-->
<!--            </el-input>--><v-distpicker :province="select.province" :city="select.city" :area="select.area" @province="changeProvince" @city="changeCity"
                                            @area="changeArea"></v-distpicker>
            </el-col>
          </el-form-item>
          <div style="margin: 5px 0;"></div>
          <el-form-item label="收货人详细地址:" label-width="150px">
            <el-col :span="20">
            <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入收货人详细地址"
                    v-model="upaddress.updetail">
            </el-input>
            </el-col>
          </el-form-item>
          <div style="margin: 5px 0;"></div>
<!--          <el-form-item label="是否设置默认地址:" label-width="150px">-->
<!--            <el-col :span="8">-->
<!--                <label for="y">-->
<!--                  <input type="radio" id="y" value="1" v-model="upaddress.updefault">是-->
<!--                </label>-->
<!--                <label for="n">-->
<!--                  <input type="radio" id="n" value="2" v-model="upaddress.updefault">否-->
<!--                </label>-->
<!--            </el-col>-->
<!--          </el-form-item>-->
<!--          <div style="margin: 5px 0;"></div>-->
          <div class="btn">
            <button  @click="updateSave">保存</button>
            <button  @click="giveUp">取消</button>
          </div>
        </el-form>
      </div>
      <table class="adr-table">
        <thead class="table-thead">
        <tr>
          <th rowspan="5" class="thh">
            <span class="tn">收货人</span>
          </th>
          <th rowspan="5" class="thh">
            <span class="tn">所在地区</span>
          </th>
          <th rowspan="5" class="thh">
            <span class="tn">详细地址</span>
          </th>
<!--          <th rowspan="1" class="thh">-->
<!--            <span class="tn">邮编</span>-->
<!--          </th>-->
          <th rowspan="1" class="thh">
            <span class="tn">电话/手机</span>
          </th>
          <th rowspan="1" class="thh">
            <span class="tn">操作</span>
          </th>
          <th rowspan="1" class="thh">
            <span class="tn">设置</span>
          </th>
        </tr>
        </thead>
        <tbody class="table-tbody">
        <tr class="item" v-for="(v) in addressList" :key="v">
          <td class="tdd">
                        <span class="ti">
                            <span class="tt">{{v.name}}</span>
                        </span>
          </td>
          <td class="tdd">
                        <span class="ti">
                            <span class="tt">{{v.province+v.city+v.region}}</span>
                        </span>
          </td>
          <td class="tdd">
                        <span class="ti">
                            <span class="tt">{{v.detailAddress}}</span>
                        </span>
          </td>
<!--          <td class="tdd">-->
<!--                        <span class="ti">-->
<!--                            <span class="tt">{{v.zipCode}}</span>-->
<!--                        </span>-->
<!--          </td>-->
          <td class="tdd">
                        <span class="ti">
                            <span class="tt">{{v.phone}}</span>
                        </span>
          </td>
          <td class="tdd">
                        <span class="ti">
                             <div class="handle">
                                <span  class="a-chg" @click="showAddress(v.id)">修改</span>
                                <i class="line">|</i>
<!--                                <span class="i-del" @click="removeClick(v.id)">删除</span>-->
                                <el-popover >
                                 <p>确定删除吗？</p>
                                 <div style="text-align: right; margin: 10px 0 0">
                                 <el-button
                                   type="primary"
                                   size="mini"
                                   @click="remove(v.id)"
                                  >确定</el-button>
                             </div>
                            <el-button slot="reference">删除</el-button>
                               </el-popover>
                            </div>
                        </span>
          </td>
          <td class="tdd">
                        <span class="ti">
                             <span class="set-def cur" v-if="v.defaultStatus==1" @click="cancelDefault(v.id)">默认地址,点击则取消</span>
                             <span class="set-def" v-else @click="setDefault(v.id)">设为默认</span>
                        </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
<!--      当地址栏无信息时显示-->
      <div v-else class="the-address-empty">
        <div>
          <h2>您还未添加地址，快去添加地址吧！</h2>
        </div>
      </div>
    </el-tab-pane>
      <el-tab-pane label="添加收货地址" name="two">
        <div>
          <div class="address_content">
          <form>
            <ul>
            <li>
              <label>收货人姓名:</label>
            <input type="text" v-model="increAddress.addname" placeholder="请输入收货人姓名">
            </li>
            <li>
              <label>收货人电话:</label>
              <input type="text" v-model="increAddress.addphone" placeholder="请输入收货人电话">
            </li>
              <span style="font-size: 20px;">收货地址：</span>
            <li>
<!--              <label>收货地址:</label>-->
<!--              <input type="text" v-model="increaddress.addregion" placeholder="请输入收货人地址">-->
<!--              <Select></Select>-->
              <div class="dist">
                <v-distpicker @province="onChangeProvince" @city="onChangeCity"
                              @area="onChangeArea"></v-distpicker>
              </div>
            </li>
            <li>
              <label>详细地址:</label>
              <input type="textarea" v-model="increAddress.adddetail" placeholder="请输入收货人详细地址">
            </li>
<!--              <li>-->
<!--                <label>默认地址:</label>-->
<!--                <label for="yes">-->
<!--                  <input type="radio" id="yes" value="1" v-model="increAddress.adddefault">是-->
<!--                </label>-->
<!--                <label for="no">-->
<!--                  <input type="radio" id="no" value="0" v-model="increAddress.adddefault">否-->
<!--                </label>-->
<!--              </li>-->
            </ul>
          </form>
              <button  @click="onSubmit">保存</button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name: "Address",
    components: { VDistpicker },
    data(){
      return{

        //展示地址列表默认设置
        addressList: [],
        //增加地址默认设置
        increAddress:{
          addname:'',
          addphone:'',
          addprovince:'',
          addcity:'',
          addregion:'',
          adddetail:'',
       },
        select: { province: '', city: '', area: '' },
        id:'',
        //修改地址默认设置
        upaddress:{
          upname:'',
          upphone:'',
          updetail:'',
        },
        isShow:false,
        LabelWidth: "100px",
        activeName: "one"
      }
    },
    created(){
      this.getAddressJson();
    },
    methods:{

      //保存新增的地址
      onSubmit() {
        //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
        const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
        if(this.increAddress.addname=='') {
          alert("请填写收货人姓名");
        }else if(!userTelephoneRule.test(this.increAddress.addphone)){
          alert("请填写11位数有效的手机号码");
        }else if(this.increAddress.addphone==''){
          alert("请填写收货人手机号");
        }else if(this.increAddress.addprovince==''||this.increAddress.addcity==''||this.increAddress.addregion==''){
          alert("请选择收货地址");
        }else if(this.increAddress.adddetail==''){
          alert("请填写详细地址");
        }else{
          this.$axios({
            method:'post',
            url:this.$target1+"/ums/memberreceiveaddress/save",
            contentType:"application/json;charset=utf-8",
            data:{
              name:this.increAddress.addname,
              phone:this.increAddress.addphone,
              province:this.increAddress.addprovince,
              city:this.increAddress.addcity,
              region:this.increAddress.addregion,
              detailAddress:this.increAddress.adddetail,
            },dataType:"json",
          })
              .then(response => {
                if (response.status == 200) {
                  this.$message({
                    message: "添加成功",
                    type: "success"
                  });
                  this.increAddress.addname='';//填写完清空当前值
                  this.increAddress.addphone='';
                  this.increAddress.addprovince='';
                  this.increAddress.addcity='';
                  this.increAddress.addregion='';
                  this.increAddress.adddetail='';
                  this.getAddressJson();
                } else {
                  this.$message({
                    message: "添加失败" + response.message,
                    type: "error"
                  });
                }
              });
        }
      },
      //获取地址列表数据
      getAddressJson(){
        this.$axios
            .get(this.$target1+"/ums/memberreceiveaddress",{
              params:{

              }
            })
            .then(response =>{
              this.addressList = response.data.data;
              this.isShow=false;
            })
            .catch(err => {
              return Promise.reject(err);
            })
      },
      //删除某一行地址
      remove(id){
        this.$axios({
          method:'post',
          url:this.$target1+"/ums/memberreceiveaddress/delete/",
          contentType:"application/json;charset=utf-8",
          data://注意这里面放json数组
            [id]
          ,dataType:"json",
        })
            .then(response => {
              if (response.status == 200) {
                this.$message({
                  message: "已删除",
                  type: "success"
                });
                this.getAddressJson();
              } else {
                this.$message({
                  message: "删除失败" + response.message,
                  type: "error"
                });
              }
            });
      },
      //点击修改按钮，出现的该地址修改栏
      showAddress(index){
        this.$axios
            .get(this.$target1+"/ums/memberreceiveaddress/info/"+index,{
              params:{
              }
            })
            .then(
                res=>{
                   this.upaddress.upname=res.data.data.name;
                   this.upaddress.upphone=res.data.data.phone;
                   this.select.province=res.data.data.province;
                   this.select.city=res.data.data.city;
                   this.select.area=res.data.data.region;
                   this.upaddress.updetail=res.data.data.detailAddress;
                   this.id=index;
                   this.isShow=true;
                }
            )
      },
      //前三个方法是修改地址里的地址插件方法，后三个方法是增加地址里的地址插件方法
      changeProvince(e){
        this.select.province=e.value;
      },
      changeCity(e){
        this.select.city=e.value;
      },
      changeArea(e){
        this.select.area=e.value;
      },
      onChangeProvince: function (a) {
        this.increAddress.addprovince = a.value;
      },
      onChangeCity: function (a) {
        this.increAddress.addcity = a.value;
      },
      onChangeArea: function (a) {
        this.increAddress.addregion = a.value;
      },
      //提交修改的地址
      updateSave(){
        //手机号规则：表示以1开头，第二位可能是3/4/5/7/8/9等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
        const userTelephoneRule =/^1[3|4|5|7|8|9]\d{9}$/;
        if(this.upaddress.upname=='') {
          alert("收货人姓名不为空");
        }else if(!userTelephoneRule.test(this.upaddress.upphone)) {
          alert("请填写11位数有效的手机号码");
        }else if(this.upaddress.upphone==''){
          alert("收货人手机号不为空");
        }else if(this.select.province=='省'||this.select.city=='市'||this.select.area=='区'){
          alert("请选择收货地址");
        }else if(this.upaddress.updetail==''){
          alert("详细地址不为空");
        }else{
          this.$axios({
            method:'post',
            url:this.$target1+"/ums/memberreceiveaddress/update/",
            contentType:"application/json;charset=utf-8",
            data:{
              id:this.id,
              name:this.upaddress.upname,
              phone:this.upaddress.upphone,
              province:this.select.province,
              city:this.select.city,
              region:this.select.area,
              detailAddress:this.upaddress.updetail,
            },dataType:"json",
          })
              .then(response => {
                if (response.status == 200) {
                  this.$message({
                    message: "修改成功",
                    type: "success"
                  });
                  this.getAddressJson();
                } else {
                  this.$message({
                    message: "修改失败" + response.message,
                    type: "error"
                  });
                }
              });
        }
      },
      //取消修改函数
      giveUp(){
        this.isShow=false;
      },

      //设置默认地址
      setDefault(id){
        const addressList = this.addressList;
        let num=0;//计算是否有默认地址
        addressList.forEach(item => {
          if(item.defaultStatus==1){
            num++;
          }
        });
        //默认地址未设置，则可以点击设置默认地址
        if(num==0){
          this.$axios({
            method:'post',
            url:this.$target1+"/ums/memberreceiveaddress/update/",
            contentType:"application/json;charset=utf-8",
            data:{
              id:id,
              defaultStatus:1,//1默认，其他非默认
            },dataType:"json",
          })
              .then(response => {
                if (response.status == 200) {
                  this.$message({
                    message: "设置成功",
                    type: "success"
                  });
                  this.getAddressJson();
                } else {
                  this.$message({
                    message: "设置失败" + response.message,
                    type: "error"
                  });
                }
              });
        }else{
          alert("已设置默认地址，该地址唯一")
        }

      },
      //取消默认地址设置
      cancelDefault(id){
          this.$axios({
            method:'post',
            url:this.$target1+"/ums/memberreceiveaddress/update/",
            contentType:"application/json;charset=utf-8",
            data:{
              id:id,
              defaultStatus:0,
            },dataType:"json",
          })
              .then(response => {
                if (response.status == 200) {
                  this.$message({
                    message: "取消默认地址成功",
                    type: "success"
                  });
                  this.getAddressJson();
                } else {
                  this.$message({
                    message: "取消默认地址失败" + response.message,
                    type: "error"
                  });
                }
              });
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
  }
  h3{
    text-align:center;
  }
  .btn{
    margin:0px 300px 10px;
    height:20px;
    width:100px;
    background-color: white;
    color:white;
  }
  .btn button{
    margin:0 10px;
    height:20px;
    font-size: 13px;
    background-color: red;
    color:white;
  }
  .address_content button{
    width:80px;
    height:50px;
    color:white;
    background-color:red;
    display:block;
    margin:30px auto;
  }
  /*.span1[data-v-43c5b3f4], .span2[data-v-43c5b3f4], .span3[data-v-43c5b3f4], .span4[data-v-43c5b3f4], .span5[data-v-43c5b3f4], .span6[data-v-43c5b3f4], .span7[data-v-43c5b3f4], .span8[data-v-43c5b3f4], .span9[data-v-43c5b3f4], .span10[data-v-43c5b3f4], .span11[data-v-43c5b3f4], .span12[data-v-43c5b3f4], .span13[data-v-43c5b3f4], .span14[data-v-43c5b3f4], .span15[data-v-43c5b3f4], .span16[data-v-43c5b3f4], .span17[data-v-43c5b3f4], .span18[data-v-43c5b3f4], .span19[data-v-43c5b3f4], .span20[data-v-43c5b3f4] {*/
  /*  float: left;*/
  /*  margin-left: 14px;*/
  /*  min-height: 1px;*/
  /*}*/
  .span16[data-v-43c5b3f4] {
    width: 978px;
  }
  .address_content{
    padding-left: 10px;
  }
  .address_content ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .address_content ul li{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #E4E4E4;
  }
  .address_content ul li .dist{
    margin-left: 100px;
  }

  .address_content label{
    font-size: 20px;
    width: 110px;
    display: inline-block;
  }

  .address_content input{
    line-height: 50px;
    height: 50px;
    border: none;
    box-sizing: border-box;
    width: calc(100% - 110px);
    font-size: 18px;
    border-radius: 3px;
  }
  .address_content input:focus {
    outline: none;
    border: none;
  }
  .address_content textarea{
    line-height: 50px;
    height: 50px;
    border: none;
    box-sizing: border-box;
    width: calc(100% - 110px);
    font-size: 18px;
    border-radius: 3px;
    float: right;
    padding: 5px 0px;
    margin-top: 10px;
  }
  .address_content textarea:focus {
    outline: none;
    border: none;
  }

  .the-address, .the-address .adr-tent, .the-address .adr-tent .adr-table .table-thead .thh, .the-address .adr-tent .adr-table .table-tbody, .the-address .adr-tent .adr-table .table-tbody .item, .the-address .adr-tent .adr-table .table-tbody .item .tdd {
    overflow: hidden; }
  .the-address {
    width: 700px;
    margin-top: 10px;
    background-color: #fff; }
  .the-address-empty{
    color:red;
  }
  .the-address .adr-tol {
    width: 100%;
    height: 42px;
    background-color: #e3f2fd;
    margin-bottom: 20px; }
  .the-address .adr-tol .tkk {
    height: 42px;
    line-height: 42px;
    margin-left: 5px; }
  .the-address .adr-tol .ico {
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 15px;
    margin-top: 13px;
    float: left; }
  .the-address .adr-tent {
    height: auto; }
  .the-address .adr-tent .show{
    border:1px solid black;
    margin-bottom:20px;
  }
  .the-address .adr-tent .adr-table {
    width: 100%; }
  .the-address .adr-tent .adr-table .table-thead {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #dcdee3;
    background-color: #ebecf0; }
  .the-address .adr-tent .adr-table .table-thead .thh {
    text-align: left;
    border: 1px solid #dcdee3; }
  .the-address .adr-tent .adr-table .table-thead .thh .tn {
    padding: 12px 15px;
    display: inline-block; }
  .the-address .adr-tent .adr-table .table-tbody {
    width: 100%;
    height: auto; }
  .the-address .adr-tent .adr-table .table-tbody .item {
    box-sizing: border-box;
    text-align: left; }
  .the-address .adr-tent .adr-table .table-tbody .item:hover {
    background-color: #ebecf0; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd {
    box-sizing: border-box;
    border: 1px solid #dcdee3;
    border-top-color: transparent; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .ti {
    padding: 12px 14px;
    display: inline-block; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .tt {
    min-width: 50px;
    display: inline-block; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle {
    width: 90px; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle span{
    font-size: 15px; }
  /*.the-address .adr-tent .adr-table .table-tbody .item .tdd .handle .el-popover el-button{*/
  /*  font-size: 5px; }*/
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle > * {
    display: inline-block; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle .line {
    margin: 0 5px;
    color: #dcdee3; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle .a-chg:hover {
    color: #f56954;
    text-decoration: underline; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle .i-del {
    cursor: pointer; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .handle .i-del:hover {
    color: #f56954; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .set-def {
    cursor: pointer;
    display: inline-block;
    text-decoration: none; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .set-def:hover {
    color: #f56954; }
  .the-address .adr-tent .adr-table .table-tbody .item .tdd .set-def.cur {
    width: 80px;
    height: 30px;
    line-height: 15px;
    border: 1px solid #f56954;
    cursor: default;
    border-radius: 3px;
    background: #ffd6cc;
    color: #e44135;
    text-align: center; }
</style>
