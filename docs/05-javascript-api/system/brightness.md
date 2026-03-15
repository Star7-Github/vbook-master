# 屏幕亮度

# 屏幕亮度

更新时间：2023/11/08 11:11:17

## 接口声明
[code] 
    { "name": "blueos.hardware.display.brightness" }
[/code]

复制代码

## 导入模块
[code] 
    import brightness from '@blueos.hardware.display.brightness' 或 const brightness = require('@blueos.hardware.display.brightness')
[/code]

复制代码

## 接口定义

### brightness.getValue(OBJECT)

获得当前屏幕亮度值

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数值 | 类型 | 说明  
---|---|---  
value | Integer | 屏幕亮度，取值范围 0-255  
  
#### 示例：
[code] 
    brightness.getValue({
      success: function (data) {
        console.log(`handling success, value = ${data.value}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.getValueSync()

同步获得当前屏幕亮度值

#### 参数

无

#### 返回值

参数值 | 类型 | 说明  
---|---|---  
value | Number | 屏幕亮度，取值范围 0-255  
  
#### 示例
[code] 
    const value = brightness.getValueSync()
[/code]

复制代码

### brightness.setValue(OBJECT)

设置当前屏幕亮度值

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
value | Integer | 是 | 屏幕亮度，取值范围 0-255  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### 示例：
[code] 
    brightness.setValue({
      value: 100,
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.getMode(OBJECT)

获得当前屏幕亮度模式

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数值 | 类型 | 说明  
---|---|---  
mode | Integer | 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度  
  
#### 示例：
[code] 
    brightness.getMode({
      success: function (data) {
        console.log(`handling success, mode = ${data.mode}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.setMode(OBJECT)

设置当前屏幕亮度模式

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
mode | Integer | 是 | 0 为手动调节屏幕亮度,1 为自动调节屏幕亮度  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### 示例：
[code] 
    brightness.setMode({
      mode: 1,
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.setKeepScreenOn(OBJECT)

设置是否保持常亮状态

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
keepScreenOn | Boolean | 是 | 是否保持屏幕常亮  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### 示例：
[code] 
    brightness.setKeepScreenOn({
      keepScreenOn: true,
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.wakeScreenOn(OBJECT)

点亮或熄灭屏幕

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
screenOn | Boolean | 是 | 是否点亮  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### 示例：
[code] 
    brightness.wakeScreenOn({
      screenOn: true,
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.subscribe(OBJECT)

监听当前屏幕亮度数据。如果多次调用，仅最后一次调用生效

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 监听前屏幕亮度数据回调函数的执行  
fail | Function | 否 | 失败回调  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
value | Number | 屏幕亮度，取值范围 0-255  
  
#### 示例：
[code] 
    brightness.subscribe({
      callback: function (data) {
        console.log(`handling success, data = ${data.value}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### brightness.unsubscribe()

取消监听屏幕亮度数据

#### 参数：

无

#### 示例：
[code] 
    brightness.unsubscribe()
[/code]

复制代码

上一篇

[电量信息](</api/system/battery/>)

下一篇

[设备信息](</api/system/device/>)