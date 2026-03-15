# text

# text

更新时间：2023/10/20 10:02:06

文本，文本内容写在标签内容区

### 子组件

支持[<span>](</component/basic/span>)

### 属性

支持[通用属性](</component/common/common-attributes/>)

### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
min-width | `<length>` | `<percentage>` | - | 否 | 指定元素的最小宽度  
min-height | `<length>` | `<percentage>` | - | 否 | 指定元素的最小高度  
max-width | `<length>` | `<percentage>` | - | 否 | 指定元素的最大宽度  
max-height | `<length>` | `<percentage>` | - | 否 | 指定元素的最大高度  
lines | `<number>` | -1 | 否 | 文本行数，-1 代表不限定行数  
color | `<color>` | `#757575` | 否 | 文本颜色  
font-size | `<length>` | 30px | 否 | 文本尺寸  
font-weight | normal | bold | lighter | border | | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果  
text-decoration | underline | line-through | none | none | 否 | 用于设置文本的修饰线外观  
text-align | left | center | right | left | 否 | 文本的水平对齐方式。  
line-height | `<length>` | - | 否 | 行高设置  
text-overflow | clip | ellipsis | clip | 否 | 在设置了行数的情况下生效  
  
### 事件

支持[通用事件](</component/common/common-events/>)

# text组件

文本，文本内容写在标签内容区

文本-限制行数
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="wrapper flex items-center justify-center bg-white">
        <text class="h-[200px] text-[100px] w-[300px]" style="lines: 2">文本示例</text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex items-center justify-center bg-white">
        <text>文本示例</text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[image](</component/basic/image/>)

下一篇

[span](</component/basic/span/>)