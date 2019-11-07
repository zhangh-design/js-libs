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
/**
 * @class
 * @classdesc 自定义日志工具，通过日志level级别来控制项目中日志的输出
 * @desc 构造函数接收1个日志级别参数，用于控制日志的输出
 * @see 插件功能详细介绍请查看 https://segmentfault.com/a/1190000015593006
 * @author zhangh
 * @version 1.0.0
 * @param { number } level=1 - 日志级别 可接受值有 1、2、3、4、5，如果传入的值比5大将不做任何输出
 * @example
 * new ConsoleLog(1)
 */
const ConsoleLog = class Log {
  constructor (level = 1) {
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

    this.level = level
  }

  /**
   * @desc 用于输出普通信息
   * @param {string} tag='' - tag标签
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  v (tag = '', ...msg) {
    if (this.level <= this.VERBOSE) {
      console.log(tag, ...msg)
    }
  }

  /**
   * @desc 用于输出断言调试信息-某些为false的条件下输出消息，而不是用if-else
   * @param {boolean} condition=false - 参数为false的条件下输出消息
   * @param {string} tag='' - tag标签，入参不能大于VERBOSE
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  a (condition = false, tag = '', ...msg) {
    if (this.level <= this.ASSERT) {
      console.assert(condition, tag, ...msg)
    }
  }

  /**
   * @desc 用于输出提示性信息
   * @param {string} tag='' - tag标签，入参不能大于INFO
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  i (tag = '', ...msg) {
    if (this.level <= this.INFO) {
      console.info(tag, ...msg)
    }
  }

  /**
   * @desc 用于输出警示信息
   * @param {string} tag='' - tag标签，入参不能大于WARN
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  w (tag = '', ...msg) {
    if (this.level <= this.WARN) {
      console.warn(tag, ...msg)
    }
  }

  /**
   * @desc 用于输出错误信息
   * @param {string} tag='' - tag标签，入参不能大于ERROR
   * @param {...*} msg  - 输出信息，可以接收多个参数
   * @example
   * new ConsoleLog().v('XXX ', '开始执行', new Date())
   */
  e (tag = '', ...msg) {
    if (this.level <= this.ERROR) {
      console.error(tag, ...msg)
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ConsoleLog);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=log-console-api.js.map