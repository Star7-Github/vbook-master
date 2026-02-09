/**
 * 文件存储，应用只能访问应用沙箱内的存储空间，uri见{@link SandboxURI}
 * 接口声明: {"name": "blueos.storage.file"}
 */
declare module '@blueos.storage.file' {
  /**
   * @desc 文件移动
   * @param {obj} 入参 {object}
   * @version 1
   */
  const move: (obj: {
    /**
     * @desc 源文件的 uri，不能是应用资源路径和 tmp 类型的 uri
     */
    srcUri: string
    /**
     * @desc 目标文件的uri，不能是应用资源路径和tmp类型的uri
     */
    dstUri: string
    /**
     * @desc 成功回调
     * @param {uri} 成功回调返回值 {string}
     */
    success?: (uri: string) => void
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
   * @desc 文件复制
   * @param {obj} 将源文件复制一份并存储到指定位置入参 {object}
   * @version 1
   */
  const copy: (obj: {
    /**
     * @desc 源文件的uri，不能是应用资源路径和tmp类型的uri
     */
    srcUri: string
    /**
     * @desc 目标文件的uri，不能是应用资源路径和tmp类型的uri
     */
    dstUri: string
    /**
     * @desc 成功回调
     * @param {uri} 成功回调返回值 {string}
     */
    success?: (uri: string) => void
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
   * @desc 获取指定目录下的文件列表，接口中使用的 uri 描述请参考文件组织
   * @param {obj} 获取指定目录下的文件列表入参 {object}
   * @version 1
   */
  const list: (obj: {
    /**
     *  @desc 目录 uri，不能是应用资源路径和 tmp 类型的 uri
     */
    uri: string
    /**
     *  @desc 成功回调
     *  @param {data} 成功回调的返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 文件列表，每个文件的格式为{uri:'file1',lastModifiedTime:1234456, length:123456}
       */
      fileList:Array<{
        /**
         * @desc  文件的 uri
         */
        uri: string
        /**
         * @desc 文件大小，单位 Byte
         */
        length: number
        /**
         * @desc  文件最近修改的时间戳，从 1970/01/01 00:00:00 GMT 到当前时间的毫秒数
         */
        lastModifiedTime: number
      }>
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
   * @desc 获取文件信息，接口中使用的 URI 描述请参考
   * @param {obj} 入参 {object}
   * @version 1
   */
  const get: (obj: {
    /**
     * @desc 文件的 uri，不能是应用资源路径
     */
    uri: string
    /**
     *
     * @desc 是否递归获取子目录文件列表。默认false
     */
    recursive?: boolean
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 文件的 uri
       */
      uri: string
      /**
       * @desc 文件大小，单位 Byte
       */
      length: number
      /**
       * @desc 文件最近修改的时间戳，从 1970/01/01 08:00:00 到当前时间的毫秒数
       */
      lastModifiedTime: number
      /**
       * @desc 文件类型，dir：目录；file：文件
       */
      type: string
      /**
       * @desc 文件列表，recursive为true且type为dir时递归返回子目录文件细信息，否则不返回
       */
      subFiles: string[]
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
   * @desc 删除本地存储的文件，接口中使用的 URI 描述请参考文件组织
   * @param {obj} 删除本地存储的文件入参 {object}
   * @version 1
   */
  const del: (obj: {
    /**
     * @desc 需要删除的文件 uri，不能是应用资源路径和 tmp 类型的 uri
     */
    uri: string
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {any}
     */
    success?: (data: any) => void
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
   * @desc 写文本到文件
   * @param {obj} 写文本到文件入参 {object}
   * @version 1
   *
   */
  const writeText: (obj: {
    /**
     * @desc 本地文件路径，不支持资源文件路径和tmp分区，如果文件不存在会创建文件
     */
    uri: string
    /**
     * @desc 需要写入的字符串
     */
    text: string
    /**
     * @desc 编码格式，默认UTF-8
     */
    encoding?: string
    /**
     * @desc 是否追加模式，默认false
     */
    append?: boolean
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
   * @desc 写Buffer到文件
   * @param {obj} 写Buffer到文件入参 {object}
   * @version 1
   */
  const writeArrayBuffer: (obj: {
    /**
     * @desc 本地文件路径，不支持资源文件路径和tmp分区，如果文件不存在会创建文件
     */
    uri: string
    /**
     * @desc 需要写入的Buffer
     */
    buffer: Uint8Array
    /**
     * @desc 指向文件开始写入数据的位置的偏移量，默认 0
     */
    position?: number
    /**
     * @desc 是否追加模式，默认false。当为true时，position参数无效
     */
    append?: boolean
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
   * @desc 从文件中读取文本
   * @param {obj} 从文件中读取文本 {object}
   * @version 1
   */
  const readText: (obj: {
    /**
     * @desc 本地文件路径
     */
    uri: string
    /**
     * @desc 编码格式，默认UTF-8
     */
    encoding?: string
    /**
     * @desc 成功回调
     */
    success?: (data: {
      /**
       * @desc 读取的文本
       */
      text: string
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
   * @desc 从文件中读取Buffer
   * @param {obj} 从文件中读取Buffer {object}
   * @version 1
   */
  const readArrayBuffer: (obj: {
    /**
     * @desc 本地文件路径
     */
    uri: string
    /**
     * @desc 读取的起始位置，默认值为文件的起始位置
     */
    position?: number
    /**
     * @desc 读取的长度，不填写则读取到文件结尾
     */
    length?: number
    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {object}
     */
    success?: (data: {
      /**
       * 读取的文件内容
       */
      buffer: Uint8Array
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
   * @desc 判断文件或目录是否存在
   * @param {obj} 判断文件或目录是否存在入参 {object}
   * @version 1
   */
  const access: (obj: {
    /**
     * @desc 目录或文件uri，不能是应用资源路径和tmp类型的uri
     */
    uri: string
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
   * @desc 创建目录
   * @param {obj} 创建目录入参 {object}
   * @version 1
   */
  const mkdir: (obj: {
    /**
     * @desc 目录的uri，不能是应用资源路径和tmp类型的uri
     */
    uri: string
    /**
     * @desc 是否递归创建该目录的上级目录后再创建该目录。默认false
     */
    recursive?: boolean
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
   *  @desc 删除目录
   *  @param {obj} 删除目录入参 {object}
   *  @version 1
   */
  const rmdir: (obj: {
    /**
     * @desc 目录的uri，不能是应用资源路径和tmp类型的uri
     */
    uri: string
    /**
     * @desc 是否递归创建该目录的上级目录后再创建该目录。默认false
     */
    recursive?: boolean
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

  export {
    del as delete,
    rmdir,
    mkdir,
    access,
    readArrayBuffer,
    readText,
    writeArrayBuffer,
    writeText,
    get,
    list,
    copy,
    move,
  }
}
