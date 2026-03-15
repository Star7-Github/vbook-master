# 避免高耗性能操作

# 避免高耗性能操作

更新时间：2025/04/27 09:58:15

在蓝河应用开发中，需特别注意以下高消耗性能操作，合理规避可显著提升渲染效率与运行时性能。

## 避免使用后代选择器

**推荐级别：强烈**

后代选择器在传统 Web 开发中能有效规避样式污染，但蓝河应用的页面与组件采用**天然样式隔离机制** ，嵌套选择器会触发冗余的样式计算，导致渲染性能下降。

直接使用类名选择器，避免多级嵌套结构。

**反例**
[code] 
    .list .item {
      color: red;
    }
[/code]

复制代码

**正例**
[code] 
    .item {
      color: red;
    }
[/code]

复制代码

## 精简打印日志

**推荐级别：强烈**

高频次、冗余的日志输出会引发以下问题：

  1. 增加运行时内存开销
  2. 干扰开发者调试关键信息

**优化方案**

  * 仅记录核心调试信息
  * 避免全量序列化复杂对象

**反例**
[code] 
    /* 反例：全量序列化大对象产生性能损耗 */
    console.log(`sportInfo = ${JSON.stringify(sportInfo)}`)
[/code]

复制代码

**正例**
[code] 
    /* 正例：选择性输出关键字段 */
    console.log(`运动ID: ${sportInfo.id}, 类型: ${sportInfo.type}`)
[/code]

复制代码

## 避免后台渲染指令堆积

常驻后台的应用频繁更新 UI 会导致：

  1. 渲染指令队列堆积
  2. 内存占用持续增长
  3. 应用恢复前台时出现 UI 抖动

**优化方案**

  * 使用状态标志位控制渲染时机
  * 结合生命周期管理数据更新

[code] 
    // 临时变量暂存后台刷新数据
    let tempData
    export default {
      data: {
        bgData: [1, 2],
        showing: false,
      },
      onInit() {
        const evtId = event.subscribe({
          eventName: 'new_data',
          callback: (res) => {
            if (!this.showing) {
              tempData = res.data
            } else {
              this.bgData = res.data
            }
          },
        })
      },
      onShow() {
        this.showing = true
        if (tempData) {
          this.bgData = tempData
        }
      },
      onHide() {
        this.showing = false
      },
    }
[/code]

复制代码

上一篇

[运行时性能优化](</reference/perf-guide/perf-runtime/>)

下一篇

[退出页面释放监听](</reference/perf-guide/perf-subscription/>)