import axios from 'axios'
// 引入提示框(以实际项目为准)
// import { Message } from "element-ui";
// 引入路由(以实际项目为准)
// import router from '@/router'
//引入loading组件(以实际项目为准)
import { Loading } from 'element-ui';
// 创建的axios的实列 instance
const instance = axios.create({
    baseURL: 'https://dify.soul0521.buzz', // 基准地址  可直接配置路径,也可代理路径(以实际项目为准)
    timeout: 10000 // 超时时间
})
// 请求拦截
// 声明变量接收logding
let loadingInstance
instance.interceptors.request.use((config) => {
    // 设置请求头
    // let token = localStorage.getItem('token')
    config.headers.Authorization = 'Bearer app-MjPhIKMyRYpqcgvMKmwsvfYx'
    //设置logding配置 赋值
    loadingInstance = Loading.service({
        lock: true,
        text: '拼命加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    });
   // 返回请求头
    return config
}, err => {
   // 请求失败返回失败信息
    return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use((res) => {
    // 响应成功则关闭loading加载
    loadingInstance.close();
    //返回响应数据
    return res
}, err => {
    // 响应失败则关闭loading加载  
    setTimeout(() => {
        loadingInstance.close();
    }, 1000);
    // 响应失败返回失败信息
    return Promise.reject(err)
})
export default instance
