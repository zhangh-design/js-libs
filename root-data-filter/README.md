## RootDataFilter
一个 Javascript 封装的全局数据过滤转换器

**插件的设计初衷**
> 在项目开发中我们会有很多时候需要使用到自定义全局常量，如果在某个模块中单独去定义这样不利于项目的管理，如果能把常量定义（可以单独分包分模块）和常量自动注册并提供统一获取接口这样会有利于常量数据在项目中的管理和使用。


**插件的设计思想**
1. 在项目中统一定义和使用常量。
2. 常量定义可以分包分模块定义，然后提供统一在插件中注册的功能。

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
1.0.0 | 2020-01-08

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
$ npm install RootDataFilterLibrary --save
```

> 使用cdn

```
<script type="text/javascript" src="root-data-filter.min.js"></script>
```

---

> 示例：

```
// 导入插件
import RootDataFilterLibrary from 'RootDataFilterLibrary'

// 真实项目开发时应该把 data 数据放到专门的文件中进行模块化区分管理
var data = {
	SEX_TYPE: [
		{ paramValue: 0, paramDesc: '女' },
		{ paramValue: 1, paramDesc: '男' }
	],
	FLAG_TYPE: [
		{ paramValue: 1, paramDesc: '新增' },
		{ paramValue: 10, paramDesc: '等待' },
		{ paramValue: 128, paramDesc: '归档' },
		{ paramValue: 256, paramDesc: '停用' },
		{ paramValue: 384, paramDesc: '丢弃' }
	],
	WF_TYPE: [
		{ paramValue: 0, paramDesc: '退回' },
		{ paramValue: 1, paramDesc: '提交' },
		{ paramValue: 2, paramDesc: '转交' }
	],
	BOOLEAN_NUMBER_TYPE: [
		{ paramValue: 0, paramDesc: '否' },
		{ paramValue: 1, paramDesc: '是' }
	],
	BOOLEAN_BOOLEAN_TYPE: [
		{ paramValue: false, paramDesc: '否' },
		{ paramValue: true, paramDesc: '是' }
	],
	// KEY 也可以是 '命名空间/名称' 防止命名冲突
	'USER/BOOLEAN_BOOLEAN_TYPE': [
		{ paramValue: false, paramDesc: '否' },
		{ paramValue: true, paramDesc: '是' }
	]
};
var Filter = new RootDataFilterLibrary(data);
var value = Filter._rootFilter(true, 'USER/BOOLEAN_BOOLEAN_TYPE');
console.info(value); // 是

```

---

**类: RootDataFilterLibrary**
> 构造器 Constructor

```
new RootDataFilterLibrary()
```

示例

```
const RootDataFilterLibrary = new RootDataFilterLibrary({})
```

---

**方法**

> 函数： _rootFilter(val, id) → {string|number}

> 说明：插件对外接口函数，转换真实的 value

名称 | 类型 | 描述
---|---|---
val | string\|number | paramValue 的值
id | string \|number | 字典名称 key

> 实例：

```
var data = {'USER/BOOLEAN_BOOLEAN_TYPE': [{ paramValue: false, paramDesc: '否' },{ paramValue: true, paramDesc: '是' }]}
var Filter = new RootDataFilterLibrary(data);
var value = Filter._rootFilter(true, 'USER/BOOLEAN_BOOLEAN_TYPE');
console.info(value); // 是
```
