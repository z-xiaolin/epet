<template>
  <div class="shopCart_wrap">
    <div class="header_wrap">
      <span class="go_back" @click="$router.back()"></span>
      <span class="text">购物车</span>
      <div class="header-quick" @click="changeHeaderNav"></div>
    </div>
    <transition name="slide">
      <div class="header_quick_hide" v-show="isShow">
        <a href="http://localhost:8080/#/homePage">
          <span class="icon icon1"></span>
          <p>首页</p>
        </a>
        <a href="http://localhost:8080/#/classify/classifyList">
          <span class="icon icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="http://localhost:8080/#/shopCart">
          <span class="icon icon3"><span>0</span></span>
          <p>购物车</p>
        </a>
        <a href="http://localhost:8080/#/mine">
          <span class="icon icon4"></span>
          <p>我的E宠</p>
        </a>
      </div>
    </transition>
    <div class="CartBox">
      <div class="empty_type">
        <p class="cart_img"></p>
        <p>购物车是空的</p>
      </div>
    </div>
    <div class="btns">
      <a href="http://localhost:8080/#/homePage" class="goShopping">去逛逛</a>
      <a href="https://wap.epet.com/zt/knowledge/favorites.html" class="collection">我的收藏</a>
    </div>
  </div>
</template>
<script>
  export default{
    props: [],
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      changeHeaderNav(){
        this.isShow = !this.isShow
      }
    },
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .shopCart_wrap
    /*height 667px*/
    /*z-index 200*/
    .header_wrap
      overflow hidden
      border-bottom: 1px solid #f3f3f3
      .go_back
        float left
        width 20px
        height 20px
        margin 16px 10px 0
        background-image url("../../assets/imgs/back.png")
        background-repeat no-repeat
        background-position -9px 0
        background-size 100%
      .text
        color #333
        font-size 18px
        width 80%
        height 50px
        line-height 50px
        text-align center
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        display inline-block
        margin 0 auto
      .header-quick
        float right
        margin 15px 15px 0 0
        width 20px
        height 20px
        background-image url("imgtk-new.png")
        background-repeat no-repeat
        background-size 100%
    .header_quick_hide
      height 45px
      overflow hidden
      padding 10px 0
      border-bottom: 1px solid #d7d7d7
      & a
        display inline-block
        width 24%
        height 45px
        text-align center
        font-size 14px
        color #666
        .icon
          display block
          height 25px
          background-repeat no-repeat
          background-size auto 25px
          background-position center
        .icon1
          background-image url("./head_icon1.png")
        .icon2
          background-image url("./head_icon2.png")
        .icon3
          background-image url("./head_icon4.png")
          position relative
          & > span
            position absolute
            top -4px
            right 30%
            display inline-block
            width 18px
            height 18px
            color #fff
            line-height 18px
            background-color red
            border-radius 50%
        .icon4
          background-image url("./head_icon5.png")
      &.slide-entry-active, &.slide-leave-active
        transition  0.5s linear
      &.slide-entry, &.slide-leave-to
        height 0px
    .CartBox
      .empty_type
        font-size 16px
        color #ddd
        text-align center
        & > .cart_img
          margin 50px auto 20px
          width 100px
          height 100px
          background url("./cart-ico.png")
          background-repeat no-repeat
          background-size 100%
          background-position 0 -150px
    .btns
      margin-top 15px
      text-align center
      &>a
        display inline-block
        border-radius 5px
        border 1px solid #999
        color #999
        text-align center
        height 40px
        line-height 40px
        width 100px
</style>
