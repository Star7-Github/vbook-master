# image-animator

# image-animator

更新时间：2023/12/21 13:49:50

图片帧动画播放器。

### 属性

支持[通用属性](</component/common/common-attributes/>)还支持如下属性：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
images | `Array<ImageFrame>` | - | 是 | 设置图片帧信息集合。每一帧的帧信息包含图片路径、图片大小和图片位置信息。目前支持的图片格式为 png。  
predecode | `Number` | 0 | 否 | 是否启用预解码，默认值为 0，即不启用预解码，如该值设为 2，则播放当前页时会提前加载后面两张图片至缓存以提升性能  
iteration | number | string | infinite | 否 | 设置帧动画播放次数。number 表示固定次数，infinite 枚举表示无限次数播放。  
reverse | `boolean` | false | 否 | 设置播放顺序。false 表示从第 1 张图片播放到最后 1 张图片； true 表示从最后 1 张图片播放到第 1 张图片。  
fixedsize | `boolean` | true | 否 | 设置图片大小是否固定为组件大小。true 表示图片大小与组件大小一致，此时设置图片的 width 、height 、top 和 left 属性是无效的。false 表示每一张图片的独设置。  
duration | `String` | - | 是 | 每一帧图片的播放时长，单位支持[s(秒)或者 ms(毫秒)]，默认单位为 ms。示例:'1000ms'  
fillmode | `String` | forwards | 否 | 指定帧动画执行结束后的状态。可选项有：none：恢复初始状态。forwards：保持帧动画结束时的状态  
transition-timing-function | `String` | linear | 否 | 运动曲线的属性值。  
poster | `String` | first | 否 | 设置帧动画不执行时的展示。可选项有：first：展示第一帧图片；last：展示最后一帧图片  
  
ImageFrame 说明

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
src | `<uri>` | - | 是 | 图片路径，图片格式为 png。  
width | `<length>` | 0 | 否 | 图片宽度。示例:'100px'  
height | `<length>` | 0 | 否 | 图片高度。 示例:'100px'  
top | `<length>` | 0 | 否 | 图片相对于组件左上角的纵向坐标。示例:'100px'  
left | `<length>` | 0 | 否 | 图片相对于组件左上角的横向坐标。 示例:'100px'  
duration | `Number` | - | 否 | 每一帧图片的播放时长，单位毫秒。示例:100  
  
#### transition-timing-function 属性值:

值 | 描述  
---|---  
linear | 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。  
ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。  
ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。  
ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。  
ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。  
cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

### 事件

支持[通用事件](</component/common/common-events/>)外，还支持如下事件：

名称 | 参数 | 描述  
---|---|---  
start | - | 帧动画启动时触发。  
pause | - | 帧动画暂停时触发。  
stop | - | 帧动画结束时触发。  
resume | - | 帧动画恢复时触发。  
updatetime | {currentTime} | 帧动画播放过程中触发。  
  
### 支持如下方法

名称 | 参数 | 描述  
---|---|---  
start | - | 开始播放图片帧动画。再次调用，重新从第 1 帧开始播放。  
pause | - | 暂停播放图片帧动画。  
stop | - | 停止播放图片帧动画。  
resume | - | 继续播放图片帧。  
getState | - | 获取播放状态。playing：播放中。paused：已暂停 stopped：已停止。  
  
### 示例
[code] 
    <template>
      <div class="container">
        <image-animator class="animator" id="animator" images="{{frames}}" />
        <div class="btn-box">
          <input class="btn" type="button" value="start" onclick="handleStart" />
          <input class="btn" type="button" value="stop" onclick="handleStop" />
          <input class="btn" type="button" value="pause" onclick="handlePause" />
          <input class="btn" type="button" value="resume" onclick="handleResume" />
        </div>
      </div>
    </template>
    
    <script>
      export default {
        data: {
          frames: [
            {
              src: '/common/asserts/heart78.png',
            },
            {
              src: '/common/asserts/heart79.png',
            },
          ],
        },
        onReady() {
          let state = this.$element('animator').getState()
    
          switch (state) {
            case 'playing':
              //实现具体的业务逻辑
              break
            case 'paused':
              //实现具体的业务逻辑
              break
            case 'stopped':
              //实现具体的业务逻辑
              break
          }
        },
        handleStart() {
          this.$element('animator').start()
        },
        handlePause() {
          this.$element('animator').pause()
        },
        handleResume() {
          this.$element('animator').resume()
        },
        handleStop() {
          this.$element('animator').stop()
        },
      }
    </script>
[/code]

复制代码

# image-animator组件

图片帧动画播放器。

基础用法
[code]
    <script>
    export default {
      data() {
        return {
          frames: Array.from(
            { length: 10 },
            (v, k) => (v = { src: `/assets/images/animate/pic${k}.png` })
          ),
          duration: '330ms'
        }
      },
      onShow() {
        this.$element('animator').start()
      }
    }
    </script>
    
    <template>
      <div class="justify-center items-center bg-white">
        <image-animator
          class="w-[500px] h-[400px]"
          id="animator"
          duration="{{ duration }}"
          images="{{ frames }}"
        />
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

上一篇

[svg-container](</component/basic/svg-container/>)

下一篇

[animated-vector](</component/basic/animated-vector/>)