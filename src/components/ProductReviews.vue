<template>
   <div class="reviews" id="reviews" name="reviews">
       <div class="mt">
           <h3>商品评价</h3>
       </div>
       <div class="comment-info">
           <div class="comment-percent">
               <strong class="percent-tit">好评度</strong>
               <div class="percent-con">
                   99<span>%</span>
               </div>
           </div>
           <div class="percent-info">
               <div class="tag-list tag-available"  clstag="shangpin|keycount|product|comment_icon">
                   <span class=" tag-1" data-id="51197de19f0ba763" data-rid="51197de19f0ba763" id="tag-list tag-available">
                       高端大气
                   </span>
               </div>
           </div>
       </div>
       <div>
            <div >
        <!--        <el-table
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="全部评价">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="晒图">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="追评">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="追评">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="追评">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="追评">
                    </el-table-column>
                </el-table>-->
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(item) in comment" :key="item.id">
                                <div style="border-bottom: 1px solid #D4D4D4;position: relative;padding: 16px;height: auto">
                                  <div style="width:140px;float:left;white-space: nowrap;
                                          text-overflow: ellipsis;
                                          overflow: hidden;display: flex">
                                      <img style="height:25px;width:25px;border-radius: 50%;margin: 15px 5px 5px 15px;vertical-align: center" :src="item.memberIcon">
                                      <div style="width:100px;overflow: hidden;vertical-align: center;line-height: 53px;font-size: 14px;">{{item.memberNickName}}</div>
                                  </div>
                                  <div style="box-sizing: border-box;
                                         overflow: hidden;margin-left: 100px;position: relative;width: 900px;height: auto;">

                                      <!--<div class="comment-star star5"></div>-->
                                    <!--星星-->
                                    <el-rate class="delivery-review-start"
                                             disabled
                                             v-model='item.star'
                                            >
                                    </el-rate>
                                      <div style="height: auto;overflow: hidden;margin-bottom: 18px" >
                                          <span v-if="item.content!='string'" style="font-size: 14px;line-height: 180%;color: #3F3F3F;word-wrap: break-word;overflow: hidden">{{item.content}}</span>
                                      </div>
                                      <div style="display: inline-block" v-for="(item1,index) in item.commentImages" :key="index">
                                          <img style="width: 80px;height: 80px" :src="item1">
                                      </div>
                                      <div style="margin-top: 3px;color: #999;font-size: 12px;padding-right: 80px">
                                          <span style="float: left">{{item.spuAttributes}}</span>
                                          <span style="margin-right: 580px;float: right">{{item.createTime| dateFormat}}</span>
      <!--                                    <span>-->
      <!--&lt;!&ndash;                                    <span   @click="count(item.id,index)">点赞</span>&ndash;&gt;-->
      <!--                                    {{item.likesCount}}-->
      <!--                                </span>-->
                                      </div>
                                   </div>
  <!--                                    下面的div为了撑开高度-->
                                   <div style="clear:both;height:0;font-size: 1px;line-height: 0px;"></div>
                                </div>
                            </li>

                        </ul>

                    </div>
<!--                </el-table>-->

            </div>

       </div>


   </div>
</template>

<script>
    export default {
        name: "Reviews",
        props: ["spuId"],
        data(){
          return{
                comment:[
                     /* {memberIcon:'',memberNickName:'呵呵',content:'这个产品非常好',resources:'视频或者图片评论',createTime:'2020.6.8',spuAttributes:'组团属性:sffdfddfgfd'},
                      {memberIcon:'',memberNickName:'哈哈',content:'这个产品干是否发货发电机发电v下半场v徐州深刻的反思开发',resources:'视频或者图片评论122344',createTime:'2020.8.8',spuAttributes:'组团属性:2535253454534'}*/
                      ],
                //星星
                star: "",
          }
        },
        created(){
            this.getCommentJson();
        },
        methods:{
            //获取评论列表数据
            getCommentJson(){
                this.$axios
                        .get(this.$target1+"/pms/spucomment/queryComment/" + this.spuId)
                        .then(response =>{
                            this.comment = response.data.data;

                            //获取评论图片资源
                          /*  this.comment.forEach((item)=>{
                                console.log(item.resources)
                                this.comment.push(JSON.parse(item.resources))
                                item.resources.forEach((item1=>{
                                    item.resources.push(JSON.parse(item1))
                                }))
                            });*/
                        })
                        .catch(err => {
                            return Promise.reject(err);
                        })
            },
            //点赞
            // count(id,index){
            //     this.comment[index].likesCount++;
            //     this.$axios({
            //         method:'post',
            //         url:this.$target1+"",
            //         contentType:"application/json;charset=utf-8",
            //         data:{
            //             id:id,
            //             likesCount:this.comment[index].likesCount,
            //         },dataType:"json",
            //     })
            //             .then(response => {
            //                 if (response.status == 200) {
            //                     this.$message({
            //                         message: "点赞+1",
            //                         type: "success"
            //                     });
            //                     this.getAddressJson();
            //                 } else {
            //                     this.$message({
            //                         message: "点赞失败" + response.message,
            //                         type: "error"
            //                     });
            //                 }
            //             });
            // }
        }
    }
</script>

<style >
    .reviews .mt {
        position: relative;
        padding: 10px;
        _zoom: 1;
        background-color: #f7f7f7;
        border: 1px solid #eee;
    }
    .reviews .comment-info {
         zoom: 1;
         overflow: hidden;
         padding: 25px 0px;
         background-color:#f7f7f7 ;
     }
    .reviews .list-group-item .star5 {
      background-position: 0 0;
    }
    .reviews .list-group-item .comment-star {
      width: 78px;
      height: 14px;
      background: url(//static.360buyimg.com/item/unite/1.0.104/components/default/comment/i/star.png) no-repeat;
      margin-bottom: 14px;
    }
    .reviews .comment-info .comment-percent {
        width: 90px;
        float: left;
        padding: 15px 0px 0px 40px;
    }
    .reviews .comment-info .percent-tit {
        font-size: 12px;
        color: rgb(102, 102, 102);
        font-weight: 400;
    }
    .reviews  .comment-info .percent-con {
         line-height: 110%;
         font-size: 45px;
         color: rgb(228, 57, 60);
         font-family: arial;
     }
    .reviews  .comment-info .percent-info {
        margin-left: 90px;
    }
    .reviews .comment-info .tag-list {
        padding-left: 20px;
    }
    .reviews  .comment-info .percent-info .tag-list {
        height: auto;
        overflow: visible;
    }
    .reviews .tag-available span.tag-1.selected {
        color: rgb(228, 57, 60);
        border-color: rgb(228, 57, 60);
    }
    .reviews .tag-list span {
        display: inline-block;
        line-height: 20px;
        margin-right: 10px;
        margin-bottom: 10px;
        color: rgb(153, 153, 153);
        padding: 0px 9px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(224, 224, 224);
        border-image: initial;
        border-radius: 2px;
    }
</style>
