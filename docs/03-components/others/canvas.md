# canvas

# canvas

更新时间：2024/10/11 11:55:18

画布组件，通过使用 JavaScript 中的脚本，可以在 canvas 上绘制图形，文字等。

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

### 样式

支持[通用样式](</component/common/common-styles/>)

### 方法

#### canvas.getContext()

创建 canvas 绘图上下文

##### 参数

参数 | 类型 | 描述  
---|---|---  
contextType | `<string>` | 目前支持传入'2d'  
  
##### 返回值

参数 | 类型 | 描述  
---|---|---  
'2d' | `CanvasRenderingContext2D` | 返回一个 CanvasRenderingContext2D 对象，用于 2D 绘制，请参考 CanvasRenderingContext2D对象  
  
##### 示例
[code] 
    const canvas = this.$element('canvasid')
    const ctx = canvas.getContext('2d')
[/code]

复制代码

* * *

#  CanvasRenderingContext2D 

更新时间：2024/10/11 11:55:18

通过 CanvasRenderingContext2D 可以在 canvas 上绘制矩形、文本和其他对象。可以在 canvas 上调用 getContext('2d') 来获取 CanvasRenderingContext2D 的对象。

### 方法和属性

#### **填充和描边样式**

#### CanvasRenderingContext2D.fillStyle

设置填充色

##### 语法
[code] 
    ctx.fillStyle = color
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
color | `<string>` | CSS color  
gradient | `CanvasGradient` | 参考 CanvasGradient 对象，可通过 CanvasRenderingContext2D.createLinearGradient() 方法创建  
  
#### CanvasRenderingContext2D.strokeStyle

设置边框颜色

##### 语法
[code] 
    ctx.strokeStyle = color
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
color | `<string>` | CSS color  
gradient | `CanvasGradient` | 参考 CanvasGradient 对象，可通过 CanvasRenderingContext2D.createLinearGradient() 方法创建  
  
#### **渐变和图案**

#### CanvasRenderingContext2D.createLinearGradient()

创建一个线性的渐变颜色

##### 语法
[code] 
    ctx.createLinearGradient(x0, y0, x1, y1)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x0 | `<number>` | 起点的 x 坐标  
y0 | `<number>` | 起点的 y 坐标  
x1 | `<number>` | 终点的 x 坐标  
y1 | `<number>` | 终点的 y 坐标  
  
#### **路径**

#### CanvasRenderingContext2D.beginPath()

开始创建一个新路径

##### 语法
[code] 
    ctx.beginPath()
[/code]

复制代码

#### CanvasRenderingContext2D.closePath()

封闭一个路径

##### 语法
[code] 
    ctx.closePath()
[/code]

复制代码

#### CanvasRenderingContext2D.moveTo()

把路径移动到画布中的指定点

##### 语法
[code] 
    ctx.moveTo(x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 目标位置的 x 坐标  
y | `<number>` | 目标位置的 y 坐标  
  
#### CanvasRenderingContext2D.lineTo()

使用直线连接子路径的终点到 x，y 坐标

##### 语法
[code] 
    ctx.lineTo(x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 目标位置的 x 坐标  
y | `<number>` | 目标位置的 y 坐标  
  
#### CanvasRenderingContext2D.arc()

画一条弧线

##### 语法
[code] 
    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 圆心的 x 坐标  
y | `<number>` | 圆心的 y 坐标  
radius | `<number>` | 圆的半径  
startAngle | `<number>` | 起始弧度， x 轴方向开始计算，单位以弧度表示。  
endAngle | `<number>` | 终止弧度  
anticlockwise | Boolean | 可选。如果为 true，逆时针绘制圆，反之，顺时针绘制  
  
#### CanvasRenderingContext2D.arcTo()

根据控制点和半径绘制圆弧路径

##### 语法
[code] 
    ctx.arcTo(x1, y1, x2, y2, radius)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x1 | `<number>` | 第一个控制点的 x 轴坐标  
y1 | `<number>` | 第一个控制点的 y 轴坐标  
x2 | `<number>` | 第二个控制点的 x 轴坐标  
y2 | `<number>` | 第二个控制点的 y 轴坐标  
radius | `<number>` | 圆弧的半径  
  
#### CanvasRenderingContext2D.bezierCurveTo()

绘制三次贝塞尔曲线路径

##### 语法
[code] 
    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
cp1x | `<number>` | 第一个贝塞尔控制点的 x 坐标  
cp1y | `<number>` | 第一个贝塞尔控制点的 y 坐标  
cp2x | `<number>` | 第二个贝塞尔控制点的 x 坐标  
cp2y | `<number>` | 第二个贝塞尔控制点的 y 坐标  
x | `<number>` | 结束点的 x 坐标  
y | `<number>` | 结束点的 y 坐标  
  
#### CanvasRenderingContext2D.quadraticCurveTo()

创建二次贝塞尔曲线路径

##### 语法
[code] 
    ctx.quadraticCurveTo(cpx, cpy, x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
cpx | `<number>` | 贝塞尔控制点的 x 坐标  
cpy | `<number>` | 贝塞尔控制点的 y 坐标  
x | `<number>` | 结束点的 x 坐标  
y | `<number>` | 结束点的 y 坐标  
  
#### CanvasRenderingContext2D.rect()

创建一个矩形

##### 语法
[code] 
    ctx.rect(x, y, width, height)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 矩形路径左上角的 x 坐标  
y | `<number>` | 矩形路径左上角的 y 坐标  
width | `<number>` | 矩形路径的宽度  
height | `<number>` | 矩形路径的高度  
  
#### **线型**

#### CanvasRenderingContext2D.lineWidth

设置线条的宽度

##### 语法
[code] 
    ctx.lineWidth = lineWidth
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
lineWidth | `<number>` | 线条的宽度  
  
#### CanvasRenderingContext2D.lineCap

设置线条的端点样式

##### 语法
[code] 
    ctx.lineCap = lineCap
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
lineCap | `<string>` | 'butt'(默认)、'round'、'square'  
  
#### **绘制路径**

#### CanvasRenderingContext2D.fill()

对当前路径中的内容进行填充

##### 语法
[code] 
    ctx.fill()
[/code]

复制代码

#### CanvasRenderingContext2D.stroke()

画出当前路径的边框

##### 语法
[code] 
    ctx.stroke()
[/code]

复制代码

#### **绘制矩形**

#### CanvasRenderingContext2D.clearRect()

清除画布上在该矩形区域内的内容(矩形区域大于等于 canvas 组件时，清除之前绘制内容；小于 canvas 组件时，清除区域默认为黑色，可通过设置 canvas 背景色更改)

##### 语法
[code] 
    ctx.clearRect(x, y, width, height)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 矩形区域左上角的 x 坐标  
y | `<number>` | 矩形区域左上角的 y 坐标  
width | `<number>` | 矩形区域的宽度  
height | `<number>` | 矩形区域的高度  
  
#### CanvasRenderingContext2D.fillRect()

填充一个矩形

##### 语法
[code] 
    ctx.fillRect(x, y, width, height)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 矩形路径左上角的 x 坐标  
y | `<number>` | 矩形路径左上角的 y 坐标  
width | `<number>` | 矩形路径的宽度  
height | `<number>` | 矩形路径的高度  
  
#### CanvasRenderingContext2D.strokeRect()

画一个非填充矩形

##### 语法
[code] 
    ctx.strokeRect(x, y, width, height)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 矩形路径左上角的 x 坐标  
y | `<number>` | 矩形路径左上角的 y 坐标  
width | `<number>` | 矩形路径的宽度  
height | `<number>` | 矩形路径的高度  
  
#### **文本样式**

#### CanvasRenderingContext2D.font

设置当前字体样式的属性

##### 语法
[code] 
    ctx.font = value
[/code]

复制代码

##### 参数

参数 | 描述 | 类型  
---|---|---  
value | 支持字重与字体大小，可以独立设置字重和字体，如果同时设置字重和字体需要空格分割，字重在前面。默认值为 "normal 30px" | `<string>`  
  
###### Value 值

可选值 | 是否必填 | 说明  
---|---|---  
font-weight | 否 | 规定字体的粗细。可能的值：  
normal  
bold  
bolder  
lighter  
100  
200  
300  
400  
500  
600  
700  
800  
900  
默认为 normal  
font-size | 否 | 规定字号，以像素计。默认 30 px  
  
#### CanvasRenderingContext2D.textAlign

设置文字的对齐方式

##### 语法
[code] 
    ctx.textAlign = align
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
align | `<string>` | 'start'(默认),'end','left','center','right'  
  
#### CanvasRenderingContext2D.textBaseline

设置文字的水平对齐

##### 语法
[code] 
    ctx.textBaseline = textBaseline
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
textBaseline | `<string>` | 'alphabetic'(默认),'middle','top','hanging','bottom','ideographic'  
  
#### **绘制文本**

#### CanvasRenderingContext2D.fillText()

填充文本

##### 语法
[code] 
    ctx.fillText(text, x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
text | `<string>` | 在画布上输出的文本  
x | `<number>` | 绘制文本的左上角 x 坐标位置  
y | `<number>` | 绘制文本的左上角 y 坐标位置  
  
#### CanvasRenderingContext2D.fillArcText()

填充弧形文本

##### 语法
[code] 
    ctx.fillArcText(text, x, y, radius, startAngle)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
text | `<string>` | 要绘制的文本  
x | `<number>` | 文本起始点的 x 轴坐标  
y | `<number>` | 文本起始点的 y 轴坐标  
radius | `<number>` | 圆的半径  
startAngle | `<number>` | 起始弧度， y 轴方向开始计算，单位以弧度表示。  
  
#### **变换**

#### CanvasRenderingContext2D.rotate()

顺时针旋转当前坐标轴

##### 语法
[code] 
    ctx.rotate(angle)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
rotate | `<number>` | 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： degree * Math.PI / 180 。旋转中心点一直是 canvas 的起始点。 如果想改变中心点，可以通过 translate() 方法移动 canvas.  
  
#### CanvasRenderingContext2D.scale()

据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换。

##### 语法
[code] 
    ctx.scale(x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 水平方向的缩放因子  
y | `<number>` | 垂直方向的缩放因子  
  
#### CanvasRenderingContext2D.translate()

对当前坐标系的原点(0, 0)进行变换

##### 语法
[code] 
    ctx.translate(x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 水平坐标平移量  
y | `<number>` | 竖直坐标平移量  
  
#### CanvasRenderingContext2D.shear()

据 x 水平方向和 y 垂直方向，为 canvas 单位添加错切变换。

##### 语法
[code] 
    ctx.shear(x, y)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
x | `<number>` | 水平坐标错切量  
y | `<number>` | 竖直坐标错切量  
  
* * *

#  CanvasGradient 

更新时间：2024/10/11 11:55:18

渐变对象，通过 CanvasRenderingContext2D.createLinearGradient() 创建

### 语法
[code] 
    const gradient = ctx.createLinearGradient(0, 0, 200, 0)
    gradient.addColorStop(0, '#ff0000')
    gradient.addColorStop(1, '#0000ff')
[/code]

复制代码

### 方法

#### CanvasGradient.addColorStop()

该方法在 CanvasGradient 对象上添加一个由偏移值和颜色值指定的断点

##### 语法
[code] 
    gradient.addColorStop(offset, color)
[/code]

复制代码

##### 参数

参数 | 类型 | 描述  
---|---|---  
offset | `<number>` | `0`到`1`之间的值，表示渐变点在起点和终点中的位置  
color | `<string>` | CSS Color  
  
# canvas组件

画布组件，通过使用 JavaScript 中的脚本，可以在 canvas 上绘制图形，制作照片，创建动画等。

基础用法
[code]
    <script>
    export default {
      onShow() {
        const ctx = this.$element('canvas').getContext('2d')
        ctx.strokeStyle = 'rgb(220,200,45)'
        ctx.lineWidth = 10
        ctx.beginPath()
        ctx.arc(300, 300, 280, 0, Math.PI * 2, true)
        ctx.moveTo(500, 300)
        ctx.arc(300, 300, 200, 0, Math.PI, false)
        ctx.moveTo(240, 250)
        ctx.arc(200, 250, 35, 0, Math.PI * 2, true)
        ctx.moveTo(430, 250)
        ctx.arc(400, 250, 35, 0, Math.PI * 2, true)
        ctx.stroke()
      }
    }
    </script>
    
    <template>
      <div class="flex items-center justify-center">
        <canvas id="canvas" class="w-[600px] h-[600px]"></canvas>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[qrcode](</component/basic/qrcode/>)

下一篇

[表单组件](</component/table/input/>)