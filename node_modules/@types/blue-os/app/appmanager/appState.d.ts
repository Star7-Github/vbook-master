/**
 * 应用管理
 * 接口声明: {"name": "blueos.app.appmanager.appState"}
 */
declare module '@blueos.app.appmanager.appState' {

  /**
   * @desc 将当前栈顶应用移动到后台
   * @version 1
   * @returns 返回结果 {boolean}
   */
  const moveTaskToBack: () => boolean
}
