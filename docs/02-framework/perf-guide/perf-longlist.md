# 长列表性能优化

# 长列表性能优化

更新时间：2025/10/09 11:25:10

本文阐述了长列表场景下的性能优化方案，在开发过程中遇到长列表性能问题时，可参考下面优化方案。

## 分离固定标题与列表容器

当`<list>`组件滚动时，内部元素复杂度直接影响滚动性能。建议将固定标题等静态元素移出列表容器，采用绝对定位等方式处理。

**推荐级别：强烈**

**反例**

标题内嵌于列表容器，影响滚动性能：
[code] 
    <template>
      <list title="true">
        <list-item type="title">
          <vw-title value="蔬菜列表" is-fixed="true"></vw-title>
        </list-item>
        <!-- 列表内容 -->
      </list>
    </template>
[/code]

复制代码

**正例**

通过外层容器实现布局分离：
[code] 
    <template>
      <div class="list-container">
        <vw-title value="蔬菜列表" is-fixed="true"></vw-title>
        <list>
          <!-- 列表内容 -->
        </list>
      </div>
    </template>
[/code]

复制代码

## 避免模板内表达式

模板中的复杂表达式会频繁触发 JS 引擎执行，建议通过数据预处理替代模板运算。

**推荐级别：强烈**

**反例**

模板中使用条件表达式：
[code] 
    <div for="{{foodList}}">
      <text>{{$item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}}</text>
    </div>
[/code]

复制代码

**正例**

预处理数据格式：
[code] 
    // Script部分
    data: {
      foodList: foodList.map((item) => ({
        ...item,
        vegetarianStatus: item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian',
      }))
    }
[/code]

复制代码

## 规避列表循环中的自定义组件

**推荐级别：强烈**

列表项内使用自定义组件会创建大量 vm 实例，建议优先使用原生组件。

## 保持列表数据独立性

**推荐级别：强烈**

确保列表项仅依赖自身数据，避免引入外部响应式变量。

**反例**

依赖外部变量：
[code] 
    <div for="{{list}}">
      <text class="{{$item.num > count ? 'red' : 'blue'}}">{{$item.num}}</text>
    </div>
[/code]

复制代码

**正例**

预处理样式状态：
[code] 
    // 预处理时添加状态字段
    list.map((item) => ({
      ...item,
      className: item.num > threshold ? 'red' : 'blue',
    }))
[/code]

复制代码

## 分段懒加载实现

**推荐级别：强烈**

结合滚动监听实现动态加载，分页大小控制在一屏可见就可以。

**正例**
[code] 
    let currentPage = 0;
    
    async loadMore() {
      const newData = await fetchPageData(++currentPage);
      this.list = this.list.push(...newData);
    }
[/code]

复制代码

## 关注 onInit 的执行时间

**推荐级别：建议**

使用性能分析工具监控关键生命周期。

上一篇

[图片资源优化](</reference/perf-guide/perf-src/>)

下一篇

[帧率优化指引](</reference/perf-guide/perf-frame-rate/>)