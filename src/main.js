// 最先引入补babel补丁(可以使用promise等API)
import 'babel-polyfill'
// 引入vue.js
import Vue from 'vue'
// 引入App.vue
import App from './App'
// 引入router实例
import router from './router'

// 引入fastclick
import fastclick from 'fastclick'

// 引入首页css
import 'common/stylus/index.styl'

// 使用fastclick
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 增加router实例
  router,
  // 挂载到对应的元素上
  render: h => h(App)
})
