const path = require('node:path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } =require('vue-loader');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, 'src', 'index.js'),
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
            // webpack的loader调用顺序是从右到左
            {
                test: /\.less$/,
                use: [
                    'style-loader', // 将 CSS 注入到 DOM 中
                    'css-loader',   // 处理 CSS 文件中的 @import 和 url()
                    'less-loader'   // 将 LESS 编译为 CSS
                ]
            },
        ]
    },
    resolve: {
        alias: {
            // vue3配置  使用pnpm安装时需单独安装@vue/runtime-dom，yarn不需要
            'vue': '@vue/runtime-dom',
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
