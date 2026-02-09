/**
 * 获取设备信息
 * 接口声明: {"name": "blueos.app.context"}
 */
declare module '@blueos.app.context' {
  /**
   * @desc 获取当前应用信息
   * @version 1
   * @returns 返回当前应用信息 {object}
   */
  const getInfo: () => {
    /**
     * @desc 应用包名
     */
    packageName: string
    /**
     * @desc 应用图标路径
     */
    icon: string
    /**
     * @desc 应用名称
     */
    name: string
    /**
     * @desc 应用版本名称
     */
    versionName: string
    /**
     * @desc 应用版本号
     */
    versionCode: number
  }

  /**
   * @desc 加载静态库，需要与厂商合作
   * @param {name} 静态库名称 {string}
   * @version 1
   * @returns 返回静态库对象{object}
   */
  const loadLibrary: (name: string) => {
    /**
     * @desc 监听的回调函数
     * @param {js_task_callback} 回调函数名称 {Function}
     * @version 1
     */
    on: (js_task_callback: () => void) => void
  }


  /**
   * @desc 退出当前应用
   * @version 1
   */
  const terminate: () => void
}
