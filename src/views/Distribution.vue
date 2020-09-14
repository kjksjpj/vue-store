<template>
  <div>
    <div v-if="isJoinDist === true">
      <el-dialog title="下级名单" :visible.sync="dialogTableVisible" width="500px">
        <el-table :data="subData">
          <el-table-column property="memberName" label="用户名" width="450"></el-table-column>
        </el-table>
      </el-dialog>
      <el-row>
        <el-col :offset="10" :span="11"><i class="el-icon-wallet"></i>余额：{{ amount.totalAmount }}</el-col>
      </el-row>
      <el-row>
        <el-col :offset="10" :span="11" style="margin-top: 25px">
          <el-button type="primary" @click="selectSub">查看下级</el-button>
        </el-col>
      </el-row>
    </div>
    <div v-if="isJoinDist === false">
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="dist-not-join">
            <div class="not-join">
              <h2>您没有加入分销系统！</h2>
              <p>快去加入吧！</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-bottom: 100px">
        <el-col :span="11" :offset="9">
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="上级">
              <el-input v-model="form.UpperId" placeholder="上级唯一标识"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="join">加入分销</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
//这一步很重要，一般我们直接从后台拿过来输出来会是在data里面，但是我发现却在store里面，这里就要用到vuex
// import {mapGetters} from "vuex";
// import {mapActions} from "vuex";

export default {
  name: "Distribution",
  data() {
    return {
      //是否加入了分销系统
      isJoinDist: false,
      //用户信息
      member: {
        addTime: "2020-09-10 09:44:38",
        confineStatus: 0,
        disFullIndex: "qingchao.abc001.a123456789",
        disLevel: 3,
        disModelId: "abc001",
        disNote: "nothing",
        disPlatFullIndex: "admin.dist",
        disPlatLevel: 1,
        disPlatSuper: "dist",
        disPlatformId: "dist",
        disUserId: "a123456789",
        disUserName: "a123456789",
        disUserRank: "A",
        disUserType: "0",
        id: 91,
        isDelete: "N",
        rankIntegral: 0,
        totalRankIntegral: 0,
        type: "0",
        updateTime: "2020-09-10 09:44:38"
      },
      //用户账户信息
      amount: {
        addTime: '',
        amountStatus: '0',
        c: '0',
        disUserId: '',
        disUserName: '',
        frozenAmount: '',
        id: '',
        inviteAvaibleAmount: 0,
        inviteFrozenAmount: 0,
        inviteTotalAmount: 0,
        levelAvaibleAmount: 0,
        levelFrozenAmount: 0,
        levelTotalAmount: 0,
        totalAmount: 0,
        tradeAvaibleAmount: 0,
        tradeFrozenAmount: 0,
        tradeTotalAmount: 0,
        type: 0,
        updateTime: ''
      },
      //表单信息
      form: {
        UpperId: ""
      },
      //下级信息
      subData: [],

      //是否显示下级内容
      dialogTableVisible: false,

    }
  },
  activated() {
    this.getDistributionUserInfo();
  },
  created() {
    this.getDistributionUserInfo();
  },
  computed: {
    // ...mapGetters(["user"])
  },
  methods: {
    //获得分销系统的用户信息
    getDistributionUserInfo() {
      let user = this.$store.state.user.user;
      this.$axios
          .get(this.$target2 + "/api/v1/getUserInfo", {params: {userId: user.username}})
          .then(res => {
            if (res.data.success === true) {
              this.isJoinDist = true;
              this.member = res.data.data.member;
              this.amount = res.data.data.amount;
              console.log(res);
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });
    },

    //加入分销
    join() {
      let user = this.$store.state.user.user;
      this.$axios({
        method: 'post',
        url: this.$target2 + "/api/v1/memberAdd",
        data: {
          disModelId: this.form.UpperId,
          disNote: "nothing",
          disPlatformId: "dist",
          disUserName: user.username,
          disUserId: user.username,
          secret: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzExMTczMzk4MDcsInBheWxvYWQiOiJcInhpYW9qaWFuZ1wiIn0.rOY3JXrYpNMWwATmY7r3jm0Ec6SuhNPyrP2rGD43Isk",
        }
      })
          .then(res => {
            if (res.data.success === true) {
              this.getDistributionUserInfo();
            }
          })
          .catch(err => {
            return Promise.reject(err);
          });

    },
    //查看直属下级
    selectSub() {
      this.$axios({
        method: 'post',
        url: this.$target2 + "/api/v1/subordinate",
        data: {
          memberId: this.member.disUserName,
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