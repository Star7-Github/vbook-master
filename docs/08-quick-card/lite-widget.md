# 轻卡开发

# 轻卡开发

更新时间：2025/10/09 11:25:10

轻卡不运行 JavaScript，因此其开发范式与标准卡片存在差异，具体细节将在本节中进一步介绍。

## 基本范式

轻卡的开发 ux 文件开发分为`data`、`template`和`style`三个部分。

**例如：**
[code] 
    <data>
      {
       "uiData": {
        "content": "轻卡示例"
       }
      }
    </data>
    
    <template>
      <text class="text-xs">{{content}}</text>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

## 数据绑定

在 data 标签中使用 uiData 声明数据，然后在 template 中使用`{{}}`来绑定数据。
[code] 
    {
      "uiData": {
        "content": "Hello World!",
        "key1": "Hello",
        "key2": "World",
        "flag1": true,
        "flag2": false
      }
    }
[/code]

复制代码
[code] 
    <template>
      <div class="container">
        <text>{{content}}</text>
        <!-- 输出：Hello World！-->
        <text>{{key1}} {{key2}}</text>
        <!-- 输出：Hello World-->
        <text>key1 {{key1}}</text>
        <!-- 输出：key1 Hello-->
        <text>{{flag1 && flag2}}</text>
        <!-- 输出：false-->
        <text>{{flag1 || flag2}}</text>
        <!-- 输出：true-->
        <text>{{!flag1}}</text>
        <!-- 输出：false-->
      </div>
    </template>
[/code]

复制代码

**表达式支持**

卡片模版中支持表达式有以下几种：

操作符 | 描述 | 示例  
---|---|---  
`+`,`-`, `*`, `/`, `%`, `++`, `--`, `**` | 算术运算（+包含字符串拼接） | `a + b`  
neg | 转负数 | `-a`  
`>=`, `<=`, `>`, `<`, `==`, `!=`, `===`, `!==` | 比较运算 | `a > b`  
&&, || | 逻辑运算 | a || b  
! | 取反运算 | `!a`  
`.`, `[]` | 取属性运算 | `item.name`, `arr[3]`  
?: | 三目运算 | `a > 0 ? 'good' : 'bad'`  
`` | 字符串拼接：1. 变量拼接变量；2. 常量拼接变量 | 1\. { { key1 } } - { { key2 } }   
2\. my name is { { name } }  
  
其中，表达式支持的数据类型：

  * 基本数据类型：字符串（String）、数字（Number）、布尔（Boolean）、空（Null）
  * 引用数据类型：对象（Object）、数组（Array）

## 条件渲染

条件渲染分为 2 种实现：`if/elif/else` 和 `show`。

**if/elif/else**

`if/elif/else` 节点**必须是相邻的兄弟节点** ，否则会导致编译失败。仅当条件成立时，对应的节点才会保留在虚拟 DOM（VDOM）中，其余节点会被移除。
[code] 
    {
      "uiData": {
        "display": false
      }
    }
[/code]

复制代码
[code] 
    <template>
      <div>
        <text if="{{display}}">Hello-1</text>
        <text elif="{{display}}">Hello-2</text>
        <text else>Hello-3</text>
      </div>
    </template>
[/code]

复制代码

**show**

`show` 控制组件的可见性。被设置为 `false` 时，组件不会被渲染到界面上，但仍然保留在 VDOM 中，不会被移除。
[code] 
    {
      "uiData": {
        "visible": false
      }
    }
[/code]

复制代码
[code] 
    <template>
      <text show="{{visible}}">Hello</text>
    </template>
[/code]

复制代码

## 列表渲染

使用 `for` 指令可循环渲染数组数据。其语法支持多种形式（`{{}}` 可省略）：

**基础写法：**
[code] 
    for="{{list}}"
[/code]

复制代码

  * `list` 是数组类型数据。

  * 默认数组元素变量为 `$item`，索引为 `$idx`。

**自定义变量名：**
[code] 
    for="{{value in list}}"
[/code]

复制代码

  * `value` 是自定义的数组元素变量名。

  * 索引仍默认为 `$idx`。

**自定义索引和元素变量名：**
[code] 
    for="{{(index, value) in list}}"
[/code]

复制代码

  * `index` 是索引变量名，`value` 是元素变量名。

**使用常数作为循环次数：**

你还可以使用一个常数作为数据源，表示循环执行的次数。等价于遍历从 `0` 到 `n - 1` 的索引。
[code] 
    for="{{value in 10}}"
    for="{{(index, value) in 5}}"
[/code]

复制代码

  * 等价于遍历 `[0, 1, 2, ..., n - 1]`。

  * 可以搭配 `index` 和 `value` 使用。

**tid 属性:**

用于指定每个循环项的唯一 ID，用于 DOM 节点复用和性能优化。若未指定，默认使用 `$idx`。
[code] 
    {
      "uiData": {
        "list": [
          { "name": "aa", "uniqueId": 1 },
          { "name": "bb", "uniqueId": 2 },
          { "name": "cc", "uniqueId": 3 }
        ]
      }
    }
[/code]

复制代码
[code] 
    <div for="value in list" tid="uniqueId">
      <text>{{$idx}}.{{value.name}}</text>
    </div>
[/code]

复制代码

## 事件绑定

轻卡仅支持组件的通用事件 click，对于事件的响应动作需要在 data 模块下 actions 下提前声明。
[code] 
    {
      "actions": {
        "onTextClick": {
          "type": "router",
          "url": "hap://app/com.example.quickapp/page",
          "params": {
            "param": "111"
          }
        }
      }
    }
[/code]

复制代码
[code] 
    <div>
      <!-- 标准格式 -->
      <text onclick="onTextClick"></text>
      <!-- 简写 -->
      <text @click="onTextClick"></text>
    </div>
[/code]

复制代码

**事件绑定传参：** 支持默认参数 $event 和 for 指令循环中 $item

**示例 1：** 组件事件参数通过 $event 获取
[code] 
    {
      "actions": {
        "onSwitchChange": {
          "type": "message",
          "params": {
            "checked": "{{$event.checked}}"
          }
        }
      }
    }
[/code]

复制代码
[code] 
    <switch @change="onSwitchChange"></switch>
[/code]

复制代码

**示例 2：** for 循环列表中可以通 $item 获取列表 item
[code] 
    {
      "uiData": {
        "list": [
          { "name": "aa", "uniqueId": 1 },
          { "name": "bb", "uniqueId": 2 }
        ]
      },
      "actions": {
        "handleClick": {
          "type": "message",
          "params": {
            "name": "{{$item.name}}"
          }
        }
      }
    }
[/code]

复制代码
[code] 
    <div for="{{list}}" tid="uniqueId" @click="handleClick">
      <text>{{$item.name}}</text>
    </div>
[/code]

复制代码

轻卡当前支持的事件响应动作有跳转和消息以及代理事件，事件响应动作格式定义如下:

**参数** | **类型** | **必填** | **描述**  
---|---|---|---  
type | "router" | "message" | 是 | 事件类型，下面详细介绍  
url | string | string[] | 否 | 事件类型为 router 时必填，描述跳转页面链接，支持单条或多条 deeplink，支持变量形式。事件类型为 message 时不需要。  
params | Record<string, any> | 否 | 参数对象，支持在顶层字段中使用 `{{变量}}`，嵌套对象或数组中的字段不支持变量绑定。  
  
### router

跳转事件是可以直接在卡片宿主里完成跳转动作, 示例如下：

支持主应用的页面跳转和公开的 scheme
[code] 
    {
      "uiData": {
        "pageUrl": "hap://app/com.example.demo/page",
        "a": "pa"
      },
      "actions": {
        "routerEvent": {
          "type": "router",
          "url": "{{ pageUrl }}",
          "params": {
            "a": "{{a}}",
            "b": "b",
            "c": { "s": "sss" }
          }
        }
      }
    }
[/code]

复制代码

**支持跳转的 deeplink 协议：**
[code] 
    {scheme}://{host}/{path}?{query}
[/code]

复制代码

### message

消息事件是指事件发送给 widgetProvider 处理。
[code] 
    {
      "uiData": {
        "name": "hello"
      },
      "actions": {
        "messageEvent": {
          "type": "message",
          "params": {
            "name": "{{name}}",
            "b": "b"
          }
        }
      }
    }
[/code]

复制代码

此时在 widgetProvider 中收到的消息如下：
[code] 
    export default {
      onWidgetEvent(id, { event }) {
        /**
         * event 示例:
         * { action: "messageEvent", params: { name: "hello", b: "b" } }
         */
        console.log(`event`, event)
      },
    }
[/code]

复制代码