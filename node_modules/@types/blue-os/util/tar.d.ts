/**
 * 解包
 * 接口声明: {"name": "blueos.util.tar"}
 */
declare module '@blueos.util.tar' {
  /**
   *  @desc 解包
   *  @param  {obj} 解包入参 {object}
   *  @version 1
   */
  const untar: (obj: {
    /**
     * @desc 源文件的 uri，不能是 tmp 类型的 uri
     */
    srcUri: string
    /**
     * @desc 目标目录的 uri，不能是应用资源路径和 tmp 类型的 uri
     */
    dstUri: string
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
}
