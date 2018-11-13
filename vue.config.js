/**
 * @Description:
 * @author: ZhangYuzhi<email:zhangyuzhi1993@gmail.com>
 * @date: created on 2018/11/7
 */
module.exports = {
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://192.168.137.1:8088',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
