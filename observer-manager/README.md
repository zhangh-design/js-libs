## ObserverManager
自定义事件发布-订阅插件

**插件的设计初衷**
> 项目开发中我们经常需要使用到发布订阅模式来降低各个模块间的耦合度，但如果不妥善的管理众多的事件定义、触发，随意的定义事件名称、绑定事件对象、触发事件执行，会让整个发布订阅系统一团糟后期的维护成本也会加大很多。

**插件的设计思想**
1. 统一管理、方便查看事件列表 - 提供事件模型注册中心
2. 任意函数对象可以拥有自身的事件集合-防止事件添加到一个对象上
3. 事件触发后可以具有传播性 - 事件如果已经触发那么后面自动加入的相同作用域下的相同名称的事件也应立马获得执行
4. 相同名称的事件在不同的作用域中互不影响
5. 定义对象间的一种一对多的依赖关系

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
1.0.0 | 2019-11-19

---
**库目录结构**

```
未压缩版： observer-manager.js
压缩版：observer-manager.min.js
```

---


**使用**
> 使用npm

```
$ npm install ObserverManagerLibrary --save
```

> 使用cdn

```
<script type="text/javascript" src="observer-manager.min.js"></script>
```

---

> 示例：

```
// 导入插件
import ObserverManager from 'ObserverManagerLibrary'

// 事件模型列表// 事件模型列表
const eventModuleConfig = {
	'game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {name: '', address: '', date: ''}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
// 初始化事件加载器，传入事件模型
const ObserverManagerInstance = new ObserverManager(eventModuleConfig)

// 一个函数作用域
var child = class {}
var childInstance = new child()

// 事件 handler 执行函数
let runHandler = function(a, b, {name, date}){
	console.info('run', a, b, name, date);
}

// 事件 handler2 执行函数
let runHandler2 = function(a, b){
	console.info('run', a, b);
}

// 在 window 环境下注册事件，将 handler 函数绑定到 window 环境下执行，传参1和3
ObserverManagerInstance.add('game/runEvent', runHandler, window, window, 1, 3)
// 注册单次事件，传参2和3
ObserverManagerInstance.addOnce('game/runEvent', runHandler, window, window, 2, 3)

setTimeout(() => {
	console.info('触发事件')
	// 触发 window 环境下的 game/runEvent 事件
	ObserverManagerInstance .fire('game/runEvent', window, {name: '小明', date: '6-01'})
	console.info('======')
	// 触发 window 环境下的 game/runEvent 事件，addOnce 注册的事件不在执行因为上一个 fire 已经执行掉了
	ObserverManagerInstance .fire('game/runEvent', window, {name: '小明', date: '6-02'})
}, 500);

setTimeout(() => {
	console.info('-------------');
	// 触发 window 环境下的 game/runEvent 事件
	ObserverManagerInstance .fire('game/runEvent', window, {name: '小明', distance: 200})
	// 注册 child 函数作用域环境下的 game/runEvent 事件，runHandler2 绑定到 childInstance环境下 （不会触发 window 环境下的 game/runEvent 事件）
	ObserverManagerInstance .add('game/runEvent', runHandler2, childInstance, window, 2, 6)
	console.info('-------------');
	// 触发 child 函数作用域环境下的 game/runEvent 事件
	ObserverManagerInstance .fire('game/runEvent', childInstance, {name: '小红'})
}, 1500);

setTimeout(() => {
	// 注销 window 作用域下某个事件
	ObserverManagerInstance.off('game/runEvent', window)
	// 销毁所有事件集合
	ObserverManagerInstance.clear()
}, 3000);

// 输出结果：
/**
 * 触发事件
 * run 1 3 5  （window环境）
 * run 2 3 5  （window环境）
 * ======
 * run 1 3 15 （window环境）
 * -------------
 * run 1 3 10 （window环境）
 * -------------
 * run 2 6     （child环境）
 */

```

---
##### 事件模型对象配置参数

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string | | | 事件名称
desc | string | | | 事件详细描述
order | string | 可选 | desc | 事件触发的顺序 可选值有 asc 事件顺序触发、desc 事件倒序触发
fireData | Object | 可选 | {} | fire触发时传递的参数对象描述，`如果传递的参数没有在这里定义将不能传递到 handler 执行函数中`

==注意==：事件定义都应该配置 命名空间对象，如下示例中 命名空间配置 的是 `game`，命名空间可以有多层 参考附录①

示例：

```
const eventModuleConfig = {
	'game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
```


---


**类: ObserverManager**
> 构造器 Constructor

```
new ObserverManager(userEventConfigModuleList)
```
> 构造函数接收1个事件描述模型对象参数，用于控制事件的注册、触发、注销

参数：

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
userEventConfigModuleList | Object |  | {} | 事件描述模型对象

示例

```
// 事件模型列表
const eventModuleConfig = {
	'game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
// 初始化事件加载器，传入事件模型
const ObserverManager = new ObserverManagerLibrary(eventModuleConfig)
```
---

**操作函数**

> 函数：add (name, handler, fireScop, handlerScope, ...data)

> 说明：注册事件

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string |  | `` | event名称（需要和事件模型中的命名空间+事件名称匹配）参考附录①
handler | function |  | function | 事件对应的执行函数
fireScop | Object |  | null | 事件定义的作用域也即是fire触发时传递的fireScope
handlerScope | Object |  | null | 事件执行的作用域
data | * | <可变参><可选> |  | 事件参数，触发时传入 handler函数的参数，可以传入多个参数（将会在 fire 触发的参数之前），data建议不要是一个带有原型对象的数据，而应该是字符类型或单纯的对象
> 示例：

```
const eventModuleConfig = {
	'game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
// 初始化事件加载器，传入事件模型
const ObserverManager = new ObserverManagerLibrary(eventModuleConfig)
// 事件 handler 执行函数
let runHandler = function(a, b, c){
	console.info('run', a, b, c);
}
// 在 window 环境下注册事件，将 handler 函数绑定到 window 环境下执行，传参1和3
ObserverManager.add('game/runEvent', runHandler, window, window, 1, 3)
```

> 函数：addOnce (name, handler, fireScope, handlerScope, ...data)

> 说明：注册单次事件（此事件在当前作用域环境下只触发一次）

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string |  | `` | event名称（需要和事件模型中的命名空间+名称匹配）
handler | function |  | function | 事件对应的执行函数
fireScope | Object |  | null | 事件定义的作用域也即是fire触发时传递的fireScope
handlerScope | Object |  | null | 事件执行的作用域
data | * | <可变参><可选> |  | 事件参数，触发时传入 handler函数的参数，可以传入多个参数（将会在 fire 触发的参数之前），data建议不要是一个带有原型对象的数据，而应该是字符类型或单纯的对象
> 示例：

```
const eventModuleConfig = {
	'game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
// 初始化事件加载器，传入事件模型
const ObserverManager = new ObserverManagerLibrary(eventModuleConfig)
// 事件 handler 执行函数
let runHandler = function(a, b, c){
	console.info('run', a, b, c);
}
// 在 window 环境下注册事件，将 handler 函数绑定到 window 环境下执行，传参1和3
ObserverManager.addOnce('game/runEvent', runHandler, window, window, 1, 3)
```

> 函数：fire (name, fireScope, ...data)

> 说明：触发 fireScope 作用域下事件

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string |  | `` | event名称（需要和事件模型中的命名空间+名称匹配）
fireScope | Object |  | null | 事件定义的作用域
data | {} | <可选> |  | 事件参数，触发时传入 handler 函数的参数必须满足事件模型中的 fireData 参数设置形式

示例：

```
// 触发 window 环境下的 game/runEvent 事件并传入一个参数 {name: '小红'}
ObserverManager.fire('game/runEvent', window, {name: '小红'})
```
> 函数：off (name, fireScope)

> 说明：注销 fireScope 作用域下的事件

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string |  | `` | event名称（需要和事件模型中的命名空间+名称匹配）
fireScope | null |  |  | 事件定义的作用域

示例：

```
// 注销 window 作用域下某个事件
ObserverManager.off('game/runEvent', window)
```

> 函数：clear ()

> 说明：清空当前事件管理器对象中的所有事件

示例：

```
// 销毁所有事件集合
ObserverManager.clear()
```

---

### 附录
事件名称的组合

①：事件名：命名空间`game` + `/` + 事件名`runEvent`

> `game/runEvent` 命名空间和具体事件名称之间使用 `/` 分隔符组合，多层事件名称命名建议：`boy/game/runEvent`

```
// 事件模型列表
const eventModuleConfig = {
	'boy/game': [
		{name: 'runEvent', desc: '触发跑步事件', order: 'asc', fireData: {}},
		{name: 'swimEvent', desc: '触发游泳事件', order: 'desc', fireData: {}}
	]
}
```


