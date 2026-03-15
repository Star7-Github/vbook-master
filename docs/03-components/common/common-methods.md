# 通用方法

# 通用方法

更新时间：2024/10/11 11:55:18

通用方法，提供给所有组件调用的方法

在组件使用`id`标记 id 属性后，开发者可通过`this.$element('idName')`获取 dom 节点，再调用以下列举的`通用方法`

`id`属性赋值可以查看此[文档](</component/common/common-attributes/#%E5%B8%B8%E8%A7%84%E5%B1%9E%E6%80%A7>)入门

`this.$element`可以查看此[文档](</reference/configuration/script/#%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95>)入门

## getBoundingClientRect(Object object)

返回元素的大小及其相对于视窗的位置

### 参数

Object object

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
success | function |  | 否 | 接口调用成功的回调函数  
fail | function |  | 否 | 接口调用失败的回调函数  
  
#### object.success 回调函数

##### 参数

Object rect

属性 | 类型 | 描述  
---|---|---  
left | number | 元素的左边界坐标  
right | number | 元素的右边界坐标  
top | number | 元素的上边界坐标  
bottom | number | 元素的下边界坐标  
width | number | 元素的宽度  
height | number | 元素的高度  
  
### 示例代码
[code] 
    <template>
      <div>
        <div id="box1" class="box-normal"></div>
        <div id="box2" class="box-normal"></div>
      </div>
    </template>
    <script>
      export default {
        onShow() {
          this.$element('box1').getBoundingClientRect({
            success: function (data) {
              const { top, bottom, left, right, width, height } = data
              prompt.showToast({
                message: `getBoundingClientRect结果： width:${width}, height:${height},
                             top:${top}, bottom:${bottom}, left:${left}, right:${right}`,
              })
            },
            fail: (errorData, errorCode) => {
              prompt.showToast({
                message: `错误原因：${JSON.stringify(errorData)}, 错误代码：${errorCode}`,
              })
            },
            complete: function () {
              console.info('complete')
            },
          })
        },
      }
    </script>
[/code]

复制代码

上一篇

[通用样式](</component/common/common-styles/>)

下一篇

[UI组件支持表冠旋转](</component/common/ui-rotation/>)