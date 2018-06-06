### tryTo 源码部分

```js

/**
* name : tryto.ts
* time: 2018-06-05
* author :qiuChenglei
* email : qcl9701s666@163.com
* description : a Library like JQuery
* version : 0.0.1
* 目前只兼容 高版本的浏览器 ~ 
*/


//================================ 希望看到的小伙伴 能多提提意见 互相学习 ~~~ =======================================

//赋予$ 后续调用方便 需要以下声明 不然typescript编译会报错 
declare let $: any;

(function(window,document) {
	//缓存一些变量
	let win:any = window,
		doc = document,
        tryTo,
        trimReg = /(^\s*)|(\s*$)/g;

    //使得每次调用时都会返回一个tryto的实例 不需要new一个实例出来
	tryTo = function(selector:any) {

		return new tryTo.prototype.init(selector);
	}

	//构造原型
	tryTo.prototype = {
		constructor: tryTo,
		length:0,
		splice:[].splice,
		init(selector) {
			const self = this;
			//判断是否为空 空则返回本身
			if(!selector) {
				return this;
			}else{
				// dom 选择器实现
			const obj = (function(selector) {

				//去除两端空格
				const selectors = selector.toString().replace(trimReg, "");
				// 如果参数是一个字符串类型的选择器
				if(typeof selector == 'string'){
					const dom = document.querySelector(selectors);
					self.self_ = dom;
					self.self_.prototype = tryTo.prototype;

				  //传入的如果是一个function 则调用domReady方法 DOM加载完毕后执行
				}else if(typeof selector == 'function'){
					tryTo.ready(selector);
					return ;
				}
				
				
				
			})(selector);	

		 }

		return this;
	  },
	}

	//将init的原型指向实例的原型
	tryTo.prototype.init.prototype = tryTo.prototype;



	/*
	*  DOM操作
	*  has   { method } '判断是否存在节点对象'	
	*  find  '同上方法'
	*  addClass { method } '增加class属性值'   
	*/





	tryTo.prototype.has = function(selector) {
		if(!selector) {
			return this;
		}else{
			//对选择器参数做去空处理  
			const selectors = selector.toString().replace(trimReg, "");
			const childSel =  this.self_.localName + ' ' +selector;
			const searchSel = document.querySelector(childSel);

			// 判断是否有节点 有返回true 没有返回false
			if (searchSel) {
			this.selfc_ = searchSel;
			    this.selfc_.prototype = tryTo.prototype;
				
				return this;
			}else{
				return false
			}
	   }

		return this;
	}







	//测试用例
	tryTo.prototype.test = function() {
		if(this.selfc_){
			console.log('123')
		}else{
			console.log('456')
		}
		console.log(this.selfc_)
	}


	tryTo.prototype.find = tryTo.prototype.has;



// +++++++++++++++++++++++++++  当前版本 就更 到这啦 +++++++++++++++++++++++++++++++++++

	tryTo.prototype.addClass = function(class:string) {
		// some codes here
	}







	// DOM加载完毕后执行
	tryTo.ready = function(fn) {
		doc.addEventListener('DOMContentLoaded',function() {
			fn && fn();
		},false);

		doc.removeEventListener('DOMContentLoaded',fn,true);
	}




	//外露接口 给window
	win.$ = tryTo;


})(window,document)



```