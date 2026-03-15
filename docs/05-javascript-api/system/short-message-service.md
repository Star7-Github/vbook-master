# 短信

# 短信

更新时间：2025/02/17 09:59:02

在蓝河系统中，我们提供了 Deeplink 链接来使您可以快速打开短信服务所对应的页面。

我们已经为短信服务功能提供了 Deeplink 链接，具体链接为 `hap://app/com.vivo.mms/pages/entry`。

该 Deeplink 链接的页面拉取是通过 Router 调用来实现的，您可以方便地打开短信服务页面并进行相关操作。

## 示例

以下是一个演示示例，为您展示如何通过调用 Deeplink 链接来实现轻松发送短信的操作过程：
[code] 
    <template>
      <text @click="sendMessage">发短信</text>
    </template>
    <script>
      import router from '@blueos.app.appmanager.router'
      export default {
        sendMessage () {
          router.push({
            uri: `hap://app/com.vivo.mms/pages/entry`,
          })
        }
      }
    </script>
[/code]

复制代码

上一篇

[概述](</api/system/phoneOverview/>)

下一篇

[电话](</api/system/telephony-service/>)