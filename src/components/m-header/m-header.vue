<template>
     <div class="m-header">
       <div class="m-header-container clearfloat">
         <span class="fl icon"></span>
         <p class="fl text">Chicken Music</p>
       </div>
     </div>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
      @import "~common/stylus/variable"
      @import "~common/stylus/mixin"

      .m-header
        height: 44px
        position: relative
        .m-header-container
          display: inline-block;
          height: 44px
          position: absolute
          left: 50%
          top: 50%
          margin: -22px 0 0 -71.52px
          .icon
            width: 30px
            height: 32px
            bg-image(logo)
            background-size: 30px 32px
            margin: 6px 9px 0 0
          .text
            line-height: 44px
            color: $color-theme
            font-size: $font-size-large
</style>
