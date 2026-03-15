# 电话

# 电话

更新时间：2025/02/17 09:59:02

在蓝河系统中，您可以通过 Deeplink 链接来打开电话服务相应页面。

我们为电话服务提供了 Deeplink 链接，具体链接为 `hap://app/com.vivo.call/pages/callMenu`。

并且 Deeplink 的页面拉取是通过 Router 调用来实现的，方便您快速地进行操作。

## 示例

以下是一个示例，展示了如何使用 Deeplink 链接调用电话功能，简单易懂、易于操作：
[code] 
    <template>
      <text @click="call">打电话</text>
    </template>
    <script>
      import router from '@blueos.app.appmanager.router'
      export default {
        call () {
          router.push({
            uri: `hap://app/com.vivo.call/pages/callMenu`,
          })
        }
      }
    </script>
[/code]

复制代码

上一篇

[短信](</api/system/short-message-service/>)

下一篇

[sim卡管理](</api/system/simManager/>)