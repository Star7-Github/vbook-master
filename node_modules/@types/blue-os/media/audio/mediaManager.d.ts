/**
 * 提供音频播放，录音相关的功能接口
 * 接口声明: {"name": "blueos.media.audio.mediaManager"}
 */
declare module '@blueos.media.audio.mediaManager' {

  /**
   * @desc 创建音频播放的实例。
   * @param {obj} 创建音频播放的实例入参 {object}
   * @version 1
   * @returns 返回音频播放的实例 {object}
   */
  const createAudioPlayer: (obj?: {
    /**
     * @desc 用于音量策略，默认值为music。系统可以通过不同的 streamType 来管理音频的音量，例如：播放音乐设置为 music，消息提示音设置为 ring 。
     */
    streamType?: string
    /**
     * @desc 用于音频后处理，默认值为music。系统会根据不同的 contentType 对声音进行优化处理。
     */
    contentType?: string
    /**
     * @desc 指定使用音频类型 ，默认值为music。用于对音频冲突的仲裁，多个相同的streamUsage音频同时播放时，系统只会保留一个，其他的会被打断。
     */
    streamUsage?: string
  }) => {
    /**
     * @desc 播放的音频媒体 uri。
     */
    src: string
    /**
     * @desc 音频的当前进度，单位秒，对值设置可以调整播放进度。
     */
    currentTime: number
    /**
     * @desc 音频文件的总时长，单位秒，未知返回 NaN。
     */
    duration: number
    /**
     * @desc 播放状态，分别为'play','pause','stop','idle'。
     */
    state: string
    /**
     * @desc 控制音频的循环播放，playcount == 1 或 playcount == 0：不开启循环; playcount >1：开启循环，且循环指定的次数; playcount == -1：开启循环，且循环无限次数
     */
    playcount: number

    /**
     * @desc 开始播放音频。
     */
    play: () => void
    /**
     * @desc 暂停播放音频。
     */
    pause: () => void
    /**
     * @desc 停止音频播放，可以通过 play 重新播放音频。
     */
    stop: () => void
    /**
     * @desc 释放音频资源。
     */
    release: () => void

    /**
     * @desc 在音频 play 后的回调事件
     */
    onPlay: () => void
    /**
     * @desc 在音频 stop 后的回调事件
     */
    onStop: () => void
    /**
     * @desc 在音频 pause 后的回调事件
     */
    onPause: () => void
    /**
     * @desc 播放结束时的回调事件
     */
    onEnded: () => void
    /**
     * @desc 播放发生错误时的回调事件
     */
    onError: () => void
    /**
     * @desc 在 currentTime 属性更新时会触发的回调事件
     */
    onTimeUpdate: () => void
    /**
     * @desc 音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。
     */
    onInterrupt: () => void

    /**
     * @desc 第一次获取到音频数据的回调事件。
     */
    onLoadedData: () => void

    /**
     * @desc 音乐面板点击下一首按钮时触发。
     */
    onNext: () => void

    /**
     * @desc 音乐面板点击上一首按钮时触发。
     */
    onPrevious: () => void

    /**
     * @desc 在 duration 属性更新时被触发的回调事件。
     */
    onDurationChange: () => void
  }

  /**
   * @desc 创建音频流式播放的实例。
   * @param {obj} 创建音频流式播放的实例入参 {object}
   * @version 1
   * @returns 返回音频流式播放的实例 {object}
   */
  const createAudioTrack: (obj?: {
    /**
     * @desc 用于音量策略，默认值为music。系统可以通过不同的 streamType 来管理音频的音量，例如：播放音乐设置为 music，消息提示音设置为 ring 。
     */
    streamType?: string
    /**
     * @desc 用于音频后处理，默认值为music。系统会根据不同的 contentType 对声音进行优化处理。
     */
    contentType?: string
    /**
     * @desc 指定使用音频类型 ，默认值为music。用于对音频冲突的仲裁，多个相同的streamUsage音频同时播放时，系统只会保留一个，其他的会被打断。
     */
    streamUsage?: string
    /**
     * @desc 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000
     */
    sampleRateInHz?: number
    /**
     * @desc 捕获音频的声道数目，1：单声道，2：立体声；默认值为 1
     */
    channelConfig?: number
    /**
     * @desc 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16
     */
    audioFormat?: number
  }) => {
    /**
     * @desc 播放状态，分别为'play','pause','stop'
     */
    state: string

    /**
     * @desc 开始播放音频
     */
    play: () => void

    /**
     * @desc 暂停播放音频
     */
    pause: () => void

    /**
     * @desc 停止音频播放，可以通过 play 重新播放音频
     */
    stop: () => void

    /**
     * @desc 释放音频资源
     */
    release: () => void

    /**
     * @desc 写入音频数据。
     * @param {obj} 写入音频数据入参 {object}
     */
    write: (obj: {
      /**
       * @desc 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16
       */
      buffer: Uint8Array
      /**
       *  @desc 成功回调
       *  @param {data} 回调函数返回值 {object}
       */
      success?: (data: {
        /**
         * @desc 写入状态，1 - 成功 2 - 失败 3 - 参数异常
         */
        state: number
      }) => void
      /**
       * 	@desc 失败的回调函数
       * 	@param {data} 失败回调的返回值 {any}
       *	@param {code} 失败回调的返回状态码 {number}
       */
      fail?: (data: any, code: number) => void
    }) => void

    /**
     * @desc 在音频 play 后的回调事件
     */
    onPlay: () => void
    /**
     * @desc 在音频 stop 后的回调事件
     */
    onStop: () => void
    /**
     * @desc 在音频 pause 后的回调事件
     */
    onPause: () => void
    /**
     * @desc 播放结束时的回调事件
     */
    onEnded: () => void
    /**
     * @desc 播放发生错误时的回调事件
     */
    onError: () => void
    /**
     * @desc 在 currentTime 属性更新时会触发的回调事件
     */
    onTimeupdate: () => void
    /**
     * @desc 音频打断事件，当前音频被其他有相同音频类型的音频抢夺时，被停止或者恢复的通知。或者当前音频被当外部设备操作打断的通知。
     */
    onInterrupt: () => void
  }

  /**
   * @desc 创建录音实例。
   * @param {obj} 创建录音实例入参 {object}
   * @version 1
   * @returns 返回录音实例实例 {object}
   */
  const createAudioRecord: (obj?: {
    /**
     * @desc 采样率，单位赫兹，可选值为：8000、 16000；默认值为 16000
     */
    sampleRateInHz?: number
    /**
     * @desc 音频的声道数目，1：单声道，2：立体声；默认值为 1
     */
    channelConfig?: number
    /**
     * @desc 样本的分辨率，单位 bit，可选值为： 8、16；默认值为 16
     */
    audioFormat?: number
  }) => {
    /**
     * @desc 开始录音，并在录音结束后生成音频文件。
     * @param {obj} 开始录音，并在录音结束后生成音频文件入参 {object}
     */
    start: (obj: {
      /**
       * @desc 需要输出到文件的 uri
       */
      uri: string
      /**
       *  @desc 成功回调
       */
      success: () => void
      /**
       * 	@desc 失败的回调函数
       * 	@param {data} 失败回调的返回值 {any}
       *	@param {code} 失败回调的返回状态码 {number}
       */
      fail: (data: any, code: number) => void
      /**
       * @desc 执行结束后的回调
       */
      complete: () => void
    }) => void

    /**
     * @desc 开始录音，录音的过程中实时返回音频内容。
     * @param {obj} 开始录音入参 {object}
     */
    read: (obj: {
      /**
       * 	@desc 失败的回调函数
       * 	@param {buffer} 回调的返回值 {Uint8Array}
       */
      callback: (buffer: Uint8Array) => void
    }) => void

    /**
     * @desc 停止录音。
     */
    stop: () => void

    /**
     * @desc 释放录音资源。
     */
    release: () => void

    /**
     * @desc 录音发生错误时的回调事件。
     */
    onError: () => void

    /**
     * @desc 录音开始时的回调事件。
     */
    onStart: () => void

    /**
     * @desc 录音停止时的回调事件。
     */
    onStop: () => void
  }
}
