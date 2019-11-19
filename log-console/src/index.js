/**
 * @class ConsoleLog
 * @classdesc 自定义日志工具，通过日志level级别来控制项目中日志的输出
 * @desc 构造函数接收1个日志级别参数，用于控制日志的输出
 * @see 插件功能详细介绍请查看
 * https://segmentfault.com/a/1190000015593006
 * https://github.com/zhangh-design/js-libs/tree/master/log-console
 * @author zhangh
 * @version 1.0.0
 * @param { number } level=1 - 日志级别 可接受值有 1、2、3、4、5，如果传入的值比5大将不做任何输出
 * @param { array } [filterTagArray] - 过滤某些tag类型的日志不输出
 * @example
 * new ConsoleLog(1)
 */
const ConsoleLog = class Log {
  constructor (level = 1, filterTagArray = []) {
    /**
     * @desc 日志输出级别-普通信息，将输出v、A、i、w、e
     * @type {number}
     * @param {number} VERBOSE=1 -级别1
     * @readonly
     * @default
     */
    this.VERBOSE = 1
    /**
     * @desc 日志输出级别-断言调试信息，将输出A、i、w、e
     * @type {number}
     * @param {number} ASSERT=2 -级别2
     * @readonly
     * @default
     */
    this.ASSERT = 2
    /**
     * @desc 日志输出级别-输出提示性信息，将输出i、w、e
     * @type {number}
     * @param {number} INFO=3 -级别3
     * @readonly
     * @default
     */
    this.INFO = 3
    /**
     * @desc 日志输出级别-输出警示信息，将输出w、e
     * @type {number}
     * @param {number} WARN=4 -级别4
     * @readonly
     * @default
     */
    this.WARN = 4
    /**
     * @desc 日志输出级别-输出错误信息，将输出e
     * @type {number}
     * @param {number} ERROR=5 -级别5
     * @readonly
     * @default
     */
    this.ERROR = 5

    /**
     * @desc 级别
     * @type {number}
     * @private
     */
    this.level = level
    /**
     * @desc 过滤的tag
     * @type {array}
     * @private
     */
    this.filterTagArray = filterTagArray
  }

  /**
   * @desc
   * 用于输出普通信息
   * 注意：入参不能大于VERBOSE
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  v (tag = '', ...msg) {
    if (this.level <= this.VERBOSE) {
      if (this.filterTagArray.includes(tag) === false) {
        console.log(tag, ...msg)
      }
    }
  }

  /**
   * @desc
   * 用于输出断言调试信息-某些为false的条件下输出消息，而不是用if-else
   * 注意：入参不能大于ASSERT
   * @param {boolean} condition=false - 参数为false的条件下输出消息
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  a (condition = false, tag = '', ...msg) {
    if (this.level <= this.ASSERT) {
      if (this.filterTagArray.includes(tag) === false) {
        console.assert(condition, tag, ...msg)
      }
    }
  }

  /**
   * @desc
   * 用于输出提示性信息
   * 注意：入参不能大于INFO
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  i (tag = '', ...msg) {
    if (this.level <= this.INFO) {
      if (this.filterTagArray.includes(tag) === false) {
        console.info(tag, ...msg)
      }
    }
  }

  /**
   * @desc
   * 用于输出警示信息
   * 注意：入参不能大于WARN
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  w (tag = '', ...msg) {
    if (this.level <= this.WARN) {
      if (this.filterTagArray.includes(tag) === false) {
        console.warn(tag, ...msg)
      }
    }
  }

  /**
   * @desc
   * 用于输出错误信息
   * 注意：入参不能大于ERROR
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  e (tag = '', ...msg) {
    if (this.level <= this.ERROR) {
      if (this.filterTagArray.includes(tag) === false) {
        console.error(tag, ...msg)
      }
    }
  }
}
export default ConsoleLog
