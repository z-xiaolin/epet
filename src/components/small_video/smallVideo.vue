<template>
  <div class="e_video">
    <div class="video_title" v-if="title">
      <img :src="title.left.img.image"  alt="">
      <a :href="video[0].share_target.param.url"><img :src="title.right.img.image" alt=""></a>
    </div>
    <div class="video_img" v-if="video">
      <a :href="video[0].link">
        <img :src="video[0].cover.image" alt="">
        <span class="play"></span>
      </a>
    </div>
    <div class="foo_text" v-if="video">
      <p class="text1">{{video[0].title}}</p>
      <p class="text2">
        <span class="icon">
          <img :src="video[0].visit_img.image" alt="">
        </span>
        <span>{{video[0].visit}}</span>
        <span> | </span>
        <span>{{video[0].time}}</span>
      </p>
    </div>
  </div>
</template>
<script>
  export default{
    props: ["title","video"],
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
          /*background-image url("../../pages/homePage/imgs/view-black.png")*/
          background-size 10px
          background-repeat no-repeat
</style>
