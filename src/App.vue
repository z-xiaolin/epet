<template>
  <div id="app">

    <!--<E_footer v-show="$route.meta.isShow"/>-->
    <E_footer />
  </div>
</template>

<script>
  import footer from "./components/footer/footer.vue"
  export default {

  components:{
    E_footer:footer,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
