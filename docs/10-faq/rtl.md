# RTL 适配

# 国际化（RTL）

更新时间：2025/12/23 15:57:12

## 1.概述

国际化（i18n，Internationalization）是系统层面提供的一种通用设计能力，用于支持多语言环境，使应用能够在不同国家和地区正常运行。

本地化（L10n，Localization）则是应用层面针对具体国家或地区进行的个性化调整，包括语言翻译、文化习惯和界面适配等，使用户获得符合当地使用习惯的体验。

蓝河系统已提供大部分语言的 i18n 能力，本方案旨在进一步补充对 RTL（Right-to-Left）语言的支持。

## 2\. 整体方案

LTR 和 RTL 是阅读顺序 Left to Right (LTR) 和 Right to Left (RTL) 的简称。汉语、英语等世界主流语言均遵循从左到右的阅读顺序。而阿拉伯语、波斯语、乌尔都语、希伯来语等语言则使用从右到左的阅读顺序。

本方案从下面四个方面进行考虑设计：

  1. 提供全局和局部两种方式启用 RTL，使应用能够整体或局部跟随语言方向自动适配。
  2. 对布局、文字和图片使用与语言方向无关的属性，实现不同语言下的自动适配。
  3. 通过资源文件统一管理文本和图片，实现多语言动态加载和镜像处理。
  4. 当通用处理不足时，可采用局部特殊处理，针对字体、对齐或图标方向进行精细调整。

## 3\. 启用 RTL

应用支持 **RTL（Right-to-Left，从右到左布局）** 的方式主要有两种：

  1. **系统语言触发** 当系统语言切换为阿拉伯语、维吾尔语等 RTL 语言，并且应用在配置中声明支持 RTL 时，应用会自动启用 RTL 布局。这种方式适用于大多数场景，无需额外干预。
  2. **局部组件显式设置** 对于应用内部的特定组件，可通过显式配置启用 RTL 布局。这种方式适用于特定页面或组件的特殊需求。

> 建议优先依赖系统语言触发方式，以实现全局统一的 RTL 适配；仅在局部布局有特殊需求时使用显式设置。

### 3.1 系统语言切换
[code] 
    import configuration from '@blueos.app.configuration'
    configuration.setLocale({
      language: 'ar',
      countryOrRegion: 'AE',
    })
[/code]

复制代码

### 3.2 manifest 声明支持RTL

为了保证 RTL 的显示效果，需要应用自己声明了对 RTL 的支持后，系统才能根据语言调整布局/文本等方向来适配RTL。

**声明方式：**
[code] 
    {
      "supportsRtl": true
    }
[/code]

复制代码

  * supportsRtl：是否支持RTL显示，默认值为false，只有应用显式的声明了才会根据语言自动切换RTL布局。

启用后系统会根据语言为应用设置全局方向（影响根容器的 dir 属性），应用未显式覆盖的地方将随之适配。

### 3.3 dir 属性

对某组件显式设置的 `dir` 会覆盖继承方向，不会被系统语言自动改写；未显式设置时，方向通常由祖先（常为根节点）决定，而根节点的方向可能由系统/应用语言配置设定。

它不仅影响视觉排版，还会影响文本光标移动、选择与复制、组件默认方向等行为。
[code] 
    <div dir="rtl">
    
    </div>
[/code]

复制代码

设置元素布局模式，支持设置rtl、ltr和 auto 、空值四种属性值：

  * "rtl"：使用从右往左布局模式。
  * "ltr"：使用从左往右布局模式。
  * "auto"：根据元素内容的首个强字符自动判定方向，与系统语言无关。（只对文本生效）
  * 空值或不设置：继承最近祖先组件的方向（通常由根节点的 dir 决定）；若根节点也未设置，默认 LTR。

### 3.4 方向决策链

  * 局部元素显式 `dir`
  * 最近祖先显式 `dir`
  * 由系统语言 + `supportsRtl` 推导
  * 默认：LTR

为方便应用获取方向，后面会提供返回根容器当前方向的方法`app.isLayoutRTL();`。

## 4.布局/组件

系统或框架提供与 RTL / LTR 无关的布局属性（如 `start`/`end`，Flexbox 的主/交叉轴属性），应用通过这些逻辑属性来实现多语言适配，无需为每种语言单独设计布局。布局方向会根据系统语言或手动设置自动调整。

### 4.1 Flex布局

Flex 布局本身支持 RTL。

  * **方向属性** ：`flex-direction`、`align-items`、`justify-content` 等标准属性不需要修改，但需要注意主轴方向和内容顺序在 RTL 下可能发生变化。
  * **左右排版** ：原本明确指定左右方向的布局，需要根据语言环境进行调整，以保证在 RTL 模式下视觉顺序正确。

垂直方向布局不受 RTL 影响。但如果后续涉及竖排文字布局，需要额外处理。

### 4.2 逻辑属性

提供逻辑属性，应用不通过物理属性来描述具体方向。

  * **物理属性** ：直接描述具体方向，如 `margin-left`、`padding-right`、`border-right`。
  * **逻辑属性** ：描述**布局方向** 而不是具体的物理方向，如： 
    * `margin-inline-start` → 左右方向的起始边（LTR: 左, RTL: 右）
    * `margin-block-end` → 上下方向的结束边（块方向）

逻辑属性 | 说明  
---|---  
margin-inline-start | 根据书写方向决定开始边距，LTR 中为左，RTL 中为右  
margin-inline-end | 根据书写方向决定结束边距，LTR 中为右，RTL 中为左  
margin-inline | 同时设置 start 和 end 边距  
padding-inline-start | 根据书写方向决定开始内边距，LTR 中为左，RTL 中为右  
padding-inline-end | 根据书写方向决定结束内边距，LTR 中为右，RTL 中为左  
padding-inline | 同时设置 start 和 end 内边距  
inset-inline-start | 对应 start 偏移，LTR 中为 left，RTL 中为 right  
inset-inline-end | 对应 end 偏移，LTR 中为 right，RTL 中为 left  
inset-inline | 同时设置 start 和 end 偏移  
border-inline-start | 起始边框，LTR 中对应左边，RTL 中对应右边  
border-inline-end | 结束边框，LTR 中对应右边，RTL 中对应左边  
border-inline-start-color | 起始边框颜色  
border-inline-end-color | 结束边框颜色  
border-inline-start-width | 起始边框宽度  
border-inline-end-width | 结束边框宽度  
text-align: start | 文本对齐到开始位置，LTR 为左，RTL 为右  
text-align: end | 文本对齐到结束位置，LTR 为右，RTL 为左  
  
**CanvasRenderingContext2D.textAlign**

设置文字的对齐方式，需要适配RTL

**语法**
[code] 
    ctx.textAlign = align
[/code]

复制代码

**参数**

参数 | 类型 | 描述  
---|---|---  
align | `<string>` | 'start'(默认),'end','left','center','right'  
  
**属性优先级说明：**

逻辑属性和物理属性没有特殊优先级，**都是普通 CSS 属性** ，最终比较的是 `!important` → 权重 → 顺序。

优先级 | 示例  
---|---  
最高 | 带 `!important` 的声明  
其次 | 选择器权重（行内样式 > ID > 类 > 元素）  
最后 | 同权重时，后写的覆盖先写的  
  
**样式规范建议：**

  * 同一规则中避免同时声明同语义的物理与逻辑属性；如需兼容存量，采用“物理属性先写、逻辑属性后写”的固定顺序，并加注释。
  * 公共组件库对外暴露的主题变量统一使用逻辑属性命名，内部做映射。
  * 建议配置样式扫描，识别物理/逻辑同语义并存的规则，提示潜在冲突。

### 4.3 图片镜像

为便捷处理方向性图标在 RTL 下的镜像，蓝河系统提供扩展图片样式属性 `mirroring`。

包含的组件有：image, svg-container

> w3c 提供的 transform: scaleX(-1) 镜像方式，并不具备 auto 选项，且语义不强，故提供该扩展样式以便按方向自动处理。
[code] 
    <div dir="ltr">
      <image src="arrow.png" class="arrow"/>
    </div>
    <style>
    .arrow {
      mirroring: auto;
    }
    </style>
[/code]

复制代码

可选值：
[code] 
    /* 值类型 */
    mirroring: none | auto | always;
[/code]

复制代码

  * none：不镜像翻转（默认行为）
  * auto：在 RTL 环境下自动水平镜像
  * always：始终水平镜像

也可通过资源替换实现镜像效果，参考第 5 章。

### 4.4 文字排版

在 RTL 模式下，文字会自动排版，并按照 Unicode 双向算法（Bidi Algorithm）处理 RTL/LTR 混排。

特殊情况：例如电话号码与阿拉伯文混排可能导致电话号码顺序异常，此时需要应用进行局部处理：
[code] 
    <text>ولدت <span dir="ltr">(+86)138-3456-1000</span></text>
    <text><span dir="ltr">ولدت</span> (+86)138-3456-1000</text>
[/code]

复制代码

## 5\. 资源文件

资源文件用于对图片、文本等内容进行抽象处理，支持多语言和多区域的适配。应用通过切换配置文件（JSON）来实现不同语言的资源加载，无需修改布局或逻辑代码。

### 5.1 图片资源

当需要根据语言切换图片时，需要动态的引入图片资源。

其处理方法如下：

ar-SA.json
[code] 
    {
      "logo": "/assets/image/ar-SA/logo.png",
      "hello": "ولدت"
    }
[/code]

复制代码

zh-CN.json
[code] 
    {
      "logo": "/assets/image/zh-CN/logo.png",
      "hello": "你好"
    }
[/code]

复制代码

在布局文件中写法如下：
[code] 
    <image src='{{$t("logo")}}'></image>
[/code]

复制代码

### 5.2 文本资源
[code] 
    <text>{{$t("hello")}}</text>
[/code]

复制代码

## 6\. 局部特殊处理

尽管大多数布局和文本可以通过逻辑属性、资源文件，自动适配 RTL/LTR，但在某些场景下仍需要局部定制处理。可通过 CSS 伪类、JS 判断或者框架提供的 API 对特定语言或方向进行样式或逻辑微调。

### 6.1 css中:dir() 伪类

通过此伪类，定向调整RTL或者LTR的特殊处理。

可选择值：
[code] 
    :dir(rtl) {
      /**rtl的样式**/
    }
    :dir(ltr) {
      /**ltr的样式**/
    }
[/code]

复制代码

**示例：**
[code] 
    <div dir="rtl">
      <text class="text">هذا نص من اليمين إلى اليسار (RTL)</text>
    </div>
    <style>
    .text:dir(rtl) {
      background-color: #ffe0b2;
    }
    </style>
[/code]

复制代码

### 6.2 css中:lang() 伪类

考虑到阿拉伯世界有许多不同的地区和文化，存在更细致的判断情况。
[code] 
    /* 所有阿拉伯语（包括地区） */
    .card:lang(ar) {
      font-family: 'Amiri', serif;
    }
    
    /* 只针对沙特阿拉伯的阿拉伯语 */
    .card:lang(ar-SA) {
      background-color: #f0f0f0;
    }
    
    /* 英语（包括 en-GB、en-US） */
    .card:lang(en) {
      color: blue;
    }
    
    /* 英式英语单独样式 */
    .card:lang(en-GB) {
      color: green;
    }
[/code]

复制代码

### 6.3 JS 中判断RTL

扩展`@blueos.app.context` 新增 isLayoutRTL 的判断。
[code] 
    import app from '@blueos.app.context'
    
    const isRTL = app.isLayoutRTL();
[/code]

复制代码

### 6.4 RTL 状态变化判断

系统语言变化会触发onConfigurationChanged，此时在onConfigurationChanged中判断就可以了。
[code] 
    onConfigurationChanged(event) {
      if (event && event.type && event.type === 'locale') {
        const isRTL = app.isLayoutRTL();
        console.log('isRTL', isRTL)
      }
    }
[/code]

复制代码

## 7\. 单位/日期/货币/时间等

需要应用自行实现，根据系统语言进行格式化。

### 8.交互/动效

API标准不涉及，这部分以交互为准。

上一篇

[国际化](</reference/question-answer/i18n/>)