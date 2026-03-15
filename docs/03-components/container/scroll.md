# scroll

# scroll

更新时间：2025/10/09 11:25:10

滚动视图容器。竖向或水平方向滚动容器，竖向滚动需要设置定高，水平滚动需要设置定宽。

## 子组件

支持，也支持嵌套 `scroll`。

## 属性

支持[通用属性](</component/common/common-attributes>)

属性 | 类型 | 默认值 | 必填 | 说明  
---|---|---|---|---  
scroll-x | Boolean | false | 否 | 是否允许横向滚动  
scroll-y | Boolean | false | 否 | 是否允许纵向滚动  
scroll-top | Number/String |  | 否 | 设置竖向滚动条位置，内容顶部到 scroll 顶部的距离，如果有滚动吸附效果则先执行`scroll-top`再吸附。  
scroll-bottom | Number/String |  | 否 | 设置竖向滚动条位置，内容底部到 scroll 底部的距离，如果有滚动吸附效果则先执行`scroll-bottom`再吸附。同时设置`scroll-top`和`scroll-bottom` 以`scroll-top`为准  
scroll-left | Number/String |  | 否 | 设置横向滚动条位置，内容左侧到 scroll 左侧的距离，如果有滚动吸附效果则先执行`scroll-left`再吸附。  
scroll-right | Number/String |  | 否 | 设置横向滚动条位置，内容右侧到 scroll 右侧的距离，如果有滚动吸附效果则先执行`scroll-right`再吸附。同时设置`scroll-left`和`scroll-right` 以`scroll-left`为准  
bounces | Boolean | false | 否 | 是否边界回弹  
  
## 样式

支持[通用样式](</component/common/common-styles>)

> scroll 组件暂不支持 margin, padding 相关样式

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
scroll-snap-type | - |  | 作用在 `scroll` 组件上，表示 `scroll` 的滚动吸附类型。  
第一个参数为 `x` 或 `y` ，表示水平方向上滚动或竖直方向上滚动；  
第二个参数为 `mandatory` 或`proximity`。`mandatory` 表示选择距离最近的锚点吸附，`proximity` 距离吸附锚点不到容器高度的 30% 时才会吸附。默认为 `proximity`；  
scroll-snap-align | none | start | center | end | none | 作用在 `scroll` 子组件上，表示子组件和 `scroll` 的对齐形式；  
start：表示组件和 `scroll` 顶部对齐。  
center: 表示组件和 `scroll` 底部对齐。  
end：表示组件和 `scroll` 中心对齐。  
none：无需对齐，默认值。  
scroll-snap-stop | - | normal | 作用在 `scroll` 组件上，是否允许滚动容器“越过”可能的捕捉位置；`normal`可以越过捕捉位置，`always` 不能越过捕捉位置  
  
## 事件

名称 | 参数 | 描述  
---|---|---  
scrolltop |  | 滚动到顶部触发  
scrollbottom |  | 滚动到底部触发  
scroll | { scrollX，scrollY } | 滚动触发  
`scrollX` 表示滚动的水平距离；  
`scrollY` 表示滚动的垂直距离；  
  
## 方法

名称 | 描述  
---|---  
getScrollRect | 获取滚动内容的尺寸  
revealScrollbar | 短暂显示滚动条。仅当内容超出滚动容器（scroll 容器）时生效。  
  
### getScrollRect

获取滚动内容的尺寸
[code] 
    function getScrollRect(options: {
      success?: (res: { width: number; height: number }) => void
      fail?: (data: string, code: number) => void
    }): void
[/code]

复制代码

**返回值说明：**

属性 | 类型 | 描述  
---|---|---  
width | Number | 滚动内容的宽度，包含`border`和`padding`  
height | Number | 滚动内容的高度，包含`border`和`padding`  
  
**示例：**
[code] 
    this.$element('scroll').getScrollRect({
      success({ width, height }) {
        console.log('宽度', width)
        console.log('高度', height)
      },
      fail(data, code) {},
    })
[/code]

复制代码

### revealScrollbar

短暂显示滚动条。仅当内容超出滚动容器（scroll 容器）时生效。
[code] 
    function revealScrollbar(options: {
      success?: () => void
      fail?: (data: string, code: number) => void
    }): void
[/code]

复制代码

**示例：**
[code] 
    this.$element('scroll').revealScrollbar({
      success() {},
      fail(data, code) {},
    })
[/code]

复制代码

上一篇

[swiper](</component/container/swiper/>)

下一篇

[widget-container](</component/container/widget-container/>)