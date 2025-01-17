const path = require('node:path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'node-webkit',
    mode: 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        // 构建到当前目录的 dist 目录
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            // ↓↓↓ 将ES6语法转成ES5
                            "@babel/preset-env",
                            {
                                useBuiltIns: "entry",
                                corejs: "2",
                            }
                            // ↑↑↑ 将ES6语法转成ES5
                        ]
                    ],
                    plugins: [
                        // ↓↓↓ 向低版本浏览器提供async/await支持
                        "@babel/plugin-transform-async-to-generator",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
        ]
    },
    resolve: {
        alias: {
            // 设置src目录别名为@
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 直接copy文件到目录，类似vue项目的public目录
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    to: './',
                    toType: 'dir',
                },
            ]
        }),
    ]
};
