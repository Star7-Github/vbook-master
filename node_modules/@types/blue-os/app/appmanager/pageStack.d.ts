/**
 * 页面栈管理
 * 接口声明: {"name": "blueos.app.appmanager.pageStack"}
 */
declare module '@blueos.app.appmanager.pageStack' {
  /**
   *  @desc  获取页面栈信息
   *  @param  {obj} 获取页面栈信息入参 {object}
   *  @version 1
   */
  const getAppStacks: (obj: {
    /**
     *   @desc 应用包名。 默认不传获取所有应用的页面栈信息 或 ['com.vivo.app1','com.vivo.app2'] 或 'com.vivo.app1'
     */
    package: Array<string> | string
    /**
     *   @desc 成功回调
     *   @param {appStackPages} 回调成功的返回值 {any}
     */
    success?: (
      appStackPages: Array<{
        /**
         * @desc 应用信息
         */
        appInfo: {
          /**
           * @desc 所属应用的层级
           */
          zIndex: number
          /**
           * @desc 应用包名
           */
          package: string
        }
        /**
         * @desc 应用页面栈信息
         */
        pages: Array<{
          /**
           * @desc 页面的 id
           */
          pageId: number
          /**
           * @desc 页面的路径
           */
          path: string
        }>
      }>
    ) => void

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
   *  @desc  关闭页面
   *  @param  {obj} 关闭页面入参 {object}
   *  @version 1
   */
  const close: (obj: {
    /**
     * @desc 关闭应用的配置项
     */
    pageList: Array<{
      /**
       * @desc 应用包名
       */
      package: string
      /**
       * @desc 页面 id
       */
      pageIds: Array<string>
      /**
       * @desc 页面路径
       */
      paths: Array<string>
    }>

    /**
     *   @desc 成功回调
     *   @param {appStackPages} 回调成功的返回值 {any}
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
}
