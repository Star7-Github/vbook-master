/**
 * 系统设置
 * 接口声明: {"name": "blueos.service.settings"}
 */
declare module "@blueos.service.settings" {
  /**
   * @desc 获取设置项的值
   * @param {obj} 获取设置入参 {object}
   * @version 1
   */
  const getValue: (obj: {
    /**
     * @desc 相应设置的字段名 {@link SystemConfiguration}
     */
    key: string
    /**
     *  @desc 成功回调
     *  @param {data} 回调函数返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 相应设置的字段名
       */
      key: string
      /**
       * @desc 相应设置的值
       */
      value: any
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
   * @desc 同步获取设置项的值
   * @param {key} 获取设置入参 {string} {@link SystemConfiguration}
   * @version 1
   * @returns 返回同步获取到的值 {any}
   */
  const getValueSync: (key: string) => any
}
