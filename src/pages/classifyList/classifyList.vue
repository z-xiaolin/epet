<template>
  <div class="tab1_content">
    <div class="left">
      <ul class="list">
        <li class="active"><a href="#">为您推荐</a></li>
        <li><a href="#">猫咪主粮</a></li>
        <li><a href="#">猫咪零食</a></li>
        <li><a href="#">猫咪日用</a></li>
        <li><a href="#">猫咪玩具</a></li>
        <li><a href="#">猫咪保健</a></li>
        <li><a href="#">猫咪医疗</a></li>
        <li><a href="#">猫咪出行</a></li>
        <li><a href="#">猫咪装扮</a></li>
        <li><a href="#">猫咪美容</a></li>
        <li><a href="#">猫咪香波</a></li>
        <li><a href="#">猫咪周边</a></li>
        <li><a href="#">猫咪定制</a></li>
        <li><a href="#">猫咪书籍</a></li>
      </ul>
    </div>
    <div class="right">
      <div class="right_content">
        <div class="right_top">
          <div class="title1"><span>热门分类</span></div>
          <div class="top_list">
            <ul class="list">
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
            </ul>
          </div>
        </div>
        <div class="right_bottom">
          <div class="title2"><span>热门品牌</span></div>
          <div class="bottom_list">
            <ul class="list">
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>美士</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>进口猫粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>进口猫粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>进口猫粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>进口猫粮</p>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="imgDiv"><img src="../../pages/classify/carousel_4.jpg" alt=""></div>
                  <p>进口猫粮</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  export default{
    props: [],
    data () {
      return {
        isShow: true
      }
    },
    mounted(){
      let scrollX = new BScroll(".left", {click:true, scrollX:true})
      let scrollX2 = new BScroll(".right", {click:true, scrollX:true})
    },
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
          &>a
            color black
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
