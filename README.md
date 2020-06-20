# fe-app
> 客户端基于 Nuxt 构建


## 安装运行
推荐使用 yarn 来进行包安装

```bash
  git clone **.git
  cd fe-app
  yarn install

  # 启动
  npm run dev    # 开发环境运行
  npm run build  # 打包
  npm start      # 生产环境运行
  npm run lint   # eslint 校验
```

## 常用规范

### 1，提交
```bash
  <type>(<scope>): <subject>
  参考：git commit -m 'fix(view): 修复模板编译错误'
```
type 类型:

* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation）
* style： 格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* chore：构建过程或辅助工具的变动

## 参考文档
* [Vue 官方文档](https://cn.vuejs.org/)

* [Nuxt 官方文档](https://www.nuxtjs.cn/guide/installation)

* [vue-class-component API](https://www.npmjs.com/package/vue-property-decorator)

* [Nuxt TypeScript](https://typescript.nuxtjs.org/guide/)

* [Git Commit 规范](https://segmentfault.com/a/1190000009048911)
