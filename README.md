# Tryto

* 学习总是在不断的尝试 而兴趣给了我更多尝试的机会 ^_^
### 前言
因为在使用Jqery的时候总是对它的一些方法产生了好奇，看过它的部分源码，所以想自己亲手实现一下这样的库。能力有限~  如有初入请@我
* tip：本项目不适合用于开发 可能存在未知BUG 仅供学习使用 
* 2018 - 06 -05 星期二 

### 如何使用本项目

* 您可以克隆或者下载本项目
```js
git clone git@github.com:qiuChengleiy/Tryto.git

```

* 引入本项目
```js
<script src="tryto.js"></script>
```

* tip:
```js

不要引入这个文件 因为它是不能直接被浏览器识别的 您应当引入编译后的js文件
<script src="tryto.ts"></script>

```

### 为什么要选择TypeScript来构建

* 想尝试一番~ 对新事物总是产生好奇
* 因为最近也在学typescript 基于它强大的类型系统 所以我想把它用到实际项目中 当然也考虑到读者可能不熟悉它的语法 所以应用了简单的判断
* 项目之初也为了可行性，进行了单元测试，这样可以更加方便的进行开发

#### 项目结构 /Tryto/

``` sh
├── dist/ # 打包存放目录
	├── tryto.js # 打包后的js文件 
├── node_modules/ # 模块目录
├──	test/ # 单元测试目录
	├── node_modules/
	├── coverage/
	├── test/ # 测试用存放目录
		├── test.js # 测试文件
	├── index.js
	├── karma.conf.js # 配置文件
	├── package.json
├── index.html
├── package.json
├── webpack.config.js # webpack配置文件
├── tsconfig.js # ts配置文件

```

### Document

* 当前版本： v0.0.1

* [源码阅读-您也可以通过阅读我的源码来给我提提意见 ~~ 感激~](./Tryto/tryto.ts)

* API部分:

#### DOM操作部分

* domReady DOM加载完毕后执行

```js
//1.
$(function(){
	//some codes here ...
})

//2.
$.ready(function() {
	//some codes here ...
})

//3.
$($.ready(function(){
	//some codes here ...
}))
```

* 选择器

```js

语法：

$('[css selector]')


//实例 

$('.div') // class is  .div

$('#div') // id is div

$('div') // 原生节点对象DIV

$('div span') // 查找DIV的所有子节点span

$('div .div')  // 查找div 下class为 .div的节点

// === 更多用法请参照CSS选择器 ~~~

如果您想获取实际的节点对象而不是实例 请调用：

//例如:
$('div').self_

```

* has()  判断是否有节点

```js

语法：

$('[css selector]').has('[css selector]')


//实例 

$('.div').has('.div') // 判断.div节点下 是否有class为 .div的子节点


// === 更多用法请参照CSS选择器 ~~~

除了判断您还可以获取到这个节点做点其他的事情 :

//例如：

$('div').has('h1').innerHTML

//也可以继续使用其它API来进行链式调用
$('div').has('h1').test()  


同样的 如果您想获取实际的节点对象而不是实例 请调用：

$('div').has('h1').selfc_

```

* find() 同has()方法
```js

语法：

$('[css selector]').find('[css selector]')

// find() 用法和上边一样 其实这两个方法是一样的 只是语义上不同罢了 ~


```


### 当前版本就更新到这啦 ~~~~~


### 始终坚信

* 敢于尝试的你 其实已经进步了




