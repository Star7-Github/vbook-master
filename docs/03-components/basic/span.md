# span

# span

更新时间：2023/10/20 10:02:06

格式化的文本，只能作为[<text>](</component/basic/text>)子组件，不支持事件，目前不支持换行。

### 属性

支持[通用属性](</component/common/common-attributes/>)

### 样式

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
color | `<color>` | #000000 | 否 | 文本颜色  
font-size | `<length>` | 30px | 否 | 文本尺寸  
font-weight | normal | bold | lighter | border | `<number>` | normal | 否 | 当前平台仅支持 normal 与 bold 两种效果  
  
# span组件

格式化的文本

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="wrapper flex items-center justify-center bg-white">
        <text class="text-[40px]">
          <span>span只能作为</span>
          <span class="text-[80px] text-[#ff4500]">text</span>
          <span>的子组件</span>
        </text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[text](</component/basic/text/>)

下一篇

[marquee](</component/basic/marquee/>)