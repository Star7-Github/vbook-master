# 减少初始化开销

# 减少初始化开销

更新时间：2025/04/28 19:30:44

应用初始化阶段的代码复杂度直接影响应用/页面实例的创建耗时，优化该阶段的执行效率能显著改善首屏渲染性能。

## 避免引入耗时自执行模块

**推荐级别：强烈**

模块中的自执行逻辑会在导入时立即执行，导致页面加载阻塞。应将初始化逻辑移至生命周期钩子中按需执行。

**反例**
[code] 
    // init.js 中的自执行逻辑会立即执行，延长加载时间
    import './init.js' // 包含立即执行的复杂初始化逻辑
    export default {}
[/code]

复制代码

**正例**
[code] 
    export default {
      onInit() {
        // 将初始化逻辑移至生命周期钩子中按需执行
        this.performInitialization()
      },
      performInitialization() {
        // 具体的初始化操作
      },
    }
[/code]

复制代码

## 优化 app.ux 数据管理

**推荐级别：建议**

过度加载的全局数据会延长应用启动时间，建议遵循以下原则：

  1. 仅将全局共享状态存储在 app.ux
  2. 工具类方法按需在各页面独立引入

**反例**
[code] 
    // app.ux
    import utils from './utils' // 引入可能包含复杂逻辑的工具库
    
    export default {
      utils, // 全局挂载非必要工具方法
      // ...其他全局配置
    }
[/code]

复制代码

## 长页面分段加载

**推荐级别：建议**

对复杂长页面实施分阶段加载策略：

  1. 首屏优先加载关键数据/视图
  2. 可视区域外内容延迟加载

**正例 1**
[code] 
    <template>
      <div>
        <div for="{{visibleItems}}">
          <text>{{$item}}</text>
        </div>
      </div>
    </template>
    <script>
      const fullDataset = [.../* 完整数据集 */]
      export default {
        data: {
          visibleItems: [],
        },
        onInit() {
          // 首屏加载前6条
         this.visibleItems = fullDataset.slice(0, 6)
        },
        onShow() {
          // onShow 后显示所有数据
          this.visibleItems = fullDataset
        },
      }
    </script>
[/code]

复制代码

**正例 2**
[code] 
    <template>
      <div>
        <!-- 首屏核心模块 -->
        <critical-module />
    
        <!-- 次要模块延迟加载 -->
        <secondary-module if="{{isSecondaryLoaded}}" />
      </div>
    </template>
    <script>
      export default {
        data: {
          isSecondaryLoaded: false,
        },
        onShow() {
          // 首屏渲染完成后加载次要模块
          this.isSecondaryLoaded = true
        },
      }
    </script>
[/code]

复制代码

上一篇

[减少代码体积](</reference/perf-guide/perf-treeshaking/>)

下一篇

[运行时性能优化](</reference/perf-guide/perf-runtime/>)