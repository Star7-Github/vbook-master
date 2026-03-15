# 组件动画

# 组件动画

更新时间：2025/10/09 11:25:10

除了提供常规的 CSS 样式动画，蓝河应用还具备 JS 组件动画的方法。相比于 CSS 样式动画，这种动画方式拥有更为灵活、个性化的逻辑控制能力。

## Element.animate()

创建一个 `Animation` 对象实例；调用其 `play` 方法，即可执行动画，表现为一系列变换 （位置、大小、旋转角度、背景颜色和不透明度）。

### 语法
[code] 
    const element = this.$element('elementIdName')
    const animation = element.animate(keyframes, options)
    animation.play()
[/code]

复制代码

### 参数

#### keyframes 关键帧

关键帧：动画序列中定义关键帧的样式来控制 CSS 动画序列中的中间步骤。

代表关键帧的一个数组集合，支持的属性有：

名称 | 类型 | 必填 | 默认值 | 描述  
---|---|---|---|---  
time | number | 是 | - | 表示在哪个阶段触发这个帧所包含的样式，0 表示开始时刻，100 表示结束时刻。  
width | number | 否 | - | 组件宽度  
height | number | 否 | - | 组件高度  
left/right/top/bottom | number | 否 | - | 组件定位值，当组件设置了 position 样式时生效，left 优先于 right，top 优先于 bottom  
opacity | number | 否 | 1 | 组件不透明度  
transform | object | 否 | - | 变换类型，支持下表列出的属性。  
transformOrigin | string | 否 | '50% 50%' | 变化中心点和 transform 搭配使用，第一个参数代表 x 轴位置，第二个参数代表 y 轴位置，单位 px 或百分比值；如："0 0"或者"10px 10px"或者"30% 50%"  
  
如上 `transform` 参数说明如下：

参数名 | 类型 | 默认值 | 描述  
---|---|---|---  
translate/translateX/translateY | string | - | 指定元素要移动到的位置，例如: `translate: 10px 10px`, `translateX: 10px`,`translateY: 10px`  
scale/scaleX/scaleY | number | - | 按比例放大或缩小元素，例如：`scale: 1.5`, `scale: 1.5 2`, `scaleX: 2`, `scaleY: 2`  
rotate | string | - | 指定元素将被旋转的角度，例如： `rotate: 45deg`  
  
**示例 1：中心旋转**
[code] 
    [
      {
        time: 0,
        transform: {
          rotate: '0deg',
        },
      },
      {
        time: 100,
        transform: {
          rotate: '360deg',
        },
      },
    ]
[/code]

复制代码

**示例 2：左上角为中心旋转**
[code] 
    [
      {
        time: 0,
        transform: {
          rotate: '0deg',
        },
        transformOrigin: '0px 0px',
      },
      {
        time: 100,
        transform: {
          rotate: '360deg',
        },
        transformOrigin: '0px 0px',
      },
    ]
[/code]

复制代码

#### options 可选项

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
id | `<string>` | 从'0'开始自减的 string | 动画 id。为减小内存消耗，请开发者尽可能使用该字段复用动画。注：1. 复用动画后，被复用的前一个动画的 onfinish 等实例事件将被清除，不被触发； 2. 请勿使用从'0'开始自减的 string 作为 id，以免与引擎内部 id 重复。  
delay | `<number>` | 0 | 延迟动画开始的毫秒数。  
fill | "forwards" | "none" | "none" | 在动画完成播放（"forwards"）之后保留，"none" 动画执行前后不会应用任何样式到目标元素  
duration | `<number>` | 0 | 每次迭代动画完成所需的毫秒数。如果此值为 0，则不会运行动画。  
easing | linear | ease | ease-in | ease-out | ease-in-out | 自定义 cubic-bezier，例如`cubic-bezier(0.42, 0, 0.58, 1)` | linear | 动画的变化率，随着时间的推移而变化。  
  
### 实例方法

方法 | 参数 | 描述  
---|---|---  
play | - | 开始执行动画  
finish | - | 结束动画  
pause | - | 暂停动画  
cancel | - | 取消动画  
reverse | - | 反转动画执行方向  
  
### 实例事件

事件 | 描述 | 示例  
---|---|---  
cancel | 动画被取消 | animation.oncancel = () => { //do something }  
finish | 动画执行结束 | animation.onfinish = () => { //do something }  
  
### 示例 Demo
[code] 
    <script>
      const keyframes1 = [
        {
          time: 0,
          width: 100,
          opacity: 1,
          transform: {
            translateY: '0',
          },
        },
        {
          time: 50,
          width: 300,
          opacity: 0.5,
          transform: {
            translateY: '-150',
          },
        },
        {
          time: 100,
          width: 100,
          opacity: 1,
          transform: {
            translateY: '0',
          },
        },
      ]
    
      const keyframes2 = [
        {
          time: 0,
          transform: {
            rotate: '0deg',
          },
        },
        {
          time: 100,
          transform: {
            rotate: '360deg',
          },
        },
      ]
    
      const keyframes3 = [
        {
          time: 0,
          transform: {
            rotate: '0deg',
          },
          transformOrigin: '0px 0px',
        },
        {
          time: 100,
          transform: {
            rotate: '360deg',
          },
          transformOrigin: '0px 0px',
        },
      ]
    
      const options = {
        duration: 1500,
        easing: 'cubic-bezier(0.140, 0.640, 0.710, 0.240)',
        delay: 0,
      }
      export default {
        animate1() {
          const element = this.$element('animate')
          const animation = element.animate(keyframes1, options)
          animation.play()
        },
        animate2() {
          const element = this.$element('animate')
          const animation = element.animate(keyframes2, options)
          animation.play()
        },
        animate3() {
          const element = this.$element('animate')
          const animation = element.animate(keyframes3, options)
          animation.onfinish = () => {
            console.log('onfinish')
          }
          animation.play()
        },
      }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center">
        <div class="w-[100px] h-[100px] bg-[#ff0000]" id="animate"></div>
        <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="跳跃" onclick="animate1" />
        <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="旋转(默认中心点)" onclick="animate2" />
        <input class="w-[450px] h-[80px] rounded-[40px] bg-[#09ba07] text-white text-[30px] mt-[80px]" type="button" value="旋转(变换中心点)" onclick="animate3" />
      </div>
    </template>
    
    <style>
      @tailwind utilities;
    </style>
[/code]

复制代码

上一篇

[自定义字体样式](</component/common/font-face-style/>)

下一篇

[基础组件](</component/basic/overview/>)