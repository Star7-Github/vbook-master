# 条件渲染

# 条件渲染

更新时间：2023/10/31 15:05:28

> 条件渲染有 2 种：if/elif/else 和 show。它们的区别在于：if 为 false 时，组件会从 DOM 中移除，而 show 仅仅是渲染时不可见，组件依然存在于 DOM 中;

## if 指令

if 条件渲染，是指 if/elif/else 这 3 个相关指令，用于控制是否增加或者删除组件；

if/elif/else 节点必须是相邻的兄弟节点
[code] 
    <template>
      <div>
        <text if="{{display}}">Hello-1</text>
        <text elif="{{display}}">Hello-2</text>
        <text else>Hello-3</text>
      </div>
    </template>
    
    <script>
      export default {
        data: {
          display: false,
        },
      }
    </script>
[/code]

复制代码

## show 指令

show 指令，是指是否显示组件，用于控制组件的显示状态，并不会从 DOM 结构中删除;

show 等同于 visible=none, 主要用于在原生组件上声明；

show 指令开始支持在自定义组件上进行声明，当这样使用时，等同于在该自定义子组件的根节点上使用 show 指令；

对于之前版本，自定义组件不支持 show 指令的需求，可以通过 props 传入参数，在自己内部使用 show 来控制是否可见；
[code] 
    <template>
      <text show="{{visible}}">Hello</text>
    </template>
    
    <script>
      export default {
        data: {
          visible: false,
        },
      }
    </script>
[/code]

复制代码

## if 与 show 区别

  * 当 if/elif 指令的值为 false 时，节点会从页面中移除，当 if/elif 指令值为 true，组件会动态插入节点中；

  * 当 show 指令的值为 true 时，节点可见， 当其值为 false 时，组件不可见，但节点仍会保留在页面 DOM 结构中

上一篇

[列表渲染](</reference/app-service/for/>)

下一篇

[事件处理](</reference/app-service/event-on/>)