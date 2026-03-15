# arc-text

# arc-text

更新时间：2023/10/20 10:02:06

弧形文本，文本内容展示在 arc-text 组件盒模型内最大且居中的圆周上，超出的内容将会被截断。

如下图示例

弧 形 文 本

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
color | `<color>` | #000000 | 否 | 文本颜色  
font-size | `<length>` | 30px | 否 | 文本尺寸  
font-weight | normal | bold | lighter | border | `<number>` | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果  
direction | clockwise | counterclockwise | clockwise | 否 | 文本绘制方向，clockwise 顺时针方向，counterclockwise 逆时针方向。  
start-angle | `<deg>` | 0deg | 否 | 文本绘制起始角度，以时钟 0 点为基线，取值范围为 0 到 360。  
  
### 事件

支持[通用事件](</component/common/common-events/>)

# arc-text组件

弧形文本，文本内容展示在 arc-text 组件盒模型内最大且居中的圆周上，超出的内容将会被截断。

基础用法
[code]
    <script>
    export default {
      data() {
        return {
          content:
            '文本过长，超出部分会被截断 hello world abcdefghijklmnopqrstuvwxyz 0123456789'
        }
      }
    }
    </script>
    
    <template>
      <div class="flex flex-col items-center justify-center bg-white">
        <div class="m-[40px] w-[400px] h-[400px] flex flex-col">
          <arc-text>{{ content }}</arc-text>
        </div>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[progress](</component/basic/progress/>)

下一篇

[barcode](</component/basic/barcode/>)