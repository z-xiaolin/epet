<template>
  <div class="classify_wrap">
    <div class="header" ref="header">
      <div class="tab tab1">
        <a :class="{active:isShow}" href="#"  @click="changeClassify(isShow)"><span>分类</span></a>
        <span class="line" v-if="isShow"></span>
      </div>
      <div class="tab tab2">
        <a :class="{active:!isShow}" href="#"  @click="changeClassify(!isShow)"><span>品牌</span></a>
        <span class="line" v-if="!isShow"></span>
      </div>
    </div>
    <!--<classifyList />-->
    <router-view />
    <router-link to="/classify/classifyList"></router-link>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import classifyList from "../classifyList/classifyList.vue"
  export default{
    components:{classifyList,},
    props: [],
    data () {
      return {
        isShow: true
      }
    },
    /*mounted(){
      let scrollX = new BScroll(".left", {click:true, scrollX:true})
      let scrollX2 = new BScroll(".right", {click:true, scrollX:true})
    },*/
    methods: {
      changeClassify(TorF){
        if (!TorF){
          this.isShow = !this.isShow
        }
      }
    },
    computed: {},
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .classify_wrap
    overflow hidden
    background-color #f3f4f5
    .header
      position relative
      box-sizing border-box
      padding 10px 0
      width 100%
      height 40px
      border-bottom 1px solid #ddd
      background-color #fff
      margin-bottom 3px
      .active
        color deeppink
      .tab
        & a
          font-weight bold
          font-size 14px
        &>.line
          position absolute
          left  31%
          bottom 0
          display inline-block
          width 40px
          height 2px
          background-color  deeppink
      .tab1
        float left
        width 40%
        text-align right
      .tab2
        float right
        width 40%
        text-align left
        &>.line
          left 58%

</style>
