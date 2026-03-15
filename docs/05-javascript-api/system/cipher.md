# 密码算法

# 密码算法

更新时间：2025/04/27 20:44:09

## 接口声明
[code] 
    { "name": "blueos.security.cipher" }
[/code]

复制代码

## 导入模块
[code] 
    import cipher from '@blueos.security.cipher' 或 const cipher = require('@blueos.security.cipher')
[/code]

复制代码

## 接口定义

### cipher.rsa(OBJECT)

RSA 加解密。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt： 解密  
text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同  
key | String | 是 | 加密或解密使用到的 RSA 密钥，经过 base64 编码后生成的字符串。加密时 key 为公钥，解密时 key 为私钥  
transformation | String | 否 | RSA 算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
text | String | 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
202 | 输入参数错误。  
  
#### 示例：
[code] 
    //加密
    cipher.rsa({
      action: 'encrypt',
      //待加密的文本内容
      text: 'hello',
      //base64编码后的加密公钥
      key:
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDc7GR2MrfAoefES+wrs1ns2afT\n' +
        'eJXSfIkEHfPXG9fVFjaws1ho4KcZfsxlA0+SXvc83f2SVGCuzULmM2lxxRCtcUN/\n' +
        'h7SoaYEeluhqFimL2AEjfSwINHCLqObJkcjCfoZpE1JCehPiDOJsyT50Auc08h/4\n' +
        'jHQfanyC1nc62LqUCQIDAQAB',
      success: function (data) {
        console.log(`handling success: ${data.text}`)
      },
      fail: function (data, code) {
        console.log(`### cipher.rsa fail ### ${code}: ${data}`)
      },
    })
    
    //解密：
    cipher.rsa({
      action: 'decrypt',
      //待解密的内容，是base64编码后的一段二进制值，解密后是文本内容“hello”
      text:
        'CUg3tTxTIdpCfreIxIBdws3uhd5qXLwcrVl3XDnQzZFVHyjVVCDHS16rjopaZ4C5xU2Tc8mSDzt7\n' +
        'gp9vBfSwi7bMtSUvXG18DlncsKJFDkJpS5t0PkpS9YrJXrY80Gpe+ME6+6dN9bjgqMljbitDdBRf\n' +
        'S/ZWNI4Q8Q0suNjNkGU=',
      //base64编码后的解密私钥
      key:
        'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANzsZHYyt8Ch58RL\n' +
        '7CuzWezZp9N4ldJ8iQQd89cb19UWNrCzWGjgpxl+zGUDT5Je9zzd/ZJUYK7NQuYz\n' +
        'aXHFEK1xQ3+HtKhpgR6W6GoWKYvYASN9LAg0cIuo5smRyMJ+hmkTUkJ6E+IM4mzJ\n' +
        'PnQC5zTyH/iMdB9qfILWdzrYupQJAgMBAAECgYEAkibhH0DWR13U0gvYJeD08Lfd\n' +
        'Sw1PMHyquEqIcho9Yv7bF3LOXjOg2EEGPx09mvuwXFgP1Kp1e67XPytr6pQQPzK7\n' +
        'XAPcLPx80R/ZjZs8vNFndDOd1HgD3vSVmYQarNzmKi72tOUWMPevsaFXPHo6Xx3X\n' +
        '8x0wYb7XuBsQguRctTECQQD7GWX3JUiyo562iVrpTDPOXsrUxmzCrgz2OZildxMd\n' +
        'Pp/PkyDrx7mEXTpk4K/XnQJ3GpJNi2iDSxDuPSAeJ/aPAkEA4Tw4+1Z43S/xH3C3\n' +
        'nfulYBNyB4si6KEUuC0krcC1pDJ21Gd12efKo5VF8SaJI1ZUQOzguV+dqNsB/JUY\n' +
        'OFfX5wJAB1dKv9r7MR3Peg6x9bggm5vx2h6i914XSuuMJupASM6X5X2rrLj+F3yS\n' +
        'RHi9K1SPyeOg+1tkBtKfABgRZFBOyQJAbuTivUSe73AqTKuHjB4ZF0ubqgEkJ9sf\n' +
        'Q2rekzm9dOFvxjZGPQo1qALX09qATMi1ZN376ukby8ZAnSafLSZ64wJBAM2V37go\n' +
        'Sj44HF76ksRow8gecuQm48NCTGAGTicXg8riKog2GC9y8pMNHAezoR9wXJF7kk+k\n' +
        'lz5cHyoMZ9mcd30=',
      success: function (data) {
        console.log(`handling success: ${data.text}`)
      },
      fail: function (data, code) {
        console.log(`### cipher.rsa fail ### ${code}: ${data}`)
      },
    })
[/code]

复制代码

### cipher.aes(OBJECT)

AES 加解密,支持分段加密

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt：解密  
text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同  
key | String | 是 | 加密或解密使用到的密钥，经过 base64 编码后生成的字符串。密钥长度可以是 128 bit，192 bit 或 256 bit。  
transformation | String | 否 | AES 算法的加密模式和填充项，默认为"AES/CBC/PKCS5Padding"  
iv | String | 否 | AES 加解密的初始向量，经过 base64 编码后的字符串，默认值为 key 值  
ivOffset | Integer | 否 | AES 加解密的初始向量偏移，默认值为 0  
ivLen | Integer | 是 | AES 加解密的初始向量字节长度，取值和 iv 长度对应，iv 长度 128 bit，192 bit 或 256 bit 分别对应取值为 16，24，32  
success | Function | 否 | 成功回调  
fail | Function | 否 | 失败回调  
complete | Function | 否 | 执行结束后的回调  
  
##### success 返回值：

参数名 | 类型 | 说明  
---|---|---  
text | String | 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错（CODE：200）  
  
##### fail 返回错误代码

错误码 | 说明  
---|---  
200 | 一般性错误，在加解密出错时会返回此错误  
202 | 参数错误  
  
#### 示例：
[code] 
    //加密
    cipher.aes({
      action: 'encrypt',
      //待加密的文本内容
      text: 'hello',
      //base64编码后的密钥
      key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
      transformation: 'AES/CBC/PKCS5Padding',
      //transformation: 'ECB', // ECB类型加密
      ivOffset: 0,
      ivLen: 32,
      success(data) {
        console.log(`handling success: ${data.text}`)
      },
      fail(data, code) {
        console.log(`code=${code},data=${data}`)
      },
    })
    
    //解密：
    cipher.aes({
      action: 'decrypt',
      //待解密的内容，是base64编码后的一段二进制值
      text: '1o0kf2HXwLxHkSh5W5NhzA==',
      //base64编码后的密钥
      key: 'NDM5Qjk2UjAzMEE0NzVCRjlFMkQwQkVGOFc1NkM1QkQ=',
      transformation: 'AES/CBC/PKCS5Padding',
      ivOffset: 0,
      ivLen: 32,
      success(data) {
        console.log(`handling success: ${data.text}`)
      },
      fail(data, code) {
        console.log(`code=${code},data=${data}`)
      },
    })
[/code]

复制代码

### cipher.base64(OBJECT)

base64 编解码。

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
action | String | 是 | 加解密类型，两个可选值：encrypt：加密，decrypt：解密  
text | String | 是 | 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本。  
  
#### 返回值：

类型 | 说明  
---|---  
String | 经过 base64 加密或解密后生成的文本内容。  
  
#### 示例：
[code] 
    //加密
    const base64text = cipher.base64({
      action: 'encrypt',
      text: 'hello',
    })
    console.log(base64text)
    
    //解密：
    const text = cipher.base64({
      action: 'decrypt',
      text: base64text,
    })
    console.log(text)
[/code]

复制代码

### cipher.crc32(OBJECT)

crc32 加密

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
content | Buffer | String | 是 | 加密内容  
  
#### 返回值：

类型 | 说明  
---|---  
Number | crc32 加密结果  
  
#### 示例：
[code] 
    const res = cipher.crc32({
      content: new Uint8Array([1, 2]),
    })
    console.log(res)
[/code]

复制代码

### cipher.hash(OBJECT)

求 hash 值

#### 参数：

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
algorithm | String | 是 | hash 算法，可选 md5,sha256。  
content | Buffer | String | 是 | 加密内容。  
  
#### 返回值：

类型 | 说明  
---|---  
String | 返回 hash 计算结果  
  
#### 示例：
[code] 
    const res = cipher.hash({
      algorithm: 'md5',
      content: 'hello',
    })
    console.log(res)
[/code]

复制代码

上一篇

[权限管理](</api/system/permission/>)

下一篇

[调试能力](</api/system/console/>)