import {
  apiDefaultConfig,
  axiosDefaultConfig
} from './config/index.js'

import qs from 'querystring'
import axios from './axios'

import _assign from 'lodash/assign'
import _pick from 'lodash/pick'
import _isPlainObject from 'lodash/isPlainObject'
import _isNil from 'lodash/isNil'
import _has from 'lodash/has'
import _replace from 'lodash/replace'
import _isString from 'lodash/isString'
import _get from 'lodash/get'
import _eq from 'lodash/eq'
import _set from 'lodash/set'
import _keys from 'lodash/keys'
import _isObject from 'lodash/isObject'
import _cloneDeep from 'lodash/cloneDeep'
import _includes from 'lodash/includes'
import _concat from 'lodash/concat'
import _isEmpty from 'lodash/isEmpty'
import _now from 'lodash/now'
import _isUndefined from 'lodash/isUndefined'
import _isFunction from 'lodash/isFunction'
import _toUpper from 'lodash/toUpper'
import _isArray from 'lodash/isArray'
/**
 * @class
 * @classdesc axios请求实例构建器
 * @desc 构造函数接收3个参数，第一个参数为必填，第二和三可选
 * @see 插件功能详细介绍请查看 https://github.com/zhangh-design/js-libs/tree/master/api-loader
 * @author zhangh
 * @version 1.0.0
 * @param { {} } userApiConfigModuleList={} - api接口配置描述模型
 * @param { {} } [userApiConfig={}]  - api接口模型配置参数
 * @prop {string} userApiConfig.mockBasePath mock-url请求地址(可以是相对 URL), 应该外部传入
 * @prop {boolean} userApiConfig.mock=false mock全局控制开关
 * @prop {object} userApiConfig.gParams URL全局自定义参数
 * @prop {boolean} userApiConfig.cache=false 缓存控制开关在URL路径后面添加一个时间戳参数 _=1571825001570
 * @prop {string} userApiConfig.seq=/ api接口命名空间分隔符
 * @prop {string} userApiConfig.invalidChar 进行特殊字符过滤的字符 例如：`~!@#$^&*()=|{}\
 * @prop {object} userApiConfig.statusMessage 前端response返回状态码提示短语 例如：400: '错误请求'
 * @prop {boolean} userApiConfig.console_request_enable=false 开启请求参数打印
 * @prop {boolean} userApiConfig.console_response_enable=false 开启响应参数打印
 * @prop {function} userApiConfig.request_error_callback=null 请求错误回调函数
 * @param { {} } [userAxiosConfig={}] - axios实例配置参数
 * @prop {number} userAxiosConfig.timeout=15000 超时时间（毫秒）
 * @prop {string} userAxiosConfig.baseURL 访问url目录(可以是相对 URL), 应该外部传入
 * @prop {number} userAxiosConfig.maxContentLength=2000 定义允许的响应内容的最大尺寸（字节数）
 * @prop {number} userAxiosConfig.status=200 来自服务器响应的 HTTP 访问处理成功状态码
 * @prop {string} userAxiosConfig.status=OK 来自服务器响应的 HTTP 状态信息短语
 * @prop {array} userAxiosConfig.transformResponse 全局预处理过滤函数
 * @prop {object} userAxiosConfig.headers={'Content-Type': 'application/json;charset=UTF-8'} 请求响应头
 * @prop {object} userAxiosConfig.defaults 配置的默认值
 * @prop {string} userAxiosConfig.responseType='json' 服务器响应的数据类型
 * @prop {object} userAxiosConfig.proxy 定义代理服务器的主机名称和端口
 * @example
 * userApiConfigModuleList：{'goods': [{'read':{'name':'',desc: ''}, 'get': {}}]}
 * userApiConfig：{'mockBasePath': 'mock/test/goods/read', 'mock': true}
 * userAxiosConfig：{'timeout': 15000, 'baseURL': 'test/goods/read'}
 *
 */
const Loader = class Api {
  constructor (userApiConfigModuleList = {}, userApiConfig = {}, userAxiosConfig = {}) {
    /**
     * @description
     * 如果你要在自己的业务中使用Loader构造器构造出的axios对象，可以通过实例属性api来获取，
     * 其实实例属性api属性也是Loader加载器唯一对外提供请求实例的对象
     * @access public
     * @type {object}
     * @readonly
     * @default
     * @example
     * 获取：Loader.api['goods/fruit/apple']().then((response)=>{}).catch((error)=>{})
     * 数据：{'goods/fruit/apple': [{'read': {name: 'read',desc: '获取apple列表'}}]}
     * */
    this.api = {}
    if (!_isPlainObject(userApiConfig) || !_isPlainObject(userAxiosConfig) || !_isPlainObject(userApiConfigModuleList)) {
      console.error('error：01')
      return
    }
    // 默认配置和传入的覆盖配置
    /**
     * @access private
     * @readonly
     * @desc api接口模型配置参数
     *
     * */
    this.apiParamsConfig = _pick(_assign(apiDefaultConfig, userApiConfig), _keys(apiDefaultConfig))
    /**
     * @access private
     * @readonly
     * @desc axios实例配置模型
     *
     * */
    this.axiosParamsConfig = _pick(_assign(axiosDefaultConfig, userAxiosConfig), _keys(axiosDefaultConfig))
    this.deconstructApiConfigModule(userApiConfigModuleList)
  }

  /**
   * @description 解析api模型
   * @access private
   * @param { {} } userApiConfigModuleList - api接口模型
   * @example
   * {'goods': [{'read': {}},{'get': {}}]}
   */
  deconstructApiConfigModule (userApiConfigModuleList) {
    for (const [moduleFileHierarchyNameKey, moduleListValue] of Object.entries(userApiConfigModuleList)) {
      for (const apiConfigValue of moduleListValue.values()) {
        this.buildInstance(moduleFileHierarchyNameKey, apiConfigValue)
      }
    }
  }

  /**
   * @description 构建api实例
   * @access private
   * @param {string} namespace  api请求模型命名空间名称
   * @param {Object} args api请求模型参数
   * @prop {string} args.name api接口名称
   * @prop {string} [args.method='GET'] 请求类型
   * @prop {string} [args.desc] 描述
   * @prop {string} [args.baseURL] 访问url目录(可以是相对 URL)
   * @prop {string} args.path='root/user/getUserInfo' 请求接口路径
   * @prop {string} args.mockPath='mock/root/user/getUserInfo' mock请求接口路径
   * @prop {boolean} [args.mock=false] 是否打开mock操作
   * @prop {boolean} [args.cache=false] 是否打开cache
   * @prop {object} [args.restful] restful参数
   * @prop {object} [args.headers] 请求首部字段参数
   * @prop {string} [args.removeInvalidChar=true] 是否执行参数特殊字符过滤
   * @prop {object} [args.params] 待发送 Key/value 参数 GET
   * @prop {object} [args.data] POST请求，待发送 Key/value 参数
   * @prop {object} [args.validator] params和data参数验证对象
   * @prop {object} [args.restfulValidator] restful参数验证对象
   * @prop {string} [args.responseType='json'] 服务器响应的数据类型
   * @prop {object} [args.proxy=null] 定义代理服务器的主机名称和端口
   * @example
   * namespace：'goods/fruit'
   * apiConfigModule: {name: 'read', desc: '', method:'GET', path: 'root/user/getUserInfo',mockPath: 'mock/root/user/getUserInfo',mock: false, cache: false, restful: {}, headers: {}, removeInvalidChar: true, params: {}, data: {},validator: {}, restfulValidator: {}, responseType: 'json', proxy: null}
   */
  buildInstance (namespace = '', {
    name,
    method = 'GET',
    desc = '',
    baseURL,
    path,
    mockPath,
    mock,
    cache = false,
    restful = {},
    headers = {},
    removeInvalidChar = true,
    params = {},
    data = {},
    validator = {},
    restfulValidator = {},
    responseType,
    proxy
  }) {
    // eslint-disable-next-line
    if (_isNil(name) || (_isNil(path) && _isNil(mockPath))) {
      console.error('error：02')
      return
    }
    const apiName = `${namespace}${_get(this, 'apiParamsConfig.seq', '/')}${name}`;
    Object.defineProperty(this.api, apiName, {
      value: (outParams = {
        params: {},
        data: {},
        headers: {},
        restful: {}
      }, outOptions = {
        request_error_callback: null,
        transformResponse: null,
        validator: null,
        restfulValidator: null
      }) => {
        // outParams -> {'restful': {}, 'headers': {}, 'params': {}, 'data': {}}
        _set(headers, 'module-path', `${apiName}`)
        _eq(_has(headers, 'Content-Type'), false) && _set(headers, 'Content-Type', _get(this, 'axiosParamsConfig.headers.Content-Type', 'application/json;charset=UTF-8'));
        _has(outParams, 'headers.Content-Type') && _set(headers, 'Content-Type', _get(outParams, 'headers.Content-Type'))
        let [url, pickParams, pickData, pickHeaders, pickOptions] = [path, {}, {}, {}, {}]
        if ((_get(this, 'apiParamsConfig.mock') && _isNil(mock)) || mock) {
          url = _isNil(mockPath) ? _get(this, 'apiParamsConfig.mockBasePath') : mockPath
        }
        if (_eq(_isEmpty(_get(outParams, 'params', {})), false) || _eq(_isEmpty(params), false)) {
          pickParams = _pick(_assign(params, _get(this, 'apiParamsConfig.gParams', {}), _get(outParams, 'params', {})), _concat(_keys(params), _keys(_get(this, 'apiParamsConfig.gParams', {}))))
        }
        if ((_eq(_get(this, 'apiParamsConfig.cache', false), false) && _eq(cache, false)) || _eq(cache, false)) {
          _set(pickParams, '_', _now())
        }
        if (_eq(_isEmpty(_get(outParams, 'data', {})), false) || _eq(_isEmpty(data), false)) {
          pickData = Loader.transformStringPostData(Loader.removeInvalidChar(_pick(_assign(data, _get(outParams, 'data', {})), _keys(data)), removeInvalidChar), headers, method)
        }
        if (_eq(_isEmpty(_get(outParams, 'restful', {})), false) || _eq(_isEmpty(restful), false)) {
          url = Loader.transformRestfulUrl(url, _pick(_assign(restful, _get(outParams, 'restful', {})), _keys(restful)))
        }
        if (_eq(_isEmpty(_get(outParams, 'headers', {})), false) || _eq(_isEmpty(headers), false)) {
          pickHeaders = Loader.removeInvalidChar(_pick(_assign(headers, _get(outParams, 'headers', {})), _keys(headers)), removeInvalidChar)
        }
        if (_eq(_isEmpty(outOptions), false)) {
          pickOptions = Loader.encapsulationOutOptions(outOptions)
        }
        if (_has(outOptions, 'validator')) {
          _assign(validator, _get(outOptions, 'validator'))
        }
        if (_has(outOptions, 'restfulValidator')) {
          _assign(restfulValidator, _get(outOptions, 'restfulValidator'))
        }
        const requestOptions = this.encapsulationRequestOptions({
          baseURL,
          proxy,
          responseType,
          validator,
          restfulValidator
        })
        return axios({
          ...requestOptions,
          ...pickOptions,
          method: _toUpper(method),
          url,
          headers: pickHeaders,
          params: pickParams,
          data: pickData,
          restful
        })
      }
    })
  }

  /**
   * @desc 处理并发请求
   * @param { array } apiArray api请求实例数组
   * @access public
   * @returns Promise
   * @example
   * Loader.allApi[Loader.api['user/get'](), Loader.api['user/list']()]().then(()=>{}).catch(()=>{})
   */
  allApi (apiArray = []) {
    if (_eq(_isArray(apiArray), false)) {
      apiArray = []
    }
    return Promise.all(apiArray)
  }

  /**
   * @static
   * @desc 转换url地址 fruit/hz/xh/{shop}/read -> fruit/hz/xh/1001/read
   * @access private
   * @param {string} url
   * @param {{}} restfulData
   * @returns {string}
   * @example
   * url：fruit/hz/xh/{shop}/read
   * restfulData：{'shop': 10,'id': 1}
   */
  static transformRestfulUrl (url, restfulData) {
    let restfulUrl = url
    for (const [key, value] of Object.entries(restfulData)) {
      if (_includes(restfulUrl, `{${key}}`)) {
        restfulUrl = _replace(restfulUrl, `{${key}}`, value)
      }
    }
    return restfulUrl
  }

  /**
   * @desc 特殊字符过滤
   * @access private
   * @static
   * @param {{}} requestData - 请求的数据对象 get post put delete
   * @param {boolean} removeInvalidChar=true - 是否需要过滤特殊字符
   */
  static removeInvalidChar (requestData = {}, removeInvalidChar = true) {
    if (!removeInvalidChar) return requestData
    // 全局替换正则
    const reg = new RegExp(_get(this, 'apiParamsConfig.invalidChar'), 'g')
    for (const [key, value] of Object.entries(requestData)) {
      if (_isString(value) && reg.test(value)) {
        requestData[key] = _replace(value, reg, '')
      }
    }
    return requestData;
  }

  /**
   * @desc
   * axios post请求 headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
   * 参数需要通过qs.stringify()进行设置
   * @static
   * @access private
   * @param {{}} requestData
   * @param {{}} headersData
   * @param {string} method=GET
   */
  static transformStringPostData (requestData, headersData, method = 'GET') {
    if (_eq(_toUpper(method), 'POST') && _eq(_get(headersData, 'Content-Type'), 'application/x-www-form-urlencoded; charset=UTF-8')) {
      requestData = qs.stringify(requestData)
    }
    return requestData
  }

  /**
   * @desc 封装外部配置参数
   * @static
   * @access private
   * @param {{}} outOptions 外部参数
   * @returns {{}}
   */
  static encapsulationOutOptions (outOptions = {}) {
    const options = {}
    const requestErrorCallback = _get(outOptions, 'request_error_callback', null)
    const transformResponse = _get(outOptions, 'transformResponse', null)
    if (_isFunction(requestErrorCallback)) {
      _set(options, 'request_error_callback', requestErrorCallback)
    }
    if (_isArray(transformResponse) || _isFunction(transformResponse)) {
      _set(options, 'transformResponse', _isArray(transformResponse) ? transformResponse : [_isFunction(transformResponse)])
    }
    return options
  }

  /**
   * @desc 封装request请求参数
   * @access private
   * @returns {{}}
   */
  encapsulationRequestOptions ({
    baseURL,
    proxy,
    responseType,
    validator,
    restfulValidator
  }) {
    const options = _cloneDeep(_get(this, 'axiosParamsConfig'))
    if (_isObject(proxy)) {
      _set(options, 'proxy', proxy)
    }
    if (_isString(responseType)) {
      _set(options, 'responseType', responseType)
    }
    if (_isUndefined(baseURL)) {
      _set(options, 'baseURL', baseURL)
    }
    if (_isFunction(_get(this, 'apiParamsConfig.request_error_callback', null))) {
      _set(options, 'request_error_callback', _get(this, 'apiParamsConfig.request_error_callback'))
    }
    _set(options, 'statusMessage', _get(this, 'apiParamsConfig.statusMessage', {}))
    _set(options, 'console_response_enable', _get(this, 'apiParamsConfig.console_response_enable', false))
    _set(options, 'console_request_enable', _get(this, 'apiParamsConfig.console_request_enable', false))
    if (_eq(_isArray(_get(options, 'transformResponse', null)), false) && _isFunction(_get(options, 'transformResponse', null))) {
      _set(options, 'transformResponse', [_get(options, 'transformResponse')])
    }
    return _assign(options, {
      validator,
      restfulValidator
    })
  }
}
export default Loader
