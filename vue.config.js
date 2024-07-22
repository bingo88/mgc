module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*', // 允许所有源访问
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // 允许请求方法
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With' // 允许请求头
        }
    }
}