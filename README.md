# webpack_react
使用webpack手工搭建react项目

### 项目构建

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

> Loader【https://webpack.js.org/loaders】

```
css
	style-loader css-loader
	
less
	style-loader css-loader less less-loader
	
图片(gif、png、jpg)、字体文件(ttf、eot、woff...)
	url-loader  最好也安装上 file-loader
```

> 注意

```
1、更改了webpack的配置文件，一定要记得重新运行
```

### React语法

> JSX
```
jsx ==> javascript xml

jsx ==> babel-loader ===> React.createElement()

注意点:
	1、注释的格式是 {/* xxx */}，但是仅仅在jsx中起作用
	2、在JSX中，我们的属性值，要么是字符串 id="app"，要么就是非字符串 style={}
```

> 样式【在JSX中】

```
1、我们在元素中要想写类名，要用className，因为class是es6的关键字

2、行业样式语法格式 <div style={{color:'red',fontSize:36}}></div>

3、页内样式 <div style={样式对象}></div>
```

> 组件

```
有状态组件(类组件)
	1、一定要写render函数，并且返回JSX
	2、render函数中的return 后面必须要跟内容，即使不跟也要写一个null，或者后面跟 (

无状态组件(函数式组件)
	自己无法产生数据，数据只能靠父组件给它传递

有无状态
	1、每个组件的数据来源分两种，一种是自己能够拥有，另外一种是靠父组件给它传递
	2、组件是否拥有自己的数据
```

