/**
 * @class RootDataFilter
 * @classdesc 一个 Javascript 封装的全局数据过滤转换器
 * @desc
 * （使用 Vue 框架开发项目时建议使用 mixins 在 Vue 根实例上 new Vue({el: '#app', mixins: [rootParamsFilter]})）
 * {"KEY": [{"paramValue":key,"paramDesc": value}],...}
 * KEY也可以是 '命名空间/名称' 防止命名冲突
 * 根实例过滤转换器建议包含全局数据字典数据
 * @see 插件功能详细介绍请查看
 * {@link https://github.com/zhangh-design/js-libs/blob/master/timeout-provider/README.md GitHub}
 * @author zhangh
 * @version 1.0.0
 * @example
 * const data = {'SEX_TYPE': [{ 'paramValue': 0, 'paramDesc': '女' },{ 'paramValue': 1, 'paramDesc': '男' }]}
 * const Filter = new RootDataFilter(data)
 * window.$rootFilter = Filter // 全局使用（也可以挂载到例如： Vue 的原型上）
 * var value = Filter._rootFilter(true, 'USER/BOOLEAN_BOOLEAN_TYPE');
 */
import _has from 'lodash/has';
import _isEqual from 'lodash/isEqual';
import _isNil from 'lodash/isNil';
import _cloneDeep from 'lodash/cloneDeep';

const RootDataFilter = class RootDataFilter {
  /**
   *
   * @param {*} data={} - 数据字典对象
   */
  constructor (data = {}) {
    this.data = _cloneDeep(data); // 所有转换参数放入本地数据源中
    this._filterFunc = null;
    this._getRootParamsFunc();
  }

  _getRootParamsFunc () {
    this._filterFunc = {};
    Object.keys(this.data).forEach(paramKey => {
      if (_isEqual(_has(this._filterFunc, paramKey.toUpperCase()), false)) {
        this._filterFunc[paramKey.toUpperCase()] = val => {
          const tar =
            this.data[paramKey].find(item => item.paramValue === val) || {};
          return tar.paramDesc;
        };
      }
    });
  }

  /**
   * @desc
   * 插件对外接口函数
   * 转换真实的 value
   * @param {string|number} val - paramValue 的值
   * @param {string|number} id - 字典名称 key
   * @returns {string|number}
   * @example
   * var data = {'USER/BOOLEAN_BOOLEAN_TYPE': [{ paramValue: false, paramDesc: '否' },{ paramValue: true, paramDesc: '是' }]}
   * var Filter = new RootDataFilterLibrary(data);
   * var value = Filter._rootFilter(true, 'USER/BOOLEAN_BOOLEAN_TYPE');
   * console.info(value); // 是
   */
  _rootFilter (val, id) {
    if (_isNil(id) || _isNil(val)) {
      return;
    }
    const func = this._filterFunc;
    const mth = func && func[id];
    if (mth) {
      return mth(val);
    }
    return undefined;
  }
};
export default RootDataFilter;
