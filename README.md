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

> 条件渲染 & 列表渲染

```
条件渲染
	if 判断
	三目/三元运算符
	&&
	
列表渲染
	利用数组的map方法，进行列表渲染，别忘记加key
```

> 受控组件（checkbox、radio）

```
代码见MyCheckboxAndRadio
```

> 非受控组件（ref、文件上传）

```
1、获取焦点(ref)

2、文件上传(ref)
```

> 生命周期钩子

```
https://www.cnblogs.com/qiaojie/p/6135180.html

初次渲染阶段
	componentWillMount -> render -> componentDidMount
	
再次渲染
	props componentWillReceiveProps
	state shouldComponentUpdate -> componentWillUpdate -> render -> componentDidUpdate
	
卸载
	componentWillUnmount

注意：
	千万不要在render函数中更改state的值，这样会造成死循环
```

> 图书管理案例（在React中实现增删改查）

```
知识点
	列表渲染 map
	
	受控组件 获取输入框的值
	
	事件 事件对象
	
	数组
		map
		forEach
		filter
		some
```

### Redux && React-Redux

> Redux http://cn.redux.js.org/

```
作用：
	用来进行全局的状态管理
	
核心概念:
	store 仓库 可以供组件取值用，同时组件操作了值之后，最终也是会反映到store中
	
	reducer 组件所有的操作，最终处理都在reducer中去处理
		参数1：preState 上一次操作的结果
		参数2：action  action.type 区分操作的类型
		
	action 触发的动作  store.dispatch(action)去触发
		action.type
		其它参数
		
store常用的API
	store.getState 从仓库中获取数据
	store.subcribe 监听仓库数据的变化
	store.unsubscribe 写在监听
	store.dispatch 触发action
		
步骤：
	1、获取购物车的总数量
		Index.jsx  componentwillMount中调用一次 store.getState()
			再次监听 store.subscribe
		
	2、新增
		GoodsList.jsx 中点击了加入购物车，触发新增的action
		
	3、购物车组件获取商品列表进行展示
		Cart.jsx  componentwillMount中调用一次 store.getState()
			再次监听 store.subscribe
			
	4、修改
		Cart.jsx 触发了InputNumber的加或减，触发修改的action
		
	5、删除
		Cart.jsx 点击了删除按钮，触发删除的action
```

> React-Redux

```
文档地址:
	http://cn.redux.js.org/docs/react-redux/

相比于redux的好处
	1、不需要在每个组件中都导入store，并且监听
	
	2、更好的和react组件结合
	
核心概念:
	Provider 在根组件中注入仓库，让整个应用拥有状态管理的能力
	connect 通过它可以建立组件和仓库的关系，这样我们每个组件就可以操作仓库了
	mapStateToProps 从仓库中获取值，然后将值设置给组件的props属性
	mapDispatchToProps 把要触发的action和组件的props绑定起来
	
步骤:
	1、安装包 react-redux
		yarn add react-redux -S 【必须先安装redux】
		
	2、之前写的仓库中的代码，基本不用动
		store/index
		store/reducer
		store/actionCreater

	3、根组件中使用Provider注入store，这样整个应有就拥有了状态管理能力
		<Provider store={store}></Provider>
	
	4、每个组件需要使用connect来建立和store的关联
	
	5、组件中进行获取数据与更改仓库数据
		mapStateToProps mapStateDispatchToProps
		
	6、Index.jsx中通过mapStateToProps获取值

	7、GoodsList.jsx中mapDispatchToProps去往仓库中增加一条商品信息
	
	8、Cart.jsx 中通过 mapStateToProps 获取商品列表和商品总价
	
	9、Cart.jsx 中通过 mapDispatchToProps 修改和删除商品
```

### 状态管理之Mobx

> 基本概念

```
一个用于改变全局状态的工具，具有简洁、透明的使用风格
```

> 使用步骤

```
1、安装包
	yarn add mobx mobx-react -S
	
2、在appState.js【存放状态的文件】中使用 observable 包裹导出去的对象
	import {observable} from 'mobx'
	observable(value)

3、在组件【使用状态值的】中使用 observer 装饰组件的导出
	import {observer} from "mobx-react"
	export default observer(组件)
```

> 原理

```
mobx中使用了es6新增的proxy代理对象，某种意义上像Vue中的数据劫持，当数据变化的时候，能自动执行getter

状态与组件的关系
	状态 observable "被观察对象"  从 mobx 中来
	组件 observer "观察者" 从 mobx-react 中来
```

> 补充之修饰器

```
es6新增的语法以 @ 开头
例如:修饰对象
{
    @val = 10
}
例如修饰class
@observer
class xxx extends YYY{
    
}

本质是一个语法糖，就是把对象和class包裹起来而已

注意：
	1、需要babel的配置，要安装如下插件
	@babel/plugin-proposal-decorators
	2、修饰器只能修饰 class,还需要安装一个包
	@babel/plugin-proposal-class-properties
```

> 使用装饰器改造mobx案例

```
1、安装包
	yarn add @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties -D
	babel的配置参考
		http://es6.ruanyifeng.com/#docs/decorator
		
		并且注意：@babel/plugin-proposal-decorators 的配置一定要写在 @babel/plugin-proposal-class-properties 之前
		
	
2、在AppState2.js中，使用修饰器在class中修饰 实例属性
	import {observable} from 'mobx'

    export default class AppState2{
        @observable val2 = 100
    }
    
3、在父组件中实例化 AppState2.js 对象，然后传递给子组件
	类必须要被实例化，然后当成props传递到子组件中
	
	import AppState2 from './AppState2'
	const appState2 = new AppState2()
	
	<div>
         <BasicUse2 appState2={appState2}/>
    </div>
    
4、在子组件 BasicUse2 中使用 装饰器 @observer 装饰子组件
	@observer
	class BasicUse extends Component {}
```

 