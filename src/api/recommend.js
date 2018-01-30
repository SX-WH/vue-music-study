// 没有{jsopp}这样，是因为export defalut
import jsonp from 'common/js/jsonp'
// 引入公共配置
import {commonParams, options} from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  // 合并为一个对象
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  // console.log(jsonp(url, data, options))
  return jsonp(url, data, options)
}
