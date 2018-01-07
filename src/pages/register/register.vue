<template>
  <div class="register_wrap">
    <div class="register_info">
      <form method="post">
        <div class="mobile_input">
          <span class="icon"></span>
          <input type="text" placeholder="请输入手机号码">
        </div>
      </form>
    </div>
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
  .register_wrap
    .register_info
      width 100%
      .mobile_input
        height 46px
        line-height 46px
        margin 0 10px
        box-sizing border-box
        border-bottom 1px solid #e2e2e2
        .icon
          display inline-block
          vertical-align middle
          height 17px
          width 17px
          margin-right 6px
          margin-left 5px
          background-repeat no-repeat
          background-size auto 17px
          background-image url("./mobile.png")

</style>
