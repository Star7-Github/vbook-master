# animated-vector

# animated-vector

更新时间：2023/10/31 20:58:14

### 概述

animated-vector 组件，用于解析渲染安卓 xml 动画资源。

xml 动画通过将矢量可绘制对象资源与属性动画资源通过 AAPT 内嵌资源格式在 xml 文件中定义来实现，可在[安卓开发者文档](<https://developer.android.com/guide/topics/graphics/vector-drawable-resources?hl=zh_cn>)中了解更多。

animated-vector 组件提供配置 xml 动画，进行播放，暂停等操作的能力，只支持单个 xml 文件结构的矢量可绘制对象资源。

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
src | `<uri>` | - | 是 | xml 源文件的位置，仅支持本地单 xml 文件  
loop | `<boolean>` | false | 否 | 配置动画是否循环播放  
autoplay | `<boolean>` | true | 否 | 配置动画是否自动播放 (不能动态设置，只能首次设置)  
  
### 样式

支持[通用样式](</component/common/common-events/>)

### 方法

名称 | 参数 | 描述  
---|---|---  
start | - | 播放动画，如果动画正在播放则无效  
pause | - | 暂停播放动画  
resume | - | 继续播放动画  
stop | - | 停止播放动画  
  
### 事件

名称 | 参数 | 描述  
---|---|---  
animationEnd | - | 在一轮动画播放完毕或停止播放后，触发此回调  
  
### 示例代码
[code] 
    <template>
      <div>
        <animated-vector
          id="xml_id"
          src="common/xml/ex.xml"
          @animationEnd="animationEnd"
        ></animated-vector>
      </div>
    </template>
    <script>
      export default {
        animationEnd() {
          prompt.showToast({
            message: 'animation end!',
          })
        },
        start() {
          this.$element('xml_id').start()
        },
        pause() {
          this.$element('xml_id').pause()
        },
        resume() {
          this.$element('xml_id').resume()
        },
        stop() {
          this.$element('xml_id').stop()
        },
      }
    </script>
[/code]

复制代码

上一篇

[image-animator](</component/basic/image-animator/>)

下一篇

[physics-engine](</component/basic/physics-space/>)