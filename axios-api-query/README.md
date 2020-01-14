##  LoaderApi
一个javascript通过api对象模型描述自动生成axios请求实例的插件

**插件的设计初衷**
> 我们在编写某个模块的业务代码时常常会将请求的具体代码也加入到其中，有些同学可能会将代码中所有的ajax请求或者某些模块中的ajax请求特定的抽出到某个js配置文件例如：user_ajax_config.js，如果直接写在代码中那么无形中使得我们的代码将变得异常臃肿而且
难以review，如果抽离出配置文件则需要在一个配置文件中定义n多的函数定义（这里我觉得定义每个函数的name将会特别的难受），而且针对于请求函数的通用设计和特殊设计也将会把配置文件的逻辑搞的一团糟。

**插件的设计思想**
> api请求接口模型化，接口定义和执行分离

> 接口模型可以用配置文件构造例如：user.js用于存放所有user相关的请求描述

> 接口的描述可以让后端人员按照描述规则提前在接口管理系统里填写好

> api请求中的繁琐的数据验证抽离成验证配置对象

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

**组件**
1. "lodash": "^4.17.15",
2. "querystring": "^0.2.0",
3. "vdjs": "^1.0.0" [参数验证插件]


**文档**
1. https://www.lodashjs.com/docs/latest
2. https://www.cnblogs.com/pqjwyn/p/5824948.html
3. https://cnodejs.org/topic/59f0afd928137001719a821d

**更新状态**

版本 | 时间
---|---
1.0.0 | 2019-10-31

---
**库目录结构**

```
未压缩版： loader-api.js
压缩版：loader-api.min.js
```

---


**使用**
> 使用npm

```
$ npm install loaderApiLibrary --save
```

> 使用cdn

```
<script type="text/javascript" src="loader-api.min.js"></script>
```

> axios库

> 注意：axios库在插件中使用html-webpack-externals-plugin插件进行了分离所以需要在自己项目中的index.html中使用cdn的形式进行导入
```
<script type="text/javascript" src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
```

---

> 示例：

> 验证规则介绍：https://cnodejs.org/topic/59f0afd928137001719a821d

```
// 导入插件
import LoaderApiLibrary from 'loaderApiLibrary'

// 构建user接口描述模型
// 静态描述建议不要将动态参数设置在模型中，以免影响模型的表述
let user = [
    {
      name: 'getUserInfo',
      desc: '获取某个用户的信息',
      method: 'GET',
      path: 'root/login/{id}/getUserInfo',
      mockPath: 'mock/root/login/{id}/getUserInfo',
      mock: false, // 是否使用mock地址
      cache: false, // 不是用缓存
      removeInvalidChar: true,
      params: { type: '', token: 'test'}, // 拼接在URL后面的参数
      data: {name: '小明', love: '睡觉'}, // 这里是GET请求data参数主要是针对于POST、PUT
      restful: { id: 1 }, // 将自动替换{id}为1 root/login/1/getUserInfo
      validator: {
          type: [{ sqlXss: true, not: '', msg: '类型不能为空!'}],
          token: {not: '', msg: 'token不能为空!'}
      }, // params、data参数验证对象，这里也省略了业务代码中繁琐的验证操作
      restfulValidator: {
          id: {not: '', msg: 'id参数不能为空'}
      }, // restful参数验证对象，这里也省略了业务代码中繁琐的验证操作
      responseType: 'json',
      proxy: null // 如果接口需要代理可以在这里设置
    }
  ]
// 初始化
// 传入api模型对象集合，api构建全局参数，axios实例参数
const Loader = new loaderApiLibrary({'user': user},{
    console_request_enable: true,
    console_response_enable: false,
    request_error_callback: function({status, statusText}){
        //  请求出现异常并且被拦截器成功捕获到 例如：404
    }
},{
    timeout: 30000,
    transformResponse: function(data = {}){
        // 修改响应数据
        return data
    })
})
// 全局钩子函数
window.apiRequestStartHandler = function(){
	console.info('请求开始发送');
}
window.apiRequestEndHandler = function(){
	console.info('请求结束');
}
window.apiRequestInterceptErrorHandler = function(message){
	// 请求出现拦截器无法捕获的异常 例如：timeout请求超时
}
// 执行请求
// 函数入参可以覆盖接口描述中的参数
let bb = '100'
Loader.api['user/getUserInfo']({params: {token: 'test_1', id: 1001}, restful: {id: 11}, headers: {}, data: {}}, {
    request_error_callback: function({status, statusText}){
        //某个请求的特定异常提示
    },
    // 只会覆盖模型中的type验证规则
    validator: {
		type: {eq: bb, msg: 'type必须是100'}
	},
	restfulValidator: {
		id: {eq: 123, msg: '必须是12345'}
	},
	transformResponse: function(data = {}){
	    // 某个具体请求执行过滤数据，会覆盖全局过滤函数
	    return data
	})
}).then((response)=>{
    // 请求成功
}).catch((error)=>{
    // 请求失败
})

```
执行多个并发请求

```
Loader.allApi([Loader.api['user/get']({params: {token: 'czdg_app'}, data: {name: '123'}}), Loader.api['modules/get']()]).then((data = [])=>{
    // 请求都成功
    console.info('成功',data);
  }).catch((error)=>{
	console.info('失败',error);
  })
```


**类: Loader**
> 构造器 Constructor

```
new LoaderApiLibrary(userApiConfigModuleList, userApiConfigopt, userAxiosConfigopt)
```
> 构造函数接收3个参数，第一个参数为必填，第二和三可选

参数：

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
userApiConfigModuleList | Object | 必填 | {} | api接口模型配置对象集合
userApiConfig | Object | 可选 | {} | api接口模型配置参数
userAxiosConfig | Object | 可选 | {} | axios实例配置参数

示例
> userApiConfigModuleList

```
{'goods': [{'read':{'name':'',desc: ''}, 'get': {}}]}
```
> userApiConfig

```
{'mockBasePath': 'mock/test/goods/read', 'mock': true}
```
> userAxiosConfig
```
{'timeout': 15000, 'baseURL': 'test/goods/read'}
```

api接口模型配置参数

参数 | 类型 | 属性 | 默认值 | 描述
---|---|---|---|---
name | string | 必填 |  | 接口名称==不可中文==
method | string | 可选 | GET | 请求类型 GET、PUT、POST、DELETE、HEADER
desc | string | 可选 |  | 接口描述
baseURL | string | 可选 |  | 访问url目录(可以是相对 URL)
path | string | 必填 |  | 请求接口路径 root/user/getUserInfo
mockPath | string | 必填 |  | mock请求接口路径 mock/root/user/getUserInfo
mock | boolean | 可选 | false | 是否打开mock操作
cache | boolean | 可选 | false | 是否打开cache （false URL后有随机字符参数 trur没有）附录③
removeInvalidChar | boolean | 可选 | true | 是否执行参数特殊字符过滤
restful | object | 可选 |  | restful参数（==如果url类似：/root/user/{id}/get 则此参数需要设置id的值 {id: 2}==）
headers | object | 可选 |  | 请求首部字段参数
params | object | 可选 |  | 待发送 Key/value 参数，如果没有在这里定义某个参数接口执行时多传入参数将不能设置到请求中（==会接在URL地址后==）
data | object | 可选 |  | POST请求，待发送 Key/value 参数
validator | object | 可选 |  | params和data参数验证对象
restfulValidator | object | 可选 |  | restful参数验证对象
responseType | string | 可选 | 'json' | 服务器响应的数据类型
proxy | object | 可选 |  | 定义代理服务器的主机名称和端口

api接口模型配置参数 userApiConfig

参数 | 类型 | 默认值 | 描述
---|---|---|---
mockBasePath | string | | mock-url请求地址(可以是相对 URL), 应该外部传入
mock | boolean | false | mock全局控制开关(如果设置为true所有api的请求URL路径将变成mockBasePath)
gParams | Object | {} | URL全局自定义参数，每个请求最后都会带上这个不可变的参数(例如：URL?code=app)
cache | boolean | false | 缓存控制开关在URL路径后面添加一个时间戳参数 _=1571825001570 附录③
seq | string | / | api接口命名空间分隔符 (Loader.api['user/get'])
invalidChar | string | 附录① | 进行特殊字符过滤的规则
statusMessage | Object | 附录② | 前端response返回状态码提示短语
console_request_enable | boolean | false | 开启请求参数打印
console_response_enable | boolean | false | 开启响应参数打印
request_error_callback | function | null | 请求错误回调函数

axios实例配置参数 userAxiosConfig
> 参考：http://www.axios-js.com/zh-cn/docs/

参数 | 类型 | 默认值 | 描述
---|---|---|---
timeout | number | 15000 | 超时时间（毫秒）
baseURL | string |  | 访问url目录(可以是相对 URL), 应该外部传入
maxContentLength | number | 2000 | 定义允许的响应内容的最大尺寸（字节数）
status | number | 200 | 来自服务器响应的 HTTP 访问处理成功状态码
statusText | string | 'OK' | 来自服务器响应的 HTTP 访问处理成功状态信息短语
transformResponse | array | [] | 全局预处理过滤函数，可以在then之前进行过滤
headers | Object | {'Content-Type': 'application/json;charset=UTF-8'} | 请求首部字段
defaults | Object | {} | 配置的默认值
responseType | string | 'json' | 服务器响应的数据类型
proxy | Object | {} | 定义代理服务器的主机名称和端口

全局拦截钩子函数

名称 | 作用域 | 回参 | 描述
---|---|---|---
apiRequestStartHandler | window | 无 | 监听请求的发送
apiRequestEndHandler | window | 无 | 监听请求成功结束
apiRequestInterceptErrorHandler | window | 错误描述Error对象 | 监听请求异常-==无法捕获的异常例如：timeout请求超时==

程序运行错误号描述

错误号 | 描述
---|---
01 | 构造函数中传递的参数必须是普通Object对象
02 | api接口描述 name、path或者mockPath必须要设置



附录：
> ①
```
[`~!@#$^&*()=|{}\':;\',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“\'。，、？]
```
> ②

```
{
    400: '错误请求',
    404: '找不到请求地址',
    405: '方法不被允许',
    500: '内部错误',
    502: '错误网关',
    503: '无法获得服务'
  }
```
> ③

http网络请求获取资源时附加在URL后面的额外的query参数，作为浏览器或者服务器未正确配置时的“cache bust”手段很有用。
使用“cache bust”配置的一个示例：
`javascripts;urlArgs: "bust="+(new date()).getTime()`
在开发中这很有用，但请记得在部署到生产环境之前移除它。
