const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: "development",
    entry: {
        "/app": "./src/index.js"
    },
    output: {
        publicPath: '/assets/js/',
        path: path.resolve(__dirname, 'public/assets/js/'),
        filename: "[name].js",
    },
    stats: {
        errorDetails: true,
        chunks: false,
        assets: false,
        modules: false
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src/'),
        },
        extensions: ['.js', '.vue', '.json']
    },
    devtool: 'eval',
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: false,
            __VUE_PROD_DEVTOOLS__: false
        }),
    ]
}