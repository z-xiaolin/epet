<template>
  <div class="headerWrap">
    <div class="overflow" v-if="isShow">
      <img src="./img.jpg">
      <i class="closebtn_top" @click="closebtn"></i>
    </div>
    <div class="headerContent">
      <div class="epet-search">
        <div class="theme">
          <a href="#">
            <span>猫猫站</span>
            <span>|</span>
            <span>重庆</span>
            <span class="icon">▼</span>
          </a>
        </div>
        <p class="search">
          <input type="search" placeholder="搜索商品和品牌">
          <i class="icon-h_search"></i>
        </p>
        <a class="epet-category" href="#"><i class="mydope"></i></a>
      </div>
      <div class="header_nav">
        <ul class="nav_list">
          <li class="firstLi"><a href="javascript:;">首页</a><i></i></li>
          <li><a href="javascript:;">猫猫主粮</a></li>
          <li><a href="javascript:;">罐头超市</a></li>
          <li><a href="javascript:;">医疗保健</a></li>
          <li><a href="javascript:;">猫砂</a></li>
          <li><a href="javascript:;">美容香波</a></li>
          <li><a href="javascript:;">零食玩具</a></li>
        </ul>
      </div>
    </div>
    <!--<div class="carousel">
      <mt-swipe class="mint_swipe" :auto="2000">
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_1.jpg"></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_2.jpg"></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_3.jpg"></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_4.jpg"></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_5.jpg"></mt-swipe-item>
        <mt-swipe-item class="item"><img src="../carousel/imgs/carousel_6.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>-->
    <carousel />
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import carousel from "../../components/carousel/carousel.vue"
  export default{
    props: [],
    data () {
      return {
        isShow:true,
      }
    },
    mounted (){
      let scrollX = new BScroll(".header_nav", {
        scrollX: true,
        click: true
      })
    },
    methods: {
      closebtn (){
        this.isShow = !this.isShow
      }
    },
    computed: {},
    components:{
      carousel,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .headerWrap
    .overflow img
      width 100%
      height 55px
    .overflow .closebtn_top
      display inline-block
      width 22px
      height 22px
      background-image url("./closebtn_top.png")
      background-repeat no-repeat
      background-size 22px
      position absolute
      top 15px
      left 10px
    .headerContent
      .epet-search
        position relative
        width 100%
        height 35px
        line-height 35px
        text-align center
        padding 8px 0
        margin 0 10px
        /*box-sizing border-box*/
        .theme
          float left
          position: relative
          font-size 14px
          color #898989
          width 110px
        .search
          position relative
          float left
          width 210px
          &>input
            width 210px
            background-color #eee
            padding 4px
            border-radius 6px
            font-size 14px
          .icon-h_search
            display inline-block
            position: absolute
            top 15px
            left 188px
            background-image url("./search.png")
            background-repeat no-repeat
            background-size 14px
            width 14px
            height 14px
        .epet-category
          position absolute
          top 10px
          right 0px
          display: inline-block
          vertical-align middle
          width 50px
          height 25px
          line-height 25px
          text-align center
          .mydope
            display inline-block
            vertical-align middle
            padding-right 12px
            width 25px
            height 25px
            background-image url("./mydope.png")
            background-size 25px
            background-repeat no-repeat
      .header_nav
        width 100%
        height 36px
        .nav_list
          width 570px
          overflow hidden
          &>li
            float left
            width 80px
            line-height 36px
            text-align center
            font-size 14px
            color: #666
          .firstLi
            position relative
            /*color #e73f85*/
            &>a
              color #e73f85
            &>i
              display inline-block
              position absolute
              bottom 0px
              left 23px
              background-color #e73f85
              border-radius 10px
              width 34px
              height 2px
</style>
