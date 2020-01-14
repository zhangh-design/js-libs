// 拦截器
import validate from './validate.js'
import qs from 'querystring'

import _has from 'lodash/has'
import _get from 'lodash/get'
import _eq from 'lodash/eq'
import _set from 'lodash/set'
import _uniq from 'lodash/uniq'
import _isEmpty from 'lodash/isEmpty'
import _forEach from 'lodash/forEach'
import _pick from 'lodash/pick'
import _keys from 'lodash/keys'
import _isNull from 'lodash/isNull'
import _isFunction from 'lodash/isFunction'
import _spread from 'lodash/spread'
import _isPlainObject from 'lodash/isPlainObject'
/**
 * @desc request前置拦截器
 * @param {{}} requestConfig 请求配置参数
 * @returns {{}} {}
 */
export function requestSuccessFunc (requestConfig) {
  _get(requestConfig, 'console_request_enable', false) && (console.info('requestInterceptorFunc', `url: ${_get(requestConfig, 'url', '')}`, requestConfig))
  if (_isFunction(_get(window, 'apiRequestStartHandler', null))) {
    // 通知函数定义处-请求开始发送
    _spread(_get(window, 'apiRequestStartHandler'))()
  }
  let qsData = _get(requestConfig, 'data', {})
  if (_eq(_get(requestConfig, 'headers.Content-Type', ''), 'application/x-www-form-urlencoded; charset=UTF-8')) {
    qsData = qs.parse(_get(requestConfig, 'data', null))
  }
  const validateResult = []
  const paramsValidatorRule = _pick(_get(requestConfig, 'validator', {}), _keys(_get(requestConfig, 'params', {})))
  const dataValidatorRule = _pick(_get(requestConfig, 'validator', {}), _keys(qsData))
  const restfulValidatorRule = _pick(_get(requestConfig, 'restfulValidator', {}), _keys(_get(requestConfig, 'restful', {})))
  if (_has(requestConfig, 'validator') && !_isEmpty(_get(requestConfig, 'params'))) {
    validateResult.push(validate(_get(requestConfig, 'params', {}), paramsValidatorRule))
  }
  if (_has(requestConfig, 'validator') && !_isEmpty(_get(requestConfig, 'data'))) {
    validateResult.push(validate(qsData, dataValidatorRule))
  }
  if (_has(requestConfig, 'restfulValidator') && !_isEmpty(_get(requestConfig, 'restful'))) {
    validateResult.push(validate(_get(requestConfig, 'restful', {}), restfulValidatorRule))
  }
  let status = false
  const validateFailMsg = []
  _forEach(validateResult, (value) => {
    if (_get(value, 'status')) {
      status = true
      validateFailMsg.push(_get(value, 'msg'))
    }
  })
  if (status) {
    return Promise.reject(new Error(_uniq(validateFailMsg[0]).join()))
  }
  return requestConfig
}

/**
 * @desc response后置拦截器
 * @param {{}} response
 * @returns {{}}
 */
export function responseSuccessFunc (response) {
  _get(response, 'config.console_response_enable', false) && (console.info('responseInterceptorFunc：', response))
  if (_isFunction(_get(window, 'apiRequestEndHandler', null))) {
    // 通知函数定义处-请求结束
    _spread(_get(window, 'apiRequestEndHandler'))()
  }
  if (_eq(_get(response, 'status', 200), _get(response, 'config.status', 200)) && _eq(_get(response, 'statusText', 'OK'), _get(response, 'config.statusText', 'OK'))) {
    const data = _get(response, 'data', null)
    return _eq(data, null) ? {} : data
  } else {
    return Promise.reject(new Error('返回response的status和statusText和设置值不匹配'))
  }
}

/**
 * @desc response后置异常拦截器
 * @param {{}} responseError
 * @returns {Promise}
 */
export function responseErrorFunc (responseError) {
  if (_isFunction(_get(window, 'apiRequestEndHandler', null))) {
    // 通知函数定义处-请求结束
    _spread(_get(window, 'apiRequestEndHandler'))()
  }
  const response = _get(responseError, 'response', null)
  if (_eq(_isNull(response), false) && _isFunction(_get(responseError, 'response.config.request_error_callback', null))) {
    _get(responseError, 'response.config.console_response_enable', false) && (console.info('responseErrorFunc：', responseError))
    const callBack = _spread(_get(responseError, 'response.config.request_error_callback'))
    const status = _get(responseError, 'response.status', null)
    if (_isPlainObject(_get(response, 'config.statusMessage', null)) && _has(response, `config.statusMessage.${status}`)) {
      _set(response, 'statusText', _get(response, `config.statusMessage.${status}`))
    }
    callBack([_pick(_get(responseError, 'response', null), ['status', 'statusText'])])
  }
  if (_isNull(response)) {
    const callBack = _spread(_get(window, 'apiRequestInterceptErrorHandler', function () {}))
    callBack([_get(responseError, 'message', '')])
  }
  return Promise.reject(responseError)
}
