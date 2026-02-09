/**
 * 地理位置
 * 接口声明: {"name": "blueos.hardware.location.location"}
 */
declare module '@blueos.hardware.location.location' {
  /**
   * @desc 获取地理位置
   * @param {obj} 获取地理位置入参 {object}
   * @version 1
   */
  const getLocation: (obj: {
    /**
     * @desc 设置超时时间，单位是 ms，默认值为 30000。在权限被系统拒绝或者定位设置不当的情况下，有可能永远不能返回结果，因而需要设置超时。超时后会使用 fail 回调
     */
    timeout?: number
    /**
     * @desc 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为wgs84
     */
    coorType?: string
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {object}
     */
    success: (data: {
      /**
       * @desc 经度
       */
      longitude: number
      /**
       * @desc 纬度
       */
      latitude: number
      /**
       * @desc 精确度
       */
      accuracy: number
      /**
       * @desc 时间
       */
      time: number
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
   * @desc 监听地理位置。如果多次调用，仅最后一次调用生效
   * @param {obj} 监听地理位置入参 {object}
   * @version 1
   */
  const subscribe: (obj: {
    /**
     * @desc 是否持久化订阅，默认为false。机制：设置为true，页面跳转，不会自动取消订阅，需手动取消订阅
     */
    reserved?: boolean
    /**
     * @desc 坐标系类型，可选值可通过 getSupportedCoordTypes 获取，默认为wgs84
     */
    coorType?: string
    /**
     * @desc 每次位置信息发生变化，都会被回调
     * @param {data} 监听地理位置入参 {object}
     */
    callback: (data: {
      /**
       * @desc 经度
       */
      longitude: number
      /**
       * @desc 纬度
       */
      latitude: number
      /**
       * @desc 精确度
       */
      accuracy: number
      /**
       * @desc 时间
       */
      time: number
    }) => void

    /**
     * @desc 失败回调
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * 取消监听地理位置
   */
  const unsubscribe: () => void

  /**
   * @desc 获取支持的坐标系类型
   * @returns 字符串数组。当前支持的坐标系类型，如['wgs84']
   */
  const getSupportedCoordTypes: () => string[]
}
