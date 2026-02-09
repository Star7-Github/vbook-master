/**
 * 通知消息
 * 接口声明: {"name": "blueos.app.notification.notificationManager"}
 */
declare module '@blueos.app.notification.notificationManager' {
  /**
   * @desc 发布通知
   * @param {obj} 发布通知入参 {object}
   * @version 1
   */
  const publish: (obj: {
    /**
     * @desc 消息通知对象
     */
    request: {
      /**
       * @desc 通知小图标，应用下的图片的绝对路径
       */
      icon: string
      /**
       * @desc 应用通知的唯一 id
       */
      id?: number
      /**
       * @desc 应用名称
       */
      appName?: string
      /**
       * @desc 正文类型。 1：普通文本通知类型。 2：图片通知类型
       */
      contentType: number
      /**
       * @desc 通知内容 与 contentType 对应
       */
      content: {
        /**
         * @desc 普通文本通知标题
         */
        title: string
        /**
         * @desc 普通文本通知内容
         */
        text: string
        /**
         * @desc 图片文本通知简略内容
         */
        additionalText?: string
        /**
         * @desc 图片通知扩展标题
         */
        briefText?: string
        /**
         * @desc 图片文本通知简略内容
         */
        expandedTitle?: string
        /**
         * @desc 图片通知的图片，，应用下的图片的绝对路径
         */
        picture?: string
      }
      /**
       * @desc 通知来源 , 1：PHONE；2：WATCH_APP
       */
      channel: number
      /**
       * @desc 消息渠道来源 (PHONE 时) iOS | Andriod
       */
      platform?: string
      /**
       * @desc 通知发送时间
       */
      deliveryTime: number
      /**
       * @desc 通知按钮，最多两个按钮
       */
      actionButtons?: Array<{
        /**
         * @desc 按钮标题
         */
        label: string
        /**
         * @desc 点击按钮时触发的动作
         */
        action: {
          /**
           * @desc 定义按钮点击触发的回调函数, 需要在 app.ux 中定义
           */
          triggerMethod?: string
          /**
           * @desc 自定义参数，供回调函数使用
           */
          prameters?: Record<string, any>
        }

        /**
         * @desc 扩展参数
         */
        extras?: Record<string, any>
      }>
      /**
       * @desc 通知大图标，应用下的图片的绝对路径
       */
      largeIcon?: string
      /**
       * @desc 是否不可清除
       */
      isUnremovable?: boolean
      /**
       * @desc 数字角标(消息合并情况下)
       */
      badge?: number
      /**
       * @desc 应用包名 ，格式 com.xxx.xxx，该字段的值应由 native 填充
       */
      appBundleName?: string
      /**
       * @desc 消息分组
       */
      group?: string
      /**
       * @desc 扩展参数
       */
      extraInfo?: Record<string, any>
    }
    /**
     * @desc 成功的回调
     */
    success: () => void
    /**
     * @desc 失败的回调
     */
    fail: () => void
    /**
     * @desc 执行结束后的回调
     */
    complete: () => void
  }) => void

  /**
   * @desc 清除消息通知
   * @param {obj} 清除消息通知入参 {object}
   * @version 1
   */
  const remove: (obj: {
    /**
     * @desc 清除的查询条件，如果条件为空则全部清除
     */
    query: {
      /**
       * @desc 应用通知的唯一 id
       */
      id?: number
      /**
       * @desc 通知的分组
       */
      group?: string
    }
    /**
     * @desc 成功的回调
     */
    success: () => void
    /**
     * @desc 失败的回调
     */
    fail: () => void
    /**
     * @desc 执行结束后的回调
     */
    complete: () => void
  }) => void

}
