/**
 * 蓝牙接口
 * 接口声明: {"name": "blueos.bluetooth.bluetoothManager"}
 */
declare module '@blueos.bluetooth.bluetoothManager' {
  /**
   * @desc 开始搜寻附近的蓝牙外围设备。此操作比较耗费系统资源，请在搜索并连接到设备后调用 bluetooth.stopDevicesDiscovery 方法停止搜索。
   * @param {obj} 获取设备信息入参 {object}
   * @version 1
   */
  const startDevicesDiscovery: (obj: {
    /**
     * @desc 要搜索的主 service 的 uuid 列表。某些蓝牙设备会广播自己的主 service 的 uuid。如果设置此参数，则只搜索广播包有对应 uuid 的主服务的蓝牙设备。建议主要通过该参数过滤掉周边不需要处理的其他蓝牙设备
     */
    service?: string[]
    /**
     * @desc 默认值为 false。是否允许重复上报同一设备。如果允许重复上报，则 bluetooth.ondevicefound 方法会多次上报同一设备，但是 RSSI 值会有不同
     */
    allowDuplicatesKey?: boolean
    /**
     * @desc 单位毫秒，默认值为 0。上报设备的间隔。0 表示找到新设备立即上报，其他数值根据传入的间隔上报
     */
    interval?: number
    /**
     * @desc 成功回调
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

  /**
   * @desc 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
   * @param {obj} 停止搜寻附近的蓝牙外围设备入参 {object}
   * @version 1
   */
  const stopDevicesDiscovery: (obj: {
    /**
     * @desc 成功回调
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

  /**
   * @desc 监听寻找到新设备的事件。
   * @param {data} 监听寻找到新设备的事件入参 {object}
   * @version 1
   */
  let onDeviceFound: (data: {
    devices: Array< {
      /**
       * @desc 蓝牙设备名称，某些设备可能没有
       */
      name: string
      /**
       * @desc 用于区分设备的 id
       */
      deviceId: string
      /**
       * @desc 当前蓝牙设备的信号强度
       */
      RSSI: ArrayBuffer
      /**
       * @desc 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段
       */
      advertisServiceUUIDs: string[]
      /**
       * @desc 当前蓝牙设备的广播数据段中的 LocalName 数据段
       */
      localName: string
      /**
       * @desc 当前蓝牙设备的广播数据段中的 ServiceData 数据段，key 为 uuid 的 String 值，value 为对应的 ServiceData 的 ArrayBuffer
       */
      serviceData: Record<string, any>
    }>
  }) => void
}
