/**
 * 权限枚举
 */
declare enum PermissionType {
  /**
   * 位置信息
   */
  Location = "watch.permission.LOCATION",
  /**
   * 计步传感器
   */
  StepCounter = "watch.permission.STEP_COUNTER",
  /**
   * 设备信息	
   */
  DeviceInfo = "watch.permission.DEVICE_INFO",
  /**
   * 录音
   */
  Record = "watch.permission.RECORD",
  /**
   * 允许使用设备蓝牙
   */
  Bluetooth = "watch.permission.BLUETOOTH",
  /**
   * 读取健康数据
   */
  ReadHealthData = "watch.permission.READ_HEALTH_DATA"
}