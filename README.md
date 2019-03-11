# webpack_react
使用webpack手工搭建react项目

>必要步骤

```
1、新建package.json
	npm init -y
	
2、创建src目录，并且里面写好index.js【webpack打包的入口文件】 App.jsx【根组件】代码
	
3、index.js中的代码
	安装 react、react-dom(针对web平台)
	使用react-dom，渲染根组件(App.jsx)
	
4、App.jsx中的代码
	创建类(有状态)组件、写好render函数中的代码
```



> 开发阶段【webpack.config.dev.js】

```
1、mode
	development

2、entry
	src/index.js
	
3、配置loader【babel-loader】 让其支持.jsx的后缀及jsx的语法
	https://webpack.docschina.org/loaders/babel-loader/
	
	安装如下包
		yarn add @babel/core babel-loader @babel/preset-react -D
		
	配置代码见 webpack.config.dev.js
    
4、使用 webpack-dev-server 把我们打包好的main.js 放在 public/index.html中运行
	安装如下包
		yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D
	
	配置plugin【https://github.com/jantimon/html-webpack-plugin】
		配置代码见 webpack.config.dev.js

5、在package.json中配置一个scripts标签，使用webpack-dev-server打包运行我们的项目
	"start": "webpack-dev-server --config webpack.config.dev.js --progress --open"
	
6、运行
	yarn run start / npm run start
```

