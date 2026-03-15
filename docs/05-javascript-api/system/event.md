# 公共事件

# 公共事件

更新时间：2023/12/21 13:49:50

公共事件提供了多应用间数据传递和事件交互的能力。

## 接口声明
[code] 
    { "name": "blueos.app.event.eventManager" }
[/code]

复制代码

## 导入模块
[code] 
    import event from '@blueos.app.event.eventManager' 或 const event = require('@blueos.app.event.eventManager')
[/code]

复制代码

## 接口定义

### event.publish(OBJECT)

发布公共事件

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
eventName | String | 是 | 事件名称, 公共事件保留名称被系统占用，请勿使用  
options | Object | 否 | 事件参数  
  
##### options 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
params | Object | 否 | 事件参数  
permissions | Array<String> | 否 | 订阅者的权限, 拥有权限的包才能收到发送的事件  
  
#### 示例：
[code] 
    event.publish({
      eventName: 'myEventName',
      options: {
        params: { age: 10, name: 'peter' },
        permissions: ['com.example.demo'],
      },
    })
[/code]

复制代码

### event.subscribe(OBJECT)

订阅公共事件

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
eventName | String | 是 | 事件名称  
callback | Function | 是 | 事件回调  
  
##### callback 返回值：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
params | Object | 否 | 事件参数  
package | String | 否 | 事件推送者包名  
  
#### 返回值：

类型 | 必填 | 说明  
---|---|---  
Number | 是 | 事件 id  
  
#### 示例：
[code] 
    const evtId = event.subscribe({
      eventName: 'myEventName',
      callback: function (res) {
        if (res.package === 'com.example.demo') {
          console.log(res.params)
        }
      },
    })
    console.log(evtId)
[/code]

复制代码

### event.unsubscribe(OBJECT)

取消订阅公共事件

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
id | Number | 是 | 订阅 id  
  
#### 示例：
[code] 
    event.unsubscribe({ id: 1 })
[/code]

复制代码

### 系统支持的公共事件

系统公共事件名称 | 订阅者所需权限 | 说明  
---|---|---  
usual.event.SHUTDOWN | 无 | 即将关机  
usual.event.BATTERY_CHANGED | 无 | 电量改变，参数：level:0.0 - 1.0 之间  
usual.event.BATTERY_LOW | 无 | 低电事件  
usual.event.BATTERY_OKAY | 无 | 充满电事件  
usual.event.SCREEN_OFF | 无 | 灭屏事件  
usual.event.SCREEN_AOD | 无 | AOD 事件  
usual.event.SCREEN_ON | 无 | 亮屏事件  
usual.event.PACKAGE_ADDED | 无 | 新安装应用，参数：package:com.xxx.xxx  
usual.event.PACKAGE_REPLACED | 无 | 应用安装更新，参数：package:com.xxx.xxx  
usual.event.PACKAGE_REMOVED | 无 | 应用卸载，参数：package:com.xxx.xxx  
usual.event.DISCHARGING | 无 | 停止充电  
usual.event.CHARGING | 无 | 开始充电  
usual.event.OTA_TRANSFER | 无 | ota 开始传输  
usual.event.OTA_INSTALL | 无 | ota 开始安装