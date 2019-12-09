/**
 * @class FastPrototypeUtils
 * @classdesc 公用原型帮助函数工具类管理器
 * @desc 将项目开发中使用频率较高的自定义函数封装到该构造函数的原型上方便使用和统一管理
 * @param {array} requires - 需要指定初始化的某些原型帮助函数的key值，如果不传或为空数组则注册全部默认的帮助函数
 * @see 插件功能详细介绍请查看 https://github.com/zhangh-design/js-libs/tree/master/fast-prototype-utils
 * @author zhangh
 * @version 1.0.0
 * @example
 * const fastPrototypeUtils = new FastPrototypeUtilsLibrary(['Promise.f_done','Promise.f_finally','Date.f_format'])
 */
import configUtils from './config-utils'

import _set from 'lodash/set'
import _get from 'lodash/get'
import _isFunction from 'lodash/isFunction'
import _isEqual from 'lodash/isEqual'
import _isEmpty from 'lodash/isEmpty'
import _isNull from 'lodash/isNull'
import _has from 'lodash/has'
import _hasIn from 'lodash/hasIn'
import _forEach from 'lodash/forEach'
import _pick from 'lodash/pick'
import _keys from 'lodash/keys'
import _includes from 'lodash/includes'
import _isNil from 'lodash/isNil'
import _startsWith from 'lodash/startsWith'
const FastPrototypeUtils = class FastPrototypeUtils {
  /**
   * @param {array} requires - 需要初始化的原型帮助函数的key键列表
   */
  constructor (requires = []) {
    /**
     * @desc 函数名称默认前缀
     * @readonly
     * @access private
     * @type {string}
     * @default
     */
    this.prefixStr = 'f_'
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
    this.init(requires)
  }
  /**
   * @desc 初始化默认附加原型帮助函数
   * @access private
   * @param {array} requires - 需要指定初始化的某些原型帮助函数的key值，如果不传或为空数组则注册全部默认的帮助函数
   * @example
   * init(['Promise.f_done','Promise.f_finally'])
   */
  init (requires = []) {
    _forEach(_pick(configUtils, requires), value => { value() })
  }

  /**
   * @desc 返回已经配置的所有原型帮助函数的key键（包括没有初始化的）
   * @returns {array}
   * @example
   * fastPrototypeUtils.getKeys()
   */
  getKeys () {
    return _keys(configUtils)
  }

  /**
   * @desc 查看指定原型函数名称是否已经定义在插件配置列表中
   * @param {string} key - 原型帮助函数的key值
   * @returns {boolean}
   */
  include (key = '') {
    return _includes(_keys(configUtils), key)
  }

  /**
   * @desc 注册并添加一个原型帮助函数
   * @param {function} constructorFn 构造函数本身
   * @param {string} name 名称key值
   * @param {function} handler 处理逻辑函数
   * @example
   * const Person = function(){}
   * fastPrototypeUtils.add(Person, 'getName', function(){return 'hello'})
   * const PInstance = new Person
   * console.log(PInstance.getName())
   * console.log(Person.prototype.getName())
   */
  add (constructorFn = null, name = '', handler = function () {}) {
    if (_isNil(constructorFn) || _isNil(handler) || _isNil(name) || _isEqual(_isFunction(constructorFn), false) || _isEqual(_isFunction(handler), false)) {
      return
    }
    name = _startsWith(name, this.prefixStr) ? name : `${this.prefixStr}${name}`
    if (Reflect.isExtensible(constructorFn) && _isEqual(_hasIn(constructorFn.prototype, name), false) && _isEqual(_has(configUtils, `${_get(constructorFn, 'name')}.${name}`), false)) {
      _get(constructorFn, 'method')(name, handler)
      _set(configUtils, `${_get(constructorFn, 'name')}.${name}`, function () { handler() })
    }
  }

  /**
   * @desc 移除自定义的某个 prototype 帮助函数
   * @param {function} constructorFn - 构造函数本身
   * @param {string} name - 名称key值
   * @example
   * fastPrototypeUtils.remove(Person, 'getName')
   */
  remove (constructorFn = null, name = '') {
    if (_isNil(constructorFn) || _isNil(name) || _isEqual(_isFunction(constructorFn), false)) {
      return
    }
    if (Reflect.isExtensible(constructorFn) && _hasIn(constructorFn.prototype, name) && _has(configUtils, `${_get(constructorFn, 'name')}.${name}`)) {
      Reflect.deleteProperty(constructorFn, name)
      Reflect.deleteProperty(configUtils, `${_get(constructorFn, 'name')}.${name}`)
    }
  }

  /**
   * @desc 复写某个默认的原型帮助函数
   * @param {function} constructorFn - 构造函数本身
   * @param {string} name - 名称key值
   * @example
   * fastPrototypeUtils.cover(Date, 'f_format', function(){return new Date()})
   */
  cover (constructorFn = null, name = '', handler = function () {}) {
    if (_isNil(constructorFn) || _isNil(name) || _isEqual(_isFunction(constructorFn), false)) {
      return
    }
    if (Reflect.isExtensible(constructorFn) && _hasIn(constructorFn.prototype, name) && _has(configUtils, `${_get(constructorFn, 'name')}.${name}`)) {
      Reflect.deleteProperty(constructorFn, name)
      Reflect.deleteProperty(configUtils, `${_get(constructorFn, 'name')}.${name}`)
      _get(constructorFn, 'method')(name, handler)
      _set(configUtils, `${_get(constructorFn, 'name')}.${name}`, function () { handler() })
    }
  }
}
export default FastPrototypeUtils
