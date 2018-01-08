<template>
  <div>
    <!--<login />-->

    <router-view />
    <userCenter />
    <!--<router-link to="/mine/register">注册</router-link>-->
    <!--<router-link to="/mine/login">登录</router-link>-->
  </div>
</template>
<script>
//  import register from "../register/register.vue"
  import login from "../login/login.vue"
  import userCenter from "../userCenter/userCenter.vue"
  export default{
    components:{
      login,
//      register,
      userCenter
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
