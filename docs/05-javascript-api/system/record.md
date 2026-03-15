# 录音

# 录音

更新时间：2024/09/02 14:53:40

## 接口声明
[code] 
    { "name": "blueos.media.audio.audioRecorder" }
[/code]

复制代码

## 导入模块
[code] 
    import record from '@blueos.media.audio.audioRecorder' 或 const record = require('@blueos.media.audio.audioRecorder')
[/code]

复制代码

## 接口定义

### record.start(OBJECT)

开始录音。默认录制为 PCM 格式，16000 采样率，16bit 位宽，2 通道。

#### 权限要求

录音

#### 开发者需要在 manifest.json 里面配置权限：
[code] 
    {
      "permissions": [{ "name": "watch.permission.RECORD" }]
    }
[/code]

复制代码

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
success | Function | 是 | 成功的回调  
fail | Function | 是 | 失败的回调  
complete | Function | 是 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
uri | String | 录音文件的存储路径，在应用的缓存目录中  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
400 | 拒绝授予权限  
401 | 敏感权限不能在后台运行  
402 | 权限错误（未声明该权限）  
  
#### 示例：
[code] 
    record.start({
      success: function (data) {
        console.log(`handling success: ${data.uri}`)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}, errorMsg=${data}`)
      },
    })
[/code]

复制代码

### record.stop(OBJECT)

停止录音。

#### 参数：

无

#### 示例：
[code] 
    record.stop()
[/code]

复制代码

### record.release(OBJECT)

释放录音资源。

#### 参数：

无

#### 示例：
[code] 
    record.release()
[/code]

复制代码

### 事件

名称 | 描述  
---|---  
Error | 录音发生错误时的回调事件  
Start | 录音开始时的回调事件  
Stop | 录音停止时的回调事件  
  
#### 示例：
[code] 
    record.onError = function () {
      console.log(`audio error`)
    }
[/code]

复制代码

上一篇

[音频管理](</api/system/audiomanager/>)

下一篇

[数据存储能力](</api/storage/overview/>)