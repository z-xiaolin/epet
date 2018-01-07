<template>
  <div class="register_wrap">
    <div class="register_info" v-show="isShow">
      <form method="post">
        <div class="mobile_input">
          <span class="icon"></span>
          <input type="text" v-model="phoneNum" placeholder="请输入手机号码">
        </div>
        <input ref="next" class="btn" value="下一步" type="button" disabled
               :class="{active:showOrhide}" @click="nextStep" >
      </form>
    </div>

    <transition name="fade">
      <div class="showAddUser" v-show="!isShow">
      <ul class="info_list">
        <li class="li phone">
          <span class="icon"></span>
          <input type="text" :placeholder="phoneNum" disabled>
        </li>
        <li class="li img_confirm">
          <span class="icon"></span>
          <input type="text" placeholder="图片验证码">
          <span class="confirm_img">
            <img class="codevar" src="./seccode.jpg">
          </span>
        </li>
        <li class="li SMS_confirm">
          <span class="icon"></span>
          <input type="text" placeholder="图片验证码">
          <a href="javascript:;">获取短信验证码</a>
        </li>
        <li class="li user_name">
          <span class="icon"></span>
          <input type="text" placeholder="你的昵称/用户名">
        </li>
        <li class="li pwd">
          <span class="icon"></span>
          <input type="text" placeholder="请设置密码">
        </li>
        <li class="li re_pwd">
          <span class="icon"></span>
          <input type="text" placeholder="请确认密码">
        </li>
      </ul>
      <!--<input class="btn" @click="nextStep" value="下一步" type="button">-->
      <input ref="next2" class="btn" value="下一步" type="button" disabled
             :class="{active:showOrhide}" @click="nextStep1" >
    </div>
    </transition>
  </div>
</template>
<script>
  import {MessageBox, Toast} from "mint-ui"
  export default{
    props: [],
    data () {
      return {
        phoneNum:"",
        isShow:true
      }
    },
    methods: {
      nextStep(){
        let phone = this.phoneNum
        let Reg = /^1(3|4|5|7|8)\d{9}$/
        if(phone && !(Reg.test(phone))){
          MessageBox("提示", "请填写正确的手机号码！")
          return false
        }  else {
          this.isShow = !this.isShow
        }
      },
      nextStep1(){
        // 判断输入内容是否正确

        // 注册成功后的提示
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        })
        // 跳转到 登录页面
      }
    },
    computed: {
      showOrhide(){
        if(this.phoneNum){
          this.$refs.next.removeAttribute("disabled")
          return true
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .register_wrap
    .register_info
      width 100%
      .mobile_input
        height 46px
        line-height 46px
        margin 0 10px
        box-sizing border-box
        border-bottom 1px solid #e2e2e2
        .icon
          display inline-block
          vertical-align middle
          height 17px
          width 17px
          margin-right 6px
          margin-left 5px
          background-repeat no-repeat
          background-size auto 17px
          background-image url("./mobile.png")
        &>input
          outline none
      .btn
        margin 35px 10%
        height 30px
        line-height 30px
        width 80%
        color #fff
        border-radius 30px
        font-size 15px
        background-color #d7d7d7
        outline none
      .active
        background-color #f00
    .showAddUser
      /*height 146px*/
      &.fade-enter-active, &.fade-leave-active
        transition: all .5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
        /*height 0*/
      .info_list
        & li
          height 46px
          line-height 46px
          margin 0 10px
          box-sizing border-box
          border-bottom 1px solid #e2e2e2
          .icon
            display inline-block
            vertical-align middle
            height 21px
            width 17px
            margin-right 6px
            margin-left 5px
            background-repeat no-repeat
            background-size 17px auto
          &>input
            outline none
            background-color #fff
          input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { /* WebKit*/
            color: #ddd;
            font-size: 13px;
          }
        .phone
          .icon
            /*display inline-block
            vertical-align middle
            height 17px
            width 17px
            margin-right 6px
            margin-left 5px
            background-repeat no-repeat*/
            background-size auto 17px
            background-image url("./mobile.png")
          /*&>input
            outline none
            background-color #fff*/
        .img_confirm
          .icon
            /*display inline-block
            vertical-align middle
            height 21px
            width 17px
            margin-right 6px
            margin-left 5px
            background-repeat no-repeat
            background-size 17px auto*/
            background-image url("./ico5.png")
          /*&>input
            outline none
            background-color #fff*/
          .confirm_img
            margin-left 20px
            & img
              vertical-align middle
        .SMS_confirm
          position relative
          .icon
            /*display inline-block
            vertical-align middle
            height 21px
            width 17px
            margin-right 6px
            margin-left 5px
            background-repeat no-repeat
            background-size 17px auto*/
            background-image url("./ico2.png")
          /*&>input
            outline none
            background-color #fff*/
          .confirm_img
            margin-left 20px
            & img
              vertical-align middle
          & a
            position absolute
            top 8px
            right 10px
            display inline-block
            height 30px
            line-height 30px
            padding 0 10px
            background #fed171
            border-radius 30px
            font-size 14px
            color #fff
            text-align center
        .user_name
          .icon
            background-image url("./ico3.png")
        .pwd
          .icon
            background-image url("./ico4.png")
        .re_pwd
          .icon
            background-image url("./ico4.png")
      .btn
        margin 35px 10%
        height 30px
        line-height 30px
        width 80%
        color #fff
        border-radius 30px
        font-size 15px
        background-color #d7d7d7
        outline none
</style>
