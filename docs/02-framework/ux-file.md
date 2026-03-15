# ux文件

# UX 文件

更新时间：2025/10/09 11:25:10

APP、页面和自定义组件均通过 ux 后缀文件编写，ux 后缀文件由 [javascript 代码](</reference/configuration/script>)、template 模板和[style 样式](</reference/configuration/style-sheet>) 3 个部分组成，一个典型的页面 ux 后缀文件示例如下：
[code] 
    <script>
      import router from '@blueos.app.router'
    
      export default {
        // 页面级组件的数据模型
        data: {
          title: '示例页面',
        },
        routeDetail() {
          // 跳转到应用内的某个页面，router用法详见：文档->接口->页面路由
          router.push({
            uri: '/DemoDetail',
          })
        },
      }
    </script>
    
    <template>
      <!-- template里只能有一个根节点 -->
      <div class="flex flex-col justify-center items-center">
        <text class="text-4xl text-center">欢迎打开{{title}}</text>
        <!-- 点击跳转详情页 -->
        <input class="w-[550px] h-[86px] mt-[75px] rounded-[43px] bg-[#09ba07] text-3xl text-white" type="button" value="跳转到详情页" onclick="routeDetail" />
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码

## app.ux

当前`app.ux`编译后会包含`manifest配置信息`，所以请不要删除`/**manifest**/`的注释内容标识。

您可以在`<script>`中引入一些公共的脚本，并暴露在当前 app 的对象上，如下所示，然后就可以在页面 ux 文件的 ViewModel 中，通过`this.$app.$def.util`访问。
[code] 
    <script>
      /**
       * 应用级别的配置，供所有页面公用
       */
      import util from './util'
    
      export default {
        showMenu: util.showMenu,
        createShortcut: util.createShortcut,
        util,
      }
    </script>
[/code]

复制代码

上一篇

[manifest文件](</reference/configuration/manifest/>)

下一篇

[style样式](</reference/configuration/style-sheet/>)