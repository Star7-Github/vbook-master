# marquee

# marquee

更新时间：2025/08/13 20:11:57

跑马灯组件，用于展示一段滚动文字，默认为单行显示。

### 子组件

不支持子组件。

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
scrollamount | `<number>` | 1 | 否 | 每秒滚动的距离，单位：px。  
loop | `<number>` | 3 | 否 | 滚动的次数，默认值为 3。  
direction | `<string>` | left | 否 | 滚动方向，可选值：`left`，`right`  
text-offset | `<number>` | 0 | 否 | 设置内容首尾相接时的间距，需为大于 0 的整数，单位：px。  
double-ended-shadow | `<bool>` | true | 否 | 是否显示两端阴影效果。  
double-ended-shadow-color | `<color>` | rgb(0,0,0) | 否 | 两端阴影的颜色  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
color | `<color>` | rgba(0, 0, 0, 0.54) | 否 | 文字颜色。  
font-size | `<length>` | 30px | 否 | 文字大小。  
font-family | `<string>` | - | 否 | 字体名称，当前仅支持 `HYQiHei-65S`。  
text-align | left | center | right | left | 否 | 文字水平对齐方式。  
  
### 事件

支持[通用事件](</component/common/common-events/>)

名称 | 参数 | 描述  
---|---|---  
bounce | - | 当 marquee 滚动至末尾时触发  
finish | - | 当 marquee 按照 `loop` 属性设置的次数滚动完成时触发。仅当 `loop` 设置为大于 0 的数值时有效。  
start | - | 当 marquee 开始滚动时触发  
  
### 方法

名称 | 参数 | 描述  
---|---|---  
start | - | 开始滚动 marquee  
stop | - | 停止滚动 marquee  
  
### 示例代码
[code] 
    <template>
      <div class="container">
        <marquee>这段文字展示跑马灯效果默认连续滚动ABCDEFGHIJKLMN</marquee>
        <marquee id="marquee" loop="1" onbounce="bounce" onfinish="finish" onstart="start">
          这段文字展示跑马灯效果滚动一次ABCDEFGHIJKLMN
        </marquee>
        <input type="button" class="btn" @click="startHandler" value="start" />
        <input type="button" class="btn" @click="stopHandler" value="stop" />
      </div>
    </template>
    
    <script>
      import prompt from '@system.prompt'
      export default {
        startHandler() {
          this.$element('marquee').start()
        },
        stopHandler() {
          this.$element('marquee').stop()
        },
        bounce() {
          prompt.showToast({
            message: 'bounce',
          })
        },
        finish() {
          prompt.showToast({
            message: 'finish',
          })
        },
        start() {
          prompt.showToast({
            message: 'start',
          })
        },
      }
    </script>
    
    <style>
      .container {
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      marquee {
        width: 500px;
        height: 80px;
        color: #9acd32;
        font-size: 50px;
        margin: 20px 0;
      }
      .btn {
        width: 300px;
        height: 80px;
        text-align: center;
        border-radius: 5px;
        color: #ffffff;
        font-size: 30px;
        background-color: #0faeff;
        margin: 20px;
      }
    </style>
[/code]

复制代码

上一篇

[span](</component/basic/span/>)

下一篇

[progress](</component/basic/progress/>)