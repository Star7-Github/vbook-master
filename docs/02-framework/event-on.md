# 事件处理

# 概述

更新时间：2025/08/13 20:11:57

通过在 UI 组件上绑定事件，开发者可以实现蓝河应用与用户之间的交互。

## 绑定事件

用法上，开发者可以使用 on (可以用@简写代替) 来绑定事件，如：onclick,onchange 可简写成 @click,@change，并在事件触发时执行对应的 JavaScript 业务代码。

### 示例如下
[code] 
    <template>
      <div class="tutorial-page">
        <text id="elNode1" class="{{ elClassName + 1 }}" disabled="false" onclick="onClickHandler"
          >组件节点1</text
        >
        <text
          id="elNode2"
          class="class-static-1 {{ elClassName + 2 }}"
          onclick="onClickHandler2('参数1', argName)"
          >组件节点2</text
        >
      </div>
    </template>
    
    <style lang="less">
      .tutorial-page {
        flex-direction: column;
      }
    </style>
    
    <script>
      export default {
        data: {
          elClassName: 'class-dynamic',
          argName: '动态参数',
        },
        onClickHandler(evt) {
          console.info(`触发事件`)
        },
        onClickHandler2(arg1, arg2, evt) {
          console.info(`触发事件，参数： ${arg1}, ${arg2}`)
        },
      }
    </script>
[/code]

复制代码

### 事件传参

UI 组件可以向绑定的事件方法传递自定义参数。

#### 示例如下
[code] 
    <template>
      <div class="demo-page">
        <text for="{{list}}" key="{{$idx}}" onclick="handle($idx,$item,total)">{{$item}}</text>
      </div>
    </template>
    
    <script>
      export default {
        data: {
          list: [1, 2, 3, 4, 5],
          total: 0,
        },
        handle(idx, item, total, $evt) {
          console.log(idx)
          console.log(item)
          console.log(total)
          console.log($evt)
        },
      }
    </script>
[/code]

复制代码

回调函数被调用时，会在参数列表末尾自动添加一个 evt 参数，通过 evt 参数开发者可以访问回调事件相关上下文数据。

  

UI 组件还支持许多其他的事件绑定，如果您想进一步了解，请移步[通用事件](</component/common/common-events/>)。

上一篇

[条件渲染](</reference/app-service/if-show/>)

下一篇

[自定义组件](</reference/app-service/parent-child-component-communication/>)