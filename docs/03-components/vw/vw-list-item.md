# vw-list-item

# vw-list-item

更新时间：2025/04/30 20:56:55

列表选项可以作为列表的子项，当列表的每一项不同时可以用列表选项拼接实现。 list-item 代表一类组件，命名上我们用 li 缩写代替 list-item

参考当前需求，将列表选项分为以下几种：

vw-li: 通用列表子项，（itemData 必填属性为 title ，可填属性 des ，icon ，inputType，checked），通过以下随机组合可以实现以下几种布局

1.只有标题 （（itemData 仅设置 title）

2.带辅助文本的列表子项（itemData 设置属性为 title、des）

3.带图标的列表子项（itemData 设置属性为 title、icon）

4.带图标、描述文本的列表子项（itemData 设置属性为 icon、title、des）

5.带辅助文本和开关（或单选、多选）的列表子项（itemData 设置属性为 title、des、inputType、checked）

6.带图标、描述文本和开关（或单选、多选）的列表子项（itemData 设置属性为 icon、title、des、inputType、checked）

注意：带 radio 的列表子项，在选项变化时需要同时更新其他选项绑定的的 checked 标志位，否则会出现诸多显示问题

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
item-data | `<Object>` | - | 是 | 列表子项对象  
disabled | `<boolean>` | false | 否 | 列表选项是否为禁用状态  
remind | `<boolean>` | false | 否 | 是否显示红点  
widget-disabled | `<boolean>` | false | 否 | inputType配置switch/radio/checkbox 时，用来禁用右侧的部件但文字不会置灰  
  
#### itemData 需要填哪些必填属性根据类型确定，可以包含的属性有：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
icon | `<string>` | - | 否 | 列表项的图标路径  
title | `<string>` | - | 是 | 列表项的标题  
des | `<string>` | - | 否 | 列表项的辅助文本  
subIcon | `<string>` | - | 否 | 列表项的右侧图标路径  
checked | `<boolean>` | true | 否 | 当inputType配置 switch/radio/checkbox生效，表示开关状态  
inputType | `<string>` | - | 否 | 可枚举值为 switch/radio/checkbox，控制列表项右侧显示控件类型  
  
### 事件

名称 | 回调参数 | 说明  
---|---|---  
itemclick | - | 列表选项点击事件  
widgetclick | { event} | 右边小组件点击事件（只在有 checkbox、radio、switch 组件的时候有此参数，event 和对应的原生组件点击事件一致）  
animationend |  | 单选点击事件（目前只有带 radio 的 list-item 有）  
  
### vw-list-item 用法

**vw-list**
[code] 
    <template>
      <list>
        <list-item type="liIconArrow">
          <vw-li item-data="{{listArray[0]}}" onitemclick="handleClick"></vw-li>
        </list-item>
        <list-item type="liIconSw">
          <vw-li item-data="{{listArray[1]}}" onwidgetclick="handleWidgetClick"></vw-li>
        </list-item>
        <list-item type="liIcon">
          <vw-li item-data="{{listArray[2]}}"></vw-li>
        </list-item>
        <list-item type="liIconDesSw">
          <vw-li
            item-data="{{listArray[3]}}"
            onwidgetclick="handleWidgetClick"
          ></vw-li>
        </list-item>
        <list-item type="li">
          <vw-li item-data="{{listArray[4]}}"></vw-li>
        </list-item>
        <list-item type="liDes">
          <vw-li item-data="{{listArray[5]}}"></vw-li>
        </list-item>
    
        <list-item type="liSw">
          <vw-li item-data="{{listArray[6]}}" onwidgetclick="handleWidgetClick"></vw-li>
        </list-item>
        <list-item type="liDesSw">
          <vw-li item-data="{{listArray[7]}}" onwidgetclick="handleWidgetClick"></vw-li>
        </list-item>
        <list-item type="liRadio">
          <vw-li item-data="{{listArray[8]}}"></vw-li>
        </list-item>
      </list>
    </template>
    
    <script>
      export default {
        data: {
          listArray: [
            {
              icon: '/assets/images/logo.png',
              title: '图标+标题+箭头',
            },
            {
              icon: '/assets/images/logo.png',
              title: '图标+标题+开关',
              inputType: 'switch',
              checked: true,
            },
            {
              icon: '/assets/images/logo.png',
              title: '图标+标题',
            },
            {
              icon: '/assets/images/logo.png',
              title: '图标+标题+辅助文本+开关',
              des: '辅助文本超长示例辅助文本超长示例辅助文本超长示例',
              inputType: 'switch',
              checked: true,
            },
            {
              title: '只有标题',
            },
            {
              title: '标题+辅助文本',
              des: '辅助文本',
            },
            {
              title: '标题+开关',
              inputType: 'switch',
              checked: true,
            },
            {
              title: '标题+开关+辅助文本',
              des: '辅助文本',
              checked: true,
            },
            {
              title: '标题+单选+辅助文本',
              des: '辅助文本',
              inputType: 'radio',
              checked: true,
            }
          ],
        },
        handleWidgetClick() {},
        handleClick() {},
      }
    </script>
[/code]

复制代码

上一篇

[vw-list](</component/global/vw-list/>)

下一篇

[vw-loading](</component/global/vw-loading/>)