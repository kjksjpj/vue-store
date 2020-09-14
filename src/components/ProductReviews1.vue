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
                       高端大气(1)
                   </span>
               </div>
           </div>
       </div>
       <div>
            <div style="height: 40px;background-color: #f7f7f7;border: #0c80dc solid">
                <el-table
                        :data="tableData"
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
                </el-table>
            </div>

       </div>


   </div>
</template>

<script>
    export default {
        name: "Reviews",
        //props: ["spuId"]
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
