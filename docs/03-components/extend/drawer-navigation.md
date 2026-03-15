# drawer-navigation

# drawer-navigation

更新时间：2025/10/09 11:25:10

[<drawer>](</component/extend/drawer/>)的子组件，用来展示具体的抽屉内容

### 子组件

支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
direction | start | end | up | down | start | 否 | drawer-navigation 的滑出方向，支持 start/end/up/down。如果多个 drawer-navigation 重复设置同样的值，则添加第一个 drawer-navigation。  
enable-blur | boolean | true | 否 | 是否启用高斯模糊  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

# drawer-navigation组件

<drawer>的子组件，用来展示具体的抽屉内容

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <drawer>
        <div class="w-full h-full bg-white items-center justify-center">
          <text class="text-5xl">page content</text>
        </div>
        <drawer-navigation direction="up">
          <div class="w-full h-full bg-[#4682b4] items-center justify-center">
            <text class="text-5xl">drawer-up</text>
          </div>
        </drawer-navigation>
      </drawer>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

上一篇

[drawer](</component/extend/drawer/>)

下一篇

[cellular-list](</component/extend/cellular-list/>)