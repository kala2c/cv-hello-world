## 

### 项目介绍

- webpack 5 初始工程模板

- 提供了babel-loader配置，向低版本浏览器中提供了es6语法和async/await的支持

- 适配nwjs 0.14.7版本，支持windows7/xp

- 未提供webpack-dev-server配置，nwjs适合实时构建查看效果

  - 如需在浏览器中查看效果，需添加webpack-dev-server，步骤：

    ```
    
    // 安装webpack-dev-server
    pnpm install webpack-dev-server --save-dev
    
    // 修改webpack.config.js 添加dev-server配置
    module.exports = {
      devServer: {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 9000,
      },
    }
    ```


