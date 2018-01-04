<template>
  <div>
    <h3>footer 组件 。。。</h3>

    <router-view />

    <router-link to="/homePage">首页</router-link>
    <router-link to="/classify">分类</router-link>
    <router-link to="/shopCart">购物车</router-link>
    <router-link to="/mine">我的E宠</router-link>

  </div>
</template>
<script>
  import homePage from "../../pages/homePage/homePage.vue"
  import classify from "../../pages/classify/classify.vue"
  import shopCart from "../../pages/shopCart/shopCart.vue"
  import mine from "../../pages/mine/mine.vue"
  export default{
    props: [],
    data () {
      return {}
    },
    methods: {},
    computed: {},
    /*components:{
      homePage,
      classify,
      shopCart,
      mine
    }*/
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
