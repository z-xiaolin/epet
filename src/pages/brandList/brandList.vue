<template>
  <div class="brand">
    <div class="brand-list">
      <div class="brand_type" v-for="(brandItem, index) in BrandList.brand" :key="index">
        <div class="title">
          <span>—— {{brandItem.title}} ——</span>
        </div>
        <div class="brandList">
          <ul class="list">
            <li v-for="(item, index) in brandItem.list" :key="index">
              <a href="#">
                <img :src="item.logo" alt="">
                <p class="p1">{{item.nanme}}</p>
                <p class="p2">{{item.address}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="all">
      <a href="https://wap.epet.com/brand.html?fw=0">
        <span class="qb">全部</span>
      </a>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import {mapState} from "vuex"
  export default{
    props: [],
    data () {
      return {}
    },
    mounted(){
      this.$store.dispatch("requestGoodsList")
      let scrollY = new BScroll(".brand", {click:true, scrollX:true})
    },
    methods: {},
    computed: {
      ...mapState(['BrandList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .brand
    height 580px
    .brand-list
      margin-top 5pxs
      .brand_type
        background-color #fff
        padding-bottom: 15px;
        margin-bottom: 10px;
        .title
          padding-top 20px
          color #999
          font-size 12px
          text-align center
          &>span
            display inline-block
            line-height 19px
            height 19px
        .brandList
          padding 0 5px
          .list
            overflow hidden
            &>li
              float left
              box-sizing border-box
              margin-top 20px
              width 33.33%
              padding 0 5px
              & a
                text-align center
                /*padding 50px 10px 10px*/
              & img
                padding  10px 15px
                border 1px solid #e2e2e2
                height 40px
              & p
                font-size 12px
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              & .p1
                font-size 13px
                margin-top 5px
                color #000
              & .p2
                color #999

    .all
      width 40px
      height 40px
      line-height 40px
      text-align center
      right 6px
      bottom 65px
      position fixed
      /*z-index 10*/
      background rgba(0,0,0,.4)
      border-radius 50%
      & span
        font-size 13px
        color #fff
</style>
