const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'node-webkit',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '../public', 'node'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            // 将代码编译至低版本node
            // {
            //     test: /.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader",
            //     options: {
            //         presets: [
            //             [
            //                 "@babel/preset-env",// 将ES6语法转成ES5
            //                 {
            //                     useBuiltIns: "entry",
            //                     corejs: "2",
            //                 }
            //             ]
            //         ],
            //         plugins: [
            //             // async/await处理
            //             "@babel/plugin-transform-async-to-generator",
            //             "@babel/plugin-proposal-class-properties"
            //         ]
            //     }
            // }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', 'src'),
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
};
