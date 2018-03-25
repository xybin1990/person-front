/**
 * Created by xieyuanbin on 2017/8/17.
 * Email:yuanbin.xie@tempus.cn
 */

const Merge = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let BUILD_PATH = path.join(__dirname, "../dist"); //输出目录
let webpack = require('webpack');
// let WebpackDevServer = require('webpack-dev-server');

let config = require('./config.json');

let routesArr = require('./util/routesArr') //导入路由分析脚本

module.exports = Merge(BaseConfig, {
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: "js/[name].min.js"
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: path.join(BUILD_PATH, "index.html"),
            template: './src/index.html',
            chunks: ["vendor", "index"],
            inject: true,
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'pages': JSON.stringify(routesArr.pagesArr),
            'blocks': JSON.stringify(routesArr.blocksArr),
            'config': JSON.stringify(config)
        })
    ],
    devServer: {
        contentBase: BUILD_PATH,
        // quiet: true,
        // open: true,
        port: '1990',
        stats: "errors-only", //只显示错误统计信息 其他参数["minimal"，"normal"，"verbose"]
            //host: '172.16.111.91',
        proxy: {
            '*': {
                target: config.proxy_target,
                secure: false
            }
        }
    }


});