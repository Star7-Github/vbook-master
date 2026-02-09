/**
 * WebSocket
 * 接口声明: {"name": "blueos.network.webSocket"}
 */
declare module '@blueos.network.webSocket' {
  /**
   * @desc 创建 websocket 实例。
   * @param {obj} 创建 websocket实例入参 {object}
   * @version 1
   * @returns 返回创建websocket实例的对象{object}
   */
  const create: (obj: {
    /**
     *  @desc 请求url， 必须是wss或ws协议
     */
    url: string
    /**
     *  @desc 请求头，header中不能设置Referer，UserAgent设置
     */
    header?: Record<string, any>
    /**
     *  @desc 子协议组
     */
    protocols?: string[]
  }) => {
    /**
     * @desc 向服务器发送数据
     * @param {obj} 向服务器发送数据入参 {object}
     */
    send: (obj: {
      /**
       * @desc 发送的消息
       */
      data: string | ArrayBuffer
      /**
       * @desc 成功回调
       */
      success?: () => void
      /**
       * @desc 失败回调
       * @param {data} 失败回调的返回值 {any}
       * @param {code} 失败回调的返回状态码 {number}
       */
      fail?: (data: any, code: number) => void
    }) => void

    /**
     * @desc 关闭当前连接
     * @param {obj} 关闭当前连接入参 {object}
     */
    close: (obj: {
      /**
       * @desc 关闭链接的状态号 ，默认1000
       */
      code?: number
      /**
       * @desc 关闭的原因
       */
      reason?: string
      /**
       * @desc 成功回调
       */
      success?: () => void
      /**
       * @desc 失败回调
       * @param {data} 失败回调的返回值 {any}
       * @param {code} 失败回调的返回状态码 {number}
       */
      fail?: (data: any, code: number) => void
    }) => void

    /**
     * @desc 用于指定连接成功后的回调函数
     */
    onOpen: () => void

    /**
     * @desc 用于指定当从服务器接受到信息时的回调函数
     * @param {data} 用于指定当从服务器接受到信息时的回调函数返回值 {object}
     */
    onMessage: (data: {
      /**
       * @desc 监听器接收到的消息, 消息类型与发送类型一致
       */
      data: string | ArrayBuffer
    }) => void

    /**
     * @desc 用于指定连接关闭后的回调函数
     * @param {data} 用于指定连接关闭后的回调函数返回值 {object}
     */
    onClose: (data: {
      /**
       * @desc 服务器返回关闭的状态码
       */
      code: number
      /**
       * @desc 服务器返回的关闭原因
       */
      reason: string
      /**
       * @desc 是否正常关闭
       */
      wasClean: boolean
    }) => void

    /**
     *  @desc 用于指定连接失败后的回调函数
     *  @param {data} 用于指定连接失败后的回调函数返回值 {object}
     */
    onError: (data: {
      /**
       * @desc 监听器接收到的消息
       */
      data: string
    }) => void
  }
}
