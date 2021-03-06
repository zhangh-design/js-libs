/**
 * @class ObserverManager
 * @classdesc 自定义事件发布-订阅插件
 * @desc 构造函数接收1个事件描述模型对象参数，用于控制事件的注册、触发、注销
 * @see 插件功能详细介绍请查看
 * {@link https://github.com/zhangh-design/js-libs/tree/master/observer-manager GitHub}
 * @author zhangh
 * @version 1.0.0
 * @param {Object} userEventConfigModuleList={} - 事件描述模型对象集合
 * @example
 * const modules = {'game':[{name: 'runEvent', desc: '开启跑步', fireData: {name: '', address: '', date: ''}},{name: 'swimEvent', desc: '开启游泳'}]}
 * const myEventInstance = new ObserverManager(modules)
 */
import _isEqual from 'lodash/isEqual'
import _bind from 'lodash/bind'
import _trim from 'lodash/trim'
import _set from 'lodash/set'
import _has from 'lodash/has'
import _isNull from 'lodash/isNull'
import _get from 'lodash/get'
import _find from 'lodash/find'
import _forOwn from 'lodash/forOwn'
import _isEmpty from 'lodash/isEmpty'
import _forOwnRight from 'lodash/forOwnRight'
import _isUndefined from 'lodash/isUndefined'
import _pick from 'lodash/pick'
import _keys from 'lodash/keys'
import _filter from 'lodash/filter'

const ObserverManager = class Observer {
  constructor (userEventConfigModuleList = {}) {
    /**
     * @access private
     * @readonly
     * @default
     * @type {Map}
     * @desc 存放事件模型
     * */
    this.eventModules = new Map()
    /**
     * @access private
     * @readonly
     * @default
     * @type {Array}
     * @desc 调用 fire() 函数添加触发的事件
     * */
    this.fireEvents = []
    /**
     * @access private
     * @readonly
     * @default
     * @type {Array}
     * @desc 调用 add() 函数添加注册的事件
     * */
    this.addEvents = []
    this.deconstructEventConfigModule(userEventConfigModuleList)
  }

  /**
   * @description 解析事件模型
   * @access private
   * @param { {} } userEventConfigModuleList - event模型
   * @example
   * {'game':[{name: 'runEvent', desc: '跑步', data: {num: 10}}]}
   */
  deconstructEventConfigModule (userEventConfigModuleList = {}) {
    _forOwn(userEventConfigModuleList, (module, key) => {
      _forOwn(module, eventValue => {
        if (_has(eventValue, 'name') && _isEqual(_isNull(_get(eventValue, 'name')), false) && _isEqual(this.eventModules.has(_get(eventValue, 'name')), false)) {
          this.eventModules.set(`${key}/${_get(eventValue, 'name')}`, eventValue)
        }
      })
    })
  }

  /**
   * @description 注册事件
   * @param { string } name=`` -event名称（需要和事件模型中的命名空间+名称匹配）
   * @param { function } handler -事件对应的执行函数
   * @param { Object } fireScope=null -事件定义的作用域也即是fire触发时传递的fireScope
   * @param { Object } handlerScope=null -事件执行的作用域
   * @param {...*} [data] -事件参数<br/>
   * 触发时传入 handler 函数的参数，可以传入多个参数（将会在 fire 触发的参数之前），<br/>
   * data建议不要是一个带有原型对象的数据，而应该是字符类型或单纯的对象
   * @example
   * 事件模型定义：{'game':[{name: 'runEvent', desc: '跑步', data: {num: 10}}]}
   * add('game/runEvent', function(p, p1){}},this.parent, this, '参数1', '参数2')
   */
  add (name = '', handler = function () {}, fireScope = null, handlerScope = null, ...data) {
    if (_isEqual(_trim(name), '') || _isNull(name) || _isEqual(this.eventModules.has(name), false)) {
      return
    }
    const firingEvent = _find(this.fireEvents, (elem) => {
      return _has(elem, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(elem, 'eventIdentity'))
    })
    if (_isEqual(_isUndefined(firingEvent), false)) {
      // @ts-ignore
      _bind(handler, handlerScope, ...data)(_get(firingEvent, 'data', []))
    }
    if (_isEqual(_has(fireScope, 'eventIdentity'), false)) {
      _set(fireScope, 'eventIdentity', ObserverManager.uuid())
    }
    // @ts-ignore
    this.addEvents.push({ key: name, [name]: function () { return _bind(handler, handlerScope, ...data) }, eventIdentity: _get(fireScope, 'eventIdentity'), once: false })
  }

  /**
   * @description 注册单次事件（此事件在当前作用域环境下只触发一次）
   * @param { string } name=`` -event名称（需要和事件模型中的命名空间+名称匹配）
   * @param { function } handler -事件对应的执行函数
   * @param { Object } fireScope=null -事件定义的作用域也即是 fire 触发时传递的 fireScope
   * @param { Object } handlerScope=null -事件执行的作用域
   * @param {...*} [data] -事件参数<br/>
   * 触发时传入 handler 函数的参数，可以传入多个参数（将会在 fire 触发的参数之前），<br/>
   * data建议不要是一个带有原型对象的数据，而应该是字符类型或单纯的对象
   * @example
   * 事件模型定义：{'game':[{name: 'runEvent', desc: '跑步', data: {num: 10}}]}
   * addOnce('game/runEvent', function(p, p1){}},this.parent, this, '参数1', '参数2')
   */
  addOnce (name = '', handler = function () {}, fireScope = null, handlerScope = null, ...data) {
    if (_isEqual(_trim(name), '') || _isNull(name) || _isEqual(this.eventModules.has(name), false)) {
      return
    }
    const firingEvent = _find(this.fireEvents, (elem) => {
      return _has(elem, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(elem, 'eventIdentity'))
    })
    if (_isEqual(_isUndefined(firingEvent), false)) {
      // @ts-ignore
      _bind(handler, handlerScope, ...data)(_get(firingEvent, 'data', []))
    }
    if (_isEqual(_has(fireScope, 'eventIdentity'), false)) {
      _set(fireScope, 'eventIdentity', ObserverManager.uuid())
    }
    // @ts-ignore
    this.addEvents.push({ key: name, [name]: function () { return _bind(handler, handlerScope, ...data) }, eventIdentity: _get(fireScope, 'eventIdentity'), once: true })
  }

  /**
   * @desc 触发事件
   * @param {string} name=`` -event名称（需要和事件模型中的命名空间+名称匹配）
   * @param {*} fireScope=null -事件定义的作用域
   * @param {{}} [data] - 事件参数，触发时传入 handler 函数的参数必须满足事件模型中的 fireData 参数设置形式
   * @example
   * 事件模型定义：{'game':[{name: 'runEvent', desc: '跑步', data: {num: 10}}]}
   * fire('game/runEvent', this, 'fire参数1', 'fire参数2')
   */
  fire (name = '', fireScope = null, data) {
    if (_isEqual(_trim(name), '') || _isNull(name) || _isEqual(this.eventModules.has(name), false) || _isNull(_get(fireScope, 'eventIdentity', null))) {
      return
    }
    for (const [index, elem] of this.fireEvents.entries()) {
      if (_has(elem, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(elem, 'eventIdentity')) && _isEqual(_get(elem, 'once', false), false)) {
        this.fireEvents.splice(index, 1)
      }
    }
    const fireData = _pick(data, _keys(_get(this.eventModules.get(name), 'fireData', {})))
    const firingEvents = []
    for (const addEvent of this.addEvents.values()) {
      const onceEvent = _find(this.fireEvents, (fireEvent) => {
        return _isEqual(_get(fireEvent, name), _get(addEvent, name)) && _isEqual(_get(fireEvent, 'eventIdentity', null), _get(addEvent, 'eventIdentity')) && _isEqual(_get(addEvent, 'once', false), true)
      })
      if (_isUndefined(onceEvent)) {
        if (_has(addEvent, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(addEvent, 'eventIdentity'))) {
          firingEvents.push(_get(addEvent, name))
          this.fireEvents.push(_set(addEvent, 'data', fireData))
        }
      }
    }
    if (_isEqual(_isEmpty(firingEvents), false)) {
      const order = _get(this.eventModules.get(name), 'order', 'desc')
      if (_isEqual(order, 'asc')) {
        _forOwn(firingEvents, event => event()(fireData))
      }
      if (_isEqual(order, 'desc')) {
        _forOwnRight(firingEvents, event => event()(fireData))
      }
    }
  }

  /**
   * @desc 注销事件
   * @param {string} name=`` -event名称（需要和事件模型中的命名空间+名称匹配）
   * @param {*} fireScope=null -事件定义的作用域
   * @example
   * 事件模型定义：{'game':[{name: 'runEvent', desc: '跑步', data: {num: 10}}]}
   * off('game/runEvent', this)
   */
  off (name = '', fireScope = null) {
    if (_isEqual(_trim(name), '') || _isNull(name) || _isNull(fireScope) || _isEqual(_has(fireScope, 'eventIdentity'), false)) {
      return
    }
    for (const [index, elem] of this.fireEvents.entries()) {
      if (_has(elem, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(elem, 'eventIdentity'))) {
        this.fireEvents.splice(index, 1)
      }
    }
    for (const [index, elem] of this.addEvents.entries()) {
      if (_has(elem, name) && _isEqual(_get(fireScope, 'eventIdentity', null), _get(elem, 'eventIdentity'))) {
        this.addEvents.splice(index, 1)
      }
    }
  }

  /**
   * @desc 释放资源
   */
  clear () {
    this.fireEvents = null
    this.addEvents = null
    this.eventModules.clear()
  }

  /**
   * @desc 获取作用域中的事件列表
   * @param {*} scope -事件定义的作用域
   * @returns {Array}
   * @example
   * getEvents(window)
   */
  getEvents (scope = null) {
    if (_isNull(scope) || _isEqual(_has(scope, 'eventIdentity'), false)) {
      return
    }
    return _filter(this.addEvents, (event) => {
      return _isEqual(_get(event, 'eventIdentity'), _get(scope, 'eventIdentity', ''))
    })
  }

  /**
   * @desc 生成随机值
   * @access private
   * @returns {String}
   */
  static uuid () {
    const s = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
    // @ts-ignore
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-';

    const uuid = s.join('');
    return uuid;
  }
}
export default ObserverManager
