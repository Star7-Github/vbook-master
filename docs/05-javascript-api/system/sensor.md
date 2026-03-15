# 传感器

# 传感器

更新时间：2024/11/21 17:51:08

## 接口声明
[code] 
    { "name": "blueos.hardware.sensor.sensor" }
[/code]

复制代码

## 导入模块
[code] 
    import sensor from '@blueos.hardware.sensor.sensor' 或 const sensor = require('@blueos.hardware.sensor.sensor')
[/code]

复制代码

## 接口定义

### sensor.subscribeAccelerometer(OBJECT)

订阅加速度传感器数据，如果多次调用，仅最后一次调用生效

**说明：**

  * 加速度是重力加速度和设备自身运动加速度的矢量叠加
  * 当设备静止或做匀速直线运动时，返回的加速度值表示重力加速度。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
interval | String | 否 | 监听加速度数据回调函数的执行频率，默认 normal  
callback | Function | 是 | 加速度感应数据变化后会回调此函数。  
fail | Function | 否 | 失败回调  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
x | Number | x 轴加速度  
y | Number | y 轴加速度  
z | Number | z 轴加速度  
  
interval 的合法值：

值 | 说明  
---|---  
game | 适用于更新游戏的回调频率，在 20ms/次 左右  
ui | 适用于更新 UI 的回调频率，在 60ms/次 左右  
normal | 普通的回调频率，在 200ms/次 左右  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持重力感应传感器  
  
#### 示例：
[code] 
    sensor.subscribeAccelerometer({
      callback: function (ret) {
        console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### sensor.unsubscribeAccelerometer()

取消监听重力感应数据

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeAccelerometer()
[/code]

复制代码

### sensor.subscribeCompass(OBJECT)

监听罗盘数据。如果多次调用，仅最后一次调用生效

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 罗盘数据变化后会回调此函数。  
fail | Function | 否 | 失败回调  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
direction | Number | 表示设备的 y 轴和地球磁场北极之间的角度，当面朝北，角度为 0；朝南角度为 π；朝东角度 π/2；朝西角度-π/2  
accuracy | Number | 精度  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持罗盘传感器  
值 | 说明  
---|---  
3 | 高精度  
2 | 中等精度  
1 | 低精度  
-1 | 不可信，传感器失去连接  
0 | 不可信，原因未知  
  
#### 示例：
[code] 
    sensor.subscribeCompass({
      callback: function (ret) {
        console.log(`handling callback, direction = ${ret.direction}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### sensor.unsubscribeCompass()

取消监听罗盘数据

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeCompass()
[/code]

复制代码

### sensor.subscribeStepCounter(OBJECT)

监听计步传感器数据。如果多次调用，仅最后一次调用生效。

#### 开发者需要在 manifest.json 里面配置权限：
[code] 
    {
      "permissions": [{ "name": "watch.permission.STEP_COUNTER" }]
    }
[/code]

复制代码

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 计步传感器数据变化后会回调此函数。  
fail | Function | 否 | 失败回调  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
steps | Number | 计步传感器当前累计记录的步数。每次手表重启，这个值就会从 0 开始重新计算。  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持计步传感器  
  
#### 示例：
[code] 
    sensor.subscribeStepCounter({
      callback: function (ret) {
        console.log(`handling callback, steps = ${ret.steps}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### sensor.unsubscribeStepCounter()

取消监听计步传感器数据。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeStepCounter()
[/code]

复制代码

### sensor.subscribeOnBodyState(OBJECT)

监听设备佩戴状态传感器数据。如果多次调用，仅最后一次调用生效。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 穿戴状态改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
value | boolean | 是否已佩戴。  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持佩戴状态传感器
[code] 
    sensor.subscribeOnBodyState({
      callback: function (ret) {
        console.log('get on-body state value:' + ret.value)
      },
      fail: function (data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
      },
    })
[/code]  
  
复制代码

### sensor.unsubscribeOnBodyState()

取消监听设备佩戴状态。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeOnBodyState()
[/code]

复制代码

### sensor.getOnBodyState(OBJECT)

获取设备佩戴状态。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
value | boolean | 是否已佩戴。  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持佩戴状态传感器
[code] 
    sensor.getOnBodyState({
      success: function (ret) {
        console.log('on body state: ' + ret.value)
      },
      fail: function (data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
      },
    })
[/code]  
  
复制代码

### sensor.subscribeGyroscope(OBJECT)

监听陀螺仪传感器数据。如果多次调用，仅最后一次调用生效。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 陀螺仪传感器数据改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
x | Number | x 轴坐标  
y | Number | y 轴坐标  
z | Number | z 轴坐标  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持陀螺仪传感器  
  
#### 示例：
[code] 
    sensor.subscribeGyroscope({
      callback: function (ret) {
        console.log(`handling callback, x = ${ret.x}, y = ${ret.y}, z = ${ret.z}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### sensor.unsubscribeGyroscope()

取消监听陀螺仪数据。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeGyroscope()
[/code]

复制代码

### sensor.subscribeBarometer(OBJECT)

监听气压传感器数据。如果多次调用，仅最后一次调用生效。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 气压传感器数据改变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
pressure | Number | 气压值，单位：帕斯卡。  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持气压传感器
[code] 
    sensor.subscribeBarometer({
      callback: function (ret) {
        console.log('get data value:' + ret.pressure)
      },
      fail: function (data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
      },
    })
[/code]  
  
复制代码

### sensor.unsubscribeBarometer()

取消监听气压传感器。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeBarometer()
[/code]

复制代码

### sensor.subscribeWristLift(OBJECT)

监听抬腕。如果多次调用，仅最后一次调用生效。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 抬腕后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
##### callback 返回值：

无

##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持
[code] 
    sensor.subscribeWristLift({
      callback: function () {
        console.log('wrist lift')
      },
      fail: function (data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
      },
    })
[/code]  
  
复制代码

### sensor.unsubscribeWristLift()

取消监听监听抬腕。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeWristLift()
[/code]

复制代码

### sensor.subscribeContinuousWristTurn(OBJECT)

监听连续转腕。如果多次调用，仅最后一次调用生效。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 连续转腕变后的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
  
##### callback 返回值：

无

##### fail 返回错误代码

错误码 | 说明  
---|---  
1000 | 当前设备不支持
[code] 
    sensor.subscribeContinuousWristTurn({
      callback: function () {
        console.log('continuous wrist turn')
      },
      fail: function (data, code) {
        console.log('Subscription failed. Code: ' + code + '; Data: ' + data)
      },
    })
[/code]  
  
复制代码

### sensor.unsubscribeContinuousWristTurn()

取消监听连续转腕。

#### 参数：

无

#### 示例：
[code] 
    sensor.unsubscribeContinuousWristTurn()
[/code]

复制代码

上一篇

[屏幕管理](</api/system/screen/>)

下一篇

[电量信息](</api/system/battery/>)