# 减少代码体积

# 减少代码体积

更新时间：2025/04/27 09:58:15

本节非常重要，优劣不同的写法会有明显的代码体积差异，而代码体积越小，会获得更快的加载速度。

## js 封装要支持 Treeshaking

**推荐级别：强烈**

统一支持 Treeshaking 是非常重要的，因为它可以在打包编译时移除未使用的代码，减小输出的文件大小。

在进行 JavaScript 封装时，请牢记以下两点：

  * 在能使用函数实现的情况下，优先使用函数而非 class 或 Object。只有需要频繁创建实例的情况才需要考虑使用 class。

  * 慎重使用 export default 导出。如果你的模块有多个导出，可以考虑逐个导出而非使用 default 导出，这样可以更好地遵循 Treeshaking 的原则，因为 default 导出整个模块会被引入，而逐个导出只会引入需要的部分。

**反例 1**

对象捆绑导出
[code] 
    const a = 1
    const b = () => {}
    // 未使用的变量仍会被打包
    export default { a, b }
[/code]

复制代码

**反例 2**

class 方法捆绑
[code] 
    // 即使只使用单个方法也会引入整个类
    export default class Utils {
      a() {}
      b() {}
    }
[/code]

复制代码

**反例 3**

构造函数导出
[code] 
    // 方法被绑定在实例上无法分离
    export default function Utils() {
      this.a = () => {}
      this.b = () => {}
    }
[/code]

复制代码

**反例 4**

返回对象函数
[code] 
    // 方法仍会整体打包
    export default function Utils() {
      return {
        a() {},
        b() {},
      }
    }
[/code]

复制代码

**正例 1**

具名导出
[code] 
    const a = 1
    const b = () => {}
    export { a, b }
[/code]

复制代码

**正例 2**

独立导出
[code] 
    export const a = 1
    export const b = () => {}
[/code]

复制代码

## 按需引入

**推荐级别：强烈**

精准导入所需内容，避免引入冗余代码。

**反例 1**

多引入未使用
[code] 
    import { sayHi, sayBye } from './say.js'
    sayHi('Vance') // sayBye 未被使用但仍会打包
[/code]

复制代码

**反例 2**

全量引入
[code] 
    import * as say from './say.js'
    say.sayHi('Vance') // 引入整个模块
[/code]

复制代码

**正例**

精准引入
[code] 
    import { sayHi } from './say.js'
    sayHi('Vance') // 仅引入必要方法
[/code]

复制代码

## 避免 CommonJS 规范

**推荐级别：强烈**

虽然平台支持 require，但应始终使用 ESM 规范以支持 TreeShaking。

**反例**

使用 require
[code] 
    const userInfo = require('./userInfo.js') // 无法 TreeShaking
[/code]

复制代码

**正例**

ESM 导入
[code] 
    import userInfo from './userInfo.js'
    // 注意实际情况应避免全量导入，按需解构更佳
[/code]

复制代码

## 使用常量优化

**推荐级别：强烈**

常量更易维护且利于 TreeShaking 识别未使用变量。

**反例**

对象打包
[code] 
    const a = { a1: 'a1', a2: 'a2', a3: 'a3' } // 全部属性会被打包
    const b = ['a1', 'a2', 'a3'] // 数组元素无法分离
[/code]

复制代码

**正例**

独立常量
[code] 
    const a1 = 'a1' // 未使用时可被 TreeShaking
    const a2 = 'a2'
    const a3 = 'a3'
    const a = { a1, a2, a3 }
    const b = [a1, a2, a3]
[/code]

复制代码

## 谨慎引入第三方包

**推荐级别：建议**

优先评估包体积，必要时进行源码裁剪。

**反例**

全量引入
[code] 
    import _ from 'lodash' // 引入完整包（代码量大）
    export default {
      onInit() {
        _.join(['a', 'b', 'c'], '~') // 仅使用单个方法
      },
    }
[/code]

复制代码

**正例**

原生实现
[code] 
    export default {
      onInit() {
        ;['a', 'b', 'c'].join('~') // 使用原生方法
      },
    }
[/code]

复制代码

## 慎用 @import 样式

**推荐级别：强烈**

避免全局样式引入导致冗余 CSS 打包。

**反例**

全量引入
[code] 
    <template>
      <div class="yellow">黄色</div>
      <div class="black">黑色</div>
      <div class="green">绿色</div>
    </template>
    <style>
      @import './color.css'; /* 可能包含未使用的样式 */
    </style>
[/code]

复制代码

**正例**
[code] 
    <template>
      <div class="yellow">黄色</div>
      <div class="black">黑色</div>
      <div class="green">绿色</div>
    </template>
    <style>
      .yellow {
        background: yellow;
      }
      .black {
        background: black;
      }
      .green {
        background: green;
      }
    </style>
[/code]

复制代码

## 页面模板拆分策略

**推荐级别：鼓励**

采用模块化设计原则，建议将不同功能模块拆分为独立页面文件。避免在单个页面中使用条件渲染实现多状态视图，这会导致模板复杂度增长。

**反例**

模板臃肿
[code] 
    <!-- 单一页面承载多状态视图 -->
    <div>
      <div if="{{status === 1}}">
        <div>A功能视图组件</div>
        <!-- 50+ 嵌套节点 -->
      </div>
      <div if="{{status === 2}}">
        <div>B功能视图组件</div>
        <!-- 50+ 嵌套节点 -->
      </div>
    </div>
[/code]

复制代码

**正例**

模块化拆分
[code] 
    <!-- pageA.ux -->
    <template>
      <div class="module-container">
        <text>A功能核心组件</text>
        <!-- 精简DOM结构 -->
      </div>
    </template>
    
    <!-- pageB.ux -->
    <template>
      <div class="module-container">
        <text>B功能核心组件</text>
        <!-- 独立维护的视图 -->
      </div>
    </template>
[/code]

复制代码

## Manifest 配置精简原则

**推荐级别：建议**

严格遵循最小权限原则，manifest.json 中应仅声明实际使用的 API 及权限。冗余配置会增加应用审核风险并影响启动性能。

## 国际化资源优化

**推荐级别：建议**

当应用仅支持单一语言时，建议直接使用硬编码文本而非国际化方案。多语言场景下应及时清理未使用的 i18n 键值。

## 箭头函数优先原则

**推荐级别：建议**

箭头函数相比传统函数表达式具有更简洁的语法结构，在代码压缩阶段能获得更好的优化效果。

**反例**
[code] 
    function fetchData() {
      // 业务逻辑
    }
[/code]

复制代码

**正例**
[code] 
    const fetchData = () => {
      // 箭头函数实现
    }
[/code]

复制代码

## 对象属性命名优化

**推荐级别：建议**

对象属性名称应保持语义明确且简洁。由于 JavaScript 引擎无法对属性名进行 tree-shaking，建议采用短命名策略，特别是在高频使用的属性上。

**反例**
[code] 
    const userProfile = {
      userIdentification: 'UXP-001',
      profileModificationDate: '2024-03',
    }
[/code]

复制代码

**正例**
[code] 
    const user = {
      id: 'UXP-001',
      update: '2024-03', // 上下文明确的短命名
    }
[/code]

复制代码

## 环境区分策略

**推荐级别：建议**

避免将调试阶段的数据、代码带到生产环境上，应该用编译时参数而非运行时参数来区分 [编译环境变量](</reference/question-answer/build-env/>)

## CSS 代码复用规范

**推荐级别：鼓励**

采用原子化 CSS 设计模式，将高频样式声明抽象为可复用类。可以使用 Sass/Less 预处理工具管理样式资源。

**反例**
[code] 
    <style>
      .component-a {
        width: 80px;
        margin: 16px;
        border-radius: 8px;
      }
      .component-b {
        width: 80px;
        padding: 16px;
        border-radius: 8px;
      }
    </style>
[/code]

复制代码

**正例**
[code] 
    <style>
      /* 基础原子类 */
      .full-width {
        width: 80px;
      }
      .padding-md {
        padding: 16px;
      }
      .margin-md {
        margin: 16px;
      }
      .rounded {
        border-radius: 8px;
      }
    
      /* 组件专属样式 */
      .component-b {
        background: #f0f2f5;
      }
    </style>
[/code]

复制代码

上一篇

[响应式数据优化](</reference/perf-guide/perf-data/>)

下一篇

[减少初始化开销](</reference/perf-guide/perf-init/>)