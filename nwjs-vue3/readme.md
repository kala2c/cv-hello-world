
## nwjs 快速开发模板

### 项目介绍

核心技术
- vue-cli (webpack构建)
- vue3
- pinia
- vue-router
- element-ui
- less
- axios

此版本适用于nwjs最新代码，仅支持win10/11

### 启动项目

#### 目录介绍

vue部分略

node - nodejs代码

虽然nw.js将node运行时加入到了浏览器中，但是webpack在工作时无法很好的将node和浏览器代码一同打包，一些三方库会报错无法打包，因此nodejs代码逻辑写在node目录中，前端代码写在vue部分中，将node和浏览器分开打包，node部分暴露对象nodeObj，挂载到window对象上，供前端调用

#### 安装依赖

项目根目录运行 ``pnpm install``

node目录下运行 ``pnpm install``

#### 启动

1. node目录下：``pnpm run dev``

    node代码会实时构建到 public/node/bundle.js中，在public/index.html中被引入

2. 项目根目录下

    1. 复制.env为.env.local，在.env.local中填写本地配置，特别是构建目录

    2. 运行``pnpm run dev``，代码将实时构建，打开nwjs查看

    3. 注：没有使用dev-server，代码是实时构建