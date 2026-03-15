# 页面布局

# 页面布局

更新时间：2024/01/10 16:04:30

蓝河应用使用的是 Flex 布局方式。

## 盒模型

蓝河应用布局框架使用 border-box 模型，具体表现与宽高边距计算可参考 MDN 文档 [box-sizing](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing>)， 暂不支持 content-box 模型与手动指定 box-sizing 属性。

布局所占宽度 Width：

`Width = width(包含padding-left + padding-right + border-left + border-right)`

布局所占高度 Height:

`Height = height(包含padding-top + padding-bottom + border-top + border-bottom)`

## 长度单位

### px

与传统 web 页面不同，`px`是相对于`项目配置基准宽度`的单位，已经适配了移动端屏幕，其原理类似于`rem`

开发者只需按照设计稿确定框架样式中的 px 值即可。

首先，我们需要定义`项目配置基准宽度`，它是项目的配置文件（`<ProjectName>/src/manifest.json`）中`config.designWidth`的值

然后， `设计稿1px`与`框架样式1px`转换公式如下：
[code] 
    设计稿1px / 设计稿基准宽度 = 框架样式1px / 项目配置基准宽度
[/code]

复制代码

**示例如下：**

若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，实现的两种方案如下：

**方案一：**

修改`项目配置基准宽度`：将`项目配置基准宽度`设置为`设计稿基准宽度`，则`框架样式1px`等于`设计稿1px`

  * 设置`项目配置基准宽度`，在项目的配置文件（`<ProjectName>/src/manifest.json`）中，修改`config.designWidth`：

[code] 
    {
      "config": {
        "designWidth": 640
      }
    }
[/code]

复制代码

  * 设置元素 A 对应的框架样式：

[code] 
    width: 100px;
[/code]

复制代码

**方案二：**

不修改`项目配置基准宽度`：若当前项目配置的`项目配置基准宽度`为 466，设元素 A 的框架样式 x`px`，由转换公式得：`100 / 640 = x / 466`

  * 设置元素 A 对应的框架样式：

[code] 
    width: 73px;
[/code]

复制代码

## 设置定位

position 将支持三种属性值：relative、absolute 和 fixed，并且默认值为 relative，入门可以参考[MDN 文档](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/position>)

## 设置样式

开发者可以使用`内联样式`、`tag选择器`、`class选择器`、`id选择器`来为组件设置样式

同时也可以使用`并列选择`、`后代选择器`设置样式

详细的文档可以查看[此处](</component/common/common-styles>)

**注意:** template 的样式读取范围，只包括内联样式与当前 ux 文件的`<style>`标签内的样式与引入的 css/less/scss，如果一个 ux 文件被包装成自定义组件并被其他父组件引用，其样式并不能响应父组件的样式。

**示例如下：**
[code] 
    <template>
      <div class="tutorial-page">
        <text style="color: #FF0000;">内联样式</text>
        <text id="title">ID选择器</text>
        <text class="title">class选择器</text>
        <text>tag选择器</text>
      </div>
    </template>
    
    <style>
      .tutorial-page {
        flex-direction: column;
      }
      /* tag选择器 */
      text {
        color: #0000ff;
      }
      /* class选择器（推荐） */
      .title {
        color: #00ff00;
      }
      /* ID选择器 */
      #title {
        color: #00a000;
      }
      /* 并列选择 */
      .title,
      #title {
        font-weight: bold;
      }
      /* 后代选择器 */
      .tutorial-page text {
        font-size: 42px;
      }
      /* 直接后代选择器 */
      .tutorial-page > text {
        text-decoration: underline;
      }
    </style>
[/code]

复制代码

## 通用样式

通用样式如 margin,padding 等属性可以点击[此处](</component/common/common-styles>)

## Flex 布局示例

框架使用`Flex布局`，关于`Flex布局`可以参考外部文档[A Complete Guide to Flexbox](<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>)

flex 布局的支持也可以在官网文档的[通用样式](</component/common/common-styles>)查询

div 组件为最常用的 Flex 容器组件，具有 Flex 布局的特性；text、a、span、label 组件为文本容器组件，**其它组件不能直接放置文本内容**

**示例如下：**
[code] 
    <template>
      <div class="tutorial-page">
        <div class="item">
          <text>item1</text>
        </div>
        <div class="item">
          <text>item2</text>
        </div>
      </div>
    </template>
    
    <style>
      .tutorial-page {
        /* 交叉轴居中 */
        align-items: center;
        /* 纵向排列 */
        flex-direction: column;
      }
      .tutorial-page > .item {
        /* 有剩余空间时，允许被拉伸 */
        /*flex-grow: 1;*/
        /* 空间不够用时，不允许被压缩 */
        flex-shrink: 0;
        /* 主轴居中 */
        justify-content: center;
        width: 200px;
        height: 100px;
        margin: 10px;
        background-color: #ff0000;
      }
    </style>
[/code]

复制代码

上一篇

[javascript代码](</reference/configuration/script/>)

下一篇

[页面路由](</reference/app-service/switching-pages/>)