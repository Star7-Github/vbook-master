/**
 * 设备通信
 * 接口声明: {"name": "blueos.service.inputMethod"}
 */
declare module '@blueos.service.inputMethod' {
  /**
   *   @desc 	设置输入法录入的数据
   *   @param {obj} 输入法录入的数据 {object}
   *   @version 1
   */
  const setInput: (obj: {
    /**
     *   @desc 	输入法录入的数据
     */
    value: string
  }) => void
}
