# 地理位置

# 地理位置

更新时间：2024/08/13 15:19:43

## 接口声明
[code] 
    { "name": "blueos.hardware.location.location" }
[/code]

复制代码

## 导入模块
[code] 
    import geolocation from '@blueos.hardware.location.location' 或 const geolocation = require('@blueos.hardware.location.location')
[/code]

复制代码

## 接口定义

### geolocation.getLocation(OBJECT)

获取地理位置

#### 权限要求

精确设备定位

#### 开发者需要在 manifest.json 里面配置权限：
[code] 
    {
      "permissions": [{ "name": "watch.permission.LOCATION" }]
    }
[/code]

复制代码

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
timeout | Number | 否 | 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调  
coordType | String | 否 | 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84  
success | Function | 是 | 成功回调  
fail | Function | 否 | 失败回调，原因可能是用户拒绝  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
longitude | Number | 经度  
latitude | Number | 纬度  
accuracy | Number | 精确度  
time | Number | 时间  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
400 | 拒绝授予权限  
402 | 权限错误（未声明该权限）  
  
#### 示例：
[code] 
    geolocation.getLocation({
      success: function (data) {
        console.log(`handling success: longitude = ${data.longitude}, latitude = ${data.latitude}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`)
      },
    })
[/code]

复制代码

### geolocation.subscribe(OBJECT)

监听地理位置。如果多次调用，仅最后一次调用生效

#### 权限要求

精确设备定位

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
reserved | Boolean | 否 | 是否持久化订阅，默认为 false。机制：设置为 true，页面跳转，不会自动取消订阅，需手动取消订阅  
coordType | String | 否 | 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为 wgs84  
callback | Function | 是 | 每次位置信息发生变化，都会被回调  
fail | Function | 否 | 失败回调，原因可能是用户拒绝  
  
##### callback 返回值：

参数名 | 类型 | 说明  
---|---|---  
longitude | Number | 经度  
latitude | Number | 纬度  
accuracy | Number | 精确度  
time | Number | 时间  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
400 | 拒绝授予权限  
402 | 权限错误（未声明该权限）  
  
#### 示例：
[code] 
    geolocation.subscribe({
      callback: function (data) {
        console.log(`handling success: longitude = ${data.longitude}, latitude = ${data.latitude}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`)
      },
    })
[/code]

复制代码

### geolocation.unsubscribe()

取消监听地理位置

#### 参数：

无

#### 示例：
[code] 
    geolocation.unsubscribe()
[/code]

复制代码

### geolocation.getSupportedCoordTypes()

获取支持的坐标系类型

#### 参数：

无

#### 返回值：

字符串数组。当前支持的坐标系类型，如['wgs84']

#### 示例：
[code] 
    const types = geolocation.getSupportedCoordTypes()
[/code]

复制代码

上一篇

[概述](</api/system/hardware/>)

下一篇

[振动](</api/system/vibrator/>)