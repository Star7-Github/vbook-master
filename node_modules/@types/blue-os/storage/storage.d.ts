/**
 * key-value格式的数据存储
 * 接口声明: {"name": "blueos.storage.storage"}
 */
declare module '@blueos.storage.storage' {
  /**
   * @desc 存储里的数据项的数量
   */
  const length: number

  /**
   * @desc 读取存储内容
   * @param {obj} 读取存储内容入参 {object}
   * @version 1
   */
  const get: (obj: {
    /**
     * @desc 索引
     */
    key: string

    /**
     * @desc 如果 key 不存在，返回 default。如果 default 未指定，返回长度为 0 的空字符串
     */
    default?: string
    /**
     * @desc 成功回调
     * @param {data} 读取存储内容入参 {any}
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
   * @desc 设置存储内容
   * @param {obj} 设置存储内容入参 {object}
   * @version 1
   */
  const set: (obj: {
    /**
     * @desc 索引
     */
    key: string

    /**
     * @desc 新值。如果新值是长度为0的空字符串，会删除以key为索引的数据项
     */
    value?: string
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
   * @desc 清空存储内容
   * @param {obj} 清空存储内容入参 {object}
   * @version 1
   */
  const clear: (obj: {

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
     * 执行结束后的回调
     */
    complete?: () => void
  }) => void

  /**
   * @desc 删除存储内容
   * @param {obj} 删除存储内容入参 {object}
   * @version 1
   */
  const del: (obj: {
    /**
     * @desc 索引
     */
    key: string

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
   * @desc 返回存储中某个index的键名
   * @param {obj} 返回存储中某个index的键名入参 {object}
   * @version 1
   */
  const key: (obj: {
    /**
     * @desc 要查询的键名对应的索引
     */
    index: number

    /**
     * @desc 成功回调
     * @param {data} 成功回调的返回值 {string}
     */
    success?: (data: string) => void
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
   * @desc 同步读取存储内容
   * @param {obj} 同步读取存储内容入参 {object}
   * @version 1
   * @returns 返回同步读取存储内容 {string | boolean | number | object | Array<string>}
   */
  const getSync: (obj: {
    /**
     * @desc 索引
     */
    key: string
  }) => string | boolean | number | object | Array<string>

  export { del as delete, get, set, getSync, key, clear, length }
}
