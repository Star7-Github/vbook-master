# 输入法

# 输入法

更新时间：2024/07/05 18:02:47

## 接口声明
[code] 
    { "name": "blueos.service.inputMethod" }
[/code]

复制代码

## 导入模块
[code] 
    import inputmethod from '@blueos.service.inputMethod' 或 const inputmethod = require('@blueos.service.inputMethod')
[/code]

复制代码

## 接口定义

### inputmethod.setInput()

输入法应用向页面的 [<input>](</component/table/input>) 组件写入数据，仅输入法应用才会用到此功能

#### 参数：

属性 | 类型 | 说明  
---|---|---  
value | String | 输入法录入的数据  
  
#### 返回值：

无

#### 示例：
[code] 
    inputmethod.setInput({
      value: 'hello vivo watch',
    })
[/code]

复制代码

## 如何调起输入法

### 1\. 选择输入法类型

`input` 组件 `type` 属性可以控制拉起输入法类型

  * text: 手写输入法
  * speak: 语音输入法

[code] 
    <template>
      <input type="text" value="inputValue" onchange="textChange" />
    </template>
    <script>
      export default {
        data: {
          inputValue: '',
        },
        textChange({ value }) {
          this.inputValue = value
        },
      }
    </script>
[/code]

复制代码

### 2.禁止 input 输入法自动拉起

若调用者仅需要展示文本，而不希望自动拉起输入法，可以在 `input` 组件上设置属性 `readonly="readonly"`
[code] 
    <template>
      <input type="text" value="inputValue" readonly="readonly" />
    </template>
    <script>
      export default {
        data: {
          inputValue: 'hello',
        },
      }
    </script>
[/code]

复制代码

### 3.任意组件拉起输入法

  1. 增加类型为 `text` 或者 `speak` 的 `input` 组件，并将其隐藏 `show="false"`, `input`组件位置可以是任意的。
  2. `input` 组件的 `change` 事件回调用于调用者接收输入法返回的数据。
  3. 在其他需要调用输入法的组件的 `click` 事件中调用 `input` 组件的 `focus` 方法
  4. 若有多个组件需要启动输入法，只需要新增一个 `input` 组件，在对应的组件的 `click` 方法中标识是哪个组件拉起输入法。

[code] 
    <template>
      <div>
        <text onclick="btnClick">{{inputValue}}</text>
        <input show="false" id="ipt" type="text" onchange="textChange" />
      </div>
    </template>
    <script>
      export default {
        data: {
          inputValue: '',
        },
        textChange({ value }) {
          this.inputValue = value
        },
        btnClick() {
          this.$element('ipt').focus()
        },
      }
    </script>
[/code]

复制代码

上一篇

[系统设置](</api/system/settings/>)

下一篇

[解压缩](</api/system/fastlz/>)