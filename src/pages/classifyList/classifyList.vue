<template>
  <div class="tab1_content">
    <div class="left">
      <ul class="list">
        <li v-for="(Category, index) in Categorys" :key="index"
            :cateId="Category.cateid" @click="changeKind($event)">
          <span>{{Category.name}}</span>
        </li>
      </ul>
    </div>

    <div class="right">
      <div class="right_content">
        <div  v-for="(GoodsType, index) in GoodsList.cate_list" :key="index">
          <div class="right_top">
            <div class="title1" v-if="GoodsType.type == 0">
              <span>{{GoodsType.title}}</span>
              <span class="icon" v-if="GoodsType['rigth_img']">
                <img :src="GoodsType['rigth_img'].image" alt="">
              </span>
            </div>
            <div class="top_list" v-if="GoodsType.type == 0">
              <ul class="list" >
                <li v-for="(kind, index) in GoodsType.list" :key="index">
                  <a href="#">
                    <img :src="kind.photo" alt="">
                    <p>{{kind.name}}</p>
                  </a>
                </li>
                <!--<li>
                  <a href="#">
                    <img src="../../pages/classify/hour2_1.jpg" alt="">
                    <p>进口猫粮</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../pages/classify/hour2_1.jpg" alt="">
                    <p>进口猫粮</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../pages/classify/hour2_1.jpg" alt="">
                    <p>进口猫粮</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../pages/classify/hour2_1.jpg" alt="">
                    <p>进口猫粮</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../pages/classify/hour2_1.jpg" alt="">
                    <p>进口猫粮</p>
                  </a>
                </li>-->
              </ul>
            </div>
          </div>

          <div class="right_bottom">
            <div class="title2" v-if="GoodsType.type == 2">
              <span>{{GoodsType.title}}</span>
            </div>
            <div class="bottom_list" v-if="GoodsType.type == 2">
              <ul class="list" >
                <li v-for="(brand, index) in GoodsType.list" :key="index">
                  <a href="#">
                    <div class="imgDiv">
                      <img :src="brand.logo" alt="">
                    </div>
                    <p>{{brand.name}}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import {mapState } from "vuex"
  export default{
    props: [],
    data () {
      return {
        isShow: true,
      }
    },
    mounted(){
      // 左侧列表 请求
      this.$store.dispatch("requestClassify" )

      // 右侧列表 初始化显示 请求参数

      let obj = {
        do: "getChildren",
        owner: "88888",
        pet_type: "cat"
      }
      // 右侧列表 初始化 请求
      this.$store.dispatch("requestGoodsList", obj)

      let scrollX = new BScroll(".left", {click:true, scrollX:true})
      let scrollX2 = new BScroll(".right", {click:true, scrollX:true})
    },
    methods: {
      changeClassify(TorF){
        if (!TorF){
          this.isShow = !this.isShow
        }
      },
      // 左侧点击事件，发送相应的请求
      changeKind (event) {
        let cateId = event.target.getAttribute('cateId')
        console.log(cateId)

        let obj = {
          do: "getChildren",
          owner: cateId,
          pet_type: "cat"
        }
        this.$store.dispatch("requestGoodsList", obj)
      },
    },
    computed: {
      ...mapState(['Categorys', 'GoodsList'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab1_content
    .left
      float left
      width 70px
      height 580px
      overflow hidden
      background-color #fff
      border-right 5px solid #f3f4f5
      .list
        width 70px
        &>li
          box-sizing border-box
          text-align center
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f5;
          width: 70px;
          height: 50px;
          font-size: 13px;
          & span
            color black
        & li:first-child
          & span
            color deeppink
        .active
          background-color #f3f4f5
        .active a
          color deeppink
    .right
      overflow hidden
      float right
      height 580px
      .right_content
        width 300px
        .right_top
          background-color #fff
          padding 15px 5px 20px
          border-top: 1px solid #f3f4f5;
          .title1
            padding 0px 0 0 5px
            margin-top 10px
            color #999
            font-size 12px
            overflow hidden
            & img
              display inline-block
              height 10px
              width 46px
              margin-top 5px
              float right
              /*background-image url("./cate_right_img.png")*/
              background-repeat no-repeat
              background-size 46px 10px
          .top_list
            .list
              overflow hidden
              padding-top 10px
              &>li
                float left
                width 33%
                & img
                  padding 0 5px
                  width 100%
                & p
                  color #000
                  height 20px
                  margin-top 10px
                  text-align center
                  font-size 12px
        .right_bottom
          background-color #fff
          padding 15px 5px 20px
          border-top: 1px solid #f3f4f5;
          .title2
            padding 0px 0 0 5px
            margin-top 10px
            color #999
            font-size 12px
          .bottom_list
            .list
              overflow hidden
              padding-top 10px
              &>li
                float left
                box-sizing border-box
                padding: 0 5px
                width 50%
                margin-top: 10px
                & .imgDiv
                  width 90%
                  & img
                    padding 0 5px
                    width 100%
                & p
                  color #000
                  height 20px
                  margin-top 10px
                  text-align center
                  font-size 12px
</style>
