/**
 * @class CommonPrototypeFunctions
 * @classdesc 公用原型函数管理器
 * @desc 将项目开发中使用频率较高的自定义函数封装到该构造函数的原型上方便使用和统一管理
 * @see 插件功能详细介绍请查看 http://127.0.0.1:8080/index.htm
 * @author zhangh
 * @version 1.0.0
 * @example
 *
 */
// @ts-ignore
import dateformat from 'dateformat-util'

import _set from 'lodash/set'
import _get from 'lodash/get'
import _isFunction from 'lodash/isFunction'
import _isEqual from 'lodash/isEqual'
import _isEmpty from 'lodash/isEmpty'
import _isNull from 'lodash/isNull'
import _hasIn from 'lodash/hasIn'
import _now from 'lodash/now'
import _toNumber from 'lodash/toNumber'

const PrototypeManager = class CommonPrototypeFunctions {
  constructor (requires = ['Promise.done', 'Promise.finally']) {
    // 为类添加新的方法
    if (_isEqual(_isFunction(_get(Function, 'prototype.method', null)), false)) {
      _set(Function, 'prototype.method', function (name = '', fn = null) {
        if (_isEmpty(name) || _isNull(fn) || _isEqual(_isFunction(fn), false)) {
          return this
        }
        if (_isEqual(_hasIn(this, 'prototype.name'), false)) {
          // this指向构造函数本身
          _set(_get(this, 'prototype'), name, fn)
        }
        return this
      })
    }
    this.init()
  }
  init () {
    // 初始化默认附加帮助函数
    PrototypeManager.promiseDoneFn()
    PrototypeManager.promiseFinallyFn()
    PrototypeManager.DateFormat()
    PrototypeManager.DateNow()
    // 转换 字符value 为一个数字
    _set(Number, 'prototype.f_toNumber', function (value = '1') {
      return _toNumber(value)
    })
  }
  add (scope, name, handler) {
    // scope函数 name 原型函数名称 handler 挂载的处理函数
    // 添加自定义 prototype 函数
    if (Reflect.isExtensible(scope) && _isEqual(_hasIn(scope, name), false)) {
      scope.method(name, handler)
    }
  }
  remove (scope, name) {
    // 移除自定义 prototype 函数
    if (Reflect.isExtensible(scope) && _hasIn(scope, name)) {
      Reflect.deleteProperty(scope, name)
    }
  }
  cover () {
    // 复写某个默认的原型帮助函数
  }

  static promiseDoneFn () {
    // 最终捕获 Promise 发生的异常
    _set(Promise, 'prototype.f_done', function (onFulfilled, onRejected) {
      this.then(onFulfilled, onRejected).catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => { throw reason }, 0)
      })
    })
  }

  static promiseFinallyFn () {
    // Promise成功或失败最后都会调用的处理函数
    _set(Promise, 'prototype.f_finally', function (callback = function () {}) {
      let P = this.constructor
      return this.then(
        value => P.resolve(callback(value)).then(() => value),
        reason => P.resolve(callback(reason)).then(() => { throw reason })
      )
    })
  }

  static DateFormat () {
    // 转换时间格式
    _set(Date, 'prototype.f_format', function (date = new Date(), format = 'yyyy-mm-dd') {
      return dateformat.format(date, format)
    })
  }

  static DateNow () {
    // 获取当前时间戳
    _set(Date, 'prototype.f_now', function () {
      return _now()
    })
  }
}
export default PrototypeManager
