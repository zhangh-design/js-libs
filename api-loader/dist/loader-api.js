(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["LoaderApiLibrary"] = factory(require("axios"));
	else
		root["LoaderApiLibrary"] = factory(root["axios"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__81__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var lodash_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87);
/* harmony import */ var lodash_replace__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_replace__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_eq__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(117);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(118);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(42);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash_now__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(119);
/* harmony import */ var lodash_now__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_now__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(120);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(47);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(121);
/* harmony import */ var lodash_toUpper__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_toUpper__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(13);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_23__);


























/**
 * @class Loader
 * @classdesc axios请求实例构建器
 * @desc 构造函数接收3个参数，第一个参数为必填，第二和三可选
 * @see 插件功能详细介绍请查看 https://github.com/zhangh-design/js-libs/tree/master/api-loader
 * @author zhangh
 * @version 1.0.0
 * @param { {} } userApiConfigModuleList={} - api接口配置描述模型
 * @param { {} } [userApiConfig={}]  - api接口模型配置参数
 * @prop {string} userApiConfig.mockBasePath - mock-url请求地址(可以是相对 URL), 应该外部传入
 * @prop {boolean} userApiConfig.mock=false - mock全局控制开关
 * @prop {object} userApiConfig.gParams - URL全局自定义参数
 * @prop {boolean} userApiConfig.cache=false - 缓存控制开关在URL路径后面添加一个时间戳参数 _=1571825001570
 * @prop {string} userApiConfig.seq=/ - api接口命名空间分隔符
 * @prop {string} userApiConfig.invalidChar - 进行特殊字符过滤的字符 例如：`~!@#$^&*()=|{}\
 * @prop {object} userApiConfig.statusMessage - 前端response返回状态码提示短语 例如：400: '错误请求'
 * @prop {boolean} userApiConfig.console_request_enable=false - 开启请求参数打印
 * @prop {boolean} userApiConfig.console_response_enable=false - 开启响应参数打印
 * @prop {function} userApiConfig.request_error_callback=null - 请求错误回调函数
 * @param { {} } [userAxiosConfig={}] - axios实例配置参数
 * @prop {number} userAxiosConfig.timeout=15000 - 超时时间（毫秒）
 * @prop {string} userAxiosConfig.baseURL - 访问url目录(可以是相对 URL), 应该外部传入
 * @prop {number} userAxiosConfig.maxContentLength=2000 - 定义允许的响应内容的最大尺寸（字节数）
 * @prop {number} userAxiosConfig.status=200 - 来自服务器响应的 HTTP 访问处理成功状态码
 * @prop {string} userAxiosConfig.status=OK - 来自服务器响应的 HTTP 状态信息短语
 * @prop {array} userAxiosConfig.transformResponse - 全局预处理过滤函数
 * @prop {object} userAxiosConfig.headers={'Content-Type': 'application/json;charset=UTF-8'} - 请求响应头
 * @prop {object} userAxiosConfig.defaults - 配置的默认值
 * @prop {string} userAxiosConfig.responseType='json' - 服务器响应的数据类型
 * @prop {object} userAxiosConfig.proxy - 定义代理服务器的主机名称和端口
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
    if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5___default()(userApiConfig) || !lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5___default()(userAxiosConfig) || !lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_5___default()(userApiConfigModuleList)) {
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
    this.apiParamsConfig = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(_config_index_js__WEBPACK_IMPORTED_MODULE_0__["apiDefaultConfig"], userApiConfig), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(_config_index_js__WEBPACK_IMPORTED_MODULE_0__["apiDefaultConfig"]))
    /**
     * @access private
     * @readonly
     * @desc axios实例配置模型
     *
     * */
    this.axiosParamsConfig = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(_config_index_js__WEBPACK_IMPORTED_MODULE_0__["axiosDefaultConfig"], userAxiosConfig), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(_config_index_js__WEBPACK_IMPORTED_MODULE_0__["axiosDefaultConfig"]))
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
   * @param {string} namespace - api请求模型命名空间名称
   * @param {Object} args - api请求模型参数
   * @prop {string} args.name - api接口名称
   * @prop {string} [args.method='GET'] - 请求类型
   * @prop {string} [args.desc] - 描述
   * @prop {string} [args.baseURL] - 访问url目录(可以是相对 URL)
   * @prop {string} args.path='root/user/getUserInfo' - 请求接口路径
   * @prop {string} args.mockPath='mock/root/user/getUserInfo' - mock请求接口路径
   * @prop {boolean} [args.mock=false] - 是否打开mock操作
   * @prop {boolean} [args.cache=false] - 是否打开cache
   * @prop {object} [args.restful] - restful参数
   * @prop {object} [args.headers] - 请求首部字段参数
   * @prop {string} [args.removeInvalidChar=true] - 是否执行参数特殊字符过滤
   * @prop {object} [args.params] - 待发送 Key/value 参数 GET
   * @prop {object} [args.data] - POST请求，待发送 Key/value 参数
   * @prop {object} [args.validator] - params和data参数验证对象
   * @prop {object} [args.restfulValidator] - restful参数验证对象
   * @prop {string} [args.responseType='json'] - 服务器响应的数据类型
   * @prop {object} [args.proxy=null] - 定义代理服务器的主机名称和端口
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
    if (lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default()(name) || (lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default()(path) && lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default()(mockPath))) {
      console.error('error：02')
      return
    }
    const apiName = `${namespace}${lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.seq', '/')}${name}`
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
        lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(headers, 'module-path', `${apiName}`)
        lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_has__WEBPACK_IMPORTED_MODULE_7___default()(headers, 'Content-Type'), false) && lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(headers, 'Content-Type', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'axiosParamsConfig.headers.Content-Type', 'application/json;charset=UTF-8'))
        lodash_has__WEBPACK_IMPORTED_MODULE_7___default()(outParams, 'headers.Content-Type') && lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(headers, 'Content-Type', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'headers.Content-Type'))
        let [url, pickParams, pickData, pickHeaders, pickOptions] = [path, {}, {}, {}, {}]
        if ((lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.mock') && lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default()(mock)) || mock) {
          url = lodash_isNil__WEBPACK_IMPORTED_MODULE_6___default()(mockPath) ? lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.mockBasePath') : mockPath
        }
        if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'params', {})), false) || lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(params), false)) {
          pickParams = lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(params, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.gParams', {}), lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'params', {})), lodash_concat__WEBPACK_IMPORTED_MODULE_17___default()(lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(params), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.gParams', {}))))
        }
        if ((lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.cache', false), false) && lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(cache, false)) || lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(cache, false)) {
          lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(pickParams, '_', lodash_now__WEBPACK_IMPORTED_MODULE_19___default()())
        }
        if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'data', {})), false) || lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(data), false)) {
          pickData = Loader.transformStringPostData(Loader.removeInvalidChar(lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(data, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'data', {})), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(data)), removeInvalidChar), headers, method)
        }
        if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'restful', {})), false) || lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(restful), false)) {
          url = Loader.transformRestfulUrl(url, lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(restful, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'restful', {})), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(restful)))
        }
        if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'headers', {})), false) || lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(headers), false)) {
          pickHeaders = Loader.removeInvalidChar(lodash_pick__WEBPACK_IMPORTED_MODULE_4___default()(lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(headers, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outParams, 'headers', {})), lodash_keys__WEBPACK_IMPORTED_MODULE_13___default()(headers)), removeInvalidChar)
        }
        if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_18___default()(outOptions), false)) {
          pickOptions = Loader.encapsulationOutOptions(outOptions)
        }
        if (lodash_has__WEBPACK_IMPORTED_MODULE_7___default()(outOptions, 'validator')) {
          lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(validator, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outOptions, 'validator'))
        }
        if (lodash_has__WEBPACK_IMPORTED_MODULE_7___default()(outOptions, 'restfulValidator')) {
          lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(restfulValidator, lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outOptions, 'restfulValidator'))
        }
        const requestOptions = this.encapsulationRequestOptions({
          baseURL,
          proxy,
          responseType,
          validator,
          restfulValidator
        })
        return Object(_axios__WEBPACK_IMPORTED_MODULE_2__["default"])({
          ...requestOptions,
          ...pickOptions,
          method: lodash_toUpper__WEBPACK_IMPORTED_MODULE_22___default()(method),
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
   * @param { array } apiArray - api请求实例数组
   * @access public
   * @returns {Promise}
   * @example
   * Loader.allApi[Loader.api['user/get'](), Loader.api['user/list']()]().then(()=>{}).catch(()=>{})
   */
  allApi (apiArray = []) {
    if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isArray__WEBPACK_IMPORTED_MODULE_23___default()(apiArray), false)) {
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
      if (lodash_includes__WEBPACK_IMPORTED_MODULE_16___default()(restfulUrl, `{${key}}`)) {
        restfulUrl = lodash_replace__WEBPACK_IMPORTED_MODULE_8___default()(restfulUrl, `{${key}}`, value)
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
    const reg = new RegExp(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.invalidChar'), 'g')
    for (const [key, value] of Object.entries(requestData)) {
      if (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(value) && reg.test(value)) {
        requestData[key] = lodash_replace__WEBPACK_IMPORTED_MODULE_8___default()(value, reg, '')
      }
    }
    return requestData
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
    if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_toUpper__WEBPACK_IMPORTED_MODULE_22___default()(method), 'POST') && lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(headersData, 'Content-Type'), 'application/x-www-form-urlencoded; charset=UTF-8')) {
      requestData = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(requestData)
    }
    return requestData
  }

  /**
   * @desc 封装外部配置参数
   * @static
   * @access private
   * @param {{}} outOptions - 外部参数
   * @returns {{}}
   */
  static encapsulationOutOptions (outOptions = {}) {
    const options = {}
    const requestErrorCallback = lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outOptions, 'request_error_callback', null)
    const transformResponse = lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(outOptions, 'transformResponse', null)
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default()(requestErrorCallback)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'request_error_callback', requestErrorCallback)
    }
    if (lodash_isArray__WEBPACK_IMPORTED_MODULE_23___default()(transformResponse) || lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default()(transformResponse)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'transformResponse', lodash_isArray__WEBPACK_IMPORTED_MODULE_23___default()(transformResponse) ? transformResponse : [lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default()(transformResponse)])
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
    const options = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_15___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'axiosParamsConfig'))
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_14___default()(proxy)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'proxy', proxy)
    }
    if (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(responseType)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'responseType', responseType)
    }
    if (lodash_isUndefined__WEBPACK_IMPORTED_MODULE_20___default()(baseURL)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'baseURL', baseURL)
    }
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.request_error_callback', null))) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'request_error_callback', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.request_error_callback'))
    }
    lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'statusMessage', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.statusMessage', {}))
    lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'console_response_enable', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.console_response_enable', false))
    lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'console_request_enable', lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(this, 'apiParamsConfig.console_request_enable', false))
    if (lodash_eq__WEBPACK_IMPORTED_MODULE_11___default()(lodash_isArray__WEBPACK_IMPORTED_MODULE_23___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(options, 'transformResponse', null)), false) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_21___default()(lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(options, 'transformResponse', null))) {
      lodash_set__WEBPACK_IMPORTED_MODULE_12___default()(options, 'transformResponse', [lodash_get__WEBPACK_IMPORTED_MODULE_10___default()(options, 'transformResponse')])
    }
    return lodash_assign__WEBPACK_IMPORTED_MODULE_3___default()(options, {
      validator,
      restfulValidator
    })
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Loader);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDefaultConfig", function() { return apiDefaultConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axiosDefaultConfig", function() { return axiosDefaultConfig; });
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
const apiDefaultConfig = {
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
const axiosDefaultConfig = {
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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(3);
exports.encode = exports.stringify = __webpack_require__(4);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interceptor_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
// 构建axios实例



/**
 * @description 自定义axios实例
 */
let instance = null;
instance = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create()

/**
 * @desc
 * 异常拦截器只设置了响应错误拦截器如果同时设置两个错误拦截器最终起效果的只有响应错误拦截器
 */
// 添加请求拦截器
instance.interceptors.request.use(_interceptor_index_js__WEBPACK_IMPORTED_MODULE_0__["requestSuccessFunc"])
// 添加响应拦截器
instance.interceptors.response.use(_interceptor_index_js__WEBPACK_IMPORTED_MODULE_0__["responseSuccessFunc"], _interceptor_index_js__WEBPACK_IMPORTED_MODULE_0__["responseErrorFunc"])

/* harmony default export */ __webpack_exports__["default"] = (instance);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestSuccessFunc", function() { return requestSuccessFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseSuccessFunc", function() { return responseSuccessFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responseErrorFunc", function() { return responseErrorFunc; });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var lodash_eq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_eq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52);
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70);
/* harmony import */ var lodash_keys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_keys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71);
/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_spread__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72);
/* harmony import */ var lodash_spread__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_spread__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(78);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_14__);
// 拦截器
















/**
 * @desc request前置拦截器
 * @param {{}} requestConfig 请求配置参数
 * @returns {{}} {}
 */
function requestSuccessFunc (requestConfig) {
  lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'console_request_enable', false) && (console.info('requestInterceptorFunc', `url: ${lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'url', '')}`, requestConfig))
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestStartHandler', null))) {
    // 通知函数定义处-请求开始发送
    lodash_spread__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestStartHandler'))()
  }
  let qsData = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'data', {})
  if (lodash_eq__WEBPACK_IMPORTED_MODULE_4___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'headers.Content-Type', ''), 'application/x-www-form-urlencoded; charset=UTF-8')) {
    qsData = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.parse(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'data', null))
  }
  const validateResult = []
  const paramsValidatorRule = lodash_pick__WEBPACK_IMPORTED_MODULE_9___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'validator', {}), lodash_keys__WEBPACK_IMPORTED_MODULE_10___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'params', {})))
  const dataValidatorRule = lodash_pick__WEBPACK_IMPORTED_MODULE_9___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'validator', {}), lodash_keys__WEBPACK_IMPORTED_MODULE_10___default()(qsData))
  const restfulValidatorRule = lodash_pick__WEBPACK_IMPORTED_MODULE_9___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'restfulValidator', {}), lodash_keys__WEBPACK_IMPORTED_MODULE_10___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'restful', {})))
  if (lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(requestConfig, 'validator') && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'params'))) {
    validateResult.push(Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'params', {}), paramsValidatorRule))
  }
  if (lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(requestConfig, 'validator') && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'data'))) {
    validateResult.push(Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(qsData, dataValidatorRule))
  }
  if (lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(requestConfig, 'restfulValidator') && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'restful'))) {
    validateResult.push(Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(requestConfig, 'restful', {}), restfulValidatorRule))
  }
  let status = false
  const validateFailMsg = []
  lodash_forEach__WEBPACK_IMPORTED_MODULE_8___default()(validateResult, (value) => {
    if (lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(value, 'status')) {
      status = true
      validateFailMsg.push(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(value, 'msg'))
    }
  })
  if (status) {
    return Promise.reject(new Error(lodash_uniq__WEBPACK_IMPORTED_MODULE_6___default()(validateFailMsg[0]).join()))
  }
  return requestConfig
}

/**
 * @desc response后置拦截器
 * @param {{}} response
 * @returns {{}}
 */
function responseSuccessFunc (response) {
  lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'config.console_response_enable', false) && (console.info('responseInterceptorFunc：', response))
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestEndHandler', null))) {
    // 通知函数定义处-请求结束
    lodash_spread__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestEndHandler'))()
  }
  if (lodash_eq__WEBPACK_IMPORTED_MODULE_4___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'status', 200), lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'config.status', 200)) && lodash_eq__WEBPACK_IMPORTED_MODULE_4___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'statusText', 'OK'), lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'config.statusText', 'OK'))) {
    const data = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'data', null)
    return lodash_eq__WEBPACK_IMPORTED_MODULE_4___default()(data, null) ? {} : data
  } else {
    return Promise.reject(new Error('返回response的status和statusText和设置值不匹配'))
  }
}

/**
 * @desc response后置异常拦截器
 * @param {{}} responseError
 * @returns {Promise}
 */
function responseErrorFunc (responseError) {
  if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestEndHandler', null))) {
    // 通知函数定义处-请求结束
    lodash_spread__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestEndHandler'))()
  }
  const response = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response', null)
  if (lodash_eq__WEBPACK_IMPORTED_MODULE_4___default()(lodash_isNull__WEBPACK_IMPORTED_MODULE_11___default()(response), false) && lodash_isFunction__WEBPACK_IMPORTED_MODULE_12___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response.config.request_error_callback', null))) {
    lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response.config.console_response_enable', false) && (console.info('responseErrorFunc：', responseError))
    const callBack = lodash_spread__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response.config.request_error_callback'))
    const status = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response.status', null)
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_14___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, 'config.statusMessage', null)) && lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(response, `config.statusMessage.${status}`)) {
      lodash_set__WEBPACK_IMPORTED_MODULE_5___default()(response, 'statusText', lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(response, `config.statusMessage.${status}`))
    }
    callBack([lodash_pick__WEBPACK_IMPORTED_MODULE_9___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'response', null), ['status', 'statusText'])])
  }
  if (lodash_isNull__WEBPACK_IMPORTED_MODULE_11___default()(response)) {
    const callBack = lodash_spread__WEBPACK_IMPORTED_MODULE_13___default()(lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(window, 'apiRequestInterceptErrorHandler', function () {}))
    callBack([lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(responseError, 'message', '')])
  }
  return Promise.reject(responseError)
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var vdjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var vdjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vdjs__WEBPACK_IMPORTED_MODULE_0__);
// 验证插件
// @ts-ignore


/**
 * @desc 验证函数
 * @param {*} data 待验证数据
 * @param {*} constraints 数据限制要求
 * @param {Boolean} [isOne=false] 检查到错误字段即停止,可选,默认false
 * @returns {{}} {status: '检查是否失败，如果存在字段检查不通过，则返回true，反之false', msg: '所有验证信息结果，对象，返回类型数组'}
 * @example
 * data：{name: 'xm', nickname: 'xmm', password: '123'}
 * constraints：{name: {required: true, msg: '名称不能为空'},password: {required: true, not: '123456', min: 6, msg: 'password验证不通过'}}
 */
function validate (data = {}, constraints = {}, isOne = false) {
  /**
   * @desc
   * valid.fails()检查是否失败，如果存在字段检查不通过，则返回true，反之false
   * valid.all(true) 返回所有验证信息结果，对象；如果需要返回数组 isArr 为 true 即可。
   * {status: true,msg: ["password验证不通过", "两次输入密码不一致"]}
   * @type {object}
   */
  const valid = vdjs__WEBPACK_IMPORTED_MODULE_0___default.a.validate(data, constraints, isOne)
  return { status: valid.fails(), msg: valid.all(true) }
}

// URL地址防注入 针对查询参数
vdjs__WEBPACK_IMPORTED_MODULE_0___default.a.pushRule('sqlXss', function (val = '', rval = true) {
  if (rval) {
    const re = /select|update|delete|truncate|join|union|exec|insert|drop|count|script|<|>|'|"|=|;/gi;
    const status = re.test(val)
    if (status) {
      return false
    }
  }
  return true
})


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():undefined}(this,function(){"use strict";function t(r,n){if(!this instanceof t)throw new Error("Validator is a constructor and should be called with the `new` keyword");this.data=r,this.constraints=n,this.results=null,this.count=0}function r(t){this.valider=function(){return t},this.errors=null,this.msgs=[]}function n(t){var r={};for(var n in t)for(var e in t[n]){var o=t[n];"msg"!==e&&(r[e]={val:o[e],msg:o.msg})}return r}var e=function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=function(t,r){for(var n in r)if(r[n]===t)return!0;return!1},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=(function(){function t(t){this.value=t}function r(r){function n(o,i){try{var u=r[o](i),s=u.value;s instanceof t?Promise.resolve(s.value).then(function(t){n("next",t)},function(t){n("throw",t)}):e(u.done?"return":"normal",u.value)}catch(t){e("throw",t)}}function e(t,r){switch(t){case"return":o.resolve({value:r,done:!0});break;case"throw":o.reject(r);break;default:o.resolve({value:r,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(t,r){return new Promise(function(e,u){var s={key:t,arg:r,resolve:e,reject:u,next:null};i?i=i.next=s:(o=i=s,n(t,r))})},"function"!=typeof r.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(r.prototype[Symbol.asyncIterator]=function(){return this}),r.prototype.next=function(t){return this._invoke("next",t)},r.prototype.throw=function(t){return this._invoke("throw",t)},r.prototype.return=function(t){return this._invoke("return",t)}}(),{required:function(t,r){return!r||void 0!==t},eq:function(t,r){return t===r},not:function(t,r){return t!==r},type:function(t,r){return null===t||void 0===t?t===r:t.constructor===r},length:function(t,r){return e(r)?"string"==typeof t||e(t)?t.length>=r[0]&&t.length<=r[1]:void 0:!(!t||!t.length||t.length!==r)},min:function(t,r){return t>=r},max:function(t,r){return t<=r},gt:function(t,r){return t>r},gte:function(t,r){return t>=r},lt:function(t,r){return t<r},lte:function(t,r){return t<=r},between:function(t,r){return r[0]<=t&&t<=r[1]},notBetween:function(t,r){return t<r[0]||t>r[1]},in:function(t,r){return e(r)?o(t,r):"object"===(void 0===r?"undefined":i(r))?t in r:"string"==typeof r&&r.indexOf(t)>-1},notIn:function(t,r){return e(r)?!o(t,r):"object"===(void 0===r?"undefined":i(r))?!(t in r):"string"==typeof r&&-1===r.indexOf(t)},match:function(t,r){return"string"==typeof t&&new RegExp(r).test(t)},notMatch:function(t,r){return"string"==typeof t&&!new RegExp(r).test(t)},like:function(t,r){return"string"==typeof r&&("%"!==r[0]&&(r="^"+r),"%"!==r[r.length-1]&&(r+="$"),new RegExp(r.replace(/%/g,".*")).test(t))},notLike:function(t,r){return"string"==typeof r&&("%"!==r[0]&&(r="^"+r),"%"!==r[r.length-1]&&(r+="$"),!new RegExp(r.replace(/%/g,".*")).test(t))},email:function(t,r){return!r||/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(t)},upperCase:function(t,r){return!r||t===t.toUpperCase()},lowerCase:function(t,r){return!r||t===t.toLowerCase()},run:function(t,r){return"function"!=typeof r||r(t)}});return t.prototype.validate=function(t){var r={};for(var n in this.constraints){var e=this.constraints[n];r[n]={};var o=0;for(var i in e){var u=e[i],s=this.validRule(i,this.data[n],u);o+=~~!s,r[n][i]={val:u.val,msg:u.msg,result:s}}if(o>0){if(e.required&&e.required.val&&(this.count++,t))break;if(void 0!==this.data[n]&&(this.count++,t))break}}return this.results=r,r},t.prototype.validRule=function(t,r,n){var e=u[t];if(!e)throw new Error("undefined rule type: `"+t+"`");return e.apply(this.constraints||null,[r,n.val])},r.prototype.parseMsg=function(t){return t},r.prototype.fails=function(){return this.valider().count>0},r.prototype.all=function(t){if(!this.errors){this.errors={};for(var r in this.valider().results)this.errors[r]=this.get(r)}if(t){var n=[];for(var e in this.errors)if(this.errors[e].length>0)for(var o in this.errors[e])n.push(this.errors[e][o]);return n}return this.errors},r.prototype.get=function(t,r){var n=this.valider().results[t];if(!n)return console.warn("The field does not exist in constraints"),[];if(r)return n;if(void 0===this.valider().data[t]){if(!n.hasOwnProperty("required"))return[];if(n.hasOwnProperty("required")&&n.required.result)return[]}var e=[];for(var o in n)n[o].result||e.push(this.parseMsg(n[o].msg));return e},r.prototype.has=function(t){return this.get(t).length>0},r.prototype.first=function(t){if(t)return this.get(t)[0];this.errors||this.all();for(var r in this.errors)if(this.errors[r].length>0)return this.errors[r][0]},r.prototype.last=function(t){var r=this.get(t);return r[r.length-1]},{Validator:t,Rule:u,validate:function(o,u,s){var f={};for(var a in u)f[a]={},e(u[a])?f[a]=n(u[a]):"object"===i(u[a])&&(f[a]=n([u[a]]));var c=new t(o,f);return c.validate(s),new r(c)},pushRule:function(t,r){return u.hasOwnProperty(t)?(console.warn("The rule type `"+t+"` is exist"),!1):"function"!=typeof r?(console.warn("The rule fun must be a function"),!1):(u[t]=r,console.log(u),!0)}}});
//# sourceMappingURL=validator.min.js.map


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(10),
    hasPath = __webpack_require__(11);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(12),
    isArguments = __webpack_require__(19),
    isArray = __webpack_require__(13),
    isIndex = __webpack_require__(20),
    isLength = __webpack_require__(21),
    toKey = __webpack_require__(22);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isKey = __webpack_require__(14),
    stringToPath = __webpack_require__(16),
    toString = __webpack_require__(18);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13),
    isSymbol = __webpack_require__(15);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(17);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(24);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(12),
    toKey = __webpack_require__(22);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(27);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(28),
    castPath = __webpack_require__(12),
    isIndex = __webpack_require__(20),
    isObject = __webpack_require__(32),
    toKey = __webpack_require__(22);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(29),
    eq = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(30);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(31);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(34);

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? baseUniq(array) : [];
}

module.exports = uniq;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(35),
    arrayIncludes = __webpack_require__(36),
    arrayIncludesWith = __webpack_require__(38),
    cacheHas = __webpack_require__(39),
    createSet = __webpack_require__(40),
    setToArray = __webpack_require__(41);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(13);

/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return isArray(value) ? value : [value];
}

module.exports = castArray;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(37);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(37);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(43),
    getTag = __webpack_require__(45),
    isArguments = __webpack_require__(19),
    isArray = __webpack_require__(13),
    isArrayLike = __webpack_require__(46),
    isBuffer = __webpack_require__(49),
    isPrototype = __webpack_require__(50),
    isTypedArray = __webpack_require__(51);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(44);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(47),
    isLength = __webpack_require__(21);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isObject = __webpack_require__(32);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 51 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(54),
    flatRest = __webpack_require__(58);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(55),
    hasIn = __webpack_require__(56);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(24),
    baseSet = __webpack_require__(27),
    castPath = __webpack_require__(12);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(57),
    hasPath = __webpack_require__(11);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(59),
    overRest = __webpack_require__(67),
    setToString = __webpack_require__(69);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(60);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(61),
    isFlattenable = __webpack_require__(62);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(63),
    isArguments = __webpack_require__(19),
    isArray = __webpack_require__(13);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(65);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(68);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(44);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(68),
    arrayPush = __webpack_require__(61),
    baseRest = __webpack_require__(73),
    castSlice = __webpack_require__(75),
    toInteger = __webpack_require__(77);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = start == null ? 0 : nativeMax(toInteger(start), 0);
  return baseRest(function(args) {
    var array = args[start],
        otherArgs = castSlice(args, 0, start);

    if (array) {
      arrayPush(otherArgs, array);
    }
    return apply(func, this, otherArgs);
  });
}

module.exports = spread;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(74),
    overRest = __webpack_require__(67),
    setToString = __webpack_require__(69);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(76);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    getPrototype = __webpack_require__(79),
    isObjectLike = __webpack_require__(80);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(44);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__81__;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(28),
    copyObject = __webpack_require__(83),
    createAssigner = __webpack_require__(84),
    isArrayLike = __webpack_require__(46),
    isPrototype = __webpack_require__(50),
    keys = __webpack_require__(70);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(28),
    baseAssignValue = __webpack_require__(29);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(73),
    isIterateeCall = __webpack_require__(85);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 85 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(18);

/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
  var args = arguments,
      string = toString(args[0]);

  return args.length < 3 ? string : string.replace(args[1], args[2]);
}

module.exports = replace;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(48),
    isArray = __webpack_require__(13),
    isObjectLike = __webpack_require__(80);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(90);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(91),
    arrayEach = __webpack_require__(98),
    assignValue = __webpack_require__(28),
    baseAssign = __webpack_require__(99),
    baseAssignIn = __webpack_require__(100),
    cloneBuffer = __webpack_require__(102),
    copyArray = __webpack_require__(104),
    copySymbols = __webpack_require__(105),
    copySymbolsIn = __webpack_require__(107),
    getAllKeys = __webpack_require__(109),
    getAllKeysIn = __webpack_require__(110),
    getTag = __webpack_require__(45),
    initCloneArray = __webpack_require__(111),
    initCloneByTag = __webpack_require__(112),
    initCloneObject = __webpack_require__(113),
    isArray = __webpack_require__(13),
    isBuffer = __webpack_require__(49),
    isMap = __webpack_require__(115),
    isObject = __webpack_require__(32),
    isSet = __webpack_require__(116),
    keys = __webpack_require__(70);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(92),
    listCacheDelete = __webpack_require__(93),
    listCacheGet = __webpack_require__(95),
    listCacheHas = __webpack_require__(96),
    listCacheSet = __webpack_require__(97);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(94);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(25);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(94);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(94);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(94);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(83),
    keys = __webpack_require__(70);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(83),
    keysIn = __webpack_require__(101);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(64);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(103)(module)))

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(83),
    getSymbols = __webpack_require__(106);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(83),
    getSymbolsIn = __webpack_require__(108);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(44);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 110 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 111 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(114),
    getPrototype = __webpack_require__(79),
    isPrototype = __webpack_require__(50);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(32);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(37);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(61),
    baseFlatten = __webpack_require__(60),
    copyArray = __webpack_require__(104),
    isArray = __webpack_require__(13);

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(64);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(18);

/**
 * Converts `string`, as a whole, to upper case just like
 * [String#toUpperCase](https://mdn.io/toUpperCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @example
 *
 * _.toUpper('--foo-bar--');
 * // => '--FOO-BAR--'
 *
 * _.toUpper('fooBar');
 * // => 'FOOBAR'
 *
 * _.toUpper('__foo_bar__');
 * // => '__FOO_BAR__'
 */
function toUpper(value) {
  return toString(value).toUpperCase();
}

module.exports = toUpper;


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=loader-api.js.map