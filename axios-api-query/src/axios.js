// 构建axios实例
import { requestSuccessFunc, responseSuccessFunc, responseErrorFunc } from './interceptor/index.js'
import axios from 'axios'

/**
 * @description 自定义axios实例
 */
let instance = null;
instance = axios.create()

/**
 * @desc
 * 异常拦截器只设置了响应错误拦截器如果同时设置两个错误拦截器最终起效果的只有响应错误拦截器
 */
// 添加请求拦截器
instance.interceptors.request.use(requestSuccessFunc)
// 添加响应拦截器
instance.interceptors.response.use(responseSuccessFunc, responseErrorFunc)

export default instance
