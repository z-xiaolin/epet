<template>
  <div class="carousel">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./imgs/carousel_1.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./imgs/carousel_2.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./imgs/carousel_3.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./imgs/carousel_4.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./imgs/carousel_5.jpg"></mt-swipe-item>
      <mt-swipe-item><img src="./imgs/carousel_6.jpg"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    props: [],
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width 100%
    height 160px
    & img
      width 100%
      height 100%
</style>
