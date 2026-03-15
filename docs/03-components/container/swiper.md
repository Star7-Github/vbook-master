# swiper

# swiper

更新时间：2025/12/23 15:57:12

滑块视图容器，支持子组件

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
index | `<number>` | 0 | 否 | 当前显示的子组件索引  
indicator | `<boolean>` | true | 否 | 是否启用 indicator，默认 true  
scrollbar | `<boolean>` | false | 否 | 是否启用滚动条，如果 indicator 启用，则滚动条不会启用  
vertical | `<boolean>` | false | 否 | 滑动方向是否为纵向，纵向时 indicator 也为纵向  
previousmargin | `<string>` | 0px | 否 | 前边距，可用于露出前一项的一小部分，支持单位：px 和%  
nextmargin | `<string>` | 0px | 否 | 后边距，可用于露出后一项的一小部分，支持单位：px 和%  
enableswipe | `<boolean>` | true | 否 | 是否支持手势滑动 swiper  
effect | scroll | fade | scroll | 否 | 滑动动效类型， scroll 为滚动动效，fade 为淡入淡出动效  
  
**备注** ：`previousmargin`和`nextmargin`的总和不应该超过整个 swiper 大小的 1/2，超过部分将会被截取。

### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
indicator-type | normal | arc | normal | 否 | indicator 排列形状（普通或者弧形）  
indicator-color | `<color>` | rgba(255, 255, 255, 0.4) | 否 | indicator 填充颜色  
indicator-selected-color | `<color>` | #ffffff 或者 rgb(255, 255, 255) | 否 | indicator 选中时的颜色  
indicator-size | `<length>` | 12px | 否 | indicator 组件的直径大小  
indicator-[top|left|right|bottom] | `<length>` | `<percentage>` | - | 否 | indicator 相对于 swiper 的位置，indicator-type 为 arc 时，该样式无效  
indicator-spacing | `<number>` | - | 否 | indicator 间距，indicator-type 为 normal 时指间隔距离，indicator-type 为 arc 时指间隔角度  
  
### 事件

支持[通用事件](</component/common/common-events/>)

名称 | 参数 | 描述  
---|---|---  
change | {index:currentIndex} | 当前显示的组件索引变化时触发  
scrollbottom | - | 滑动到底部或者最右边  
scrolltop | - | 滑动到顶部或者最左边  
  
### 方法

名称 | 参数 | 描述  
---|---|---  
swipeTo | Object | swiper 滚动到 index 位置  
  
#### swipeTo 的参数说明:

名称 | 类型 | 是否必选 | 默认值 | 备注  
---|---|---|---|---  
index | number | 是 | 无 | swiper 滚动到 index 位置  
behavior | smooth|instant|auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant  
  
# swiper组件的基本用法

滑块视图容器

滑块视图-动效 
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <swiper class="w-full h-full bg-gray-500" animationtype="heartbeat">
        <div
          class="swiper-item items-center justify-center {{ $idx % 2 === 0 ? 'light' : 'dark' }}"
          for="{{ count }}"
        >
          <text class="text-[100px] text-center">{{ $item }}</text>
        </div>
      </swiper>
    </template>
    
    <style>
    @tailwind utilities;
    .dark {
      background-color: #6a88e6;
    }
    .light {
      background-color: #e8f3fe;
    }
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

弧形指示器
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <swiper class="w-full h-ful bg-gray-500" style="indicator-type: arc">
        <div class="items-center justify-center" for="{{ count }}">
          <text class="text-6xl text-center">{{ $item }}</text>
        </div>
      </swiper>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

滑块视图-编辑 
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <swiper class="w-full h-full bg-gray-500" edit="true">
        <div class="items-center justify-center" for="{{ count }}">
          <text class="text-[100px] text-center">{{ $item }}</text>
        </div>
      </swiper>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

基本用法 
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <div class="w-full h-full">
        <swiper class="w-full h-full">
          <div
            class="items-center justify-center {{$idx % 2 === 0 ? 'bg-[#e8f3fe]' : 'bg-[#6a88e6]'}}"
            for="{{ count }}"
          >
            <text class="text-[100px] text-center">{{ $item }}</text>
          </div>
        </swiper>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

纵向视图 
[code]
    <script>
    export default {
      data() {
        return {
          count: Array.from({ length: 10 }, (v, i) => i)
        }
      }
    }
    </script>
    
    <template>
      <swiper class="w-full h-full bg-gray-500" vertical="true">
        <div class="swiper-item flex items-center justify-center" for="{{ count }}">
          <text class="text-[100px] text-center">{{ $item }}</text>
        </div>
      </swiper>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
    
[/code]

复制代码

您当前浏览器不支持HTMT5视频播放

您当前浏览器不支持HTMT5视频播放

上一篇

[stack](</component/container/stack/>)

下一篇

[scroll](</component/container/scroll/>)