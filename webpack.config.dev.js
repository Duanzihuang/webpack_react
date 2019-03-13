const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  mode: "development", //开发环境，打包出来的代码是不会压缩的
  entry: "./src/index.js",
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname,"src/components")
    },
    // 拓展名
    extensions: [".jsx", ".js", ".json"]
  },
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)$/i,
        use: [
          {
            loader: "url-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以 public/index.html为模版生成一个html文件去运行我们的打包好的js
      template: "./public/index.html"
    })
  ]
};
