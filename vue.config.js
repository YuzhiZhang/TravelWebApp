/**
 * @Description:
 * @author: ZhangYuzhi<email:zhangyuzhi1993@gmail.com>
 * @date: created on 2018/11/7
 */
module.exports = {
  devServer: {
    port: 8088,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
