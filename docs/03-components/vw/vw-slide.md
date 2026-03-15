# vw-slide

# vw-slide

更新时间：2025/04/30 20:56:55

滑动条组件用来快速调节设置值，如音量、亮度、色彩饱和度等. 用户通过点击左侧/右侧按钮的方式增加/降低数值.

### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
type | `<string>` | 'normal' | 是 | 类型，普通(normal)和栅格(grid)  
value | `<number>` | - | 是 | 当前进度数值  
maxValue | `<number>` | - | 是 | 数值范围的最大值  
minValue | `<number>` | - | 是 | 数值范围的最小值  
step | `<number>` | - | 是 | 步数间距  
focusing | `<boolean>` | - | 是 | 是否处于聚焦状态  
  
### 事件

名称 | 参数 | 描述  
---|---|---  
touchstart | 请参考通用事件中的 TouchEvent | 手指刚触摸组件时触发  
touchmove | 请参考通用事件中的 TouchEvent | 手指触摸后移动时触发  
touchend | 请参考通用事件中的 TouchEvent | 手指触摸动作结束时触发  
touchcancel | 请参考通用事件中的 TouchEvent | 手指触摸动作被打断时触发  
  
### vw-slide 用法
[code] 
    <vw-slide
      style="margin-top:20px"
      type="normal"
      value="{{valueA}}"
      min-value="45"
      max-value="255"
      step="42"
      focusing="{{true}}"
      ontouchstart="onStartA"
      ontouchend="onEnd"
      ontouchmove="onEnd"
      ontouchcancel="onEnd"
    ></vw-slide>
[/code]

复制代码

# vw-slide组件

滑动条组件用来快速调节设置值

基础用法
[code]
    <script>
    export default {
      onChangeHandler(evt) {
        console.log(evt.data)
      }
    }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center bg-black">
        <vw-slide
          value="10"
          min-value="0"
          max-value="100"
          onchange="onChangeHandler"
        ></vw-slide>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

上一篇

[vw-icon](</component/global/vw-icon/>)

下一篇

[vw-title](</component/global/vw-title/>)