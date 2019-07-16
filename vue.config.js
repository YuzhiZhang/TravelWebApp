/**
 * @Description:
 * @author: ZhangYuzhi<email:zhangyuzhi1993@gmail.com>
 * @date: created on 2018/11/7
 */
module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8888',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
