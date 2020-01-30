//由于webpack是基于node构建的，所以webpack配置文件中，支持任何合法的node代码
var path=require('path');
//在内存中根据指定模板页面生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
//若要配置插件需要在导出对象中挂载一个plugins节点
var htmlWebpackPlugin=require('html-webpack-plugin');
var VueLoaderPlugin=require('vue-loader/lib/plugin');

//以命令行形式运行webpack或其dev-server时，工具会发现并没有提供要打包的文件的入口和出口文件、
//此时会检查项目根目录中配置文件并读取这个文件，拿到导出的配置对象，根据此对象进行打包构建
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [//所有webpack插件 配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'//设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module:{//配置所有第三方loader模块
        rules:[
            {test:/\.css$/, use: ['style-loader','css-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use:'url-loader?limit=10240&name=[hash:8]-[name].[ext]'},
            //处理图片路径:limit--值为图片的大小，单位是byte，当图片大等于给定值时不会
            //转为base64格式字符串，小于则会转
            {test:/\.(ttf|woff|woff2|eot|svg|)$/, use: 'url-loader'},
            //处理字体路径
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},
            //配置Babel转换高级语法
            {test:/\.vue$/, use:'vue-loader'},
            //处理vue文件
        ]
    },
    resolve: {
        alias:{//设置vue被导入时的包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}
