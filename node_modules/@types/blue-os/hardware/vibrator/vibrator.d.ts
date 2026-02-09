/**
 * 震动
 * 接口声明: {"name": "blueos.hardware.vibrator.vibrator"}
 */
declare module '@blueos.hardware.vibrator.vibrator' {
  /**
   * @desc 触发震动
   * @param {obj} 触发震动入参 {object}
   * @version 1
   */
  const vibrate: (obj: {
    /**
     * @desc 振动模式，"long"表示长振动，"short"表示短振动。默认为 long
     */
    mode?: string
  }) => void

  /**
   * @desc 开始震动
   * @param {obj} 开始震动入参 {object}
   * @version 1
   */
  const start: (obj: {
    /**
     * @desc 震动优先级 0-8，数字越小优先级越高
     */
    priority: number
    /**
     * @desc 震动持续时间(单位 ms)
     */
    duration: number
    /**
     * @desc 震动间隔时间(单位 ms)
     */
    interval: number
    /**
     * @desc 震动次数
     */
    count: number
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 底层分配唯一的 ID 并返回给调用者
       */
      id: number
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
   * @desc 停止震动
   * @param {key} 停止震动入参 {number}
   * @version 1
   * @returns 返回停止震动结果 {boolean}
   */
  const stop: (key: number) => boolean


  /**
   * @desc 获取系统默认震动模式
   * @version 1
   * @returns 返回获取系统默认震动模式结果 {number}
   */
  const getSystemDefaultMode: () => number
}
