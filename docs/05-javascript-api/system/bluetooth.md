# 蓝牙

# 蓝牙

更新时间：2025/10/09 11:25:10

## 一、蓝牙整体介绍

### 传统蓝牙

传统蓝牙本机管理：打开和关闭蓝牙、设置和获取本机蓝牙名称、扫描和取消扫描周边蓝牙设备、获取本机蓝牙 profile 对其他设备的连接状态、获取本机蓝牙已配对的蓝牙设备列表。

传统蓝牙远端设备操作：查询远端蓝牙设备名称和 MAC 地址、设备类型和配对状态，以及向远端蓝牙设备发起配对。

### 低功率蓝牙 BLE

BLE 设备交互时会分为不同的角色：

中心设备和外围设备：中心设备负责扫描外围设备、发现广播。外围设备负责发送广播。

GATT（Generic Attribute Profile，通用属性配置文件）服务端与 GATT 客户端：两台设备建立连接后，其中一台作为 GATT 服务端，另一台作为 GATT 客户端。

## 二、低功耗蓝牙 BLE

### 概述

BLE 扫描和广播：根据指定状态获取外围设备、启动或停止 BLE 扫描、广播。

BLE 中心设备与外围设备进行数据交互：BLE 外围设备和中心设备建立 GATT 连接后，中心设备可以查询外围设备支持的各种数据，向外围设备发起数据请求，并向其写入特征值数据。

BLE 外围设备数据管理：BLE 外围设备作为服务端，可以接收来自中心设备（客户端）的 GATT 连接请求，应答来自中心设备的特征值内容读取和写入请求，并向中心设备提供数据。同时外围设备还可以主动向中心设备发送数据。

### ① 应用场景

通过 BLE 扫描和广播提供的开放能力，可以根据指定状态获取外围设备、启动或停止 BLE 扫描、广播。

### ② 模块导入

接口声明
[code] 
    { "name": "blueos.bluetooth.ble" }
[/code]

复制代码

接口导入
[code] 
    import bluetooth from '@blueos.bluetooth.ble'
[/code]

复制代码

权限要求
[code] 
    {
      "permissions": [{ "name": "blueos.permission.BLUETOOTH" }]
    }
[/code]

复制代码

### ③ API 说明

**低功率蓝牙 BLE 管理类 bluetooth.BLE 的主要接口，本文档仅实现 createGattServer。**

接口名 | 功能描述  
---|---  
createGattClientDevice | 创建一个可使用的 GattClientDevice 实例。  
createGattServer | 创建一个可使用的 GattServer 实例。  
getConnectedBLEDevices | 获取和当前设备连接的 BLE 设备。  
getLeMaximumAdvertisingDataLength | 广播的最大数据长度。  
startBLEScan | 发起 BLE 扫描流程。  
stopBLEScan | 停止 BLE 扫描流程。  
subscribeBLEDeviceFind | 订阅 BLE 设备发现上报事件。  
unsubscribeBLEDeviceFind | 取消订阅 BLE 设备发现上报事件。  
  
### bluetooth.BLE.createGattServer()

创建一个可使用的 GattServer 实例。

#### 参数

无

#### 返回值

类型 | 说明  
---|---  
GattServer | server 端类，使用 server 端方法之前需要创建该类的实例进行操作。  
  
#### GattServer

server 端类，使用 server 端方法之前需要创建该类的实例进行操作，通过 createGattServer()方法构造此实例。

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
[/code]

复制代码

**BLE 外围设备管理类 GattServer(外围设备)server 端类，使用 server 端方法之前需要创建该类的实例进行操作，通过 createGattServer()方法构造此实例。(let gattServer = bluetooth.BLE.createGattServer()) 的主要接口：**

接口名 | 功能描述  
---|---  
startAdvertising | 开始发送 BLE 广播。  
stopAdvertising | 停止发送 BLE 广播。  
addService | server 端添加服务。  
removeService | 删除已添加的服务。  
close | 关闭服务端功能，去注册 server 在协议栈的注册，调用该接口后GattServer实例将不能再使用。  
notifyCharacteristicChanged | server 端特征值发生变化时，主动通知已连接的 client 设备。  
sendResponse | server 端回复 client 端的读写请求。  
subscribeCharacteristicRead | server 端订阅特征值读请求事件。  
unsubscribeCharacteristicRead | server 端取消订阅特征值读请求事件。  
subscribeCharacteristicWrite | server 端订阅特征值写请求事件。  
unsubscribeCharacteristicWrite | server 端取消订阅特征值读请求事件。  
subscribeDescriptorRead | server 端订阅描述符读请求事件。  
unsubscribeDescriptorRead | server 端取消订阅描述符读请求事件。  
subscribeDescriptorWrite | server 端订阅描述符写请求事件。  
unsubscribeDescriptorWrite | server 端取消订阅描述符写请求事件。  
subscribeConnectStateChange | server 端订阅 BLE 连接状态变化事件。  
unsubscribeConnectStateChange | server 端取消订阅 BLE 连接状态变化事件。  
  
**BLE 外围设备管理类 GattServer(外围设备)server 端类接口详细描述：**

### gattServer.startAdvertising(setting: AdvertiseSetting, advData: AdvertiseData, advResponse?: AdvertiseData)

开始发送 BLE 广播。

#### 参数

参数名 | 类型 | 必填 | 描述  
---|---|---|---  
setting | AdvertiseSetting | 是 | BLE 广播的相关参数。  
advData | AdvertiseData | 是 | BLE 广播包内容。  
advResponse | AdvertiseData | 否 | BLE 回复扫描请求回复响应。  
  
#### AdvertiseSetting

描述蓝牙低功耗设备发送广播的参数。

参数名 | 类型 | 是否必填 | 默认值 | 描述  
---|---|---|---|---  
interval | number | 否 | 1600 | 表示广播间隔，最小值设置 32 个 slot 表示 20ms，最大值设置 16384 个 slot，默认值设置为 1600 个 slot 表示 1s。  
txPower | number | 否 | -7 | 表示发送功率，最小值设置-127，最大值设置 1，默认值设置-7，单位 dbm。  
connectable | boolean | 否 | true | 表示是否是可连接广播，默认值设置为 true。  
  
#### AdvertiseData

描述 BLE 广播数据包的内容。

参数名 | 类型 | 是否必填 | 描述  
---|---|---|---  
serviceUuids | Array<string> | 否 | 表示要广播的服务 UUID 列表。  
manufactureData | Array<ManufactureData> | 否 | 表示要广播的广播的制造商信息列表。  
serviceData | Array<ServiceData> | 否 | 表示要广播的服务数据列表。  
  
> serviceUuids 和 serviceData 至少填写一个。

#### ManufactureData

描述 BLE 广播数据包的内容。

参数名 | 类型 | 是否必填 | 描述  
---|---|---|---  
manufactureId | string | number | 是 | 表示制造商的 ID，由蓝牙 SIG 分配。  
manufactureValue | ArrayBuffer | 是 | 表示制造商发送的制造商数据。  
  
#### ServiceData

描述广播包中服务数据内容。

参数名 | 类型 | 是否必填 | 描述  
---|---|---|---  
serviceUuid | string | 是 | 表示服务的 UUID。  
serviceValue | ArrayBuffer | 是 | 表示服务数据。  
  
#### 示例
[code] 
    let manufactureValueBuffer = new Uint8Array(4)
    manufactureValueBuffer[0] = 1
    manufactureValueBuffer[1] = 2
    manufactureValueBuffer[2] = 3
    manufactureValueBuffer[3] = 4
    
    let serviceValueBuffer = new Uint8Array(4)
    serviceValueBuffer[0] = 4
    serviceValueBuffer[1] = 6
    serviceValueBuffer[2] = 7
    serviceValueBuffer[3] = 8
    console.info('manufactureValueBuffer = ' + JSON.stringify(manufactureValueBuffer))
    console.info('serviceValueBuffer = ' + JSON.stringify(serviceValueBuffer))
    let gattServer = bluetooth.BLE.createGattServer()
    gattServer.startAdvertising(
      {
        interval: 150,
        txPower: 60,
        connectable: true,
      },
      {
        serviceUuids: ['00001888-0000-1000-8000-00805f9b34fb'],
        manufactureData: [
          {
            manufactureId: 4567,
            manufactureValue: manufactureValueBuffer.buffer,
          },
        ],
        serviceData: [
          {
            serviceUuid: '00001888-0000-1000-8000-00805f9b34fb',
            serviceValue: serviceValueBuffer.buffer,
          },
        ],
      },
      {
        serviceUuids: ['00001889-0000-1000-8000-00805f9b34fb'],
        manufactureData: [
          {
            manufactureId: 1789,
            manufactureValue: manufactureValueBuffer.buffer,
          },
        ],
        serviceData: [
          {
            serviceUuid: '00001889-0000-1000-8000-00805f9b34fb',
            serviceValue: serviceValueBuffer.buffer,
          },
        ],
      }
    )
[/code]

复制代码

### gattServer.stopAdvertising()

停止发送 BLE 广播。

#### 无参数

#### 无返回结果

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.stopAdvertising()
[/code]

复制代码

### gattServer.addService(service: GattService)

server 端添加服务。

#### 参数

参数名 | 类型 | 必填 | 描述  
---|---|---|---  
service | GattService | 是 | 服务端的 service 数据。BLE 广播的相关参数  
  
#### 返回值：

类型 | 说明  
---|---  
boolean | 添加服务操作，成功返回 true，否则返回 false。  
  
#### GattService

描述 service 的接口参数定义。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
isPrimary | boolean | 是 | 是 | 如果是主服务设置为 true，否则设置为 false。  
characteristics | Array<BLECharacteristic> | 是 | 是 | 当前服务包含的特征列表。  
includeServices | Array<GattService> | 是 | 是 | 当前服务依赖的其它服务。  
  
#### BLECharacteristic

描述 characteristic 的接口参数定义 。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 是 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
characteristicValue | ArrayBuffer | 是 | 是 | 特征对应的二进制值。  
descriptors | Array<BLEDescriptor> | 是 | 是 | 特定特征的描述符列表。  
properties | Array<CharacteristicProperties> | 是 | 是 | 特定特征的属性。  
  
#### BLEDescriptor

描述 descriptor 的接口参数定义 。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
serviceUuid | string | 是 | 是 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 是 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
descriptorUuid | string | 是 | 是 | 描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。  
descriptorValue | ArrayBuffer | 是 | 是 | 描述符对应的二进制值。  
  
#### CharacteristicProperties

名称 | 取值 | 描述  
---|---|---  
PROPERTY_BROADCAST | 0 | 表示 characteristic 是可广播的。  
PROPERTY_EXTENDED_PROPS | 1 | 表示 characteristic 有扩展的属性 descriptor。  
PROPERTY_INDICATE | 2 | 表示 characteristic 支持 indicate 操作。  
PROPERTY_NOTIFY | 3 | 表示 characteristic 支持 notification 操作。  
PROPERTY_READ | 4 | 表示 characteristic 是可读的。  
PROPERTY_WRITE | 5 | 表示 characteristic 是可写的。  
PROPERTY_SIGNED_WRITE | 6 | 表示 characteristic 支持带签名写入  
PROPERTY_WRITE_NO_RESPONSE | 7 | 表示 characteristic 支持没有回复的写入  
  
#### 示例
[code] 
    // 创建descriptors
    let descriptors = []
    let arrayBuffer = new ArrayBuffer(8)
    let descV = new Uint8Array(arrayBuffer)
    descV[0] = 11
    let descriptor = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
      descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',
      descriptorValue: arrayBuffer,
    }
    descriptors[0] = descriptor
    
    // 创建characteristics
    let characteristics = []
    let arrayBufferC = new ArrayBuffer(8)
    let cccV = new Uint8Array(arrayBufferC)
    cccV[0] = 1
    let characteristic = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
      characteristicValue: arrayBufferC,
      descriptors: descriptors,
      properties: [1, 4, 6],
    }
    
    characteristics[0] = characteristic
    
    // 创建gattService
    let gattService = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      isPrimary: true,
      characteristics: characteristics,
      includeServices: [],
    }
    
    let gattServer = bluetooth.BLE.createGattServer()
    let ret = gattServer.addService(gattService)
    if (ret) {
      console.log('add service successfully')
    } else {
      console.log('add service failed')
    }
[/code]

复制代码

### gattServer.removeService(serviceUuid: string)

删除已添加的服务。

#### 参数

参数名 | 类型 | 必填 | 描述  
---|---|---|---  
serviceUuid | string | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。  
  
#### 返回值：

类型 | 说明  
---|---  
boolean | 删除服务操作，成功返回 true，否则返回 false。  
  
#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.removeService('00001810-0000-1000-8000-00805F9B34FB')
[/code]

复制代码

### gattServer.close()

关闭服务端功能，去注册 server 在协议栈的注册，调用该接口后GattServer实例将不能再使用。
[code] 
    let gattServer = bluetooth.BLE.createGattServer()
    gattServer.close()
[/code]

复制代码

### gattServer.notifyCharacteristicChanged(deviceId: string, notifyCharacteristic: NotifyCharacteristic)

server 端特征值发生变化时，主动通知已连接的 client 设备。

#### 参数

参数名 | 类型 | 必填 | 描述  
---|---|---|---  
deviceId | string | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。  
notifyCharacteristic | NotifyCharacteristic | 是 | 通知的特征值数据。  
  
#### 返回值：

类型 | 说明  
---|---  
boolean | 通知操作，成功返回 true，否则返回 false。  
  
#### 示例
[code] 
    // 创建descriptors
    let descriptors = []
    let arrayBuffer = new ArrayBuffer(8)
    let descV = new Uint8Array(arrayBuffer)
    descV[0] = 11
    let descriptor = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
      descriptorUuid: '00002902-0000-1000-8000-00805F9B34FB',
      descriptorValue: arrayBuffer,
    }
    descriptors[0] = descriptor
    
    let arrayBufferC = new ArrayBuffer(8)
    let characteristic = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      characteristicUuid: '00001820-0000-1000-8000-00805F9B34FB',
      characteristicValue: arrayBufferC,
      descriptors: descriptors,
    }
    let notifyCharacteristic = {
      serviceUuid: '00001810-0000-1000-8000-00805F9B34FB',
      characteristicUuid: '00001821-0000-1000-8000-00805F9B34FB',
      characteristicValue: characteristic.characteristicValue,
      confirm: false,
    }
    let gattServer = bluetooth.BLE.createGattServer()
    gattServer.notifyCharacteristicChanged('XX:XX:XX:XX:XX:XX', notifyCharacteristic)
[/code]

复制代码

#### NotifyCharacteristic

描述 server 端特征值发生变化时，server端发送特征值通知的参数结构。

名称 | 类型 | 必填 | 说明  
---|---|---|---  
serviceUuid | string | 是 | 特征值所属的服务UUID。例如：00001888-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 内容发生变化的特征值UUID。例如：00002a11-0000-1000-8000-00805f9b34fb。  
characteristicValue | ArrayBuffer | 是 | 特征值对应的数据内容。  
confirm | boolean | 是 | true表示发送的是指示，需要client端回复确认。false表示发送的是通知，不需要client端回复确认。  
  
### gattServer.sendResponse(serverResponse: ServerResponse)

server 端回复 client 端的读写请求。

#### 参数

参数名 | 类型 | 必填 | 描述  
---|---|---|---  
serverResponse | ServerResponse | 是 | service 的 UUID，例如“00001810-0000-1000-8000-00805F9B34FB”。  
  
#### 返回值：

类型 | 说明  
---|---  
boolean | 回复响应操作，成功返回 true，否则返回 false。  
  
#### ServerResponse

描述 server 端回复 client 端读/写请求的响应参数结构。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | number | 是 | 否 | 表示请求的传输 ID，与订阅的读/写请求事件携带的 ID 保持一致。  
status | number | 是 | 否 | 表示响应的状态，设置为 0 即可，表示正常。  
offset | number | 是 | 否 | 表示请求的读/写起始位置，与订阅的读/写请求事件携带的 offset 保持一致。  
value | ArrayBuffer | 是 | 否 | 表示回复响应的二进制数据。  
  
#### 示例
[code] 
    /* send response */
    let arrayBufferCCC = new ArrayBuffer(8)
    let cccValue = new Uint8Array(arrayBufferCCC)
    cccValue[0] = 1123
    let serverResponse = {
      deviceId: 'XX:XX:XX:XX:XX:XX',
      transId: 0,
      status: 0,
      offset: 0,
      value: arrayBufferCCC,
    }
    
    let gattServer = bluetooth.BLE.createGattServer()
    let ret = gattServer.sendResponse(serverResponse)
    if (ret) {
      console.log('bluetooth sendResponse successfully')
    } else {
      console.log('bluetooth sendResponse failed')
    }
[/code]

复制代码

### gattServer.subscribeCharacteristicRead(OBJECT)

server 端订阅特征值读请求事件。

#### OBJECT 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 回调此函数  
fail | Function | 否 | 失败回调。  
  
#### callback 返回值:

类型 | 说明  
---|---  
CharacteristicReadReq | 描述 server 端订阅后收到的特征值读请求事件参数结构。  
  
#### CharacteristicReadReq

描述 server 端订阅后收到的特征值读请求事件参数结构。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示发送特征值读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | number | 是 | 否 | 表示读请求的传输 ID，server 端回复响应时需填写相同的传输 ID。  
offset | number | 是 | 否 | 表示读特征值数据的起始位置。例如：k 表示从第 k 个字节开始读，server 端回复响应时需填写相同的 offset。  
characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
  
#### 示例
[code] 
    let gattServer = bluetooth.BLE.createGattServer()
    
    let arrayBufferCCC = new ArrayBuffer(8)
    let cccValue = new Uint8Array(arrayBufferCCC)
    cccValue[0] = 1123
    function ReadCharacteristicReq(CharacteristicReadReq) {
      let deviceId = CharacteristicReadReq.deviceId
      let transId = CharacteristicReadReq.transId
      let offset = CharacteristicReadReq.offset
      let characteristicUuid = CharacteristicReadReq.characteristicUuid
    
      let serverResponse = {
        deviceId: deviceId,
        transId: transId,
        status: 0,
        offset: offset,
        value: arrayBufferCCC,
      }
    
      let ret = gattServer.sendResponse(serverResponse)
      if (ret) {
        console.log('bluetooth sendResponse successfully')
      } else {
        console.log('bluetooth sendResponse failed')
      }
    }
    
    gattServer.subscribeCharacteristicRead({
      callback: function (data) {
        ReadCharacteristicReq(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### gattServer.unsubscribeCharacteristicRead()

server 端取消订阅特征值读请求事件。

#### 无参数

#### 无返回值

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.unsubscribeCharacteristicRead()
[/code]

复制代码

### gattServer.subscribeCharacteristicWrite(OBJECT)

server 端订阅特征值写请求事件。

#### OBJECT 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 回调此函数  
fail | Function | 否 | 失败回调。  
  
#### callback 返回值:

类型 | 说明  
---|---  
DescriptorWriteReq | 描述 server 端订阅后收到的描述符写请求事件参数结构。  
  
#### DescriptorWriteReq

描述 server 端订阅后收到的描述符写请求事件参数结构。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示发送描述符写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | number | 是 | 否 | 表示写请求的传输 ID，server 端回复响应时需填写相同的传输 ID。  
offset | number | 是 | 否 | 表示写描述符数据的起始位置。例如：k 表示从第 k 个字节开始写，server 端回复响应时需填写相同的 offset。  
isPrep | boolean | 是 | 否 | 表示写请求是否立即执行。  
needRsp | boolean | 是 | 否 | 表示是否要给 client 端回复响应。  
value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。  
descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
  
#### 示例
[code] 
    let gattServer = bluetooth.BLE.createGattServer()
    
    let arrayBufferCCC = new ArrayBuffer(8)
    let cccValue = new Uint8Array(arrayBufferCCC)
    function WriteCharacteristicReq(CharacteristicWriteReq) {
      let deviceId = CharacteristicWriteReq.deviceId
      let transId = CharacteristicWriteReq.transId
      let offset = CharacteristicWriteReq.offset
      let isPrep = CharacteristicWriteReq.isPrep
      let needRsp = CharacteristicWriteReq.needRsp
      let value = new Uint8Array(CharacteristicWriteReq.value)
      let characteristicUuid = CharacteristicWriteReq.characteristicUuid
    
      cccValue[0] = value[0]
      let serverResponse = {
        deviceId: deviceId,
        transId: transId,
        status: 0,
        offset: offset,
        value: arrayBufferCCC,
      }
    
      let ret = gattServer.sendResponse(serverResponse)
      if (ret) {
        console.log('bluetooth sendResponse successfully')
      } else {
        console.log('bluetooth sendResponse failed')
      }
    }
    
    gattServer.subscribeCharacteristicWrite({
      callback: function (data) {
        WriteCharacteristicReq(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### gattServer.unsubscribeCharacteristicWrite()

server 端取消订阅特征值读请求事件。

#### 无参数

#### 无返回值

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.unsubscribeCharacteristicWrite()
[/code]

复制代码

### gattServer.subscribeDescriptorRead(OBJECT)

server 端订阅描述符读请求事件。

#### OBJECT 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 回调此函数  
fail | Function | 否 | 失败回调。  
  
#### callback 返回值:

类型 | 说明  
---|---  
DescriptorReadReq | 描述 server 端订阅后收到的描述符读请求事件参数结构。  
  
#### DescriptorReadReq

描述 server 端订阅后收到的描述符读请求事件参数结构。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示发送描述符读请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | number | 是 | 否 | 表示读请求的传输 ID，server 端回复响应时需填写相同的传输 ID。  
offset | number | 是 | 否 | 表示读描述符数据的起始位置。例如：k 表示从第 k 个字节开始读，server 端回复响应时需填写相同的 offset。  
descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 否 | 表示是否要给 client 端回复响应。  
value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。  
descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
  
#### 示例
[code] 
    let gattServer = bluetooth.BLE.createGattServer()
    
    let arrayBufferDesc = new ArrayBuffer(8)
    let descValue = new Uint8Array(arrayBufferDesc)
    descValue[0] = 1101
    function ReadDescriptorReq(DescriptorReadReq) {
      let deviceId = DescriptorReadReq.deviceId
      let transId = DescriptorReadReq.transId
      let offset = DescriptorReadReq.offset
      let descriptorUuid = DescriptorReadReq.descriptorUuid
    
      let serverResponse = {
        deviceId: deviceId,
        transId: transId,
        status: 0,
        offset: offset,
        value: arrayBufferDesc,
      }
    
      let ret = gattServer.sendResponse(serverResponse)
      if (ret) {
        console.log('bluetooth sendResponse successfully')
      } else {
        console.log('bluetooth sendResponse failed')
      }
    }
    
    gattServer.subscribeDescriptorRead({
      callback: function (data) {
        ReadDescriptorReq(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### gattServer.unsubscribeDescriptorRead()

server 端取消订阅描述符读请求事件。

#### 无参数

#### 无返回值

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.unsubscribeDescriptorRead()
[/code]

复制代码

### gattServer.subscribeDescriptorWrite(OBJECT)

server 端订阅描述符写请求事件。

#### OBJECT 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 回调此函数  
fail | Function | 否 | 失败回调。  
  
#### callback 返回值:

类型 | 说明  
---|---  
DescriptorWriteReq | 描述 server 端订阅后收到的描述符写请求事件参数结构。  
  
#### DescriptorWriteReq

描述 server 端订阅后收到的描述符写请求事件参数结构。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示发送描述符写请求的远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | number | 是 | 否 | 表示写请求的传输 ID，server 端回复响应时需填写相同的传输 ID。  
offset | number | 是 | 否 | 表示写描述符数据的起始位置。例如：k 表示从第 k 个字节开始写，server 端回复响应时需填写相同的 offset。  
isPrep | boolean | 是 | 否 | 表示写请求是否立即执行。  
needRsp | boolean | 是 | 否 | 表示是否要给 client 端回复响应。  
value | ArrayBuffer | 是 | 否 | 表示写入的描述符二进制数据。  
descriptorUuid | string | 是 | 否 | 表示描述符（descriptor）的 UUID，例如：00002902-0000-1000-8000-00805f9b34fb。  
characteristicUuid | string | 是 | 否 | 特定特征（characteristic）的 UUID，例如：00002a11-0000-1000-8000-00805f9b34fb。  
serviceUuid | string | 是 | 否 | 特定服务（service）的 UUID，例如：00001888-0000-1000-8000-00805f9b34fb。  
  
#### 示例
[code] 
    let gattServer = bluetooth.BLE.createGattServer()
    
    let arrayBufferCCC = new ArrayBuffer(8)
    let cccValue = new Uint8Array(arrayBufferCCC)
    function WriteCharacteristicReq(CharacteristicWriteReq) {
      let deviceId = CharacteristicWriteReq.deviceId
      let transId = CharacteristicWriteReq.transId
      let offset = CharacteristicWriteReq.offset
      let isPrep = CharacteristicWriteReq.isPrep
      let needRsp = CharacteristicWriteReq.needRsp
      let value = new Uint8Array(CharacteristicWriteReq.value)
      let characteristicUuid = CharacteristicWriteReq.characteristicUuid
    
      cccValue[0] = value[0]
      let serverResponse = {
        deviceId: deviceId,
        transId: transId,
        status: 0,
        offset: offset,
        value: arrayBufferCCC,
      }
    
      let ret = gattServer.sendResponse(serverResponse)
      if (ret) {
        console.log('bluetooth sendResponse successfully')
      } else {
        console.log('bluetooth sendResponse failed')
      }
    }
    
    gattServer.subscribeDescriptorWrite({
      callback: function (data) {
        WriteCharacteristicReq(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### gattServer.unsubscribeDescriptorWrite()

server 端取消订阅描述符写请求事件。

#### 无参数

#### 返回值

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.unsubscribeDescriptorWrite()
[/code]

复制代码

### gattServer.subscribeConnectStateChange(OBJECT)

server 端订阅 BLE 连接状态变化事件。

#### OBJECT 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 是 | 回调此函数  
fail | Function | 否 | 失败回调。  
  
#### callback 返回值:

类型 | 说明  
---|---  
BLEConnectChangedState | 描述 Gatt profile 连接状态 。  
  
#### BLEConnectChangedState

描述 Gatt profile 连接状态 。

参数名 | 类型 | 可读 | 可写 | 描述  
---|---|---|---|---  
deviceId | string | 是 | 否 | 表示远端设备地址，例如："XX:XX:XX:XX:XX:XX"。  
transId | ProfileConnectionState | 是 | 是 | 表示 BLE 连接状态的枚举。  
  
#### ProfileConnectionState

枚举，蓝牙设备的 profile 连接状态。

名称 | 默认值 | 说明  
---|---|---  
STATE_DISCONNECTED | 0 | 表示 profile 已断连。  
STATE_CONNECTING | 1 | 表示 profile 正在连接。  
STATE_CONNECTED | 2 | 表示 profile 正在连接。  
STATE_DISCONNECTING | 3 | 表示 profile 正在断连。  
  
#### 示例
[code] 
    function Connected(BLEConnectChangedState) {
      let deviceId = BLEConnectChangedState.deviceId
      let status = BLEConnectChangedState.state
    }
    
    let gattServer = bluetooth.BLE.createGattServer()
    gattServer.subscribeConnectStateChange({
      callback: function (data) {
        Connected(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### gattServer.unsubscribeConnectStateChange()

server 端取消订阅 BLE 连接状态变化事件。

#### 无参数

#### 无返回值

#### 示例
[code] 
    const gattServer = bluetooth.BLE.createGattServer()
    gattServer.unsubscribeConnectStateChange()
[/code]

复制代码

上一篇

[概述](</api/system/communicationOverview/>)

下一篇

[上传下载](</api/system/request/>)