# 振动

# 振动

更新时间：2024/08/13 15:19:43

## 接口声明
[code] 
    { "name": "blueos.hardware.vibrator.vibrator" }
[/code]

复制代码

## 导入模块
[code] 
    import vibrator from '@blueos.hardware.vibrator.vibrator' 或 const vibrator = require('@blueos.hardware.vibrator.vibrator')
[/code]

复制代码

## 接口定义

### vibrator.vibrate(OBJECT)

触发振动

#### 参数：

参数 | 类型 | 必填 | 说明  
---|---|---|---  
mode | String | 否 | 振动模式，`long` 表示长振动，`short` 表示短振动。默认为 `long`  
  
#### 示例：
[code] 
    vibrator.vibrate({
      mode: 'long',
    })
[/code]

复制代码

### vibrator.start(OBJECT)

开始振动

##### 参数：

属性 | 类型 | 必填 | 说明  
---|---|---|---  
priority | Number | 是 | 振动优先级 0-8，数字越小优先级越高  
duration | Number | 是 | 振动持续时间(单位 ms)  
interval | Number | 是 | 振动间隔时间(单位 ms)  
count | Number | 是 | 振动次数  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### success 返回值：

返回值 | 类型 | 说明  
---|---|---  
id | Number | 底层分配唯一的 ID 并返回给调用者  
  
#### 示例：
[code] 
    vibrator.start({
      priority: 1,
      duration: 1000,
      interval: 1000,
      count: 10,
      success: function (data) {
        console.log(`handling success, id = ${data.id}`)
      },
      fail: function () {
        console.log(`handling fail`)
      },
      complete: function () {
        console.log(`handling complete`)
      },
    })
[/code]

复制代码

### vibrator.stop(Number)

停止振动

#### 参数：

类型 | 必填 | 说明  
---|---|---  
Number | 是 | 底层分配唯一的 ID  
  
#### 返回值：

类型 | 说明  
---|---  
Boolean | true:成功; false:失败;  
  
#### 示例：
[code] 
    vibrator.stop(1)
[/code]

复制代码

### vibrator.getSystemDefaultMode()

获取系统默认振动模式

#### 参数：

无

#### 返回值：

类型 | 说明  
---|---  
Number | 0:关闭振动; 1:标准振动; 2:加强振动  
  
#### 示例：
[code] 
    vibrator.getSystemDefaultMode()
[/code]

复制代码

上一篇

[地理位置](</api/system/geolocation/>)

下一篇

[屏幕管理](</api/system/screen/>)