# 页面路由

# 页面路由

更新时间：2025/10/09 11:25:10

> 了解如何打开页面、回退，并传递参数

## 组件 a 切换页面

### 切换页面

组件 a 可通过配置 href 属性跳转到应用内的页面

**示例如下：**
[code] 
    <template>
      <div class="tutorial-page">
        <!-- 以'/'开头的应用内页面的路径 -->
        <a href="/PageParams/receiveparams">跳转到接收参数页面</a>
        <!-- 以非'/'开头的应用内页面的名称 -->
        <a href="PageParams/receiveparams">跳转到接收参数页面</a>
        <!-- 特殊的,如果uri的值是'/',则跳转到path为'/'的页,没有则跳转到首页-->
        <a href="/">跳转到首页</a>
      </div>
    </template>
[/code]

复制代码

### 传递参数

通过组件 a 实现页面切换时，可以通过'?key=value'的方式添加参数，支持参数为变量

**示例如下：**
[code] 
    <script>
      export default {
        data: {
          title: 'Hello, world!',
        },
        onInit() {
          console.log('组件a切换页面并传递参数')
        },
      }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center">
        <!-- 添加参数 -->
        <a href="/PageParams/receiveparams?key=Hello, world!" class="mt-[75px] text-[30px] text-[#09ba07] underline">携带参数key1跳转</a>
        <!-- 添加变量参数 -->
        <a href="/PageParams/receiveparams?key={{title}}" class="mt-[75px] text-[30px] text-[#09ba07] underline">携带参数key2跳转</a>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

## 接口 router 切换页面

### 切换页面

router 接口在使用前，需要先导入模块

`router.push(OBJECT)` / `router.replace(OBJECT)` 支持的参数 uri 与组件 a 的 href 属性完全一致

**示例如下：**
[code] 
    <script>
      // 导入模块
      import router from '@blueos.app.router'
    
      export default {
        onInit () {
          console.log('接口router切换页面')
        },
        routePagePush () {
          // 跳转到应用内的某个页面
          router.push({
            uri: '/PageParams/receiveparams'
          })
        },
        routePageReplace () {
          // 跳转到应用内的某个页面，当前页面无法返回
          router.replace({
            uri: '/PageParams/receiveparams'
          })
        },
        routePageBack () {
          // 返回上一页面
          router.back()
        },
        routePageClear () {
          // 清空所有历史页面记录，仅保留当前页面
          router.clear()
        }
      }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center">
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="跳转到接收参数页面" onclick="routePagePush"></input>
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="跳转到接收参数页面，当前页面无法返回" onclick="routePageReplace"></input>
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="返回上一页" onclick="routePageBack"></input>
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="清空页面记录，仅保留当前页面" onclick="routePageClear"></input>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

### 传递参数

router 接口的参数 params 可配置页面跳转时需要传递的参数

**示例如下：**
[code] 
    <script>
      // 导入模块
      import router from '@blueos.app.router'
    
      export default {
        data: {
          title: 'Hello, world!'
        },
        onInit () {
          console.log('接口router切换页面并传递参数')
        },
        routePagePushWithParams () {
          // 跳转到应用内的某个页面
          router.push({
            uri: '/PageParams/receiveparams',
            params: { key: this.title }
          })
        },
        routePageReplaceWithParams () {
          // 跳转到应用内的某个页面，当前页面无法返回
          router.replace({
            uri: '/PageParams/receiveparams',
            params: { key: this.title }
          })
        }
      }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center">
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="携带参数跳转页面" onclick="routePagePushWithParams"></input>
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-[30px] text-white" type="button" value="携带参数跳转页面，当前页面无法返回" onclick="routePageReplaceWithParams"></input>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

## 接收参数

现在，开发者已经掌握了通过组件 a 和接口 router 在页面之间传递参数的方法，如何接收参数呢？

其实很简单，组件 a 和接口 router 传递的参数的接收方法完全一致：在页面的 ViewModel 的`data属性`中声明使用的属性

**示例如下：**
[code] 
    <script>
      export default {
        data: {
          key: '',
        },
        onInit() {
          console.log('接收参数')
    
          // js中输出页面传递的参数
          console.info('key: ' + this.key)
        },
      }
    </script>
    
    <template>
      <div class="flex flex-col justify-center items-center">
        <text>page</text>
        <!-- template中显示页面传递的参数 -->
        <text>{{key}}</text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

上一篇

[页面布局](</reference/app-service/page-style-and-layout/>)

下一篇

[数据绑定](</reference/app-service/data-binding/>)