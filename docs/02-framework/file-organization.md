# 文件组织

# 文件组织

更新时间：2024/01/10 16:04:30

> 本文对项目的文件目录及相关内容进行了介绍，包括蓝河应用文件结构讲解，配置信息、新增页面等

## 项目介绍

通过 BlueOS Studio 新建一个项目，这个项目已经包含了**项目配置** 与**示例页面** 的初始代码，项目根目录主要结构如下：
[code] 
    ├── scripts                   工具脚本文件
    ├── src
    │   ├── assets                公用资源
    │   │   ├── images            图片资源
    │   │   └── styles            应用样式
    │   ├── pages                 页面目录
    │   │   ├── Demo              应用首页
    │   │   └── DemoDetail        应用详情页
    │   ├── app.ux                app.ux文件。
    │   └── manifest.json         项目配置文件，配置应用图标、页面路由等
    └── jsconfig.json             js 配置文件，用于语法校验
    └── package.json              定义项目需要的各种模块及配置信息
[/code]

复制代码

### 目录的简要说明如下：

  * **src** ：项目源文件夹
  * **app.ux** 文件用于全局 JavaScript 逻辑和应用生命周期管理，[详见](</api/extend/lifecycle/>)

## 配置信息

每个应用都要有专属的名称，图标等，这些信息都需要在`manifest.json`文件中配置。详见文档[manifest 文件](</reference/configuration/manifest>)

### 应用包名（package）

应用包名，是区别于其他应用的唯一标识

推荐采用 com.company.module 的格式，示例如下：
[code] 
    {
      "package": "com.example.demo"
    }
[/code]

复制代码

### 应用名称（name）

应用名称，6 个汉字以内，与应用商店保存的名称一致；框架提供保存到桌面的功能，桌面上显示的应用名即为此属性

示例如下：
[code] 
    {
      "name": "发票小助手"
    }
[/code]

复制代码

### 应用图标（icon）

规则为正方形（不能是圆角），且务必无白边
[code] 
    {
      "icon": "/assets/images/logo.png"
    }
[/code]

复制代码

### 应用版本名称、版本号（versionName、versionCode）

应用版本名称、版本号为开发者的应用包维护的版本信息

应用版本名称为`主版本.次版本`格式

应用版本号为整数，从`1`开始，每次更新上架请自增 1

示例如下：
[code] 
    {
      "versionName": "1.0",
      "versionCode": 1
    }
[/code]

复制代码

### 配置接口列表（features）

在使用接口时，需要先在 manifest 中声明接口。在每个接口文档的顶部，都附有声明接口的配置代码

以 fetch 网络请求为例，示例如下：
[code] 
    {
      "features": [{ "name": "blueos.communication.network.fetch" }]
    }
[/code]

复制代码

## 新增页面

新增及配置页面，需要依赖`manifest.json`中`router`配置

### router

`router`，路由，用于定义页面的实际地址、跳转地址。如果 ux 页面没有配置路由，则不参与项目编译。一个目录下最多只能存在一个主页面文件（不包括组件文件）

#### 首页 (router.entry)

首页，即应用平台启动时默认打开的页面。首页需配置为应用中某页面的名称，即在`<ProjectName>/src`目录下，**页面目录的相对路径**

假设工程根目录如下所示
[code] 
    └── src
        └── Demo                  页面目录，存放各自页面私有的资源文件和组件文件
            └── index.ux          页面文件，文件名不必与父文件夹相同（推荐index.ux）
[/code]

复制代码

假设首页为 Demo 目录下的 index.ux 文件，则首页对应的页面名称为`Demo`
[code] 
    {
      "router": {
        "entry": "Demo"
      }
    }
[/code]

复制代码

#### 页面路由对象（router.pages）

页面路由对象，key 为页面名称（`<ProjectName>/src`目录下，**页面目录的相对路径** ），value 为页面具体路由配置，key 不要重复

页面具体路由配置（router.pages 的 value）包括以下属性：

  * **component** ：页面对应的 ux 文件名
  * **path** ：页面路径，不填则默认为页面名称（`<ProjectName>/src`目录下，页面目录的**相对路径** ）

示例如下：

假设工程根目录如下所示
[code] 
    └── src
        |── Demo                  页面目录，存放各自页面私有的资源文件和组件文件
        |   └── index.ux          页面文件，文件名不必与父文件夹相同（推荐index.ux）
        └── Doc
            └── Layout            页面目录，存放各自页面私有的资源文件和组件文件
                └── index.ux      页面文件，文件名不必与父文件夹相同（推荐index.ux）
[/code]

复制代码

当页面名称（router.pages 的 key）为`Demo`时，对应的页面配置（router.pages 的 value）包括：

  * **component** ：页面对应的 ux 文件名`index`
  * **path** ：页面路径，默认为页面名称`Demo`

[code] 
    {
      "router": {
        "pages": {
          "Demo": {
            "component": "index"
          },
          "Doc/Layout": {
            "component": "index"
          }
        }
      }
    }
[/code]

复制代码

现在，开发者就可以通过`/Demo`访问到 Demo 目录下的 index.ux 页面了

上一篇

[框架简介](</reference/configuration/intro/>)

下一篇

[manifest文件](</reference/configuration/manifest/>)