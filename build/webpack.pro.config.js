/**
 * Created by xieyuanbin on 2017/8/17.
 * Email:yuanbin.xie@tempus.cn
 */

const Merge = require("webpack-merge");
const BaseConfig = require("./webpack.base.config");

let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let BUILD_PATH = path.join(__dirname, "../dist"); //输出目录
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');

let url = require('./util/url'); //静态服务器地址

let routesArr = require('./util/routesArr') //导入路由分析脚本

//获取执行的npm命令
var npmScripts = process.env.npm_lifecycle_event;
var definePlugin = null;
//根据不同的命令判断配置全局环境变量DefinePlugin
if (npmScripts === "test") {
    //测试服务器
    definePlugin = new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"dev"',
        'pages': JSON.stringify(routesArr.pagesArr),
        'blocks': JSON.stringify(routesArr.blocksArr)
    })

} else if (npmScripts === "build") {
    //生产服务器
    definePlugin = new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        'pages': JSON.stringify(routesArr.pagesArr),
        'blocks': JSON.stringify(routesArr.blocksArr)
    })

}

//打印stats
var stats = require('./util/stats');
console.log(stats.stats);


module.exports = Merge(BaseConfig, {
    output: {
        path: BUILD_PATH,
        filename: "js/[name].[chunkhash:8].min.js"
    },
    plugins: [
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: path.join(BUILD_PATH, "index.html"),
            template: './src/index.html',
            chunks: ["manifest", "vendor", "index"],
            inject: true,
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['manifest', 'vendor'],
            filename: 'js/[name].[chunkhash:8].min.js'
        }),

        new webpack.optimize.UglifyJsPlugin({
            // 最紧凑的输出
            beautify: false,
            // 删除所有的注释
            comments: false,
            compress: {
                warnings: false,
                // drop_console: true, //no console删除页面中的console.log
            }
        }),
        definePlugin,
        new CopyWebpackPlugin([{
                context: path.join(__dirname, "../src/static"),
                from: "*.html",
                to: path.join(BUILD_PATH, "./static"),
                toType: 'dir'
            },
            {
                context: path.join(__dirname, "../src/static/assets"),
                from: {
                    glob: '**/*',
                    dot: true
                },
                to: path.join(BUILD_PATH, "./static/assets"),
                toType: 'dir'
            }
        ])

    ]
});