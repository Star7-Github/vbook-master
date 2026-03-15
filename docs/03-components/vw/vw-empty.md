# vw-empty

# vw-empty

更新时间：2025/04/30 20:56:55

控件定义：页面无用户生成的内容时，显示空白页控件元素：

  * （1） 图标
  * （2） 正文
  * （3） 辅助信息

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
icon | `<string>` | - | 否 | icon 名称/自定义路径定义  
content | `<string>` | - | 是 | 正文描述  
des | `<string>` | - | 否 | 辅助信息描述  
content-color | `<string>` | - | 否 | 正文的文字颜色，默认:#ffffff;  
des-color | `<string>` | - | 否 | 辅助信息的文字颜色，默认:#888888;  
is-loading | `<bool>` | false | 否 | 与icon 互斥，显示加载中状态  
  
### vw-empty 用法
[code] 
    <vw-empty
      icon="delete"
      content="正文这"
      des="辅助信息"
      content-color="#ff0000"
      des-color="#888888"
    ></vw-empty>
    <vw-empty icon="delete" content="正文这"></vw-empty>
    <vw-empty icon="/assets/images/icon.png" content="正文这" des="辅助信息"></vw-empty>
    <vw-empty is-loading="true" content="正文这" des="辅助信息"></vw-empty>
    
[/code]

复制代码

# vw-empty公共组件

页面无用户生成的内容时，显示空白页控件元素

基础用法
[code]
    <script>
    export default {}
    </script>
    
    <template>
      <div class=" flex-col items-center">
        <vw-empty
          class="h-[466px] w-[466px]"
          icon="delete"
          content="Some contents"
        ></vw-empty>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[vw-button](</component/global/vw-button/>)

下一篇

[vw-icon](</component/global/vw-icon/>)