# 密码算法

# 密码算法

更新时间：2023/11/07 10:55:31

头文件<security/cipher.h>

## 接口定义

### RSA 加密
[code] 
    int BCipher_rsaEncrypt(const char* plain_text, size_t plain_len, char* key, BCipher_Padding transformation, char** cipher_text, size_t* cipher_len);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
plain_text | const char* | 待加密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）  
plain_len | size_t | 待加密文本长度  
key | char* | 加密使用到的 RSA 公钥（仅支持 PKCS#8），经过 base64 编码后生成的字符串。  
transformation | BCipher_Padding | RSA 算法的填充项（详见《枚举 RSA 算法填充项》）  
cipher_text（输出） | char** | 加密后的文本内容  
cipher_len（输出） | size_t* | 加密后的文本长度  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》）  
  
#### 备注

加密的文本使用结束后，需调用《密钥资源释放》接口进行释放。

### RSA 解密
[code] 
    int BCipher_rsaDecrypt(const char* cipher_text, size_t cipher_len, char* key, BCipher_Padding transformation, char** plain_text, size_t* plain_len);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
cipher_text | const char* | 待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）  
cipher_len | size_t | 待解密文本长度  
key | char* | 解密使用到的 RSA 私钥（仅支持 PKCS#8），经过 base64 编码后生成的字符串。  
transformation | BCipher_Padding | RSA 算法的填充项（详见《枚举 RSA 算法填充项》）  
plain_text（输出） | char** | 解密后的文本内容  
plain_len（输出） | size_t* | 解密后的文本长度  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》）  
  
#### 备注

解密的文本使用结束后，需调用《密钥资源释放》接口进行释放。

### base64 加密
[code] 
    int BCipher_base64Encode(const char* text, size_t text_len, char** digest, size_t* disgest_len);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
text | const char* | 待加密的文本内容（普通文本）  
text_len | size_t | 待加密的文本长度  
digest（输出） | char** | 经过 base64 加密的文本内容  
digest_len（输出） | size_t | 经过 base64 加密的文本长度  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》）  
  
#### 备注

加密的文本使用结束后，需调用《密钥资源释放》接口进行释放。

### base64 解密
[code] 
    int BCipher_base64Decode(const char* digest, size_t digest_len, char** text, size_t* text_len);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
digest | const char* | 待解密的文本内容  
digest_len | size_t | 待解密的文本长度  
text（输出） | char** | 经过 base64 解密的文本内容  
text_len（输出） | size_t | 经过 base64 解密的文本长度  
  
#### 返回值

返回值 | 类型 | 说明  
---|---|---  
result | int | 密钥算法相关操作结果代码（详见 《枚举 密钥算法操作结果代码》）  
  
#### 备注

解密的文本使用结束后，需调用《密钥资源释放》接口进行释放。

### 密钥资源释放
[code] 
    void BChiper_free(void **value);
[/code]

复制代码

#### 参数

参数 | 类型 | 说明  
---|---|---  
value | void** | 待释放资源地址  
  
#### 返回值

无

## 枚举

### 密钥算法操作结果代码

枚举 | 值 | 说明  
---|---|---  
BCIPHER_OK | 0 | 密钥算法相关操作成功  
BCIPHER_ERROR | -1 | 密钥算法相关操作失败  
  
### RSA 算法填充项 BCipher_Padding

枚举 | 值 | 说明  
---|---|---  
BCIPHER_PADDING_DEFAULT | 0 | 默认填充模式"RSA/None/OAEPwithSHA-256andMGF1Padding"，目前只支持这种模式  
  
上一篇

[设备信息](</native/device/device/>)

下一篇

[标准库支持](</native/stdlibsupport/stdlibsupport/>)