# 音频管理

# 音频管理

更新时间：2025/07/10 11:01:16

## 接口声明
[code] 
    { "name": "blueos.media.audio.audioManager" }
[/code]

复制代码

## 导入模块
[code] 
    import audioManager from '@blueos.media.audio.audioManager'
[/code]

复制代码

## 接口定义

### setVolume(OBJECT)

设置音量

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
volume | number | 是 | 音量等级, 设置的音量，0.00-1.00 之间。  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**返回值：**

无

**示例：**
[code] 
    audioManager.setVolume({
      volumeType: 'music',
      volume: 0.5,
      success() {
        console.log("设置音量成功")
      }
    })
[/code]

复制代码

### getVolume(OBJECT)

获取音量

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**返回值：**

类型 | 必填 | 说明  
---|---|---  
number | 是 | 音量等级, 设置的音量，0.00-1.00 之间。  
  
**示例**
[code] 
    audioManager.getVolume({
      volumeType: 'music',
      success(volume) {
        console.log(`音量等级为：${volume}`)
      }
    })
[/code]

复制代码

### getVolumeSync(OBJECT)

同步获取音量

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
  
**返回值**

类型 | 说明  
---|---  
number | 音量等级, 设置的音量，0.00-1.00 之间。  
  
**示例**
[code] 
    const value = audioManager.getVolumeSync({
      volumeType: 'music',
    })
    console.log(`音量等级为：${value}`)
[/code]

复制代码

### getMinVolume(OBJECT)

获取指定流的最小音量

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**success 返回值：**

类型 | 说明  
---|---  
number | 最小音量  
  
**示例：**
[code] 
    audioManager.getMinVolume({
      volumeType: 'music',
      success(volume) {
        console.log(`最小音量为：${volume}`)
      },
    })
[/code]

复制代码

### getMaxVolume(OBJECT)

获取指定流的最大音量

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**success 返回值：**

类型 | 说明  
---|---  
number | 最大音量  
  
**示例：**
[code] 
    audioManager.getMaxVolume({
      volumeType: 'music',
      success(volume) {
        console.log(`最大音量为：${volume}`)
      },
    })
[/code]

复制代码

### mute(OBJECT)

设置指定音量流静音或取消静音

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
isMute | number | 是 | 是否将音量流静音（1:设置静音 ；0:设置取消静音）  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**返回值：**

无

**示例：**
[code] 
    audioManager.mute({
      volumeType: 'music',
      isMute: 1,
      success() {
        console.log(`静音成功`)
      }
    })
[/code]

复制代码

### isMute(OBJECT)

获取指定音量流是否被静音

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
volumeType | AudioVolumeType | 是 | 音量流类型  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**返回值：**

类型 | 说明  
---|---  
number | 是否将音量流静音（1:设置静音 ；0:设置取消静音)。  
  
**示例**
[code] 
    audioManager.isMute({
      volumeType: 'music',
      success(isMute) {
        console.log(isMute)
      }
    })
[/code]

复制代码

### subscribe(OBJECT)

监听音量变化

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | `volume`：表示音量  
callback | Function | 是 | 监听音量变化数据回调函数的执行  
fail | Function | 否 | 失败回调  
  
**callback 返回值：**

参数名 | 类型 | 说明  
---|---|---  
volumeType | AudioVolumeType | 音量流类型  
value | number | 音量等级, 设置的音量，0.00-1.00 之间  
  
**示例：**
[code] 
    audioManager.subscribe({
      type: 'volume',
      callback(data) {
        console.log(`value = ${data.value} volumeType = ${data.volumeType}`)
      }
    })
[/code]

复制代码

### unsubscribe(OBJECT)

取消监听音量变化

**参数：**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
type | string | 是 | `volume`：表示音量  
  
**示例：**
[code] 
    audioManager.unsubscribe({
      type: 'volume',
    })
[/code]

复制代码

### isMicrophoneMute(OBJECT)

获取麦克风是否为静音状态

**参数**

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
**返回值**

类型 | 必填 | 说明  
---|---|---  
number | 是 | 是否将音量流静音（1:设置静音 ；0:设置取消静音)。  
  
**示例**
[code] 
    audioManager.isMicrophoneMute({
      success(isMicrophoneMute) {
        console.log(isMicrophoneMute)
      }
    })
[/code]

复制代码

### AudioVolumeType

枚举，音量流的类型

名称 | 说明 | 取值  
---|---|---  
RING | 铃声 | ring  
MEDIA | 媒体声音 | music  
  
### AudioFocusAcquireType

音频焦点变更类型枚举

**名称** | **说明** | **取值**  
---|---|---  
GAIN | 获得音频焦点 | gain  
LOSS | 失去音频焦点 | loss  
TRANSIENT | 短暂失去音频焦点，(预留，暂不支持) | transient  
DUCK | 降音量，未失去音频焦点 ，(预留，暂不支持) | duck  
  
上一篇

[多媒体](</api/system/media/>)

下一篇

[录音](</api/system/record/>)