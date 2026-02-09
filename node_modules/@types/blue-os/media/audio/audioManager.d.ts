/**
 * 音频管理
 * 接口声明: {"name": "blueos.media.audio.audioManager"}
 */
declare module '@blueos.media.audio.audioManager' {
  /**
   * @desc 设置音量。
   * @param {obj} 设置音量入参 {object}
   * @version 1
   */
  const setVolume: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'RING'
      | 'MEDIA'
    /**
     *  @desc 音量等级, 设置的音量，0.00-1.00 之间。
     */
    volume: number
    /**
     *  @desc 成功回调
     */
    success?: () => void
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
   * @desc 获取音量。
   * @param {obj} 获取音量入参 {object}
   * @version 1
   */
  const getVolume: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'

    /**
     *  @desc 成功回调
     *  @param {num} 回调返回值 {number}
     */
    success?: (num: number) => void
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
   * @desc 同步获取音量。
   * @param {obj} 同步获取音量入参 {object}
   * @version 1
   * @returns 返回音量值 {number}
   */
  const getVolumeSync: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'
  }) => number

  /**
   * @desc 监听音量变化。
   * @param {obj} 监听音量变化入参 {object}
   * @version 1
   */
  const subscribe: (obj: {
    /**
     *  @desc volume：表示音量
     */
    type: string
    /**
     *  @desc 监听音量变化数据回调函数的执行
     *  @param {data} 监听变化的回调返回值 {object}
     */
    callback: (data: {
      /**
       *  @desc 音量流类型
       */
      volumeType:
        | 'SYSTEM'
        | 'RING'
        | 'MEDIA'
        | 'VOICE_CALL'
        | 'ALARM'
        | 'NOTIFICATION'
        | 'BLUETOOTH_SCO'
        | 'TTS'
        | 'SPORT_BROADCAST'

      /**
       *  @desc 音量等级, 设置的音量，0.00-1.00 之间
       */
      value: number
    }) => void
    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   *  @desc 取消监听音量变化
   *  @version 1
   */
  const unsubscribe: () => void

  /**
   * @desc 获取指定流的最小音量。
   * @param {obj} 获取指定流的最小音量入参 {object}
   * @version 1
   * @returns 返回指定流的最小音量值 {number}
   */
  const getMinVolume: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'
  }) => number

  /**
   * @desc 获取指定流的最大音量。
   * @param {obj} 获取指定流的最大音量入参 {object}
   * @version 1
   * @returns 返回指定流的最大音量值 {number}
   */
  const getMaxVolume: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'
  }) => number

  /**
   * @desc 设置指定音量流静音或取消静音。
   * @param {obj} 设置指定音量流静音或取消静音入参 {object}
   * @version 1
   */
  const mute: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'

    /**
     *  @desc 是否将音量流静音（1:设置静音 ；0:设置取消静音)
     */
    isMute: number

    /**
     *  @desc 成功回调
     */
    success?: () => void
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
   * @desc 获取指定音量流是否被静音。
   * @param {obj} 获取指定音量流是否被静音入参 {object}
   * @version 1
   */
  const isMute: (obj: {
    /**
     *  @desc 音量流类型
     */
    volumeType:
      | 'SYSTEM'
      | 'RING'
      | 'MEDIA'
      | 'VOICE_CALL'
      | 'ALARM'
      | 'NOTIFICATION'
      | 'BLUETOOTH_SCO'
      | 'TTS'
      | 'SPORT_BROADCAST'

    /**
     *  @desc 成功回调
     *  @param {num} 回调返回值 {number}
     */
    success?: (num: number) => void
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
   * @desc 获取麦克风是否为静音状态。
   * @param {obj} 获取麦克风是否为静音状态入参 {object}
   * @version 1
   */
  const isMicrophoneMute: (obj: {
    /**
     *  @desc 成功回调
     *  @param {num} 回调返回值,1:设置静音 ；0:设置取消静音)。 {number}
     */
    success?: (num: number) => void
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
