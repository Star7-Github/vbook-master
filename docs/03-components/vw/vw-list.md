# vw-list

# vw-list

更新时间：2025/04/30 20:56:55

列表包含一系列连续的列表项，可以呈现文本、图标等内容。 list 只提供每个选项相同的列表，如果每个选项不同可使用 list-item 类组件进行实现。

参考当前需求，将列表分为以下几种：

1.vw-list:最常用的列表，包含图标、标题、箭头（listArray 子项必填选项为 icon、title，list 属性可选 type 为 normal 或 fisheye）

2.vw-list-radio:右侧带单选按钮的列表（listArray 子项必填选项为 title、checked）

3.vw-list-icon-radio:左侧为图标，右侧带单选按钮的列表（listArray 子项必填选项为 icon、title、checked）

4.vw-list-radio-left:左侧带单选按钮的列表（listArray 子项必填选项为 title、checked）

5.vw-list-des-radio-left:左侧带单选按钮且带辅助文本的列表（listArray 子项必填选项为 title、des、checked）

6.vw-list-checkbox:右侧带多选按钮的列表（listArray 子项必填选项为 title、checked）

7.vw-list-icon-checkbox:左侧为图标，右侧带多选按钮的列表（listArray 子项必填选项为 icon、title、checked）

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
title | `<string>` | 列表 | 是 | 列表的标题  
listArray | `<Array>` | - | 是 | 列表数据数组  
scrollbar | `<boolean>` | true | 否 | 是否启用滚动条  
type | `<string>` | normal | 否 | 设置列表的的布局方式，值为 normal（正常列表）或 fisheye（鱼眼列表）（只有 vw-list 生效）  
remind | `<boolean>` | false | 否 | 是否显示红点（只有 vw-list 支持）  
buttons | `<Array>` | - | 是 | 按钮（只有 vw-list-checkbox 和 vw-list-icon-checkbox 支持）  
  
#### listArray 的成员为 Object，需要填哪些必填属性根据 list 类型确定，可以包含的属性有：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
icon | `<string>` | - | 根据 list 类型确定 | 列表选项的图标路径  
title | `<string>` | - | 是 | 列表选项的标题  
des | `<string>` | - | 根据 list 类型确定 | 列表选项的辅助文本  
checked | `<boolean>` | true | 根据 list 类型确定 | 列表选项的 switch/radio/checkbox 开关状态  
index | `<number>` | - | 根据 list 类型确定 | 列表选项的序号  
disabled | `<boolean>` | false | 否 | 列表选项是否为禁用状态  
widgetDisabled | `<boolean>` | false | 否 | 列表右侧有 switch/radio/checkbox 时，用来仅禁用右侧的部件但文字不会置灰  
  
### 事件

名称 | 回调参数 | 说明  
---|---|---  
itemclick | {index} | 列表选项点击事件  
widgetclick | {index, event} | 右边小组件点击事件（只在有 checkbox、radio、switch 组件的时候有此事件，event 和对应的原生组件点击事件一致）  
back | 无 | 列表标题点击事件  
animationend | {index} | 单选点击事件（目前只有带 radio 的 list 有）  
  
### vw-list 用法

**vw-list**
[code] 
    <template>
      <vw-list
        list-array="{{listArray}}"
        onitemclick="handleClick"
        title="列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list>
    </template>
    
    <script>
      export default {
        data: {
          listArray: [
            {
              icon: '/assets/images/setupSound.png',
              title: '图标+标题+箭头',
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '图标+标题+箭头',
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '图标+标题+箭头',
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-radio**
[code] 
    <template>
      <vw-list-radio
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="单选列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-radio>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              title: '无图标单选',
              checked: false,
            },
            {
              title: '无图标单选',
              checked: true,
            },
            {
              title: '无图标单选',
              checked: false,
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-icon-radio**
[code] 
    <template>
      <vw-list-icon-radio
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="有图标单选列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-icon-radio>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标单选列表',
              checked: false,
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标单选列表',
              checked: true,
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标单选列表',
              checked: false,
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-radio-left**
[code] 
    <template>
      <vw-list-radio-left
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="左侧单选列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-radio-left>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              title: '左侧单选',
              checked: false,
            },
            {
              title: '左侧单选',
              checked: true,
            },
            {
              title: '左侧单选',
              checked: false,
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-des-radio-left**
[code] 
    <template>
      <vw-list-des-radio-left
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="左侧单选辅助文本列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-des-radio-left>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              title: '左侧单选带辅助文本',
              checked: false,
              des: '辅助文本',
            },
            {
              title: '左侧单选带辅助文本',
              checked: true,
              des: '辅助文本',
            },
            {
              title: '左侧单选带辅助文本',
              checked: false,
              des: '辅助文本',
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-checkbox**
[code] 
    <template>
      <vw-list-checkbox
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="多选列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-checkbox>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              title: '无图标多选',
              checked: true,
            },
            {
              title: '无图标多选',
              checked: true,
            },
            {
              title: '无图标多选',
              checked: false,
            },
          ],
        },
      }
    </script>
[/code]

复制代码

**vw-list-icon-checkbox**
[code] 
    <template>
      <vw-list-icon-checkbox
        list-array="{{listArray}}"
        onitemclick="handleClick"
        onwidgetclick="handleWidgetClick"
        title="有图标多选列表"
        onback="handleBack"
        onscrollbottom="handleBottom"
      ></vw-list-icon-checkbox>
    </template>
    <script>
      export default {
        data: {
          listArray: [
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标多选',
              checked: true,
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标多选',
              checked: true,
            },
            {
              icon: '/assets/images/setupSound.png',
              title: '有图标多选',
              checked: false,
            },
          ],
        },
      }
    </script>
[/code]

复制代码

上一篇

[vw-title](</component/global/vw-title/>)

下一篇

[vw-list-item](</component/global/vw-list-item/>)