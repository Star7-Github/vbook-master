# 卡片管理

# widgetManager  
  
更新时间：2025/10/09 21:26:28

widgetProvider 通过 widgetManager 来刷新 卡片 UI 页面中的 uiData 数据，widgetManager 也可以用于主应用刷新 uidata 的数据。

详细参考 [widgetProvider 开发](</reference/widget/widget-provider/>)

**接口声明**
[code] 
    { "name": "blueos.app.widgetManager" }
[/code]

复制代码

## updateUiData

更新卡片 ui 数据

**入参**

属性 | 类型 | 是否必填 | 描述  
---|---|---|---  
instanceId | number | string | 是 | widget 实例 id  
uiData | Record<string, unknown> | 否 | 传递的数据  
  
**返回值：** 无

**示例：**
[code] 
    import widgetManager from '@blueos.app.widgetManager'
    
    export default {
      onWidgetEvent(instanceId, event) {
        console.log(`instanceId=${instanceId}, event=${JSON.stringify(event)}`)
        widgetManager.updateUiData({
          instanceId: instanceId,
          uiData: { cityName: `Shenzhen ${event.title}` },
        })
      },
    }
[/code]

复制代码