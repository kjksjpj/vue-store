<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5" :offset="1"><div class="grid-content bg-purple">{{brand}}</div></el-col>
    </el-row>
    <br/>
    <el-row :gutter="20">
      <el-col :span="5" :offset="1" v-for="item in attrs" :key="item"><div class="grid-content bg-purple">{{item}}</div></el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "ProductDesciption",
    props: ["groups", "brandEntity"],
    computed: {
      //参数信息
      attrs: function () {
        let res = [];
        for (let arr of this.groups) {
          for (let item of arr.baseAttrs) {
              let temp = item.attrName + " : " + item.attrValue;
              res.push(temp);
          }
        }
        return res;
      },
      //品牌信息
      brand: function () {
        return "品牌 : " + this.brandEntity.name;
      }
    }
  }
</script>

<style>
  /*.el-col {*/
  /*  padding-left: 42px;*/
  /*}*/
  /*.el-tabs--border-card > .el-tabs__content {*/
  /*  padding: 42px;*/
  /*}*/
</style>
