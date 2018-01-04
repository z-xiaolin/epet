<template>
  <div class="footernav">

    <router-view />

    <ul class="footernav_ul">
      <li @click="changePage(0)"><router-link to="/homePage"><i class="icon1"></i></router-link></li>
      <li @click="changePage(1)"><router-link to="/classify"><i class="icon2"></i></router-link></li>
      <li @click="changePage(2)"><router-link to="/shopCart"><i class="icon3"></i></router-link></li>
      <li @click="changePage(3)"><router-link to="/mine"><i class="icon4"></i></router-link></li>
    </ul>

  </div>
</template>
<script>
  export default{
    props: [],
    data () {
      return {
        
      }
    },
    methods: {
      changePage (num){
        if (num == 0){

        }
      }
    },
    computed: {},
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footernav
    .footernav_ul
      height: 45px;
      line-height: 45px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid #e7e7e7;
      &>li
        width 25%
        height 100%
        float left
        font-size 12px
        text-align center
        & a
          display block
          line-height 45px
          &>i
            background-image url("../../assets/img/img.png")
            background-repeat no-repeat
            background-size 42px 40px
          &>.icon1
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position 0px 0px
            background-size 230px 160px
          &>.icon2
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -82px -40px
            background-size 230px 160px
          &>.icon3
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -82px -80px
            background-size 230px 160px
          &>.icon4
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -84px -120px
            background-size 230px 160px
</style>
