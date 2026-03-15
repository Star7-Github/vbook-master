# stack

# stack

更新时间：2023/12/21 13:49:50

基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件，支持子组件，支持[通用属性](</component/common/common-attributes/>)

### 样式

支持[<div> 样式](</component/container/div>)，支持[通用样式](</component/common/common-styles/>)

### 事件

支持[通用事件](</component/common/common-events/>)

# stack组件的基本用法

基本容器，子组件排列方式为层叠排列，每个直接子组件按照先后顺序依次堆叠，覆盖前一个子组件

基本用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <stack class="w-full h-full bg-white items-center justify-center">
        <div class="w-[400px] h-[400px] flex justify-start items-start bg-[#6a88e6]">
          <text class="text-[100px]">under</text>
        </div>
        <div class="w-[200px] h-[80px] bg-[#e8f3fe]">
          <text>above</text>
        </div>
      </stack>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[list-item](</component/container/list-item/>)

下一篇

[swiper](</component/container/swiper/>)