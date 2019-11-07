import _isPlainObject from 'lodash/isPlainObject'
import _trim from 'lodash/trim'
import _isNull from 'lodash/isNull'
import _isEqual from 'lodash/isEqual'
import _isEmpty from 'lodash/isEmpty'
/**
 * @class
 * @classdesc 自定义全局变量管理器
 * @desc 构造函数接收1个初始化的全局变量对象
 * @see 插件功能详细介绍请查看 https://github.com/zhangh-design/js-libs/tree/master/global-var-manager
 * @author zhangh
 * @version 1.0.0
 * @param { {} } [globalVarObject={}] - 用于初始化的全局变量对象
 * @example
 * new GlobalVar({'token': 'test_123'})
 */

const GlobalVar = class Global {
  constructor (globalVarObject = {}) {
    /**
     * @desc 用于存放全局变量的Map对象
     * @type {Map}
     * @param {Map} globalVarMap - 全局变量存放Map对象
     * @readonly
     * @default
     */
    this.globalVarMap = new Map()

    this.init(globalVarObject)
  }

  /**
   * @desc 初始化
   * @param {*} [globalVarObject={}] - 初始化的全局变量Map对象
   * @private
   */
  init (globalVarObject = {}) {
    if (_isPlainObject(globalVarObject) && _isEqual(_isEmpty(globalVarObject), false)) {
      for (const [key, value] of Object.entries(globalVarObject)) {
        if (_isEqual(_isNull(key), false)) {
          this.globalVarMap.set(_trim(key), value)
        }
      }
    }
  }

  /**
  * @desc 获取某个全局变量的value，没有获取到将返回null
  * @param {*} key - 用于获取全局变量value的key名称
  * @param {*} [defaultValue=null] - 如果获取不到值就返回传递的默认值
  * @example
  * let globalVar = new GlobalVar({'token': 'test_123'})
  * globalVar.getValue('token', 'test')
  */
  getValue (key = '', defaultValue = null) {
    if (_isEqual(_isNull(key), false) && this.globalVarMap.has(_trim(key))) {
      return this.globalVarMap.get(_trim(key))
    }
    return defaultValue
  }

  /**
  * @desc 添加或者更新某个key的value
  * @param {*} key - key键
  * @param {*} value - value值
  * @example
  * let globalVar = new GlobalVar({'token': 'test_123'})
  * globalVar.addOrUpdate('token', 'test')
  */
  addOrUpdate (key = '', value = '') {
    if (_isEqual(_isNull(key), false)) {
      this.globalVarMap.set(_trim(key), _trim(value))
    }
  }

  /**
  * @desc 删除某个key对应的全局变量
  * @param {*} key - key键
  * @example
  * let globalVar = new GlobalVar({'token': 'test_123'})
  * globalVar.evict('token')
  */
  evict (key = '') {
    if (_isEqual(_isNull(key), false) && this.globalVarMap.has(_trim(key))) {
      this.globalVarMap.delete(_trim(key))
    }
  }

  /**
  * @desc 清空所有全局变量
  * @example
  * let globalVar = new GlobalVar({'token': 'test_123'})
  * globalVar.evictAll()
  */
  evictAll () {
    this.globalVarMap.clear()
  }
}
export default GlobalVar
