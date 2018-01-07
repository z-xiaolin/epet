<template>
  <div>
    <div class="classify_wrap" v-show="!showSearch">
      <div class="header" ref="header">
        <div class="tab tab1">
          <router-link :class="{active:$route.path.indexOf('classifyList') !== -1}" to="/classify/classifyList">分类</router-link>
          <!--<a :class="{active:isShow}" href="#"  @click="changeClassify(isShow)"><span>分类</span></a>-->
          <span class="line" v-if="$route.path.indexOf('classifyList') !== -1"></span>
        </div>
        <div class="tab tab2">
          <router-link :class="{active:$route.path.indexOf('brandList') !== -1}" to="/classify/brandList">品牌</router-link>
          <!--<a :class="{active:!isShow}" href="#"  @click="changeClassify(!isShow)"><span>品牌</span></a>-->
          <span class="line" v-if="$route.path.indexOf('brandList') !== -1"></span>
        </div>
        <div class="search">
          <a href="#" @click="changeShow"><span class="icon_search"></span></a>
        </div>
      </div>
      <router-view />
    </div>
    <div class="search_mask" v-show="showSearch">
      <search :closeSearch="closeSearch"/>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import classifyList from "../classifyList/classifyList.vue"
  import search from "../../components/search/search.vue"
  export default{
    components:{classifyList, search},
    props: [],
    data () {
      return {
        isShow: true,
        showSearch:false
      }
    },
    methods: {
      changeClassify(TorF){
        if (!TorF){
          this.isShow = !this.isShow
        }
      },
      changeShow(){
        this.showSearch = !this.showSearch
      },
      closeSearch(){
        this.showSearch = !this.showSearch
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
      .search
        position relative
        & span
          position absolute
          top 0px
          right 15px
          display inline-block
          width 20px
          height 20px
          background-repeat no-repeat
          background-size 100%
          background-image url("./search.png")

</style>
