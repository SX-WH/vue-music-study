import Vue from 'vue'
// 引入路由
import Router from 'vue-router'
// 引入Tab四个组件
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'
// 使用路由
Vue.use(Router)

// 设置路由
export default new Router({
  routes: [
    // 指定根默认呈现页面
    // 注意：这里用redirect！
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
