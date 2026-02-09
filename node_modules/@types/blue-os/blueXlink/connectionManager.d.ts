/**
 * 设备通信
 * 接口声明: {"name": "blueos.bluexlink.connectionManager"}
 */
declare module '@blueos.bluexlink.connectionManager' {
  /**
   * @desc 获取手表和手机的连接状态
   * @param {obj} 获取手表和手机的连接状态入参 {object}
   * @version 1
   */
  const getPeerDeviceStatus: (obj: {
    /**
     *  @desc 成功回调
     *  @param {data} 返回值 {object}
     */
    success?: (data: {
      /**
       *  @desc 0:未连接。1:已连接
       */
      status: number
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
   * @desc 创建连接实例
   * @param {obj} 创建连接实例入参 {object}
   * @version 1
   */
  const instance: (obj: {
    /**
     *  @desc 手机 APP 包名
     */
    package: string
    /**
     *  @desc 手机 APP 的证书指纹信息
     */
    fingerprint: string
  }) => {
    /**
     * @desc 获取App连接状态
     * @param {obj}  获取App连接状态入参 {object}
     */
    getReadyState: (obj: {
      /**
       *  @desc 成功回调
       *  @param {data} 返回值 {object}
       */
      success?: (data: {
        /**
         *  @desc 0:未连接。1:已连接
         */
        status: number
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
     * @desc 查询App版本状态
     * @param {obj} 查询App版本状态入参 {object}
     */
    getPeerDeviceClientVersion: (obj: {
      /**
       *  @desc 成功回调
       *  @param {data} 返回值 {object}
       */
      success?: (data: {
        /**
         *  @desc 手机应用版本号，有则正常返回，-1:未安装
         */
        version: number
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
     * @desc 用于指定连接打开时的回调函数
     */
    onOpen: () => void

    /**
     * @desc 用于指定连接关闭时回调函数
     */
    onClose: () => void

    /**
     * @desc 用于指定连接失败后的回调函数
     * @param {data} 错误信息 {string}
     * @param {code} 失败回调的返回状态码 {number}
     */
    onError: (data: string, code: number) => void

    send: (obj: {
      /**
       *  @desc 发送的数据
       */
      data: Record<any, any>

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
     * @desc 发送数据到手机 App 端
     * @param {obj} 入参 {object}
     */
    sendFile: (obj: {
      /**
       *  @desc 目录的 uri
       */
      uri: string
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
     * @desc 关闭当前连接
     * @param {obj} 关闭当前连接的函数入参 {object}
     */
    close: (obj: {
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
     * @desc 接收手机 App 端数据
     * @param {obj} 关闭当前连接的函数入参 {object}
     */
    onMessage: (obj: {
      /**
       * @desc 是否是文件
       */
      isFileType: boolean
      /**
       * @desc 文件存储路径
       */
      fileUri: string
      /**
       * @desc 文件名称
       */
      fileName: string
    }) => void
  }

}
