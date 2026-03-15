# 消息通知

# 消息通知  
  
更新时间：2024/09/02 20:54:40

## 接口声明
[code] 
    { "name": "blueos.app.notification.notificationManager" }
[/code]

复制代码

## 导入模块
[code] 
    import notification from '@blueos.app.notification.notificationManager' 或 const notification = require('@blueos.app.notification.notificationManager')
[/code]

复制代码

## 接口定义

### notification.publish(OBJECT)

发布通知

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
request | Notification | 是 | 消息通知对象  
success | Function | 是 | 成功的回调  
fail | Function | 是 | 失败的回调  
complete | Function | 是 | 执行结束后的回调  
  
##### Notification

说明如下：

参数名 | 类型 | 必填 | 默认 | 说明  
---|---|---|---|---  
icon | string | 是 | - | 通知小图标，应用下以 src 为根目录的图片的绝对路径  
id | number | 否 | - | 应用通知的唯一 id  
appName | string | 否 | - | 应用名称  
contentType | number | 是 | - | 正文类型。 1：普通文本通知类型。 2：图片通知类型  
content | Content | 是 | - | 通知内容 与 contentType 对应  
channel | number | 是 | - | 通知来源 , 1：PHONE；2：WATCH_APP  
platform | string | 否 | - | 消息渠道来源 (PHONE 时) iOS | Andriod  
deliveryTime | number | 是 | - | 通知发送时间，格式为毫秒时间戳  
actionButtons | Array<ActionButton> | 否 | - | 通知按钮，最多两个按钮  
largeIcon | string | 否 | - | 通知大图标，应用下以 src 为根目录的图片的绝对路径  
isUnremovable | boolean | 否 | false | 是否不可清除  
badge | number | 否 | - | 数字角标(消息合并情况下)  
appBundleName | string | 否 | - | 应用包名 ，格式 com.xxx.xxx，该字段的值应由 native 填充  
group | string | 否 | - | 消息分组  
extraInfo | {[key: string]: any} | 否 | - | 扩展参数  
  
##### Content

普通文本通知类型

名称 | 类型 | 必填 | 说明  
---|---|---|---  
title | string | 是 | 普通文本通知标题  
text | string | 是 | 普通文本通知内容  
additionalText | string | 否 | 可选参数，普通文本通知附加信息  
  
图片通知类型

名称 | 类型 | 必填 | 说明  
---|---|---|---  
title | string | 是 | 通知标题  
text | string | 是 | 通知内容  
additionalText | string | 否 | 可选参数，通知附加信息  
briefText | string | 是 | 图片文本通知简略内容  
expandedTitle | string | 是 | 图片通知扩展标题  
picture | string | 是 | 图片通知的图片，应用下以 src 为根目录的图片的绝对路径  
  
##### ActionButton

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
label | string | 是 | 按钮标题  
action | Action | 是 | 点击按钮时触发的动作  
extras | {[key: string]: any} | 否 | 扩展参数  
  
##### Action

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
triggerMethod | string | 否 | 定义按钮点击触发的回调函数, 需要在 app.ux 中定义  
prameters | {[key: string]: any} | 否 | 自定义参数，供回调函数使用  
  
#### 示例：
[code] 
    notification.publish({
      request: {
        icon: '/assets/images/icon.png',
        contentType: 1,
        content: {
          title: '收件通知',
          text: '门口xx收件，收件码：XXX',
        },
        channel: 1,
        deliveryTime: Date.now(),
      },
      success: function () {},
      fail: function () {},
      complete: function () {},
    })
[/code]

复制代码

### notification.remove(OBJECT)

清除消息通知

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
query | Query | 是 | 清除的查询条件，如果条件为空则全部清除  
success | Function | 是 | 成功的回调  
fail | Function | 是 | 失败的回调  
complete | Function | 是 | 执行结束后的回调  
  
##### Query 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
id | number | 否 | 应用通知的唯一 id  
group | string | 否 | 通知的分组  
  
#### 示例：
[code] 
    notification.remove({
      query: {
        group: 'group1',
      },
      success: function () {},
      fail: function () {},
      complete: function () {},
    })
[/code]

复制代码