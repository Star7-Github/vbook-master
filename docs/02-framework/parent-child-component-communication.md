# 自定义组件

# 自定义组件

更新时间：2025/06/23 10:14:39

> 熟悉自定义组件的开发，了解父子组件之间的通信方式，如：props，data。

## 组件自定义

开发页面时开发者必须用到各种 UI 组件，如：`text`、`div`，这些组件是由蓝河系统提供的；如果开发一个复杂的页面，开发者把所有的 UI 部分写在一个文件的`<template>`，那代码的可维护性将会很低，并且模块之间容易产生不必要的耦合关系。

为了更好的组织逻辑与代码，可以把页面按照功能拆成多个模块，每个模块负责其中的一个功能部分，最后页面将这些模块引入管理起来，传递业务与配置数据完成代码分离，那么这就是`自定义组件`的意义。

自定义组件是开发者使用 `.ux` 文件编写的 UI 组件，可以对数据、事件、方法进行个性化管理。

**示例如下：**
[code] 
    <template>
      <div class="tutorial-page">
        <text class="tutorial-title">自定义组件:</text>
        <text>{{ say }}</text>
        <text>{{ obj.name }}</text>
      </div>
    </template>
    
    <style lang="less">
      .tutorial-page {
        flex-direction: column;
        padding-top: 20px;
    
        .tutorial-title {
          font-weight: bold;
        }
      }
    </style>
    
    <script>
      // 子组件
      export default {
        data: {
          say: 'hello',
          obj: {
            name: '蓝河应用',
          },
        },
        /*
          data（）{
          return {
              say:'hello',
              obj:{
                name:'vivo手表应用'
              }
          }
          },
        */
        onInit() {
          console.log('我是子组件')
        },
      }
    </script>
[/code]

复制代码

自定义组件中数据模型只能使用**data 属性** ，data 类型可以是 Object 或 Function。如果是函数，返回结果必须是对象。

## 组件使用

### 组件引入

蓝河应用中是通过`<import>标签`引入组件,如下面代码所示
[code] 
    <import name="XXX" src="XXX"></import>
[/code]

复制代码

`<import>标签`中的的`src`属性指定自定义组件的地址，`name`属性指定在父组件中引用该组件时使用的**标签名称**

**示例如下：**
[code] 
    <import name="comp-part1" src="./part1"></import>
    
    <template>
      <div class="tutorial-page">
        <text class="tutorial-title">引入组件：</text>
        <comp-part1></comp-part1>
      </div>
    </template>
    
    <style lang="less">
      .tutorial-page {
        flex-direction: column;
        padding: 20px 10px;
    
        .tutorial-title {
          font-weight: bold;
        }
      }
    </style>
    
    <script>
      // 父组件
      export default {
        data: {},
        onInit() {
          console.log('引入组件')
        },
      }
    </script>
[/code]

复制代码

## 自定义组件的生命周期

属性 | 类型 | 参数 | 返回值 | 描述 | 触发时机  
---|---|---|---|---|---  
onInit | Function | 无 | 无 | 监听初始化 | 当数据驱动化完成时触发  
onReady | Function | 无 | 无 | 监听模板创建完成 | 当模板创建完成时触发  
onDestroy | Function | 无 | 无 | 监听组件销毁 | 当销毁时触发  
  
## 父子组件通信

### 父组件通过 Prop 向子组件传递数据

父组件向子组件传递数据，通过在子组件的`props`属性中声明对外暴露的属性名称，然后在`组件引用标签`上声明传递的父组件数据，详见[Props](</reference/app-service/props>)

**示例如下：**
[code] 
    <!-- 子组件 -->
    <template>
      <div class="child-demo">
        <text class="title">子组件:</text>
        <text>{{ say }}</text>
        <text>{{ propObject.name }}</text>
      </div>
    </template>
    <script>
      export default {
        props: {
          say:{},
          propObject:{}
        }
    
        onInit() {
          console.info(`外部传递的数据：`, this.say, this.propObject)
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
        <comp say="{{say}}" prop-object="{{obj}}"></comp>
      </div>
    </template>
    <script>
      export default {
        data: {
          say:'hello'
          obj:{
            name:'child-demo'
          }
        }
      }
    </script>
[/code]

复制代码

### 子组件对父组件通信

当子组件对数据进行改造后，把最终数据交给父组件甚至往上，往往有以下办法

  * 父组件传递的数据本身就是对象，子组件**直接修改对象中的属性** ，父组件的值也会发生改变，不推荐这种;
  * 子组件通过`$emit()`触发在 UI 组件上绑定的自定义事件来执行父组件的方法

#### emit 示例如下

父组件监听子组件事件
[code] 
    <import name="comp" src="./comp.ux"></import>
    <template>
      <div class="parent-demo">
        <text>我是父组件count:{{count}}</text>
        <comp count="{{count}}" @child-evt="emitEvt"></comp>
      </div>
    </template>
    
    <script>
      export default {
        data: {
          count: 20,
        },
        emitEvt(evt) {
          this.count = evt.count
        },
      }
    </script>
[/code]

复制代码

子组件触发事件
[code] 
    <template>
      <div class="child-demo">
        <text>我是子组件一count:{{compCount}}</text>
        <input type="button" @click='addHandler' value='add'></input>
      </div>
    </template>
    <script>
      export default {
        props: {
          count:{}
        },
        data(){
            return{
                compCount:this.count
            }
        },
        addHandler(){
            this.compCount ++
            this.$emit('childEvt',{
                count:this.compCount
            })
        },
      }
    </script>
[/code]

复制代码

上一篇

[事件处理](</reference/app-service/event-on/>)

下一篇

[props](</reference/app-service/props/>)