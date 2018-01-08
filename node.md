# 1. vuex是什么
	github站点: https://github.com/vuejs/vuex
	在线文档: https://vuex.vuejs.org/zh-cn/
	简单来说: 对应用中组件的状态进行集中式的管理(读/写)

# 2. 状态自管理应用
	state: 驱动应用的数据源
	view: 以声明方式将state映射到视图
	actions: 响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)
![单向数据流](https://vuex.vuejs.org/zh-cn/images/flow.png)

# 3. 多组件共享状态的问题
	多个视图依赖于同一状态
	来自不同视图的行为需要变更同一状态
	以前的解决办法
		* 将数据以及操作数据的行为都定义在父组件
		* 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
	vuex就是用来解决这个问题的
![vuex结构](https://vuex.vuejs.org/zh-cn/images/vuex.png)

# 4. vuex的核心概念
## 1). state
	vuex管理的状态对象
	它应该是唯一的
	const state = {
		xxx: initValue
	}
## 2). mutations
	包含多个直接更新state的方法(回调函数)的对象
	谁来触发: action中的commit('mutation名称')
	只能包含同步的代码, 不能写异步代码
	const mutations = {
		yyy (state, data) {
			// 更新state的某个属性
		}
	}
## 3). actions
	包含多个事件回调函数的对象
	通过执行: commit()来触发mutation的调用, 间接更新state
	谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
	可以包含异步代码(定时器, ajax)
	const actions = {
		zzz ({commit, state}, data1) {
			commit('yyy', data2)
		}
	}
## 4). getters
	包含多个计算属性(get)的对象
	谁来读取: 组件中: $store.getters.xxx
	const getters = {
		mmm (state) {
			return ...
		}
	}
## 5). modules
	包含多个module
	一个module是一个store的配置对象
	与一个组件(包含有共享数据)对应

## 6). 向外暴露store对象
	export default new Vuex.Store({
		state,
		mutations,
		actions,
		getters
	})

## 7). 组件中:
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: mapGetters(['mmm'])
		methods: mapActions(['zzz'])
	}

	{{mmm}} @click="zzz(data)"


## 8). 映射store
	import store from './store'
	new Vue({
		store
	})

## 9). store对象
	1.所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象
	2.属性:
	  state: 注册的state对象
	  getters: 注册的getters对象
	3.方法:
	  dispatch(actionName, data): 分发action

# 5. 将vuex引到项目中
## 1). 下载: npm install vuex --save
## 2). 使用vuex
	1.store.js
		import Vuex from 'vuex'
		export default new Vuex.Store({
			state,
			mutations,
			actions,
			getters,
			modules
		})
	2.main.js
		import store from './store.js'
		new Vue({
			store
		})
# 1.项目优化/扩展
## 1、 缓存路由组件对象
     <keep-alive>
        <router-view />
     </keep-alive>
   * 好处：复用路由组件对象，复用路由组件获取的后台数据
   * 缓存类型：ES引擎缓存(内存缓存/硬盘缓存)/服务器缓存
   * keep-alive  属于ES引擎内存缓存
## 2、 路由组件懒加载
    - 拆分打包 + 需要时才从服务器端请求获取路由组件相对应的包
### 1.下载 vue-router
    npm install vue-router --save
### 2.如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
    import Vue from 'vue'
    import VueRouter from 'vue-router'
### 3.路由组件懒加载 -- import()函数，运行时动态加载模块包
    const goods = () => import("../pages/goods/goods.vue")
    在最开始时，路由组件的代码浏览器根本没有获取，此时在服务器端(开发时期在服务器内存中)，
    在页面获取路由组件时，才会获取相应组件代码 -- 延迟加载路由组件
## 3、 图片懒加载
### 1.下载 vue-lazyload
      npm install vue-lazyload --save
### 2.引入、声明使用
      import Vue from 'vue'
      import VueLazyload from 'vue-lazyload'
      import loading from 'xxx/xx.gif'
      // 声明使用
      Vue.use(VueLazyload, { // 内部会多一个全局指令：v-lazy
        // loading: 'xxx/loading.gif', // 加载图片的路径
        loading: loading
      })
### 3.组件中使用
      <img v-lazy="imgUrl" />  // imgUrl -> 正常图片的路径
## 4、 使用 vue UI 组件库：mint-ui --- 饿了么
### 1.下载 mint-ui
    npm i mint-ui -S/--save
### 2.完整引入
    import Vue from 'vue'
    import MintUI from 'mint-ui'
    import 'mint-ui/lib/style.css' // 需要注意的是，样式文件需要单独引入
    Vue.use(MintUI)
### 3.按需引入
    借助 babel-plugin-component 插件，我们可以只引入需要的组件，以达到减小项目体积的目的。
#### 1) 安装 babel-plugin-component：
    npm install babel-plugin-component -D

#### 2) 将 .babelrc 修改为：
    {
      "presets": [
        ["es2015", { "modules": false }]
      ],
      "plugins": [["component", [ // 主要添加该数组 ["component",[{ }]]
        {
          "libraryName": "mint-ui",
          "style": true
        }
      ]]]
    }

#### 3) 如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：
       import Vue from 'vue'
       import { Button, Cell } from 'mint-ui'

       Vue.component(Button.name, Button)
       Vue.component(Cell.name, Cell)
       /* 或写为
        * Vue.use(Button)
        * Vue.use(Cell)
        */
### 4. 在组件中使用 mint-ui 组件
    注意：组件分为两种：
        标签组件：在 main.js 中可以注册成全局标签组件，也可以在某个组件中引入(非全局组件)
        函数组件：哪个组件中使用，在哪个组件中引入
#### 如 标签组件 button组件：
      <mt-button type="primary">primary</mt-button>
#### 如 函数组件 Toast组件：
      Toast({
        message: '提示内容',
        position: 'bottom',
        duration: 3000
      });
#### 如 函数组件 Message Box 组件：
    MessageBox.confirm('确定执行此操作?').then(action => {
      ... // 确定按钮之后调用的回调函数
    },
    () => {...} // 取消按钮之后的回调函数
    )
## 5、滑动库：vue-scroller
### 1. 下载 vue-scroller
    npm i vue-scroller -S/--save
### 2. 引入并声明使用
    import Vue from 'vue'
    import VueScroller from 'vue-scroller'
    Vue.use(VueScroller)  // 内部会多一个 <scroller> 全局标签
### 3. 在组件中使用
    <scroller
      :on-refresh="refresh"   // 组件顶部刷新效果
      :on-infinite="infinite">   // 组件底部懒加载效果
      <!-- content goes here -->  // 需要滚动的标签内容
    </scroller>
    注意：vue-scroller 只能实现垂直方向的滚动，不能水平滚动
## 6、滑动库：better-scroll
    better-scroll 是一款重点解决移动端（未来可能会考虑 PC 端）各种滚动场景需求的插件。
    better-scroll 是基于原生 JS 实现的，不依赖任何框架
### 1. 下载 better-scroll
    npm install better-scroll --save
### 2. 引入
    1) webpack 等构建工具都支持从 node_modules 里引入代码：
        import BScroll from 'better-scroll'
    2) 如果是 ES5 的语法，如下：
        var BScroll = require('better-scroll')
### 3. 组件中使用
    1) 简单使用：
        import BScroll from 'better-scroll'
        let wrapper = document.querySelector('.wrapper') // 外层 wrapper 容器
        let scroll = new BScroll(wrapper)
    2) better-scroll 支持很多参数配置，可以在初始化的时候传入第二个参数，比如：
        import BScroll from 'better-scroll'
        let scroll = new BScroll('.wrapper',{ // 配置对象
            scrollY: true,
            click: true   // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
        })

##### better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素都会被忽略。

## 7、使用 proxy(代理) 解决开发环境下的ajax跨域问题
### 1.接口文档中一个数据包含的四个方面
    1) 请求Url
        eg: http://localhost:3000/seller
    2) 请求方式
        get/post
    3) 参数类型
        query：  eg: url?phone="137123..."
          | 参数  | 是否必选 | 类型 |说明  |
          | phone |    Y     |string|手机号|
        param：      eg: url/137123...
          路由path以占位符形式："/:phone" (占位 / 标识)
    4) 返回数据的示例
        数据的类型/格式
### 2.使用 vue-server 模拟服务器端，管理数据
    1) 问题：
      在新版本的vue脚手架，配置中没有直接使用 express 启动服务，而是利用 webpack-dev-server 启动的服务
      老版本在配置中使用 express模拟数据接口的方式就不可用了
    2) 解决：
      单独创建一个 node+express 应用(相当于服务器),在此提供数据接口
      问题：
        ajax 请求存在跨域请求问题(开发时的问题)
        服务器访问端口号：3000
        浏览器vue脚手架端口号：8080
      解决方法：webpack 中配置 proxy 代理 (代理后台转发请求)
        proxyTable:{
          "/api":{   // 匹配所有以"/api"开头的请求路径
            target:"http://localhost:3000",   // 代理目标的基础路径
            changeOrigin:true,  // 支持跨域
            pathRewrite:{  // 重写路径：去掉路径中开头的"/api"
              "^/api": ""
            }
          }
        }


## 8、小球动画的实现
### 1. 使用js控制动：
    动画的起始位置不确定
### 2. 使用2层div定义小球:
    小球动画在x轴和y轴上的效果不一样
### 3. 生成多个 `<transition>` 标签:
    每个小球的动画都是独立的
### 4. 利用 vuex 中的 JavaScript 钩子函数
#### 1) 页面模板
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          v-on:before-leave="beforeLeave"
          v-on:leave="leave"
          v-on:after-leave="afterLeave"
          v-on:leave-cancelled="leaveCancelled"
        >
          <!-- ... -->

        </transition>
#### 2) js 代码
        methods: {
          <!-- 进入时 -->
          // 在 enter 动画开始之前回调, 指定动画起始时的样式状态
          beforeEnter: function (el) {
            // ...
          },
          // 在 beforeEnter 执行完后立即回调，指定动画结束时的样式状态
          enter: function (el, done) {
            // ...
            done()
          },
          // 在动画结束后回调
          afterEnter: function (el) {
            // ...
          },
          enterCancelled: function (el) {
            // ...
          },

          <!-- 离开时 -->
          beforeLeave: function (el) {
            // ...
          },
          // 此回调函数是可选项的设置
          // 与 CSS 结合时使用
          leave: function (el, done) {
            // ...
            done()
          },
          afterLeave: function (el) {
            // ...
          },
          // leaveCancelled 只用于 v-show 中
          leaveCancelled: function (el) {
            // ...
          }
        }
        这些钩子函数可以结合 CSS transitions/animations 使用，也可以单独使用。

## 9、路由组件之间的切换与主页面路由的刷新
### 1. 路由组件之间的切换
    路由组件间的切换，替代 浏览器历史记录
    this.$router.replace('/msite')
### 2. 主页面路由的刷新
    判断是否在当前msite路由页面
    if (this.$route.path === '/msite') {
      // 刷新页面
      window.location = '/'
    } else {
      // 路由组件间的切换
      this.$router.replace('/msite')
    }


# 封装ajax请求
## 1.代理服务器的配置
## 2.封装ajax函数(axios请求返回promise对象)
## 3.在api中编写接口函数(调用ajax函数)
## 4.在actions中发送axios请求()
