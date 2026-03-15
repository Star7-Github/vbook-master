# 电量信息

# 电量信息

更新时间：2024/08/13 15:19:43

## 接口声明
[code] 
    { "name": "blueos.hardware.battery" }
[/code]

复制代码

## 导入模块
[code] 
    import battery from '@blueos.hardware.battery' 或 const battery = require('@blueos.hardware.battery')
[/code]

复制代码

## 接口定义

### battery.getStatus(OBJECT)

获取当前设备的电量信息。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数值 | 类型 | 说明  
---|---|---  
charging | Boolean | 是否正在充电  
level | Number | 当前电量，0.0 - 1.0 之间  
  
#### 示例：
[code] 
    battery.getStatus({
      success: function (data) {
        console.log(`handling success: ${data.level}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### battery.getStatusSync()

同步获取当前设备的电量信息。

#### 参数

无

#### 返回值

参数值 | 类型 | 说明  
---|---|---  
batteryStatus | Object | 当前电量信息  
  
#### batteryStatus 参数描述

参数值 | 类型 | 说明  
---|---|---  
charging | Boolean | 是否正在充电  
level | Number | 当前电量，0.0 - 1.0 之间  
  
#### 示例
[code] 
    const batteryStatus = battery.getStatusSync()
[/code]

复制代码

上一篇

[传感器](</api/system/sensor/>)

下一篇

[屏幕亮度](</api/system/brightness/>)