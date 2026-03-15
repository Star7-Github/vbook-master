# props

# props

更新时间：2025/07/10 10:44:44

## Prop 写法

Prop 属性名称使用 camelCase(驼峰命名法)命名法，在外部传递数据时请转化为以 kebab-case (短横线分隔命名) propObject 转换为 prop-object。
[code] 
    <!-- 子组件 -->
    <template>
      <div class="child-demo">
        <text>{{ propObject.name }}</text>
      </div>
    </template>
    <script>
      export default {
        props: {
          propObject: {},
        },
      }
    </script>
[/code]

复制代码
[code] 
    <!-- 父组件 -->
    <import name="comp" src="./comp"></import>
    <template>
      <div class="parent-demo">
        <comp prop-object="{{obj}}"></comp>
      </div>
    </template>
    <script>
      export default {
        data: {
          obj: {
            name: 'child-demo',
          },
        },
      }
    </script>
[/code]

复制代码

## 属性默认值

子组件声明属性时，可以设置默认值。当调用子组件没有传入该数据时，将会自动设为默认值。

如果需要设置默认值，`props` 属性的写法必须要要写成 Object 形式，**不能** 写成 Array 形式。

**示例如下：**
[code] 
    <script>
      // 子组件
      export default {
        props: {
          prop1: {
            default: 'Hello', //默认值
          },
          prop2Object: {}, //不设置默认值
        },
        onInit() {
          console.info(`外部传递的数据：`, this.prop1, this.prop2Object)
        },
      }
    </script>
[/code]

复制代码

## 数据单向性

父子间的数据传输是单向性的，父组件 prop 数据更新，子组件的数据会刷新为最新值;子组件的 prop 值发生改变，并不会改变父组件中值。

但是**prop 类型事数组或者对象，自组件变化会影响到父组件的值** ，这意味着你不应该在一个子组件内部改变 prop 的值，这是危险性操作。

常见的三种操作 prop 值的方法：

**1.将 prop 传入的值作为初始值，用 data 接收**
[code] 
    <script>
      export default {
        props: {
          say: {},
          propObject: {},
        },
        data() {
          return {
            obj: this.propObject.count,
          }
        },
        onInit() {
          console.info(`外部传递的数据：`, this.say, this.propObject)
        },
      }
    </script>
[/code]

复制代码

**提示：**

  * 如果你想用 data 直接接收 propObject 这个对象，可以采用**JSON.parse(JSON.stringify(propObject))** ，将 prop 深度克隆。

**2.$watch 监控数据改变**

如果是监听对象中的属性，参数请使用`.`分割，如：`this.$watch('propSay.name', 'watchPropsChange') 才能生效`

**注意使用$watch,一般用于处理 data 里面的数据监听**
[code] 
    <script>
      export default {
        data() {
          return {
            propSay: {
              name: 'app',
            },
          }
        },
        onInit() {
          // 监听数据变化
          this.$watch('propSay.name', 'watchPropsChange')
        },
        /**
         * 监听数据变化，你可以对数据处理后，设置值到data上
         * @param newV
         * @param oldV
         */
        watchPropsChange(newV, oldV) {
          console.info(`监听数据变化：`, newV, oldV)
          this.propSay = newV && newV.toUpperCase()
        },
      }
    </script>
[/code]

复制代码

上一篇

[自定义组件](</reference/app-service/parent-child-component-communication/>)

下一篇

[智慧服务卡片](</reference/widget/>)