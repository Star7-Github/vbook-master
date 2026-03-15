# image

# image

更新时间：2024/03/15 09:29:57

渲染图片，不支持子组件、事件、方法

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
src | `<uri>` | - | 否 | 图片的 uri，支持本地图片和网络图片，支持的图片格式包括静态类型(png, svg, .9, gif)  
alt | `<uri>` | 'blank' | - | 否 | 加载时显示的占位图；只支持本地图片资源(png)。  
  
注意：alt 属性详情如下：

a.如果 Image 组件没有设置 alt 值，终端会加上默认的灰色占位图。

b.src 为本地图片地址时，不会有占位图

c.src 为远程图片地址时，如果之前已经成功加载过图片，有本地缓存，则不会有占位图

d.src 为远程图片地址时，且 Image 组件 的 alt 值传入字符串 "blank" 值，不会有占位图。（可避免一些远程地址的小图标第一次加载时瞬间闪烁的现象）

e.设置 alt 为本地图片地址时，占位图缩放模式由原来的居中不缩放改为居中保持宽高比缩放，减少了占位图资源文件的分辨率与体积大小

#### SVG 图片格式说明

完全支持的标签 | 描述  
---|---  
`<path>` | 绘制路径。  
`<rect>` | 用于绘制矩形、圆角矩形。  
`<circle>` | 圆形形状。  
`<ellipse>` | 椭圆形状。  
`<line>` | 绘制线条。  
`<polyline>` | 绘制折线。  
`<polygon>` | 绘制多边形。  
`<linearGradient>` | 线性渐变。  
`<stop>` | 可縮放矢量圖形。  
`<g>` | 用于对其他 SVG 元素进行分组的容器。  
受限制支持的标签 | 只支持的属性  
---|---  
`<svg>` | width,height,viewBox 。  
`<defs>` | 只支持渐变的定义。  
`<style>` | 只支持部分属性。  
暂时完全不支持的标签 | 描述  
---|---  
`<radialGradient>` | 不支持文本，字体，动画，滤镜  
`<use>` | 不支持文本，字体，动画，滤镜  
`<image>` | 不支持文本，字体，动画，滤镜  
`<clipPath>` | 不支持文本，字体，动画，滤镜  
`<desc>` | 不支持文本，字体，动画，滤镜  
`<marker>` | 不支持文本，字体，动画，滤镜  
`<mask>` | 不支持文本，字体，动画，滤镜  
`<switch>` | 不支持文本，字体，动画，滤镜  
`<symbol>` | 不支持文本，字体，动画，滤镜  
`<title>` | 不支持文本，字体，动画，滤镜  
`<view>` | 不支持文本，字体，动画，滤镜  
`<pattern>` | 不支持文本，字体，动画，滤镜  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
object-fit | contain | cover | fill | none | scale-down | cover | 否 | 图片的缩放类型  
  
object-fit ，参数列表如下：

类型 | 描述  
---|---  
contain | 保持宽高比，缩小或者放大，使得图片完全显示在显示边界内，居中显示  
cover | 保持宽高比，缩小或者放大，使得两边都大于或等于显示边界，居中显示  
fill | 不保存宽高比，填充满显示边界  
none | 居中，无缩放  
scale-down | 保持宽高比，缩小或保持不变，取 `contain` 和 `none`中显示较小的一个，居中显示  
  
#### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
id | `<string>` | - | 否 | 唯一标识  
style | `<string>` | - | 否 | 样式声明  
class | `<string>` | - | 否 | 引用样式表  
for | `<array>` | - | 否 | 根据数据列表，循环展开当前标签  
if | `<boolean>` | - | 否 | 根据数据 boolean 值，添加或移除当前标签  
src | `<uri>` | - | 否 | 图片的 uri，同时支持本地，支持的图片格式包括静态类型（png, svg, .9, gif）  
  
#### 样式

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
width | `<length>` | - | 否 | 图片的宽度，不设置时使用图片原始的宽度  
height | `<length>` | - | 否 | 图片的高度，不设置时使用图片原始的高度  
  
# 

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex flex-col items-center justify-center">
        <img src="/assets/images/logo.png" class="mt-5 border border-black w-[400px] h-[300px] object-contain">
        <img src="https://www.w3school.com.cn/svg/animate_1.svg" class="mt-5 border border-black w-[400px] h-[300px] object-contain">
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[a](</component/basic/a/>)

下一篇

[text](</component/basic/text/>)