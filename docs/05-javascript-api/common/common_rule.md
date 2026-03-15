# 调用规则

# 调用规则

更新时间：2024/08/13 15:19:43

## 同步

同步方法调用后必须等到方法结果返回后才能继续后续的行为，返回值可以是任意类型。

## 示例
[code] 
    import context from '@blueos.app.context'
    
    export default {
      getInfo() {
        const info = context.getInfo()
        console.log(JSON.stringify(info))
      },
    }
[/code]

复制代码

## 异步

异步方法调用整个过程不会阻碍调用者的工作。业务执行完成后会调用开发者提供的回调函数。

#### 异步接口支持的回调函数

回调函数 | 参数名 | 类型 | 返回值 | 说明  
---|---|---|---|---  
success | data | any | 可选，返回值可以是任意类型，详见接口使用文档。 | 在执行成功时触发。  
fail | data,code | any,number | 错误信息内容，一般是字符串，也可能是其他类型，详见接口使用文档。 | 在执行失败时触发。 [code 是错误码](</api/common/error-code/>)  
complete | - | - | - | 在执行完成时触发。  
  
#### 说明
[code] 
    success、fail和complete四个回调函数是否支持参考具体接口描述。
    success、fail两个回调函数的触发是互斥的，即会且只会在一个回调函数中触发，触发任意一个都会再次调用complete回调。
[/code]

复制代码

## 示例
[code] 
    import deviceInfo from '@blueos.hardware.deviceInfo'
    
    export default {
      getInfo() {
        deviceInfo.getInfo({
          success: function (data) {
            console.log('Device information obtained successfully. Device brand:' + data.brand)
          },
          fail: function (data, code) {
            console.log(
              'Failed to obtain device information. Error code:' + code + '; Error information: ' + data
            )
          },
        })
      },
    }
[/code]

复制代码

## 订阅

订阅接口不会立即返回结果，开发者要在参数中设置相应的回调函数；该回调函数会在完成时或者事件变化时进行回调；可以执行多次。

#### 订阅接口支持以下回调函数

回调函数 | 参数名 | 类型 | 返回值 | 说明  
---|---|---|---|---  
callback | data | any | 返回值可以是任意类型，详见接口使用文档。 | 接口调用成功或事件变更时触发，可能会触发多次。  
fail | data,code | any,number | 错误信息内容，一般是字符串，也可能是其他类型，详见接口使用文档。 | 在执行失败时触发。一旦触发该回调函数，callback 不会再次被调用，接口调用结束。[code 是错误码](</api/common/error-code/>)  
  
#### 以监听罗盘数据为例
[code] 
    import sensor from '@blueos.hardware.sensor'
    
    export default {
      subscribeCompass() {
        sensor.subscribeCompass({
          callback: function (ret) {
            console.log(`handling callback, direction = ${ret.direction}`)
          },
          fail: function (data, code) {
            console.log(`handling fail, code = ${code}`)
          },
        })
      },
    }
[/code]

复制代码

上一篇

[概述](</api/common/overview/>)

下一篇

[通用错误码](</api/common/error-code/>)