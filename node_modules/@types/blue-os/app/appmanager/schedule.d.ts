/**
 * 定时任务
 * 接口声明: {"name": "blueos.app.appmanager.schedule"}
 */
declare module '@blueos.app.appmanager.schedule' {
  /**
   * @desc 设置定时任务
   * @param {obj} 设置定时任务入参 {object}
   * @version 1
   */
  const scheduleJob: (obj: {
    /**
     *  @desc  硬件时间，2 真实时间流逝，前者可以通过修改系统时间触发triggerMethod，后者要通过真实时间的流逝，即使在休眠状态，时间也会被计算
     */
    type: number
    /**
     *  @desc 若 type 为 1，则为首次执行时间的时间戳，即从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数；若 type 为 2，则为当前时间距离首次执行时间的间隔，单位毫秒。
     */
    timeout: number
    /**
     *  @desc app.ux 中定义的方法名，由后台拉起时调用
     */
    triggerMethod: string
    /**
     *  @desc 周期性执行的间隔，毫秒为单位，不传就不重复执行
     */
    interval: number
    /**
     *  @desc 任务参数
     */
    params: Record<any, any>
    /**
     *  @desc 成功回调
     *  @param {data} 返回值 {object}
     */
    success?: (data: {
      /**
       *  @desc 底层分配唯一的 ID
       */
      id: number
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
   * @desc 取消定时任务
   * @param {id} 取消定时任务入参 {number}
   * @version 1
   * @returns 返回结果值 {boolean}
   */
  const cancel: (id: number) => boolean
}
