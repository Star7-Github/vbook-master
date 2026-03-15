# 动画样式

# 动画样式

更新时间：2025/04/15 11:26:34

蓝河应用支持开发者制作动画，提供了`transform`类、`animation`类的动画样式属性，且参数格式与 CSS 对齐，更方便开发者上手适配动画

`transform`可参考此 [文档](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform>) 入门

`animation`可参考此 [文档](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation>) 入门

**动画样式列表**

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
transform-origin | `<position>` | 0px 0px | 变换原点位置，单位目前仅支持 px，格式为：50px 100px  
transform | `<string>` | - | 见下面 transform 操作  
animation-name | `<string>` | - | 与@keyframes 的 name 相呼应，见下面@keyframes 属性  
animation-delay | `<time>` | 0 | 目前支持的单位为[ s(秒) | ms(毫秒) ]  
animation-duration | `<time>` | 0 | 目前支持的单位为[ s(秒) | ms(毫秒) ]  
animation-iteration-count | `<integer>` | `infinite` | 1 | 定义动画播放的次数，可设置为`infinite`无限次播放  
animation-timing-function | linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(`<number>`, `<number>`, `<number>`, `<number>`) | step-start | step-end | steps(number_of_steps[, step-direction]?) | ease | 规定动画的速度曲线  
animation-fill-mode | none | forwards | none | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式  
animation-direction | normal | reverse | alternate | alternate-reverse | normal | 定义动画播放的方向，详情请看[文档](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction>)  
  
**注** ：

  * animation-timing-function 类型

cubic-bezier(`<number>`, `<number>`, `<number>`, `<number>`) | step-start | step-end | steps(number_of_steps[, step-direction]?) 后支持 。其中：

steps(number_of_steps，step-direction)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
number_of_steps | `<integer>` | - | 是 | 表示等间隔步数的正整数  
step-direction | jump-start | jump-end | jump-none | jump-both | start | end | end | 否 | 指示函数左连续或右连续的关键字  
  
  * cubic-bezier(x1, y1, x2, y2)

参数 x1, y1, x2, y2 是 `<number>` 类型的值，代表当前定义的立方贝塞尔曲线中的 P1 和 P2 点的横坐标和纵坐标，x1 和 x2 必须在 [0，1] 范围内，否则当前值无效。

## transform

名称 | 类型  
---|---  
translate | `<length>` | `<percent>`  
translateX | `<length>` | `<percent>`  
translateY | `<length>` | `<percent>`  
scale | `<number>`  
scaleX | `<number>`  
scaleY | `<number>`  
rotate | `<deg>`  
  
## animation-fill-mode

animation-fill-mode 属性规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。

默认情况下，CSS 动画在第一个关键帧播放完之前不会影响元素，在最后一个关键帧完成后停止影响元素。animation-fill-mode 属性可重写该行为。

值 | 描述  
---|---  
none | 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。  
forwards | 在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。  
backwards`暂不支持` | 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。  
both`暂不支持` | 动画遵循 forwards 和 backwards 的规则。  
  
## animation-name

指定所采用的一系列动画，属性值的每个名称代表一个由 @keyframes 属性定义的关键帧序列。该属性支持在组件中应用单个动画或多个动画 ，应用多个动画时动画同时开始执行。

示例代码：
[code] 
    /* 单个动画 */
    animation-name: Color;
    animation-name: translate;
    animation-name: rotate;
    
    /* 多个动画 */
    animation-name: Color, Opacity;
    animation-name: Width, translate, rotate;
[/code]

复制代码

## @keyframes

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
background-color | `<color>` | - | -  
opacity | `<number>` | - | -  
width/height | `<length>` | - | 暂不支持百分比  
transform | `<string>` | - | -  
  
**注** ：

暂时不支持起始值(0%)或终止值(100%)缺省的情况，都需显式指定。

上一篇

[颜色样式](</component/common/color/>)

下一篇

[自定义动画](</component/common/private-animation/>)