const path = require('node:path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } =require('vue-loader');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, 'src', 'main.js'),
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // sourceMapFilename: 'sourcemap/bundle.js.map',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // 开启需要安装less less-loader
            // {
            //     test: /\.less$/,
            //     use: [
            //         'style-loader', // 将 CSS 注入到 DOM 中
            //         'css-loader',   // 处理 CSS 文件中的 @import 和 url()
            //         'less-loader'   // 将 LESS 编译为 CSS
            //     ]
            // },
            // webpack的loader调用顺序是从右到左
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'less-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
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
