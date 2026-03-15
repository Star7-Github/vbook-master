# 音频

# 音频

更新时间：2025/07/10 11:01:16

## 接口声明
[code] 
    { "name": "blueos.media.audio.audioPlayer" }
[/code]

复制代码

## 导入模块
[code] 
    import audio from '@blueos.media.audio.audioPlayer' 或 const audio = require('@blueos.media.audio.audioPlayer')
[/code]

复制代码

## 接口定义

### audio.play()

开始播放音频

#### 参数

无

#### 示例：
[code] 
    audio.play()
[/code]

复制代码

### audio.pause()

暂停播放音频

#### 参数

无

#### 示例
[code] 
    audio.pause()
[/code]

复制代码

### audio.stop()

停止音频播放，可以通过 play 重新播放音频

#### 参数

无

#### 示例：
[code] 
    audio.stop()
[/code]

复制代码

### audio.getPlayState(OBJECT)

获取当前播放状态数据

#### 参数

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
#### success 返回值：

参数值 | 类型 | 说明  
---|---|---  
state | String | 播放状态,分别为'play','pause','stop','idle'  
src | String | 播放的音频媒体 uri  
currentTime | Number | 当前音频的当前进度，单位秒,停止时返回-1  
  
#### 示例：
[code] 
    audio.getPlayState({
      success: function (data) {
        console.log(`
          handling success: state: ${data.state},
          src:${data.src}
        `)
      },
      fail: function (data, code) {
        console.log('handling fail, code=' + code)
      },
    })
[/code]

复制代码

### 属性

名称 | 参数类型 | 是否可读 | 是否可写 | 必填 | 描述  
---|---|---|---|---|---  
src | String | 是 | 是 | 是 | 播放的音频媒体 uri  
currentTime | Number | 是 | 是 | 否 | 音频的当前进度，单位秒，对值设置可以调整播放进度  
duration | Number | 是 | 否 | 否 | 音频文件的总时长，单位秒，未知返回 NaN  
streamType | String | 是 | 是 | 否 | streamType 指定使用音频类型，默认为 music。  
  
#### streamType 参数

名称 | 说明 | 取值  
---|---|---  
MEDIA | 媒体 | music  
VOICE_CALL | 通话 | voicecall  
  
#### 示例：
[code] 
    let streamType = audio.streamType
    audio.streamType = 'voicecall'
[/code]

复制代码

### 事件

名称 | 描述 | 返回值  
---|---|---  
Play | 在调用 play 方法后的回调事件 |   
Pause | 在调用 pause 方法后的回调事件 |   
Stop | 在调用 stop 方法后的回调事件 |   
Ended | 播放结束时的回调事件 |   
Error | 播放发生错误时的回调事件 |   
TimeUpdate | 在 `currentTime` 属性更新时会触发的回调事件 |   
DurationChange | 在 `duration` 属性更新时被触发的回调事件 |   
LoadedData | 第一次获取到音频数据的回调事件 |   
  
#### 示例：
[code] 
    audio.onError = function (error) {
      console.info(`audio error called, error: ${error}`)
    }
[/code]

复制代码

上一篇

[概述](</api/system/multimediaOverview/>)

下一篇

[多媒体](</api/system/media/>)