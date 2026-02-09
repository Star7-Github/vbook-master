/**
 * toast提示
 * 接口声明: {"name": "blueos.window.prompt"}
 */
declare module '@blueos.window.prompt' {
  /**
   * @desc 显示Toast。
   * @param {obj} 显示Toast入参 {object}
   * @version 1
   */
  const showToast: (obj: {
    /**
     * @desc 要显示的文本
     */
    message: string
    /**
     * @desc 0 为短时，1 为长时，默认 0
     */
    duration?: number
  }) => void
}
