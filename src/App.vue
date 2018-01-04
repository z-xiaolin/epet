<template>
  <div id="app">
    <E_header />

    <E_content />

    <E_footer />

  </div>
</template>

<script>
  import content from "./components/content/content.vue"
  import header from "./components/header/header.vue"
  import footer from "./components/footer/footer.vue"

  export default {

  components:{
    E_header:header,
    E_content:content,
    E_footer:footer,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
