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

> Loader https://webpack.js.org/loaders

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

> 文档地址 https://react.docschina.org/

```
中文文档：https://react.docschina.org/
官网：https://www.reactjs.org/
```

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

> 父组件传值给子组件

```
父组件
	通过属性名称=值传递

子组件
	无状态，通过函数的形参（props）接收
	有状态组件，一种是构造器中通过形参props接收，另外一种是在render等钩子中通过this.props接收
	
应用场景：
	无状态组件适合简单的展示内容
	有状态组件适合有业务场景
	
注意事项：
	1、父组件传递过来的值(props)只用使用，不能更改
	2、自己内部拥有的数据(state)可以更改
```
> 子组件传值给父组件
```
方式1：
	通过回调函数，父组件传一个函数给子组件，并且函数是引用类型，当在子组件中调用函数的时候，就可以把结果传回给父组件
	
方式2：
```
> Props & State【有状态组件下】
```
Props
	是父组件传递给子组件的值，是只读的，不允许修改
	
State
	是组件内部拥有的，可以更改，如果该模型要显示在视图上，更改的时候要调用setState
	如果我们更改的模型值，不需要显示在视图上 this.state.xxx = yyy
	
Props和State怎样结合起来用
	Props由于不能更改，所以我们一般在构造器中，把props值赋值给state中的属性，后续操作
	操作state中的值即可（无论显示或是更改）
	
类型检查【设置为静态属性】
	当父组件给子组件传值的时候，我们可以约定传递值的类型，这样做的话，更加严谨
	https://react.docschina.org/docs/typechecking-with-proptypes.html
	
默认值【设置为静态属性】
	defaultProps
```
> 爷孙之间传值

```
爷爷:
	// 约定传到子级组件中属性名称叫啥、值的类型叫啥
	static childContextTypes = {
        myValue:PropTypes.string
    }
	
	// 真正的传值 
    getChildContext() {
        return {myValue: this.state.value};
    }
    
孙子:
	// 定义好接收的属性名称及接收值的类型
	static contextTypes = {
        myValue:PropTypes.string
    }
    
    // 使用
    this.context.myValue
```

> 兄弟组件传值

```
1、搞一个公共的bus （EventEmitter的实例）

2、发送值的那一方，使用 bus.emit('自定义事件名称',载荷)

3、接收值的那一方，使用 bus.on(自定义事件名称,处理函数)
	bus.on 一般写在componentDidMount 只要注册一次
```

> React中事件处理 及 this 绑定

```
1、JSX中绑定事件使用on事件名称，比如 <button onClick={函数...}></button>

2、事件处理函数中this的绑定【无传参】
	直接写在onClick中调用函数的时候
		<button onClick={this.clickMe.bind(this)}>更改值</button>
		
	可以在constructor中绑定this
		this.clickMe = this.clickMe.bind(this)
		
	箭头函数
		clickMe = () => { console.log("22222",this) }
		
3、事件处理函数中this的绑定【传参】
	直接写在onClick中调用函数的时候
		<button onClick={()=>{this.clickMe2(实参)}}>更改值</button>
		
	箭头函数
		<button onClick={()=>{this.clickMe2(实参)}}>更改值</button>
```

> React受控组件与非受控组件

```
对表单元素的值 input、radio、checkbox等等来描述

受控组件：【尽量避免dom操作，多去操作模型】
	表单元素的值，是受到组件的state管理的
	
非受控组件：
	表单元素的值，不受组件state的管理
```

