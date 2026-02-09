/**
 * 上传下载
 * 接口声明: {"name": "blueos.network.request"}
 */
declare module '@blueos.network.request' {
  /**
   * @desc 上传文件。
   * @param {obj} 上传文件入参 {object}
   * @version 1
   */
  const upload: (obj: {
    /**
     * @desc 资源 url
     */
    url: string
    /**
     * @desc 请求的 header，会将其所有属性设置到请求的 header 部分。
     */
    header?: Record<string, any>
    /**
     * @desc 默认为 POST，可以是： POST, PUT
     */
    method?: string
    /**
     * @desc 需要上传的文件列表，使用 multipart/form-data 方式提交
     */
    files: Array<{
      /**
       * @desc multipart 提交时，header 中的文件名
       */
      filename?: string
      /**
       * @desc multipart 提交时，表单的项目名,默认 file
       */
      name?: string
      /**
       * @desc 文件的本地地址
       */
      uri: string
      /**
       * @desc 文件的 Content-Type 格式,默认会根据 filename 或者 uri 的后缀获取
       */
      type?: string
    }>
    /**
     * @desc HTTP 请求中其他额外的 form data
     */
    data?: Array<{
      /**
       * @desc form 元素的名称。
       */
      name: string
      /**
       * @desc form 元素的值。
       */
      value: string
    }>
    /**
     * @desc 成功返回的回调函数
     * @param {data} 上传文件入参 {object}
     */
    success?: (data: {
      /**
       * @desc 服务器状态 code
       */
      code: number
      /**
       * @desc 如果服务器返回的 header 中 type 是 text/*或 application/json、application/javascript、application/xml，值是文本内容，否则是存储的临时文件的 uri 临时文件如果是图片或者视频内容，可以将图片设置到 image 或 video 控件上显示
       */
      data: string
      /**
       * @desc 服务器 response 的所有 header
       */
      headers: Record<string, any>
    }) => void
    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void
  }) => void

  /**
   * 	@desc 下载文件
   *  @param {obj} 下载文件的入参 {object}
   *  @version 1
   */
  const download: (obj: {
    /**
     * @desc 资源url
     */
    url: string
    /**
     * @desc 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent设置在1040版本开始支持。
     */
    header?: string
    /**
     * @desc 下载描述，会用于通知栏标题。默认为文件名
     */
    description?: string
    /**
     * @desc 下载文件名。默认从网络请求或 url 中获取
     */
    filename?: string
    /**
     * @desc 成功返回的回调函数
     * @param {data} 成功返回的回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 下载的 token，根据此 token 获取下载状态
       */
      token: string
    }) => void
    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void
  }) => void

  /**
   * 	@desc 监听下载任务
   *  @param {obj} 监听下载任务入参 {object}
   *  @version 1
   */
  const onDownloadComplete: (obj: {
    /**
     * @desc download 接口返回的 token
     */
    token: string
    /**
     * @desc 成功返回的回调函数
     * @param {data} 成功返回的回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 下载文件的 Uri
       */
      uri: string
    }) => void
    /**
     * @desc 失败的回调函数
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void
  }) => void

  /**
   * 	@desc 中断下载任务
   *  @param {obj} 中断下载任务入参 {object}
   *  @version 1
   */
  const abortDownload: (obj: {
    token: string
    /**
     * @desc 成功返回的回调函数
     */
    success?: () => void
    /**
     * @desc 失败的回调函数
     * @param {data} 失败回调的返回值 {any}
     * @param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * @desc 结束的回调函数（调用成功、失败都会执行）
     */
    complete?: () => void
  }) => void
}
