# 运行时性能优化

# 运行时性能优化

更新时间：2025/04/27 11:06:02

本节提供的关键优化手段可显著提升页面渲染与更新效率。

## 避免在 CSS 中使用 ID 选择器

**推荐级别：强烈**

如果只需要在 css 中给组件添加样式，建议使用 class 选择器，只有需要使用 js 操作组件时，才会给组件注册 ID。

**反例 1**
[code] 
    <!-- 错误：在CSS中通过ID定义样式 -->
    <template>
      <div id="red"></div>
    </template>
    <style>
      #red {
        color: red;
      } /* 存在选择器性能损耗 */
    </style>
[/code]

复制代码

**正例 1**
[code] 
    <!-- 正确：使用class类选择器 -->
    <template>
      <div class="red"></div>
    </template>
    <style>
      .red {
        color: red;
      } /* 高效样式定义方式 */
    </style>
[/code]

复制代码

**特殊场景说明**
[code] 
    <!-- 当元素需被JS操作时保留id -->
    <template>
      <!-- ID用于JS交互 -->
      <div id="root"></div>
    </template>
    <script>
      export default {
        onInit() {
          this.$element('root').animate() // 通过ID获取元素
        },
      }
    </script>
[/code]

复制代码

## 避免循环指令与条件指令叠加使用

**推荐级别：建议**

若需在循环渲染时进行条件过滤，建议在 JavaScript 中预处理数据，而非在模板层混合`for`与`if`指令。此优化可减少模板解析复杂度，避免重复渲染计算。

**反例**
[code] 
    <!-- 低效：模板中混合循环与条件判断 -->
    <div for="{{foodList}}" if="{{$item.vegetarian}}">
      <text>{{$item.name}}</text>
      <text>{{$item.category}}</text>
    </div>
[/code]

复制代码

**正例**
[code] 
    <!-- 高效：数据层预过滤 -->
    <!-- 直接渲染已过滤数据 -->
    <div for="{{vegetarianFoods}}">
      <text>{{$item.name}}</text>
      <text>{{$item.category}}</text>
    </div>
[/code]

复制代码
[code] 
    export default {
      data: { vegetarianFoods: [] },
      onInit() {
        this.vegetarianFoods = foodList.filter((food) => food.vegetarian)
      },
    }
[/code]

复制代码

## 合理选择条件指令

**推荐级别：建议**

`if`与`show`指令的本质差异在于 DOM 树操作机制：

  * `if`指令：触发组件级 DOM 树动态构建/销毁，适合低频次状态变更场景
  * `show`指令：通过 CSS display 属性控制可视性，DOM 结构保持稳定，适用于高频次显隐切换场景

最佳实践原则：

  * 首屏不可见但需快速激活 → `if`指令（降低初始化开销）
  * 高频交互元素（如 Tab 切换） → `show`指令（减少 DOM 操作损耗）

**反例 1**
[code] 
    <!-- show指令导致隐藏元素参与首屏渲染，破坏分段加载设计 -->
    <template>
      <div>
        <div>首屏核心模块</div>
        <div show="{{display}}">延迟加载模块</div>
      </div>
    </template>
    <script>
      export default {
        data: { display: false },
        onShow() {
          this.display = true // 触发CSS样式变更而非DOM操作
        },
      }
    </script>
[/code]

复制代码

**正例 1**
[code] 
    <template>
      <div>
        <div>首屏核心模块</div>
        <div if="{{display}}">动态加载模块</div>
      </div>
    </template>
    <script>
      export default {
        data: { display: false },
        onShow() {
          this.display = true // 触发DOM树动态构建
        },
      }
    </script>
[/code]

复制代码

**反例 2**
[code] 
    <!-- if指令导致高频DOM重建，引发布局抖动 -->
    <template>
      <div>
        <text @click="changeView('A')">视图A</text>
        <text @click="changeView('B')">视图B</text>
        <div if="{{viewState == 'A'}">视图内容A</div>
        <div elif="{{viewState == 'B'}">视图内容B</div>
      </div>
    </template>
[/code]

复制代码

**正例 2**
[code] 
    <template>
      <div>
        <text @click="changeView('A')">视图A</text>
        <text @click="changeView('B')">视图B</text>
        <div show="{{viewState == 'A'}">视图内容A</div>
        <div show="{{viewState == 'B'}">视图内容B</div>
      </div>
    </template>
[/code]

复制代码

## 组件层级精简

**推荐级别：建议**

在页面布局中，尽量减少组件的嵌套，如 `list-item` 本身可以作为容器，不需在其内部要额外的 div 嵌套。

**反例**

冗余嵌套结构
[code] 
    <template>
      <list>
        <list-item>
          <!-- 冗余包装容器 -->
          <div>
            <text>数据项标题</text>
            <image src="item.png"></image>
          </div>
        </list-item>
      </list>
    </template>
[/code]

复制代码

**正例**

扁平化结构
[code] 
    <template>
      <list>
        <list-item>
          <text>数据项标题</text>
          <image src="item.png"></image>
        </list-item>
      </list>
    </template>
[/code]

复制代码

## 组件抽象平衡法则

**推荐级别：鼓励**

组件化需遵循以下原则：

  1. 单一页面自定义组件数 ≤ 3
  2. 简单元素组合（≤3 个基础组件）不建议抽象

**反例** 1

过度抽象
[code] 
    <!-- 简单统计模块被过度拆分为独立组件 -->
    <import src="./components/heartRateBlock.ux" name="heartRate"></import>
    <import src="./components/calorieBlock.ux" name="calorie"></import>
[/code]

复制代码

**反例** 2

抽象组件滥用
[code] 
    <!-- 独立心率数字展示无需组件化 -->
    <import src="./components/heartRate.ux"></import>
    <template>
      <heartRate></heartRate>
    </template>
[/code]

复制代码

## 页面职责单一化原则

**推荐级别：鼓励**

工程化实践要求：

  1. 功能模块隔离：独立业务状态使用独立页面承载
  2. 路由参数规范：仅传递必要标识参数，避免状态注入
  3. 页面体积控制：单文件源码 ≤ 1000 行（编译前）

**反例**
[code] 
    <template>
      <!-- 多态视图混合实例 -->
      <div if="{{status === 1}}">
        <div>视图模块A</div>
        <!-- 50+ 相关节点 -->
      </div>
      <div if="{{status === 2}}">
        <div>视图模块B</div>
        <!-- 30+ 相关节点 -->
      </div>
    </template>
    
    <script>
      export default {
        data: {
          status: 1, // 状态维护成本随功能增加而上升
        },
      }
    </script>
[/code]

复制代码

**正例**

采用路由级组件拆分：
[code] 
    <!-- modules/module-a.ux -->
    <template>
      <div class="optimized-view">
        <div>独立视图模块A</div>
        <!-- 功能隔离的节点树 -->
      </div>
    </template>
    
    <!-- modules/module-b.ux -->
    <template>
      <div class="optimized-view">
        <div>独立视图模块B</div>
        <!-- 精简的独立节点树 -->
      </div>
    </template>
[/code]

复制代码

## 指定列表渲染标识

**推荐级别：鼓励**

在动态列表场景中，通过`tid`属性指定唯一性标识，确保 Diff 算法准确执行节点复用。

**实施要点**

  1. 使用业务主键而非数组索引
  2. 确保`tid`值的全局唯一性

**正例**
[code] 
    <template>
      <!-- 使用唯一业务标识 -->
      <text for="{{athleteList}}" tid="athleteId" class="sport-item">
        {{$item.rank}} {{$item.name}}
      </text>
    </template>
    
    <script>
      export default {
        data: {
          athleteList: [
            { athleteId: 1001, rank: '金牌', name: '张三' },
            { athleteId: 1002, rank: '银牌', name: '李四' },
          ],
        },
      }
    </script>
[/code]

复制代码

上一篇

[减少初始化开销](</reference/perf-guide/perf-init/>)

下一篇

[避免高耗性能操作](</reference/perf-guide/perf-dangerous/>)