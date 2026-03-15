# UI组件支持表冠旋转

# UI 组件支持的表冠旋转

更新时间：2025/10/09 11:25:10

作为手表上非常重要的交互按钮，表冠在蓝河系统中得到了充分的支持。我们严格遵守了只有在获得表冠焦点后才能响应表冠事件的规则，在此前提下，蓝河系统提供了丰富的表冠响应方式，并支持开发者进行自定义和个性化的表冠响应。这些支持和机制的存在，可以让开发人员更加便捷地使用 UI 组件和表冠交互控制，提高表冠的交互性和可用性。

## UI 组件表冠焦点

为实现 UI 组件随表冠的旋转而滑动，务必确保 UI 组件处于获焦状态。同时，页面中只允许有一个组件获得焦点。

默认焦点分配在最外层的最后一个可响应表冠的组件上。

## 自定义 UI 组件对旋转表冠的响应

开发者可以根据实际情况对组件响应旋转表冠事件进行自定义处理。

## 默认支持的表冠组件如下：

默认支持表冠的组件，其响应表冠选择和手指操作一致，组件上该触发的生命周期都会触发。

组件名称 | 类型  
---|---  
list | 用来呈现连续、多行数据的组件，包含一系列相同类型的列表项。  
swiper | 一种带滚动功能的组件，它采用滑动的方式在有限的区域内显示更多的内容。  
picker | 滚动选择器，允许用户从预定义范围中进行选择。当前支持时间选择器、日期选择器。  
slider | 滑动型输入器。  
scroll | 滚动视图容器。竖向或水平方向滚动容器，竖向滚动需要设置定高，水平滚动需要设置定宽。  
  
## 接口定义

## 属性

### 以下属性都是组件的通用属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
vibration-effectEnabled | Boolean | true | 否 | 表冠旋转的时候是否具有振动的效果，true 表示有振动效 果，false 表示没有振动效果  
rotation-sensitivity | Number | 1 | 否 | 表冠灵敏度数值可设置为 高，正常，低以及默认的灵敏 度 1:低级，2:正常，3:高级  
touch-focusable | Boolean | false | 否 | 设置组件在触摸模式下是否可以接收对焦 。  
  
## 事件

事件名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
rotation | Function | - | 否 | 组件监听表冠旋转的回调事件，组件的通用事件。  
  
### 事件参数返回值 Object 对象的具体参数说明如下:

接收参数 | 类型 | 说明  
---|---|---  
direction | Boolean | 旋转方向，表冠逆时针是正转返回 true，顺时针是反转返回 false。  
delta | delta | 单次旋转变化量，重新旋转时会清零，正常低速情况下变化量的绝对值恒为 1，正 负代表旋转方向，正转为正，反转为负，单位为旋转事件的最小刻度。  
velocity | Number | 旋转速度，方向之分与 delta 相同，单位为刻度/秒。  
duration | Number | 事件时间间隔，本次和上一次事件触发时的时间间隔，首次触发事件时时间为 0， 单位为毫秒。  
state | Number | 表冠旋转的状态，可取的值为 1:开始旋转，2:旋转中 ，3:旋转结束。  
  
## 方法

方法名称 | 类型 | 说明  
---|---|---  
requestFocus | Boolean | 设置当前要获取焦点的组件，入参为 true 让当前组件抢占焦点，优先级最 高。此方法也是组件的通用方法。  
  
### 示例

#### 以 Picker 组件是默认支持表冠旋转的，旋转表冠组件聚焦设置示例代码如 下:
[code] 
    <script>
      export default {
        onReady() {
          const picker = this.$element('picker')
          picker.requestFocus(true)
        },
      }
    </script>
    
    <template>
      <picker class="w-[750px] h-[750px] bg-black" id="picker" type="time"></picker>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

#### 自定义 UI 组件支持表冠旋转
[code] 
    <script>
      export default {
        rotationHandler(ev){
          console.log('表冠事件输出'+ev )
          // 改变亮度
        },
        onReady () {
          const div = this.$element("div")
          div.requestFocus(true)
        }
      }
    </script>
    
    <template>
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-60 h-60 bg-black" id="div" @rotation="rotationHandler">
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

上一篇

[通用方法](</component/common/common-methods/>)

下一篇

[颜色样式](</component/common/color/>)