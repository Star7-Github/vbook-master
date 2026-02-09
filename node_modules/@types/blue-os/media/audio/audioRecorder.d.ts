/**
 * 录音的简单接口，如果要实现更复杂的功能，请访问{@link mediaManager}
 * 接口声明: {"name": "blueos.media.audio.audioRecorder"}
 */
declare module '@blueos.media.audio.audioRecorder' {
  /**
   * @desc 开始录音。默认录制为 PCM 格式，16000 采样率，16bit 位宽，2 通道。
   * @param {obj} 开始录音入参 {object}
   * @version 1
   */
  const start: (obj: {
    /**
     *  @desc 成功回调
     *  @param {data} 回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 录音文件的存储路径，在应用的缓存目录中
       */
      uri: string
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

  /**
   * @desc 停止录音
   * @version 1
   */
  const stop: () => void

  /**
   * @desc 释放录音资源。
   * @version 1
   */
  const release: () => void

  /**
   * @desc 录音发生错误时的回调事件。
   * @version 1
   */
  let onError: () => void

  /**
   * @desc 录音开始时的回调事件。
   * @version 1
   */
  let onStart: () => void

  /**
   * @desc 录音停止时的回调事件。
   * @version 1
   */
  let onStop: () => void
}
