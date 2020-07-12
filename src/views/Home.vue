<!--
 * @Description: 首页组件
 * @Author: hai-27
 * @Date: 2020-02-07 16:23:00
 * @LastEditors: hai-27
 * @LastEditTime: 2020-02-27 13:36:12
 -->
<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="item.imgPath" :alt="item.describes"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图END -->
    <div class="main-box">
      <div class="main">
        <!-- 手机商品展示区域 -->
        <div class="phone">
          <div class="box-hd">
            <div class="title">桌子</div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <router-link to>
                <ul>
                  <li>
                    <img :src="'https://www.ikea.cn/images/shu1-zhuo1-he2-can1-zhuo1-91933d82b5e55ba4b4f60d29d216f4f9.jpg?f=l'"/>
                  </li>
                  <li>
                    <img :src="'https://www.ikea.cn/images/shu1-zhuo1-he2-can1-zhuo1-91933d82b5e55ba4b4f60d29d216f4f9.jpg?f=l'"/>
                  </li>
                </ul>
              </router-link>
            </div>
            <div class="list">
              <MyList :list="phoneList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 手机商品展示区域END -->

        <!-- 家电商品展示区域 -->
        <div class="appliance" id="promo-menu">
          <div class="box-hd">
            <div class="title">椅子</div>
            <div class="more" id="more">
<!--              <MyMenu :val="2" @fromChild="getChildMsg">-->
<!--                <span slot="1">热门</span>-->
<!--                <span slot="2">电视影音</span>-->
<!--              </MyMenu>-->
            </div>
          </div>
          <div class="box-bd">
            <div class="promo-list">
              <ul>
                <li>
                  <img :src="'https://www.ikea.cn/images/sha1-fa1-5e5fa5aee50b0bc3727532a252845135.jpg?f=l'"/>
                </li>
                <li>
                  <img :src="'https://www.ikea.cn/images/sha1-fa1-5e5fa5aee50b0bc3727532a252845135.jpg?f=l'"/>
                </li>
              </ul>
            </div>
            <div class="list">
              <MyList :list="applianceList" :isMore="true"></MyList>
            </div>
          </div>
        </div>
        <!-- 家电商品展示区域END -->

        <!-- 配件商品展示区域 -->
        <!--        <div class="accessory" id="promo-menu">-->
        <!--          <div class="box-hd">-->
        <!--            <div class="title">配件</div>-->
        <!--            <div class="more" id="more">-->
        <!--              <MyMenu :val="3" @fromChild="getChildMsg2">-->
        <!--                <span slot="1">热门</span>-->
        <!--                <span slot="2">保护套</span>-->
        <!--                <span slot="3">充电器</span>-->
        <!--              </MyMenu>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class="box-bd">-->
        <!--            <div class="promo-list">-->
        <!--              <ul>-->
        <!--                <li>-->
        <!--                  <img :src="$target +'public/imgs/accessory/accessory-promo1.png'" alt/>-->
        <!--                </li>-->
        <!--                <li>-->
        <!--                  <img :src="$target +'public/imgs/accessory/accessory-promo2.png'" alt/>-->
        <!--                </li>-->
        <!--              </ul>-->
        <!--            </div>-->
        <!--            <div class="list">-->
        <!--              <MyList :list="accessoryList" :isMore="true"></MyList>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!-- 配件商品展示区域END -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        carousel: "", // 轮播图数据
        phoneList: "", // 手机商品列表=>桌子
        miTvList: "", // 小米电视商品列表
        applianceList: "", // 家电商品列表
        applianceHotList: "", //热门家电商品列表
        accessoryList: "", //配件商品列表
        accessoryHotList: "", //热门配件商品列表
        protectingShellList: "", // 保护套商品列表
        chargerList: "", //充电器商品列表
        applianceActive: 1, // 家电当前选中的商品分类
        accessoryActive: 1 // 配件当前选中的商品分类
      };
    },
    watch: {
      // 家电当前选中的商品分类，响应不同的商品数据
      applianceActive: function (val) {
        // 页面初始化的时候把applianceHotList(热门家电商品列表)直接赋值给applianceList(家电商品列表)
        // 所以在切换商品列表时判断applianceHotList是否为空,为空则是第一次切换,把applianceList赋值给applianceHotList
        if (this.applianceHotList == "") {
          this.applianceHotList = this.applianceList;
        }
        if (val == 1) {
          // 1为热门商品
          this.applianceList = this.applianceHotList;
          return;
        }
        if (val == 2) {
          // 2为电视商品
          this.applianceList = this.miTvList;
          return;
        }
      },
      accessoryActive: function (val) {
        // 页面初始化的时候把accessoryHotList(热门配件商品列表)直接赋值给accessoryList(配件商品列表)
        // 所以在切换商品列表时判断accessoryHotList是否为空,为空则是第一次切换,把accessoryList赋值给accessoryHotList
        if (this.accessoryHotList == "") {
          this.accessoryHotList = this.accessoryList;
        }
        if (val == 1) {
          // 1为热门商品
          this.accessoryList = this.accessoryHotList;
          return;
        }
        if (val == 2) {
          // 2为保护套商品
          this.accessoryList = this.protectingShellList;
          return;
        }
        if (val == 3) {
          //3 为充电器商品
          this.accessoryList = this.chargerList;
          return;
        }
      }
    },
    created() {
      //   获取轮播图数据
      this.carousel = [
        {
          "carousel_id": 1,
          imgPath: 'https://img.alicdn.com/imgextra/i2/98520104/O1CN01JHb6nv1CdfjSmpABN_!!0-saturn_solar.jpg_220x220.jpg_.webp',
          "describes": 123456
        },
        {
          "carousel_id": 2,
          imgPath: 'https://img.alicdn.com/imgextra/i3/114874360/TB2zMXwur1YBuNjSszeXXablFXa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
          "describes": 123456
        },
        {
          "carousel_id": 3,
          imgPath: 'https://img.alicdn.com/imgextra/i4/100608375/O1CN01UXxgqC2BjnbTMpDaW_!!0-saturn_solar.jpg_220x220.jpg_.webp',
          "describes": 123456
        },
        {
          "carousel_id": 4,
          imgPath: 'https://img.alicdn.com/imgextra/i2/12788765/O1CN01sAdziV2EcQ6U2qOcU_!!0-saturn_solar.jpg_220x220.jpg_.webp',
          "describes": 123456
        },
      ]
      this.phoneList = [
        {
          "product_id": 1,
          "product_name": "桌子1",
          "category_id": 1,
          "product_title": "120Hz流速屏，全速热爱",
          "product_intro": "120Hz高帧率流速屏/ 索尼6400万前后六摄 / 6.67'小孔径全面屏 / 最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC",
          "product_picture": "https://img.alicdn.com/imgextra/i1/42571048/O1CN018Zkkfd1Jc1cJiZxy4_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 2000,
          "product_selling_price": 1599,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 2,
          "product_name": "桌子2",
          "category_id": 1,
          "product_title": "双模5G,120Hz流速屏",
          "product_intro": "双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67'小孔径全面屏 / 索尼6400万前后六摄 / 最高可选8GB+256GB大存储 / 4500mAh+30W快充 / 3D四曲面玻璃机身 / 多功能NFC",
          "product_picture": "https://img.alicdn.com/imgextra/i4/30488427/O1CN01iAZ2wD2C7cFhviOxP_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 2599,
          "product_selling_price": 2599,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 3,
          "product_name": "桌子3",
          "category_id": 1,
          "product_title": "1亿像素,五摄四闪",
          "product_intro": "1亿像素主摄 / 全场景五摄像头 / 四闪光灯 / 3200万自拍 / 10 倍混合光学变焦，50倍数字变焦 / 5260mAh ⼤电量 / 标配 30W疾速快充 / ⼩米⾸款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216超线性扬声器",
          "product_picture": "https://img.alicdn.com/imgextra/i4/32843161/O1CN01FYJG651ZDmXjLGoQc_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 2799,
          "product_selling_price": 2599,
          "product_num": 20,
          "product_sales": 0
        }, {
          "product_id": 4,
          "product_name": "桌子4",
          "category_id": 1,
          "product_title": "5000mAh超长续航",
          "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB",
          "product_picture": "https://img.alicdn.com/imgextra/i1/241010094/O1CN01ljAD0L1CZ5npIiFZO_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 799,
          "product_selling_price": 699,
          "product_num": 20,
          "product_sales": 0
        }, {
          "product_id": 5,
          "product_name": "桌子5",
          "category_id": 1,
          "product_title": "5000mAh超长续航",
          "product_intro": "5000mAh超长续航 / 高通骁龙439八核处理器 / 4GB+64GB / 1200万AI后置相机",
          "product_picture": "https://img.alicdn.com/imgextra/i1/21231516/O1CN01kcM8fq1N4N2nnm50c_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 599,
          "product_selling_price": 699,
          "product_num": 20,
          "product_sales": 0
        }, {
          "product_id": 6,
          "product_name": "桌子6",
          "category_id": 1,
          "product_title": "6400万全场景四摄",
          "product_intro": "6400万四摄小金刚拍照新旗舰超强解析力，超震撼",
          "product_picture": "https://img.alicdn.com/imgextra/i1/40677247/O1CN01GM0g7P23PAtE2Y0Zr_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 1399,
          "product_selling_price": 1199,
          "product_num": 20,
          "product_sales": 0
        }, {
          "product_id": 7,
          "product_name": "桌子7",
          "category_id": 1,
          "product_title": "千元4800万四摄",
          "product_intro": "千元4800万四摄 | 高通骁龙665 | 小金刚品质保证",
          "product_picture": "https://img.alicdn.com/imgextra/i4/14257197/O1CN01MsQZUk232H62jmHiV_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 999,
          "product_selling_price": 999,
          "product_num": 20,
          "product_sales": 0
        }
      ]
      this.applianceList = [
        {
          "product_id": 9,
          "product_name": "椅子1",
          "category_id": 2,
          "product_title": "人工智能系统，高清液晶屏",
          "product_intro": "小米电视4A 32英寸 | 64位四核处理器 | 1GB+4GB大内存 | 人工智能系统",
          "product_picture": "https://img.alicdn.com/imgextra/i2/188080006/O1CN01JOYNXk1BumyjssFr9_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 799,
          "product_selling_price": 799,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 10,
          "product_name": "椅子2",
          "category_id": 2,
          "product_title": "全面屏设计，人工智能语音",
          "product_intro": "全面屏设计 | 内置小爱同学 | 4K + HDR | 杜比DTS | PatchWall | 海量内容 | 2GB + 8GB大存储 | 64位四核处理器",
          "product_picture": "https://img.alicdn.com/imgextra/i3/303250043/O1CN01VoZjtv1CBjdV7OksI_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 2099,
          "product_selling_price": 1899,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 11,
          "product_name": "椅子3",
          "category_id": 2,
          "product_title": "全面屏设计，人工智能语音",
          "product_intro": "人工智能语音系统 | 海量影视内容 | 4K 超高清屏 | 杜比音效 | 64位四核处理器 | 2GB + 8GB大存储",
          "product_picture": "https://img.alicdn.com/imgextra/i2/111429478/O1CN01nd3AGj2JsyRNm1WMK_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 3999,
          "product_selling_price": 2799,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 12,
          "product_name": "椅子4",
          "category_id": 2,
          "product_title": "FHD全高清屏，人工智能语音",
          "product_intro": "人工智能语音系统 | FHD全高清屏 | 64位四核处理器 | 海量片源 | 1GB+8GB大内存 | 钢琴烤漆",
          "product_picture": "https://img.alicdn.com/imgextra/i1/115643043/O1CN01lXrPk41YLjppFciGZ_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 1499,
          "product_selling_price": 1299,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 13,
          "product_name": "椅子5",
          "category_id": 2,
          "product_title": "4K HDR，人工智能系统",
          "product_intro": "人工智能 | 大内存 | 杜比音效 | 超窄边 | 4K HDR | 海量片源 | 纤薄机身| 钢琴烤漆",
          "product_picture": "https://img.alicdn.com/imgextra/i2/188080006/O1CN011gZV5L1Bumz6unDNW_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 1999,
          "product_selling_price": 1799,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 14,
          "product_name": "椅子6",
          "category_id": 2,
          "product_title": "4K HDR，人工智能系统",
          "product_intro": "人工智能 | 大内存 | 杜比音效 | 超窄边 | 4K HDR | 海量片源 | 纤薄机身| 钢琴烤漆",
          "product_picture": "https://img.alicdn.com/imgextra/i2/127860327/O1CN01J1JgaL1EHo7WFzrYE_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 2999,
          "product_selling_price": 2799,
          "product_num": 10,
          "product_sales": 0
        }, {
          "product_id": 15,
          "product_name": "椅子7",
          "category_id": 2,
          "product_title": "壁画外观，全面屏，远场语音",
          "product_intro": "纯平背板 | 通体13.9mm | 远场语音 | 4K+HDR | 杜比+DTS | 画框模式 | 内置小爱同学 | PatchWall | SoundBar+低音炮 | 四核处理器+大存储",
          "product_picture": "https://img.alicdn.com/imgextra/i4/113460142/O1CN01rSJv781Cv4qOK0Nlx_!!0-saturn_solar.jpg_220x220.jpg_.webp",
          "product_price": 6999,
          "product_selling_price": 6999,
          "product_num": 10,
          "product_sales": 0
        }
      ]
      // this.$axios
      //     .post("/api/resources/carousel", {})
      //     .then(res => {
      //       this.carousel = res.data.carousel;
      //     })
      //     .catch(err => {
      //       return Promise.reject(err);
      //     });
      // 获取各类商品数据
      // this.getPromo("手机", "phoneList");
      // this.getPromo("电视机", "miTvList");
      // this.getPromo("保护套", "protectingShellList");
      // this.getPromo("充电器", "chargerList");
      // this.getPromo(
      //     ["电视机", "空调", "洗衣机"],
      //     "applianceList",
      //     "/api/product/getHotProduct"
      // );
      // this.getPromo(
      //     ["保护套", "保护膜", "充电器", "充电宝"],
      //     "accessoryList",
      //     "/api/product/getHotProduct"
      // );
    },
    methods: {
      // 获取家电模块子组件传过来的数据
      getChildMsg(val) {
        this.applianceActive = val;
      },
      // 获取配件模块子组件传过来的数据
      getChildMsg2(val) {
        this.accessoryActive = val;
      },
      // 获取各类商品数据方法封装
      getPromo(categoryName, val, api) {
        api = api != undefined ? api : "/api/product/getPromoProduct";
        this.$axios
            .post(api, {
              categoryName
            })
            .then(res => {
              this[val] = res.data.Product;
            })
            .catch(err => {
              return Promise.reject(err);
            });
      }
    }
  };
</script>
<style scoped>
  @import "../assets/css/index.css";
</style>
