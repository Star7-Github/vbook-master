# 日志打印

# 日志打印

更新时间：2024/06/28 10:21:20

## 概述

日志打印模块用于帮助开发者在应用开发和调试过程中记录和分析信息，有利于错误排查和性能优化。

## 接口声明

无需声明

## 导入模块

无需导入

## 接口定义

### console.debug/log/info/warn/error(message)

打印一段文本。

#### 参数：

参数 | 类型 | 必填 | 说明  
---|---|---|---  
message | String | 是 | 要打印的文本，也可以是格式化文本，规则与浏览器的 console 相同  
  
备注：本接口只支持普通打印，不支持内容样式定义等其他操作。

#### 示例：
[code] 
    console.log('log:我是log')
    console.debug('debug:我是debug')
    console.info('info:我是info')
    console.warn('warn:我是warn')
    console.error('error:我是error')
[/code]

复制代码

上一篇

[密码算法](</api/system/cipher/>)

下一篇

[通用](</api/common/overview/>)