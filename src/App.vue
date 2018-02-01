<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入头部组件
import MHeader from 'components/m-header/m-header'
// 引入tab组件
import Tab from 'components/tab/tab'

export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
     @import "~common/stylus/variable"

     #app
         background: $color-background
</style>
