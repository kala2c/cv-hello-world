

### Webpack搭建 Vue3 项目

主要集成技术：

webpack5+vue3.5+vue-router+less

- 未添加低版本浏览器兼容，如需兼容选择Vue2更好

- @vue/runtime-dom包为选装，yarn不需要安装，pnpm需要单独安装

  - 两个工具的工作原理不同，yarn是把所有包都安装到node_modules中，pnpm是把所有包都安装到全局，然后在项目中创建一个软链接，软链接在构建时会出错
