# 多媒体

# 多媒体

更新时间：2025/08/13 20:11:57

## 接口声明
[code] 
    { "name": "blueos.media.audio.mediaManager" }
[/code]

复制代码

## 导入模块
[code] 
    import media from '@blueos.media.audio.mediaManager' 或 const media = require('@blueos.media.audio.mediaManager')
[/code]

复制代码

## media.createAudioPlayer(OBJECT)

创建音频播放的实例。

**参数**

属性 | 类型 | 必填 | 说明  
---|---|---|---  
streamType | StreamType | 否 | 音量策略，默认值为 music  
contentType | ContentType | 否 | 音频后处理类型，默认值为 music  
streamUsage | StreamUsage | 否 | 音频类型，默认值为 music  
  
**返回值：** AudioPlayer

**示例：**
[code] 
    const audioPlayer = media.createAudioPlayer({
      streamType: "music",
      contentType: "music",
      streamUsage: "music"
    })
[/code]

复制代码

## media.createAudioTrack(OBJECT)

创建音频流式播放的实例

**参数**

属性 | 类型 | 必填 | 说明  
---|---|---|---  
streamType | StreamType | 否 | 音量策略，默认值为 music  
contentType | ContentType | 否 | 音频后处理类型，默认值为 music  
streamUsage | StreamUsage | 否 | 音频类型，默认值为 music  
sampleRateInHz | number | 否 | 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000  
channelConfig | number | 否 | 捕获音频的声道数目，1：单声道，2：立体声；默认值为 1  
audioFormat | number | 否 | 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16  
  
**返回值：** AudioTrack

**示例：**
[code] 
    const audioTrack = media.createAudioTrack()
[/code]

复制代码

## media.createAudioRecord(OBJECT)

创建录音实例

**权限要求** ： 录音

**开发者需要在 manifest.json 里面配置权限：**
[code] 
    {
      "permissions": [{ "name": "blueos.permission.RECORD" }]
    }
[/code]

复制代码

**参数**

属性名 | 类型 | 必填 | 说明  
---|---|---|---  
sampleRateInHz | number | 否 | 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000  
channelConfig | number | 否 | 音频的声道数目，1：单声道，2：立体声；默认值为 1  
audioFormat | number | 否 | 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16  
  
**返回值：** AudioRecorder

**示例：**
[code] 
    const audioRecorder = media.createAudioRecord({
      sampleRateInHz: 16000,
      channelConfig: 1,
      audioFormat: 16
    })
[/code]

复制代码

## AudioPlayer

### play()

开始播放音频

**参数：** 无

**示例：**
[code] 
    audioPlayer.src = 'xxx'
    // play 方法调用无需等待 src 加载完成
    audioPlayer.play()
[/code]

复制代码

### pause()

暂停播放音频

**参数：** 无

**示例：**
[code] 
    audioPlayer.pause()
[/code]

复制代码

### stop()

停止音频播放，可以通过 play 重新播放音频

**参数：** 无

**示例：**
[code] 
    audioPlayer.stop()
[/code]

复制代码

### release()

释放音频资源

**参数：** 无

**示例：**
[code] 
    audioPlayer.release()
[/code]

复制代码

### src

字符串属性；可读可写属性，声明该属性会指定播放的音频媒体 uri。

**示例：**
[code] 
    audioPlayer.src = "internal://files/a.mp3"
[/code]

复制代码

### currentTime

读取 `currentTime` 属性将返回一个双精度浮点值，用以标明以秒为单位的当前音频的播放位置，设置 `currentTime` 将设置当前的播放位置。

**示例：**
[code] 
    audioPlayer.currentTime = 100.0
[/code]

复制代码

### duration `只读`

这是一个双精度浮点数，指明了音频在时间轴中的持续时间（总长度），以秒为单位。如果元素上没有媒体，或者媒体是不可用的，那么会返回 `NaN`。

**示例：**
[code] 
    const duration = audioPlayer.duration;
    console.log(duration)
[/code]

复制代码

### state `只读`

读取 `state` 属性可获取当前音频的播放状态。分别为：分别为`play,'pause','stop','idle'
[code] 
    const state = audioPlayer.state;
    console.log(state)
[/code]

复制代码

### playcount

整型数值，控制音频的循环播放。playcount = 1 或 playcount = 0：不开启循环; playcount >1：开启循环，且循环指定的次数; playcount = -1：开启循环，且循环无限次数。

**示例：**
[code] 
    audioPlayer.playcount = -1;
[/code]

复制代码

### onPlay

在音频 play 后的回调事件。

**示例：**
[code] 
    audioPlayer.onPlay = () => {
      console.log("play")
    }
[/code]

复制代码

### onPause

在音频 pause 后的回调事件

**示例：**
[code] 
    audioPlayer.onPause = () => {
      console.log("pause")
    }
[/code]

复制代码

### onStop

在音频 stop 后的回调事件

**示例：**
[code] 
    audioPlayer.onStop = () => {
      console.log("stop")
    }
[/code]

复制代码

### onEnded

播放结束时的回调事件

**示例：**
[code] 
    audioPlayer.onEnded = () => {
      console.log("ended")
    }
[/code]

复制代码

### onError

播放发生错误时的回调事件

**回调返回：**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误说明  
code | ErrorCode | 错误码  
  
**示例：**
[code] 
    audioPlayer.onError = (data, code) => {
      console.log(`data = ${data} code = ${code}`)
    }
[/code]

复制代码

### onTimeUpdate

在 `currentTime` 属性更新时会触发的回调事件

**示例：**
[code] 
    audioPlayer.onTimeUpdate = () => {
      console.log("timeUpdate")
    }
[/code]

复制代码

### onDurationChange

在 `duration` 属性更新时被触发的回调事件

**示例：**
[code] 
    audioPlayer.onDurationChange = () => {
      console.log("durationChange")
    }
[/code]

复制代码

### onPrevious

音乐面板点击上一首按钮时触发

**示例：**
[code] 
    audioPlayer.onPrevious = () => {
      console.log("播放上一首")
    }
[/code]

复制代码

### onNext

音乐面板点击下一首按钮时触发

**示例：**
[code] 
    audioPlayer.onNext = () => {
      console.log("播放下一首")
    }
[/code]

复制代码

### onLoadedData

第一次获取到音频数据的回调事件

**示例：**
[code] 
    audioPlayer.onLoadedData = () => {
      console.log("loadedData")
    }
[/code]

复制代码

### onInterrupt

音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。

**回调返回：**

类型 | 说明  
---|---  
InterruptAction | 打断事件信息  
  
**示例：**
[code] 
    audioPlayer.onInterrupt = function (interruptAction) {
      console.log(interruptAction.interruptHint)
    }
[/code]

复制代码

## AudioTrack

### play()

开始播放音频

**参数：** 无

**示例：**
[code] 
    audioTrack.play()
[/code]

复制代码

### write(OBJECT)

写入音频数据。

> 请确保在调用 `write()` 之前先调用 `play()`，否则写入的数据不会被处理或播放。

**参数**

属性 | 类型 | 必填 | 说明  
---|---|---|---  
buffer | ArrayBuffer | 是 | 写入的二进制音频数据  
success | Function | 否 | 成功函数，通过该回调函数通知写入的情况  
fail | Function | 否 | 失败函数  
  
**success 返回值：**

类型 | 说明  
---|---  
number | 表示写入成功的字节数，若返回的字节数为0 ，表示音频缓冲区已写满，建议等待后再次写入。  
  
**fail 返回值：**

错误码 | 说明  
---|---  
202 | 参数错误  
300 | 写入失败  
  
**示例：**
[code] 
    audioTrack.write({
      buffer: new ArrayBuffer(16),
      success(writtenBytes) {
        console.log(`written success writtenBytes=${writtenBytes}`)
      },
      fail(data, code) {
        console.log(`handling fail, code = ${code}`)
      },
    })
[/code]

复制代码

### pause()

暂停播放音频

**参数：** 无

**示例：**
[code] 
    audioTrack.pause()
[/code]

复制代码

### stop()

停止音频播放，可以通过 play 重新播放音频

**参数：** 无

**示例：**
[code] 
    audioTrack.stop()
[/code]

复制代码

### release()

释放音频资源

**参数：** 无

**示例：**
[code] 
    audioTrack.release()
[/code]

复制代码

### state `只读`

读取该属性可获得播放状态，分别为'play', 'pause', 'stop'

**示例：**
[code] 
    let state = audioTrack.state
    console.log(state)
[/code]

复制代码

### onPlay

在音频 play 后的回调事件

**示例：**
[code] 
    audioTrack.onPlay = () => {
      console.log('play')
    }
[/code]

复制代码

### onStop

在音频 stop 后的回调事件

**示例：**
[code] 
    audioTrack.onStop = () => {
      console.log('stop')
    }
[/code]

复制代码

### onPause

在音频 pause 后的回调事件

**示例** ：
[code] 
    audioTrack.onPause = () => {
      console.log('pause')
    }
[/code]

复制代码

### onError

播放发生错误时的回调事件

**回调返回：**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误说明  
code | ErrorCode | 错误码  
  
**示例：**
[code] 
    audioTrack.onError = (data, code) => {
      console.log(`data = ${data} code = ${code}`)
    }
[/code]

复制代码

### onInterrupt

音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。

**回调返回：**

类型 | 说明  
---|---  
InterruptAction | 打断事件信息  
  
**示例：**
[code] 
    audioPlayer.onInterrupt = function (interruptAction) {
      console.log(interruptAction.interruptHint)
    }
[/code]

复制代码

## AudioRecorder

### start(OBJECT)

开始录音，并在录音结束后生成音频文件。

**参数：**

属性名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 需要输出到文件的 uri  
success | Function | 是 | 成功的回调  
fail | Function | 是 | 失败的回调  
complete | Function | 是 | 执行结束后的回调  
  
**success 返回值：**

属性名 | 类型 | 说明  
---|---|---  
uri | String | 录音文件的存储路径  
  
**示例：**
[code] 
    audioRecorder.start({
      uri: 'internal://cache/file.mp3',
      success: function (data) {
        console.log(`handling success: ${data.uri}`)
      },
      fail: function (data, code) {},
    })
[/code]

复制代码

### read(OBJECT)

开始录音，录音的过程中实时返回音频内容。

注意：read 也是开始录音，不要再调用 start。

**参数：**

参数 | 类型 | 必填 | 说明  
---|---|---|---  
callback | Function | 否 | 回调函数  
  
**callback 返回值：**

类型 | 说明  
---|---  
ArrayBuffer | 录音内容  
  
**示例：**
[code] 
    audioRecorder.read({
      callback(buffer) {
        console.log('buffer.byteLength: ' + buffer.byteLength)
      },
    })
[/code]

复制代码

### stop()

停止录音。

**参数：** 无

**示例：**
[code] 
    audioRecorder.stop()
[/code]

复制代码

### release()

释放录音资源。

**参数：** 无

**示例：**
[code] 
    audioRecorder.release()
[/code]

复制代码

### onError

录音发生错误时的回调事件

**回调返回：**

参数 | 类型 | 说明  
---|---|---  
data | string | 错误说明  
code | ErrorCode | 错误码  
  
**示例：**
[code] 
    audioRecorder.onError = (data, code) => {
      console.log(`data = ${data} code = ${code}`)
    }
[/code]

复制代码

### onStart

录音开始时的回调事件

**示例：**
[code] 
    audioRecorder.onStart = () => {
      console.log(`start`)
    }
[/code]

复制代码

### onStop

录音停止时的回调事件

**示例：**
[code] 
    audioRecorder.onStop = () => {
      console.log(`stop`)
    }
[/code]

复制代码

## StreamUsage

音频类型枚举值 ，取值为 `string` 类型，默认值为`music`。用于对音频冲突的仲裁，多个相同的`streamUsage`音频同时播放时，系统只会保留一个，其他的会被打断。

取值 | 权限限制 | 说明  
---|---|---  
system | 仅系统应用可用 | 系统消息  
ring | 仅系统应用可用 | 电话响铃或短信提示  
music | 无 | 媒体  
voicecall | 仅系统应用可用 | 通话  
alarm | 仅系统应用可用 | 闹钟  
notification | 仅系统应用可用 | 通知  
game | 仅系统应用可用 | 游戏  
tts | 仅系统应用可用 | 文本语音播报  
sportbroadcast | 仅系统应用可用 | 运动播报  
navigation | 仅系统应用可用 | 导航  
  
## ContentType

音频后处理枚举值，取值为 `string` 类型，默认值为`music`。系统会根据不同的 `contentType` 对声音进行优化处理。

取值 | 说明  
---|---  
speech | 语音播报  
music | 音乐播放  
movie | 视频播放/电视节目  
sonification | 按键音/游戏中的短音提示/拟音  
  
## StreamType

音量策略枚举值，取值为 `string` 类型，默认值为`music`。系统可以通过不同的 `streamType` 来管理音频的音量，例如：播放音乐设置为 `music`，消息提示音设置为 `ring` 。

名称 | 权限限制 | 说明  
---|---|---  
system | 仅系统应用可用 | 系统消息  
ring | 仅系统应用可用 | 电话响铃或短信提示  
music | 无 | 媒体  
voicecall | 仅系统应用可用 | 通话  
alarm | 仅系统应用可用 | 闹钟  
notification | 仅系统应用可用 | 通知  
bluetoothsco | 仅系统应用可用 | 蓝牙通话  
tts | 仅系统应用可用 | 文本语音播报  
sportbroadcast | 仅系统应用可用 | 运动播报  
force | 仅系统应用可用 | 忽视静音策略，强制最大音量播放  
  
## InterruptAction

音频打断对象

属性 | 类型 | 说明  
---|---|---  
interruptHint | number | 1 - 音频恢复 （如：来电恢复）  
2 - 音频暂停，可以恢复 （如：来电打断）  
3 - 音频停止，不会再恢复（如：彻底停止）  
4 - 音频被拒绝（如：来电时播放音乐）  
actionType | number | 事件返回类型。  
0 - 被音频抢夺，焦点触发事件  
1 - 音频被外部设备打断事件，如蓝牙耳机连接。  
  
**示例：**
[code] 
    {
      "interruptHint": 2,
      "actionType": 0
    }
[/code]

复制代码

## ErrorCode

错误码的枚举，枚举值的类型为 number

枚举值 | 对应的 data 信息 | 说明  
---|---|---  
201 | No Permission | 表示无权限执行此操作，需要申请权限或者用户授权。  
202 | Invalid Parameters | 参数无效 。  
100001 | Insufficient Memory or Service Limit Reached | 表示系统内存不足或服务数量达到上限 。  
100002 | Operation Not Allowed | 表示当前状态不允许或无权执行此操作 。  
100003 | I/O error. | 表示出现IO错误。  
100004 | System or Network Timeout | 表示系统或网络响应超时 。录音暂无此错误。  
100005 | Service Process Terminated | 表示服务进程死亡。  
100006 | Unsupported Format | 表示不支持当前媒体资源的格式。  
100007 | Audio interrupted. | 表示音频焦点被抢占 。  
  
上一篇

[音频](</api/system/audio/>)

下一篇

[音频管理](</api/system/audiomanager/>)