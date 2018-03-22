<!-- Created by xieyuanbin on 2017/8/30. -->
<!-- Email:yuanbin.xie@tempus.cn -->
<!-- Email:xybin1990@163.com -->

# 备注

根据需要构建的CLI

> 开发服务器用的是webpack自带的dev-server

> 区分开开发环境和生产构建环境

> 依赖控制采用yarn

> 引入less支持(添加lang属性和type属性设置,webstrom编辑器里面会通过type识别语言)

```html
<style lang="less" type="text/less" scoped>
    .main {
        font-size: 24px;
    }
</style>

```

> devServer配置代理

```
"proxy": {
    '*': {
        target: 'https://***',
        secure: false
    }
}
```

## 静态资源目录

```text
src/static/
```

配置这个目录中的资源复制迁移--适合独立页面

## util/url.js
设置导出通用url地址配置