# 编译环境变量

# 编译环境变量

更新时间：2024/03/13 09:57:59

编译环境变量 `process.env.NODE_ENV` 用于在构建时判断生产环境或开发环境。它可以帮助在编译时去掉不必要构建的代码块。环境变量的一种使用场景是用于模拟器无法覆盖的能力，可以使用 JavaScript 来模拟这些情况。

## 编译环境变量取值

环境 | 取值  
---|---  
开发环境 | development  
正式环境 | production  
  
## 使用示例
[code] 
    let musicList = []
    
    if (process.env.NODE_ENV == 'development') {
      // 开发环境假数据模拟
      musicList = require('./musicList.js')
    } else if (process.env.NODE_ENV == 'production') {
      // 正式环境获取真实数据
      musicList = getMuisc()
    }
    
    export default {
      onInit() {
        console.log(musicList)
      },
    }
[/code]

复制代码

上一篇

[js 内存泄漏排查](</reference/perf-guide/perf-memory-leak/>)

下一篇

[国际化](</reference/question-answer/i18n/>)