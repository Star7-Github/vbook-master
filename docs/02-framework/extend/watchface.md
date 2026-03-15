# 表盘

# 表盘

更新时间：2025/10/09 11:25:10

## 概述

表盘指默认开机首屏的界面，可分为指针表盘和数字表盘，除了查看时间，表盘还可以给用户提供展示计步、心率、电量、天气等关键信息。

系统会内置一些表盘，同时也支持第三方开发，用户可以根据喜好通过长按切换选择表盘。

## 表盘项目结构

一个表盘项目包含：描述项目配置信息的[manifest 文件](</reference/configuration/manifest>)，一个描述表盘界面的[ux 文件](</reference/configuration/ux-file>)，以及引用的图片资源文件，典型示例如下：

应用根目录
[code] 
    .
    ├── README.md
    ├── package.json
    ├── sign
    │   ├── certificate.pem
    │   └── private.pem
    └── src
        ├── app.ux
        ├── manifest.json
        └── watch3000
            ├── assets
            │   ├── aaa.png
            │   └── bg.png
            ├── edit.ux
            └── index.ux
[/code]

复制代码

## manifest 文件

manifest.json 文件中包含了表盘信息描述、接口声明等

### manifest

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
package | String | - | 是 | 表盘包名，**确认与原生应用的包名不一致** ，包名须保证唯一，推荐采用 com.company.watch 的格式，如：com.company.watch.demo  
versionName | String | - | 否 | 表盘版本名称，如：`"1.0"`  
versionCode | Integer | - | 是 | 表盘版本号，从`1`自增，**推荐每次重新上传包时`versionCode`+1**  
config | Object | - | 是 | 系统配置信息，详见下面说明  
router | Object | - | 是 | 路由信息，详见下面说明  
deviceTypeList | Array<String> | watch | 否 | 可选值有：`watch`, `watch-square`, `watch-round`, `tv` , `car`, `phone`  
customData | Record<string, string> | - | 否 | 开发者自定义字段，限定不超过 30 个字符，可通过 `packageManager.getCustomData()`方法读取  
  
### config

用于定义系统配置和全局数据。

属性 | 类型 | 默认值 | 描述  
---|---|---|---  
designWidth | Integer | 466 | 页面设计基准宽度，根据实际设备宽度来缩放元素大小  
  
### router

用于定义页面的组成和相关配置信息，如果页面没有配置路由信息，则在编译打包时跳过。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
watchfaces | Object | - | 是 | 页面配置列表，key 值为表盘目录（命名为**watch+表盘 id** ，对应表盘目录名，例如表盘 id 为 3000，则 key 为 `watch3000`， 对应 `watch3000` 目录），value 为该表盘详细配置 ，详见下面说明  
  
#### router.watchfaces[watchPath]

用于定义单个表盘页面信息。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
id | Integer | - | 是 | 表盘唯一标识，由服务端生成  
name | String | - | 是 | 表盘名称，用于在表盘商店、切换选择等显示的名称  
component | String | - | 是 | 表盘对应组件名，与 ux 文件名保持一致，例如'index' 对应 'index.ux'  
edit | String | '' | 否 | 为空字符串 `''` 时，表盘为不可编辑表盘；为非空字符串值时，代表表盘目录下编辑表盘页面的路由名称  
features | Array | - | 否 | 表盘用到的 features 全部在此配置，注意与蓝河应用的配置区别  
params | Object | - | 是 | 表盘参数，详见下面说明  
  
##### params

表盘特有参数，用于表盘框架加载表盘和展示列表。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
previewImage | [String] | - | 是 | 字符串数组，数组每一项代表预览图片路径，用于在表盘商店、切换选择等显示的预览图，预览图片的路径格式为：`local://包名/path`  
hpw | Integer | - | 否 | 高功耗提醒，0-无高功耗提醒，1-需要高功耗提醒，默认为 0  
  
示例:
[code] 
    {
      "package": "com.vivo.watch.sample",
      "versionName": "1.0.0",
      "versionCode": 1,
      "config": {
        "designWidth": 466
      },
      "router": {
        "watchfaces": {
          "watch3000": {
            "id": 3000,
            "name": "表盘示例",
            "component": "index",
            "edit": "edit",
            "features": [
              {
                "name": "blueos.app.router"
              }
            ],
            "params": {
              "previewImage": ["assets/aaa.png"],
              "hpw": 0
            }
          }
        }
      },
      "customData": { "key1": "value1", "key2": "value2" }
    }
[/code]

复制代码

## ux 文件

index.ux 文件中包含了表盘界面描述、样式定义和业务逻辑代码，最终会编译为 js 文件，在运行时中以挂件组件的形式进行加载

### 生命周期

#### onInit

监听表盘初始化。当表盘数据完成初始化时调用，只触发一次

#### onReady

监听表盘界面创建完成。当表盘界面完成创建可以显示时触发，只触发一次

#### onDestroy

监听表盘退出。当表盘即将退出销毁时触发

#### onShow()

监听表盘返回前台,表盘返回前台时调用

#### onHide()

监听表盘退到后台,表盘退到后台时调用
[code] 
    <template>
      <div class="wrap">
        <!-- 表盘界面 -->
      </div>
    </template>
    <script>
      // 业务逻辑代码
      export default {
        // 初始化数据
        data() {
          return {}
        },
        // 生命周期
        onInit() {},
        onShow() {},
        onHide() {}
        // 自定义方法
        refreshTime() {}
      }
    </script>
    <style>
      /* 样式描述 */
    </style>
[/code]

复制代码

上一篇

[widgetProvider 开发](</reference/widget/widget-provider/>)

下一篇

[快捷卡片](</reference/extend/widget/>)