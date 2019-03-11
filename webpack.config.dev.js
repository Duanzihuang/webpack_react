const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development", //开发环境，打包出来的代码是不会压缩的
  entry: "./src/index.js",
  //output 开发阶段暂时不用配置
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
          //   options: {
          //     presets: ["@babel/preset-react"]
          //   }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      // 以 public/index.html为模版生成一个html文件去运行我们的打包好的js
      template:'./public/index.html'
    })
  ]
};
