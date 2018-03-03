// const Path = require('path');//路径
// const HtmlWebpackPlugin = require('html-webpack-plugin');//提取html插件
// const CleanWebpackPlugin = require('clean-webpack-plugin');//清除重复文件插件
// const Webpack = require('webpack');//访问内置的插件
// const ExtractTextPlugin = require('extract-text-webpack-plugin');//社区插件，提取css

// /************************************多入口一输出(只能输出到一个文件夹下)***************************************** */
// const config02={
//     devtool: 'eval-source-map',//生成source-map，仅限开发环境
//     output:{
//         filename:'assets/js/[name].[hash:7].js',//输出文件名
//         path:Path.resolve(__dirname,'dist') //输出路径
//         },
//     entry:{
//        main:resolve('./src/main.js')//输入文件
//     },
//     module:{
//         rules: [
//             { test:/\.(scss|css)$/,use:ExtractTextPlugin.extract({fallback:"style-loader",use:["css-loader","sass-loader","postcss-loader"]})},//把样式提取出来=>style.css
//             //加载图片
//             { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, 
//                 loader: 'url-loader',
//                 options: {
//                     limit: 10000,
//                     name: path.posix.join('assets', 'img/[name].[hash:7].[ext]')
//                 }
//             },
//             //加载字体
//             {  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//                 loader: 'url-loader',
//                 options: {
//                     limit: 10000,
//                     name: path.posix.join('assets', 'fonts/[name].[hash:7].[ext]')
//                 }
//             },
//             { test:/\.(csv|tsv)$/,use:['csv-loader']},//加载数据
//             { test:/\.xml$/,use:['xml-loader']},//加载数据
//             { test:/\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },//babel编译
//         ]
//     },
//     //开启服务，实时重新加载
//     // devServer:{
//     //     contentBase:'./dist'//被实时重新加载文件夹名，要与输出文件夹名一样
//     // },
//     devServer: {
//         contentBase: "./", //本地服务器所加载的页面所在的目录
//         historyApiFallback: true, //不跳转
//         inline: true, //实时刷新
//         hot: true // 开启热重载
//     },
//     plugins:[
//         new Webpack.optimize.UglifyJsPlugin(),//文件压缩
//         // new HtmlWebpackPlugin({template:'./src/index.html'}),//html打包，参数：模板：‘html地址’
//         new CleanWebpackPlugin(['dist']),//清除打包后重复的文件
//         // new ExtractTextPlugin('style.css'),//提取样式
//         new ExtractTextPlugin({
//             filename: path.posix.join('assets', 'css/[name].[contenthash].css')
//         }),
//         // new HtmlWebpackPlugin({
//         //     filename: './src/index.html', //new 目标编译出的文件的文件名
//         //     template: 'index.html', //new 编译后的html的路径，相对目录是dist文件夹
//         //     inject: true // 是否把js文件插入到body的最后
//         // }),
//         new webpack.HotModuleReplacementPlugin(),//热加载插件

//         // 定义全局变量
//         new webpack.ProvidePlugin({
//             $: 'jquery',
//             jQuery: 'jquery',
//             _: 'lodash'
//         }),
//     ],  
// }
// module.exports = config02;

// /***********************************多套输入输出配置*************************************/
// const config01=[
//     {
//         output:{
//             filename:'[name].js',
//             path:Path.resolve(__dirname,'dist')//生成在dist文件加下
//          },
//         entry:'./src/main.js',
      
//     },
//     {
//         output:{
//             filename:'[name].js',
//             path:Path.resolve(__dirname,'lib')//生成在lib文件下
//          },
//         entry:'./src/main.js',
       
//     }
// ]




// 获取环境命令，并去除首尾空格
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
// 根据环境变量引用相关的配置文件
module.exports = require(`./config/webpack.config.${env}.js`);
