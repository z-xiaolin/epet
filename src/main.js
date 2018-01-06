import Vue from 'vue'
import { Swipe, SwipeItem, Tabbar, TabItem} from 'mint-ui'

import router from './router'
import App from "./App.vue"
import 'mint-ui/lib/style.css'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
