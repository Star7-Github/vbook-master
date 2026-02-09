/**
 * 传感器
 * 接口声明: {"name": "blueos.hardware.sensor.sensor"}
 */
declare module '@blueos.hardware.sensor.sensor' {
  /**
   * @desc 监听重力感应数据。如果多次调用，仅最后一次调用生效
   * @param {obj} 监听重力感应数据入参 {object}
   * @version 1
   */
  const subscribeAccelerometer: (obj: {
    /**
     * @desc 重力感应数据变化后会回调此函数
     * @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * @desc x 轴坐标
       */
      x: number
      /**
       * @desc y 轴坐标
       */
      y: number
      /**
       * @desc z 轴坐标
       */
      z: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听重力感应数据
   * @version 1
   */
  const unsubscribeAccelerometer: () => void

  /**
   * @desc 监听罗盘数据。如果多次调用，仅最后一次调用生效
   * @param {obj} 监听罗盘数据入参 {object}
   * @version 1
   */
  const subscribeCompass: (obj: {
    /**
     * @desc 罗盘数据变化后会回调此函数。
     * @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * 表示设备的y轴和地球磁场北极之间的角度，当面朝北，角度为0；朝南角度为π；朝东角度π/2；朝西角度-π/2
       */
      direction: number
      /**
       * 精度
       */
      accuracy: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听罗盘数据
   * @version 1
   */
  const unsubscribeCompass: () => void

  /**
   * @desc 监听计步传感器数据。如果多次调用，仅最后一次调用生效。
   * @param {obj} 监听计步传感器数据入参 {object}
   * @version 1
   */
  const subscribeStepCounter: (obj: {
    /**
     *  @desc 计步传感器数据变化后会回调此函数
     *  @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * 光计步传感器当前累计记录的步数。每次手机重启，这个值就会从0开始重新计算
       */
      steps: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听计步传感器数据。
   * @version 1
   */
  const unsubscribeStepCounter: () => void

  /**
   * @desc 监听设备佩戴状态传感器数据。如果多次调用，仅最后一次调用生效。
   * @param {obj} 监听设备佩戴状态传感器数据入参 {object}
   * @version 1
   */
  const subscribeOnBodyState: (obj: {
    /**
     *  @desc 监听设备佩戴状态传感器数据变化后会回调此函数
     *  @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * @desc 是否已佩戴。
       */
      value: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听计步传感器数据。
   * @version 1
   */
  const unsubscribeOnBodyState: () => void

  /**
   * @desc 获取设备佩戴状态。
   * @param {obj} 获取设备佩戴状态入参 {object}
   * @version 1
   */
  const getOnBodyState: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 是否已佩戴。
       */
      value: boolean
    }) => void
    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 执行结束后的回调
     */
    complete?: () => void
  }) => void

  /**
   * @desc 监听陀螺仪传感器数据。如果多次调用，仅最后一次调用生效。。
   * @param {obj} 监听陀螺仪传感器数据入参 {object}
   * @version 1
   */
  const subscribeGyroscope: (obj: {
    /**
     * @desc 陀螺仪传感器数据变化后会回调此函数
     * @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * @desc x 轴坐标
       */
      x: number
      /**
       * @desc y 轴坐标
       */
      y: number
      /**
       * @desc z 轴坐标
       */
      z: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听陀螺仪数据。
   * @version 1
   */
  const unsubscribeGyroscope: () => void

  /**
   * @desc 监听气压传感器数据。如果多次调用，仅最后一次调用生效。
   * @param {obj} 监听气压传感器数据入参 {object}
   * @version 1
   */
  const subscribeBarometer: (obj: {
    /**
     *  @desc 监听设备佩戴状态传感器数据变化后会回调此函数
     *  @param {ret} 回调函数返回值 {object}
     */
    callback: (ret: {
      /**
       * @desc 气压值，单位：帕斯卡。
       */
      pressure: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听压传感器。。
   * @version 1
   */
  const unsubscribeBarometer: () => void

  /**
   * @desc 监听抬腕。如果多次调用，仅最后一次调用生效。
   * @param {obj} 监听抬腕入参 {object}
   * @version 1
   */
  const subscribeWristLift: (obj: {
    /**
     *  @desc 监听抬腕数据变化后会回调此函数
     */
    callback: () => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听监听抬腕。。
   * @version 1
   */
  const unsubscribeWristLift: () => void

  /**
   * @desc 监听连续转腕。如果多次调用，仅最后一次调用生效。
   * @param {obj} 监听连续转腕入参 {object}
   * @version 1
   */
  const subscribeContinuousWristTurn: (obj: {
    /**
     *  @desc 监听抬腕数据变化后会回调此函数
     */
    callback: () => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 取消监听监听抬腕。
   * @version 1
   */
  const unsubscribeContinuousWristTurn: () => void
}
