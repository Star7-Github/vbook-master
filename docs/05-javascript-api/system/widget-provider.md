# widgetProvider

# widgetProvider

更新时间：2025/10/09 21:26:28

widgetProvider 是轻卡的核心组成部分，它负责执行轻卡页面的逻辑，并与轻卡页面进行数据传递。

详细参考 [widgetProvider 开发](</reference/widget/widget-provider/>)

## onWidgetCreate

当卡片在入口被创建时触发

**参数：**

参数名 | 类型 | 说明  
---|---|---  
id | string | 卡片实例 id  
widgetInfo | WidgetInfo | 卡片信息  
  
**示例：**
[code] 
    export default {
      onWidgetCreate(id, widgetInfo) {
        console.log(`卡片被创建`)
      },
    }
[/code]

复制代码

## onWidgetUpdate

定时或定点条件满足时，卡片请求提供方刷新卡片

**参数：**

参数名 | 类型 | 说明  
---|---|---  
id | string | 卡片实例 id  
widgetInfo | WidgetInfo | 卡片信息  
  
**示例：**
[code] 
    export default {
      onWidgetUpdate(id, widgetInfo) {
        console.log(`卡片需要更新`)
      },
    }
[/code]

复制代码

## onWidgetEvent

当卡片页面触发 Action 的 message 事件时被调用

**参数：**

参数名 | 类型 | 说明  
---|---|---  
id | string | 卡片实例 id  
event | WidgetEventInfo | 事件信息  
  
**示例：**
[code] 
    export default {
      onWidgetEvent(id, event) {
        console.log(`收到 message 事件`)
      },
    }
[/code]

复制代码

## onConfigurationChanged

监听系统语言改变

参数名 | 类型 | 描述  
---|---|---  
event | Object | 应用配置发生变化的事件  
  
event 参数：

参数名 | 类型 | 描述  
---|---|---  
type | String | 应用配置发生变化的原因类型，支持的 type 值如下所示  
  
event 中`type` 现在支持的参数值如下：

参数值 | 描述  
---|---  
locale | 应用语言、地区变化而发生改变  
  
**示例：**
[code] 
    export default {
      onConfigurationChanged(id, evt) {
        if (event && event.type && event.type === 'locale') {
          console.log('locale or language changed!')
        }
      },
    }
[/code]

复制代码

## onWidgetDestroy

销毁卡片时触发，提供方可以做对应的释放

**参数：**

参数名 | 类型 | 说明  
---|---|---  
id | string | 卡片实例 id  
  
**示例：**
[code] 
    export default {
      onWidgetDestroy(id) {
        console.log(`卡片销毁`)
      },
    }
[/code]

复制代码

## 参数类型说明

### WidgetInfo

widgetProvider 生命周期入参，描述卡片信息。

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
instanceId | string | 是 | 卡片运行时实例的 id。  
package | string | 是 | 卡片包名，可用于校验卡片。  
path | string | 是 | 卡片路径，可用于校验卡片。  
sha256 | string | 否 | 卡片数字签名，可用于校验卡片是否合法。  
host | string | 是 | 卡片入口的包名，用于提供方做不同策略。  
scene | string | 否 | 卡片展示方场景标识  
version | number | 否 | 卡片版本  
extra | Record<string, any> | 否 | 如果卡片入口加载卡片 Uri 有携带额外数据，此时会携带额外的数据到提供方。  
  
### WidgetEventInfo

widgetProvider 生命周期入参，描述卡片页面的 Action 事件信息。

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
instanceId | string | 是 | 卡片运行时实例的 id。  
package | string | 是 | 卡片包名，可用于校验卡片。  
path | string | 是 | 卡片路径，可用于校验卡片。  
sha256 | string | 否 | 卡片数字签名，可用于校验卡片是否合法。  
host | string | 是 | 卡片入口的包名，用于提供方做不同策略。  
scene | string | 否 | 卡片展示方场景标识  
version | number | 否 | 卡片版本。  
extra | Record<string, any> | 否 | 如果卡片入口加载卡片 Uri 有携带额外数据，此时会携带额外的数据到提供方。  
event | Event | 是 | event 事件对象。  
  
### Event

描述 Action 事件参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
action | string | 是 | action 名，对应 data 中 actions 里的某个响应动作  
params | Record<string, any> | 否 | 开发者在事件响应动作设置的参数