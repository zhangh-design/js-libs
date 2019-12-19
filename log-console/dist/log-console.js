(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LogConsoleLibrary"] = factory();
	else
		root["LogConsoleLibrary"] = factory();
})(window, function() {
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var ConsoleLog =
/*#__PURE__*/
function () {
  function Log() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var filterTagArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Log);

    /**
     * @desc 日志输出级别-普通信息，将输出v、A、i、w、e
     * @type {number}
     * @param {number} VERBOSE=1 -级别1
     * @readonly
     * @default
     */
    this.VERBOSE = 1;
    /**
     * @desc 日志输出级别-断言调试信息，将输出A、i、w、e
     * @type {number}
     * @param {number} ASSERT=2 -级别2
     * @readonly
     * @default
     */

    this.ASSERT = 2;
    /**
     * @desc 日志输出级别-输出提示性信息，将输出i、w、e
     * @type {number}
     * @param {number} INFO=3 -级别3
     * @readonly
     * @default
     */

    this.INFO = 3;
    /**
     * @desc 日志输出级别-输出警示信息，将输出w、e
     * @type {number}
     * @param {number} WARN=4 -级别4
     * @readonly
     * @default
     */

    this.WARN = 4;
    /**
     * @desc 日志输出级别-输出错误信息，将输出e
     * @type {number}
     * @param {number} ERROR=5 -级别5
     * @readonly
     * @default
     */

    this.ERROR = 5;
    /**
     * @desc 级别
     * @type {number}
     * @private
     */

    this.level = level;
    /**
     * @desc 过滤的tag
     * @type {array}
     * @private
     */

    this.filterTagArray = filterTagArray;
    /**
     * 定义输出对象
     */

    this.log = console.log;
    this.assert = console.assert;
    this.info = console.info;
    this.warn = console.warn;
    this.error = console.error;
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


  _createClass(Log, [{
    key: "v",
    value: function v() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.level <= this.VERBOSE) {
        if (this.filterTagArray.includes(tag) === false) {
          var _console;

          for (var _len = arguments.length, msg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            msg[_key - 1] = arguments[_key];
          }

          (_console = console).log.apply(_console, [tag].concat(msg));
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

  }, {
    key: "a",
    value: function a() {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (this.level <= this.ASSERT) {
        if (this.filterTagArray.includes(tag) === false) {
          var _console2;

          for (var _len2 = arguments.length, msg = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            msg[_key2 - 2] = arguments[_key2];
          }

          (_console2 = console).assert.apply(_console2, [condition, tag].concat(msg));
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

  }, {
    key: "i",
    value: function i() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.level <= this.INFO) {
        if (this.filterTagArray.includes(tag) === false) {
          var _console3;

          for (var _len3 = arguments.length, msg = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            msg[_key3 - 1] = arguments[_key3];
          }

          (_console3 = console).info.apply(_console3, [tag].concat(msg));
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

  }, {
    key: "w",
    value: function w() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.level <= this.WARN) {
        if (this.filterTagArray.includes(tag) === false) {
          var _console4;

          for (var _len4 = arguments.length, msg = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            msg[_key4 - 1] = arguments[_key4];
          }

          (_console4 = console).warn.apply(_console4, [tag].concat(msg));
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

  }, {
    key: "e",
    value: function e() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.level <= this.ERROR) {
        if (this.filterTagArray.includes(tag) === false) {
          var _console5;

          for (var _len5 = arguments.length, msg = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            msg[_key5 - 1] = arguments[_key5];
          }

          (_console5 = console).error.apply(_console5, [tag].concat(msg));
        }
      }
    }
  }]);

  return Log;
}();

/* harmony default export */ __webpack_exports__["default"] = (ConsoleLog);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=log-console.js.map