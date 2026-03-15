# manifest文件

# manifest 文件

更新时间：2025/10/09 11:25:10

manifest.json 文件中包含了应用描述、接口声明、页面路由信息

## manifest

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
package | string | - | 是 | 应用包名，**确认与原生应用的包名不一致** ，推荐采用 com.company.module 的格式，如：com.example.demo  
name | string | - | 是 | 应用名称，**6 个汉字以内，与应用商店保存的名称一致** ，用于在桌面图标、弹窗等处显示应用名称  
icon | string | - | 是 | 应用图标，提供 114x114 大小的即可  
versionName | string | - | 否 | 应用版本名称，如：`"1.0"`  
versionCode | number | - | 是 | 应用版本号，从`1`自增，**推荐每次重新上传包时`versionCode`+1**  
features | FeatureInfo[] | - | 否 | 接口列表，绝大部分接口都需要在这里声明，否则不能调用，详见每个接口的文档说明  
config | Config | - | 是 | 系统配置信息，详见下面说明  
router | Router | - | 是 | 路由信息，详见下面说明  
deviceTypeList | Array<string> | watch | 否 | 可选值有：`watch`, `watch-square`, `watch-round`, `tv` , `car`, `phone`  
display | Display | - | 否 | UI 显示相关配置，详见下面说明  
permissions | PermissionInfo[] | - | 否 | 权限申请示例:[{ "name": "watch.permission.LOCATION" }]  
appCategory | AppCategory[] | - | 是 | 应用类别,可选值详见下文应用类别说明,最多 2 个分类  
customData | Record<string, string> | - | 否 | 开发者自定义字段，限定不超过 30 个字符，可通过 `packageManager.getCustomData()`方法读取  
distrubuteRules | DistrubuteRules | - | 否 | 表示分发规则，定义包对应的细分设备规格的分发策略，以便在应用市场进行云端分发应用包时做精准匹配。该标签可配置的分发策略维度包括 minAPILevel  
widgetProvider | WidgetProvider[] | - | 否 | 注册和生命 widgetProvider，为蓝河智慧服务卡片提供数据  
  
### AppCategory

appCategory 要求开发者必填，如有开发者未填，系统将设置为 ['other']。

取值 | 说明  
---|---  
business | 商业类应用  
education | 教育类应用  
pastime | 娱乐类应用  
finance | 财务类应用  
games | 游戏类应用  
lifestyle | 生活方式类应用  
medical | 医疗类应用  
music | 音乐类应用  
news | 新闻类应用  
photography | 摄影类应用  
reference | 参考资料类应用  
social | 社交类应用  
sports | 体育类应用  
travel | 旅游类应用  
utilities | 实用工具类应用  
video | 视频类应用  
weather | 天气类应用  
navigation | 导航类应用  
book | 书籍类应用  
shopping | 购物类应用  
podcasts | 播客类应用  
audiobooks | 音频书籍类应用  
radio | 电台类应用  
other | 其它类应用  
  
### FeatureInfo

声明应用需要使用的 feature

属性 | 类型 | 默认值 | 描述  
---|---|---|---  
name | string | - | feature 名称，可在具体 feature 的说明文档中查阅  
  
**示例：**
[code] 
    {
      "name": "blueos.storage.file"
    }
[/code]

复制代码

### Config

用于定义系统配置和全局数据。

属性 | 类型 | 默认值 | 描述  
---|---|---|---  
designWidth | number | - | 页面设计基准宽度，根据实际设备宽度来缩放元素大小，建议使用 466  
  
**示例：**
[code] 
    {
      "designWidth": 466
    }
[/code]

复制代码

### Router

用于定义页面的组成和相关配置信息，如果页面没有配置路由信息，则在编译打包时跳过。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
entry | string | - | 是 | 首页名称  
pages | Record<string, Page> | - | 是 | 页面配置列表，key 值为页面名称（对应页面目录名，例如 Hello 对应'Hello'目录），value 为页面详细配置 page，详见下面说明  
  
**示例：**
[code] 
    {
      "entry": "Demo",
      "pages": {
        "Demo1": {
          "component": "index"
        },
        "Demo2": {
          "component": "index"
        }
      }
    }
[/code]

复制代码

### Page

用于定义单个页面路由信息。

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
component | string | - | 是 | 页面对应的组件名，与 ux 文件名保持一致，例如'hello' 对应 'hello.ux'，目前仅支持 index.ux  
path | string | /<页面名称> | 否 | 页面路径，例如“/user”,不填则默认为/<页面名称>。  
path 必须唯一,不能和其他 page 的 path 相同。  
下面 page 的 path 因为缺失,会被设置为“/Index”：  
`"Index": {"component": "index"}`  
launchMode | LaunchMode | standard | 否 | 声明页面的启动模式  
followHand | string | enable | 否 | 配置页面是否支持右滑跟手，disable：不支持；enable：支持  
  
### LaunchMode

页面的启动模式

取值 | 说明  
---|---  
singleTask | 每次打开目标页面都会打开已有的目标页面并回调 onRefresh 生命周期函数，清除该页面上打开的其他页面，没有打开过此页面时会创建新的目标页面实例。  
standard | 每次打开新的目标页面（多次打开目标页面地址时会存在多个相同页面）  
  
### Display

用于定义与 UI 显示相关的配置。

如果在 display 对象下定义以下属性值，则生效范围为此蓝河应用全部页面；

属性 | 类型 | 默认值 | 描述  
---|---|---|---  
backgroundColor | string | #000 | 窗口背景颜色  
  
**示例：**
[code] 
    {
      "backgroundColor": "#ffffff"
    }
[/code]

复制代码

### PermissionInfo

权限配置信息

属性 | 类型 | 默认值 | 含义  
---|---|---|---  
name | PermissionName | - | 权限名  
  
**示例：**
[code] 
    {
      "name": "watch.permission.LOCATION"
    }
[/code]

复制代码

### DistrubuteRules

分发规则详细信息

属性 | 类型 | 默认值 | 含义  
---|---|---|---  
minAPILevel | number | 1 | 表示最低的 APILevel 要求，只有支持该 APILevel 的系统版本，才能被分发。  
  
**示例：**
[code] 
    {
      "minAPILevel": 2
    }
[/code]

复制代码

### WidgetProvider

widgetProvider 详细配置信息

属性 | 类型 | 必填 | 默认值 | 含义  
---|---|---|---|---  
name | string | 是 | - | widgetProvider 名称  
path | string | 是 | - | widgetProvider 的 js 文件路径  
  
**示例：**
[code] 
    {
      "name": "music",
      "path": "/widgetProvider/index.js"
    }
[/code]

复制代码

### PermissionName

权限名及模块接口信息，该信息也可以在具体的模块文档中查看。

权限名 | 模块 | 说明 | 权限错误码  
---|---|---|---  
watch.permission.LOCATION | @blueos.hardware.geolocation | 位置信息 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限）  
watch.permission.STEP_COUNTER | @blueos.hardware.sensor | 计步传感器 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限）  
watch.permission.DEVICE_INFO | @blueos.hardware.device | 设备信息 | 400: 拒绝授予权限 , 402: 权限错误（未声明该权限）  
watch.permission.RECORD | @blueos.multimedia.record | 录音 | 400: 拒绝授予权限, 401: 敏感权限不能在后台运行, 402: 权限错误（未声明该权限）  
watch.permission.BLUETOOTH | @blueos.communication.bluetooth.bluetooth  
@vivo.bluetooth | 允许使用设备蓝牙 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限）  
watch.permission.READ_HEALTH_DATA | @blueos.health.health  
@vivo.health | 读取健康数据 | 400 : 拒绝授予权限, 402: 权限错误（未声明该权限）  
  
上一篇

[文件组织](</reference/configuration/file-organization/>)

下一篇

[ux文件](</reference/configuration/ux-file/>)