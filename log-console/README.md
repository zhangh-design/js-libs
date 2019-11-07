## LogConsole
一个console输出自定义日志工具

**插件的设计初衷**
> 我们经常会在程序中使用console对象来进行调试信息的输出，这很方便，但是当大量的console对象留在了底层的代码中但是马上去除这些输出日志又无法立即实现。

**插件的设计思想**
1. 统一项目中输出日志的使用
2. 能通过一个级别开关来控制项目中所有日志的输出
3. 可以过滤某一批tag标签的日志

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

**文档**
1. https://segmentfault.com/a/1190000015593006

**更新状态**

版本 | 时间
---|---
1.0.0 | 2019-11-06

---
**库目录结构**

```
未压缩版： log-console-api.js
压缩版：log-console-api.min.js
```

---


**使用**
> 使用npm

```
$ npm install LogConsoleLibrary --save
```

> 使用cdn

```
<script type="text/javascript" src="log-console-api.min.js"></script>
```

---

> 示例：

```
// 导入插件
import LogConsoleLibrary from 'logConsoleLibrary'

// 初始化插件并传入日志的级别，并过滤user-data和goods-data为tag的日志
const LogConsole = new LogConsoleLibrary(1, ['user-data','goods-data']);
// 输出日志
LogConsole.e('test','test error output', 'ok')


```

---

**类: Console**
> 构造器 Constructor

```
new LogConsoleLibrary(level, filterTagArray)
```
> 构造函数接收2个参数，第一个参数为必填，第二参数可选

参数：

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
level | number | 必填 | 1 | 日志的级别
filterTagArray | array | 可选 |  | tag标签过滤数组，调用插件进行日志输出过滤时为必传参数

示例

```
const LogConsole = new LogConsoleLibrary(1, ['read']);
```

---

**日志输出函数**

> 函数：v(tag, …msg)

> 说明：用于输出普通信息

> 注意：构造函数入参不能大于VERBOSE

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
tag | string |  |  | tag标签
msg | * | 可变参 |  | 输出信息，可以接收多个参数

> 实例：

```
const LogConsole = new LogConsoleLibrary(1, ['read']);

LogConsole.i('get','测试输出普通信息', '获取数据')
```

> 函数：a(condition, tag, …msg)

> 说明：用于输出断言调试信息-某些为false的条件下输出消息，而不是用if-else

> 注意：构造函数入参不能大于ASSERT

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
condition | boolean |  | false | 参数为false的条件下输出消息
tag | string |  |  | tag标签
msg | * | 可变参 |  | 输出信息，可以接收多个参数

> 实例：

```
const LogConsole = new LogConsoleLibrary(1, ['read']);

LogConsole.a(6 < 5,'get','测试断言调试信息', '获取数据')
```

> 函数：i(tag, …msg)

> 说明：用于输出提示性信息

> 注意：构造函数入参不能大于INFO

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
tag | string |  |  | tag标签
msg | * | 可变参 |  | 输出信息，可以接收多个参数

> 实例：

```
const LogConsole = new LogConsoleLibrary(1, ['read']);

LogConsole.i('get','测试断言调试信息', '获取数据')
```

> 函数：w(tag, …msg)

> 说明：用于输出警示信息

> 注意：构造函数入参不能大于WARN

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
tag | string |  |  | tag标签
msg | * | 可变参 |  | 输出信息，可以接收多个参数

> 实例：

```
const LogConsole = new LogConsoleLibrary(1, ['read']);

LogConsole.w('get','测试断言调试信息', '获取数据')
```

> 函数：e(tag, …msg)

> 说明：用于输出错误信息

> 注意：构造函数入参不能大于ERROR

名称 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
tag | string |  |  | tag标签
msg | * | 可变参 |  | 输出信息，可以接收多个参数

> 实例：

```
const LogConsole = new LogConsoleLibrary(1, ['read']);

LogConsole.e('get','测试断言调试信息', '获取数据')
```
