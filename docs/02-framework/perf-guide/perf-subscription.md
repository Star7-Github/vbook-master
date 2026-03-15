# 退出页面释放监听

# 退出页面释放监听

更新时间：2025/04/27 09:58:15

在蓝河应用开发中，正确处理页面生命周期末端的资源释放是保障应用性能的关键。以下规范针对页面销毁阶段（onDestroy）必须执行的三类资源清理操作。

## 定时器资源释放

**推荐级别：强烈**

所有通过 `setTimeout`/`setInterval` 创建的计时器，必须在页面销毁时通过 `clearTimeout`/`clearInterval` 进行匹配清除。

**反例**
[code] 
    export default {
      onInit() {
        // 未记录定时器引用
        setTimeout(() => {
          // 业务逻辑
        }, 1000)
        setInterval(() => {
          // 周期任务
        }, 1000)
      },
      onDestroy() {}, // 未执行清理
    }
[/code]

复制代码

**正例**
[code] 
    // 声明模块级变量存储计时器ID
    let timeoutId
    let intervalId
    
    export default {
      onInit() {
        timeoutId = setTimeout(() => {
          // 业务逻辑
        }, 1000)
    
        intervalId = setInterval(() => {
          // 周期任务
        }, 1000)
      },
    
      onDestroy() {
        // 精确清除计时器
        clearTimeout(timeoutId)
        clearInterval(intervalId)
      },
    }
[/code]

复制代码

## 事件监听器注销

**推荐级别：强烈**

页面中使用的监听类接口(如 feature、C2JS 等)，页面退出时必须清除监听。原因同上。

**反例**
[code] 
    import event from '@blueos.app.event.eventManager'
    
    export default {
      onInit() {
        // 未记录订阅ID
        event.subscribe({
          eventName: 'usual.event.SCREEN_AOD',
          callback: (res) => {
            // 事件处理
          },
        })
      },
      onDestroy() {}, // 监听器未注销
    }
[/code]

复制代码

**正例**
[code] 
    import event from '@blueos.app.event.eventManager'
    
    // 使用容器存储多订阅ID
    const eventSubscriptions = []
    
    export default {
      onInit() {
        const subscriptionId = event.subscribe({
          eventName: 'usual.event.SCREEN_AOD',
          callback: (res) => {
            // 事件处理
          },
        })
        eventSubscriptions.push(subscriptionId)
      },
    
      onDestroy() {
        // 批量注销所有事件监听
        eventSubscriptions.forEach((id) => event.unsubscribe({ id }))
        eventSubscriptions.length = 0 // 清空ID容器
      },
    }
[/code]

复制代码

上一篇

[避免高耗性能操作](</reference/perf-guide/perf-dangerous/>)

下一篇

[图片资源优化](</reference/perf-guide/perf-src/>)