# 卡片配置

# 卡片配置

更新时间：2025/12/23 15:57:12

本节介绍卡片配置及工程目录，通过示例展示了轻卡和标准卡的具体配置方法。

## 工程目录

在代码工程中支持两种卡片工程目录组织方式：

  1. 一张卡片单独一个工程
  2. 多张卡片和普通应用在同一个工程下，卡片和普通应用分属不同的文件目录。

**仅卡片**

> 注意：卡片工程中不存在 app.ux 文件。
[code] 
    └── src
    │   ├── widgets                 # 统一存放项目快应用卡片代码
    │   │    ├── widget1            # 表示卡片1的目录
    │   │    │     ├──i18n          # 卡片1的国际化资料目录
    │   │    │     ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
    │   │    │     └──index.ux      # 卡片的ux和逻辑实现文件
    │   │    └── widget2            # 表示卡片2的目录
    │   └── manifest.json           # 配置应用基本信息
    └── package.json                # 定义项目需要的各种模块及配置信息
[/code]

复制代码
[code] 
    # 打包结果
    - com.example.demo.rpks
      - com.example.demo_widgets.widget1.rpk
      - com.example.demo_widgets.widget2.rpk
[/code]

复制代码

**普通应用 + 卡片**

> 注意：为了保证卡片的打包体积最小化，卡片不得使用根目录下的 assets 资源文件。
[code] 
    └── src
    │   ├── widgets                 # 统一存放项目快应用卡片代码
    │   │    ├── widget1            # 表示卡片1的目录
    │   │    │     ├──i18n          # 卡片1的国际化资料目录
    │   │    │     ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
    │   │    │     └──index.ux      # 卡片的ux和逻辑实现文件
    │   │    └── widget2            # 表示卡片2的目录
    │   ├── assets                  # 应用的资源(Images/Styles/字体...)
    │   ├── helper                  # 项目自定义辅助各类工具
    │   ├── pages                   # 统一存放项目快应用页面级代码
    │   │    ├── page1              # 表示页面1的目录
    │   │    │     └──index.ux      # 页面的ux和逻辑实现文件
    │   │    └── page2              # 表示页面2的目录
    │   ├── app.ux                  # 快应用应用程序代码的入口文件
    │   └── manifest.json           # 配置应用基本信息
    └── package.json                # 定义项目需要的各种模块及配置信息
[/code]

复制代码
[code] 
    # 打包结果
    - com.example.demo.rpks
      - com.example.demo.rpk
      - com.example.demo_widgets.widget1.rpk
      - com.example.demo_widgets.widget2.rpk
[/code]

复制代码

## manifest

标准卡和轻卡统一都在 manifest.json 下的 router.widgets 字段下配置，通过 type 区分

### router.widgets

卡片的定义通过 manifest.json 中的 router.widgets 字段进行定义。

属性 | 类型 | 必填 | 说明  
---|---|---|---  
**widgets** | Record<string, Widget> | 否 | 卡片信息，key 值为卡片名称，value 为卡片详细配置 widget  
  
> 例如： `widgets/Widget1` 对应 `widgets/Widget1`目录，它也是卡片访问路径和卡片的唯一标识
[code] 
    {
      "router": {
        "widgets": {
          "widgets/widget1": {}
        }
      }
    }
[/code]

复制代码

### Widget

用于定义卡片的路由信息。

属性 | 类型 | 必填 | 描述  
---|---|---|---  
type | js | lite | 是 | 卡片类型，`js` 表示标准卡，`lite` 表示轻卡  
name | string | 是 | 卡片名称  
description | string | 否 | 卡片描述  
component | string | 是 | 卡片对应的组件名，与 ux 文件名保持一致，例如'widget' 对应 'widget.ux'  
minCardPlatformVersion | number | 是 | 支持的最小卡片平台版本号  
versionCode | number | 是 | 卡片版本号，如：2  
versionName | string | 是 | 卡片版本名称，如：`"1.0"`  
targetManufacturers | string[] | 否 | 目标厂商，若配置此字段，则需要指定对应厂商，如不指定，可能不能在对应的厂商上架。可选值`vivo`、 `OPPO`、`xiaomi`、`honor`  
features | FeatureInfo[] | 否 | 卡片使用的 feature 列表，卡片的 feature 列表单独定义  
permissions | [PermissionInfo](</reference/configuration/manifest/#permissioninfo>)[] | 否 | 权限申请，示例: `[{ "name": "watch.permission.LOCATION" }]`  
sizes | Size[] | 是 | 卡片支持的外观尺寸选项，如：`["2x2","2x1"]`  
deviceTypeList | DeviceType[] | 否 | 卡片支持的设备类型，如：`["phone","watch"]`  
previewImages | PreviewImage[] | 是 | 卡片各个尺寸下预览图。如在普通应用中新建卡片，预览图应放在卡片工程目录中。  
  
轻卡独有字段：

属性 | 类型 | 必填 | 描述  
---|---|---|---  
providerUri | ProviderUri | 是 | widgetProvider 的 uri 标识  
providerPackage | string | 是 | widgetProvider 所在应用的包名  
minProviderVersion | number | 是 | widgetProvider 所在应用的最小版本号  
refreshDuration | number | 否 | 1、表示定时数据刷新间隔，以秒为单位  
2、此字段会影响卡片的刷新执行，两次曝光的间隔小于数据刷新间隔值时，数据不会被拉取  
3、支持运营配置  
4、默认值 30x60=1800 （30 分钟）（小于默认值，上架会审核）  
scheduledRefreshTime | string[] | 否 | 1、表示卡片的定点刷新的时刻，采用 24 小时制，精确到分钟，如["10:30", "21:30"]。 2、和 refreshDuration 同时指定时，scheduledRefreshTime 优先，指定多个定点刷新时刻，时刻间隔需大于 refreshDuration。  
  
### DeviceType

卡片支持的设备类型枚举，当前只支持 watch 和 phone

类型值 | 说明  
---|---  
watch | 手表  
phone | 手机，暂不支持  
tv | 电视，暂不支持  
car | 汽车，暂不支持  
band | 手环，暂不支持  
  
### ProviderUri

专用于轻卡平台的字段，代表 widgetProvider 的 URI 标识。

分类 | 规范 | 说明  
---|---|---  
蓝河应用 | `widget-provider://$packageName/$name` | 蓝河应用提供数据  
手机安卓应用 | `content://$authority/$path/$id` | 手机安卓应用提供数据  
服务端 | `https://$authority/$path` | 服务端提供数据  
  
### FeatureInfo

需要使用的 feature 声明，例如：
[code] 
    {
      "name": "blueos.network.fetch"
    }
[/code]

复制代码

### Size

卡片在布局网格中的占位大小（宽度和高度，以栅格个数为单位），支持 "FULL"（全宽/全高）、"AUTO" (宽度/高度自适应)与具体数值的组合，并通过格式如 "2x2"、"FULLx4"、"1xFULL"、"4xAUTO"来定义。

**注意** ：`2x2`中间没有空格。

### PreviewImage

卡片预览图
[code] 
    {
      "size": "1x1",
      "images": ["/assest/a.png", "/assest/b.png"]
    }
[/code]

复制代码

## 实践示例

### 标准卡

工程目录：
[code] 
    └── src
    │   ├── widgets                 # 统一存放项目快应用卡片代码
    │   │    └── widget1            # 表示卡片1的目录
    │   │          ├──i18n          # 卡片1的国际化资料目录
    │   │          ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
    │   │          └──index.ux      # 卡片的ux和逻辑实现文件
    │   └── manifest.json           # 配置应用基本信息
    └── package.json                # 定义项目需要的各种模块及配置信息
[/code]

复制代码

对应的 manifest.json：
[code] 
    {
      "router": {
        "widgets": {
          "widgets/widget1": {
            "type": "js",
            "name": "xx卡片",
            "description": "这是一个xx卡片",
            "component": "index",
            "features": [{ "name": "blueos.network.fetch" }],
            "minCardPlatformVersion": 2000,
            "sizes": ["2x2", "2x1"],
            "deviceTypeList": ["phone", "watch"],
            "previewImages": [
              {
                "size": "2x2",
                "images": ["/assest/a.png", "/assest/b.png"]
              },
              {
                "size": "2x1",
                "images": ["/assest/c.png", "/assest/d.png"]
              }
            ]
          }
        }
      }
    }
[/code]

复制代码

### 轻卡

工程目录：
[code] 
    └── src
    │   ├── widgets                 # 统一存放项目快应用卡片代码
    │   │    └── widget1            # 表示卡片1的目录
    │   │          ├──i18n          # 卡片1的国际化资料目录
    │   │          ├──assets        # 卡片1的资源文件（卡片使用的非代码资源必须放在卡片目录下）
    │   │          └──index.ux      # 卡片的ux和逻辑实现文件
    │   └── manifest.json           # 配置应用基本信息
    └── package.json                # 定义项目需要的各种模块及配置信息
[/code]

复制代码

对应的 manifest.json：
[code] 
    {
      "router": {
        "widgets": {
          "widget/widget1": {
            "type": "lite",
            "name": "轻卡",
            "description": "这是一张轻卡",
            "component": "index",
            "providerUri": "widget-provider://com.example.demo/mymusic",
            "providerPackage": "com.example.demo",
            "minProviderVersion": 80801,
            "refreshDuration": 1800000,
            "scheduledRefreshTime": ["10:30", "21:30"],
            "minCardPlatformVersion": 2000,
            "sizes": ["2x2", "2x1"],
            "deviceTypeList": ["watch"],
            "previewImages": [
              {
                "size": "2x2",
                "images": ["/assest/a.png", "/assest/b.png"]
              },
              {
                "size": "2x1",
                "images": ["/assest/c.png", "/assest/d.png"]
              }
            ]
          }
        }
      }
    }
[/code]

复制代码