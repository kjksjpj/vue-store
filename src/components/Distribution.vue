<template>
  <div>
    <div v-if="isJoinDist === true">
      <el-row>
        <el-col :offset="9" :span="24" style="margin-top: 30%">
        <el-form disabled="true" ref="form" label-width="80px">
        <el-form-item  label="加入时间">
          <el-input v-model="member.addTime"></el-input>
        </el-form-item>
        <el-form-item  label="所属平台">
          <el-input v-model="member.disPlatSuper"></el-input>
        </el-form-item>
        <el-form-item  label="余额数量">
          <el-input v-model="amount.avaibleAmount"></el-input>
        </el-form-item>
      </el-form>
        </el-col>
    </el-row>
      <el-dialog title="下级名单" :visible.sync="dialogTableVisible" width="500px">
        <el-table :data="subData">
          <el-table-column property="memberName" label="用户名" width="450"></el-table-column>
        </el-table>
      </el-dialog>
      <el-row>
        <el-col :offset="16" :span="11" style="margin-top: 25px">
          <el-button type="primary" @click="selectSub">查看下级</el-button>
        </el-col>
      </el-row>
    </div>
    <div v-if="isJoinDist === false">
      <el-row>
        <el-col :span="24" :offset="0">
          <div class="dist-not-join">
            <div class="not-join">
              <h2>您没有加入分销系统！</h2>
              <p>快去加入吧！</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 100px">
        <el-col :span="11" :offset="11">
              <el-button type="primary" @click="joinDist">我要当分销员</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {getDistributionUserInfo, join} from "@/assets/js/Distribution"
export default {
  name: "Distribution",
  components: {},

  data() {
    return {

      //下级信息
      subData: [],

      //是否显示下级内容
      dialogTableVisible: false,

    }
  },
  activated() {
    getDistributionUserInfo();
  },
  created() {
    getDistributionUserInfo();
  },
  computed: {
    //是否加入了分销系统
    isJoinDist: function() {
      return this.$store.state.user.isJoinDist;
    },

    //用户信息
    member: function (){
      return this.$store.state.user.distInfo.member
    },
    //用户账户信息
    amount: function () {
      return this.$store.state.user.distInfo.amount
    },
  },
  methods: {
    //加入分销
    joinDist() {
      join();
    },

//查看直属下级
 selectSub() {
  this.$axios({
    method: 'post',
    url: this.$target2 + "/api/v1/subordinate",
    data: {
      memberId: this.member.disUserId,
      secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
    }
  })
      .then(res => {
        if (res.data.success === true) {
          this.subData = res.data.data;
          this.dialogTableVisible = true;
        }
      })
      .catch(err => {
        this.notifyError(err.data.errorMessage)
        return Promise.reject(err);
      })
}
  }
}
</script>
<style scoped>


.dist-not-join .not-join {
  height: 300px;
  padding: 0 0 10px 558px;
  margin: 65px 0 0;
  background: url(../assets/imgs/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}

.dist-not-join .not-join h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}

.dist-not-join .not-join p {
  margin: 0 0 20px;
  font-size: 20px;
}
</style>