//引入模块
const path = require("path");
const lhtml = require("html-webpack-plugin");
module.exports = {
    //打包入口文件
    entry: "./src/min.js",
    //输出的路径
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bliud.js"
    },
    //配置webpack打包文件 loder
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader" //webpack底层调用这些包的顺序是从右到左
        }, {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.(png|jpg|git|woff|ttf)$/,
            loader: "url-loader?limit=10240"
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.js$/,
            loader: "babel-loader",
            //排除node_modules 中的js文件
            exclude: /node_modules/
        }]
    },
    // webpack需要使用的插件配置在这里
    plugins: [
        new lhtml({
            filename: "index.html",
            template: "index.html"
        })
    ]
};