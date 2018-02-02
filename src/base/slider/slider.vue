<template>
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <slot>
        </slot>
      </div>
      <div class="dots">
        <span class="dot"  v-for="(item,index) in dots" :class="{active: currentPageIndex === index}" :data-index="index"></span>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
// 引入better-scroll

import BScroll from 'better-scroll'

import {addClass} from 'common/js/dom'

export default {
  data() {
    return {
      dots: [],
      // 当前页是第几页（dots用）
      currentPageIndex: 0
    }
  },
  // 控制轮播图属性
  props: {
    // 循环轮播
    loop: {
      type: Boolean,
      default: true
    },
    // 自动播放
    autoPlay: {
      type: Boolean,
      default: true
    },
    // 间隔时间
    interval: {
      type: Number,
      default: 2000
    }
  },
  mounted() {
    // 保证DOM成功渲染
    // 推荐延时（浏览器刷新通常17ms一次）
    setTimeout(() => {
      this._setSliderWidth()
      // 初始化轮播图点
      this._initDots()
      this._initSlider()

      // 如果设置自动播放，调用自动播放
      if (this.autoPlay) {
        this._play()
      }
    }, 20)

    //改变窗口大小也能自适应
    window.addEventListener('resize', () => {
      // slider还未初始化什么都不做
      if (!this.slider) {
        return
      }

      // 再调这个方法时 不能再加2*sliderWidth这个宽度
      this._setSliderWidth(true)

      //重新计算slider
      this.slider.refresh()
    })
  },
  methods: {
    // 设置slider宽度
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children
      console.log(this.children.length, 'children.length')

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      console.log(sliderWidth, 'sliderWidth')

      for (var i = 0; i< this.children.length; i++) {
        let child = this.children[i]
        // 给每个元素添加slider-item类名
        addClass(child, 'slider-item')

        // 设置每个子元素的宽度
        child.style.width = sliderWidth + 'px'
        // 累加width
        width += sliderWidth
      }

      // 如果loop为true，左右会各克隆一个DOM
      if (this.loop && !isResize) {
        width += 2*sliderWidth
      }
      // 设置sliderGroup宽度
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    // 初始化dots
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    // 初始化slider
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        // 横向滚动
        scrollX: true,
        // 不允许纵向滚动
        scrollY: false,
        // 滑动惯性
        momentum: false,
        // 滑动每次一屏
        snap: true,
        // 无缝衔接
        snapLoop: this.loop,
        // 大于这个阈值可以滑动的下一页(相当于滑过 1/3 就可以到下一页)
        snapThreshold: 0.3,
        // 轮播图切换的动画时间
        snapSpeed: 400,
        // 允许点击(这里注释: beter-scroll与fastclick有冲突)
        // click: true
      })

      // 添加事件(scrollCancel - 滚动结束时触发)
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        // console.log(pageIndex);
        // 如果当前是循环(有拷贝要减1)
        if (this.loop) {
          pageIndex -= 1
        }

        this.currentPageIndex = pageIndex

        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    // 播放轮播图
    _play() {
      let pageIndex = this.currentPageIndex + 1

      // 若是循环
      if (this.loop) {
          pageIndex += 1
      }

      this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  },
  // 组件销毁后(一个好的编程习惯，有利于内存的释放)
  destroyed() {
    console.log("销毁")
    clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

  .slider
   min-height: 1px
   .slider-group
    position: relative
    overflow: hidden
    white-space: nowrap
    .slider-item
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
        img
          display: block
          width: 100%
   .dots
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    text-align: center
    font-size: 0
    .dot
       display: inline-block
       margin: 0 4px
       width: 8px
       height: 8px
       border-radius: 50%
       background-color: rgba(255, 255, 255, .5)
       &.active
         width: 20px
         border-radius: 5px
         background: $color-text-ll
</style>
