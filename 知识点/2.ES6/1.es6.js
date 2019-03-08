// 1、
// let 允许创建块级作用域，ES6 推荐在函数中使用 let 定义变量
// 而let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
// const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。

// let 和 const 声明只在最靠近的一个块中（花括号内）有效

// 当使用常量 const 声明时，请使用大写变量，如：CAPITAL_CASING

// 2、箭头函数、array function
// 箭头函数就是函数的一种简写形式，使用括号包裹参数，跟随一个 =>，紧接着是函数体：

// 简写形式的函数表达式

// 函数写法：
// update () {......}
// updata: function () {......}
// updata: () =>{ }
// 在对象方法中使用this，必须非常小心。
// 当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// 那就是箭头函数中，没有this。如果你在箭头函数中使用了this，那么该this一定就是外层的this。
// window.axios.get('/v1/methods/methodTypeTree')
// .then(function (res) { ...... })
// .catch(function (error) { ...... })

// window.axios.get('/v1/methods/methodTypeTree')
// .then( (res) => { ...... })
// .catch( (error) => { ...... })

// 3、详解JavaScript ES6中export import与export default的用法和区别
// 一个输出，一个输入，变量作为接口
// http://www.php.cn/js-tutorial-357671.html