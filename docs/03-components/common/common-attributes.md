# 通用属性

# 通用属性

更新时间：2023/10/31 17:06:23

通用属性，即所有组件都支持的属性。

开发者可以在所有的组件标签上都使用`通用属性`

## 示例代码
[code] 
    <template>
      <div>
        <text id="text1" class="text-normal">line 1</text>
        <text id="text2" class="text-normal red">line 2</text>
      </div>
    </template>
[/code]

复制代码

## 常规属性

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
id | `<string>` | - | 唯一标识  
style | `<string>` | - | 样式声明  
class | `<string>` | - | 引用样式表  
disabled | `<boolean>` | false | 表明当前组件是否可用  
  
## 渲染属性

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
for | `<array>` | - | 根据数据列表，循环展开当前标签  
if | `<boolean>` | - | 根据数据 boolean 值，添加或移除当前标签  
show | `<boolean>` | - | 根据数据 boolean 值，显示或隐藏当前标签，相当于控制{ display: flex | none }  
  
渲染属性工作方式详见[ux 文件](</reference/configuration/ux-file>)

注意：属性和样式不能混用，不能在属性字段中进行样式设置

上一篇

[通用事件](</component/common/common-events/>)

下一篇

[通用样式](</component/common/common-styles/>)