<template>
  <html>
  <body>
<!--  <div>-->
<!--    <div>-->
        <div class="wrapper">
<!--  <div class="wrapper blockimportant">-->
    <div class="wrap">
      <div class="layout bugfix_ie6 dis_none">
        <div class="n-logo-area clearfix">
          <div class="fl-l">
            <img src="https://account.xiaomi.com/static/res/aff1713/account-static/respassport/acc-2014/img/milogo36.png" >
<!--                 srcset="/static/res/aff1713/account-static/respassport/acc-2014/img/milogo36.png 1x, /static/res/aff1713/account-static/respassport/acc-2014/img/milogo36@2x.png 2x">-->
            <span class="logo_title">小米帐号</span>
          </div>

          <a id="logoutLink" class="fl-r logout"
             href="/pass/logout?userId=2433070062&amp;callback=https://account.xiaomi.com">
            退出
          </a>
        </div>
        <!--头像 名字-->
        <div class="n-account-area-box">
          <div class="n-account-area clearfix">
            <div class="na-info">
              <p class="na-name" style="color:#999;font-weight:normal;">请设置名字</p>
              <p class="na-num">123456</p>
            </div>
            <div class="na-img-area fl-l">
              <!--na-img-bg-area不能插入任何子元素-->
              <div class="na-img-bg-area"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout">
        <div class="n-main-nav clearfix">
          <ul class="c_b">
            <li>
              <a href="/pass/auth/security/home?cUserId=cY5wuD2Bbc9MY9URspz_OXZWDNE&amp;userId=2433070062" title="帐号安全"
                 data-action="security">帐号安全</a>
              <em class="n-nav-corner"></em>
            </li>
            <li class="current">
              <a href="/pass/auth/profile/home?cUserId=cY5wuD2Bbc9MY9URspz_OXZWDNE&amp;userId=2433070062" title="个人信息"
                 data-action="profile">个人信息</a>
              <em class="n-nav-corner"></em>
            </li>
            <li>
              <a href="/pass/auth/sns/home?cUserId=cY5wuD2Bbc9MY9URspz_OXZWDNE&amp;userId=2433070062" title="绑定授权"
                 data-action="sns">绑定授权</a>
              <em class="n-nav-corner"></em>
            </li>
            <li>
              <a href="/pass/auth/services/home?cUserId=cY5wuD2Bbc9MY9URspz_OXZWDNE&amp;userId=2433070062" title="小米服务"
                 data-action="services">小米服务</a>
              <em class="n-nav-corner"></em>
            </li>
            <li>
              <a href="/userCenter/#device" title="设备管理" data-action="device" data-type="new">设备管理</a>
              <em class="n-nav-corner"></em>
            </li>
          </ul>
        </div>
        <div class="n-frame">
          <div class="uinfo c_b">
            <div>
              <div class="main_l">
                <div class="naInfoImgBox t_c">
                  <div class="na-img-area marauto">
                    <!--na-img-bg-area不能插入任何子元素-->
                    <div class="na-img-bg-area"></div>
                    <em class="na-edit"></em>
                  </div>
                  <div class="naImgLink">

                    <a class="color4a9" href="" title="设置头像">设置头像</a>

                  </div>
                </div>
              </div>
              <div class="main_r">
                <div class="framedatabox">
                  <div class="fdata">
                    <a class="color4a9 fr" href="" title="编辑" id="editInfo"><i class="iconpencil"></i>编辑</a>
                    <h3>基础资料</h3>
                  </div>
                  <div class="fdata lblnickname">
                    <p><span>昵称：</span><span class="value" _empty="">

          <span style="color:#999;">请设置名字</span>

        </span></p>
                  </div>
                  <!--  <div class="fdata lblbirthday" style="display: none">
                   <p><span>生日：</span><span class="value" _empty>



             </span></p>
                 </div> -->
                  <div class="fdata lblgender">
                    <p><span>性别：</span><span class="value" _empty="" val="">



        </span></p>
                  </div>
                  <div class="btn_editinfo"><a id="editInfoWap" class="btnadpt bg_normal" href="">编辑基础资料</a></div>
                </div>
                <div class="framedatabox">
                  <div class="fdata">
                    <h3>高级设置</h3>
                  </div>
                  <div class="fdata click-row">
                    <a class="color4a9 fr" target="_blank" href="https://www.mipay.com" title="管理">管理</a>
                    <p>
                      <span>银行卡</span>
                      <span class="arrow_r"></span>
                    </p>
                  </div>
                  <div class="fdata click-row">
                    <a style="display:none;" class="color4a9 fr" target="_blank" href="javascript:;" title="管理"
                       id="switchRegion">修改</a>
                    <p style="display:none;">
                      <span>帐号地区： </span>
                      <span class="box_center"><em id="region" _code="CN">中国</em><i class="arrow_r hidewap"></i></span>
                    </p>
                  </div>
                  <div class="fdata click-row">
                    <a class="color4a9 fr" target="_blank" href="/pass/auth/rights/home?userId=2433070062">管理</a>
                    <p>
                      <span>数据权利中心</span>
                      <span class="arrow_r"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="logout_wap log-out">
        <a class="btnadpt bg_white" href="/pass/logout?userId=2433070062&amp;callback=https://account.xiaomi.com">退出</a>
      </div>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>
  .n-footer {
    color: #9d9d9d;
    text-align: center;
    height: 80px;
    margin-top: -80px
  }

  .nf-intro {
    padding: 10px
  }

  .nf-link-area {
    text-align: center
  }

  .nf-link-area li {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  .nf-link-area a {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    padding: 0 10px;
    color: #757575
  }

  .nf-link-area a:hover, .nf-link-area a.current {
    color: #333
  }

  .faq_link a {
    padding: 0 10px
  }

  .cookie_usage_notify, .info_notify {
    background: #fdc;
    width: 100%;
    padding: 8px 0;
    display: none;
    font-size: 12px;
    color: #4a4a4a;
    position: fixed;
    left: 0;
    bottom: 0
  }

  .cookie_usage_notify .text_content, .info_notify .text_content {
    max-width: 70%;
    display: inline-block;
    text-align: left;
    padding-right: 10px
  }

  .close_cookie_usage, .close_notify {
    background: none;
    border: 0 none;
    display: inline-block;
    vertical-align: top;
    color: #4a4a4a;
    cursor: pointer
  }

  .icon_close {
    background: url(https://account.xiaomi.com/static/res/269877d/account-static/respassport/acc-2014/img/close2.png);
    background-position: 50% 50%;
    width: 11px;
    height: 11px;
    display: inline-block
  }

  .info_notify {
    top: 0;
    bottom: auto;
    text-align: center
  }

  body[class^=ar] .cookie_usage_notify .text_content, body[class^=ar] .info_notify .text_content, body[class=iw_IL] .cookie_usage_notify .text_content, body[class=iw_IL] .info_notify .text_content, body[class=fa_IR] .cookie_usage_notify .text_content, body[class=fa_IR] .info_notify .text_content {
    text-align: right
  }

  .err_tip, .err_tip_independ {
    margin-bottom: 5px;
    line-height: 20px;
    font-size: 14px;
    color: #f66;
    display: none
  }

  .icon_error, .err_tip_independ {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RThERTYwMzA1REI3MTFFNDg1NkRDMzZGRjlFNjlEMzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RThERTYwMzE1REI3MTFFNDg1NkRDMzZGRjlFNjlEMzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFOERFNjAyRTVEQjcxMUU0ODU2REMzNkZGOUU2OUQzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFOERFNjAyRjVEQjcxMUU0ODU2REMzNkZGOUU2OUQzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhTWU2QAAADRSURBVHjaYvyfb8uABESAuAiIfYBYDSp2A4g3AfEkIH4DU8iIpDEYiOcCMT8DdvAJiJOAeC2Iw4SkaTUeTSDAB1UTDNMoCsTzQLajKJtwCIJRASNUrRhIYy7UNGIBSG0BSKMfA+nAB6RRgwyN6kwM5IFfLNB40seQKrDDp/EeEzRyMQH2UIWBrSCNU6CRSywAqZ0AcuoraIpYjRKX2J36H6r2FSxwQMkoDIg/47EJJBeKnuRAYA0QKwFxOxBfAeLfQPwViM8DcQtUbi1MMUCAAQBgriw0RAfMMAAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    _background-image: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-warning-ico.png")
  }

  .icon_error {
    width: 14px;
    height: 14px;
    margin: -1px 5px 0 0;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
  }

  .error_bg, .err_label {
    border: 1px solid #f66 !important
  }

  .err_tip_independ {
    background-position: 0px 3px;
    padding-left: 20px
  }

  .err_tip span {
    vertical-align: middle
  }

  body[class^=ar] .icon_error, body.iw_IL .icon_error, body.fa_IR .icon_error {
    margin: -1px 0 0 5px
  }

  body[class^=ar] .err_tip_independ, body.iw_IL .err_tip_independ, body.fa_IR .err_tip_independ {
    background-position: 100% 3px;
    padding: 0 20px 0 0
  }

  .msk {
    background: #000;
    width: 100%;
    height: 100%;
    position: fixed;
    _position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    display: none;
    opacity: .4;
    filter: alpha(opacity=40)
  }

  .popup_mask {
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: none;
    _position: absolute;
    _height: 1000px
  }

  .popup_mask .bkc {
    position: absolute;
    width: 100%;
    height: 200%;
    left: 0;
    top: 0;
    background-color: #333;
    opacity: .7;
    filter: alpha(opacity=70)
  }

  .loadingmask {
    -webkit-animation: rotate-loading 1.5s linear infinite;
    -moz-animation: rotate-loading 1.5s linear infinite;
    -o-animation: rotate-loading 1.5s linear infinite;
    -ms-animation: rotate-loading 1.5s linear infinite;
    animation: rotate-loading 1.5s linear infinite;
    width: 50px !important;
    height: 50px !important;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -25px;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,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);
    background-image: url(https://account.xiaomi.com/static/res/328fb58/passport/acc-2014/img/loading_black.gif) \9
  }

  .mask_panel {
    text-align: center
  }

  .mask_panel .loadingmask {
    position: static;
    margin: 0 auto
  }

  .mask_panel .loading_text {
    padding-top: 16px;
    color: #000
  }

  .loading_panel {
    text-align: center;
    padding-top: 60px
  }

  .loading_con {
    display: inline-block
  }

  .loading_con .text {
    display: inline-block;
    padding-top: 16px;
    padding-left: 10px
  }

  .loading_inl {
    position: static;
    margin: 0;
    float: left
  }

  .loadings {
    -webkit-animation: rotate-loading 1.5s linear infinite;
    -moz-animation: rotate-loading 1.5s linear infinite;
    -o-animation: rotate-loading 1.5s linear infinite;
    -ms-animation: rotate-loading 1.5s linear infinite;
    animation: rotate-loading 1.5s linear infinite;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-image: url(https://account.xiaomi.com/static/res/9a1dfbc/account-static/respassport/acc-2014/img/loading.png)
  }

  @-webkit-keyframes rotate-loading {
    from {
      -webkit-transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(360deg)
    }
  }

  @-moz-keyframes rotate-loading {
    from {
      -moz-transform: rotate(0deg)
    }
    to {
      -moz-transform: rotate(360deg)
    }
  }

  @-o-keyframes rotate-loading {
    from {
      -o-transform: rotate(0deg)
    }
    to {
      -o-transform: rotate(360deg)
    }
  }

  @-ms-keyframes rotate-loading {
    from {
      -ms-transform: rotate(0deg)
    }
    to {
      -ms-transform: rotate(360deg)
    }
  }

  @keyframes rotate-loading {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }

  body[class^=ar] .loading_inl, body.iw_IL .loading_inl, body.fa_IR .loading_inl {
    float: left;
    padding-right: 10px
  }

  .remain {
    margin-left: 8px;
    vertical-align: middle;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e8e8e8
  }

  .remain a {
    color: #000;
    cursor: pointer;
    padding: 0 10px;
    display: block
  }

  .remain a:hover {
    background: #ececec !important;
    color: #888
  }

  .remain .disabled, .remain .noSend {
    background: none !important;
    color: #9d9d9d !important;
    cursor: not-allowed !important
  }

  .remain .disabled:hover, .remain .noSend:hover {
    background: none !important
  }

  .identitypwd .remain {
    display: none
  }

  body[class^=ar] .remain, body.iw_IL .remain, body.fa_IR .remain {
    margin-left: 0px;
    margin-right: 8px
  }

  .marauto {
    margin: 0 auto
  }

  .pdtop20 {
    padding-top: 20px
  }

  .bgfff {
    background: #fff
  }

  .color333 {
    color: #333
  }

  .color555 {
    color: #555 !important
  }

  .ff6 {
    color: #ff6700
  }

  .ft14 {
    font-size: 14px
  }

  .ft15 {
    font-size: 15px
  }

  .ft16 {
    font-size: 16px
  }

  .ftw {
    font-weight: bold
  }

  .ftnormal {
    font-weight: normal
  }

  .underline {
    text-decoration: underline
  }

  .mt20 {
    margin-top: 20px
  }

  .mt30 {
    margin-top: 30px
  }

  .marboth20 {
    margin: 20px 0
  }

  .marboth30 {
    margin: 30px 0
  }

  .pt20 {
    padding-top: 20px
  }

  .pb30 {
    padding-bottom: 30px
  }

  .pb20 {
    padding-bottom: 20px
  }

  .pb10 {
    padding-bottom: 10px
  }

  .pb5 {
    padding-bottom: 5px
  }

  .pb15 {
    padding-bottom: 15px
  }

  .pb40 {
    padding-bottom: 40px
  }

  .pt5 {
    padding-top: 5px
  }

  .pt10 {
    padding-top: 10px
  }

  .pt25 {
    padding-top: 25px
  }

  .pt60 {
    padding-top: 60px
  }

  .pb0 {
    padding-bottom: 0 !important
  }

  .color_warning {
    color: red
  }

  body {
    background: #f9f9f9;
    color: #666
  }

  a {
    color: #46639c
  }

  .a_critical {
    color: #ababab
  }

  .a_critical:hover {
    color: #ff7e00
  }

  input {
    color: #333
  }

  ::-webkit-input-placeholder {
    color: #9d9d9d
  }

  input:-ms-input-placeholder {
    color: #9d9d9d
  }

  .cursor_d {
    cursor: default !important
  }

  .pchide {
    display: none !important
  }

  html, body {
    height: 100%
  }

  .wrapper {
    width: 100%;
    min-height: 100%;
    height: auto;
    display: -webkit-box;
    display: box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    -webkit-box-align: center;
    -moz-box-align: center;
    -o-box-align: center;
    -ms-box-align: center;
    box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -o-box-pack: center;
    box-pack: center;
    -ms-flex-pack: center
  }

  .wrap {
    padding-bottom: 80px;
    padding-top: 100px \9
  }

  @media screen and (min-width: 0\0
  ) {
    .wrap {
      padding-top: 100px
    }
  }

  .blockimportant .wrap {
    padding-top: 0 \9
  }

  @media screen and (min-width: 0\0
  ) {
    .blockimportant .wrap {
      padding-top: 0
    }
  }

  .layout {
    width: 854px;
    margin: 0 auto;
    padding-bottom: 10px
  }

  .n-logo-area {
    padding: 50px 0;
    height: 31px;
    line-height: 31px
  }

  .n-logo-area .logo_title {
    color: #ff6700;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px
  }

  .n-logo-area img {
    vertical-align: middle
  }

  .logout {
    font-size: 14px;
    color: #ababab
  }

  .logout:hover {
    color: #ff6700
  }

  .beianlink {
    color: #9d9d9d
  }

  .n-frame {
    background: #fff;
    padding: 34px 34px 0;
    border: 1px solid #e6e6e6;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    border-radius: 10px;
    min-height: 400px;
    _height: 400px
  }

  .device-frame {
    border: none;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
    padding-top: 0
  }

  .title-big, .title-bigger, .title-biggest, .title-normal, .title_big30 {
    font-size: 16px;
    color: #333;
    line-height: 1.5;
    font-weight: bold
  }

  .title-normal {
    color: #555
  }

  .title-big {
    font-size: 20px
  }

  .title-bigger {
    font-size: 24px
  }

  .title-biggest {
    font-size: 28px
  }

  .title_big30 {
    font-size: 30px;
    font-weight: normal
  }

  .title_middle {
    font-size: 16px
  }

  .external_logo_area {
    padding-bottom: 40px;
    display: block
  }

  .milogo {
    width: 49px;
    height: 48px;
    margin: 0 auto;
    display: block;
    cursor: default;
    background-image: url(https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png)
  }

  .title-item {
    padding-bottom: 10px;
    border-bottom: 1px solid #e6e6e6;
    clear: both
  }

  .device-frame {
    padding-bottom: 30px
  }

  .device-frame .title-item {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0
  }

  .dis_bot35 {
    padding-bottom: 35px
  }

  .chkcode_img {
    margin-left: 7px;
    vertical-align: middle;
    cursor: pointer
  }

  .uplode_img {
    line-height: 35px;
    position: relative
  }

  .uplodefile {
    height: 35px;
    line-height: 30px;
    font-size: 0;
    *font-size: 20px;
    cursor: pointer;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    opacity: .01;
    filter: alpha(opacity=1)
  }

  .uplodefile {
    width: 202px
  }

  .uplode_img .btn_commom {
    width: 200px;
    margin: 0
  }

  .icon_select {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: -4px;
    *margin-top: -2px;
    _margin-top: 0;
    display: inline-block;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAcxJREFUOBGdVb1qAkEQ9vYwiBcwXiyuiOGKEJLaIoHUh/U9RSxS5Ql8BIsUpsgLHAlCGhEby1xhnZ9CvBDQQs5IvEMQNPMdrviz/twt6O7OzPfN7O7MnBTbMiqVylEikThljB3CbDKZDEej0bdpmr+bYJJIUavVLjKZTCGZTF6nUqmTeDyuwm48HruDweDH9/23Xq9XzufzHyL8XFYsFplt2/etVuuTQFOKaLo6IIMONrC1LOtgTkALmW+gyOVyT5qm3em6rlFUMUlaPwBk0KXT6WNZlm/I4Vk2m31tNBpTzhXM8NbpdP5WI9q1b7fbHrBLZPV6/RJH2AXepAcW9w5Shj8Kv0BHPcc6ygAWjwgsQ2ooinJF6RGFK8AAi4wAF0OeITVED7CvB2DBEeQsgRSeZ/sSiOzAgQII7lBkEFUGQg8VEJWA48CB0mSoTZQTpQTXhZ6BBQe4AnCz2SyhnKIOYMEBsuAOXdd97Ha7X6FDmwGARbNYwqN8UEZho0S5Lpbe/JWr1WqJPD3Tb7jkacvGcRyfgnih+UFoho4Db2HaF1reItl6fyItmoWqqrebGqzneXa/3y8bhvG+SIa1kJAb8U8A7ZWZzNv1CfgHv1r3E9DWv4gAAAAASUVORK5CYII=);
    _background: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/6af2993/passport/acc-2014/img/select1.png")
  }

  .n_checked.now .icon_select, .checkbox .now .icon_select, .checkbox_container.now .icon_select {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAk5JREFUOBGVlctrU1EQxn/3tqZVKxQRCirdWRRX4sKuK7j1GYoLN4JYULT6FwiuFSOiEf+A+iq6FwV3uhIXWqmugigVKT5iTUKa6zfn5CQ3MUnTgXPPa+Y7c+bMNzeihyRHGGWAcSJGnFpCkVUK0VN+dDOLOm0kx9lNhhmBTartFODWOuCyAD+rvaJCPprnQ7t9C2ACMdPMCuys2oRmCKxVpERNrcKi2l2Nb0WPNKpLQz3JCiLmHkOcYJhNQaFnX1YIysxzn9MCsmOcD94m5ryAjvUNZlZDim2GrLuVR/GAyVH2uGuawnrFbqMQubjL1qJkJ81occKN1/rEg5Bpi4jZ2iNKYpcagxxIXb475OgOuPIern6UpYCDmFvKCMOKXZ751Ajbvo8GWudbxuDyCxjbBd8+6QmqzX17WsNQzsbybHMjz4LK/izc/AVTF/zKyDaBPReYolJ4A7cPB81mb7kqAqT8bu6xIiJs2AjTOeWhPJ08Bdv3wpd3kDsEf7sSRf7V+EPCcgoOFp7B3Dm/lL0G4/tgaRGuH4Ti9xbVxsQwRM3YuOnoZAxIy8s78PCSVrTx86vApuD3UlqjOTZbT8mCY0pykhvKposK6v+SUWpWS62P0K61qoUVctEcsz4PS+KkcbOTVIq9wczG8zpvQwcYPWHBEb2kc9YrxmcViVB5vIcG8kDXLvNYTS71KeaAFQdVnGDRSBurFkmNM5R4K4X+y5ccCZXGQN2jBPTQu2IxLNBuBbbKa3mWd6EKRvW+I2DQafwCjE0mlrNr/AL+AbcOsj+c24+/AAAAAElFTkSuQmCC);
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/6af2993/passport/acc-2014/img/select2.png")
  }

  .icon_tanhao {
    background: url(https://account.xiaomi.com/static/res/be09251/account-static/respassport/acc-2014/img/tanhao.png);
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-left: -5px
  }

  .icon_radio_list {
    background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip.png);
    _background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip_ie6.png);
    background-position: 0 -101px;
    width: 14px;
    height: 14px;
    margin-right: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
  }

  .warning_white {
    background-image: url(https://account.xiaomi.com/static/res/269877d/account-static/respassport/acc-2014/img/warning2.png);
    vertical-align: top;
    margin-right: 4px;
    width: 26px;
    height: 26px;
    display: inline-block
  }

  .simcard {
    background: url(https://account.xiaomi.com/static/res/bcc9d9f/account-static/respassport/acc-2014/img/2018/sim.png);
    width: 70px;
    height: 70px;
    margin: 0 auto
  }

  .disabled {
    color: #ffa98b !important;
    cursor: default !important
  }

  .disabled:hover {
    background: #ff6f3d !important
  }

  .gray_disabled {
    color: #fff;
    background: #d2d2d2 !important;
    cursor: default !important
  }

  .input_disabled {
    background: #eee
  }

  .input_disabled input {
    background: #eee
  }

  .md_way {
    padding: 0 30px;
    color: #666
  }

  .md_way li {
    margin-top: 10px;
    cursor: pointer
  }

  .md_way .now .icon_radio_list {
    background-position: 0 -85px
  }

  .time_panel {
    line-height: 40px
  }

  .time_panel li {
    float: left;
    margin-right: 10px;
    position: relative
  }

  .select_droplist {
    display: block;
    cursor: pointer;
    border: 1px solid #e8e8e8
  }

  .timecon {
    float: left;
    padding-left: 10px;
    border-right: 1px solid #e8e8e8
  }

  .tits_list {
    background: #fff;
    width: 100%;
    height: 156px;
    overflow-x: hidden;
    overflow-y: auto;
    display: none;
    position: absolute;
    left: 0;
    top: 41px;
    z-index: 98;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
  }

  .tits_list p {
    padding-left: 10px;
    line-height: 26px
  }

  .tits_list p:hover {
    background: #eaeaea
  }

  .cancel_panel, .navbar_panel {
    display: none
  }

  .icon_warning {
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 10px;
    background: url(https://account.xiaomi.com/static/res/9a1dfbc/account-static/respassport/acc-2014/img/warning.png)
  }

  .txt_tip {
    color: #666;
    display: block;
    margin-top: -6px
  }

  .txt_tip em {
    display: none
  }

  .forget_panel {
    text-align: right;
    padding-top: 5px;
    padding-right: 5px
  }

  .title_tip {
    width: 60%;
    margin: 0 auto -24px;
    padding: 30px 0 10px
  }

  .error_info_panel {
    padding-top: 60px
  }

  .email_tip {
    font-size: 14px
  }

  .bind_info_panel {
    padding: 40px 45px 0
  }

  .bind_info_panel .bind_tip {
    padding-bottom: 10px
  }

  .bind_info_panel .title {
    font-size: 16px;
    text-align: center
  }

  .avator_img {
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png) 0 0 no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden
  }

  .avator_sim_img {
    background: url(https://account.xiaomi.com/static/res/29bcf1e/account-static/respassport/acc-2014/img/simcard.png) 0 0 no-repeat;
    width: 100%;
    height: 100%;
    overflow: hidden
  }

  .avator_box {
    width: 400px;
    margin: 0 auto;
    padding: 30px 0 20px
  }

  .avator_info {
    float: left
  }

  .avator {
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin-bottom: 10px;
    border-radius: 50%
  }

  .avator img {
    width: 100%;
    height: 100%
  }

  .avator_link {
    float: left;
    background: url(https://account.xiaomi.com/static/res/d06ae7f/account-static/respassport/acc-2014/img/icon_imglink_rupt.png);
    width: 90px;
    height: 48px;
    margin: 20px 30px 0
  }

  body[class^=ar], body[class=iw_IL], body[class=fa_IR] {
    direction: rtl
  }

  body[class^=ar] .fl, body[class^=ar] .fl-l, body[class^=ar] .avator_info, body[class^=ar] .avator_link, body[class=iw_IL] .fl, body[class=iw_IL] .fl-l, body[class=iw_IL] .avator_info, body[class=iw_IL] .avator_link, body[class=fa_IR] .fl, body[class=fa_IR] .fl-l, body[class=fa_IR] .avator_info, body[class=fa_IR] .avator_link {
    float: right
  }

  body[class^=ar] .fr, body[class^=ar] .fl-r, body[class=iw_IL] .fr, body[class=iw_IL] .fl-r, body[class=fa_IR] .fr, body[class=fa_IR] .fl-r {
    float: left
  }

  body[class^=ar] .ltr, body[class^=ar] .verify-masked, body[class^=ar] .address-place, body[class=iw_IL] .ltr, body[class=iw_IL] .verify-masked, body[class=iw_IL] .address-place, body[class=fa_IR] .ltr, body[class=fa_IR] .verify-masked, body[class=fa_IR] .address-place {
    direction: ltr;
    unicode-bidi: embed
  }

  body[class^=ar] .n-account-area, body[class=iw_IL] .n-account-area, body[class=fa_IR] .n-account-area {
    right: auto;
    left: 36px
  }

  body[class^=ar] .chkcode_img, body[class=iw_IL] .chkcode_img, body[class=fa_IR] .chkcode_img {
    margin: 0 7px 0 0
  }

  body[class^=ar] .na-info, body[class=iw_IL] .na-info, body[class=fa_IR] .na-info {
    float: right;
    text-align: left;
    margin: 0 0 0 10px
  }

  body[class^=ar] .icon_select, body[class=iw_IL] .icon_select, body[class=fa_IR] .icon_select {
    margin: 0 0 0 5px
  }

  body[class^=ar] .icon_tanhao, body[class=iw_IL] .icon_tanhao, body[class=fa_IR] .icon_tanhao {
    margin: 0 -5px 0 0
  }

  body[class^=ar] .icon_radio_list, body[class=iw_IL] .icon_radio_list, body[class=fa_IR] .icon_radio_list {
    margin: 0 0 0 5px
  }

  body[class^=ar] .tits_list p, body[class=iw_IL] .tits_list p, body[class=fa_IR] .tits_list p {
    padding: 0 10px 0 0
  }

  body[class^=ar] .icon_warning, body[class=iw_IL] .icon_warning, body[class=fa_IR] .icon_warning {
    float: right;
    margin: 0 0 0 10px
  }

  body[class^=ar] .timecon, body[class=iw_IL] .timecon, body[class=fa_IR] .timecon {
    float: right;
    padding-right: 10px;
    border-left: 1px solid #e8e8e8;
    border-right: none
  }

  body[class^=ar] .forget_panel, body[class=iw_IL] .forget_panel, body[class=fa_IR] .forget_panel {
    text-align: left;
    padding-right: 0;
    padding-left: 5px
  }

  .btnadpt {
    width: 100%;
    padding: 0;
    line-height: 40px;
    text-align: center;
    display: block;
    -webkit-box-shadow: 2px, 2px, 1px, rgba(0, 0, 0, .3);
    box-shadow: 2px, 2px, 1px, rgba(0, 0, 0, .3);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer
  }

  .bg_normal {
    color: #fff
  }

  .tip_btns {
    padding-top: 25px;
    text-align: center
  }

  .btn_tip {
    min-width: 100px;
    _width: 100px;
    height: 33px;
    margin: 0 2px;
    padding: 0 10px;
    line-height: 33px;
    text-align: center;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer
  }

  .btn_tip.plain {
    background: #ff6700;
    color: #fff
  }

  .tip_btns a:hover {
    text-decoration: none
  }

  .btn_commom {
    background: #ff6700;
    border: 1px solid #ff6700;
    color: #fff
  }

  .btn_back {
    border: 1px solid #e8e8e8;
    color: #555
  }

  .btn_tip_adapt, .btn_adapt {
    width: auto;
    padding: 0 10px
  }

  .btn332 {
    width: 330px;
    height: 42px;
    margin: 0 auto;
    line-height: 42px;
    text-align: center;
    font-size: 14px;
    display: block;
    cursor: pointer;
    border: 1px solid #e8e8e8;
    overflow: hidden
  }

  .btn_reg_1 {
    background-color: #ff6700;
    margin-top: 15px;
    border: 1px solid rgba(186, 186, 186, .3);
    *border: 0 none;
    color: #fff
  }

  .btn_reg_1:hover {
    background: #ff936a
  }

  .btn_reg_2 {
    background: #fff;
    margin-top: 10px;
    border: 1px solid #ddd;
    color: #7c7c7c
  }

  .btn_reg_2:hover {
    color: #333
  }

  .disabled {
    color: #ffa98b !important;
    cursor: default !important
  }

  .justify_fix {
    display: inline-block;
    width: 100%;
    height: 0;
    overflow: hidden;
    *display: inline;
    *zoom: 1
  }

  .tabline i {
    background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip.png);
    _background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip_ie6.png)
  }

  .tab_opt {
    width: 410px;
    margin: 0 auto
  }

  .tab_opt span {
    color: #9d9d9d;
    display: block;
    float: left;
    text-align: center;
    width: 33.33%;
    *width: 33%
  }

  .tab_opt .now {
    color: #ff6700
  }

  .tab_opt_shenhe {
    width: 100%
  }

  .tab_opt_shenhe span {
    width: 25%
  }

  .tabline {
    width: 296px;
    margin: 0 auto;
    height: 12px;
    border-bottom: 1px solid #e8e8e8;
    _overflow: hidden;
    text-align: justify;
    text-justify: distribute-all-lines
  }

  .tabline i {
    background-position: -32px -85px;
    width: 14px;
    height: 14px;
    margin-top: 6px;
    display: inline-block;
    _position: relative
  }

  .tabline .now {
    background-position: -32px -62px
  }

  .tabnewline {
    width: 460px
  }

  .sgp .tabnewline {
    width: 440px
  }

  .sgp .tab_opt_shenhe span {
    width: 33.33%
  }

  body[class^=ar] .tab_opt span, body.iw_IL .tab_opt span, body.fa_IR .tab_opt span {
    float: right
  }

  .i_selectbox {
    height: 42px;
    line-height: 42px;
    position: relative
  }

  .i_selectbox .i_selectoption {
    background: #fff;
    border: 1px solid #e8e8e8;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 43px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
  }

  .i_selectbox .i_selectoption dt, .i_selectbox .i_selectoption dd {
    line-height: 20px;
    padding: 5px 0;
    text-indent: 10px;
    cursor: pointer
  }

  .i_selectbox .i_selectoption dt {
    background-color: #eee
  }

  .i_selectbox .i_selectoption dd {
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis
  }

  .i_selectbox .i_selectoption .selected {
    background-color: #f6f6f6;
    color: #000
  }

  .i_selectbox .i_selectoption dd:hover, .i_selectbox .i_selectoption dd.hover {
    background-color: #eff1f2;
    color: #000
  }

  .i_currentselected {
    background: #fff url(https://account.xiaomi.com/static/res/9cb72bc/account-static/respassport/acc-2014/img/manfind_select.png) right center no-repeat;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e8e8e8;
    text-indent: 10px;
    cursor: pointer;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box
  }

  body[class^=ar] .i_currentselected, body.iw_IL .i_currentselected, body.fa_IR .i_currentselected {
    background-position: 5px center
  }

  .country_tips {
    width: 100%;
    color: #c5c5c5
  }

  .country_tips a {
    *margin-top: -16px;
    margin-top: 10px
  }

  .labelbox, .input_bg, .tits_list, .borderbox {
    border: 1px solid #e8e8e8
  }

  .labelbox, .input_bg {
    height: 42px;
    line-height: 42px;
    display: inline-block
  }

  .labelbox input, .input_bg input {
    height: 20px;
    line-height: 20px;
    padding: 10px;
    display: inline-block
  }

  .input_normal .labelbox {
    margin-bottom: 15px
  }

  .na-img-area {
    width: 80px;
    height: 80px;
    border: 2px solid #e3e3e3;
    border-radius: 50%;
    padding: 4px;
    background: #fff;
    position: relative;
    z-index: 4;
    cursor: pointer
  }

  .na-img-area:hover .na-edit {
    display: block
  }

  .na-img-area img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%
  }

  .na-img-bg-area {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden
  }

  .na-img-bg-area:empty {
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png) 0 0 no-repeat !important
  }

  .na-img-bg-area {
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg.png) 0 0 no-repeat \9
  }

  :root .na-img-bg-area {
    background: none
  }

  .single_imgarea {
    text-align: center
  }

  .single_imgarea .us_name {
    padding-top: 5px
  }

  .dis_none_pc {
    display: none
  }

  .dis-inb {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  .nowrap {
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden
  }

  .ph_list_sum {
    padding-left: 10px;
    display: none
  }

  .logout_wap, .btn_editinfo {
    display: none
  }

  .device_recommend {
    min-height: 120px;
    margin-top: 20px;
    _height: 120px;
    margin-bottom: 10px
  }

  .n-main-nav {
    overflow: hidden;
    position: relative;
    z-index: 2;
    margin-bottom: -1px
  }

  .n-main-nav ul {
    width: 73%;
    overflow: hidden
  }

  .n-main-nav li {
    float: left;
    text-align: center;
    width: 20%;
    height: 44px;
    overflow: hidden
  }

  .n-main-nav li a {
    display: block;
    color: #333;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis
  }

  .n-main-nav li.current a, .n-main-nav li a:hover {
    color: #ff7e00
  }

  .n-main-nav li.current .n-nav-corner {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  .n-nav-corner {
    width: 23px;
    height: 12px;
    margin-top: 12px;
    margin-bottom: -2px;
    _margin-bottom: -5px;
    display: none;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-layout-corner.png) 0 0 no-repeat
  }

  .n-account-area .na-img-area {
    cursor: default
  }

  .n-account-area {
    overflow: hidden;
    position: absolute;
    right: 36px;
    top: 114px
  }

  .na-info {
    width: 120px;
    text-align: right;
    padding-top: 16px;
    margin-right: 10px;
    float: left
  }

  .na-name {
    color: #333;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
  }

  .na-num {
    font-size: 14px;
    color: #666;
    line-height: 1.2
  }

  .na-edit {
    position: absolute;
    top: 23px;
    left: 23px;
    display: none;
    width: 43px;
    height: 43px;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-ava-edit.png) 0 0 no-repeat;
    _background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-ava-edit-ie.png) 0 0 no-repeat
  }

  .card-item {
    border: 1px solid #e6e6e6;
    padding: 20px;
    margin-top: 12px;
    overflow: hidden;
    *zoom: 1
  }

  .card-name-item {
    padding-top: 6px
  }

  .card-name-item .n-btn {
    padding: 4px 10px;
    margin-left: 10px
  }

  .card-item .na-img-area {
    width: 50px;
    height: 50px;
    padding: 2px;
    border: 1px solid #e3e3e3;
    margin-right: 10px
  }

  .card-item .na-img-bg-area {
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-avator-bg50.png) 0 0 no-repeat
  }

  .font-img-item {
    position: relative;
    overflow: hidden;
    padding: 0 0 0 56px
  }

  .font-img-item .fi-ico {
    position: absolute;
    left: 0;
    top: 0
  }

  .fi-ico {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    width: 40px;
    height: 40px;
    background: url(https://account.xiaomi.com/static/res/b52bef2/account-static/respassport/acc-2014/img/device-icos.png) 0 0 no-repeat
  }

  .fi-ico-lock {
    background-position: 0px 0
  }

  .fi-ico-email {
    background-position: -40px 0
  }

  .fi-ico-secret {
    background-position: -80px 0
  }

  .fi-ico-token {
    background-position: -120px 0
  }

  .fi-ico-luyou {
    background-position: -160px 0
  }

  .fi-ico-phone {
    background-position: -200px 0
  }

  .fi-ico-pc {
    background-position: -240px 0
  }

  .info-item {
    padding: 22px 0;
    border-bottom: 1px solid #e6e6e6
  }

  .info-item:last-child {
    border-bottom: 0 none
  }

  .title_item_txt {
    margin-left: 10px
  }

  .security_level_txt {
    margin-left: 20px
  }

  .space6, .space12, .space14, .space16 {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    width: 12px;
    height: 12px
  }

  .space6 {
    width: 6px
  }

  .space14 {
    width: 14px;
    height: 12px
  }

  .space16 {
    width: 16px;
    height: 12px
  }

  .font-default, .font-normal, .font-big {
    color: #9d9d9d;
    line-height: 1.5
  }

  .font-normal {
    font-size: 14px
  }

  .font-big {
    font-size: 16px
  }

  .color-default {
    color: #666
  }

  .color-light {
    color: #333
  }

  .color-warning {
    color: #fa0343
  }

  .color-active {
    color: #ff7e00
  }

  .light-num {
    font-size: 20px;
    font-weight: bold;
    color: #ff7e00;
    padding: 0 2px
  }

  .n-btn {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    line-height: normal !important;
    color: #555;
    border: 1px solid #e8e8e8;
    padding: 7px 40px;
    background: #fff;
    overflow: visible;
    *vertical-align: middle;
    cursor: pointer;
    margin-left: 10px
  }

  a.n-btn {
    *padding: 9px 40px;
    _padding: 8px 40px 9px 40px
  }

  .n-btn:hover {
    background: #f3f3f4
  }

  .n-btn-default {
    background: #e4e4e7;
    border: 1px solid #dfdfe1
  }

  .n-btn-default:hover {
    background: #dadadc;
    border: 1px solid #d6d6d7
  }

  .n-btn-light {
    color: #fff;
    background: #ff7a4d;
    border: 1px solid #ff7a4d
  }

  .n-btn-light:hover {
    background: #ff936a;
    border: 1px solid #ff936a
  }

  .n-btn-warning {
    background: #f2021e;
    color: #fff;
    border: 1px solid #e8011c
  }

  .n-btn-warning:hover {
    background: #e8011c;
    border: 1px solid #de021c
  }

  .n-btn-disabled {
    background: #fff;
    color: #999;
    cursor: default;
    border: 1px solid #e8e8e8
  }

  .n-btn-disabled:hover {
    background: #fff;
    border: 1px solid #e8e8e8
  }

  .n-input {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    height: 18px;
    line-height: 18px;
    padding: 16px 10px;
    font-size: 14px;
    color: #333;
    width: 270px;
    vertical-align: middle
  }

  .line-link {
    text-decoration: underline;
    color: #666;
    vertical-align: middle
  }

  .line-link:hover {
    color: #ff7e00;
    text-decoration: underline
  }

  .icon_APPLE, .icon_GOOGLE_XIAOMI, .icon_WEIXIN, .icon_baidumusic, .icon_kuaipan, .icon_mifit, .icon_FB, .icon_OPEN_QQ, .icon_TAOBAO, .icon_SINA_WEIBO {
    background: url(https://account.xiaomi.com/static/res/a92c87b/account-static/respassport/acc-2014/img/icon_third.png) no-repeat
  }

  .icon_SINA_WEIBO {
    background-position: 0px 0
  }

  .icon_TAOBAO {
    background-position: -80px 0
  }

  .icon_OPEN_QQ {
    background-position: -160px 0
  }

  .icon_FB {
    background-position: -240px 0
  }

  .icon_mifit {
    background-position: -320px 0
  }

  .icon_kuaipan {
    background-position: -400px 0
  }

  .icon_baidumusic {
    background-position: -480px 0
  }

  .icon_WEIXIN {
    background-position: -560px 0
  }

  .icon_GOOGLE_XIAOMI {
    background-position: -640px 0
  }

  .icon_APPLE {
    background-position: -720px 0
  }

  .icon_GOOGLE_XIAOMI {
    border: 1px solid #d8d8d8
  }

  .third_bindbox {
    padding-top: 25px
  }

  .third_area {
    width: 30%;
    padding-bottom: 50px;
    display: inline-block;
    height: 80px;
    overflow: hidden
  }

  .third_area dt {
    float: left;
    margin-right: 8px;
    *width: 80px
  }

  .third_area dd {
    padding-right: 10px;
    overflow: hidden;
    *margin-left: 88px
  }

  .third_area h3 {
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    color: #333;
    overflow: hidden
  }

  .third_area .status_bind {
    margin: 8px 0;
    height: 19px;
    line-height: 19px;
    overflow: hidden
  }

  .third_area .arrow_r {
    display: none
  }

  .third_area a {
    color: #333
  }

  .icon_bind, .icon_auth {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 6px
  }

  .icon_bind img, .icon_auth img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 6px
  }

  .th_action_btn {
    display: inline-block;
    height: 22px;
    line-height: 22px;
    padding: 0 8px;
    border: 1px solid #d1d1d1;
    font-weight: bold;
    overflow: hidden
  }

  .th_action_btn:hover {
    background-color: #f3f3f4
  }

  .icon_status {
    background: url(https://account.xiaomi.com/static/res/2ab37e3/passport/acc-2014/img/icon_status.png) 0 0 no-repeat;
    float: left;
    width: 19px;
    height: 19px;
    margin-right: 6px;
    overflow: hidden
  }

  .third_area_binded .icon_status {
    background-position: -19px 0
  }

  .authmsg {
    padding: 40px 0 60px 0;
    text-align: center;
    font-size: 14px
  }

  .error-tip {
    color: #fa0343;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-error-ico.png) 0 2px no-repeat;
    padding-left: 16px;
    display: inline-block;
    *display: inline;
    zoom: 1;
    line-height: 1.5;
    vertical-align: middle
  }

  .warning-tip {
    color: #ff6700;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/n-warning-ico.png) no-repeat;
    width: 14px;
    height: 14px;
    overflow: hidden;
    display: inline-block;
    *display: inline;
    zoom: 1;
    line-height: 1.5;
    vertical-align: middle
  }

  .n-progress-bar {
    position: relative;
    margin-top: 20px
  }

  .npb-intro {
    color: #a4a4a4;
    position: absolute;
    top: -20px;
    line-height: 1.5
  }

  .npb-intro-current {
    color: #646464
  }

  .npb-line-area {
    height: 20px
  }

  .npb-line {
    border-bottom: 3px solid #e7e7e7;
    width: 380px;
    height: 12px
  }

  .npb-circle {
    color: #e7e7e7;
    width: 12px;
    height: 12px;
    line-height: 1.5;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/npb-circle.png) 0 0 no-repeat;
    display: inline-block;
    *display: inline;
    zoom: 1;
    margin-right: 115px;
    float: left;
    margin-top: -8px
  }

  .npb-circle-current {
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/npb-circle-c.png) 0 0 no-repeat
  }

  .npb_circle_normal .npb-circle {
    margin-right: 5px;
    margin-top: 4px;
    float: none;
    vertical-align: top
  }

  .slider-area {
    position: relative
  }

  .slider-bar-bg {
    border: 1px solid #ddd;
    background: #e6e6e6;
    height: 2px;
    overflow: hidden
  }

  .slider-bar-line {
    background: #ec6a3d;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden
  }

  .drag-ico {
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 200px;
    top: -6px;
    z-index: 2;
    background: url(https://account.xiaomi.com/static/res/7c3e9b0/passport/acc-2014/img/drag-ico.png) 0 0 no-repeat
  }

  .card-area {
    width: 430px;
    margin: 20px 0 60px 0
  }

  .device-detail-area {
    position: relative;
    zoom: 1;
    overflow: hidden
  }

  .device-detail-area li {
    padding: 30px 0;
    position: relative;
    border-bottom: 1px solid #f2f2f2;
    margin-bottom: -1px
  }

  .device-detail-area .ada-btn-area {
    position: absolute;
    top: 40px;
    right: 0px
  }

  .device-detail-area .title-normal {
    vertical-align: middle
  }

  .device-detail-area .font-img-item {
    margin-left: -10px
  }

  .item_column {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  .bind-frame {
    padding-bottom: 0
  }

  .bugfix_ie6 {
    position: relative;
    z-index: 4;
    display: block !important
  }

  .disc {
    list-style: disc
  }

  .l_block {
    display: block
  }

  .icon_cirarr {
    background: url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png)
  }

  .martop20 {
    margin-top: 20px
  }

  .martop30 {
    margin-top: 30px
  }

  .pdbot20 {
    padding-bottom: 20px
  }

  .pdbot10 {
    padding-bottom: 10px
  }

  .n_checked {
    padding: 10px 0;
    cursor: pointer;
    display: inline-block
  }

  .n_checked label {
    cursor: pointer
  }

  .tip_btns {
    height: 35px
  }

  .btn_tip_adapt, .btn_adapt {
    width: auto;
    padding: 0 10px
  }

  .listbox {
    border: 1px solid #e8e8e8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px
  }

  .qst_txt:hover, .noverify a {
    text-decoration: underline
  }

  .icon_sv {
    background: url(https://account.xiaomi.com/static/res/64555e6/account-static/respassport/acc-2014/img/icon_service.png) no-repeat;
    width: 40px;
    height: 40px;
    overflow: hidden;
    display: block
  }

  .sv1 {
    background-position: 0px 0
  }

  .sv2 {
    background-position: -40px 0
  }

  .sv3 {
    background-position: -80px 0
  }

  .sv4 {
    background-position: -120px 0
  }

  .sv5 {
    background-position: -160px 0
  }

  .sv6 {
    background-position: -200px 0
  }

  .sv7 {
    background-position: -240px 0
  }

  .sv8 {
    background-position: -280px 0
  }

  .sv9 {
    background-position: -320px 0
  }

  .sv10 {
    background-position: -360px 0
  }

  .n_sevice {
    padding-bottom: 40px
  }

  .n_sevice li {
    float: left;
    width: 400px;
    margin: 30px 40px 0 0;
    line-height: 20px;
    overflow: hidden
  }

  .n_sevice dl {
    height: 40px;
    overflow: hidden
  }

  .n_sevice dt {
    float: left;
    width: 40px;
    height: 40px;
    overflow: hidden
  }

  .n_sevice dd {
    margin-left: 55px;
    overflow: hidden
  }

  .n_sevice dd a {
    font-size: 14px;
    color: #555
  }

  .n_sevice p {
    _width: 340px;
    height: 20px;
    color: #9d9d9d
  }

  .main_l {
    float: left;
    width: 300px
  }

  .main_r {
    float: left;
    width: 590px
  }

  .tits_list, .borderbox {
    border: 1px solid #e8e8e8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px
  }

  .color4a9 {
    color: #4a90e3
  }

  .ft20 {
    font-size: 20px
  }

  .iconpencil {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    margin-top: -5px;
    *margin-top: 0;
    *cursor: pointer;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0UzRUYzRjY3MTM1MTFFNEJCMjdGQURFMTQ0RkI2QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0UzRUYzRjc3MTM1MTFFNEJCMjdGQURFMTQ0RkI2QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RTNFRjNGNDcxMzUxMUU0QkIyN0ZBREUxNDRGQjZCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RTNFRjNGNTcxMzUxMUU0QkIyN0ZBREUxNDRGQjZCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjmk60AAAAECSURBVHjaYoyoOcxAJFgAxD1AfAXEYSJCAxsQ7wbieCDeC8QSIEEWIjReBWIVKFsMiM8BsQMhG+8CsSwQf0ISkwTig/g03gRiJSDmB2ILIH6MJFeCy6kfgZgPiAWA+CcQXwfi51DbzYD4NLqN7FA/8UAVfYSKT4JqCAJpwhY4IOfJQzV+hYotB+IIILYH4kMwhTAbQf44DvU4E5KmuVBN/siakDWGQgMAFGdGSJqSgNgdiDehBwLMqRlA3ALEZ6E2HwFiRyB2BuJ92EIPpFEciHVAkQp1MitUkwcuTTCNedDQfADEf4B4FhD3A/ENfCkDpFEfiPdD0+NsIH5DTIoHCDAA28IuedpZ4y8AAAAASUVORK5CYII=);
    _background-image: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/63f75a5/passport/acc-2014/img/pencil.png")
  }

  .uinfo {
    font-size: 14px
  }

  .naInfoImgBox {
    padding: 80px 20px 0
  }

  .naImgLink {
    padding-top: 15px
  }

  .framedatabox {
    padding-top: 15px
  }

  .fdata {
    padding-left: 20px;
    line-height: 40px;
    overflow: hidden
  }

  .fdata h3 {
    font-size: 16px;
    color: #333
  }

  .layereditinfo {
    width: 460px
  }

  .editbasicinfo {
    padding: 40px 0 0 20px
  }

  .iconbirth {
    background: url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png)
  }

  .infobox {
    padding-bottom: 10px;
    line-height: 42px
  }

  .infobox dt, .infobox dd {
    padding-bottom: 10px;
    _display: inline
  }

  .infobox dd:first-child {
    margin-bottom: 10px
  }

  .infobox dt {
    float: left;
    width: 80px;
    margin-right: 10px;
    text-align: right;
    font-size: 14px;
    font-weight: bold;
    height: 30px;
    overflow: hidden;
    _clear: left
  }

  .infobox input {
    line-height: 20px
  }

  .infobox li {
    float: left;
    margin-right: 6px;
    cursor: pointer;
    position: relative
  }

  .nickname {
    width: 265px
  }

  .titsbirth {
    width: 79px;
    padding-left: 10px;
    _height: 35px;
    height: 40px;
    line-height: 40px;
    display: block;
    cursor: pointer;
    border: 1px solid #e8e8e8
  }

  .titsbirth .icon_cirarr {
    margin: 12px 6px 0 0
  }

  .birthcon {
    float: left;
    width: 48px;
    border-right: 1px solid #e8e8e8
  }

  .iconbirth {
    float: right;
    width: 16px;
    height: 16px;
    margin: 12px 6px 0 0
  }

  .infosex span {
    margin-right: 20px;
    display: inline-block;
    _margin-top: 13px;
    cursor: pointer
  }

  .accset {
    width: 200px;
    margin: 0 auto;
    padding-top: 30px
  }

  .accset dt {
    padding-bottom: 15px;
    font-size: 14px;
    color: #333
  }

  .accset dd {
    padding-bottom: 10px
  }

  .uploading .err_tip {
    margin-left: 100px
  }

  .naccprocess {
    padding-top: 20px;
    line-height: 20px;
    font-size: 14px;
    padding-bottom: 10px
  }

  .clipimg {
    background: #2c2c2c;
    width: 300px;
    height: 300px;
    margin: 20px auto 0;
    position: relative;
    text-align: left
  }

  .clipimg img, .clipmsk {
    max-width: 300px;
    max-height: 300px;
    position: absolute
  }

  .clip_msk {
    position: absolute;
    z-index: 23;
    background: #000;
    opacity: .3
  }

  .mskt, .mskb {
    width: 100%
  }

  .mskt {
    top: 0
  }

  .mskb {
    bottom: 0
  }

  .mskl, .mskr {
    height: 100%
  }

  .mskl {
    left: 0
  }

  .mskr {
    right: 0
  }

  .movebox {
    cursor: move;
    position: absolute;
    border: 1px solid #00aeff;
    z-index: 1000;
    background-image: url(#)
  }

  .icon_square {
    width: 6px;
    height: 6px;
    border: 1px solid #fff;
    overflow: hidden;
    position: absolute
  }

  .icon_square_rightbot {
    left: 100%;
    top: 100%;
    margin-left: -4px;
    margin-top: -4px;
    cursor: se-resize
  }

  .cliperror {
    padding-top: 10px;
    width: 300px;
    margin: 0 auto
  }

  .zh_CN .uploaderror, .zh_TW .uploaderror, .zh_HK .uploaderror {
    margin-left: 100px
  }

  .uploaderror {
    margin: 0 80px
  }

  .n_txtbox {
    width: 300px;
    margin: 20px auto;
    color: #333
  }

  .n_txtbox ul {
    margin-left: 15px
  }

  .n_txtbox li {
    padding-top: 10px
  }

  .change_region_box .country-container {
    height: 190px
  }

  .iconfacebook {
    background-image: url(https://account.xiaomi.com/static/res/8cb34c1/passport/acc-2014/img/facebook.png);
    background-image: -webkit-image-set(url(https://account.xiaomi.com/static/res/8cb34c1/passport/acc-2014/img/facebook.png) 1x, url(https://account.xiaomi.com/static/res/bc21648/passport/acc-2014/img/facebook@2x.png) 2x);
    width: 24px;
    height: 24px;
    margin-right: 14px;
    *margin-top: 0 !important;
    margin-top: 10px;
    display: inline-block;
    vertical-align: top;
    _vertical-align: middle
  }

  .facebook_area {
    display: block
  }

  .zh_CN .facebook_area, .zh_TW .facebook_area, .zh_HK .facebook_area {
    display: none
  }

  .editbasicinfo .err_tip_independ {
    margin-left: 35px
  }

  .color999 {
    color: #999
  }

  .bgfff {
    background: #fff
  }

  .wap-info, .wap_tokenstore, .device-detail-area .arrow_r {
    display: none
  }

  .wap-desc .color-active {
    font-size: 12px
  }

  .blockimportant .layout {
    width: 960px
  }

  .blockimportant .bugfix_ie6 {
    padding-bottom: 0
  }

  .ta_IN .layereditinfo {
    width: 440px
  }

  .ta_IN .layereditinfo dt {
    width: 110px
  }

  .privacy_box {
    text-align: center;
    padding-top: 40px
  }

  #popEnterNewPhone {
    width: 500px;
    height: 550px;
    margin-top: -250px
  }

  #popEnterNewPhone .phonestep1 {
    padding-left: 80px;
    width: 298px
  }

  body[class^=ar] .n-main-nav li, body.iw_IL .n-main-nav li, body.fa_IR .n-main-nav li {
    float: right
  }

  body[class^=ar] .security_level_txt, body.iw_IL .security_level_txt, body.fa_IR .security_level_txt {
    margin: 0 20px 0 0
  }

  body[class^=ar] .font-img-item, body.iw_IL .font-img-item, body.fa_IR .font-img-item {
    padding: 0 56px 0 0;
    margin: 0 -10px 0 0
  }

  body[class^=ar] .font-img-item .fi-ico, body.iw_IL .font-img-item .fi-ico, body.fa_IR .font-img-item .fi-ico {
    position: absolute;
    right: 0
  }

  body[class^=ar] .third_area dt, body.iw_IL .third_area dt, body.fa_IR .third_area dt {
    float: right;
    margin-right: 0;
    margin-left: 8px
  }

  body[class^=ar] .third_area dd, body.iw_IL .third_area dd, body.fa_IR .third_area dd {
    padding-right: 0;
    padding-left: 10px;
    *margin-left: 0;
    *margin-right: 88px
  }

  body[class^=ar] .icon_status, body.iw_IL .icon_status, body.fa_IR .icon_status {
    float: right;
    margin-right: 0;
    margin-left: 6px
  }

  body[class^=ar] .device-detail-area .ada-btn-area, body.iw_IL .device-detail-area .ada-btn-area, body.fa_IR .device-detail-area .ada-btn-area {
    right: auto;
    left: 0
  }

  body[class^=ar] .device-detail-area .ada-btn-area .n-btn:first-child, body.iw_IL .device-detail-area .ada-btn-area .n-btn:first-child, body.fa_IR .device-detail-area .ada-btn-area .n-btn:first-child {
    margin-right: 0
  }

  body[class^=ar] .device-detail-area .ada-btn-area .n-btn:last-child, body.iw_IL .device-detail-area .ada-btn-area .n-btn:last-child, body.fa_IR .device-detail-area .ada-btn-area .n-btn:last-child {
    margin-right: 10px
  }

  body[class^=ar] .npb_circle_normal .npb-circle, body.iw_IL .npb_circle_normal .npb-circle, body.fa_IR .npb_circle_normal .npb-circle {
    margin: 4px 0 0 5px
  }

  body[class^=ar] .n_sevice li, body.iw_IL .n_sevice li, body.fa_IR .n_sevice li {
    float: right;
    margin: 30px 0 0 40px
  }

  body[class^=ar] .n_sevice dt, body.iw_IL .n_sevice dt, body.fa_IR .n_sevice dt {
    float: right
  }

  body[class^=ar] .n_sevice dd, body.iw_IL .n_sevice dd, body.fa_IR .n_sevice dd {
    margin-left: 0;
    margin-right: 55px
  }

  body[class^=ar] .main_l, body.iw_IL .main_l, body.fa_IR .main_l {
    float: right
  }

  body[class^=ar] .main_r, body.iw_IL .main_r, body.fa_IR .main_r {
    float: right
  }

  body[class^=ar] .iconpencil, body.iw_IL .iconpencil, body.fa_IR .iconpencil {
    margin-right: 0;
    margin-left: 5px
  }

  body[class^=ar] .fdata, body.iw_IL .fdata, body.fa_IR .fdata {
    padding-left: 0;
    padding-right: 20px
  }

  body[class^=ar] .editbasicinfo, body.iw_IL .editbasicinfo, body.fa_IR .editbasicinfo {
    padding: 40px 20px 0 0
  }

  body[class^=ar] .infobox dt, body.iw_IL .infobox dt, body.fa_IR .infobox dt {
    float: right;
    margin-right: 0;
    margin-left: 10px;
    text-align: left
  }

  body[class^=ar] .infobox li, body.iw_IL .infobox li, body.fa_IR .infobox li {
    float: right;
    margin-right: 0;
    margin-left: 6px
  }

  body[class^=ar] .titsbirth, body.iw_IL .titsbirth, body.fa_IR .titsbirth {
    padding-left: 0;
    padding-right: 10px
  }

  body[class^=ar] .titsbirth .icon_cirarr, body.iw_IL .titsbirth .icon_cirarr, body.fa_IR .titsbirth .icon_cirarr {
    margin: 12px 0 0 6px
  }

  body[class^=ar] .birthcon, body.iw_IL .birthcon, body.fa_IR .birthcon {
    float: right;
    border-right: 0 none;
    border-left: 1px solid #e8e8e8
  }

  body[class^=ar] .iconbirth, body.iw_IL .iconbirth, body.fa_IR .iconbirth {
    float: left;
    margin: 12px 0 0 6px
  }

  body[class^=ar] .infosex span, body.iw_IL .infosex span, body.fa_IR .infosex span {
    margin-right: 0;
    margin-left: 20px
  }

  body[class^=ar] .n_txtbox ul, body.iw_IL .n_txtbox ul, body.fa_IR .n_txtbox ul {
    margin-left: 0;
    margin-right: 15px
  }

  body[class^=ar] .iconfacebook, body.iw_IL .iconfacebook, body.fa_IR .iconfacebook {
    margin-right: 0;
    margin-left: 14px
  }

  body[class^=ar] .editbasicinfo .err_tip_independ, body.iw_IL .editbasicinfo .err_tip_independ, body.fa_IR .editbasicinfo .err_tip_independ {
    margin-right: 35px
  }

  .font-default {
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 680px
  }

  .mi_data_center .contact_us {
    margin: -45px auto 30px auto
  }

  .mi_data_center .err_tip {
    margin: 20px 0 5px 0
  }

  .mi_data_center .orange {
    color: #ff6700
  }

  .mi_data_center .tac {
    text-align: center
  }

  .mi_data_center .hide_pc {
    display: none
  }

  .mi_data_center .main_title {
    font-size: 20px;
    color: #333;
    font-weight: normal;
    margin-bottom: 20px;
    border-left: 6px solid #ff6700;
    padding-left: 10px
  }

  .mi_data_center .part_title {
    font-size: 14px;
    color: #333;
    padding: 20px 0;
    border-bottom: 1px solid #e8e8e8;
    margin: 20px 0
  }

  .mi_data_center .inter_pro, .mi_data_center .iot_pro {
    position: relative
  }

  .mi_data_center .del_id_btn.btn_common {
    background-color: #f66;
    float: right
  }

  .mi_data_center .del_account_tips {
    margin: 20px 0
  }

  .mi_data_center .del_account {
    margin-bottom: 160px
  }

  .mi_data_center .no_data_tips {
    padding: 30px 0
  }

  .mi_data_center .item {
    width: 50%;
    margin-bottom: 40px;
    float: left;
    line-height: 50px
  }

  .mi_data_center .item .pro_name {
    display: inline-block;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    float: left
  }

  .mi_data_center .item .icon img {
    width: 50px;
    height: 50px;
    float: left;
    border-radius: 6px;
    margin-right: 30px
  }

  .mi_data_center .item .download_btn, .mi_data_center .item .del_btn {
    float: left;
    margin-top: 13px
  }

  .mi_data_center .item .btn.disable {
    color: #999;
    cursor: not-allowed
  }

  .mi_data_center .item .del_btn.disable {
    width: 145px;
    margin-right: 40px
  }

  .mi_data_center .item .del_btn {
    margin-left: 10px
  }

  .mi_data_center .item .arrow_r {
    display: none
  }

  .mi_data_center .btn {
    padding: 3px 16px;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 8px;
    line-height: 1.25;
    color: #555;
    text-align: center;
    height: 17px;
    overflow: hidden;
    white-space: nowrap;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    width: 50px
  }

  .mi_data_center .btn_common {
    background-color: #ff6700;
    color: #fff !important;
    border: 0 none;
    font-size: 14px;
    min-width: 100px;
    _width: 100px;
    margin: 0 2px;
    text-align: center;
    display: inline-block;
    cursor: pointer
  }

  .mi_data_center .btn_common.disabled {
    color: #ffa98b !important;
    cursor: not-allowed !important
  }

  .mi_data_center .modal_content {
    padding: 20px;
    font-size: 16px
  }

  .mi_data_center .modal_content .modal_title {
    padding-bottom: 10px
  }

  .mi_data_center .del_contract p {
    font-size: 16px;
    line-height: 2;
    text-indent: 35px
  }

  .mi_data_center .go_delete_btn {
    margin: 40px 0;
    padding: 10px 15px;
    font-size: 16px
  }

  .mi_data_center .go_delete_btn.btn_common.disabled {
    color: #ffa98b !important;
    cursor: not-allowed !important
  }

  /*# sourceMappingURL=layout.css.map */
  .listwrap {
    padding-bottom: 15px;
    position: relative
  }

  .tits {
    height: 40px;
    padding-left: 14px;
    line-height: 40px;
    display: inline-block;
    vertical-align: middle;
    border: 1px solid #e8e8e8;
    color: #555;
    cursor: pointer
  }

  .tits tt, .tits p {
    float: left;
    width: 275px;
    border-right: 1px solid #e8e8e8;
    cursor: pointer
  }

  .icon_cirarr {
    float: right;
    background: url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png);
    width: 16px;
    height: 16px;
    margin: 11px 12px 0 12px
  }

  .country-container-panel {
    width: 100%;
    background: #fff;
    height: 270px;
    line-height: 30px;
    border: 1px solid #e8e8e8;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 41px;
    z-index: 98;
    display: none
  }

  .country-container-panel .header, .country-container-panel h6 {
    background: #fcdecc;
    padding-left: 10px;
    margin-bottom: 6px;
    line-height: 30px;
    color: #ef5b00 !important
  }

  .country-container-panel .header {
    cursor: default
  }

  .country-container-panel .record, .country-container-panel p {
    padding: 0 10px;
    line-height: 39px;
    clear: both;
    overflow: hidden;
    color: #000;
    border-bottom: 1px solid #e0e0e0;
    *zoom: 1;
    cursor: pointer
  }

  .country-container-panel .record:hover, .country-container-panel .record.chk, .country-container-panel p:hover, .country-container-panel p.chk {
    background: #eaeaea
  }

  .country-container-panel .record span {
    height: 39px;
    overflow: hidden
  }

  .country-container-panel .record-country {
    float: left;
    max-width: 74%;
    color: #000;
    cursor: pointer
  }

  .country-container-panel .record-code {
    float: right;
    max-width: 20%;
    color: #9d9d9d
  }

  .countrycode-container-usual {
    display: none
  }

  .search-code {
    padding: 10px
  }

  .search-code-input {
    width: 274px;
    height: 22px;
    line-height: 22px;
    padding: 5px 10px 5px 10px;
    display: block;
    border: 1px solid #e0e0e0
  }

  .search-mode .header, .search-mode .record, .search-mode dd {
    display: none
  }

  .search-mode .selected, .search-mode .iselected {
    display: block
  }

  #phone_models .search-code-input {
    width: 304px
  }

  #select_country_code {
    float: right;
    cursor: pointer
  }

  .btn_commom_cancel {
    display: none
  }

  .fixed_countrycode {
    display: none
  }

  .select_country_code_content .external_logo_area {
    display: none
  }

  .icon_arrow {
    float: left;
    margin: 17px 0 0 10px;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border-width: 5px;
    border-style: solid;
    border-color: #9d9d9d transparent transparent transparent
  }

  .listwrap_inside_panel .listwrap {
    float: left
  }

  .listwrap_inside_panel .tits {
    width: 54px;
    text-align: center;
    padding: 0 9px
  }

  .listwrap_inside_panel .tits p {
    width: auto;
    border-right: 0 none
  }

  .listwrap_inside_panel .inputbg {
    float: left
  }

  .listwrap_inside_panel .inputbg input {
    width: 236px
  }

  .listwrap_inside_panel .labelbox {
    margin-left: -1px;
    position: relative;
    z-index: 3
  }

  .listwrap_inside_panel .country-container-panel {
    width: 332px
  }

  .btn_turn {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABGdBTUEAALGPC/xhBQAAAJxJREFUGBl1kLEOgkAQRA9pVUKihTR2FBREPwD/v6ehsDYhoTBWVsAb5AguMMm7I7sz3O0FzrkYOnjDlg409ruxm7MrtKaI4g30w0EyPsAGZCzgBH+ygYUxnNm/fH8gAx2ZQgUNDJqbVVBAxjs84QWT/IC+oKOvUEICdgZKP9k72hm8z1mjbywCRzqrzzMmFFD/HLBcoIUatqR3jnolNxObIsWRIwAAAABJRU5ErkJggg==) no-repeat center center
  }

  .btn_turn {
    float: left;
    width: 11px;
    height: 11px;
    display: block;
    margin: 14px 6px
  }

  .select_cycode {
    position: relative
  }

  .select_cycode .btn_turn, .select_cycode .country_list {
    display: none
  }

  .add_regioncode .tits {
    width: 72px;
    border-right: 0 none;
    padding-left: 0;
    cursor: default
  }

  .add_regioncode .user_input {
    width: 238px
  }

  .add_regioncode .inputbg .search-code-input {
    width: 274px
  }

  .add_regioncode .btn_turn, .add_regioncode .country_list {
    display: block
  }

  .add_regioncode .country_list {
    float: left;
    overflow: hidden;
    cursor: pointer
  }

  .add_regioncode .country_code {
    float: left
  }

  .add_regioncode .animation {
    position: relative;
    -webkit-animation: fade-in ease-in-out .5s;
    animation-name: fade-in;
    animation-timing-function: ease-in-out;
    animation-duration: .5s
  }

  .add_regioncode .icon_arrow {
    margin-left: 6px;
    *position: absolute
  }

  .regbox .country_list {
    width: 48px
  }

  body[class^=ar] .tits, body.iw_IL .tits, body.fa_IR .tits {
    padding: 0 14px 0 0
  }

  body[class^=ar] .tits tt, body[class^=ar] .tits p, body.iw_IL .tits tt, body.iw_IL .tits p, body.fa_IR .tits tt, body.fa_IR .tits p {
    float: right;
    border: 0 none;
    border-left: 1px solid #e8e8e8
  }

  body[class^=ar] .icon_cirarr, body.iw_IL .icon_cirarr, body.fa_IR .icon_cirarr {
    float: left
  }

  body[class^=ar] .country-container-panel, body.iw_IL .country-container-panel, body.fa_IR .country-container-panel {
    right: 0
  }

  body[class^=ar] .country-container, body.iw_IL .country-container, body.fa_IR .country-container {
    left: auto
  }

  body[class^=ar] .country-container .header, body[class^=ar] .country-container h6, body.iw_IL .country-container .header, body.iw_IL .country-container h6, body.fa_IR .country-container .header, body.fa_IR .country-container h6 {
    padding: 0 10px 0 0
  }

  body[class^=ar] .country-container .record-country, body.iw_IL .country-container .record-country, body.fa_IR .country-container .record-country {
    float: right
  }

  body[class^=ar] .country-container .record-code, body.iw_IL .country-container .record-code, body.fa_IR .country-container .record-code {
    float: left
  }

  body[class^=ar] #select_country_code, body.iw_IL #select_country_code, body.fa_IR #select_country_code {
    float: left
  }

  body[class^=ar] .listwrap_inside_panel .listwrap, body.iw_IL .listwrap_inside_panel .listwrap, body.fa_IR .listwrap_inside_panel .listwrap {
    float: right
  }

  body[class^=ar] .listwrap_inside_panel .inputbg, body.iw_IL .listwrap_inside_panel .inputbg, body.fa_IR .listwrap_inside_panel .inputbg {
    float: right
  }

  body[class^=ar] .listwrap_inside_panel .tits, body.iw_IL .listwrap_inside_panel .tits, body.fa_IR .listwrap_inside_panel .tits {
    padding: 0 9px
  }

  body[class^=ar] .listwrap_inside_panel .tits p, body.iw_IL .listwrap_inside_panel .tits p, body.fa_IR .listwrap_inside_panel .tits p {
    border-left: 0 none
  }

  body[class^=ar] .listwrap_inside_panel .labelbox, body.iw_IL .listwrap_inside_panel .labelbox, body.fa_IR .listwrap_inside_panel .labelbox {
    margin-right: -1px
  }

  body[class^=ar] .listwrap_inside_panel .icon_arrow, body.iw_IL .listwrap_inside_panel .icon_arrow, body.fa_IR .listwrap_inside_panel .icon_arrow {
    float: right;
    margin: 17px 10px 0 0
  }

  body[class^=ar] .btn_turn, body.iw_IL .btn_turn, body.fa_IR .btn_turn {
    float: right
  }

  body[class^=ar] .add_regioncode .tits, body.iw_IL .add_regioncode .tits, body.fa_IR .add_regioncode .tits {
    border-right: 1px solid #e8e8e8;
    border-left: 0 none
  }

  body[class^=ar] .add_regioncode .country_list, body.iw_IL .add_regioncode .country_list, body.fa_IR .add_regioncode .country_list {
    float: right
  }

  body[class^=ar] .add_regioncode .country_code, body.iw_IL .add_regioncode .country_code, body.fa_IR .add_regioncode .country_code {
    float: right
  }

  body[class^=ar] .add_regioncode .icon_arrow, body.iw_IL .add_regioncode .icon_arrow, body.fa_IR .add_regioncode .icon_arrow {
    margin: 17px 6px 0 0
  }

  @-webkit-keyframes fade-in {
    from {
      left: -100%
    }
    to {
      left: 0
    }
  }

  @-moz-keyframes fade-in {
    from {
      left: -100%
    }
    to {
      left: 0
    }
  }

  @-o-keyframes fade-in {
    from {
      left: -100%
    }
    to {
      left: 0
    }
  }

  @keyframes fade-in {
    from {
      left: -100%
    }
    to {
      left: 0
    }
  }

  .remain {
    margin-left: 8px;
    vertical-align: middle;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border: 1px solid #e8e8e8
  }

  .remain a {
    color: #000;
    cursor: pointer;
    padding: 0 10px;
    display: block
  }

  .remain a:hover {
    background: #ececec !important;
    color: #888
  }

  .remain .disabled, .remain .noSend {
    background: none !important;
    color: #9d9d9d !important;
    cursor: not-allowed !important
  }

  .remain .disabled:hover, .remain .noSend:hover {
    background: none !important
  }

  .identitypwd .remain {
    display: none
  }

  body[class^=ar] .remain, body.iw_IL .remain, body.fa_IR .remain {
    margin-left: 0px;
    margin-right: 8px
  }

  img {
    vertical-align: middle
  }

  .alg_center {
    text-align: center
  }

  .hidden {
    display: none
  }

  .ff6 {
    color: #ff6700
  }

  .l_block {
    display: block
  }

  .ftnormal {
    font-weight: normal
  }

  .lhtnormal {
    line-height: normal
  }

  .txtindent {
    text-indent: 2em
  }

  .txtindent_half {
    text-indent: 1.5em
  }

  .pdtop20 {
    padding-top: 20px
  }

  .codetip {
    display: none
  }

  .modal_container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%
  }

  .modal_msk {
    background: #333;
    width: 100%;
    height: 100%;
    opacity: .7;
    filter: alpha(opacity=70);
    position: absolute;
    left: 0;
    top: 0
  }

  .modal_tip {
    background: #fff;
    margin: 0 auto;
    padding: 0 14px;
    line-height: 30px;
    border: 6px solid #838383;
    border: 6px solid #d1d1d1 \9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    color: #666;
    position: absolute
  }

  :root .modal_tip {
    border: 6px solid #838383
  }

  .modal_tip_hd {
    height: 42px;
    padding-top: 13px;
    line-height: 42px;
    border-bottom: 1px solid #e6e6e6;
    position: relative
  }

  .modal_tip_title {
    color: #1e1e1e;
    font-size: 15px;
    font-weight: bold
  }

  .modal_tip_close {
    width: 8px;
    height: 8px;
    overflow: hidden;
    position: absolute;
    top: 14px;
    right: 0;
    background: url("https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip.png")
  }

  .acctip_icon, .icon_qst {
    background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip.png);
    _background: url(https://account.xiaomi.com/static/res/6eee68a/passport/HtmlResource/cssSass/images/icon_tip_ie6.png)
  }

  .acctip_icon_1 {
    background-position: -13px 0;
    width: 14px;
    height: 14px;
    margin: -1px 5px 0 0;
    display: inline-block;
    vertical-align: middle
  }

  .acctip_icon_2 {
    background-position: -32px 0;
    width: 14px;
    height: 12px;
    margin-right: 10px;
    overflow: hidden;
    display: inline-block
  }

  .acctip_icon_3, .icon_qst {
    background-position: -13px -15px;
    width: 14px;
    height: 14px;
    margin-right: 5px;
    margin-top: -3px;
    *margin-top: 0px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
  }

  .acctip_icon_4 {
    background-position: 0 -61px
  }

  .acctip_icon_5 {
    background-position: -32px -14px
  }

  .acctip_icon_6 {
    background-position: -58px 0
  }

  .acctip_icon_7 {
    background-position: -58px -62px
  }

  .acctip_icon_8 {
    background-position: 0 -101px;
    width: 14px;
    height: 14px;
    margin-right: 5px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
  }

  .acctip_icon_arrow {
    background-position: 0 -15px;
    width: 5px;
    height: 4px;
    overflow: hidden;
    position: absolute;
    top: 18px;
    right: 10px
  }

  .icon_select, .icon_select_chkbox {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    margin-top: -4px;
    *margin-top: -2px;
    _margin-top: 0;
    display: inline-block;
    vertical-align: middle
  }

  .icon_select {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAcxJREFUOBGdVb1qAkEQ9vYwiBcwXiyuiOGKEJLaIoHUh/U9RSxS5Ql8BIsUpsgLHAlCGhEby1xhnZ9CvBDQQs5IvEMQNPMdrviz/twt6O7OzPfN7O7MnBTbMiqVylEikThljB3CbDKZDEej0bdpmr+bYJJIUavVLjKZTCGZTF6nUqmTeDyuwm48HruDweDH9/23Xq9XzufzHyL8XFYsFplt2/etVuuTQFOKaLo6IIMONrC1LOtgTkALmW+gyOVyT5qm3em6rlFUMUlaPwBk0KXT6WNZlm/I4Vk2m31tNBpTzhXM8NbpdP5WI9q1b7fbHrBLZPV6/RJH2AXepAcW9w5Shj8Kv0BHPcc6ygAWjwgsQ2ooinJF6RGFK8AAi4wAF0OeITVED7CvB2DBEeQsgRSeZ/sSiOzAgQII7lBkEFUGQg8VEJWA48CB0mSoTZQTpQTXhZ6BBQe4AnCz2SyhnKIOYMEBsuAOXdd97Ha7X6FDmwGARbNYwqN8UEZho0S5Lpbe/JWr1WqJPD3Tb7jkacvGcRyfgnih+UFoho4Db2HaF1reItl6fyItmoWqqrebGqzneXa/3y8bhvG+SIa1kJAb8U8A7ZWZzNv1CfgHv1r3E9DWv4gAAAAASUVORK5CYII=);
    _background: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/6af2993/passport/acc-2014/img/select1.png")
  }

  .icon_select_chkbox {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAF17LrMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMzM5MDRBMzJBMTUxMUU1QTI0OUM0OTUzMzE5Nzg4NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMzM5MDRBNDJBMTUxMUU1QTI0OUM0OTUzMzE5Nzg4NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMzkwNEExMkExNTExRTVBMjQ5QzQ5NTMzMTk3ODg3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMzMzkwNEEyMkExNTExRTVBMjQ5QzQ5NTMzMTk3ODg3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OOwltQAAAORJREFUeNpi/Pfv36NHjxiA4MGDB//BgIkBBgACiBEoBqKAgkAKKg4QQAiF6MohACCAGIHmAU2FcHh5eaG64QBdPSE+QAAxAM37jwP8+fOHCW4XJmBmZmZiwAsISQPd//fvX6xyr169Agggxrdv337+/BmLPiYmGRkZBqDzcLkc6CkmoPNwWQz0FIUuH0hpYNBglQAGJR8fH0CAgUINGDLCwsJ4AgBTJ1AXKysrEzC8xcTEiNcJSQZALZ8+fWJioACMaiZVMxDgyjz4oxqokRGYA96/f//161c8+RvTQm5ubkFBQQDVx6IuEktqHwAAAABJRU5ErkJggg==)
  }

  .disten30x103 {
    padding: 30px 0 0 40px;
    color: #333
  }

  .disten30x25 {
    padding: 30px 15px 0 15px
  }

  .disten30x14 {
    padding: 30px 0 0 14px
  }

  .disten30x35 {
    padding: 30px 0 0 35px
  }

  .disten20x10 {
    padding: 20px 0 10px 0
  }

  .disten30x40 {
    padding: 30px 25px 25px
  }

  .mar30 {
    padding-top: 30px
  }

  .mar20 {
    padding-top: 20px
  }

  .mar17 {
    padding-bottom: 17px
  }

  .mar55 {
    padding: 0 55px
  }

  .mar10, .pt10 {
    padding-top: 10px
  }

  .lh20 {
    line-height: 20px
  }

  .marl15 {
    margin-left: 15px
  }

  .mardoub30 {
    padding: 0 30px
  }

  .color333 {
    color: #333
  }

  .style_h4 {
    font-size: 15px;
    color: #333;
    font-weight: bold
  }

  .mod_acc_tip {
    background: #fff;
    width: 412px;
    min-height: 300px;
    height: auto;
    padding: 0 14px 30px;
    line-height: 20px;
    border: 1px solid #838383;
    border: 1px solid #d1d1d1 \9;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
    color: #666;
    position: relative;
    z-index: 4
  }

  .mod_acc_tip input {
    display: inline-block
  }

  :root .mod_acc_tip {
    border: 1px solid #838383
  }

  .wth482 {
    width: 482px
  }

  .mod_tip_hd {
    height: 42px;
    padding-top: 13px;
    line-height: 42px;
    border-bottom: 1px solid #e6e6e6;
    position: relative
  }

  .mod_tip_hd h4 {
    font-size: 15px;
    color: #1e1e1e
  }

  .btn_mod_close {
    width: 22px;
    height: 22px;
    overflow: hidden;
    position: absolute;
    top: 7px;
    right: -7px;
    cursor: pointer;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzNFMjE1NzM2QkQwMTFFNEJFNkE4OUZCNzE1NkM1NTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzNFMjE1NzQ2QkQwMTFFNEJFNkE4OUZCNzE1NkM1NTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDM0UyMTU3MTZCRDAxMUU0QkU2QTg5RkI3MTU2QzU1NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDM0UyMTU3MjZCRDAxMUU0QkU2QTg5RkI3MTU2QzU1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjYX3K8AAAA+SURBVHjaYjxz5sx/BghgZEAFYHEmdAF0NhOazv9oChmZcBgPF2NiIACYsNiP4cj/aMaiuIkJ3U50NkCAAQB+HAxztK/g2QAAAABJRU5ErkJggg==);
    background-repeat: no-repeat;
    background-position: center;
    _background: none;
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/6a9aa2d/passport/acc-2014/img/n_close.png");
    _cursor: pointer
  }

  .btn_mod_close span {
    display: none
  }

  .mod_tip_bd h3 {
    font-size: 16px;
    padding-bottom: 10px;
    color: #333
  }

  .mod_tip_bd h4 {
    font-size: 15px;
    padding-bottom: 10px;
    color: #333
  }

  .mod_tip_bd h6 {
    padding-bottom: 20px;
    color: #333
  }

  .modify_pwd {
    padding: 30px 40px 0
  }

  .modify_pwd dt {
    font-size: 15px;
    color: #555;
    font-weight: bold;
    line-height: 30px
  }

  .modify_pwd label {
    margin-bottom: 6px
  }

  .modify_pwd input {
    width: 254px
  }

  .modal_container .external_logo_area {
    display: none
  }

  .milogo_status .external_logo_area {
    display: block
  }

  .code_input, .codetip input {
    width: 75px
  }

  .chkcode_img {
    vertical-align: top
  }

  .fixdisten a {
    margin: 0
  }

  .fixdisten .btn1 {
    margin-right: 4px;
    *margin-right: 2px
  }

  .txt_ff6 {
    padding: 20px 0 10px;
    text-align: center;
    font-size: 18px;
    color: #ff6700
  }

  .input_bg {
    vertical-align: middle;
    margin-bottom: 6px
  }

  .input_bg input {
    width: 130px
  }

  .input_bg .remain_input {
    width: 140px
  }

  .zh_CN .input_bg .resendinput, .zh_TW .input_bg .resendinput, .zh_HK .input_bg .resendinput {
    width: 150px
  }

  .in_ID .input_bg .remain_input {
    width: 120px
  }

  .inputsend {
    margin-bottom: 10px
  }

  .identitypwd .resendinput {
    width: 310px !important
  }

  .set_qst_tit {
    width: 295px;
    margin-bottom: 6px;
    padding-left: 0;
    position: relative;
    color: #333;
    overflow: hidden
  }

  .set_qst_tit p {
    width: 244px;
    padding-left: 10px
  }

  .set_qst_tit span {
    float: left;
    width: 80%
  }

  .set_qst_tit em {
    float: right;
    margin-right: 10px
  }

  .set_qst_list {
    background: #fff;
    width: 275px;
    height: 186px;
    line-height: 30px;
    border: 1px solid #e8e8e8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    overflow-x: hidden;
    overflow-y: auto;
    display: none;
    cursor: pointer;
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 9
  }

  .set_qst_list h6, .set_qst_list p {
    padding-left: 10px
  }

  .set_qst_list p:hover, .set_qst_list .chk {
    background: #eaeaea
  }

  .set_qst_list h6 {
    padding-bottom: 0
  }

  .setbackphone .set_qst_list, .setbackphone .country-container {
    height: 156px
  }

  .ans_qst {
    padding-bottom: 20px
  }

  .success {
    padding-top: 50px
  }

  .security {
    padding-top: 35px
  }

  .intro {
    margin-top: 10px;
    line-height: 20px
  }

  .notice {
    padding-top: 20px
  }

  .newtab {
    padding: 15px 0 27px
  }

  .newtab a {
    background: #fff;
    width: 173px;
    height: 52px;
    margin-right: 10px;
    line-height: 52px;
    text-align: center;
    border: 1px solid #e8e8e8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px;
    font-size: 15px;
    color: #ff6700;
    display: inline-block;
    position: relative
  }

  .newtab a:hover, .newtab a.now {
    background: #ff6700;
    border: 1px solid #ff6700;
    color: #fff
  }

  .newtab a:hover .acctip_icon_4, .newtab a.now .acctip_icon_4 {
    background-position: 0 -37px
  }

  .newtab a:hover .acctip_icon_5, .newtab a.now .acctip_icon_5 {
    background-position: -32px -38px
  }

  .newtab a:hover i, .newtab a.now i {
    display: block
  }

  .newtab em {
    width: 20px;
    height: 23px;
    margin-right: 14px;
    display: inline-block;
    vertical-align: middle
  }

  .newtab i {
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border-width: 6px;
    border-style: solid;
    border-color: #ff6700 #fff #fff #fff;
    position: absolute;
    top: 53px;
    left: 50%;
    display: none
  }

  .tabcon {
    line-height: 28px;
    display: none
  }

  .tabcon span, .tabcon a {
    margin-left: 7px
  }

  .tabcon span {
    color: #333
  }

  .tabcon a {
    color: #54aa35;
    font-weight: bold
  }

  .disten30x76 {
    padding-top: 10px;
    color: #666;
    max-width: 300px;
    margin: 0 auto
  }

  .disten30x76 label {
    margin-left: 6px
  }

  .disten30x76 input {
    width: 108px
  }

  .disabled {
    color: #ffa98b;
    cursor: default
  }

  .disten30x14 p {
    line-height: 20px
  }

  .disten30x14 .tip_btns {
    padding: 7px 0 25px;
    text-align: left
  }

  .plan {
    margin: 10px -10px 0 0
  }

  .plan li {
    float: left;
    width: 184px;
    margin-right: 10px;
    padding: 17px 17px 0;
    border: 1px solid #ffe2d8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px
  }

  .plan dt {
    margin-bottom: 12px;
    line-height: 53px;
    font-size: 16px;
    color: #ff6700
  }

  .plan em {
    width: 53px;
    height: 53px;
    margin-right: 9px;
    display: inline-block;
    vertical-align: middle
  }

  .plan .alink {
    padding-bottom: 20px
  }

  .alink {
    color: #333
  }

  .alink a {
    margin-right: 10px;
    color: #333;
    font-weight: bold
  }

  .alink p {
    margin-top: 22px;
    line-height: 22px
  }

  .alink span {
    color: #54aa35
  }

  .fb_mobile p {
    margin-top: 0
  }

  .security_keys {
    width: 360px;
    margin: 0 auto;
    padding: 30px 0 0 0
  }

  .mi_code {
    width: 322px;
    margin: 10px 0 15px;
    padding: 25px 18px;
    border: 1px solid #e8e8e8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    border-radius: 4px
  }

  .mi_code span {
    width: 109px;
    padding: 0 25px;
    line-height: 35px;
    color: #333;
    display: inline-block
  }

  .mi_code .out {
    color: #9d9d9d;
    text-decoration: line-through
  }

  .lh20 .ff6 {
    margin: 0 5px;
    font-weight: bold
  }

  .tabbar_panel {
    padding-top: 30px
  }

  .binding {
    padding: 30px 30px 0
  }

  .binding dt {
    padding-bottom: 10px;
    font-size: 15px;
    color: #555;
    font-weight: bold
  }

  .binding dd {
    position: relative
  }

  .binding input {
    width: 275px
  }

  .binding .chkcode input {
    width: 135px
  }

  .binding img {
    display: inline-block
  }

  .zindex_4 {
    z-index: 4
  }

  .chkcode input {
    width: 115px
  }

  .fixpos {
    margin: 10px 26px 0;
    position: relative;
    overflow: hidden
  }

  .f_n {
    float: none;
    display: inline-block
  }

  .w200 input {
    width: 200px
  }

  .doub_ln {
    margin-bottom: 10px;
    line-height: 20px;
    word-break: break-all
  }

  .disten30x90 {
    padding: 30px 50px 0 50px
  }

  .set_qst_block li {
    padding-bottom: 10px
  }

  .set_qst_block li input {
    width: 290px;
    *padding-top: 6px
  }

  .set_qst_block li p {
    margin-bottom: 5px
  }

  .codetip input {
    width: 75px
  }

  .identity_way_list h4 {
    padding-left: 30px
  }

  .verify-mod-list-empty h4 {
    padding-left: 0
  }

  .md_way {
    padding: 0 30px;
    color: #666
  }

  .md_way li {
    margin-top: 10px;
    cursor: pointer
  }

  .md_way .now .acctip_icon_8 {
    background-position: 0 -85px
  }

  .md_way .item {
    font-size: 14px
  }

  .md_way .text {
    padding: 5px 0 0 19px;
    color: #9d9d9d
  }

  .md_unavailable li {
    list-style-type: disc;
    cursor: default
  }

  .fixbottom {
    width: 100%;
    padding-top: 20px
  }

  .fixbottom a:hover {
    text-decoration: underline
  }

  .fixbottom .txt_qst {
    margin-top: 0;
    margin-bottom: 10px
  }

  .txt_qst {
    margin-top: 20px;
    text-align: center
  }

  .txt_qst a:hover {
    text-decoration: underline
  }

  .btn_disable_token {
    _width: auto
  }

  /*!登录保护添加信任设备*/
  .icon_true, .icon_false, .icon_circle {
    width: 15px;
    height: 15px;
    margin: -3px 6px 0 0;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle
  }

  .icon_true, .icon_false {
    background: url(https://account.xiaomi.com/static/res/0eeaaed/passport/oauth/images/icon_user.png);
    _height: 19px
  }

  .icon_true {
    background-position: -17px 0;
    _background-position: -17px 3px
  }

  .icon_false {
    background-position: -33px 0;
    _background-position: -33px 3px
  }

  .mod_trust {
    padding-top: 10px
  }

  .token_chk_area {
    cursor: pointer;
    margin-bottom: 10px;
    display: inline-block
  }

  .token_chk_area .icon_token_chk {
    float: left;
    margin: 2px 10px 0 0
  }

  .token_chk_area h4 {
    display: inline-block
  }

  .icon_mibao {
    background: url(https://account.xiaomi.com/static/res/6a82f94/passport/HtmlResource/cssSass/images/icon_mibao.png);
    width: 140px;
    height: 140px;
    margin: 0 auto
  }

  .icon_mibao1 {
    background-position: 0px 0
  }

  .icon_mibao2 {
    background-position: -140px 0
  }

  .icon_mibao3 {
    background-position: -280px 0
  }

  .icon_mibao4 {
    background-position: -420px 0
  }

  .mod_cancel {
    padding: 15px 10px 0;
    font-size: 14px
  }

  .mod_cancel h5 {
    line-height: 20px;
    color: #333
  }

  .mod_cancel p {
    font-size: 14px
  }

  .tip_cancel {
    line-height: normal;
    display: none
  }

  .tip_agree {
    padding-top: 20px;
    cursor: pointer
  }

  .icon_circle {
    background: url(https://account.xiaomi.com/static/res/cdc1fe6/passport/acc-2014/img/icon_circle.png)
  }

  .cancel_disabled {
    padding: 40px 20px;
    font-size: 14px
  }

  .flush_none {
    padding-left: 50px;
    padding-right: 50px
  }

  .rember_mibaoqst {
    padding: 30px 20px 0 20px
  }

  .set_mibao {
    width: 302px;
    margin: 0 auto
  }

  .set_mibao li {
    padding-bottom: 15px
  }

  .set_mibao p {
    margin-bottom: 5px
  }

  .set_mibao .i_selectbox {
    float: none;
    margin-bottom: 5px
  }

  .set_mibao .input_bg {
    display: block
  }

  .set_mibao .input_bg input {
    width: 280px;
    display: block
  }

  .set_mibao .i_selectoption {
    width: 100%
  }

  .set_mibao .i_currentselected {
    padding-right: 20px
  }

  .hide {
    display: none
  }

  .setbakphone_error {
    margin-left: 62px
  }

  .fail_identify {
    width: 300px;
    margin: 0 auto
  }

  .mailstep1, .phonestep1 {
    padding: 30px 58px 0
  }

  .mailstep2, .phonestep2 {
    padding: 30px 55px 0 55px
  }

  .mailstep2 em, .phonestep2 em {
    color: #ff6700
  }

  .regbox {
    width: 332px;
    margin: 0 auto;
    padding: 40px 0;
    line-height: 20px
  }

  .inputbg {
    padding-bottom: 5px
  }

  .inputbg input {
    width: 310px;
    *margin-top: 8px
  }

  .w300 {
    width: 300px;
    margin: 0 auto
  }

  .contacts_box {
    padding-top: 20px;
    line-height: 42px
  }

  .contacts_box dt, .contacts_box dd {
    float: left;
    margin-bottom: 10px
  }

  .contacts_box input {
    width: 200px;
    *width: 210px
  }

  .contacts_box .chkcode input {
    width: 150px
  }

  .getaddress {
    width: 340px;
    margin: 0 auto
  }

  .getaddress .regbox {
    padding: 10px 0
  }

  .getaddress .inputcode {
    padding-top: 10px
  }

  .getaddress .chkcode .code {
    width: 170px
  }

  .recycle_phone {
    margin-top: 80px
  }

  .identity_phone_effect {
    width: 300px;
    margin: 0 auto
  }

  .description {
    padding: 10px 0 15px 0
  }

  .txt_link {
    color: #9d9d9d
  }

  .txt_link a:hover {
    text-decoration: underline
  }

  .twostep_trustinfo, .n_checked {
    cursor: pointer
  }

  .twostep_trustinfo label, .n_checked label {
    cursor: pointer
  }

  .twostep_trustinfo.now .icon_select, .n_checked.now .icon_select {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAk5JREFUOBGVlctrU1EQxn/3tqZVKxQRCirdWRRX4sKuK7j1GYoLN4JYULT6FwiuFSOiEf+A+iq6FwV3uhIXWqmugigVKT5iTUKa6zfn5CQ3MUnTgXPPa+Y7c+bMNzeihyRHGGWAcSJGnFpCkVUK0VN+dDOLOm0kx9lNhhmBTartFODWOuCyAD+rvaJCPprnQ7t9C2ACMdPMCuys2oRmCKxVpERNrcKi2l2Nb0WPNKpLQz3JCiLmHkOcYJhNQaFnX1YIysxzn9MCsmOcD94m5ryAjvUNZlZDim2GrLuVR/GAyVH2uGuawnrFbqMQubjL1qJkJ81occKN1/rEg5Bpi4jZ2iNKYpcagxxIXb475OgOuPIern6UpYCDmFvKCMOKXZ751Ajbvo8GWudbxuDyCxjbBd8+6QmqzX17WsNQzsbybHMjz4LK/izc/AVTF/zKyDaBPReYolJ4A7cPB81mb7kqAqT8bu6xIiJs2AjTOeWhPJ08Bdv3wpd3kDsEf7sSRf7V+EPCcgoOFp7B3Dm/lL0G4/tgaRGuH4Ti9xbVxsQwRM3YuOnoZAxIy8s78PCSVrTx86vApuD3UlqjOTZbT8mCY0pykhvKposK6v+SUWpWS62P0K61qoUVctEcsz4PS+KkcbOTVIq9wczG8zpvQwcYPWHBEb2kc9YrxmcViVB5vIcG8kDXLvNYTS71KeaAFQdVnGDRSBurFkmNM5R4K4X+y5ccCZXGQN2jBPTQu2IxLNBuBbbKa3mWd6EKRvW+I2DQafwCjE0mlrNr/AL+AbcOsj+c24+/AAAAAElFTkSuQmCC);
    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="https://account.xiaomi.com/static/res/6af2993/passport/acc-2014/img/select2.png")
  }

  .twostep_trustinfo {
    margin-top: 20px;
    display: inline-block
  }

  .n_checked.now .icon_select_chkbox {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDlCNzFDQTI5NTkxMUU1QTI0OUM0OTUzMzE5Nzg4NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMzM5MDRBMDJBMTUxMUU1QTI0OUM0OTUzMzE5Nzg4NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwOUI3MUM4Mjk1OTExRTVBMjQ5QzQ5NTMzMTk3ODg3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwOUI3MUM5Mjk1OTExRTVBMjQ5QzQ5NTMzMTk3ODg3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hADDFAAAAWRJREFUeNpi/J/GwMbAwPATiBmYYAwYBw4AAogRqOw/QrR4PwNcBCCA4AxkgNA8EyEHEEAglW+BtBCSwkl4tLOwQXhZG5AE//xiYEhcxMAwLYABp+0AAYTNIqyACa+irI1wJguKBMhP5dIMDKkrGRg+Pge6xR8zoIixeiIxCgECCGQiSGEeHjXvgViCWKvfMTEQB4RwK2TlZGDQ8WTAmlbggI2LgWHKNwaGG3uxKAzpYWBovM7AwMHHwDD5KwNDJiskbjECfE0JA8PfP8DA+ghUBBT+95cBa8okJsAZqKmwCyDAQFZPADLyGagDOon2C7W9QkMDQYmgYDckz2SsJdJAuwwGhoarDAx8Eggxdh4GhpJDkMTyHZgWstkZGGYEY2hlwWrgoRkMDKJKDAzdwNz66g7EAHljBobTy7EmKtISWNoqoCqgR2aH4zWI5BRLSqS8o6J54AJCElQ4Q4sWcsF7qBmSAEIba6NlJMqdAAAAAElFTkSuQmCC)
  }

  .logout_area {
    padding: 20px 20px 0
  }

  .num_list {
    padding: 0 15px 10px
  }

  .num_list li {
    padding-top: 6px
  }

  .logout_unable, .confirm_txt {
    padding: 10px 0 30px 0
  }

  .icon_warning {
    display: none
  }

  .del_account_devices_con {
    display: none
  }

  .del_account_devices_con .hd {
    font-size: 14px
  }

  .online_devices {
    padding-top: 10px
  }

  .online_devices li {
    color: #ff6700;
    float: left;
    width: 50%
  }

  .tip_thirdbind {
    width: 280px;
    margin: 0 auto;
    padding-top: 30px;
    color: #333
  }

  .bindtip_imgarea {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    overflow: hidden
  }

  .bindtip_imgarea img {
    width: 100%;
    height: 100%
  }

  .thirdbind_userinfo {
    padding: 6px 0 10px;
    text-align: center
  }

  .auth_txt_box {
    width: 240px;
    margin: 0 auto;
    padding-top: 10px
  }

  .auth_cancel_list {
    max-height: 160px;
    margin: 10px 0 20px;
    padding-left: 15px;
    color: #999;
    overflow: auto
  }

  .auth_cancel_list li {
    list-style: disc
  }

  .bind_auth_ctr, .fixed_ctr {
    position: fixed
  }

  .bind_auth_ctr .mod_acc_tip, .fixed_ctr .mod_acc_tip {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -206px
  }

  .privacy_box {
    margin-top: 20px;
    padding-top: 10px;
    text-align: center;
    border-top: 1px solid #e6e6e6
  }

  .identify_newph {
    padding: 0 20px
  }

  .identity_ph_lists {
    width: 300px;
    margin: 0 auto 10px
  }

  .identity_ph_lists li {
    float: left;
    width: 50%
  }

  .identity_ph_lists .n_checked {
    padding: 6px 0
  }

  .identity_ph_fill {
    width: 250px;
    margin: 10px auto 0
  }

  .identity_ph_fill li {
    margin-bottom: 10px;
    line-height: 42px
  }

  .identity_ph_fill li input {
    width: 150px
  }

  .identity_ph_fill .fill_contacts_input {
    margin-left: 10px
  }

  .idnumberbox {
    padding: 20px 60px 0
  }

  .idnumberlist {
    padding: 5px 0 0 15px
  }

  .idnumberlist li {
    list-style-type: disc
  }

  .ph_panel_tit {
    padding: 20px 20px 10px 60px;
    font-size: 14px
  }

  .ph_list_panel {
    padding: 0 60px
  }

  .ph_del_panel {
    padding: 0 40px
  }

  .ph_del_tit {
    padding-top: 20px;
    font-size: 14px;
    color: #333
  }

  .ph_del_box {
    padding-top: 10px
  }

  .ph_del_box p {
    margin-bottom: 5px
  }

  .ph_del_success {
    padding-top: 20px
  }

  .fill_center_box .labelbox {
    margin: 0 5px
  }

  .fill_center_box input {
    width: 190px
  }

  .fill_center_box input, .fill_center_box span {
    font-size: 15px
  }

  .ph_del_confirm {
    padding-top: 30px
  }

  .ph_del_confirm .ph_del_tit {
    padding-bottom: 30px
  }

  .pt_BR .inputsend .input_bg input {
    width: 110px
  }

  .binding .country-container {
    width: 275px
  }

  .phonestep1 .country-container {
    height: 186px
  }

  body[class^=ar] .disten30x14, body[class=iw_IL] .disten30x14, body[class=fa_IR] .disten30x14 {
    padding: 30px 14px 0 0
  }

  body[class^=ar] .disten30x35, body[class=iw_IL] .disten30x35, body[class=fa_IR] .disten30x35 {
    padding: 30px 35px 0 0
  }

  body[class^=ar] .marl15, body[class=iw_IL] .marl15, body[class=fa_IR] .marl15 {
    margin-left: 0;
    margin-right: 15px
  }

  body[class^=ar] .btn_mod_close, body[class=iw_IL] .btn_mod_close, body[class=fa_IR] .btn_mod_close {
    right: auto;
    left: 0
  }

  body[class^=ar] .acctip_icon_1, body[class=iw_IL] .acctip_icon_1, body[class=fa_IR] .acctip_icon_1 {
    margin: -1px 0 0 5px
  }

  body[class^=ar] .acctip_icon_2, body[class=iw_IL] .acctip_icon_2, body[class=fa_IR] .acctip_icon_2 {
    margin-right: 0;
    margin-left: 10px
  }

  body[class^=ar] .acctip_icon_3, body[class^=ar] .icon_qst, body[class=iw_IL] .acctip_icon_3, body[class=iw_IL] .icon_qst, body[class=fa_IR] .acctip_icon_3, body[class=fa_IR] .icon_qst {
    margin: -3px 0 0 5px
  }

  body[class^=ar] .acctip_icon_8, body[class=iw_IL] .acctip_icon_8, body[class=fa_IR] .acctip_icon_8 {
    margin: 0 0 0 5px
  }

  body[class^=ar] .icon_select, body[class^=ar] .icon_select_chkbox, body[class=iw_IL] .icon_select, body[class=iw_IL] .icon_select_chkbox, body[class=fa_IR] .icon_select, body[class=fa_IR] .icon_select_chkbox {
    margin-right: 0;
    margin-left: 5px
  }

  body[class^=ar] .fixdisten .btn1, body[class=iw_IL] .fixdisten .btn1, body[class=fa_IR] .fixdisten .btn1 {
    margin-right: 0;
    margin-left: 4px;
    *margin-right: 0;
    *margin-left: 2px
  }

  body[class^=ar] .set_qst_tit, body[class=iw_IL] .set_qst_tit, body[class=fa_IR] .set_qst_tit {
    padding-right: 0
  }

  body[class^=ar] .set_qst_tit p, body[class=iw_IL] .set_qst_tit p, body[class=fa_IR] .set_qst_tit p {
    padding: 0 10px 0 0;
    border: 0 none;
    border-left: 1px solid #e8e8e8
  }

  body[class^=ar] .set_qst_tit span, body[class=iw_IL] .set_qst_tit span, body[class=fa_IR] .set_qst_tit span {
    float: right
  }

  body[class^=ar] .set_qst_tit em, body[class=iw_IL] .set_qst_tit em, body[class=fa_IR] .set_qst_tit em {
    float: left;
    margin: 0 0 0 30px
  }

  body[class^=ar] .set_qst_list h6, body[class^=ar] .set_qst_list p, body[class=iw_IL] .set_qst_list h6, body[class=iw_IL] .set_qst_list p, body[class=fa_IR] .set_qst_list h6, body[class=fa_IR] .set_qst_list p {
    padding-left: 0;
    padding-right: 10px
  }

  body[class^=ar] .newtab a, body[class=iw_IL] .newtab a, body[class=fa_IR] .newtab a {
    margin: 0 0 0 10px
  }

  body[class^=ar] .newtab em, body[class=iw_IL] .newtab em, body[class=fa_IR] .newtab em {
    margin: 0 0 0 14px
  }

  body[class^=ar] .tabcon span, body[class^=ar] .tabcon a, body[class=iw_IL] .tabcon span, body[class=iw_IL] .tabcon a, body[class=fa_IR] .tabcon span, body[class=fa_IR] .tabcon a {
    margin: 0 7px 0 0
  }

  body[class^=ar] .disten30x76 label, body[class=iw_IL] .disten30x76 label, body[class=fa_IR] .disten30x76 label {
    margin-left: 0;
    margin-right: 6px
  }

  body[class^=ar] .disten30x14 .tip_btns, body[class=iw_IL] .disten30x14 .tip_btns, body[class=fa_IR] .disten30x14 .tip_btns {
    text-align: right
  }

  body[class^=ar] .identity_way_list h4, body[class=iw_IL] .identity_way_list h4, body[class=fa_IR] .identity_way_list h4 {
    padding-left: 0;
    padding-right: 30px
  }

  body[class^=ar] .verify-mod-list-empty h4, body[class=iw_IL] .verify-mod-list-empty h4, body[class=fa_IR] .verify-mod-list-empty h4 {
    padding-left: 0
  }

  body[class^=ar] .icon_true, body[class^=ar] .icon_false, body[class^=ar] .icon_circle, body[class=iw_IL] .icon_true, body[class=iw_IL] .icon_false, body[class=iw_IL] .icon_circle, body[class=fa_IR] .icon_true, body[class=fa_IR] .icon_false, body[class=fa_IR] .icon_circle {
    margin: -3px 6px 0 0
  }

  body[class^=ar] .token_chk_area .icon_token_chk, body[class=iw_IL] .token_chk_area .icon_token_chk, body[class=fa_IR] .token_chk_area .icon_token_chk {
    float: right;
    margin: 2px 0 0 10px
  }

  body[class^=ar] .set_mibao .i_currentselected, body[class=iw_IL] .set_mibao .i_currentselected, body[class=fa_IR] .set_mibao .i_currentselected {
    padding: 0 0 0 20px
  }

  body[class^=ar] .contacts_box dt, body[class^=ar] .contacts_box dd, body[class=iw_IL] .contacts_box dt, body[class=iw_IL] .contacts_box dd, body[class=fa_IR] .contacts_box dt, body[class=fa_IR] .contacts_box dd {
    float: right
  }

  body[class^=ar] .auth_cancel_list, body[class=iw_IL] .auth_cancel_list, body[class=fa_IR] .auth_cancel_list {
    padding-left: 0;
    padding-right: 15px
  }

  body[class^=ar] .identity_ph_lists li, body[class=iw_IL] .identity_ph_lists li, body[class=fa_IR] .identity_ph_lists li {
    float: right
  }

  body[class^=ar] .identity_ph_fill .fill_contacts_input, body[class=iw_IL] .identity_ph_fill .fill_contacts_input, body[class=fa_IR] .identity_ph_fill .fill_contacts_input {
    margin-left: 0;
    margin-right: 10px
  }

  body[class^=ar] .idnumberlist, body[class=iw_IL] .idnumberlist, body[class=fa_IR] .idnumberlist {
    padding: 5px 15px 0 0
  }

  #verify-mod-InstalledApp .tip_btns, #verify-mod-ContactName .tip_btns {
    padding: 0px !important
  }

  .select_apps, .select_contacts {
    margin: 0 auto;
    min-width: 332px;
    max-width: 400px
  }

  .choose_app_item, .choose_contact_item {
    display: inline-block;
    *display: inline;
    zoom: 1;
    width: 60px;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
    background-color: transparent;
    height: 60px;
    margin-bottom: 40px;
    border: 2px solid transparent;
    padding: 5px;
    position: relative;
    vertical-align: top;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: 0 none
  }

  .choose-item-num {
    color: #ff6700
  }

  .choose_app_item.now {
    border-radius: 14px;
    border: 2px solid #ff6700
  }

  .choose_app_item img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px
  }

  .choose_app_item .appName {
    color: #333;
    padding-top: 10px;
    max-height: 40px;
    overflow: hidden
  }

  .app_tips, .contact_tips {
    color: #999;
    padding-top: 10px
  }

  #verify-mod-InstalledApp .err_tip, #verify-mod-ContactName .err_tip {
    max-width: 80%;
    margin: 0 auto
  }

  .now .chosen_icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NDBGQTRCM0MwNDQxMUU2OEQxRDlGODUwMjI2MThEQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NDBGQTRCNEMwNDQxMUU2OEQxRDlGODUwMjI2MThEQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0MEZBNEIxQzA0NDExRTY4RDFEOUY4NTAyMjYxOERDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0MEZBNEIyQzA0NDExRTY4RDFEOUY4NTAyMjYxOERDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q3hFqgAAAE5QTFRF//Dl0JZtzqKB0ZNn6nQj1L2qzqF/0JVq43oxz5hw5Hgu07qm+Onfzp981b+t+moI0bSe07uo////9ufc0pJk0Jdt9efc8ePZ/2cA////Ui6qXQAAABp0Uk5T/////////////////////////////////wAUIgDaAAAAoklEQVR42ozQ2Q6CUAyE4VHBXXH3zPu/qIKAhrP496ZJ86XpVB4rFEuMBQux4B7+dx8IXAeJayFybzidb04pF8OD1CRcBJfSPeWsyM2SboC3qmvzrOthpce67IaNR123rVvl3Hhjreeu5L5hal20yLuf1Od9yU3fk3U5aAgNoSE0hIbQEBpCQ2gIDaEhNISG0BAaQkNoCA2hITSEhpA5vwQYAP0/laFBZvKAAAAAAElFTkSuQmCC) no-repeat top left;
    width: 40px;
    height: 40px;
    display: inline-block;
    *display: inline;
    zoom: 1;
    vertical-align: middle;
    position: absolute;
    left: 0px;
    top: -2px
  }

  .choose_contact_item.now {
    background-color: #ff6700;
    border-radius: 50%;
    border: 2px solid #ff6700;
    color: #fff
  }

  .choose_contact_item {
    line-height: 60px;
    border-radius: 50%;
    border: 2px solid #e3e3e3;
    margin-bottom: 30px
  }

  .choose_contacts_area {
    margin-top: 20px
  }

  .choose_contact_item.now .chosen_icon {
    display: none
  }

  .mod.inputsend {
    height: auto
  }

  .mod.inputsend .input_bg {
    margin-bottom: 0
  }

  .forget_panel {
    text-align: center
  }

  .twbox .tits {
    display: none
  }

  /*# sourceMappingURL=modacctip.css.map */
  html, body, h1, h2, h3, h4, h5, h6, blockquote, p, pre, dl, dd, ol, ul, li, a, span, caption, th, td, form, fieldset, legend, input, button, textarea, address {
    margin: 0;
    padding: 0
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%
  }

  ol, ul {
    list-style: none
  }

  li {
    list-style: none
  }

  fieldset, img {
    border: 0
  }

  em, tt, i {
    font-style: normal;
    font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體", "儷黑 Pro", sans-serif
  }

  address, cite, dfn, em, var {
    font-style: normal
  }

  code, kbd, pre, samp {
    font-family: courier new, courier, monospace
  }

  input, button, textarea, select {
    font-size: 100%
  }

  input, button, select, textarea {
    outline: none
  }

  textarea {
    resize: none
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    font-size: inherit
  }

  abbr[title] {
    border-bottom: 1px dotted;
    cursor: help
  }

  a, a:hover {
    text-decoration: none
  }

  a, label, :focus {
    outline: 0 none
  }

  a, img, input {
    border: 0 none
  }

  s {
    font-style: normal;
    text-decoration: none
  }

  body {
    font-size: 14px;
    font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", "微軟正黑體", "儷黑 Pro", sans-serif
  }

  button, input, select, textarea {
    font-family: arial, "Hiragino Sans GB", "Microsoft YaHei", sans-serif
  }

  input::-moz-placeholder, textarea::-moz-placeholder {
    color: #3b3b3b;
    font-weight: normal
  }

  ::-webkit-input-placeholder {
    color: #3b3b3b;
    font-weight: normal
  }

  input:-ms-input-placeholder {
    color: #3b3b3b;
    font-weight: normal
  }

  ::-ms-clear {
    display: none
  }

  ::-ms-reveal {
    display: none
  }

  .clearfix:after {
    display: block;
    content: "\20";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden
  }

  .clearfix {
    *zoom: 1
  }

  input::-ms-clear {
    display: none
  }

  input::-ms-reveal {
    display: none
  }

  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    a {
      background-color: transparent
    }
  }

  input {
    background: none;
    border: 0 none
  }

  input[type="button"], input[type="submit"], input[type="reset"], a {
    -webkit-appearance: none;
    appearance: none
  }

  .tl-c {
    text-align: center
  }

  .fl-l {
    float: left
  }

  .fl-r {
    float: right
  }

  .fl {
    float: left
  }

  .fr {
    float: right
  }

  .nbg {
    background: none !important
  }

  .t_l {
    text-align: left
  }

  .t_c {
    text-align: center
  }

  .t_r {
    text-align: right
  }

  .c_b:before, .c_b:after {
    content: "";
    display: block
  }

  .c_b:after {
    clear: both
  }

  .c_b {
    zoom: 1
  }

  .hidden, .hide {
    display: none
  }

  .blockimportant {
    display: block !important
  }

  .hideimportant {
    display: none !important
  }

  .underline {
    text-decoration: underline
  }

  input[type=text]::-ms-clear, input[type=password]::-ms-reveal {
    display: none
  }

  input {
    color: #333
  }

  input:required, input:invalid {
    -moz-box-shadow: none;
    box-shadow: none
  }

  input::-moz-focus-inner {
    border: 0
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset
  }

  /*# sourceMappingURL=reset.css.map */

</style>
