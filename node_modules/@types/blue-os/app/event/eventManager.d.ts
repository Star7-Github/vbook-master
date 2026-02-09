/**
 * 发布公共事件
 * 接口声明: {"name": "blueos.app.event.eventManager"}
 */
declare module '@blueos.app.event.eventManager' {
  enum CommonEvent {
    /**
     * 即将关机
     */
    Shutdown = 'usual.event.SHUTDOWN',
  }
  /**
   * @desc 发布公共事件
   * @param {obj} 发布公共事件入参 {object}
   * @version 1
   */
  const publish: (obj: {
    /**
     *  @desc 事件名称, 公共事件保留名称被系统占用，请勿使用
     */
    eventName: string

    /**
     *  @desc 事件参数
     */
    options?: {
      /**
       *  @desc 事件参数
       */
      params: Record<any, any>
      /**
       *  @desc 订阅者的权限, 拥有权限的包才能收到发送的事件
       */
      permissions: Array<string>
    }
  }) => void

  /**
   * @desc 订阅公共事件
   * @param {obj} 订阅公共事件入参 {object}
   * @version 1
   */
  const subscribe: (obj: {
    /**
     *  @desc 事件名称 {@link SystemEvent}
     */
    eventName: string
    /**
     *  @desc 事件回调
     *  @param {data} 回调的返回值 {object}
     */
    callback: (data: {
      /**
       *  @desc 事件参数
       */
      params: Record<any, any>
      /**
       *  @desc 事件推送者包名
       */
      package: string
    }) => void
  }) => number

  /**
   * @desc 取消订阅公共事件
   * @param {obj} 取消订阅公共事件入参 {object}
   * @version 1
   */
  const unsubscribe: (obj: {
    /**
     *  @desc 订阅 id
     */
    id: number
  }) => void
}
