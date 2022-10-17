# 介绍

模板提供了基础功函数方法，你可以根据自己情况新增方法。

#### 全局注入

查看`src/global`了解全局注入，本模板全局挂载在`vue`和`window`上，这里使用的`$mk`。这里`$mk`已经本占用了，如果`$mk`与你项目有冲突你可以修改此变量名。

#### 使用

```tsx title="@/src/pages/home/index.tsx"
useEffect(() => {
    window.$mk.http.get('/api/get').then((data) => {
        console.log('mock模拟数据')
        console.log(data)
        console.log('mock模拟数据')
    })
}, [])
```

#### 查看版本

```ts
console.log(window.$mk.version)
```

#### 提示

模板默认`window`全局挂载，你可以更具自己实际情况选择挂载方式。
