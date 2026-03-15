# style样式

# style 样式

更新时间：2024/10/11 11:55:18

用于描述 template 模板的组件样式，决定组件应该如何显示

样式布局采用 CSS Flexbox（弹性盒）样式，针对部分原生组件，对 CSS 进行了少量的扩充以及修改

为了解决屏幕适配问题，所有与大小相关的样式（例如 width、font-size）均以基准宽度（默认 750px）为基础，根据实际屏幕宽度进行缩放

## 文件导入

支持@import 导入外部文件
[code] 
    <style>
      @import './style.css';
      .a {
      }
    </style>
[/code]

复制代码

## 模板内部样式

支持使用 style、class 属性来控制组件的样式
[code] 
    <!-- 内联inline -->
    <div style="color: #f00; margin: 10px;" />
    <!-- class声明 -->
    <div class="normal append" />
[/code]

复制代码

## 伪类

css 伪类是选择器中的关键字，用于指定要选择元素的特殊状态。

名称 | 支持组件 | 描述  
---|---|---  
:active | 通用 | 表示被用户激活的元素，如：被用户按下的按钮。  
  
## 选择器

支持的选择器有：

选择器 | 样例 | 样例描述  
---|---|---  
.class | .intro | 选择所有拥有 class="intro" 的组件  
#id | #firstname | 选择拥有 id="firstname" 的组件  
tag | div | 选择所有 div 组件  
, | .a, .b | 选择所有 class=“.a” 以及 class=“.b”的组件  
#id .class tag | .page .body text | 支持 id,class,tag 的后代选择器，也可以使用">"表示直接后代
[code] 
    <style>
      /* 单个选择器 */
      text {
      }
      .class-abc {
      }
      #idAbc {
      }
      /* 后代选择 */
      .doc-page #testTag div text {
      }
      .doc-page #test-class .class1 {
      }
      .doc-page #testId #testIdId1 {
      }
      /* 直接后代选择 */
      .doc-page #testTag .flex-column > text {
      }
      /* 同一样式适应多个选择器 */
      .font-text,
      .font-comma {
      }
    </style>
[/code]  
  
复制代码

注意，选择器声明的变化可能会导致元素重新绘制。为了减少选择器变化引起的 DOM 更新数量，**当前只支持：CSS 声明的多个选择器中最后一个规则的变更对 DOM 的更新**
[code] 
    <template>
      <div class="{{docBody}}">
        <text class="{{rowDesc}}">描述内容</text>
      </div>
    </template>
    
    <style>
      .doc-body .row-desc1 {
        color: #ff0000;
      }
      .doc-body .row-desc2 {
        color: #0000ff;
      }
      .doc-body2 .row-desc1 {
        color: #00ff00;
      }
    </style>
    
    <script>
      export default {
        // 页面级组件的数据模型
        data: {
          rowDesc: 'row-desc1',
          docBody: 'doc-body',
        },
      }
    </script>
[/code]

复制代码

以上的代码示例，当我们把`rowDesc变量`从`row-desc1`变为`row-desc2`时是通知 Native 更新节点样式，但是如果把`docBody变量`从`doc-body`变为`doc-body2`，是不会通知 DOM 更新的。

因为`doc-body`不是最后一个选择器，非末尾的选择器变更有可能影响很多 DOM 元素，从而影响到渲染性能

## 选择器优先级

当前样式的选择器的优先级计算保持与浏览器一致，是浏览器 CSS 渲染的一个子集（仅支持：inline, id, class, tag, 后代，直接后代）

多条 CSS 声明可以匹配到同一个元素 如 div，应用在该元素上的 CSS 声明总体优先级是：inline > #id > .class > tag，这四大类匹配到该元素的多个 CSS 声明，如：`#page .class-div`和`.page .class-div`，其优先级按照各选择器的权值高低之和来比较

  * `ID选择器`（例如: #hello）的权值为 10000

  * `类选择器`（例如: .example）的权值为 100

  * `类型选择器`（例如: h1）的权值为 1

css 的优先级计算文档也可以查看 [MDN 文档](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity>) 入门

那么以下 CSS 声明计算的权值为：

  * `#page`的权值为：10000

  * `#page .class-div`的权值为：10100

  * `#page .class-div text`的权值为 10101

  * `#page #body .container div text`的权值为：20102

因此：

  * `#page .class-div`和`.page .class-div`比较，权值不一样，权值高优先级高；如果权值相同，则按照声明顺序：后者覆盖前者

## 样式预编译

目前蓝河应用支持`less`与`sass`的预编译，具体教程也可以参考[[这里]](<https://less.bootcss.com/>)
[code] 
    <!--导入外部文件, 代替style内部样式-->
    <style lang="less" src="./lessFile.less"></style>
    
    <!--合并外部文件-->
    <style lang="less">
      @import './lessFile.less';
      .page-less {
        #testTag {
          .less-font-text,
          .less-font-comma {
            font-size: 60px;
          }
        }
      }
    </style>
[/code]

复制代码

## 媒体查询

媒体查询（Media Query）在移动设备上应用十分广泛，开发者经常需要根据设备的大致类型或者特定的特征和设备参数（例如屏幕分辨率）来修改应用的样式。为此媒体查询提供了如下功能：

1.针对设备和应用的属性信息，可以设计出相匹配的布局样式。 2.当屏幕发生动态改变时（比如分屏、横竖屏切换），应用页面布局同步更新。

## CSS 语法规则

使用@media 来引入查询语句，具体规则如下：
[code] 
    @media [media-type] [and|not|only] [(media-feature)] {
      CSS-Code;
    }
[/code]

复制代码

## 举例：
[code] 
    /* level3的写法, 表示：宽度小于30dp时生效 */
    @media (max-width: 30) {  .box {
        background-color: red;
      }
    }
    /* level4的写法，比level3更清晰简洁，表示：宽度小于30dp时生效 */
    @media (width <= 30) {  .box {
        background-color: red;
      }
    }
    /* 多条件写法，表示：宽度大于400dp且小于700dp时生效 */
    @media screen and (min-width: 400) and (max-width: 700) {  .box {
        background-color: red;
      }
    }
    /* 多条件level4写法，表示：宽度大于400dp且小于700dp时生效  */
    @media (400 <= width <= 700) {  .box {
        background-color: red;
      }
    }
    /* 多条件写法，表示：方表和手机上生效 */
    @media screen and (device: watch-square) or screen and (device: phone) {  .box {
        background-color: red;
      }
    }
[/code]

复制代码

## 页面中引用资源

通过@import 方式引入媒体查询，具体使用方法如下：
[code] 
    @import url [media-type] [and|not|only] [(media-feature) ];
[/code]

复制代码

例如：
[code] 
    @import '../common/style.css' screen and (min-width: 600) and (max-width: 1200);
[/code]

复制代码

## 动态修改样式

动态修改样式有多种方式，包括但不限于以下：

  * **修改 class** ：更新组件的 class 属性中使用的变量的值
  * **修改内联 style** ：更新组件的 style 属性中的某个 CSS 的值
  * **修改绑定的对象** ：通过绑定的对象控制元素的样式
  * **修改绑定的样式字符串** ：通过样式字符串控制元素的样式

**示例如下：**
[code] 
    <template>
      <div style="flex-direction: column;">
        <!-- 修改 class -->
        <text class="normal-text {{ className }}" onclick="changeClassName">点击我修改文字颜色</text>
        <!-- 修改内联 style -->
        <text style="color: {{ textColor }}" onclick="changeInlineStyle">点击我修改文字颜色</text>
        <!-- 修改绑定的对象 -->
        <text style="{{ styleObj }}" onclick="changeStyleObj">点击我修改文字颜色</text>
        <!-- 修改绑定的样式字符串  -->
        <text style="{{ styleText }}" onclick="changeStyleText">点击我修改文字颜色</text>
      </div>
    </template>
    
    <style>
      .normal-text {
        font-weight: bold;
      }
      .text-blue {
        color: #0faeff;
      }
      .text-red {
        color: #f76160;
      }
    </style>
    
    <script>
      export default {
        data: {
          className: 'text-blue',
          textColor: '#0faeff',
          styleObj: {
            color: '#f00',
          },
          styleText: 'color: #0f0',
        },
        changeClassName() {
          this.className = 'text-red'
        },
        changeInlineStyle() {
          this.textColor = '#f76160'
        },
        changeStyleObj() {
          this.styleObj = {
            color: '#00f',
          }
        },
        changeStyleText() {
          this.styleText = 'color: #0f0'
        },
      }
    </script>
[/code]

复制代码

## 引入 less/scss 预编译

### less 篇

less 语法入门请参考[less 中文官网](<https://less.bootcss.com/>) 学习

使用 less 请先安装相应的类库：`less`、`less-loader`，
[code] 
    npm i less less-loader
[/code]

复制代码

在`<style>`标签上添加属性`lang="less"`
[code] 
    <template>
      <div class="tutorial-page">
        <text id="title">less示例!</text>
      </div>
    </template>
    <style lang="less">
      /* 引入外部less文件 */
      @import './style.less';
      /* 使用less */
    </style>
[/code]

复制代码

### scss 篇

scss 语法入门请参考 [[scss 中文官网]](<https://www.sasscss.com/>)学习

使用 scss 请在蓝河应用项目下执行以下命令安装相应的类库：`node-sass`、`sass-loader`，
[code] 
    npm i node-sass sass-loader
[/code]

复制代码

在`<style>`标签上添加属性`lang="scss"` **示例如下：**
[code] 
    <template>
      <div class="tutorial-page">
        <text id="title">less示例!</text>
      </div>
    </template>
    
    <style lang="scss">
      /* 引入外部scss文件 */
      @import './style.scss';
      /* 使用scss */
    </style>
[/code]

复制代码

## 媒体类型

类型 | 说明  
---|---  
screen | 按屏幕相关参数进行媒体查询。  
  
## 媒体逻辑操作

开发者可以使用逻辑操作符组合多个媒体特性的查询条件，编写复杂的媒体查询。

类型 | 说明  
---|---  
and | and 运算符用于将多个媒体特性组合到一个单独的媒体查询中，要求每个链接的特性返回 true，则此时查询为真。  
not | not 运算符用于否定媒体查询，如果查询不返回 false，则返回 true。如果出现在逗号分隔的列表中，它只会否定应用它的特定查询。如果使用 not 运算符，则必须指定显式媒体类型。例如：not screen and (min-width: 400) and (max-width: 700)注：not 关键字不能用于否定单个功能表达式，它会作用于整个媒体查询。  
only | only 运算符仅用于整个查询匹配应用样式,蓝河应用处理以 only 开头的关键词时将会忽略 only。如果使用 only 运算符，必须指定媒体类型。例如：only screen and (min-width: 400) and (max-width: 700)  
,(逗号) | 逗号分隔效果等同于 or 逻辑操作符。当使用逗号分隔的媒体查询时，如果任何一个媒体查询返回真，样式就是有效的。例如：(orientation: landscape), (height >= 690)。  
or | or 运算符用于将多个媒体特性比较语句组合到一个媒体查询语句中，只要有其中一条媒体特性比较语句返回 true，查询成立。例如：(min-width: 400) or (max-width: 700)  
<= | 小于等于。例如： (400 <= width)。  
>= | 大于等于。例如： (500 >= height)。  
< | 小于。例如： (400 < width)。  
> | 大于。例如： (500 > height)。  
  
## 媒体特性

类型 | 说明 | 查询时是否带单位 | 支持单位  
---|---|---|---  
height | 定义输出设备中的页面可视区域高度。 | 否 | dp  
min-height | 定义输出设备中的页面可视区域最小高度。 | 否 | dp  
max-height | 定义输出设备中的页面可视区域最大高度。 | 否 | dp  
width | 定义输出设备中的页面可视区域宽度。 | 否 | dp  
min-width | 定义输出设备中的页面可视区域最小宽度。 | 否 | dp  
max-width | 定义输出设备中的页面可视区域最大宽度。 | 否 | dp  
orientation | 定义屏幕处于横屏模式还是竖屏模式，支持属性：portrait（竖屏）、landscape（横屏）。 | 否 | 无  
aspect-ratio | 定义输出设备中的页面可见区域宽高比，比例值需要按照 x / y 的格式，例如 1 / 2。 | 否 | 无  
min-aspect-ratio | 定义输出设备中的页面可见区域最小宽高比，参数要求同上。 | 否 | 无  
max-aspect-ratio | 定义输出设备中的页面可见区域最大宽高比，参数要求同上。 | 否 | 无  
device | device 的可选值为:`phone`、`watch`、`car`、`tv`、`pad`、`watch-square`、`watch-round`，`watch` 默认 `watch-square` | 否 | 无  
  
上一篇

[ux文件](</reference/configuration/ux-file/>)

下一篇

[javascript代码](</reference/configuration/script/>)