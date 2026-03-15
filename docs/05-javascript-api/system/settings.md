# 系统设置

# 系统设置

更新时间：2024/09/02 14:53:40

## 接口声明
[code] 
    { "name": "blueos.service.settings" }
[/code]

复制代码

## 导入模块
[code] 
    import settings from '@blueos.service.settings'
[/code]

复制代码

## 在工程里面的 manifest 文件中配置如下内容

### 申请权限
[code] 
    {
      "permissions": [{ "name": "watch.permission.SETTINGS" }]
    }
[/code]

复制代码

## 接口定义

### settings.getValue(OBJECT)

获取设置

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
key | String | 是 | 相应设置的字段名  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数值 | 类型 | 说明  
---|---|---  
key | String | 相应设置的字段名  
value | String/Object/Array 等 JS 原生对象 | 相应设置的值  
  
#### 示例：
[code] 
    settings.getValue({
      key: 'brightness',
      success: function (data) {
        console.log(data.key + ': ' + data.value)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### settings.getValueSync(String)

同步获取设置

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
key | String | 是 | 相应设置的字段名  
  
#### 返回值

参数值 | 类型 | 说明  
---|---|---  
value | String/Object/Array 等 JS 原生对象 | 相应设置的值  
  
#### 示例
[code] 
    const value = settings.getValueSync('brightness')
[/code]

复制代码

#### 设置相关的字段

##### brightness 屏幕亮度

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
brightness | Number | 系统屏幕亮度值设置 | 取值范围 0-255
[code] 
    {
      brightness: 60
    }
[/code]  
  
复制代码

##### wearHand 佩戴手

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
wearHand | String | 佩戴手设置 | `L`: 左手， `R`: 右手
[code] 
    {
      wearHand: 'R'
    }
[/code]  
  
复制代码

##### raiseWristSwitch 抬腕监听开关

注意: 此处的监听仅代表用户感知的监听设置，和真实的监听无关

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
raiseWristSwitch | Boolean | 抬腕监听开关设置 | `true`: 开启抬腕监听， `false`: 关闭抬腕监听
[code] 
    {
      raiseWristSwitch: true
    }
[/code]  
  
复制代码

##### raiseWristSensitivity 抬腕监听灵敏度

注：灵敏度改变会影响 sensor 接口监听的灵敏度

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
raiseWristSensitivity | String | 抬腕监听灵敏度设置 | `H`: 高灵敏度， `M`: 标准灵敏度
[code] 
    {
      raiseWristSensitivity: `H`
    }
[/code]  
  
复制代码

##### silentMode 静音模式

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
silentMode | Boolean | 静音模式设置 | `true`: 开启静音模式， `false`: 关闭静音模式
[code] 
    {
      silentMode: false
    }
[/code]  
  
复制代码

##### flipScreen 屏幕翻转

字段名 | 类型 | 功能 | 说明  
---|---|---|---  
flipScreen | Boolean | 屏幕翻转设置 | `true`: 翻转到正向， `false`: 翻转到反向
[code] 
    {
      flipScreen: false
    }
[/code]  
  
复制代码

上一篇

[概述](</api/system/softwareOverview/>)

下一篇

[输入法](</api/system/inputmethod/>)