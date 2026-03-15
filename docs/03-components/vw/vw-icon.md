# vw-icon

# vw-icon

更新时间：2025/04/30 20:56:55

控件定义：提供一套常用图标

### 常用 icon 列表

icon | 描述  
---|---  
delete | 删除  
arrow-left | 左箭头  
arrow-right | 右箭头  
plus | 加号  
minus | 减号  
warn | 警告  
finish | 完成  
arrow-right-black | 指向右边的黑色箭头  
info-light | 浅色信息图标  
info-dark | 深色信息图标  
setup | 设置  
  
### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
icon | `<string>` | - | 否 | icon 名称  
[path] | `<string>` | - | 否 | 应用内部路径，可选  
[size] | `<number>` | 72 | 否 | 推荐尺寸参考下方 icon 尺寸表  
[width] | `<number>` | - | 否 | 自定义宽度，单位 px  
[height] | `<number>` | - | 否 | 自定义高度，单位 px  
[disabled] | `<boolean>` | false | 否 | 禁用状态(opacity:0.4)  
  
### icon 尺寸表

尺寸 | 描述  
---|---  
xs | 36px * 36px  
sm | 48px * 48px  
normal | 72px * 72px  
md | 96px * 96px  
lg | 114px * 114px  
xl | 198px * 198px  
  
# vw-icon组件

提供一套常用图标

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center bg-black">
        <vw-icon icon="delete"></vw-icon>
        <vw-icon icon="arrow-left"></vw-icon>
        <vw-icon icon="arrow-right"></vw-icon>
        <vw-icon icon="plus"></vw-icon>
        <vw-icon icon="minus"></vw-icon>
        <vw-icon icon="warn"></vw-icon>
        <vw-icon icon="finish"></vw-icon>
        <vw-icon icon="arrow-right-black"></vw-icon>
        <vw-icon icon="info-light"></vw-icon>
        <vw-icon icon="info-dark"></vw-icon>
        <vw-icon icon="setup"></vw-icon>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[vw-empty](</component/global/vw-empty/>)

下一篇

[vw-slide](</component/global/vw-slide/>)