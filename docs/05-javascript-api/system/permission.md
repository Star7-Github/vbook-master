# 权限管理

# 权限管理

更新时间：2024/10/11 11:55:18

## 权限列表

### watch.permission.LOCATION

**说明：** 位置信息

**模块：** @blueos.hardware.geolocation

  * geolocation.getLocation(OBJECT)
  * geolocation.subscribe(OBJECT)
  * geolocation.unsubscribe()

**错误码：**

  * 400 : 拒绝授予权限

  * 402: 权限错误（未声明该权限）

### watch.permission.STEP_COUNTER

**说明：** 计步传感器

**模块：** @blueos.hardware.sensor

  * sensor.subscribeStepCounter(OBJECT)

**错误码：**

  * 400 : 拒绝授予权限

  * 402: 权限错误（未声明该权限）

### watch.permission.DEVICE_INFO

**说明：** 设备信息

**模块：** @blueos.hardware.device

  * device.getId(OBJECT)

  * device.getDeviceId(OBJECT)

  * device.getSerial(OBJECT)

**错误码：**

  * 400: 拒绝授予权限

  * 402: 权限错误（未声明该权限）

### watch.permission.RECORD

**说明：** 录音

**模块 1：** @blueos.multimedia.record

  * record.start(OBJECT)

  * record.stop(OBJECT)

  * record.release(OBJECT)

**模块 2：** @blueos.media.audio.mediaManager

  * media.createAudioRecord()

**错误码：**

  * 400: 拒绝授予权限

  * 401: 敏感权限不能在后台运行

  * 402: 权限错误（未声明该权限）

### watch.permission.BLUETOOTH

**说明：** 允许使用设备蓝牙

**模块 1：** @blueos.communication.bluetooth.bluetooth / @vivo.bluetooth

  * bluetooth.getBindState()
  * bluetooth.startBind(OBJECT)
  * bluetooth.confirmBind(OBJECT)
  * bluetooth.cancelBind(OBJECT)
  * bluetooth.startDevicesDiscovery(OBJECT)
  * bluetooth.onDevicefound = function(data)
  * bluetooth.stopDevicesDiscovery(OBJECT)
  * bluetooth.getConnectedDevices(OBJECT)
  * bluetooth.getPairedDevices(OBJECT)
  * bluetooth.createConnection(OBJECT)
  * bluetooth.closeConnection (OBJECT)
  * bluetooth.pair(OBJECT)
  * bluetooth.unpair(OBJECT)
  * bluetooth.subscribeBind(OBJECT)
  * bluetooth.clearBindData(OBJECT)
  * bluetooth.replyPhone(OBJECT)
  * bluetooth.onadapterstatechange = function(data)

**模块 2：** @blueos.bluetooth.ble

  * createGattClientDevice
  * createGattServer
  * getConnectedBLEDevices
  * getLeMaximumAdvertisingDataLength
  * startBLEScan
  * stopBLEScan
  * subscribeBLEDeviceFind
  * unsubscribeBLEDeviceFind

**错误码：**

  * 400 : 拒绝授予权限,
  * 402: 权限错误（未声明该权限）

### watch.permission.READ_HEALTH_DATA

**说明：** 读取健康数据

**模块：** @blueos.health.healthManager / @vivo.health

  * health.getRecentSamples(Object)
  * health.subscribeSample(Object)
  * health.unsubscribeSample(Object)
  * health.getTodayStatistic(Object)
  * health.subscribeTodayStatistic(Object)
  * health.unsubscribeTodayStatistic(Object)

**错误码：**

  * 400 : 拒绝授予权限,
  * 402: 权限错误（未声明该权限）

### watch.permission.PLACE_CALL

**说明：** 拨打电话

**模块：** @blueos.telephony.call

**错误码：**

  * 400 : 拒绝授予权限,
  * 402: 权限错误（未声明该权限）

### watch.permission.SEND_MESSAGES

**说明：** 发送短信

**模块：** @blueos.telephony.sms

**错误码：**

  * 400 : 拒绝授予权限,
  * 402: 权限错误（未声明该权限）

上一篇

[概述](</api/system/peaceOverview/>)

下一篇

[密码算法](</api/system/cipher/>)