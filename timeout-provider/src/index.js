/**
 * @class TimeoutProvider
 * @classdesc 一个Javascript封装的高级定时器使用插件
 * @desc
 * 高级定时器的使用 单个定时器、循环定时器和函数节流的统一定义、控制和使用
 * @see 插件功能详细介绍请查看
 * {@link https://github.com/zhangh-design/js-libs/blob/master/timeout-provider/README.md GitHub}
 * @author zhangh
 * @version 1.0.0
 * @example
 * const TimeoutProvider = new TimeoutProvider()
 *
 */
import _isNil from 'lodash/isNil'
import _isNumber from 'lodash/isNumber'
import _isEqual from 'lodash/isEqual'
import _delay from 'lodash/delay'
import _bind from 'lodash/bind'
import _debounce from 'lodash/debounce'

const TimeoutProvider = class TimeoutProvider {
  // eslint-disable-next-line no-useless-constructor
  constructor () {}
  /**
   * @desc 单个定时器
   * @param {this} scope - 提供给 handler 参数的作用域
   * @param {function} handler - 执行函数
   * @param {number} timeout - 时间（毫秒）
   * @param  {...any} [params] - 定时器接收的额外参数
   * @returns {number}
   * @example
   * const person = function(){this.name='小明'}
   * const doEat = function(...params){console.log(params[0], this.name);}
   * timeoutProvider.setTimeout(new person, doEat, 2000, 'hello')
   */
  setTimeout (scope = null, handler = function () {}, timeout = 1000, ...params) {
    if (_isNil(scope) || _isNil(handler) || _isNil(timeout) || _isEqual(_isNumber(timeout), false)) {
      return
    }
    // @ts-ignore
    return _delay(_bind(handler, scope), timeout, ...params)
  }
  /**
   * @desc 循环定时器
   * @param {this} scope - 提供给 handler 参数的作用域
   * @param {function} handler - 执行函数（必须要有boolean返回值，false会停止定时器的循环调用）
   * @param {number} interval - 时间（毫秒）
   * @param  {...any} [params] - 定时器接收的额外参数
   * @returns {number}
   * @example
   * window.counter = 5;
   * const person = function(){this.name='小明'}
   * const doEat = function(...params){
   *   console.log(params[0], this.name, params[1]);
   *   return window.counter--;
   * }
   * timeoutProvider.setInterval(new person, doEat, 2000, 'hello', '!')
   *
   */
  setInterval (scope = null, handler = function () {}, interval = 1000, ...params) {
    if (_isNil(scope) || _isNil(handler) || _isNil(interval) || _isEqual(_isNumber(interval), false)) {
      return
    }
    return _delay(function fn (...params) {
      // @ts-ignore
      let result = _bind(handler, scope)(...params)
      if (_isEqual(_isNil(result), false)) {
        result && _delay(fn, interval, ...params)
      }
    }, interval, ...params)
  }

  /**
   * @typedef {Object} options - 选项配置对象
   * @property {boolean} leading - 指定在延迟开始前调用
   * @property {boolean} trailing - 指定在延迟结束后调用
   */
  /**
   * @desc 节流定时器，在指定时间后执行
   * @param {this} scope - 提供给 handler 参数的作用域
   * @param {function} handler - 执行函数
   * @param {number} wait - 需要延迟的毫秒数
   * @param {options} [options={leading: false, trailing: true}] - 选项配置
   * @returns {function} 返回新的 debounced （防抖动）函数，可以用于取消防抖动调用
   * @example
   * let doSize = function () {console.info('resize');}
   * var myDebounce = tp.setThrottle(personInstance, doSize, 3000)
   * jQuery(window).resize(myDebounce)
   */
  setThrottle (scope = null, handler = null, wait = 1000, options = { leading: false, trailing: true }) {
    if (_isNil(scope) || _isNil(handler) || _isNil(wait) || _isEqual(_isNumber(wait), false)) {
      return
    }
    // @ts-ignore
    const myDebounce = _debounce(_bind(handler, scope), wait, options)
    return myDebounce
  }
}
export default TimeoutProvider
