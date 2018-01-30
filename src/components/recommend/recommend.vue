<template>
  <div>
    推荐页面
  </div>
</template>

<script type="text/ecmascript-6">
// 引入recommend.js
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
  created() {
    this._getRecommend()
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        console.log(res, 'data')
        if (res.code === ERR_OK) {

        }
      })
    }
  }
}
</script>

<style scoped>

</style>
