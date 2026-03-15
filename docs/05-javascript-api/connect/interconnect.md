# vivo智能终端设备侧

# vivo 智能终端设备侧

更新时间：2025/01/17 11:58:56

用于和搭配使用的手机 app 进行通信，收发手机 app 数据。

## 接口声明
[code] 
    { "name": "blueos.bluexlink.connectionManager" }
[/code]

复制代码

## 导入模块
[code] 
    import interconnect from '@blueos.bluexlink.connectionManager' 或 const interconnect = require('@blueos.bluexlink.connectionManager')
[/code]

复制代码

## interconnect.getPeerDeviceStatus(OBJECT)

获取 vivo 智能终端设备和手机的连接状态

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
success | 否 | Function | 成功回调  
fail | 否 | Function | 失败回调  
  
**success 返回值:**

属性 | 类型 | 说明  
---|---|---  
status | number | 0:未连接。1:已连接  
  
**示例：**
[code] 
    interconnect.getPeerDeviceStatus({
      success: function (data) {
        if (data.status == 1) {
          console.log('已连接')
        } else if (data.status == 0) {
          console.log('未连接')
        }
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

## interconnect.instance(OBJECT)

创建连接实例

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
package | 是 | string | 手机 APP 包名  
fingerprint | 否 | string | 手机 APP 的证书指纹信息。 [证书指纹的获取方法](</api/system/generatecertificatethumbprint/>)  
  
**返回值：**

Connect

**示例：**
[code] 
    const connnect = interconnect.instance({ package: 'com.xx.xx', fingerprint: 'xxxxx' })
[/code]

复制代码

## connect

### getReadyState(OBJECT)

获取 App 连接状态

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
success | 否 | Function | 成功回调  
fail | 否 | Function | 失败回调  
  
**success 返回值:**

属性 | 类型 | 说明  
---|---|---  
status | number | 1:连接成功。2:连接断开  
  
**fail 返回值:**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误信息  
code | number | 错误码，1006 表示 连接断开  
  
**示例：**
[code] 
    connect.getReadyState({
      success: function (data) {
        if (data.status == 1) {
          console.log('连接成功')
        } else if (data.status == 2) {
          console.log('连接失败')
        }
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### getPeerDeviceClientVersion(OBJECT)

查询 App 版本状态

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
success | 否 | Function | 成功回调  
fail | 否 | Function | 失败回调  
  
**success 返回值:**

属性 | 类型 | 说明  
---|---|---  
version | number | 手机应用版本号，有则正常返回，-1:未安装  
  
**fail 返回值:**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误信息  
code | number | 错误码，1006 表示 连接断开  
  
**示例：**
[code] 
    connect.getPeerDeviceClientVersion({
      success: function (data) {
        console.log(`handling success, version = ${data.version}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### send(OBJECT)

发送数据到手机 App 端

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
data | 否 | Object | 发送的数据  
success | 否 | Function | 成功回调  
fail | 否 | Function | 失败回调  
  
**fail 返回值:**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误信息  
code | number | 错误码，1006 表示 连接断开  
  
**示例：**
[code] 
    connect.send({
      data: { name: 'zangsan' },
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log('handling fail')
      },
    })
[/code]

复制代码

### sendFile(OBJECT)

发送文件到手机 App 端

**参数：**

属性 | 必填 | 类型 | 说明  
---|---|---|---  
uri | 否 | String | 目录的 uri  
success | 否 | Function | 成功回调  
fail | 否 | Function | 失败回调  
  
**fail 返回值:**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误信息  
code | number | 错误码，1006 表示 连接断开  
  
**示例：**
[code] 
    connect.sendFile({
      uri: 'internal://files/work/demo',
      success: function () {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log('handling fail')
      },
    })
[/code]

复制代码

### close(OBJECT)

关闭当前连接

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 接口调用成功的回调函数  
fail | Function | 否 | 接口调用失败的回调函数  
  
**示例：**
[code] 
    connect.close({
      success() {
        console.log(`close success`)
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### onOpen

用于指定连接打开时的回调

**示例：**
[code] 
    connect.onOpen = function () {
      console.log('connection opened')
    }
[/code]

复制代码

### onClose

用于指定连接关闭时回调

**示例：**
[code] 
    connect.onClose = function () {
      console.log('connection closed')
    }
[/code]

复制代码

### onMessage

用于指定接收手机 App 端数据的回调

**回调返回:**

属性 | 类型 | 说明  
---|---|---  
isFileType | boolean | 是否是文件  
fileUri | string | 文件存储路径  
fileName | string | 文件名称  
  
**示例：**
[code] 
    // 监听手机app的数据
    connect.onMessage = function (data) {
      if (data && data.isFileType) {
        console.log('filename is', data.fileName)
      } else {
        console.log('msg is', data.data)
      }
    }
[/code]

复制代码

### onError

用于指定连接失败后的回调

**回调返回:**

属性 | 类型 | 说明  
---|---|---  
data | string | 错误信息  
code | number | 错误码, 1000：未知错误， 1001：手机 APP 未安装， 1002：手机三方 APP 和健康未连接，1006：蓝牙未连接，1007：指纹校验失败  
  
**示例：**
[code] 
    connect.onError = function (error) {
      console.log(`connection error code =${error.code} data = ${error.data}`)
    }
[/code]

复制代码