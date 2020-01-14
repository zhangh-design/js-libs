// 验证插件
// @ts-ignore
import validator from 'vdjs'

/**
 * @desc 验证函数
 * @param {*} data 待验证数据
 * @param {*} constraints 数据限制要求
 * @param {Boolean} [isOne=false] 检查到错误字段即停止,可选,默认false
 * @returns {{}} {status: '检查是否失败，如果存在字段检查不通过，则返回true，反之false', msg: '所有验证信息结果，对象，返回类型数组'}
 * @example
 * data：{name: 'xm', nickname: 'xmm', password: '123'}
 * constraints：{name: {required: true, msg: '名称不能为空'},password: {required: true, not: '123456', min: 6, msg: 'password验证不通过'}}
 */
export default function validate (data = {}, constraints = {}, isOne = false) {
  /**
   * @desc
   * valid.fails()检查是否失败，如果存在字段检查不通过，则返回true，反之false
   * valid.all(true) 返回所有验证信息结果，对象；如果需要返回数组 isArr 为 true 即可。
   * {status: true,msg: ["password验证不通过", "两次输入密码不一致"]}
   * @type {object}
   */
  const valid = validator.validate(data, constraints, isOne)
  return { status: valid.fails(), msg: valid.all(true) }
}

// URL地址防注入 针对查询参数
validator.pushRule('sqlXss', function (val = '', rval = true) {
  if (rval) {
    const re = /select|update|delete|truncate|join|union|exec|insert|drop|count|script|<|>|'|"|=|;/gi;
    const status = re.test(val)
    if (status) {
      return false
    }
  }
  return true
})
