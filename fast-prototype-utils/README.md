## fast-prototype-utils
前端通用自定义原型处理函数

**插件的设计初衷**
> 项目开发中我们经常需要使用到很多的帮助方法，为了避免重复去定义这些相同的工具方法我们经常会把这些帮助方法收入到一个utils.js的文件中进行统一管理但是如果都把庞大的工具方法收入到一个utils.js或多个名为utils.js的文件中其实是不便于管理和查找的，utils.js中收入的方法可能不是同一时间统一进行维护的同一种类型的方法可能散乱在utils.js中的不同地方，所有如果能把相同类型的工具方法都挂载到某个具体类型的原型上使用时稍加思考这个工具方法的 js 类型是哪个，然后使用该类型的原型来调用这个工具方法这样既利于快速调用、明确定义。

**插件的设计思想**
1. 可以把一些经常用到的帮助函数分类来进行管理。
2. 统一进行原型函数的挂载、移除、复写。
3. 可以通过配置来初始化挂载想要使用到的帮助函数。

**构建配置抽离成npm包的意义**
> ##### 通用性
1. 业务开发者无需关注构建配置
2. 统一团队构建脚本

> ##### 可维护性
1. 构建配置合理的拆分
2. README 文档、ChangeLog文档等

> ##### 质量
1. 冒烟测试、单元测试、测试覆盖率
2. 持续集成

---

**编辑器**
1. Visual Studio Code

**语言**
1. javascript ES6

**构建工具**
1. "webpack": "^4.41.2"
2. "webpack-cli": "^3.3.9"

**构建命令**
1. npm run build

**浏览器兼容版本**

兼容 `IE`、`Chrome`。

**更新状态**

版本 | 时间
---|---
1.0.0 | 2019-12-09

---
**库目录结构**

```
未压缩版： fast-prototype-utils.js
压缩版：fast-prototype-utils.min.js
```

---


**使用**
> 使用npm

```
$ npm install fast-prototype-utils --save
```

> 使用cdn

```
<script type="text/javascript" src="fast-prototype-utils.min.js"></script>
```

---

> 示例：

```
// 导入插件
import FastPrototypeUtilsLibrary from 'fast-prototype-utils'

// 初始化的原型帮助函数列表key值名称
const requires = ['Promise.f_done', 'Promise.f_finally', 'Date.f_formatToDate', 'Date.f_format', 'Date.f_now', 'Number.f_toNumber', 'String.f_getWordCount']
// 初始化全局原型帮助函数
// const requires = []
const FastPrototypeUtils = new FastPrototypeUtilsLibrary(requires)

// 输出所有帮助函数key值的列表
console.info(FastPrototypeUtils.getKeys());
// 示例测试
console.info(Date.prototype.f_now());
console.info(Date.prototype.f_formatToDate('2019-12-09 15:58:10'));
console.info(Number.prototype.f_toNumber('100') === 100);
console.info(String.prototype.f_getWordCount('js获取0-1之间的随机数，获取1-10之间的随机数'));

const p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'done');
  // setTimeout(reject, 1000, 'done');
})
p.then(() => {
  console.info('success');
  return 'OK'
}).f_finally((reason) => {
  console.info('finally ', reason);
})
// 输出：
/**
 * success
 * finally  OK
 *
*/

// 获取两个数之间的随机整数
// 这里没有使用 Math ，因为 Math 不是构造函数而是一个对象
FastPrototypeUtils.add(Number, 'f_getRandomNumberByRange', function (start, end) {
  return Math.floor(Math.random() * (end - start) + start)
})
console.info(Number.prototype.f_getRandomNumberByRange(10, 20));

FastPrototypeUtils.remove(Number, 'f_getRandomNumberByRange');
console.info(Reflect.has(Number.prototype, 'f_getRandomNumberByRange'));

FastPrototypeUtils.cover(Date, 'f_now', function () {
  return new Date()
})
console.info(Date.prototype.f_now());
```


---


**类: FastPrototypeUtils**
> 构造器 Constructor

```
new FastPrototypeUtils(requires)
```
> 构造函数接收1个需要初始化的原型帮助函数的key键列表作为参数

参数：

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
requires | array |  | [] | 需要初始化的原型帮助函数的key键列表

示例

```
const fastPrototypeUtils = new FastPrototypeUtilsLibrary(['Promise.f_done','Promise.f_finally','Date.f_format'])
```


> 函数：add (constructorFn, name, handler)

> 说明：注册并添加一个原型帮助函数（如果函数名称是已经存在在插件的默认配置列表中那么请使用 `cover` 方法去进行复写）

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
constructorFn | function |  | null | 构造函数本身
name | string |  | null | 名称key值
handler | function |  | null | 处理逻辑函数

示例

```
const Person = function(){}
fastPrototypeUtils.add(Person, 'getName', function(){return 'hello'})
const PInstance = new Person
console.log(PInstance.getName())
console.log(Person.prototype.getName())
```

> 函数：cover (constructorFn, name)

> 说明：复写某个默认的原型帮助函数

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
constructorFn | function |  | null | 构造函数本身
name | string |  | null | 名称key值

示例
fastPrototypeUtils.cover(Date, 'f_format', function(){return new Date()})

> 函数：getKeys () → {array}

> 说明：返回已经配置的所有原型帮助函数的key键（包括没有初始化的）

示例

```
fastPrototypeUtils.getKeys()
```

> 函数：include (key) → {boolean}

> 说明：复写某个默认的原型帮助函数

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
key | string |  | '' | 原型帮助函数的key值

示例

```
fastPrototypeUtils.include('Number.f_toNumber')
```

> 函数：remove (constructorFn, name)

> 说明：移除自定义的某个 prototype 帮助函数

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
constructorFn | function |  | null | 构造函数本身
name | string |  |  | 名称key值

示例

```
fastPrototypeUtils.remove(Person, 'getName')
```


---

附录：

**默认集成 原型帮助函数配置列表**


名称 | 类型 | 描述
---|---|---
Promise.f_done | function | 最终全局捕获抛出 Promise 发生的异常，可以在外部通过`cover`接口进行复写
Promise.f_finally | function | Promise成功或失败最后都会调用的处理函数
Date.f_formatToDate | function | 字符串类型的时间 转化成 Date 类型
Date.f_format | function | 转换时间格式 'yyyy-mm-dd'
Date.f_now | function | 获取当前时间戳
Number.f_toNumber | function | 转换 字符value 为一个数字
Object.f_objectKeys | function | 获取对象的key键值对返回array（如果是json对象返回key键值对的array，如果是array数组返回下标的array）
Object.f_getPureObject | function | 创建一个100%纯对象，它不对从Object继承任何属性或方法（例如，constructor，toString()等）
String.f_strHaveStr | function | 正则匹配 判断字符串中是否包含某个字符串 strHaveStr('abc','bc')
String.f_getWordCount | function | 统计文字个数（可以判断中文字节数）
Window.f_getUrlParams | function | 获取url参数
Number.f_getNumBit | function | 数字位数，只获取整数位 (100.12 整数位就是 3)
Date.f_isTodayDate | function | 判断时间是不是今天
Date.f_getDateByMon | function | 获取指定月份天数
String.f_delBlankSpace | function | 删除空白字符串和html字符
String.f_cutText | function | 裁剪文字，显示...
