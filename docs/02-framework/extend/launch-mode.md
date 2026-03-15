# 页面启动模式

# 页面启动模式

更新时间：2023/10/21 10:15:58

用于定义页面的启动行为

## 静态声明

在 manifest 文件中页面路由信息 router.page 可增加启动模式字段 launchMode，用于声明该页面的启动模式

### 页面启动模式参数：

属性 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
launchMode | String | standard | 否 | 声明页面的启动模式，支持"singleTask"，"standard"两种页面启动模式。  
标识为"singleTask"模式时每次打开目标页面都会打开已有的目标页面并回调 onRefresh 生命周期函数，清除该页面上打开的其他页面，没有打开过此页面时会创建新的目标页面实例。  
标识为"standard"模式时会每次打开新的目标页面（多次打开目标页面地址时会存在多个相同页面）  
  
### 示例：
[code] 
    {
      "router": {
        "entry": "PageA",
        "pages": {
          "PageA": {
            "launchMode": "singleTask",
            "component": "index"
          },
          "PageB": {
            "launchMode": "standard",
            "component": "index"
          },
          "PageC": {
            "launchMode": "singleTask",
            "component": "index"
          }
        }
      }
    }
[/code]

复制代码

打开页面的行为逻辑：

若按顺序启动 PageA -> PageB -> PageC -> PageB -> PageC -> PageA

  * 打开 PageA，首次打开时页面栈为空 `页面栈为PageA`
  * 打开 PageB，PageB 的启动模式为 standard，即在 PageA 之上新建 PageB 的页面实例并显示 `页面栈为PageA,PageB`
  * 打开 PageC，首次打开 PageC，即在 PageB 之上新建 PageC 的页面实例并显示 `页面栈为PageA,PageB,PageC`
  * 打开 PageB，PageB 的启动模式为 standard，即在 PageC 之上新建 PageB 的页面实例并显示 `页面栈为PageA,PageB,PageC,PageB`
  * 打开 PageC，PageC 页面实例已存在，即销毁 PageC 之上的页面实例 PageB，回到之前打开的 PageC 的页面实例并回调此页面生命周期的 onRefresh 函数 `页面栈为PageA,PageB,PageC`
  * 打开 PageA，PageA 页面实例已存在，即销毁 PageA 之上的页面实例 PageB 和 PageC，回到之前打开的 PageA 的页面实例并回调此页面生命周期的 onRefresh 函数 `页面栈为PageA`

上一篇

[后台运行](</reference/extend/resident/>)

下一篇

[屏幕适配](</reference/extend/mulit/>)