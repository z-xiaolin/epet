<template>
  <div>
    <!--<login />-->

    <router-view />
    <!--<router-link to="/mine/register">注册</router-link>-->
    <!--<router-link to="/mine/login">登录</router-link>-->
  </div>
</template>
<script>
//  import register from "../register/register.vue"
  import login from "../login/login.vue"
  export default{
    components:{
      login,
//      register,
      login
    },
    props: [],
    data () {
      return {}
    },
    methods: {},
    computed: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
