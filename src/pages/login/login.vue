<template>
  <div class="login_wrap">
    <div class="login_header">
      <div class="head_top">
        <span class="go_back" @click="$router.back()"></span>
        <router-link to="/mine/register">注册</router-link>
      </div>
      <div class="logo">
        <img src="./logo.png" alt="">
      </div>
      <div class="head_bottom">
        <div class="hb hb1" @click="changeLoginType">
          <span>普通登录</span>
          <i v-if="isShow" ></i>
        </div>
        <div class="hb hb2" @click="changeLoginType">
          <span>手机动态密码登录</span>
          <i v-if="!isShow"></i>
        </div>
      </div>
    </div>
    <div class="header_content">
      <div class="inputBox">
        <form class="form form1" method="post" v-show="isShow">
          <div class="input user_input">
            <span class="icon icon1"></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </div>
          <div class="input pwd_input">
            <span class="icon icon2"></span>
            <input type="passward" placeholder="输入密码">
          </div>
          <div class="forget">
            <a href="javascript:;">忘记密码？</a>
          </div>
        </form>

        <form class="form form2" method="post" v-show="!isShow">
          <div class="input mobile_input">
            <span class="icon icon1"></span>
            <input type="text" placeholder="已注册的手机号">
          </div>
          <div class="input user_input">
            <span class="icon icon2"></span>
            <input type="text" placeholder="请输入图片内容">
            <span class="confirm_img">
              <img class="codevar" src="./seccode.jpg">
            </span>
          </div>
          <div class="input pwd_input">
            <span class="icon icon3"></span>
            <input type="passward" placeholder="动态密码">
            <span class="get_pwd">
              <a href="#">获取动态密码</a>
            </span>
          </div>
          <div class="forget">
            <a href="https://wap.epet.com/login.html?do=findpassword">忘记密码？</a>
          </div>
        </form>
      </div>
      <div class="login_btn">
        <input type="submit" value="登   录">
      </div>
    </div>

    <div class="other-login">
      <div class="partners">合作网站登录</div>
      <div class="type">
        <ul class="list">
          <li><a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
            <img src="./zhifubao.png" alt="">
          </a></li>
          <li><a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
            <img src="./qq.png" alt="">
          </a></li>
        </ul>
      </div>
    </div>
    <!--<router-view />-->
  </div>
</template>
<script>
  export default{
    props: [],
    data () {
      return {
        isShow:true
      }
    },
    methods: {
      changeLoginType(){
        this.isShow = !this.isShow
      },
    },
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login_wrap
    .login_header
      background-image url("./bg.png")
      background-repeat no-repeat
      background-size 100%
      .head_top
        overflow hidden
        height 50px
        line-height 50px
        .go_back
          float left
          margin 14px
          width 22px
          height 22px
          background-image url("./personal-bico3.png")
          background-repeat no-repeat
          background-size auto 22px
        &>a
          padding-right 20px
          font-size 16px
          color #fff
          float right
          text-align center
      .logo
        width 100%
        padding 10px 0 20px
        &>img
          display block
          margin auto
          width 20%
      .head_bottom
        overflow hidden
        height 44px
        line-height 44px
        background-color rgba(255,255,255,0.3)
        .hb
          width 50%
          float left
          font-size 15px
          color #fff
          text-align center
          &>i
            display block
            height 0px
            width 0px
            margin -10px auto 0
            border-right 10px solid transparent
            border-left 10px solid transparent
            border-bottom 10px solid #fff

    .header_content
      .inputBox
        .form
        .form1
          .input
            width 88%
            margin 0 auto
            border-bottom #e2e2e2 solid 1px
            padding 12px 0
            .icon
              display inline-block
              vertical-align middle
              height 21px
              width 17px
              margin-right 6px
              margin-left 5px
              background-repeat no-repeat
              background-size 100%
          & input
            outline none
            width 75%
            height 21px
            font-size: 15px
            color #000
          /*input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { !* WebKit*!
            color:    #ddd;
            }
            input:-moz-placeholder, textarea:-moz-placeholder { !* Mozilla Firefox 4 to 18 *!
              color:    #ddd;
            }
            input::-moz-placeholder, textarea::-moz-placeholder { !* Mozilla Firefox 19+ *!
              color:    #ddd;
            }
            input:-ms-input-placeholder, textarea:-ms-input-placeholder { !* IE 10+ *!
              color:    #ddd;
            }*/
          .user_input
            .icon1
              background-image url("./user.png")
          .pwd_input
            margin-bottom 10px
          .icon2
              background-image url("./lock.png")
          .forget
            color #898989
            font-size 14px
            margin 0 auto
            text-align right
            height 20px
            width 88%
            line-height 20px
        .form2
          .input
            width 88%
            margin 0 auto
            border-bottom #e2e2e2 solid 1px
            padding 12px 0
            .icon
              display inline-block
              vertical-align middle
              height 21px
              width 17px
              margin-right 6px
              margin-left 5px
              background-repeat no-repeat
              background-size 100%
          & input
            outline none
            width 75%
            height 21px
            font-size: 15px
            color #000
          .mobile_input
            .icon1
              background-size auto 21px
              background-image url("./mobile.png")
          .user_input
            position relative
            .icon2
              background-image url("./user.png")
            .confirm_img
              position absolute
              top 7.5px
              right 0px
          .pwd_input
            position relative
            margin-bottom 10px
            .icon3
              background-image url("./lock.png")
            .get_pwd
              box-sizing border-box
              position absolute
              top 8px
              right 0px
              text-align center
              padding 6.5px 0
              font-size 14px
              border 1px solid #ff4259
              border-radius 3px
              display inline-block
              width 100px
              & a
                background-color #fff
                color #ff4259
          .forget
            color #898989
            font-size 14px
            margin 0 auto
            text-align right
            height 20px
            width 88%
            line-height 20px
      .login_btn
        width 100%
        padding-top 5px
        text-align center
        &>input
          outline none
          width 90%
          padding 9.5px 0
          border-radius 3px
          color #fff
          background: #2ec975;
          font-size: 15px
          margin 0 auto
    .other-login
      margin-top 100px
      .partners
        color #d7d7d7
        margin-top 5px
        font-size 16px
        text-align center
      .type
        .list
          overflow hidden
          padding 15px 0
          & li
            float left
            text-align center
            width 33.3%
            height auto
            & a
              display inline-block
              width 100px
              height 60px
            & img
              height auto
              width 60%
</style>
