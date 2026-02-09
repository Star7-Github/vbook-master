/**
 * 设备信息
 * 接口声明: {"name": "blueos.hardware.deviceInfo"}
 */
declare module '@blueos.hardware.deviceInfo' {
  /**
   * @desc 获取设备信息
   * @param {obj} 获取设备信息入参 {object}
   * @version 1
   */
  const getInfo: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 成功回调返回值 {object}
     */
    success?: (data: {
      /**
       * @desc 设备品牌
       */
      brand: string
      /**
       * @desc 设备生产商
       */
      manufacturer: string
      /**
       * @desc 设备型号
       */
      model: string
      /**
       * @desc 设备代号
       */
      product: string
      /**
       * @desc 操作系统名称
       */
      osType: string
      /**
       * @desc 操作系统版本名称
       */
      osVersionName: string
      /**
       * @desc 操作系统版本号
       */
      osVersionCode: number
      /**
       * @desc 运行平台版本名称
       */
      platformVersionName: string
      /**
       * @desc 运行平台版本号
       */
      platformVersionCode: number
      /**
       * @desc 系统语言
       */
      language: string
      /**
       * @desc 系统地区
       */
      region: string
      /**
       * @desc 硬件版本
       */
      hardwareVersion: string
      /**
       * @desc 软件版本
       */
      softwareVersion: string
      /**
       * @desc 屏幕宽
       */
      screenWidth: number
      /**
       * @desc 屏幕高
       */
      screenHeight: number
      /**
       * @desc 可使用窗口宽度
       */
      windowWidth: number
      /**
       * @desc 可使用窗口高度
       */
      windowHeight: number
      /**
       * @desc 状态栏高度
       */
      statusBarHeight: number
      /**
       * @desc 设备的屏幕密度
       */
      screenDensity: number
      /**
       * @desc 手机厂商系统的名称
       */
      vendorOsName: string
      /**
       * @desc 手机厂商系统的版本号
       */
      vendorOsVersion: string
      /**
       * @desc 针对异形屏(比如刘海屏、水滴屏和开孔屏)返回异形区域的位置大小。Array 中每个 item 表示一个异形区域的描述。
       */
      cutout: any[]
      /**
       * @desc 当前 vivo 手表引擎的设备类型，手表版为'watch'
       */
      deviceType: string

      /**
       * @desc 获取屏幕显示刷新率(获取帧率可能不为60, 90, 144等标准帧率)
       */
      screenRefreshRate: number
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
   * @desc 批量获取设备标识
   * @param {obj} 批量获取设备标识入参 {object}
   * @version 1
   */
  const getId: (obj: {
    /**
     * @desc 支持 device、mac、user、advertising 四种类型，可提供一至多个
     */
    type: string[]
    /**
     * 	@desc 成功回调
     * 	@param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc 设备唯一标识。在 Android 上返回 IMEI 或 MEID; 在Android Q之后，除了华为手机返回aaid(应用匿名设备标识符)，其他厂商手机如果支持oaid（匿名设备标识符）则返回oaid，否则返回空值。
       */
      device?: string
      /**
       * @desc 设备的 mac 地址。在 Android M 及以上返回固定值：02:00:00:00:00:00
       */
      mac?: string
      /**
       * @desc 用户唯一标识。在 Android 上返回 androidid
       */
      user?: string
      /**
       * @desc 广告唯一标识
       */
      advertising?: string
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
   * @desc 获取设备唯一标识。
   * @param {obj}  获取设备唯一标识参 {object}
   * @version 1
   */
  const getDeviceId: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc 设备唯一标识。
       */
      deviceId: string
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
   * @desc 获取用户唯一标识。
   * @param {obj}  获取用户唯一标识入参 {object}
   * @version 1
   */
  const getUserId: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * 设备唯一标识。在 Android 上返回 androidid
       */
      userId: string
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
   * @desc 获取存储空间的总大小。
   * @param {obj}  获取存储空间的总大小入参 {object}
   * @version 1
   */
  const getTotalStorage: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       *  @desc 存储空间的总大小，单位是 Byte。在 Android 上返回的是外部存储的总大小
       */
      totalStorage: number
    }) => void

    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
    /**
     *  @desc 执行结束后的回调
     */
    complete?: () => void
  }) => void

  /**
   * @desc 获取存储空间的可用大小。
   * @param {obj}  获取存储空间的可用大小入参 {object}
   * @version 1
   */
  const getAvailableStorage: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc 存储空间的可用大小，单位是 Byte。在 Android 上返回的是外部存储的可用大小
       */
      availableStorage: number
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
   * @desc 返回 CPU 信息。
   * @param {obj} 返回CPU信息入参 {object}
   * @version 1
   */
  const getCpuInfo: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc CPU 信息。
       */
      cpuInfo: string
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
   * @desc 获取设备序列号。
   * @param {obj}  获取设备序列号入参 {object}
   * @version 1
   */
  const getSerial: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc CPU 信息。在 Android 上返回的是/proc/cpuinfo 文件的内容
       */
      serial: string
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
   * @desc 获取卡识别码。
   * @param {obj}  获取卡识别码入参 {object}
   * @version 1
   */
  const getDeviceICCID: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {object}
     */
    success?: (data: {
      /**
       * @desc 卡识别码
       */
      iccid: string
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
   * @desc 判断硬件设备能力是否支持。
   * @param {name} 判断硬件设备能力是否支持入参,可传值'sys.modem.support'、'sys.sensor.ecg.support'
   * @version 1
   * @returns 返回断硬件设备能力是否支持的判断结果 {boolean}
   */
  const isSupported: (name: string) => boolean

  /**
   * @desc 获取全部硬件功能列表。
   * @param {obj}  获取全部硬件功能列表入参 {object}
   * @version 1
   */
  const getFeatureList: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {Array<string>}
     */
    success?: (data: Array<string>) => void

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
   * @desc 获取连接的设备(如手机、平板)的信息。
   * @param {obj}  获取连接设备的信息入参 {object}
   * @version 1
   */
  const getPeerDeviceInfo: (obj: {
    /**
     * @desc 成功回调
     * @param {data} 回调函数入参 {Array<string>}
     */
    success?: (data: {
      /**
       * @desc 设备品牌
       */
      brand: string
      /**
       * @desc 操作系统名称
       */
      osType: string
    }) => void

    /**
     * 	@desc 失败的回调函数
     * 	@param {data} 失败回调的返回值 {any}
     *	@param {code} 失败回调的返回状态码 {number}
     */
    fail?: (data: any, code: number) => void
  }) => void

  /**
   * @desc 同步获取设备信息。
   * @param {obj} 同步获取设备信息入参 {object}
   * @version 1
   * @returns 返回同步获取设备信息结果 {object}
   */
  const getInfoSync: () => {
    /**
     * @desc 设备品牌
     */
    brand: string
    /**
     * @desc 设备生产商
     */
    manufacturer: string
    /**
     * @desc 设备型号
     */
    model: string
    /**
     * @desc 设备代号
     */
    product: string
    /**
     * @desc 操作系统名称
     */
    osType: string
    /**
     * @desc 操作系统版本名称
     */
    osVersionName: string
    /**
     * @desc 操作系统版本号
     */
    osVersionCode: number
    /**
     * @desc 运行平台版本名称
     */
    platformVersionName: string
    /**
     * @desc 运行平台版本号
     */
    platformVersionCode: number
    /**
     * @desc 系统语言
     */
    language: string
    /**
     * @desc 系统地区
     */
    region: string
    /**
     * @desc 硬件版本
     */
    hardwareVersion: string
    /**
     * @desc 软件版本
     */
    softwareVersion: string
    /**
     * @desc 屏幕宽
     */
    screenWidth: number
    /**
     * @desc 屏幕高
     */
    screenHeight: number
    /**
     * @desc 可使用窗口宽度
     */
    windowWidth: number
    /**
     * @desc 可使用窗口高度
     */
    windowHeight: number
    /**
     * @desc 状态栏高度
     */
    statusBarHeight: number
    /**
     * @desc 设备的屏幕密度
     */
    screenDensity: number
    /**
     * @desc 手机厂商系统的名称
     */
    vendorOsName: string
    /**
     * @desc 手机厂商系统的版本号
     */
    vendorOsVersion: string
    /**
     * @desc 针对异形屏(比如刘海屏、水滴屏和开孔屏)返回异形区域的位置大小。Array 中每个 item 表示一个异形区域的描述。
     */
    cutout: any[]
    /**
     * @desc 当前 vivo 手表引擎的设备类型，手表版为'watch'
     */
    deviceType: string

    /**
     * @desc 获取屏幕显示刷新率(获取帧率可能不为60, 90, 144等标准帧率)
     */
    screenRefreshRate: number
  }
}
