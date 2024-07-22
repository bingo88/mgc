module.exports = {
    devServer: {
        // headers: {
        //     'Access-Control-Allow-Origin': '*', // 允许所有源访问
        //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // 允许请求方法
        //     'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With' // 允许请求头
        // }
        proxy: {
            '/api': {
              target: 'https://dify.soul0521.buzz',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              },
            //   onProxyRes: function (proxyRes, req, res) {
            //     // 删除可能存在的多余的 CORS 头
            //     proxyRes.headers['Access-Control-Allow-Origin'] = 'http://192.168.1.17:8080';
            //   }
            }
          }
    }
}