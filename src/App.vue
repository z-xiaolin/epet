<template>
  <div id="app">
    <E_header />


    <E_content />

    <E_footer />

  </div>
</template>

<script>
  import header from "./components/footer/footer.vue"

  import content from "./components/content/content.vue"
  import footer from "./components/header/header.vue"

export default {

  components:{
    E_header:header,
//    carousel,
    E_content:content,
    E_footer:footer,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
