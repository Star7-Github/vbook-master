# 语音技术

# 语音技术

更新时间：2025/04/30 20:56:55

语音技术目前支持 ASR 与 TTS 两种技术。   
  

> ASR，自动语音识别技术（Automatic Speech Recognition）是一种将人的语音转换为文本的技术, 支持实时短语音识别与长语音听写。  
>  TTS，文字转语音技术（Text to Speech）是一种将文字转成语音的技术，可将上传的单句文本转成播报音频，包含了短音频生成和长音频生成能力。

## 使用前提条件

该接口底层依赖以下接口实现，开发者使用前需要在 manifest.json 中声明以下接口:
[code] 
    { "name": "blueos.network.webSocket" }
    { "name": "blueos.media.audio.mediaManager" }
[/code]

复制代码

## 使用
[code] 
    import speech from "@blueos.ai.speech"
[/code]

复制代码

## speech 接口总览

接口名称 | 接口说明  
---|---  
createAsr | 创建 ASR 语音识别服务实例 AsrInstance  
createTts | 创建 TTS 文字转语音服务实例 TtsInstance  
  
## AsrInstance 实例接口总览

接口名称 | 接口说明  
---|---  
start() | 开启语音识别服务  
send(data:ArrayBuffer|TypedArray) | 发送语音数据，语音数据建议分帧发送，每帧包含的语音时长是 40 毫秒，单句不超过 60s  
finish() | 结束语音识别服务  
onMessage = (result:ShortModeResult|LongModeResult) =>{} | 语音识别信息回调。通过 send()接口发送语音数据后，语音识别结果将通过该回调事件返回  
onStarted = () =>{} | 语音识别服务开启成功的回调。在服务开启成功后，语音识别服务将开始处理通过 send() 接口发送的数据  
onFinished = () =>{} | 语音识别服务结束回调。该回调可通过调用 finish()接口触发或者 endVadTime 超时自动触发  
onError = (data:string, code: number) =>{} | 语音识别服务异常回调  
  
## TtsInstance 实例接口总览

接口名称 | 接口说明  
---|---  
connect() | 连接文本转语音服务  
disconnect() | 断开文本转语音服务，并且释放网络资源与相关播放器资源，建议在应用销毁时调用。  
send(data:string) | 发送文本内容  
pauseAudio() | tts 实例服务暂停播放音频  
resumeAudio() | tts 实例服务恢复播放音频  
onMessage = (result:TtsResult) =>{} | 文本识别信息回调。通过 send()接口发送文本内容后，文本识别结果将通过该回调事件返回  
onConnected = () =>{} | 文字转语音服务连接成功的回调。在调用 connect() 连接服务成功后触发。服务连接成功后，文字转语音服务将开始处理通过 send() 接口发送的文本内容。  
onSpeakStarted() | 播放开始回调  
onSpeakPaused() | 播放暂停回调，调用了TtsInstance.pauseAudio()后会触发此回调  
onSpeakProgress(progress:string) | 播放进度信息回调。开始播放后，播放进度信息会通过该回调多次触发，直到播放完毕  
onSpeakFinished() | 播放完毕回调  
onSpeakResumed() | 恢复播放回调，调用了TtsInstance.resumeAudio()后会触发此回调  
onError = (data:string, code: number) =>{} | 文字转语音服务异常回调  
  
### createAsr(asrParams: AsrParams):AsrInstance

创建 ASR 实例

#### AsrParams 参数

属性 | 必填 | 类型 | 默认值 | 说明  
---|---|---|---|---  
auth | 是 | Auth | 无 | 请求的身份验证信息，确保请求来源合法  
model | 是 | AsrModel | AsrModel.ShortInput | 使用的 ASR 模型，支持短语音与长语句模型。  
config | 否 | AsrConfig | 无 | 初始化 ASR 客户端相关配置  
  
#### Auth

属性 | 必填 | 类型 | 说明  
---|---|---|---  
appId | 是 | string | 应用 appId  
appKey | 是 | string | 应用 appKey  
  
注： appId & appKey，需要在 [vivo 开发者平台](<https://developers-ai.vivo.com.cn/documents?id=720>) 申请

#### AsrModel

属性 | 说明  
---|---  
ShortInputt | 短语音，输入法模型。  
ShortJovi | 短语音，语音助手模型  
LongListen | 长语句，听说模型。  
LongSubtitle | 长语句，字幕模型  
  
##### 注：

  1. 短语音指单轮识别时长在 60s 之内。
  2. 长语句指单轮识别不限制时长。

#### AsrConfig

参数 | 类型 | 说明 | 必填 | 默认值 | 备注  
---|---|---|---|---|---  
audioType | AudioType | 音频类型 | 否 | AudioType.Pcm | 使用的音频类型  
isWithPunctuation | boolean | 是否打开标点符号 | 否 | true |   
endVadTime | number | 后端检测时间 | 否 | 1000 | 单位：毫秒， 仅实时短语音支持该参数  
isChinese2digital | boolean | 是否打开汉字转数字 | 否 | true | 仅实时短语音支持该参数  
lang | AsrLang | 语言 | 否 | AsrLang.Cn | 仅长语音听写支持该参数  
  
#### AudioType

属性 | 说明  
---|---  
Pcm | pcm 音频类型  
Opus | opus 音频类型  
  
#### AsrLang

属性 | 说明  
---|---  
Cn | 中文  
En | 英文  
  
### AsrInstance.start()

开启语音识别服务

### AsrInstance.send(data:ArrayBuffer|TypedArray)

发送语音数据，语音数据建议分帧发送，每帧包含的语音时长是 40 毫秒，单句不超过 60s

### AsrInstance.onMessage = (result:ShortModeResult|LongModeResult) =>{}

语音识别信息回调。通过 send()接口发送语音数据后，语音识别结果将通过该回调事件返回

#### ShortModeResult

参数 | 类型 | 说明  
---|---|---  
text | string | asr 识别结果  
resultId | number | 结果序列号  
reformation | number | asr 识别返回， 1 代表修正 0 代表追加  
isLast | boolean | 是否为本次会话最后一条结果  
  
#### LongModeResult

**参数** | **类型** | **说明**  
---|---|---  
code | ResultCodeEnum | 结果代码描述  
midPoint | string | 识别中间 midPoint 结果即一句话中间结果  
endPoint | string | 识别中间 rec 结果即完整一句话或者最后一句结果  
beginTime | number | 开始时间，单位毫秒  
endTime | number | 结束时间，单位毫秒  
speaker | number | 当有角色分离时返回 0 表示当前说话人， 非 0 表示角色 id，有角色变化  
  
#### ResultCodeEnum

属性 | 说明  
---|---  
0 | 表示本次返回为识别中间结果，即一句话的完整结果，整个过程就是一句话中间结果，一句话完整结果…结束  
8 | 表示本次返回为识别中间 midPoint 结果，即一句话的中间结果。  
9 | 表示为客户端发完语音数据后的最后一句，客户端可以断开链接。  
  
##### 举例说明 9、8 和 0 的区别：

比如有两句话，一句是“今天天气怎么样”，下一句是“明天天气怎么样”， 第一次返回“今天”，就是 8 第二次返回“今天天气怎么样”，就是 0，表示一句话的结束 第三次返回“明天”，就是 8 第四次返回“明天天气怎么样”，就是 9 然后就结束了

### AsrInstance.onStarted = () =>{}

语音识别服务开启成功的回调。在服务开启成功后，语音识别服务将开始处理通过 send() 接口发送的数据

### AsrInstance.onFinished = () =>{}

语音识别服务结束回调。该回调可通过调用 finish()接口触发或者 endVadTime 超时自动触发

### AsrInstance.onError = (data:string, code: number) =>{}

语音识别服务异常回调

#### onError 回调参数定义

属性 | 类型 | 说明  
---|---|---  
data | string | 失败信息描述  
code | FailCodeEnum | 失败业务码  
  
#### FailCodeEnum

属性 | 说明  
---|---  
10000 | 参数校验失败  
10002 | 引擎服务异常  
10003 | 获取中间识别结果失败  
10004 | 获取最终识别结果失败  
10005 | 解析引擎数据异常  
10006 | 引擎内部错误  
10007 | 请求 nlu 出错  
10008 | 音频超长  
50001 | 使用超量  
  
#### createAsr 示例代码
[code] 
    import media from "@blueos.media.audio.mediaManager";
    import speech from "@blueos.ai.speech";
    
    /**
     * 录音状态
     * @enum {number}
     */
    const AudioRecordState = {
      /** 录音中 */
      record: 1,
      /** 录音结束 */
      stop: 2,
    
      ready: 3,
    };
    
    export default {
      data: {
        result: "结果",
        auth: {
          appId: "xxx",
          appKey: "xxxx",
        },
        asr: null,
        model: "",
        pagraph: "",
        audioRecorder: null,
        audioRecordState: AudioRecordState.stop,
      },
      createAsr() {
        this.model = speech.AsrModel.ShortInput;
        const asr = speech.createAsr({
          auth: this.auth,
          model: this.model,
          config: {
            audioType: speech.AudioType.Pcm,
            isWithPunctuation: true,
            endVadTime: 1000,
            isChinese2digital: false,
          },
        });
        const arrs = [];
        asr.onMessage = (data) => {
          console.log(`onmessage data :${JSON.stringify(data)}`);
          if (this.model === speech.AsrModel.LongListen || this.model === speech.AsrModel.LongSubtitle ) {
            if (data.midPoint) {
              this.result = data.midPoint;
            } else if (data.endPoint) {
              arrs.push(data.endPoint);
              this.pagraph = arrs.join("\n");
              this.result = "";
            }
          } else {
            this.result = data.text;
          }
        };
        asr.onStarted = () => {
          console.log("onstarted");
          this.audioRecordState = AudioRecordState.ready;
        };
        this.asr = asr;
      },
      async recordAudio() {
        console.log("recordAudio start");
    
        if (this.audioRecordState == AudioRecordState.record) {
          console.log(`正在录音中，不允许重复录音`);
          return;
        }
        if (this.audioRecordState != AudioRecordState.ready) {
          console.log(`asr 接口还没ready ，请稍后`);
          return;
        }
    
        const audioRecorder = media.createAudioRecord({
          channelConfig: 1,
          sampleRateInHz: 16000,
        });
    
        this.audioRecordState = AudioRecordState.record;
        audioRecorder.read({
          callback: (buffer) => {
            this.asr.send(buffer);
          },
        });
    
        this.asr.onError = (data, code) => {
          console.log(`ux ws.onError data:${data};code:${code}`);
          this.audioRecordState = AudioRecordState.stop;
          audioRecorder.stop();
          audioRecorder.release();
        };
        this.asr.onFinished = (reason) => {
          console.log(`ux onFinished ${reason}`);
          this.audioRecordState = AudioRecordState.stop;
          audioRecorder.stop();
          audioRecorder.release();
        };
    
        this.audioRecorder = audioRecorder;
      },
      startWebsocket() {
        this.asr.start();
      },
      releaseRecord() {
        if (this.audioRecorder) {
          this.audioRecorder.stop();
          this.audioRecorder.release();
          this.asr && this.asr.finish();
        }
        this.audioRecordState = AudioRecordState.stop;
      },
    };
[/code]

复制代码

### createTts(auth:Auth,engineId:string,clientInfo:ClientInfo):TtsInstance

创建 TTS 文字转语音服务实例

#### 参数

属性 | 必填 | 类型 | 默认值 | 说明  
---|---|---|---|---  
auth | 是 | Auth | 无 | 请求的身份验证信息，确保请求来源合法  
model | 是 | TtsModel | TtsModel.LongDefault | TTS 音频生成模型，支持短音频模型与长音频生成模型  
config | 否 | TtsConfig | 无 | 初始化 TTS 客户端相关配置  
isNeedPlay | 否 | boolean | false | 设置是否让TTS实例来播放声音，如果不需要TTS实例播放声音，则可以通过回调方法onMessage中 TtsResult.audio 获得合成语音的PCM类型数据  
  
#### Auth

属性 | 必填 | 类型 | 说明  
---|---|---|---  
appId | 是 | string | 应用 appId  
appKey | 是 | string | 应用 appKey  
  
注： appId & appKey，需要在 [vivo 开发者平台](<https://developers-ai.vivo.com.cn/documents?id=720>) 申请

#### TtsModel

属性 | 说明  
---|---  
ShortJovi | 短音频生成，适用于对话合成场景，比如语音助手的应用场景  
LongDefault | 长音频生成，适用于长文本合成场景，比如小说阅读，屏幕朗读  
  
#### TtsConfig

参数 | 类型 | 说明 | 必填 | 默认值  
---|---|---|---|---  
engineType | EngineType | 引擎类型, 支持中英文与优化效果 | 否 | EngineType.normal  
audioType | AudioType | 音频类型 | 否 | AudioType.Pcm  
sampleRate | number | 采样率。采样率越高，语音合成播放的效果越好，但是占用流量更多。可选值：[8000,16000,24000] | 否 | 24000  
speaker | ShortSpeaker|LongSpeaker | 语音合成的发音人 | 否 | ShortSpeaker.yige|LongSpeaker.yige  
speed | number | 语速，可选值：[0-100] | 否 | 50  
volume | number | 音量，可选值：[1-100] | 否 | 50  
isStream | boolean | 是否按照流式方式返回音频，假如设置为 false 则按标点分段返回 | 否 | true  
  
#### EngineType

属性 | 说明  
---|---  
normal | 普通效果  
enZh | 中英文  
en | 英文  
optimized | 优化效果  
  
#### AudioType

属性 | 说明  
---|---  
Pcm | pcm 音频类型  
Opus | opus 音频类型  
  
#### ShortSpeaker

属性 | 说明  
---|---  
yiwen | 奕雯  
yunye | 云野-温柔  
wanqing | 婉清  
xiaofu | 晓芙-少女  
yigeChild | 小萌-女童  
yige | 依格  
yiyi | 依依  
xiaoming | 小茗  
  
#### LongSpeaker

属性 | 说明  
---|---  
yiwen | 奕雯  
yunye | 云野-温柔  
yunyeNews | 云野-稳重  
yige | 依格-甜美  
yigeNews | 依格-稳重  
huaibin | 怀斌-浑厚  
zhaokun | 兆坤-成熟  
yaheng | 亚恒-磁性  
haiwei | 海蔚-大气  
qianqian | 倩倩-清甜  
enFemale | 英文女声  
xiaoyun | 晓云-稳重  
  
### TtsInstance.connect(data:string)

连接文本转语音服务

### TtsInstance.disconnect()

断开文本转语音服务，并且释放网络资源与相关播放器资源。建议在应用销毁时调用。

### TtsInstance.send(data:string)

发送文本内容

### TtsInstance.pauseAudio()

tts 实例服务暂停播放音频

### TtsInstance.resumeAudio()

tts 实例服务恢复播放音频

### TtsInstance.onConnected = () =>{}

文字转语音服务连接成功的回调。在调用 connect() 连接服务成功后触发。服务连接成功后，文字转语音服务将开始处理通过 send() 接口发送的文本内容。

### TtsInstance.onMessage = (result:TtsResult) =>{}

文本识别信息回调。通过 send()接口发送文本内容后，文本识别结果将通过该回调事件返回

#### TtsResult

参数 | 类型 | 说明  
---|---|---  
audio | Unit8Array | 合成后的音频片段  
status | number | 当前音频流状态，0 表示开始合成（返回的第一帧数据），1 表示合成中，2 表示合成结束(返回的最后一帧数据）  
progress | string | 合成进度，指当前合成文本的字符数-总的字符数。注：请注意合成是以句为单位切割的，若文本只有一句话，则每次返回结果是相同的。  
slice | int | 返回的第几帧数据  
  
### TtsInstance.onSpeakStarted = () =>{}

播放开始回调

### TtsInstance.onSpeakPaused = () =>{}

播放暂停回调，调用了TtsInstance.pauseAudio()后会触发此回调

### TtsInstance.onSpeakProgress = (progress:string) =>{}

播放进度信息回调。开始播放后，播放进度信息会通过该回调多次触发，直到播放完毕。

#### 返回值

参数 | 类型 | 说明  
---|---|---  
progress | string | 播放进度，指当前播放文本的字符数-总的字符数。注：请注意合成是以句为单位切割的，若文本只有一句话，则每次返回结果是相同的。  
  
### TtsInstance.onSpeakFinished = () =>{}

播放完毕回调

### TtsInstance.onSpeakResumed = () =>{}

恢复播放回调，调用了TtsInstance.resumeAudio()后会触发此回调

### TtsInstance.onError = (data:string, code: number) =>{}

文字转语音服务异常回调

#### onError 回调参数定义

属性 | 类型 | 说明  
---|---|---  
data | string | 失败信息描述  
code | FailCodeEnum | 失败业务码  
  
#### FailCodeEnum

属性 | 说明  
---|---  
10000 | 缺少请求参数或者签名错误 （http 协议返回，status=400）  
10001 | 升级到 websocket 协议失败（http 协议返回，status=400）  
10010 | 发送数据不是 json 格式  
10011 | 发送文本时，缺少必要的参数  
10012 | 发送文本时，签名错误  
以下是逻辑层服务器错误 |   
10030 | 发送文本到引擎时错误  
10031 | 获取 audio 数据发生错误  
10032 | 无可用的引擎服务器  
以下是引擎层服务器错误 |   
11001 | 负载过大，拒绝新的请求  
11002 | 请求头协议错误  
11003 | 设置合成文本的请求参数错误  
11004 | 获取 andio 数据的请求参数错误  
11005 | session 重复了  
11006 | 获取数据时，找到不到 session  
11007 | 创建引擎错误  
11008 | 向算法引擎获取数据时出错  
11009 | opus 压缩出现问题  
11010 | 输入的合成文本不合法  
以下是语音服务层错误 |   
20000 | 语音正在合成中，不允许发送新的文字  
20010 | 语音缓存已满  
20030 | 语音服务已经断连  
  
#### createTts 示例代码
[code] 
    import media from "@blueos.media.audio.mediaManager";
    import speech from "@blueos.ai.speech";
    
    /**
     * 录音状态
     * @enum {number}
     */
    const AudioRecordState = {
      /** 录音结束 */
      init: 0,
      inited: 1,
      play: 1,
      stop: 2,
      release: 3,
    };
    
    export default {
      data: {
        title: "欢迎体验 AI 服务",
        inputtext: "你好",
        auth: {
          appId: "您的appId",
          appKey: "您的appKey",
        },
        tts: null,
        model: "",
        audioRecorder: null,
        audioRecordState: AudioRecordState.stop,
      },
    
      createShort() {
        this.model = speech.TtsModel.ShortJovi;
        this.createTts();
      },
      createLong() {
        this.model = speech.TtsModel.LongDefault;
        this.createTts();
      },
      createTts() {
        const tts = speech.createTts({
          auth: this.auth,
          model: this.model,
          config: {
            speaker: speech.ShortSpeaker.yige,
            sampleRate: 24000,
            isStream: false,
          },
        });
        tts.onMessage = (data) => {
          if (this.audioRecorder) {
            this.audioRecorder.write({
              buffer: data.audio.buffer,
            });
          }
        };
        tts.onConnected = () => {
          logtool("onConnected");
          this.modetext = "短语音实例已连接"
        };
    
        this.tts = tts;
      },
      async createAudio() {
        const audioRecorder = media.createAudioTrack({
          sampleRateInHz: 24000,
          contentType: "speech",
          channelConfig: 1,
          audioFormat: 16,
        });
        audioRecorder.onError = function () {
          logtool(`createAudioRecord error`);
          this.audioRecordState = AudioRecordState.stop;
        };
        this.audioRecordState = AudioRecordState.inited;
        logtool(`createAudioRecord success`);
        this.audioRecorder = audioRecorder;
      },
      connect() {
        this.tts && this.tts.connect()
      },
      send() {
        this.tts && this.tts.send(this.inputtext);
      },
      stop() {
        this.audioRecordState = AudioRecordState.stop
        this.audioRecorder && this.audioRecorder.stop();
      },
      release() {
        this.audioRecordState = AudioRecordState.release
        this.audioRecorder && this.audioRecorder.release();
      },
      play() {
        this.audioRecordState = AudioRecordState.play
        this.audioRecorder && this.audioRecorder.play();
      },
      releaseRecord() {
        if (this.audioRecorder) {
          this.audioRecorder.stop();
          this.audioRecorder.release();
        }
      },
    };
[/code]

复制代码

上一篇

[视觉技术](</api/ai/vision/>)

下一篇

[自然语言处理](</api/ai/nlp/>)