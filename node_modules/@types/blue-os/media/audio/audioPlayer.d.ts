/**
 * 音频播放的简单接口，如果想实现多音频的播放，请访问{@link mediaManager}
 * 接口声明: {"name": "blueos.media.audio.audioPlayer"}
 */
declare module '@blueos.media.audio.audioPlayer' {
  /**
   * @desc 播放的音频媒体uri
   */
  let src: string

  /**
   * @desc 音频的当前进度，单位秒，对值设置可以调整播放进度
   */
  let currentTime: number

  /**
   * @desc 音频的播放时长，单位秒，未知返回NaN
   */
  let duration: number

  /**
   * @desc 指定使用音频类型，可设置的值有 music、voicecall，值为 music 时使用扬声器播放，voicecall 时使用听筒播放，默认为 music
   */
  let streamType: string



  /**
   * @desc 在调用play方法后或者autoplay为true时的回调事件
   * @version 1
   */
  let onPlay: () => void

  /**
   * @desc 在调用pause方法后的回调事件
   * @version 1
   */
  let onPause: () => void

  /**
   * @desc 在调用 stop 方法后的回调事件
   * @version 1
   */
  let onStop: () => void

  /**
   * @desc 第一次获取到音频数据的回调事件
   * @version 1
   */
  let onLoadedData: () => void

  /**
   * @desc 播放结束时的回调事件
   * @version 1
   */
  let onEnded: () => void

  /**
   * @desc 播放时长变化时的回调事件
   * @version 1
   */
  let onDurationChange: () => void

  /**
   * @desc 播放发生错误时的回调事件
   * @version 1
   */
  let onError: () => void

  /**
   * @desc 播放进度变化时触发，触发频率4HZ
   * @version 1
   */
  let onTimeUpdate: () => void

  /**
   * @desc 开始播放音频
   * @version 1
   */
  const play: () => void

  /**
   * @desc 暂停播放音频
   * @version 1
   */
  const pause: () => void

  /**
   * @desc 停止音频播放，可以通过 play 重新播放音频
   * @version 1
   */
  const stop: () => void

  /**
   * @desc 获取当前播放状态数据
   * @param {obj} 获取当前播放状态数据入参 {object}
   * @version 1
   */
  const getPlayState: (obj: {
    /**
     *  @desc 成功回调
     *  @param {data} 回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 播放状态,分别为'play','pause','stop'
       */
      state: string
      /**
       * @desc 当前播放的音频媒体 uri，停止时返回空字符串
       */
      src: string
      /**
       * @desc 当前音频的当前进度，单位秒,停止时返回-1
       */
      currentTime: number
    }) => void
    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 执行结束后的回调
     */
    complete?: () => void
  }) => void
}
