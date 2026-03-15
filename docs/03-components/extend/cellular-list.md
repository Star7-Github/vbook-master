# cellular-list

# cellular-list

更新时间：2024/02/28 14:36:29

蜂窝列表组件，将指定结构的数组渲染成蜂窝状列表。
[code] 
     * 排列方式
     *     19___20
     *      |
     *      |  7___8___9
     *      |  |        \
     *     18  | 1___2   10
     *    /    |  \   \   \
     *   17    6   0   3   11
     *    \     \     /   /
     *     16    5___4   12
     *      \           /
     *       15___14___13
[/code]

复制代码

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必 |   
---|---|---|---|---  
content | `<array>` | - | 是 | 蜂窝列表数据内容，详见`content-item`数据结构  
center-index | `<number>` | - | 否 | 居中图标位置索引，不填写则居中索引为 0 的图标  
  
content-item 数据结构

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
name | `<string>` | - | 否 | 图标名称  
image | `<string>` | - | 是 | 图标图片地址，仅支持本地图片  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
outer-radius | `<length>` | 80px | 否 | 图标外半径，用来控制图标与图标之间的距离  
inner-radius | `<length>` | 64px | 否 | 图标内半径，用来控制图标的大小  
  
### 事件

支持[通用事件](</component/common/common-events/>)

名称 | 参数 | 描述  
---|---|---  
iconclick | ICON_EVENT | 当前图标被点击时触发，返回索引位置和名称  
wheelfocus | ICON_EVENT | 中心图标放大到最大时触发，返回索引位置和名称  
  
##### ICON_EVENT

参数名 | 类型 | 说明  
---|---|---  
index | `<Integer>` | 当前被点击图标索引位置  
name | `<String>` | 当前被点击图标名称  
  
# cellular-list蜂窝列表组件

蜂窝列表组件，使用 JavaScript，展示应用菜单。

基础用法

```html

```

复制代码

上一篇

[drawer-navigation](</component/extend/drawer-navigation/>)

下一篇

[compass](</component/extend/compass/>)