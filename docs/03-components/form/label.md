# label

# label

更新时间：2023/10/20 10:02:06

为 [input](</component/table/input/>) 组件定义标注

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
target | `<string>` | - | 否 | 目标 input 组件 id  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

支持[text 样式](</component/basic/text/>)

### 事件

点击 label 组件，触发 target 绑定 id 的 checkbox 或者 radio 组件点击事件，扩大点击范围

# label组件

为 input 组件定义标注

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex-col items-center justify-center bg-white">
        <div class="justify-between w-[300px]">
          <input name="option" id="optionA" type="radio" value="optionA" />
          <label class="text-[40px]">no target</label>
        </div>
        <div class="justify-between w-[300px]">
          <input name="option" id="optionB" type="radio" value="optionB" />
          <label class="text-[40px]" target="optionB">has target</label>
        </div>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[input](</component/table/input/>)

下一篇

[picker](</component/table/picker/>)