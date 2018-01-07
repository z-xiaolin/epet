<template>
  <div class="search_wrap">
    <div class="search_header">
      <div class="go_back" @click="close"></div>
      <div class="search">
        <input type="search" placeholder="搜索你喜欢的宝贝">
        <i class="icon-h_search"></i>
      </div>
      <div class="text"><a href="#">搜索</a></div>
    </div>
    <div class="hot">
      <div class="title">
        <img src="./rmss.png" alt="">
        <span>精品推荐</span>
      </div>
      <div class="label_list">
        <ul class="list">
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
          <li><a href="https://wap.epet.com/goodslist.html?extend_pam=keyword:麦德琳&fw=0">麦德琳</a></li>
        </ul>
      </div>
    </div>
    <div class="recently">
      <div class="icon"></div>
      <p>最近搜索</p>
    </div>
    <div class="history_wrap">
      <div class="wrapper">
        <div class="empty">清空搜索历史</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: {
      closeSearch:Function
    },
    data () {
      return {}
    },
    methods: {
      close(){
        this.closeSearch()
      }
    },
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .search_wrap
    .search_header
      overflow hidden
      padding 7px 12px
      .go_back
        float left
        width 25px
        height 25px
        margin 5px 4px 0
        background-image url("../../assets/imgs/back.png")
        background-repeat no-repeat
        background-position -12px 0
        background-size 100%
      .search
        position relative
        float left
        margin 0 5px
        height: 35px;
        line-height: 35px;
        font-size 14px
        padding: 0 10px 0 5px
        &>input
          width 240px
          background-color #eee
          padding 8px
          border-radius 6px
          font-size 14px
        .icon-h_search
          display inline-block
          position: absolute
          top 10px
          right 18px
          background-image url("../../pages/classify/search.png")
          background-repeat no-repeat
          background-size 20px
          width 20px
          height 20px

      .text
        height 35px
        line-height 35px
        font-size 16px
        padding-right 10px
        text-align right
    .hot
      .title
        background: #fbfbfd;
        height: 30px;
        line-height: 30px;
        padding-left: 12px;
        font-size: 14px;
        &>img
          vertical-align middle
          margin-top -2px
          margin-right 8px
          width 20px
          height 20px
        &>span
          font-size 14px
          color #666
      .label_list
        background-color #F4F5F7
        padding: 0 12px 23px;
        box-sizing: border-box;
        .list
          overflow hidden
          &>li
            float left
            height 19px
            line-height 19px
            padding: 3px 2px;
            margin: 10px 10px 0 0;
            color: #999;
            font-size: 12px;
            border-radius: 15px;
            &>a
              display inline-block
              background-color #fff
              padding 3px 10px
              border-radius 20px
              height 100%
    .recently
      overflow hidden
      height 30px
      line-height 30px
      padding-left 12px
      font-size 14px
      color #666
      .icon
        float left
        width 20px
        height 20px
        margin-top 4px
        margin-right 8px
        background-image url("./history.png")
        background-size 100%
        background-repeat no-repeat
      & p
        float left
    .history_wrap
      height 380px
      background-color #F4F5F7
      padding-top 40px
      .wrapper
        .empty
          margin 0 20%
          text-align center
          width 60%
          line-height 40px
          font-size 15px
          border 1px solid #777
          border-radius 5px
</style>
