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

    <!--<div class="contentWrap" :style="{height:height}">-->
    <div class="contentWrap" :style="{top: top}">
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
            <div class="tp">
              <img src="./imgs/suprice.png">
            </div>
            <div class="next">距离下一场&nbsp;</div>
            <div class="time">
              <span>{{time()[0]}}</span>
              <span>:</span>
              <span>{{time()[1]}}</span>
              <span>:</span>
              <span>{{time()[2]}}</span>
            </div>
            <div class="more">
              <a href="###">
                <img src="./imgs/more.png">
              </a>
            </div>
          </div>
          <div class="food_list">
            <ul class="list">
              <li>
                <img src="./imgs/hour2_1.jpg">
                <div>
                  <span>￥</span><span>1.25</span>
                  <p>省￥11.25</p>
                </div>
              </li>
              <li>
                <img src="./imgs/hour2_2.jpg">
                <div>
                  <span>￥</span><span>2.20</span>
                  <p>省￥11.25</p>
                </div>
              </li>
              <li>
                <img src="./imgs/hour2_3.jpg">
                <div>
                  <span>￥</span><span>1.25</span>
                  <p>省￥11.25</p>
                </div>
              </li>
              <li>
                <img src="./imgs/hour2_4.jpg">
                <div>
                  <span>￥</span><span>2.25</span>
                  <p>省￥11.25</p>
                </div>
              </li>
              <li>
                <img src="./imgs/hour2_5.jpg">
                <div>
                  <span>￥</span><span>15.20</span>
                  <p>省￥11.25</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <split />
        <div class="e_chong">
          <img src="./imgs/e_chong.jpg">
        </div>
        <split />
        <div class="e_guoji">
          <div><img src="./imgs/e_guoji_1.jpg"></div>
          <p><img src="./imgs/e_guoji_2.jpg"></p>
          <p><img src="./imgs/e_guoji_3.jpg"></p>
        </div>
        <split />
        <smallVideo />
        <!--<smallVideo :title_src="../../pages/homePage/imgs/e_video_small.jpg"
                    :title_more_src="../../pages/homePage/imgs/more2.jpg"
                    :video_img_src="../../pages/homePage/imgs/e_video.jpg"
                    :text="PETSTAGES&nbsp;草皮镜面轨道球&nbsp;释放爱玩天性"
                    :num="23291" :time="01:36"/>-->
        <split />
        <div class="e_brand">
          <div class="brand_title">
            <img src="./imgs/brand_sell.jpg" alt="">
            <a href=""><img src="./imgs/more2.jpg" alt=""></a>
          </div>
          <div class="brand_imgs">
            <ul class="img_list">
              <li><img src="./imgs/p_1.jpg" alt=""><split /></li>
              <li><img src="./imgs/p_2.jpg" alt=""><split /></li>
              <li><img src="./imgs/p_3.jpg" alt=""></li>
            </ul>
          </div>
        </div>
        <split />
        <div class="e_exp">
          <div class="e_exp_title">
            <img src="./imgs/exp.jpg" alt="">
            <a href=""><img src="./imgs/more2.jpg" alt=""></a>
          </div>
          <carousel />
        </div>
        <split />
        <!--<smallVideo />-->
        <div class="e_video">
          <div class="video_title">
            <img src="../../pages/homePage/imgs/lovely_pet.jpg" alt="">
            <a href=""><img src="../../pages/homePage/imgs/more2.jpg" alt=""></a>
          </div>
          <div class="video_img">
            <img src="../../pages/homePage/imgs/pet_img.jpg" alt="">
            <span class="play"></span>
          </div>
          <div class="foo_text">
            <p class="text1">第2期-猫啪啪啪的时候爽吗？</p>
            <p class="text2">
              <span class="icon"></span>
              <span>27819</span>
              <span> | </span>
              <span>02:36</span>
            </p>
          </div>
        </div>
        <split />
        <div class="e_video">
          <div class="video_title">
            <img src="../../pages/homePage/imgs/theatre.jpg" alt="">
            <a href=""><img src="../../pages/homePage/imgs/more2.jpg" alt=""></a>
          </div>
          <div class="video_img">
            <img src="../../pages/homePage/imgs/theatre_img.png" alt="">
            <span class="play"></span>
          </div>
          <div class="foo_text">
            <p class="text1">E宠内部禁播视频——设计师篇</p>
            <p class="text2">
              <span class="icon"></span>
              <span>8863</span>
              <span> | </span>
              <span>00:36</span>
            </p>
          </div>
        </div>
        <split />
        <div class="textDiv">
          <img src="./imgs/text_img.jpg" alt="">
        </div>
        <div class="home_footer">
          <div class="other">
            <span>触屏版</span>
            <span><a href="##">手机客户端</a></span>
            <span><a href="##">关于我们</a></span>
            <span><a href="##">联系我们</a></span>
          </div>
          <div class="copy">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>
      </div>
    </div>

    <!--切换主题 -->
    <div class="switch_type_warp">
      <div class="switch_type" @click="switchType"></div>
      <div class="change_type_mask" v-show="isShowMask">
        <div class="mask">
          <div class="main">
            <p class="text1">CAT <b>▁</b></p>
            <p class="text2">亲爱的小主</p>
            <p class="text3">您即将进入猫猫站</p>
            <ul class="type_list">
              <li class="types dog">
                <img src="./imgs/change-dog.png" alt="">
                <p>狗狗站</p>
              </li>
              <li class="cat">
                <img src="./imgs/change-cat1.png" alt="">
                <p>猫猫站</p>
                <b>▁</b>
                <a href="javascript:;">即将进入</a>
              </li>
              <li class="types fish">
                <img src="./imgs/change-fish.png" alt="">
                <p>水族站</p>
              </li>
            </ul>
          </div>
          <p class="close_mask" @click="closeMask"></p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import BScroll from "better-scroll"
  import carousel from "../../components/carousel/carousel.vue"
  import split from "../../components/split/split.vue"
  import smallVideo from "../../components/small_video/smallVideo.vue"
  import {showtime} from "../../uitls/countdown"
  export default{
    props: [],
    data () {
      return {
        isShow:true,
//        height:"478px"
        top:"142px",
        isShowMask:true
      }
    },
    mounted (){
      let scrollX = new BScroll(".header_nav", {scrollX: true, click: true})
      let scrollX2 = new BScroll(".food_list", {scrollX: true, click: true})
      let scrollY = new BScroll(".contentWrap",{scrollY: true, click: true})
    },
    methods: {
      // 关闭广告
      closebtn (){
        this.isShow = !this.isShow
        /*let Height = document.documentElement.clientHeight
        this.height = (Height-87-46)+ "px"*/
        this.top = "87px"
      },
      time(){
        showtime()
        return showtime()
        /*let showtime = function() {
          let time = []
          let nowtime = new Date(),
            endtime = new Date("2018/1/5,21:30:00"),//设置结束时间
            lefttime = parseInt((endtime.getTime()-nowtime.getTime())/1000),
            d = Math.floor(lefttime/(60*60*24)),
            h = Math.floor(lefttime/(60*60)%24),
            m = Math.floor(lefttime/60%60),
            s = Math.floor(lefttime%60);
          time.push(h, m, s)
          // console.log(h, m, s)
          // console.log(time)
//        p3.innerHTML=d+"天"+h+"小时"+m+"分"+s+"秒";
          setTimeout(showtime, 1000);
          return time
        }
        showtime()*/
      },
      // 切换主题
      switchType(){
        this.isShowMask = !this.isShowMask

      },
      // 关闭切换主题
      closeMask (){
        this.isShowMask = !this.isShowMask
      }
    },
    computed: {},
    components:{
      carousel,
      split,
      smallVideo,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  body,html{
    height 100%
    overflow hidden
  }
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
      /*background-color #fff*/
      position absolute
      /*top 142px*/
      left 0px
      right 0px
      bottom 46px
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
        .daily_berserk
          .daily_title
            overflow hidden
            height 60px
            line-height 60px
            .tp
              float left
              width 105px
              margin 9px 0
              &>img
                width 100%
            .next
              float left
              margin 0 5px 0 10px
              font-size 12px
              text-align center
            .time
              float left
              font-size 12px
              &>span:nth-child(odd)
                padding 2px
                border 1px solid #ddd
            .more
              float right
              width 70px
              height 100%
              a
                box-sizing border-box
                display inline-block
                height 100%
                padding-top 5px
                &>img
                  padding  5px 0
                  height 40px
          .food_list
            height 130px
            width 100%
            margin-bottom 10px
            .list
              overflow hidden
              height 100%
              width 550px
              &>li
                float left
                width 100px
                text-align center
                margin-right 10px
                &>img
                  /*height 100%*/
                  width 85px
                  margin-bottom 5px
                & span
                  color #f00
                  font-size 14px
                & p
                  margin 5px
                  color #999
                  font-size 12px

        .e_chong
          &>img
            width 100%
        .e_guoji
          overflow hidden
          & img
            float left
            width 50%


        .e_brand
          .brand_title
            box-sizing border-box
            &>img
              margin-left 10px
              height 72px
            &>a img
              float right
              margin 8px
              height 55px
          .brand_imgs
            .img_list
              & img
                width 100%
        .e_exp
          .e_exp_title
            box-sizing border-box
            &>img
              margin-left 10px
              height 72px
            &>a img
              float right
              margin 8px
              height 55px
        .e_video
          .video_title
            box-sizing border-box
            &>img
              margin-left 10px
              height 72px
            &>a img
              float right
              margin 8px
              height 55px
          .video_img
            position relative
            &>img
              width 100%
            & .play
              display inline-block
              width 20px
              height 20px
              position absolute
              top 50%
              left 50%
              background-image url("../../pages/homePage/imgs/play.png")
              background-size 20px
              background-repeat no-repeat
          .foo_text
            padding 10px
            font-size 12px
            text-align center
            &>.text1
              height 19px
              line-height 19px
              color #333
            &>.text2
              height 19px
              line-height 19px
              color #999
              &>.icon
                display inline-block
                width 10px
                height 10px
                background-image url("../../pages/homePage/imgs/view-black.png")
                background-size 10px
                background-repeat no-repeat
        .textDiv
          &>img
            width 100%
        .home_footer
          height 86px
          margin-top 15px
          text-align center
          .other
            box-sizing border-box
            height 42px
            padding 15px 0 5px
            font-size 14px
            span
              margin-right 10px
              line-height 22px
              color #f00
              &>a
                color #000
          .copy
            box-sizing border-box
            padding 10px 0
            height 44px
            /*line-height 22px*/
            font-size 12px


    .switch_type_warp
      .switch_type
        position fixed
        bottom 130px
        right 0px
        width 40px
        height 41px
        background-size 80px
        background-image url("./imgs/gocat.png")
        background-repeat no-repeat
      .change_type_mask
        z-index 100
        width 100%
        height 100%
        background-color #fff
        position fixed
        top 110px
        left 0px
        .mask
          .main
            .text1
              position relative
              font-size 16px
              text-align center
              color: #999
              &>b
                color #000
                font-size 12px
                width 100%
                font-weight 400
                text-align center
                position absolute
                left 0px
                bottom -4px
            .text2
              font-size 16px
              text-align center
              margin 30px 0 5px
              color #666
            .text3
              padding 6px
              font-size 20px
              text-align center
              color #333
            .type_list
              overflow hidden
              margin-top 35px
              width 305px
              padding-left 50px
              .types
                float left
                width 25%
                text-align center
                margin-top 21%
                &>img
                  width 60px
                &>p
                  margin-top 5px
                  font-size 12px
                  color #999
              .cat
                position relative
                float left
                text-align center
                color #e74186
                width 40%
                margin-top 14%
                &>img
                  width 80%
                &>b
                  width 100%
                  position absolute
                  top -58px
                  left 0
                  color #000
                  text-align center
                &>a
                  display inline-block
                  border-radius 30px
                  padding 5px 16px
                  margin-top 25px
                  font-size 12px
                  color #fff
                  background-color #e74186

          .close_mask
            position fixed
            bottom 0px
            left 0
            width 100%
            height 60px
            border-top 1px solid #e7e7e7
            background-image url("./imgs/close2.png")
            background-size 23px 23px
            background-position center
            background-repeat no-repeat
</style>
