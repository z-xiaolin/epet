<template>
  <div class="footernav">

    <router-view />

    <ul class="footernav_ul">
      <li v-if="$route.path.indexOf('homePage') !== -1" @click="changePage('/homePage')">
        <router-link to="/homePage"><i class="icon1"></i></router-link>
      </li>
      <li v-else>
        <router-link to="/homePage"><i class="icon11"></i></router-link>
      </li>

      <li v-if="$route.path.indexOf('classify') !== -1" @click="changePage('/classify')">
        <router-link to="/classify"><i class="icon2"></i></router-link>
      </li>
      <li v-else>
        <router-link to="/classify"><i class="icon22"></i></router-link>
      </li>

      <li v-if="$route.path.indexOf('shopCart') !== -1" @click="changePage('/shopCart')">
        <router-link to="/shopCart"><i class="icon3"></i></router-link>
      </li>
      <li v-else>
        <router-link to="/shopCart"><i class="icon33"></i></router-link>
      </li>
      <li v-if="$route.path.indexOf('mine') !== -1" @click="changePage('/mine')">
        <router-link to="/mine"><i class="icon4"></i></router-link>
      </li>
      <li v-else>
        <router-link to="/mine"><i class="icon44"></i></router-link>
      </li>
    </ul>

  </div>
</template>
<script>
  export default{
    props: [],
    data () {
      return {
        icons:[
          {icon1:"background-position 0px 0px"}
        ]
      }
    },
    methods: {
      changePage (path){
       this.$router.replace(path)
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
          &>.icon11
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -84px 0px
            background-size 230px 160px
          &>.icon22
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -82px -40px
            background-size 230px 160px
          &>.icon2
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position 2px -40px
            background-size 230px 160px
          &>.icon33
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -82px -80px
            background-size 230px 160px
          &>.icon3
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position 2px -80px
            background-size 230px 160px
          &>.icon44
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position -84px -120px
            background-size 230px 160px
          &>.icon4
            display: inline-block;
            vertical-align: middle;
            width: 42px;
            height: 40px;
            background-position 0px -120px
            background-size 230px 160px
</style>
