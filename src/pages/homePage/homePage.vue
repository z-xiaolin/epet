<template>
  <div class="headerWrap">
    <!--{{daily}}-->
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
          <li v-for="(menu, index) in menus" :key="index">
            <a href="javascript:;">{{menu.menu_name}}</a>
            <i></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="contentWrap" :style="{top: top}">
      <div class="content">
        <carousel v-if="datas[0]" :imgs="datas[0].value"/>
        <div class="homeContentWrap">
          <div class="content_nav_list" v-if="datas[2]">
            <a :href="menu.target.param" v-for="(menu, index) in datas[2].menus" :key="index">
              <img :src="menu.image" alt="">
            </a>
          </div>
        </div>
        <split />
        <div class="new_exclusive" v-if="new_exclusive" v-for="(imgs, index) in new_exclusive" :key="index">
          <img :src="imgs.image" alt="">
        </div>
        <div class="daily_berserk">
          <div class="daily_title" v-if="daily['surprise_icon']">
            <div class="tp">
              <img :src="daily['surprise_icon']['image']">
            </div>
            <div class="next">{{daily.title}}&nbsp;</div>
            <div class="time">
              <span>{{time()[0]}}</span>
              <span>:</span>
              <span>{{time()[1]}}</span>
              <span>:</span>
              <span>{{time()[2]}}</span>
            </div>
            <div class="more" v-if="daily.right_image">
              <a href="###">
                <img :src="daily.right_image.image">
              </a>
            </div>
          </div>
          <div class="food_list">
            <ul class="list">
              <li v-for="(imgs, index) in daily['goods']" :key="index">
                <img :src="imgs.image.image">
                <div>
                  <span>￥</span><span>{{imgs.sale_price}}</span>
                  <p>{{imgs.little_price}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <split />
        <div class="e_chong" v-if="datas[7]">
          <a :href="datas[7].content_images[0][0].target.param">
            <img :src="datas[7].content_images[0][0].image">
          </a>
        </div>
        <split />
        <div class="e_guoji" v-if="datas[9]">
          <div>
            <a :href="datas[9].content_images[0][0].target.param">
              <img :src="datas[9].content_images[0][0].image">
            </a>
          </div>
          <p>
            <a :href="datas[9].content_images[1][0].target.param">
              <img :src="datas[9].content_images[1][0].image">
            </a>
          </p>
          <p>
            <a :href="datas[9].content_images[1][1].target.param">
              <img :src="datas[9].content_images[1][1].image">
            </a>
          </p>
        </div>
        <split />
        <smallVideo v-if="datas[11]" :title="datas[11].value" :video="datas[12].value"/>
        <split />
        <div class="e_brand" v-if="datas[14]">
          <div class="brand_title">
            <a class="a1" :href="datas[14].value.left.img.target.param">
              <img :src="datas[14].value.left.img.image" alt="">
            </a>
            <a class="a2" :href="datas[14].value.right.img.target.param">
              <img :src="datas[11].value.right.img.image" alt="">
            </a>
          </div>
          <div class="brand_imgs">
            <ul class="img_list">
              <li v-if="imgs.content_images[0] && imgs.content_images[0][0].target" v-for="(imgs, index) in brandImgs" :key="index">
                <a :href="imgs.content_images[0][0].target.param">
                  <img :src="imgs.content_images[0][0].image" alt="">
                </a>
                <split />
              </li>
            </ul>
          </div>
        </div>
        <div class="e_exp" v-if="aaa">
          <div class="e_exp_title" v-if="datas[29].value && datas[29].value.left">
            <a class="left" :href="datas[29].value.left.img.target.param">
              <img :src="datas[29].value.left.img.image" alt="">
            </a>
            <a class="right" :href="datas[29].value.right.img.target.param" v-if="datas[29].value.right">
              <img :src="datas[29].value.right.img.image">
            </a>
          </div>
          <carousel v-if="datas[30]" :imgs="datas[30].value"/>
        </div>
        <split />
        <smallVideo v-if="datas[32] && datas[33]" :title="datas[32].value" :video="datas[33].value"/>
        <split />
        <smallVideo v-if="datas[35] && datas[36]" :title="datas[35].value" :video="datas[36].value"/>
        <div class="textDiv" v-if="datas[38]">
          <img :src="datas[38].content_images[0][0].image" alt="">
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

    <div class="switch_type" @click="switchType"></div>
    <!--切换主题遮罩层  -->
    <div class="switch_type_warp">
      <transition name="scaleMask">
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
                  <a href="http://localhost:8080/">即将进入</a>
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
      </transition>
    </div>
  </div>

</template>
<script>
  import BScroll from "better-scroll"
  import carousel from "../../components/carousel/carousel.vue"
  import split from "../../components/split/split.vue"
  import smallVideo from "../../components/small_video/smallVideo.vue"
  import {showtime} from "../../uitls/countdown"
  import {mapState} from "vuex"
  export default{
    props: [],
    data () {
      return {
        isShow:true,
        top:"142px",
        isShowMask:false
      }
    },
    mounted (){
      this.$store.dispatch("requestHomePage")
      this.$store.dispatch("requestHomeDailyActive")

      this.scrollX = new BScroll(".header_nav", {scrollX: true, click: true})
      this.scrollX2 = new BScroll(".food_list", {scrollX: true, click: true})
      this.scrollY = new BScroll(".contentWrap",{scrollY: true, click: true})
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
      // 关闭切换主题遮罩层
      closeMask (){
        this.isShowMask = !this.isShowMask
      },
    },
    computed: {
      ...mapState(['menus',"datas", "daily", "new_exclusive"]),
      // 品牌
      brandImgs (){
        let imgs = []
        imgs = this.datas.filter((data, index)=> {
          return index >= 15 && index <= 27 && index % 2 == 1
        })
        return imgs
      },
      aaa(){
        return this.datas[29]
      },
     /* bbb(){
//        let arr = Object.keys(this.daily).sort()
        console.log(Object.keys(this.daily).sort())
        return arr
      }*/
    },
    watch:{
     /* menus(val, oldVal){
        this.scrollX.refresh()
        this.scrollX2.refresh()
      },
      datas(){
        this.scrollY.refresh()
      }*/
    },
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
          li:first-child
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
            & img
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
          & img
            width 100%
        .e_guoji
          overflow hidden
          & img
            float left
            width 50%


        .e_brand
          .brand_title
            box-sizing border-box
            & .a1 img
              margin-left 10px
              height 72px
            & .a2 img
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
            & .left img
              margin-left 10px
              height 72px
            & .right img
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
            & img
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
                & img
                  display inline-block
                  width 10px
                  height 10px
                  /*background-image url("../../pages/homePage/imgs/view-black.png")*/
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

    .switch_type
      position fixed
      bottom 130px
      right 0px
      width 40px
      height 41px
      background-image url("./imgs/gocat.png")
      background-size 200%
      background-repeat no-repeat
      animation switchType 2s steps(2) infinite
    .switch_type_warp
      .change_type_mask
        z-index 100
        width 100%
        height 100%
        background-color #fff
        position fixed
        top 0px
        left 0px
        &.scaleMask-enter-active, &.scaleMask-leave-active
          transition: all .3s linear
        &.scaleMask-enter, &.scaleMask-leave-to
          transform scale(0)
        .mask
          padding-top 110px
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
@keyframes switchType
  from
    /*background-image url("./imgs/gocat1.png")*/
    background-position -40px 0
  to
    /*background-image url("./imgs/gocat2.png")*/
    background-position 41.5px 0
</style>
