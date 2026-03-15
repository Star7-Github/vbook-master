# 通用事件

# 通用事件

更新时间：2025/10/09 11:25:10

通用事件指所有组件均支持的事件回调。

开发者可以在组件标签上通过 `on{eventName}`（如 `onclick`）或 `@{eventName}`（如 `@click`）的形式注册事件处理函数。 两种写法的效果一致，其中 `@event` 是语法糖，更适用于框架风格的开发方式。

有关事件绑定的更多说明，请参考 [事件绑定](</reference/app-service/event-on>) 文档。

## 示例代码
[code] 
    <template>
      <div>
        <text onclick="clickFunction1">line 1</text>
        <text @click="clickFunction2">line 2</text>
      </div>
    </template>
[/code]

复制代码

> 注：请确保 `clickFunction1` 和 `clickFunction2` 在组件的逻辑代码中有相应定义。

## 通用事件

名称 | 参数 | 描述 | 冒泡  
---|---|---|---  
touchstart | TouchEvent | 手指刚触摸组件时触发 | 支持  
touchmove | TouchEvent | 手指触摸后移动时触发 | 支持  
touchend | TouchEvent | 手指触摸动作结束时触发 | 支持  
touchcancel | TouchEvent | 触摸操作被系统中断时触发，如来电、弹窗等 | 支持  
click | MouseEvent | 用户点击组件时触发 | 支持  
longpress | MouseEvent | 用户长按组件时触发 | 支持  
  
## 事件对象

### TouchEvent

属性 | 类型 | 说明  
---|---|---  
type | string | 事件名称，如 touchstart、touchmove、click 等  
touches | Touch[] | 当前停留在屏幕中的触摸点信息的数组  
  
### Touch

属性 | 类型 | 说明  
---|---|---  
clientX | number | 距离可见区域左边沿的 X 轴坐标，不包含任何滚动偏移。  
clientY | number | 距离可见区域上边沿的 Y 轴坐标，不包含任何滚动偏移以及状态栏和 titlebar 的高度。  
pageX | number | 距离可见区域左边沿的 X 轴坐标，包含任何滚动偏移。  
pageY | number | 距离可见区域上边沿的 Y 轴坐标，包含任何滚动偏移。（不包含状态栏和 titlebar 的高度）  
offsetX | number | 距离事件触发对象左边沿 X 轴的距离  
offsetY | number | 距离事件触发对象上边沿 Y 轴的距离  
  
### MouseEvent

与 TouchEvent 中属性相同，表示鼠标事件相关的坐标信息。

属性 | 类型 | 说明  
---|---|---  
clientX | number | 距离可见区域左边沿的 X 轴坐标，不包含任何滚动偏移。  
clientY | number | 距离可见区域上边沿的 Y 轴坐标，不包含任何滚动偏移以及状态栏和 titlebar 的高度。  
pageX | number | 距离可见区域左边沿的 X 轴坐标，包含任何滚动偏移。  
pageY | number | 距离可见区域上边沿的 Y 轴坐标，包含任何滚动偏移。（不包含状态栏和 titlebar 的高度）  
offsetX | number | 距离事件触发对象左边沿 X 轴的距离  
offsetY | number | 距离事件触发对象上边沿 Y 轴的距离  
  
## 实战示例

如下示例在一个 `div` 元素上绑定了 `click` 和 `touchmove` 事件，触发时打印事件信息：
[code] 
    <script>
      export default {
        data: {},
        click(event) {
          console.log('click event fired')
        },
        move(event) {
          console.log('move event touches:' + JSON.stringify(event.touches))
        },
      }
    </script>
    
    <template>
      <div class="w-full h-full flex justify-center items-center bg-white">
        <div
          class="w-4/5 h-1/5 bg-gray-700"
          onclick="click"
          ontouchmove="move"></div>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

**打印结果如下，click 事件：**
[code] 
    move event touches:[
      {
        "offsetX": 296,
        "identifier": 0,
        "offsetY": 113.48148345947266,
        "clientY": 113.48148345947266,
        "clientX": 360,
        "pageY": 113.48148345947266,
        "pageX": 360
      }
    ]
[/code]

复制代码
[code] 
    click event fired
[/code]

复制代码

上一篇

[概述](</component/common/rule/>)

下一篇

[通用属性](</component/common/common-attributes/>)