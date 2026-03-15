# 屏幕管理

# 屏幕管理

更新时间：2023/12/25 11:01:05

## 接口声明
[code] 
    { "name": "blueos.hardware.display.screen" }
[/code]

复制代码

## 导入模块
[code] 
    import screen from '@blueos.hardware.display.screen' 或 const screen = require('@blueos.hardware.display.screen')
[/code]

复制代码

## 接口定义

### screen.getScreenOffTime()

获取熄屏时间

##### 参数：

无

#### 返回值：

类型 | 说明  
---|---  
Number | 1-999 秒  
  
#### 示例：
[code] 
    screen.getScreenOffTime()
[/code]

复制代码

### screen.getAodStatus()

获取 AOD 状态

> AOD：Always on Display，即不点亮整块屏幕的情况下，控制屏幕局部亮起，将一些重要的信息一直显示在屏幕上。

#### 参数：

无

#### 返回值：

类型 | 说明  
---|---  
Number | 0: AOD 关闭; 1: AOD 打开  
  
#### 示例：
[code] 
    screen.getAodStatus()
[/code]

复制代码

上一篇

[振动](</api/system/vibrator/>)

下一篇

[传感器](</api/system/sensor/>)