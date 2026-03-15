# div

# div

更新时间：2023/11/06 14:52:55

基本容器，支持子组件，支持[通用属性](</component/common/common-attributes>)，支持[通用样式](</component/common/common-styles>)，支持[通用事件](</component/common/common-events>)

### 样式

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
flex-direction | column | row | column-reverse | row-reverse | row | 否 | 默认为横向 `row`，父容器为`<div>、<list-item>`时生效  
flex-wrap | nowrap | wrap | wrap-reverse | nowrap | 否 | 规定 flex 容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向  
justify-content | flex-start | flex-end | center | space-between | space-around | flex-start | 否 | 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式  
align-items | stretch | flex-start | flex-end | center | stretch | 否 | 定义 flex 子项在 flex 容器的当前行的侧轴（纵轴）方向上的对齐方式  
align-content | stretch | flex-start | flex-end | center | space-between | space-around | stretch | 否 | 属性在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直），容器内必须有多行的项目，该属性才能渲染出效果  
  
# div视图容器

它类似于传统html中的div，用于包裹各种元素内容。包裹文字应该使用<text>组件。

更多布局示例
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex-col items-start p-[10px] bg-white">
        <div class="flex-col">
          <text class="p-2 m-2 bg-gray-100 text-2xl">纵向布局-自动宽度</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[300px]">纵向布局-固定宽度</text>
        </div>
        <div class="flex-row">
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-自动宽度</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-自动宽度</text>
        </div>
        <div class="flex-row w-full justify-center items-center">
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-居中</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-居中</text>
        </div>
        <div class="flex-row w-full justify-end">
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-居右</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-居右</text>
        </div>
        <div class="flex-row w-full">
          <text class="p-2 m-2 bg-gray-100 text-2xl flex-1">横向布局-平均分布</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl flex-1">横向布局-平均分布</text>
        </div>
        <div class="flex-row w-full justify-between">
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-两端对齐</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl">横向布局-两端对齐</text>
        </div>
        <div class="flex-row">
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[200px]">固定宽度</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl flex-1">自动占满余量</text>
        </div>
        <div class="flex-row w-full">
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[200px]">固定宽度</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl flex-1">自动占满</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[200px]">固定宽度</text>
        </div>
        <div class="flex-row w-full flex-wrap">
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[280px]">一行显示不全,wrap折行</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[280px]">一行显示不全,wrap折行</text>
          <text class="p-2 m-2 bg-gray-100 text-2xl w-[280px]">一行显示不全,wrap折行</text>
        </div>
        <div class="flex-row">
          <div class="bg-gray-200 m-10 h-[200px] justify-center flex-1 items-start">
            <text class="p-2 m-2 bg-gray-100 text-2xl">垂直居顶</text>
          </div>
          <div class="bg-gray-200 m-10 h-[200px] justify-center flex-1 items-center">
            <text class="p-2 m-2 bg-gray-100 text-2xl">垂直居中</text>
          </div>
          <div class="bg-gray-200 m-10 h-[200px] justify-center flex-1 items-end">
            <text class="p-2 m-2 bg-gray-100 text-2xl">垂直居底</text>
          </div>
        </div>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

基本布局示例
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex-col items-start p-[10px_80px] justify-center border border-black bg-white">
        <div class="mb-[10px]">
          <text class="text-[28px]">flex-direction: row</text>
        </div>
        <div>
          <text class="text-[28px]">横向布局</text>
        </div>
        <div class="flex">
          <div class="w-[195px] h-[100px] flex justify-center items-center bg-[#f76260]">
            <text class="text-[28px]">A</text>
          </div>
          <div class="w-[195px] h-[100px] flex justify-center items-center bg-[#09bb07]">
            <text class="text-[28px]">B</text>
          </div>
          <div class="w-[195px] h-[100px] flex justify-center items-center bg-[#007aff]">
            <text class="text-[28px]">C</text>
          </div>
        </div>
        <div class="mb-[10px]">
          <text class="text-[28px]">flex-direction: column</text>
        </div>
        <div>
          <text class="text-[28px]">纵向布局</text>
        </div>
        <div class="flex flex-col">
          <div class="w-[590px] h-[75px] flex justify-center items-center bg-[#f76260]">
            <text class="text-[28px]">A</text>
          </div>
          <div class="w-[590px] h-[75px] flex justify-center items-center bg-[#09bb07]">
            <text class="text-[28px]">B</text>
          </div>
          <div class="w-[590px] h-[75px] flex justify-center items-center bg-[#007aff]">
            <text class="text-[28px]">C</text>
          </div>
        </div>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[概述](</component/container/overview/>)

下一篇

[list](</component/container/list/>)