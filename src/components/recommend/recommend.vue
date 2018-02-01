<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrapper">
        <slider>
          <!--插槽start-->
          <div v-for="item in recommends">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" />
            </a>
          </div>
          <!--插槽end-->
        </slider>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入recommend.js
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'
// 引入轮播图组件
import Slider from 'base/slider/slider'

export default {
  data() {
    return {
      // 轮播图数组
      recommends: []
    }
  },
  created() {
    this._getRecommend()
    console.log(this.recommends, 'thisrecommends')
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        console.log(res, 'data')
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
          console.log(this.recommends, 'recommends')
        }
      })
    }
  },
  components: {
    Slider
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

  .recommend
   /*background-color: red*/
   position: fixed
   width: 100%
   top: 88px
   bottom: 0
   .recommend-content
     height: 100%
     overflow: hidden
     .slider-wrapper
       position: relative
       width: 100%
       overflow: hidden

</style>
