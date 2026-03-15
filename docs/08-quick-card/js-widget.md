# 标准卡开发

# 标准卡开发

更新时间：2025/10/09 11:25:10

标准卡和普通蓝河页面开发范式相同，包含下列常见能力：

  * 生命周期
  * 页面样式与布局
  * 列表渲染
  * 条件指令
  * 应用跳转及参数传递
  * 事件绑定
  * 自定义组件
  * 国际化多语言

**示例：**
[code] 
    <script>
    export default {
      data: {
        showSunny: false,
      },
      onInit() {
        // 这里可以添加初始化逻辑
      },
      onShow() {},
    }
    </script>
    
    <template>
      <div class="weather-container">
        <text class="text-red-500 text-2xl">天气卡片</text>
        <text class="weather" if="{{ showSunny }}">晴</text>
        <text class="weather" else>雨</text>
      </div>
    </template>
    
    <style>
    @tailwind utilities;
    </style>
[/code]

复制代码