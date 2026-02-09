/**
 * 密码算法
 * 接口声明: {"name": "blueos.security.cipher"}
 */
declare module '@blueos.security.cipher' {
  /**
   * @desc RSA 加解密。
   * @param {obj} RSA 加解密,入参 {object}
   * @version 1
   */
  const rsa: (obj: {
    /**
     * @desc 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
     */
    action: string
    /**
     * @desc 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同
     */
    text: string
    /**
     * @desc 加密或解密使用到的 RSA 密钥，经过 base64 编码后生成的字符串。加密时 key 为公钥，解密时 key 为私钥
     */
    key: string
    /**
     * @desc RSA 算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"
     */
    transformation?: string
    /**
     *  @desc 成功回调
     *  @param {data} 回调函数返回值 {object}
     */
    success?: (data: {
      /**
       *  @desc 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错
       */
      text: string
    }) => void
    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     * 	@desc 执行结束后的回调
     */
    complete?: () => void
  }) => void

  /**
   * @desc AES 加解密,支持分段加密
   * @param {obj} AES 加解密的入参 {object}
   * @version 1
   */
  const aes: (obj: {
    /**
     * @desc 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
     */
    action: string
    /**
     * @desc 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同
     */
    text: string
    /**
     * @desc 加密或解密使用到的密钥，经过 base64 编码后生成的字符串。
     */
    key: string
    /**
     * @desc AES 算法的加密模式和填充项，默认为"AES/CBC/PKCS5Padding"
     */
    transformation?: string
    /**
     * @desc AES加解密的初始向量，经过base64编码后的字符串，默认值为key值
     */
    iv?: string
    /**
     * @desc AES加解密的初始向量偏移，默认值为0
     */
    ivOffset?: number
    /**
     * @desc AES加解密的初始向量字节长度，默认值为16
     */
    ivLen?: number
    /**
     *  @desc 成功回调
     *  @param {data} 回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错（CODE：200）
       */
      text: string
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
   * @desc base64 编解码。
   * @param {obj} 入参 {object}
   * @version 1
   * @returns 返回结果 {string}
   */
  const base64: (obj: {
    /**
     * @desc 加解密类型，两个可选值：encrypt：加密，decrypt：解密
     */
    action: string
    /**
     * @desc 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。
     */
    text: string
  }) => string

  /**
   * @desc crc32 加密
   * @param {obj} crc32 加密入参 {object}
   * @version 1
   * @returns 返回加密结果 {number}
   */
  const crc32: (obj: {
    /**
     * @desc 加密内容。
     */
    content: Buffer | string
  }) => number

  /**
   * @desc 求hash值
   * @param {obj} 入参 {object}
   * @version 1
   * @returns 返回hash计算结果 {string}
   */
  const hash: (obj: {
    /**
     * @desc hash算法，可选md5,sha256。
     */
    algorithm: string
    /**
     * @desc 加密内容。
     */
    content: Buffer | string
  }) => string
}
