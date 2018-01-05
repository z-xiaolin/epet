<template>
  <div class="e_video">
    <div class="video_title">
      <img src="../../pages/homePage/imgs/e_video_small.jpg" alt="">
      <a href=""><img src="../../pages/homePage/imgs/more2.jpg" alt=""></a>
    </div>
    <div class="video_img">
      <img src="../../pages/homePage/imgs/e_video.jpg" alt="">
      <span class="play"></span>
    </div>
    <div class="foo_text">
      <p class="text1">PETSTAGES 草皮镜面轨道球 释放爱玩天性</p>
      <p class="text2">
        <span class="icon"></span>
        <span>23291</span>
        <span> | </span>
        <span>01:36</span>
      </p>
    </div>
  </div>

  <!--<div class="e_video">
    <div class="video_title">
      <img :src=title_src>
      <a href=""><img :src=title_more_src alt=""></a>
    </div>
    <div class="video_img">
      <img :src=video_img_src alt="">
      <span class="play"></span>
    </div>
    <div class="foo_text">
      <p class="text1">{{text}}</p>
      <p class="text2">
        <span class="icon"></span>
        <span>{{num}}</span>
        <span> | </span>
        <span>{{time}}</span>
      </p>
    </div>
  </div>-->
</template>
<script>
  export default{
    props: ["title_src","title_more_src","video_img_src","text","num","time"],
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
</style>
