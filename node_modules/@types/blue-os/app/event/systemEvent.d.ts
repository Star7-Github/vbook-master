/**
 * 公共事件命名枚举
 */
declare enum SystemEvent {
    /**
     * 即将关机
     */
    Shutdown = 'usual.event.SHUTDOWN',
    /**
     * 电量改变，参数：level:0.0 - 1.0 之间
     */
    BatteryChanged = 'usual.event.BATTERY_CHANGED',
    /**
     * 低电事件
     */
    BatteryLow = 'usual.event.BATTERY_LOW',
    /**
     * 充满电事件
     */
    BatteryOkay = 'usual.event.BATTERY_OKAY',
    /**
     * 灭屏事件
     */
    ScreenOff = 'usual.event.SCREEN_OFF',
    /**
     * AOD 事件
     */
    ScreenAod = 'usual.event.SCREEN_AOD',
    /**
     * 亮屏事件
     */
    ScreenOn = 'usual.event.SCREEN_ON',
    /**
     * 新安装应用
     */
    PackageAdded = 'usual.event.PACKAGE_ADDED',
    /**
     * 应用安装更新
     */
    PackageReplaced = 'usual.event.PACKAGE_REPLACED',
    /**
     * 应用卸载
     */
    PackageRemoved = 'usual.event.PACKAGE_REMOVED',
    /**
     * 停止充电
     */
    Discharging = 'usual.event.DISCHARGING',
    /**
     * 开始充电
     */
    Charging = 'usual.event.CHARGING',
    /**
     * ota 开始传输
     */
    OtaTransfer = 'usual.event.OTA_TRANSFER',
    /**
     * ota 开始安装
     */
    OtaInstall = 'usual.event.OTA_INSTALL'
}
