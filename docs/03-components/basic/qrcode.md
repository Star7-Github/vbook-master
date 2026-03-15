# qrcode

# qrcode

更新时间：2023/12/21 13:49:50

二维码，将文本内容转换为二维码展示。

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
value | `<string>` | - | 是 | 二维码内容，长度小于等于 400 字节  
eclevel | `<number>` | 1 | 否 | 二维码纠错等级 取值范围为 0 到 3  
type | normal | circle | normal | 否 | 二维码样式设置 normal 常规样式，circle 圆点样式  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

### 事件

支持[通用事件](</component/common/common-events/>)

# qrcode组件

二维码，将文本内容转换为二维码展示。

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="items-center justify-center bg-white">
        <qrcode class="w-[240px] h-[240px]" value="http://www.vivo.com.cn/" eclevel="1"></qrcode>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[barcode](</component/basic/barcode/>)

下一篇

[canvas](</component/others/canvas/>)