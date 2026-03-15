# switch

# switch

更新时间：2023/10/20 10:02:06

开关选择

### 子组件

不支持

### 属性

支持[通用属性](</component/common/common-attributes/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
checked | `<boolean>` | false | 否 | 可触发 checked 伪类  
  
### 样式

支持[通用样式](</component/common/common-styles/>)

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
thumb-color | `<color>` | `#009385` | 否 | 滑块颜色  
track-color | `<color>` | `#009385` | 否 | 滑轨颜色  
  
### 事件

支持[通用事件](</component/common/common-events/>)

名称 | 参数 | 描述  
---|---|---  
change | {checked:checkedValue} | checked 状态改变时触发  
  
# switch组件

开关选择

基础用法
[code]
    <script>
    export default {
      data() {
        return {
          checked: false,
          state: false
        }
      },
      changeHandler(evt) {
        this.state = evt.checked
      }
    }
    </script>
    
    <template>
      <div class="items-center justify-center bg-white">
        <switch checked="{{ checked }}" @change="changeHandler"></switch>
        <text class="text-[50px] ml-[20px]">{{ state }}</text>
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

[slider](</component/table/slider/>)

下一篇

[artboard](</component/table/artboard/>)