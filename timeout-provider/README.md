## TimeoutProvider
一个Javascript封装的高级定时器使用插件

**插件的设计初衷**
> 在项目开发中我们会有很多时候需要使用到定时器的功能，所以对定时器的使用进行一个约束使得开发中都能使用统一的语法来进行开发那对于后期的维护是有很大帮助的。


**插件的设计思想**
1. 在项目统一使用定时器、节流函数的用法
2. 针对循环定时器提供执行方法，不使用`setInterval`

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

**更新状态**

版本 | 时间
---|---
1.0.0 | 2019-12-17

---
**库目录结构**

```
未压缩版： timeout-provider.js
压缩版：timeout-provider.min.js
```

---


**使用**
> 使用npm

```
$ npm install TimeoutProviderLibrary --save
```

> 使用cdn

```
<script type="text/javascript" src="timeout-provider.min.js"></script>
```

---

> 示例：

```
// 导入插件
import TimeoutProviderLibrary from 'TimeoutProviderLibrary'

// eslint-disable-next-line
const tp = new TimeoutProviderLibrary()
const Person = function () {
  this.name = '小明'
}
const personInstance = new Person()
// 单个定时器
let see = function (...params) {
  console.log(params[0], ' ', this.name, ' ', params[1]);
}
tp.setTimeout(personInstance, see, 2000, 'hello', '!')

// 循环定时器
window.counter = 5
let run = function (...params) {
  console.info(params[0], ' ', this.name, ' ', params[1]);
  return window.counter--
}
tp.setInterval(personInstance, run, 2000, 'go', 'run')

// 节流定时器
let doSize = function () {
  console.info('resize');
}
var myDebounce = tp.setThrottle(personInstance, doSize, 3000)
// 请注意：这里使用了jquery来做示例
// eslint-disable-next-line no-undef
jQuery(window).resize(myDebounce);


```

---

**类: TimeoutProviderLibrary**
> 构造器 Constructor

```
new TimeoutProviderLibrary()
```

示例

```
const TimeoutProvider = new TimeoutProvider()
```

---

**方法**

> 函数：setInterval(scope, handler, interval, …params) → {number}

> 说明：用于需要循环调用的定时器

> 注意：handler执行函数必须返回boolean类型

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
scope | Object |  | null | 提供给 handler 参数的作用域
handler | function |  |  | 执行函数
interval | number |  | 1000 | 时间（毫秒）
params | * | 可选、可变参 |  | 定时器接收的额外参数

> 实例：

```
window.counter = 5;
const person = function(){this.name='小明'}
const doEat = function(...params){
  console.log(params[0], this.name, params[1]);
  return window.counter--;
}
timeoutProvider.setInterval(new person, doEat, 2000, 'hello', '!')
```

> 函数：setThrottle(scope, handler, wait, options) → {function}

> 说明：节流定时器，在指定时间后执行

> 注意：返回新的 debounced（防抖动）函数，可以用于取消防抖动调用

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
scope | Object |  | null | 提供给 handler 参数的作用域
handler | function |  | null | 执行函数
wait | number |  | 1000 | 需要延迟的毫秒数
options | Object | 可选 | { leading: false, trailing: true } | 选项对象

> 实例：

```
let doSize = function () {console.info('resize');}
var myDebounce = tp.setThrottle(personInstance, doSize, 3000)
jQuery(window).resize(myDebounce);
```

> 函数：setTimeout(scope, handler, timeout, …params) → {number}

> 说明：单个定时器

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
scope | Object |  | null | 提供给 handler 参数的作用域
handler | function |  | null | 执行函数
timeout | number |  | 1000 | 时间（毫秒）
params | * | 可选、可变参 |  | 定时器接收的额外参数


> 实例：

```
const person = function(){this.name='小明'}
const doEat = function(...params){console.log(params[0], this.name);}
timeoutProvider.setTimeout(new person, doEat, 2000, 'hello')
```
