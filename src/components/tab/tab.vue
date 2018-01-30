<template>
    <ul class="tab clearfloat">
      <router-link class="fl tc tab-item" tag="li" to="/recommend">
        <span class="tab-link">推荐</span>
      </router-link>
      <router-link class="fl tc tab-item" tag="li" to="/singer">
        <span class="tab-link">歌手</span>
      </router-link>
      <router-link class="fl tc tab-item" tag="li" to="/rank">
        <span class="tab-link">排行</span>
      </router-link>
      <router-link class="fl tc tab-item" tag="li" to="/search">
        <span class="tab-link">搜索</span>
      </router-link>
    </ul>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    height: 44px
    line-height: 44px
    color: $color-text-l
    font-size: $font-size-medium
    .tab-item
      width: 25%
      /*background-color: red*/
      .tab-link
        /*background-color: pink*/
        padding-bottom: 5px
        position: relative
        top: -2.5px
    .router-link-active .tab-link
      border-bottom: 2px solid $color-theme
      color: $color-theme

</style>
