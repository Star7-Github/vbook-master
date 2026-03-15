# 应用管理

# 应用管理

更新时间：2024/03/14 09:45:42

## 接口声明

### JS 接口声明
[code] 
    { "name": "blueos.app.appmanager.appState" }
[/code]

复制代码

### 导入模块
[code] 
    import am from '@blueos.app.appmanager.appState'
[/code]

复制代码

## 在工程里面的 manifest 文件中配置如下内容

### 申请权限
[code] 
    {
      "permissions": [{ "name": "watch.permission.AM" }]
    }
[/code]

复制代码

### 应用状态

蓝河应用的状态有三种，应用处于前台，后台以及应用未运行。对应的三种状态值枚举如下：

状态值 | 说明  
---|---  
foreground | 应用处于前台  
background | 应用处于后台  
noRunning | 应用未运行  
  
## JS 接口定义

### am.moveTaskToBack()

将当前栈顶应用移动到后台

#### 参数

无

#### 返回值

如果当前任务成功移动到后台，则返回值为 `true`，否则返回值为 `false`。

示例
[code] 
    am.moveTaskToBack()
[/code]

复制代码

上一篇

[页面路由](</api/system/router/>)

下一篇

[生命周期](</api/extend/lifecycle/>)