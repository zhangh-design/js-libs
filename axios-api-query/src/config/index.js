// @ts-nocheck
/**
 * @desc
 * api接口插件全局应该提供的统一参数
 * @type {object}
 * @property {string} mockBasePath mock-url请求地址(可以是相对 URL), 应该外部传入
 * @property {boolean} mock=false mock全局控制开关
 * @property {object} gParams={} URL全局自定义参数
 * @property {boolean} cache=false 缓存控制开关在URL路径后面添加一个时间戳参数 _=1571825001570
 * @property {number} reconnectMaxNum=0 请求失败允许的最大重连次数 - 未做开发
 * @property {string} seq=/ api接口命名空间分隔符
 * @property {string} invalidChar=`~!@#$^&*()=|{}\':;\',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？ 进行特殊字符过滤的字符
 * @property {object} statusMessage={400: '错误请求',404: '找不到请求地址',405: '方法不被允许',500: '内部错误',502: '错误网关',503: '无法获得服务'} 前端response返回状态码提示短语
 * @property {boolean} console_request_enable=false 开启请求参数打印
 * @property {boolean} console_response_enable=false 开启响应参数打印
 * @property {function} request_error_callback=null 请求错误回调函数
 */
export const apiDefaultConfig = {
  // mock-url请求地址(可以是相对 URL), 应该外部传入
  mockBasePath: '',
  // mock全局控制开关
  mock: false,
  // URL全局自定义参数
  gParams: {},
  // 缓存控制开关在URL路径后面添加一个时间戳参数 _=1571825001570
  cache: false,
  // 请求失败允许的最大重连次数 - 未做开发
  reconnectMaxNum: 0,
  // api接口命名空间分隔符
  seq: '/',
  // 进行特殊字符过滤的字符
  invalidChar: '[`~!@#$^&*()=|{}\':;\',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？]',
  // 前端response返回状态码提示短语
  statusMessage: {
    400: '错误请求',
    404: '找不到请求地址',
    405: '方法不被允许',
    500: '内部错误',
    502: '错误网关',
    503: '无法获得服务'
  },
  // 开启请求参数打印
  console_request_enable: false,
  // 开启响应参数打印
  console_response_enable: false,
  // 请求错误回调函数
  request_error_callback: null
}

/**
 * @desc
 * axios全局应该提供的统一参数
 * @type {object}
 * @property {number} timeout=15000 超时时间（毫秒）
 * @property {string} baseURL 访问url目录(可以是相对 URL), 应该外部传入
 * @property {number} maxContentLength=2000 定义允许的响应内容的最大尺寸（字节数）
 * @property {number} status=200 来自服务器响应的 HTTP 访问处理成功状态码
 * @property {string} status=OK 来自服务器响应的 HTTP 状态信息短语
 * @property {array} transformResponse 全局预处理过滤函数
 * @property {object} headers={'Content-Type': 'application/json;charset=UTF-8'} 请求响应头
 * @property {object} defaults 配置的默认值
 * @property {string} responseType='json' 服务器响应的数据类型
 * @property {object} proxy 定义代理服务器的主机名称和端口
 */
export const axiosDefaultConfig = {
  // 超时时间（毫秒）
  timeout: 15000,
  // 访问url目录(可以是相对 URL), 应该外部传入
  baseURL: '',
  // 定义允许的响应内容的最大尺寸（字节数）
  maxContentLength: 2000,
  // 来自服务器响应的 HTTP 访问处理成功状态码
  status: 200,
  // 来自服务器响应的 HTTP 状态信息短语
  statusText: 'OK',
  // 全局预处理过滤函数
  transformResponse: [],
  // 请求响应头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  // 配置的默认值
  defaults: {},
  // 服务器响应的数据类型
  responseType: 'json',
  // 定义代理服务器的主机名称和端口
  proxy: {}
}
