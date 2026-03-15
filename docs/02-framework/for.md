# 列表渲染

# 列表渲染

更新时间：2025/06/17 15:55:14

使用 `for` 指令可循环渲染数组数据。其语法支持多种形式（`{{}}` 可省略）：

## 基础写法
[code] 
    for="{{list}}"
[/code]

复制代码

  * `list` 是数组类型数据。

  * 默认数组元素变量为 `$item`，索引为 `$idx`。

## 自定义变量名
[code] 
    for="{{value in list}}"
[/code]

复制代码

  * `value` 是自定义的数组元素变量名。

  * 索引仍默认为 `$idx`。

## 自定义索引和元素变量名
[code] 
    for="{{(index, value) in list}}"
[/code]

复制代码

  * `index` 是索引变量名，`value` 是元素变量名。

## 使用常数作为循环次数

你还可以使用一个常数作为数据源，表示循环执行的次数。等价于遍历从 `0` 到 `n - 1` 的索引。
[code] 
    for="{{value in 10}}"
    for="{{(index, value) in 5}}"
[/code]

复制代码

  * 等价于遍历 `[0, 1, 2, ..., n - 1]`。

  * 可以搭配 `index` 和 `value` 使用。

## tid 属性

用于指定每个循环项的唯一 ID，用于 DOM 节点复用和性能优化。若未指定，默认使用 `$idx`。
[code] 
    <div for="value in list" tid="uniqueId">
      <text>{{$idx}}.{{value.name}}</text>
    </div>
    <script>
      export default {
        data: {
          list: [
            { name: 'aa', uniqueId: 1 },
            { name: 'bb', uniqueId: 2 },
            { name: 'cc', uniqueId: 3 },
          ],
        },
        onInit() {
          console.log('指令for')
        },
      }
    </script>
[/code]

复制代码

## 示例
[code] 
    <template>
      <div class="tutorial-page">
        <!-- 方式1：默认$item代表数组中的元素, $idx代表数组中的索引 -->
        <div class="tutorial-row" for="{{list}}" tid="uniqueId">
          <text>{{$idx}}.{{$item.name}}</text>
        </div>
        <!-- 方式2：自定义元素变量名称 -->
        <div class="tutorial-row" for="value in list" tid="uniqueId">
          <text>{{$idx}}.{{value.name}}</text>
        </div>
        <!-- 方式3：自定义元素、索引的变量名称 -->
        <div class="tutorial-row" for="(personIndex, personItem) in list" tid="uniqueId">
          <text>{{personIndex}}.{{personItem.name}}</text>
        </div>
      </div>
    </template>
    
    <style lang="less">
      .tutorial-page {
        flex-direction: column;
        .tutorial-row {
          width: 85%;
          margin-top: 10px;
          margin-bottom: 10px;
        }
      }
    </style>
    
    <script>
      export default {
        data: {
          list: [
            { name: 'aa', uniqueId: 1 },
            { name: 'bb', uniqueId: 2 },
            { name: 'cc', uniqueId: 3 },
          ],
        },
        onInit() {
          console.log('指令for')
        },
      }
    </script>
[/code]

复制代码

示例代码中，在渲染页面时，`div.tutorial-row`的结构，会根据 script 中的数据 list 的定义，被循环的生成多个。tid="uniqueId"，数组元素的某个属性名，不一定叫 uniqueId。 它类似于 React 的 key={item.uniqueId}或 vue 的 track-by={ uniqueId }, 用于优化渲染速度。当数据修改时，数据不改变的 dom 不会被重新渲染，已经改变的数据所在的 dom 才会被重新渲染， 因此我们必须保证 uniqueId 这个属性值在每个数组元素都不一样。

## 注意事项

> for 指令只能循环数组，不能循环对象。当 for 指令与 if 指令共存于一个标签时， if 指令的优先级优于 for 指令。为了方便未看文档的新人快速上手项目，不建议这两个指令共存于同一个标签。自定义变量表示 for 指令的数组索引和数组元素时，变量名不可以用`$`或`_`开头；使用`tid属性`时应注意：

  * `tid属性`指定的数据属性必须存在，否则可能导致运行异常
  * `tid属性`指定的数据属性要保证唯一，否则可能导致性能问题
  * `tid属性`目前不支持表达式。

上一篇

[数据绑定](</reference/app-service/data-binding/>)

下一篇

[条件渲染](</reference/app-service/if-show/>)