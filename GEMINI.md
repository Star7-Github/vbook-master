# BlueOS 蓝河系统 - 手表应用开发项目

## ⚠️ 重要规则

**本项目基于 vivo BlueOS（蓝河操作系统）进行手表应用开发。**  
**由于 BlueOS 是小众平台，AI 不具备充足的训练数据，因此：**

1. **严格遵循** `docs/` 目录下的官方开发文档，不允许凭记忆猜测 API 或组件用法
2. **如果文档中没有覆盖某个功能**，必须明确告知用户"文档中未找到相关说明"，而不是自行编造
3. **代码编写**必须参考 `docs/` 中的示例代码和 API 规范
4. **在回答任何开发问题之前**，先用工具搜索 `docs/` 目录中的相关文档

## 平台概述

- **操作系统**: BlueOS（蓝河操作系统）
- **目标设备**: vivo 智能手表（如 vivo Watch 3 等）
- **开发范式**: 类 Web 开发（HTML-like 模板 + CSS 样式 + JavaScript 逻辑）
- **架构模式**: MVVM（Model-View-ViewModel）
- **开发工具**: BlueOS Studio（官方 IDE）
- **打包格式**: `.rpk` 文件
- **API 类型**: JavaScript API（高效开发）和 Native API（高性能场景）
- **官方文档**: https://developers-watch.vivo.com.cn/

## 应用形态

1. **完整应用（App）** - 可后台运行的完整功能应用
2. **表盘（Watch Face）** - 支持多种显示模式和交互
3. **快捷卡片（Quick Card）** - 表盘上直接显示信息和控制功能

## 文档目录说明

```
docs/
├── 01-quick-start/              # 快速入门（2 篇）
├── 02-framework/                # 框架说明（14 篇）
│   ├── extend/                  # 扩展功能（表盘、卡片、后台等）（5 篇）
│   └── perf-guide/              # 性能优化指南（11 篇）
├── 03-components/               # UI 组件文档（55 篇）
│   ├── common/                  # 通用能力（事件、属性、样式等）（11 篇）
│   ├── basic/                   # 基础组件（text, image, canvas 等）（15 篇）
│   ├── form/                    # 表单组件（input, picker, slider 等）（7 篇）
│   ├── container/               # 容器组件（div, list, swiper 等）（7 篇）
│   ├── extend/                  # 扩展组件（drawer 等）（4 篇）
│   ├── others/                  # 其他组件（canvas）（1 篇）
│   └── vw/                      # 蓝河通用UI组件（vw-button 等）（10 篇）
├── 05-javascript-api/           # JavaScript API 参考（69 篇）
│   ├── system/                  # 系统 API（路由、通知、蓝牙等）（45 篇）
│   ├── storage/                 # 存储 API（7 篇）
│   ├── ai/                      # AI 能力 API（4 篇）
│   ├── connect/                 # 连接能力 API（7 篇）
│   ├── health/                  # 运动健康 API（1 篇）
│   ├── extend/                  # 扩展 API（生命周期等）（2 篇）
│   └── common/                  # 公共 API（3 篇）
├── 06-native-api/               # Native API（C/C++）（13 篇）
├── 08-quick-card/               # 快捷卡片开发（5 篇）
└── 10-faq/                      # 常见问题（3 篇）
```

**共计 177 篇官方文档，覆盖全部 API 和组件。**

## 编码规范

- 遵循 BlueOS 官方推荐的项目结构
- 页面文件使用 `.ux` 扩展名
- 样式支持 CSS 子集，具体支持范围参见 `docs/03-components/common/`
- JavaScript 逻辑遵循 ES6+ 标准
- API 使用前需在 `manifest.json` 中声明接口（features）
- API 导入格式：`import xxx from '@blueos.xxx.xxx'`

## 常用 API 导入参考

```javascript
// 数据请求
import fetch from '@blueos.network.fetch'

// 上传下载
import request from '@blueos.network.request'

// 页面路由
import router from '@blueos.app.appmanager.router'

// 本地存储（KV）
import storage from '@blueos.storage.storage'

// 文件操作
import file from '@blueos.storage.file'

// 弹窗
import prompt from '@blueos.window.prompt'

// 屏幕亮度
import brightness from '@blueos.hardware.display.brightness'

// 设备信息
import device from '@blueos.hardware.deviceInfo'

// 传感器
import sensor from '@blueos.hardware.sensor'
```
