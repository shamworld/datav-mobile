/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-20 18:23:40
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-20 18:28:05
 * @Deprecated: 否
 * @FilePath: /datav-mobile/vue.config.js
 */
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 32
})

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
}
