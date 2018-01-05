<template>
  <div class="headerWrap">
    <div class="overflow" v-if="isShow">
      <img src="./imgs/img.jpg">
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
          <li class="firstLi"><a href="##">首页</a><i></i></li>
          <li><a href="javascript:;">猫猫主粮</a></li>
          <li><a href="javascript:;">罐头超市</a></li>
          <li><a href="javascript:;">医疗保健</a></li>
          <li><a href="javascript:;">猫砂</a></li>
          <li><a href="javascript:;">美容香波</a></li>
          <li><a href="javascript:;">零食玩具</a></li>
        </ul>
      </div>
    </div>

    <div class="contentWrap" :style="{height:height}">
      <div class="content">
        <carousel />
        <div class="homeContentWrap">
          <div class="content_nav_list">
              <img src="./imgs/e_1.jpg" alt="">
              <img src="./imgs/e_2.jpg" alt="">
              <img src="./imgs/e_3.jpg" alt="">
              <img src="./imgs/e_4.jpg" alt="">
              <img src="./imgs/e_5.jpg" alt="">
              <img src="./imgs/e_6.jpg" alt="">
              <img src="./imgs/e_7.jpg" alt="">
              <img src="./imgs/e_8.jpg" alt="">
              <img src="./imgs/e_9.jpg" alt="">
              <img src="./imgs/e_10.jpg" alt="">
          </div>
        </div>
        <split />
        <div class="new_exclusive">
          <img src="./imgs/new_exclusive.gif" alt="">
        </div>
        <div class="daily_berserk">
      <div class="daily_title">
        <img src="" alt="">
        <span>距离下一场</span>
        <div class="time">
          <span></span><span>:</span><span></span>
          <span>:</span><span></span>
        </div>
        <img src="./imgs/more.png">
      </div>
    </div>

      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import carousel from "../../components/carousel/carousel.vue"
  import split from "../../components/split/split.vue"
  export default{
    props: [],
    data () {
      return {
        isShow:true,
        height:"478px"
      }
    },
    mounted (){
      let scrollX = new BScroll(".header_nav", {scrollX: true, click: true})
      let scrollY = new BScroll(".contentWrap",{scrollY: true, click: true})
    },
    methods: {
      closebtn (){
        this.isShow = !this.isShow
        let Height = document.documentElement.clientHeight
        this.height = (Height-87-46)+ "px"
      }
    },
    computed: {},
    components:{
      carousel,
      split,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*body,html{
    height 100%
    overflow hidden
  }*/
  .headerWrap
    .overflow
      width 100%
      height 55px
      &>img
        width 100%
      &>.closebtn_top
        display inline-block
        width 22px
        height 22px
        background-image url("./imgs/closebtn_top.png")
        background-repeat no-repeat
        background-size 22px
        position absolute
        top 15px
        left 10px
    .headerContent
      /*background-color #fff*/
      /*position fixed
      top 55px
      left 0*/
      .epet-search
        box-sizing border-box
        position relative
        width 100%
        height 51px
        line-height 35px
        text-align center
        padding 8px 10px
        .theme
          float left
          font-size 14px
          color #898989
          width 110px
        .search
          position relative
          float left
          width 200px
          &>input
            width 100%
            background-color #eee
            padding 4px
            border-radius 6px
            font-size 14px
          .icon-h_search
            display inline-block
            position: absolute
            top 15px
            right 0px
            background-image url("./imgs/search.png")
            background-repeat no-repeat
            background-size 14px
            width 14px
            height 14px
        .epet-category
          position absolute
          top 13px
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
            background-image url("./imgs/mydope.png")
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
    .contentWrap
      overflow hidden
      .content
        .homeContentWrap
          .content_nav_list
            overflow hidden
            &>img
              float left
              width 20%
        .new_exclusive
          &>img
            width 100%
</style>
