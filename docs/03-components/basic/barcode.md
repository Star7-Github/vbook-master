# barcode

# barcode

更新时间：2023/10/20 10:02:06

条形码，将文本内容转换为条形码展示。

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
value | `<string>` | - | 是 | 条形码内容，码制为 Code128 码，长度小于等于 20 字节  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

### 事件

支持[通用事件](</component/common/common-events/>)

# barcode组件

条形码，将文本内容转换为条形码展示。

基础用法
[code]
    <script>
    export default {
      data: {
        barcode: '0123456789'
      }
    }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center p-[80px] bg-white">
        <barcode class="h-[200px]" value="{{ barcode }}"></barcode>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[arc-text](</component/basic/arc-text/>)

下一篇

[qrcode](</component/basic/qrcode/>)