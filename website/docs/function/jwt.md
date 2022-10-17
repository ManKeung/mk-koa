# token

本模板使用`jsonwebtoken`实现token

## 生成`token`信息

`post`方式，调用接口`http://127.0.0.1:9999/v1/api/common/user`，传参`username`: mankeung，`age`: 18。

![图片](/function/token_01.png)

## 解密`token`信息

`get`方式，调用接口`http://127.0.0.1:9999/v1/api/common/user`，`header`头传`Authorization`: `token`信息。

![图片](/function/token_02.png)
