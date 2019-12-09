/**
 * @desc 原型帮助函数配置文件
 * @type {object}
 * @property {function} Promise.f_done - 最终全局捕获抛出 Promise 发生的异常，可以在外部通过`cover`接口进行复写
 * @property {function} Promise.f_finally - Promise成功或失败最后都会调用的处理函数
 * @property {function} Date.f_formatToDate - 字符串类型的时间 转化成 Date 类型
 * @property {function} Date.f_format - 转换时间格式 'yyyy-mm-dd'
 * @property {function} Date.f_now - 获取当前时间戳
 * @property {function} Number.f_toNumber - 转换 字符value 为一个数字
 * @property {function} Object.f_objectKeys - 获取对象的key键值对返回array（如果是json对象返回key键值对的array，如果是array数组返回下标的array）
 * @property {function} Object.f_getPureObject - 创建一个100%纯对象，它不对从Object继承任何属性或方法（例如，constructor，toString()等）
 * @property {function} String.f_strHaveStr - 正则匹配 判断字符串中是否包含某个字符串 strHaveStr('abc','bc')
 * @property {function} String.f_getWordCount - 统计文字个数（可以判断中文字节数）
 * @property {function} Window.f_getUrlParams - 获取url参数
 * @property {function} Number.f_getNumBit - 数字位数，只获取整数位 (100.12 整数位就是 3)
 * @property {function} Date.f_isTodayDate - 判断时间是不是今天
 * @property {function} Date.f_getDateByMon - 获取指定月份天数
 * @property {function} String.f_delBlankSpace - 删除空白字符串和html字符
 * @property {function} String.f_cutText - 裁剪文字，显示...
 *
 */
// @ts-ignore
import dateformat from 'dateformat-util'
import qs from 'querystring'

import _set from 'lodash/set'
import _now from 'lodash/now'
import _toNumber from 'lodash/toNumber'
import _keys from 'lodash/keys'

const utils = {
  'Promise.f_done': function () {
    _set(Promise, 'prototype.f_done', function (onFulfilled, onRejected) {
      this.then(onFulfilled, onRejected).catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => { throw reason }, 0)
      })
    })
  },
  'Promise.f_finally': function () {
    _set(Promise, 'prototype.f_finally', function (callback = function () {}) {
      let P = this.constructor
      return this.then(
        value => P.resolve(callback(value)).then(() => value),
        reason => P.resolve(callback(reason)).then(() => { throw reason })
      )
    })
  },
  'Date.f_formatToDate': function () {
    _set(Date, 'prototype.f_formatToDate', function (date = '2019-12-09 13:46:10') {
      return dateformat.formatToDate(date);
    })
  },
  'Date.f_format': function () {
    _set(Date, 'prototype.f_format', function (date = new Date(), format = 'yyyy-mm-dd') {
      return dateformat.format(date, format)
    })
  },
  'Date.f_now': function () {
    _set(Date, 'prototype.f_now', function () {
      return _now()
    })
  },
  'Number.f_toNumber': function () {
    _set(Number, 'prototype.f_toNumber', function (value = '1') {
      return _toNumber(value)
    })
  },
  'Object.f_objectKeys': function () {
    _set(Object, 'prototype.f_keys', function (value = {}) {
      return _keys(value)
    })
  },
  'String.f_strHaveStr': function () {
    _set(String, 'prototype.f_strHaveStr', function (str = '', regStr = '') {
      const reg = new RegExp('^.*' + regStr + '.*$');
      if (str.match(reg)) {
        return true
      }
      return false
    })
  },
  'Object.f_getPureObject': function () {
    _set(Object, 'prototype.f_getPureObject', function () {
      return Object.create(null)
    })
  },
  'String.f_getWordCount': function () {
    _set(String, 'prototype.f_getWordCount', function (str = '') {
      const pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
      let m = str.match(pattern);
      let count = 0;
      if (m === null) {
        return count;
      }
      for (var i = 0; i < m.length; i++) {
        if (m[i].charCodeAt(0) >= 0x4E00) {
          count += m[i].length;
        } else {
          count += 1;
        }
      }
      return count;
    })
  },
  'String.f_toString': function () {
    _set(String, 'prototype.f_toString', function (val = '1') {
      return (val).toString()
    })
  },
  'Window.f_getUrlParams': function () {
    _set(Window, 'prototype.f_getUrlParams', function (url = window.location.href) {
      return qs.parse(url.split('?')[1])
    })
  },
  'Number.f_getNumBit': function () {
    _set(Number, 'prototype.f_getNumBit', function (num = 1) {
      let intNum = num.toFixed(0)
      return intNum.length
    })
  },
  'Date.f_isTodayDate': function () {
    _set(Date, 'prototype.f_isTodayDate', function (time = new Date()) {
      if (time.toDateString() === new Date().toDateString()) {
        return true
      } else {
        return false
      }
    })
  },
  'Date.f_getDateByMon': function () {
    _set(Date, 'prototype.f_getDateByMon', function (year = '2019', month = '12') {
      let d = new Date(year, month, 0)
      return d.getDate()
    })
  },
  'String.f_delBlankSpace': function () {
    _set(String, 'prototype.f_delBlankSpace', function (str = '1') {
      str = str.replace(/<\/?[^>]*>/gim, '');// 去掉所有的html标记
      let result = str.replace(/(^\s+)|(\s+$)/g, '');// 去掉前后空格
      return result.replace(/\s/g, '');// 去除文章中间空格
    })
  },
  'String.f_cutText': function () {
    _set(String, 'prototype.f_cutText', function (str = '', maxLength = 0, showEllipsis = true) {
      if (str.length > maxLength) {
        str = str.substr(0, maxLength);
        if (showEllipsis) {
          str += '...';
        }
      }
      return str;
    })
  }
}
export default utils
