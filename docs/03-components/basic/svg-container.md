# svg-container

# svg-container

更新时间：2024/10/11 11:55:18

渲染 svg 图片，可以动态修改 svg 属性

### 子组件

无

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
src | `<uri>` | - | 是 | 只支持本地 uri  
  
#### 支持动态修改的属性说明：

##### 基本图形属性

标签 | 属性 | 描述 | 备注  
---|---|---|---  
rect | x | 横坐标 |   
| y | 纵坐标 |   
| rx | 水平角半径 |   
| ry | 垂直角半径 |   
| width | 宽度 |   
| height | 高度 |   
circle | cy | 圆心纵坐标 |   
| cx | 圆心横坐标 |   
| r | 圆的半径 |   
ellipse | cy | 圆心纵坐标 |   
| cx | 圆心横坐标 |   
| rx | 水平半径 |   
| ry | 垂直半径 |   
line | x1 | 起点横坐标 |   
| y1 | 起点纵坐标 |   
| x2 | 终点横坐标 |   
| y2 | 终点纵坐标 |   
  
##### 渐变属性

标签 | 属性 | 描述  
---|---|---  
<linearGradient> | x1 | 线性渐变起点横坐标  
| y1 | 线性渐变起点纵坐标  
| x2 | 线性渐变终点横坐标  
| y2 | 线性渐变终点纵坐标  
| gradientUnits | 渐变作用域  
| spreadMethod | 渐变扩散模式  
<stop> | offset | 渐变颜色位置  
| stop-color | 渐变色  
| stop-opacity | 渐变透明度  
  
##### 通用属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
fill | `<color>` | black | 否 | 使用简写属性设置元素的填充色。  
fill-opacity | `number` | 1 | 否 | 填充色的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。  
fill-rule | `<string>` | nonzero | 否 | nonzero:非零规则; evenodd:奇偶规则  
opacity | `number` | 1 | 否 | 元素的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。  
stroke | `<color>` | - | 否 | 设置形状轮廓的颜色。  
stroke-linejoin | `<string>` | miter | 否 | 进行描边时在路径的拐角处使用的形状。bevel：使用斜角连接路径段；miter：使用尖角连接路径段；round：使用圆角连接路径段。  
stroke-linecap | `<string>` | butt | 否 | 路径描边时在它们的结尾处使用的形状。butt：不在路径两端扩展；round：在路径的末端延伸半个圆，直径等于线度。square：在路径的末端延伸半个圆，宽度等于线宽的一半，高度等于线宽。  
stroke-miterlimit | `number` | 4 | 否 | 设置将锐角绘制成斜角的极限值。  
stroke-opacity | `number` | 1 | 否 | 轮廓线条的透明度，取值范围为 0 到 1，1 表示为不透明，0 表示为完全透明。  
stroke-width | `<length>` | 1 | 否 | 设置轮廓线条的宽度。  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

### 方法

名称 | 参数 | 描述  
---|---|---  
setSvgAttr | Object | 设置属性  
  
#### setSvgAttr 的参数说明

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
id | `<string>` | 无 | 是 | svg 元素的 ID  
name | `<string>` | 无 | 是 | 属性名  
value | `<string>` | 无 | 是 | 属性值  
  
### 示例代码：
[code] 
    <template>
      <div>
        <svg-container
          id="svgId"
          src="../common/svg/a.svg"
          @animationEnd="animationEnd"
        ></svg-container>
      </div>
    </template>
    <script>
      export default {
        onInit() {
          this.$element('svgId').setSvgAttr({
            id: 'text',
            name: 'fill',
            value: 'red',
          })
        },
        animationEnd() {
          console.log('animationEnd')
        },
      }
    </script>
[/code]

复制代码

# svg-container组件

渲染 svg 图片

基础用法
[code]
    <script>
    export default {
      data: {
        progress: 1,
        timer: null
      },
      onInit() {
        this.progressAnimate()
      },
      progressAnimate() {
        this.timer = setInterval(() => {
          if (this.progress === 300) {
            this.progress = 1
          } else {
            this.progress += 1
          }
          this.setSvgAttr('svgAnimate', 'square', 'width', this.progress)
        }, 100);
      },
      setSvgAttr(eleID, id, name, value) {
        this.$element(eleID).setSvgAttr({
          id,
          name,
          value,
        })
      },
      pause() {
        clearInterval(this.timer)
      },
      play() {
        this.progressAnimate()
      },
    }
    </script>
    
    <template>
      <div class="flex flex-col items-center justify-center bg-white pt-10">
        <svg-container
          id="svgAnimate"
          class="w-[300px] h-[150px] bg-white"
          src="/assets/images/svg/svg-container.svg"
        ></svg-container>
        <input type="button" class="w-[300px] h-[70px] text-center border border-gray-500 m-[5px]" value="暂停" onclick="pause"/>
        <input type="button" class="w-[300px] h-[70px] text-center border border-gray-500 m-[5px]" value="恢复" onclick="play"/>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[概述](</component/basic/animation-overview/>)

下一篇

[image-animator](</component/basic/image-animator/>)