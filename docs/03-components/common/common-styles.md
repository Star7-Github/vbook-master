# 通用样式

# 通用样式

更新时间：2025/02/20 20:02:23

通用样式，即所有组件都可以支持的样式

它们均与 css 的属性样式用法保持一致，开发者可写在`内联样式`或`<style>`标签里，实现组件样式的定制化

关于组件样式的设置，可以参考此[文档](</reference/configuration/style-sheet>)入门

## 类型说明

### 长度类型

名称 | 类型定义 | 描述  
---|---|---  
length | String |Number | 用于描述尺寸单位，输入为 number 类型时，使用 px 单位；输入为 string 类型时，需要显式指定像素单位，当前支持的像素单位有： px：逻辑尺寸单位。  
percentage | String | 百分比尺寸单位，如“50%”。  
  
### 颜色类型

名称 | 类型定义 | 描述  
---|---|---  
color | String |颜色枚举字符串 | 用于描述颜色信息。字符串格式如下：  
'rgb(255, 255, 255)'   
'rgba(255, 255, 255, 1.0)'   
HEX 格式：'#rrggbb'，'#aarrggbb'   
枚举格式：'black'，'white'。  
  
### 当前支持的颜色枚举

枚举名称 | 对应颜色 | 颜色  
---|---|---  
aliceblue | #f0f8ff |   
antiquewhite | #faebd7 |   
aqua | #00ffff |   
aquamarine | #7fffd4 |   
azure | #f0ffff |   
beige | #f5f5dc |   
bisque | #ffe4c4 |   
black | #000000 |   
blanchedalmond | #ffebcd |   
blue | #0000ff |   
blueviolet | #8a2be2 |   
brown | #a52a2a |   
burlywood | #deB887 |   
cadetblue | #5f9ea0 |   
chartreuse | #7fff00 |   
chocolate | #d2691e |   
coral | #ff7f50 |   
cornflowerblue | #6495ed |   
cornsilk | #fff8dc |   
crimson | #dc143c |   
cyan | #00ffff |   
darkblue | #00008b |   
darkcyan | #008b8b |   
darkgoldenrod | #b8860b |   
darkgray | #a9a9a9 |   
darkgreen | #006400 |   
darkgrey | #a9a9a9 |   
darkkhaki | #bdb76b |   
darkmagenta | #8b008b |   
darkolivegreen | #556b2f |   
darkorange | #ff8c00 |   
darkorchid | #9932cc |   
darkred | #8b0000 |   
darksalmon | #e9967a |   
darkseagreen | #8fbc8f |   
darkslateblue | #483d8b |   
darkslategray | #2f4f4f |   
darkslategrey | #2f4f4f |   
darkturquoise | #00ced1 |   
darkviolet | #9400d3 |   
deeppink | #ff1493 |   
deepskyblue | #00bfff |   
dimgray | #696969 |   
dimgrey | #696969 |   
dodgerblue | #1e90ff |   
firebrick | #b22222 |   
floralwhite | #fffaf0 |   
forestgreen | #228b22 |   
fuchsia | #ff00ff |   
gainsboro | #dcdcdc |   
ghostwhite | #f8f8ff |   
gold | #ffd700 |   
goldenrod | #daa520 |   
gray | #808080 |   
green | #008000 |   
greenyellow | #adff2f |   
grey | #808080 |   
honeydew | #f0fff0 |   
hotpink | #ff69b4 |   
indianred | #cd5c5c |   
indigo | #4b0082 |   
ivory | #fffff0 |   
khaki | #f0e68c |   
lavender | #e6e6fa |   
lavenderblush | #fff0f5 |   
lawngreen | #7cfc00 |   
lemonchiffon | #fffacd |   
lightblue | #add8e6 |   
lightcoral | #f08080 |   
lightcyan | #e0ffff |   
lightgoldenrodyellow | #fafad2 |   
lightgray | #d3d3d3 |   
lightgreen | #90ee90 |   
lightpink | #ffb6c1 |   
lightsalmon | #ffa07a |   
lightseagreen | #20b2aa |   
lightskyblue | #87cefa |   
lightslategray | #778899 |   
lightslategrey | #778899 |   
lightsteelblue | #b0c4de |   
lightyellow | #ffffe0 |   
lime | #00ff00 |   
limegreen | #32cd32 |   
linen | #faf0e6 |   
magenta | #ff00ff |   
maroon | #800000 |   
mediumaquamarine | #66cdaa |   
mediumblue | #0000cd |   
mediumorchid | #ba55d3 |   
mediumpurple | #9370db |   
mediumseagreen | #3cb371 |   
mediumslateblue | #7b68ee |   
mediumspringgreen | #00fa9a |   
mediumturquoise | #48d1cc |   
mediumvioletred | #c71585 |   
midnightblue | #191970 |   
mintcream | #f5fffa |   
mistyrose | #ffe4e1 |   
moccasin | #ffe4b5 |   
navajowhite | #ffdead |   
navy | #000080 |   
oldlace | #fdf5e6 |   
olive | #808000 |   
olivedrab | #6b8e23 |   
orange | #6b8e23 |   
orchid | #da70d6 |   
palegoldenrod | #eee8aa |   
palegreen | #98fb98 |   
paleturquoise | #afeeee |   
palevioletred | #db7093 |   
papayawhip | #ffefd5 |   
peachpuff | #ffdab9 |   
peru | #cd853f |   
pink | #ffc0cb |   
plum | #dda0dd |   
powderblue | #b0e0e6 |   
purple | #800080 |   
rebeccapurple | #663399 |   
red | #ff0000 |   
rosybrown | #bc8f8f |   
royalblue | #4169e1 |   
saddlebrown | #8b4513 |   
salmon | #fa8072 |   
sandybrown | #f4a460 |   
seagreen | #2e8b57 |   
seashell | #fff5ee |   
sienna | #a0522d |   
silver | #c0c0c0 |   
skyblue | #87ceeb |   
slateblue | #6a5acd |   
slategray | #708090 |   
slategrey | #708090 |   
snow | #fffafa |   
springgreen | #00ff7f |   
steelblue | #4682b4 |   
tan | #d2b48c |   
teal | #008080 |   
thistle | #d8Bfd8 |   
tomato | #ff6347 |   
turquoise | #40e0d0 |   
violet | #ee82ee |   
wheat | #f5deb3 |   
white | #ffffff |   
whitesmoke | #f5f5f5 |   
yellow | #ffff00 |   
yellowgreen | #9acd32 |   
  
## 示例代码
[code] 
    <template>
      <div>
        <div class="box-normal" style="background-color: #f00"></div>
        <div class="box-normal"></div>
      </div>
    </template>
    <style>
      .box-normal {
        background-color: #ff0;
        width: 100px;
        height: 100px;
      }
    </style>
[/code]

复制代码

## 属性列表

**注** ：

通用样式均为非必填项。

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
width | `<length>` | `<percentage>` | - | 未设置时使用组件自身内容需要的宽度  
height | `<length>` | `<percentage>` | - | 未设置时使用组件自身内容需要的高度  
padding | `<length>` | 0 | 简写属性，在一个声明中设置所有的内边距属性，该属性可以有 1 到 4 个值，具体请参考[MDN](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding>)文档  
padding-[left|top|right|bottom] | `<length>` | 0 | 设置一个元素的某个方向的内边距，padding 区域指一个元素的内容和其边界之间的空间，该属性不能为负值。  
margin | `<length>` | 0 | 简写属性，在一个声明中设置所有的外边距属性，该属性可以有 1 到 4 个值，具体请参考 [MDN](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin>)文档  
margin-[left|top|right|bottom] | `<length>` | 0 | 设置一个元素的某个方向的外边距，该属性不能为负值  
border | - | 0 | 简写属性，在一个声明中设置所有的边框属性，可以按顺序设置属性 width style color，不设置的值为默认值  
border-[left|top|right|bottom] | - | 0 | 简写属性，在一个声明中设置对应位置的所有边框属性，可以按顺序设置属性 width style color，不设置的值为默认值  
border-style | solid | solid | 暂时仅支持 1 个值，为元素的所有边框设置样式  
border-width | `<length>` | 0 | 简写属性，在一个声明中设置元素的所有边框宽度，或者单独为各边边框设置宽度，具体请参考 [MDN](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width>) 文档  
border-[left|top|right|bottom]-width | `<length>` | 0 | 为元素的某个方向的边框设置边框宽度  
border-color | `<color>` | black | 简写属性，在一个声明中设置元素的所有边框颜色，或者单独为各边边框设置颜色，颜色值的填入请参考 [颜色配置](</component/common/color>)  
border-[left|top|right|bottom]-color | `<color>` | black | 颜色值的填入请参考 [颜色配置](</component/common/color>)  
border-radius | `<length>` | `<percentage>` | 0 | border-radius 属性允许你设置元素的外边框圆角。设置时需要同时设置 border-width、border-color，单独设置 border-[left|top|right|bottom]-width，border-[left|top|right|bottom]-color 时 border-radius 无效  
border-[top|bottom]-[left|right]-radius | `<length>` | `<percentage>` | 0 | 设置四个角的圆角弧度  
background | `<linear-gradient>` | - | 暂时不能与 background-color、background-image 同时使用  
background-color | `<color>` | - | 颜色值的填入请参考 [颜色配置](</component/common/color>)  
color | `<color>` | - | 颜色值的填入请参考 [颜色配置](</component/common/color>)  
background-image | `<uri>` | - | 暂时不支持与 background-color，border-color 同时使用；支持本地图片资源；暂不支持网络图片资源  
background-size | contain | cover | auto | `<length>` | `<percentage>` | auto auto | 设置背景图片大小  
background-repeat | repeat-x | repeat-y | no-repeat | repeat | repeat | 设置是否及如何重复绘制背景图像  
background-position | `<length>` |`<percentage>`| left | right | top | bottom | center | 0px 0px | 描述了背景图片在容器中绘制的位置，支持 1-4 个参数  
opacity | `<number>` | 1 | opacity 属性指定了一个元素的透明度。  
display | flex | none | flex | 蓝河应用只支持 flex 布局；将当前元素的 display 设置为 none 蓝河应用页面将不渲染此元素  
visibility | visible | hidden | visible | visibility 属性控制显示或隐藏元素而不更改文档的布局  
flex-direction | column | row | column-reverse | row-reverse | row | 默认为横向`row`，父容器为`<div>、<list-item>`时生效  
align-items | stretch | flex-start | flex-end | center | flex-start | align-items 定义了伸缩项目可以在伸缩容器的当前行的侧轴上对齐方式。flex-start(默认值)：伸缩项目在侧轴起点边的外边距紧靠住该行在侧轴起始的边。flex-end：伸缩项目在侧轴终点边的外边距靠住该行在侧轴终点的边 。center：伸缩项目的外边距盒在该行的侧轴上居中放置。stretch：伸缩项目拉伸填充整个伸缩容器。  
justify-content | flex-start | flex-end | center | space-between | space-around | flex-start | justify-content 定义了伸缩项目沿着主轴线的对齐方式。flex-start(默认值)：伸缩项目向一行的起始位置靠齐。flex-end：伸缩项目向一行的结束位置靠齐。center：伸缩项目向一行的中间位置靠齐。space-between：伸缩项目会平均地分布在行里。第一个伸缩项目一行中的最开始位置，最后一个伸缩项目在一行中最终点位置。space-around：伸缩项目会平均地分布在行里，两端保留一半的空间。  
position | fixed | absolute | relative | relative | 父容器为`<list>、<swiper>`时不生效，scroll 不支持 。  
[left|top|right|bottom] | `<length>` | - | 一般配合`fixed`或`absolute`布局使用  
  
**注意** ：

flex 布局仅支持上面列出的样式，w3c 中的其他标准切勿使，如 `flex: 1;`，否则将会产生无法预知的布局问题。

上一篇

[通用属性](</component/common/common-attributes/>)

下一篇

[通用方法](</component/common/common-methods/>)