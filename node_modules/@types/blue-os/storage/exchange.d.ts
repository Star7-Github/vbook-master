/**
 * 应用间共享数据
 * 接口声明: { "name": "blueos.storage.exchange" }
 */
declare module '@blueos.storage.exchange' {
  /**
   * @desc 读取应用的共享数据
   * @param {obj} 读取数据入参 {object}
   * @version 1
   */
  const get: (obj: {
    /**
     * @desc 数据的 key
     */
    key: string
    /**
     * @desc 数据发布方的包名，scope 为 application 时必须提供，为 global 时必须为空
     */
    package?: string
    /**
     * @desc 数据发布方签名的摘要(SHA-256)，scope 为 application 时必须提供，为 global 时必须为空
     */
    sign?: string
    /**
     * @desc 数据发布的空间类型，支持 application 和 global，默认为 application
     */
    scope?: string
    /**
     * @desc 成功回调
     * @param {data} 成功回调返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 数据的值
       */
      value: string
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
   * @desc 设置共享的数据
   * @param {obj} 设置共享数据的入参 {object}
   * @version 1
   */
  const set: (obj: {
    /**
     * @desc 数据的 key
     */
    key: string
    /**
     * @desc 数据的值
     */
    value: string
    /**
     * @desc 数据发布的空间类型，支持 application 、vendor 和 global，默认为 application
     */
    scope?: string
    /**
     *@desc  配置需要写入数据到某应用的应用空间的应用的包名，仅在scope参数不设置或设置为application时生效，在scope为global时可设为空值
     */
    package?: string
    /**
     * @desc 应用签名的摘要(SHA-256)，仅在scope参数不设置或设置为application时生效，在scope为global 时可设为空值
     */
    sign?: string
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
    /**
     * @desc 执行结束后的回调
     */
    complete?: () => void
  }) => void

  /**
   * @desc 同步读取应用的共享数据，可获取到应用空间（application）、应用开发商空间（vendor ）或全局空间（global）的数据
   * @param {obj} 入参 {object}
   * @version 1
   * @returns 返回应用的共享数据 {string | boolean | number | object | Array<string>}
   */
  const getSync: (obj: {
    /**
     * @desc 数据发布方的包名，scope 为 application 时必须提供，为 vendor或 global 时可设为空
     */
    package?: string
    /**
     * @desc 数据发布方签名的 SHA-256，scope 为 application 时必须提供，为 vendor 或 global 时必须为空
     */
    sign?: string
    /**
     * @desc 数据发布的空间类型，支持 application、vendor 和 global，默认为 application
     */
    scope?: string
    /**
     * @desc 数据的 key
     */
    key: string
  }) => string | boolean | number | object | Array<string>
}
