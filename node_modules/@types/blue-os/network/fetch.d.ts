/**
 * 数据请求
 * 接口声明: {"name": "blueos.network.fetch"}
 */
declare module '@blueos.network.fetch' {
  /**
   * @desc http请求
   * @param {obj} 网络请求的参数 {object}
   * @version 1
   */
  const fetch: (obj: {
    /**
     * @desc 资源url
     */
    url: string
    /**
     * @desc 请求的参数，可以是字符串，或者是 js 对象、arraybuffer 对象。参考 data与Content-Type关系 部分
     */
    data?: string | Record<string, any> | ArrayBuffer
    /**
     * @desc 请求的 header，会将其所有属性设置到请求的 header 部分。User-Agent设置在1040版本开始支持。示例：{"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"}
     */
    header?: Record<string, any>
    /**
     * @desc 默认为 GET，可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
     */
    method?: string
    /**
     * @desc 支持返回类型是 text，json，file，arraybuffer，默认会根据服务器返回 header 中的 Content-Type 确定返回类型，详见 success返回值。
     */
    responseType?: string
    /**
     * @desc 成功返回的回调函数
     * @param {data}  成功返回的回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 服务器状态 code
       */
      code: number
      /**
       * @desc 参考 responseType与success中data关系 部分
       */
      data: string | Record<string, any> | ArrayBuffer
      /**
       * @desc 服务器 response 的所有 header
       */
      headers: Record<string, any>
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
}
