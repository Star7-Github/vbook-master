# 弹窗

# 弹窗

更新时间：2023/10/30 10:12:45

## 接口声明
[code] 
    { "name": "blueos.window.prompt" }
[/code]

复制代码

## 导入模块
[code] 
    import prompt from '@blueos.window.prompt' 或 const prompt = require('@blueos.window.prompt')
[/code]

复制代码

## 接口定义

### prompt.showToast(OBJECT)

显示 Toast

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
message | String | 是 | 要显示的文本  
duration | Number | 否 | 0 为短时，1 为长时，默认 0  
  
#### 示例：
[code] 
    prompt.showToast({
      message: 'message',
    })
[/code]

复制代码