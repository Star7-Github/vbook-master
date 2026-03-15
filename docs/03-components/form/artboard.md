# artboard

# artboard

更新时间：2025/02/24 15:08:18

提供可交互的界面，接收用户的笔画输入

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
default-pen-color | `<color>` | #000 | 否 | 画笔颜色  
default-pen-size | `<length>` | 24px | 否 | 画笔尺寸  
width | `<length>` | `<percentage>` | - | 否 | 组件宽度  
height | `<length>` | `<percentage>` | - | 否 | 组件高度  
  
### 事件

支持[通用事件](</component/common/common-events/>)

名称 | 参数 | 描述  
---|---|---  
changewritepanel | number[] | 轨迹点数据，格式为：[x1,y1,x2,y2,...,xn,yn,-1,0,-1,-1]，其中最后四位 -1,0,-1,-1 为笔画结束符  
  
### 方法

名称 | 参数 | 描述  
---|---|---  
clearData | 无 | 清除轨迹  
  
# artboard画笔组件

提供可交互的界面，接收用户的笔画输入

基础用法
[code]
    <script>
    export default {
      changewritepanel(data) {
        console.log('writepanel', data)
      },
      clearData() {
        this.$element('artboard').clearData()
      }
    }
    </script>
    
    <template>
      <stack class="flex-col items-center justify-center w-full h-full bg-[#0f2027]">
        <artboard
          id="artboard"
          class="w-full h-full bg-[#2c5364] rounded-[350px]"
          default-pen-color="#fff"
          default-pen-size="24px"
          onchangewritepanel="changewritepanel"
        ></artboard>
        <text class="text-[50px] text-[#203a43] pointer-events-none opacity-50">绘制区域</text>
      </stack>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[switch](</component/table/switch/>)

下一篇

[布局/容器组件](</component/container/div/>)