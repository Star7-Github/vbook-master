# 页面路由

# 页面路由

更新时间：2024/01/10 16:04:30

## 接口声明

无需声明

## 导入模块
[code] 
    import router from '@blueos.app.appmanager.router' 或 const router = require('@blueos.app.appmanager.router')
[/code]

复制代码

## 接口定义

### router.push(OBJECT)

跳转到应用内的某个页面。

#### 参数：

参数 | 类型 | 必填 | 说明  
---|---|---|---  
uri | String | 是 | 要跳转到的 uri，可以是下面的格式：  
1\. 以"/"开头的应用内页面的路径；例：/about。  
2\. 以非"/"开头的应用内页面的名称；例：About。  
3\. 特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页  
params | Object | 否 | 跳转时需要传递的数据；跳转到蓝河应用页面时，参数可以在目标页面中通过`this.param1`的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。  
transition | Object | 否 | 设置当前跳转的转场动画，优先级高于 `router.setTransition`  
  
#### transition 参数说明

属性 | 类型 | 必填 | 说明  
---|---|---|---  
forward | Object | 否 | 路由进入页面时的动效  
back | Object | 否 | 路由返回页面时的动效  
  
#### forward、back 参数说明

属性 | 类型 | 必填 | 说明  
---|---|---|---  
exit | TransitionAnimation | 否 | 即将退出的页面动画  
enter | TransitionAnimation | 否 | 即将出现的页面动画  
  
#### 示例：

  * 应用内切换页面

    * path 切换
[code] router.push({
            uri: '/about',
            params: {
              testId: '1',
            },
          })
[/code]

复制代码

    * name 切换
[code] // open page by name
          router.push({
            uri: 'About',
            params: {
              testId: '1',
            },
          })
[/code]

复制代码

  * 打开另一个应用

    * 指定 deeplink 打开
[code] router.push({
            uri: 'hap://app/com.vivo.bind/pages/bindmain?key=value',
          })
[/code]

复制代码

### router.replace(OBJECT)

跳转到应用内的某个页面，当前页面无法返回

#### 参数：

参数 | 类型 | 必填 | 说明  
---|---|---|---  
uri | String | 是 | 要跳转到的 uri，可以是下面的格式：

  1. 以"/"开头的应用内页面的路径；例：/about。
  2. 以非"/"开头的应用内页面的名称;例：About。
  3. 特殊的，如果 uri 的值是"/"，则跳转到 path 为"/"的页，没有则跳转到首页

  
params | Object | 否 | 跳转时需要传递的数据，参数可以在目标页面中通过`this.param1`的方式使用，param1 为 json 中的参数名，param1 对应的值会统一转换为 String 类型。  
  
#### 示例：
[code] 
    router.replace({
      uri: '/test',
      params: {
        testId: '1',
      },
    })
[/code]

复制代码

### router.back()

返回上一页面

#### 示例：
[code] 
    // A页面，open page by name
    router.push({
      uri: 'B',
    })
    // B页面，open page by name
    router.push({
      uri: 'C',
    })
    // C页面，open page by name
    router.push({
      uri: 'D',
    })
    // D页面，open page by name
    router.push({
      uri: 'E',
    })
    // E页面返回至D页面
    router.back()
    // D页面返回至C页面
    router.back()
[/code]

复制代码

### router.clear()

清空所有历史页面记录，仅保留当前页面（即保留栈顶页面）

#### 参数：

无

#### 示例：
[code] 
    router.clear()
[/code]

复制代码

### router.getState()

获取当前页面状态

#### 返回参数：

参数名 | 类型 | 说明  
---|---|---  
index | Number | 当前页面在页面栈中的位置  
name | String | 当前页面的名称  
path | String | 当前页面的路径  
  
#### 示例：
[code] 
    const page = router.getState()
    console.log(`page index = ${page.index}`)
    console.log(`page name = ${page.name}`)
    console.log(`page path = ${page.path}`)
[/code]

复制代码

### router.setTransition(OBJECT)

设置应用默认转场动画

#### 参数：

属性 | 类型 | 必填 | 说明  
---|---|---|---  
forward | Object | 否 | 路由进入页面时的动效  
back | Object | 否 | 路由返回页面时的动效  
  
#### forward、back 参数说明：

属性 | 类型 | 必填 | 说明  
---|---|---|---  
exit | TransitionAnimation | 否 | 即将退出的页面动画  
enter | TransitionAnimation | 否 | 即将出现的页面动画  
  
#### 示例：
[code] 
    router.setTransition({
      forward: {
        enter: 'fadeIn',
        exit: 'fadeOut',
      },
      back: {
        enter: 'fadeIn',
        exit: 'fadeOut',
      },
    })
[/code]

复制代码

### TransitionAnimation

支持别名内置动画

#### 动效别名表

系统提供内置动画，类型为 String。

别名 | 适用情况 | 描述  
---|---|---  
slideInLeft | 打开页面 | 左侧滑入  
slideOutRight | 关闭页面 | 右侧滑出  
fadeIn | 打开页面 | 淡入  
fadeOut | 关闭页面 | 淡出  
none | 打开/关闭页面 | 无动效，瞬间显示/瞬间隐藏  
zoomIn | 打开/关闭页面 | 放大  
zoomOut | 打开/关闭页面 | 缩小  
  
上一篇

[应用上下文](</api/system/systemapp/>)

下一篇

[应用管理](</api/system/am/>)