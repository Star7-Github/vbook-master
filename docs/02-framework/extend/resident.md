# 后台运行

# 后台运行

更新时间：2025/05/16 10:47:50

## 概述

为了节省系统资源，通常情况下，应用切换到后台后将会暂停运行，等到再次切换回前台时继续运行。但音乐/运动等类型的应用， 退到后台后可能仍然需要继续运行，为满足此类需求，加入了对后台运行的支持。

### 后台运行模式的工作原理如下:

在应用切换到后台时，系统将会检查是否满足后台运行的条件，如果满足，应用将继续运行，否则将被暂停。此条件包括：

  * manifest.json 中声明了后台运行接口

  * 当前至少有一个（已在 manifest.json 中声明的）后台运行接口正在运行

处于后台运行中的应用，如果所有后台运行接口均运行结束，系统将会启动倒计时。倒计时结束后，如果仍未有后台运行接口被调用， 应用将会退出后台运行模式，暂停运行。

### 实践建议:

  * 后台运行需要消耗较多的系统资源，应用需要根据自身需求审慎使用。针对申请后台运行的应用，上线审核时将会审核其后台运行的需求是否合理。

  * 后台运行接口的导入和后台执行的工作放到 app.ux 中，而不是放到页面中，以免避免页面切换和销毁的影响。

### 配置方法

manifest.json 中声明所需的后台运行接口。后台运行接口及后台运行条件包括：

模块 | 后台运行条件  
---|---  
blueos.multimedia.audio | 音频播放  
blueos.multimedia.record | 录音  
blueos.multimedia.media | 音频播放/录音  
blueos.communication.network.request | 上传下载  
blueos.hardware.geolocation | 定位  
blueos.bluetooth.ble | 蓝牙连接  
  
**使用示例：**
[code] 
    {
      "package": "com.demo.sample",
      "config": {
        "logLevel": "trace",
        "background": {
          "features": [
            "blueos.multimedia.audio",
            "blueos.multimedia.media",
            "blueos.multimedia.record",
            "blueos.communication.network.request",
            "blueos.hardware.geolocation"
          ]
        }
      }
    }
[/code]

复制代码

上一篇

[快捷卡片](</reference/extend/widget/>)

下一篇

[页面启动模式](</reference/extend/launch-mode/>)