# javascript代码

# javascript 代码

更新时间：2025/05/20 14:21:12

用来定义页面数据和实现生命周期接口

## 语法

支持 ES6 语法

### 模块声明

蓝河应用中支持`ES6`的`module`标准，使用`import`引入 js 依赖，同时支持 CommonJs 规范，使用`require`引入 js 依赖（具体参看功能接口部分文档说明）
[code] 
    // 首先在 `manifest.json` 中配置 `fetch` 接口
    
    // require引入
    const fetch = require('@blueos.communication.network.fetch')
    
    // import引入
    import fetch from '@blueos.communication.network.fetch'
[/code]

复制代码

### 代码引用

JS 代码引用推荐使用 import 来导入, 例如：
[code] 
    import utils from '../Common/utils.js'
[/code]

复制代码

**注意** ： 蓝河应用环境不是 node 环境，不要引用 node 原生模块，如 `import fs from 'fs'`

## 对象

蓝河应用的组件对象提供了一些属性和方法，用于控制组件的渲染、数据处理、组件逻辑等方面

### 页面级组件对象

属性 | 类型 | 描述  
---|---|---  
data | Object | Function | 页面级组件的数据模型，能够转换为 JSON 对象；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字  
如果是函数，返回结果必须是对象，在组件初始化时会执行函数获取结果作为 data 的值  
使用 data 方式声明的属性会被外部数据覆盖，因此存在一定安全风险。  
  
#### 示例
[code] 
    <template>
      <div class="wrapper">
        <text>{{title}]</text>
      </div>
    </template>
    
    <script>
    export default {
      data: {
        title: 'Hello Word'
      },
    }
    </script>
[/code]

复制代码

### 自定义组件对象

属性 | 类型 | 描述  
---|---|---  
data | Object | Function | 自定义组件的数据模型，能够转换为 JSON 对象；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字  
如果是函数，返回结果必须是对象，在组件初始化时会执行函数获取结果作为 data 的值  
props | Array | Object | 定义组件外部可传入的所有属性；属性名不能以$或_开头, 不要使用 for, if, show, tid 等保留字  
在模板代码中，请使用短横线分隔命名代替驼峰命名。如，属性定义 props: ['propA']，可通过`<tag prop-a='xx'>`方式传递到组件内部  
  
#### 示例
[code] 
    <template>
      <div class="wrapper">
        <text>{{title}]</text>
        <text>{{name}]</text>
      </div>
    </template>
    
    <script>
    export default {
      data: {
        title: 'child component'
      },
      props: ['name']
    }
    </script>
[/code]

复制代码

想了解更多信息可以参考[自定义组件](</reference/app-service/parent-child-component-communication/>)

### 公共对象

属性 | 类型 | 描述  
---|---|---  
$app | Object | 应用对象  
$page | Object | 页面对象  
$valid | Boolean | 页面对象是否有效  
$device | { deviceType: string } | 获取当前设备类型。`watch-square`：方形手表，`watch-round`：圆形手表  
  
### 应用对象

可通过`$app`访问

属性 | 类型 | 描述  
---|---|---  
$def | Object | 使用`this.$app.$def`获取在`app.ux`中暴露的对象  
  
## 方法

### 公共方法

属性 | 类型 | 参数 | 描述  
---|---|---|---  
$element | Function | id: String 组件 id | 获取指定 id 的组件调用来对应的组件方法  
$set | Function | key: String 属性名称   
value: Any | 添加数据属性，用法：`this.$set('key',value)`  
  
### 事件方法

属性 | 类型 | 参数 | 描述  
---|---|---|---  
$watch | Function | data: String 属性名, 支持'a.b.c'格式，不支持数组索引   
handler: String 事件句柄函数名, 函数的第一个参数为新的属性值，第二个参数为旧的属性值 | 动态添加属性/事件绑定，属性必须在 data 中定义，handler 函数必须在`<script>`定义；当属性值发生变化时事件才被触发用法：`this.$watch('a','handler')`  
  
### 应用方法

可通过`$app`访问

属性 | 类型 | 参数 | 描述  
---|---|---|---  
exit | Function | 无 | 退出蓝河应用，结束应用生命周期。  
调用方法：`this.$app.exit()`  
  
该 feature 依赖 `blueos.app.app`, 请确保在 `manifest.json` 中引入

### 页面方法

可通过`$page`访问

属性 | 类型 | 参数 | 描述  
---|---|---|---  
setStopGestureQuit | Function | Number | 是否屏蔽手势返回，1 - 屏蔽。0 - 不屏蔽。  
调用方法：`this.$page.setStopGestureQuit(1)`  
  
该 feature 依赖 `blueos.app.router`, 请确保在 `manifest.json` 中引入

上一篇

[style样式](</reference/configuration/style-sheet/>)

下一篇

[页面布局](</reference/app-service/page-style-and-layout/>)