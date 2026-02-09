/**
 * 电量信息
 * 接口声明: {"name": "blueos.hardware.battery.battery"}
 */
declare module '@blueos.hardware.battery.battery' {
  /**
   * @desc 获取当前设备的电量信息。
   * @param {obj} 获取当前设备的电量信息入参 {object}
   * @version 1
   */
  const getStatus: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调的返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 是否正在充电
       */
      charging: boolean
      /**
       * @desc 当前电量，0.0 - 1.0 之间
       */
      level: number
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
   * @desc 同步获取当前设备的电量信息。
   * @version 1
   * @returns 返回当前设备的电量信息 {object}
   */
  const getStatusSync: () => {
    /**
     * @desc 是否正在充电
     */
    charging: boolean
    /**
     * @desc 当前电量，0.0 - 1.0 之间
     */
    level: number
  }
}
