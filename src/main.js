import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'

import router from './router'
import App from "./App.vue"

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
