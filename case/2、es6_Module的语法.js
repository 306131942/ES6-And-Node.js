// JavaScript 数据类型
// 字符串（String）、数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）

// JavaScript 对象
// 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：
// var person={firstname:"John", lastname:"Doe", id:5566};
// 上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。
// 空格和折行无关紧要。声明可横跨多行：
// var person={
// firstname : "John",
// lastname  : "Doe",
// id        :  5566
// };
// 对象属性有两种寻址方式：
// 实例
// name=person.lastname;
// name=person["lastname"];


// 1.数组的解构赋值-------------------------------------------------------------------------
    // 1.1基本用法
    // ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

// 刚好解构
// let [a, b, c] = [1, 2, 3]
// console.log(a+b+c)

// let [foo, bar] = [1, [[2], 3]]
// console.log(foo);
// console.log(bar);
// console.log(typeof(foo));
// console.log(typeof(bar));

// let [head,...tail] = [1,2,3,4,5];
// console.log(head);
// console.log(tail);

// 解构不成功
// let [x,y,...z] = ['a'];
// console.log(x);// 'a'
// console.log(y);// 如果解构不成功，变量的值就等于undefined。
// console.log(typeof(z));// []   onject

// let [foo] = [];
// console.log(foo);// 如果解构不成功，变量的值就等于undefined。
// let [abr, foo] = [1];
// console.log(abr);//1
// console.log(foo);//undefined

// 部分解构
// 即等号左边的模式，只匹配一部分的等号右边的数组。
// let [x, y] = [1, 2, 3];
// x // 1
// y // 2

// let [a, [b], d] = [1, [2, 3], 4];
// a // 1
// b // 2
// d // 4

// 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，那么将会报错。
// // 报错
// let [foo] = 1;
// let [foo] = false;
// let [foo] = NaN;
// let [foo] = undefined;
// let [foo] = null;
// let [foo] = {};

// 1.2默认值-------------------------------------------------------------------------
// let [foo = 1] = [];
// foo = true;
// console.log(foo);

// let [x = 1] = [null]
// console.log(x);
// ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
// 如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

// function f(){
//     //console.log('aa');
//     return 'aa';
// }
// let [x = f()] = [1];
// console.log(x);
// 因为x能取到值，所以函数f根本不会执行


// 1.3对象的解构赋值-------------------------------------------------------------------------
// 解构不仅可以用于数组，还可以用于对象。
// let {bar, foo} = {foo: "aaa", bar: "bbb"};
// console.log(foo);
// console.log(typeof(foo));

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log(baz);
// 变量没有对应的同名属性，导致取不到值，最后等于undefined。

// let {foo: baz} = {foo: 'aaa', baz: 'bbb'};
// console.log(baz);

// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined
// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。

// let obj = {
//     p: [
//         'hello',
//         {y: 'world'}
//     ]
// };
// let {p: [x, { y }] } = obj;
// let [x, { y }] = ['hello', {y: 'world'}]
// 注意，这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。

// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };

// let { p, p: [x, { y }] } = obj;
// console.log(x);//Hello
// console.log(y);//
// console.log(p);
// ['Hello',{ y: 'World' }]    [x, { y }]


// let {p, p: x} = { p: [1, 2] };
// console.log(p);
// console.log(x);

// 对象解构赋值的嵌套
// const node = {
//     loc: {
//         start:{
//             line: 1,
//             column: 5
//         }
//     }
// };
// let { loc, loc: { start }, loc: { start: { line } } } = node;
// console.log(loc);
// console.log(start);
// console.log(line);

// 嵌套赋值的例子
// let obj = {};
// let arr = {};
// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true } );
// console.log(obj);
// console.log(arr);

// 对象的解构也可以指定默认值
// var {x = 3} = {};
// var {x, y = 5} = {x: 1};
// console.log(x);
// console.log(y);
// 默认值生效的条件是，对象的属性值严格等于undefined。


// 错误的写法
// let x;
// {x} = {x: 1};
// SyntaxError: syntax error
// 正确的写法
// let x;
// ({x} = {x: 1});


//对数组进行对象解构，数组arr的0键对应的值是1
// let arr = [1, 2, 3];
// let {0: first, [arr.length - 1]: last} = arr;
// console.log([arr.length - 1]);


// 1.4、字符串的解构赋值-------------------------------------------------------------------------
// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
// const [a, b, c, d, e] = 'hello';
// console.log(c)

// let {length: len} = 'hello';
// console.log(len);

// 1.5、数值和布尔值的解构赋值-------------------------------------------------------------------------
// let {toString: s} = 123;
// console.log(s)
// console.log(s==Number.prototype.toString);

// let {toString: s} = true;
// s === Boolean.prototype.toString // true
// 解释：
// 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

//------------------------------------总结-------------------------------------------------------
// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
// 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError

// 1.6、函数参数的解构赋值-------------------------------------------------------------------------
// function add([x, y]){
//     return x + y;
// }
// add([1,2]);
// [1,2]  [x,y]

// console.log(
//     [[1, 2], [3, 4]].map(([a,b]) => a + b)
//     );
// function (a,b){
//     return a+b
// }
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
// 返回值 一个新数组，每个元素都是回调函数的结果。

// function move({x = 0, y = 0} = {}) {
//     return [x,y]
// }
// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// move(); // [0, 0]

// 这样是不同的
// function move({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }

// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, undefined]
// move({}); // [undefined, undefined]
// move(); // [0, 0]
// console.log(
// [1, undefined, 3].map((x='yes') => x)
// )

// function (x='yes'){
//     return x
// }

// ES5中不能直接为函数的参数指定默认值，只能通过变通方式
// var array = [1, 2, 3];
// console.log(
// array.sort((a, b) => b - a)
// )
// function (a,b){
//     return b - a;
// }

// sort数组在原数组上进行排序，不生成副本。


// 1.6 圆括号问题
// ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。
// 以下三种情况不能使用圆括号
// 变量声明语句
// 函数参数
// 赋值语句的模式

// 以下一种使用圆括号
// 赋值语句的非模式部分


// 1.7 解构赋值的用途

// 1、交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);
console.log(y);

// 2、从函数返回多个值
// 返回一个数组
// function example(){
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// console.log(a);
// 返回一个对象
// function example2(){
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let {foo:m, bar} = example2();
// // console.log(foo);
// console.log(m);
// console.log(bar);

// 3、函数参数的定义
// 参数是一组有次序的值
// function f([x, y, z]){
//     //...
// }
// f([1, 2, 3,]);

// 参数是一组无序的值
// function f({x,y,z}){
//     // ...
// }
// f({z: 3, y: 2, x:1});

// 4、提取JSON数据
// 解构赋值对提取JSON对象中的数据，尤其有用。
// let jsonData = {
//     id: 42,
//     status: [867, 5309]
// };
// let { id, status, data, number } = jsonData;
// console.log(id, status, number);

// 5、函数参数的默认值
// jQuery.ajax = function (url, {
//     async = true,
//     bwforeSend = function () {},
//     cache = function () {},
//     crossDomain = false,
//     global = true
//     // ... more config
// }) {
//     // ... do stuff
// };

// 6、遍历Map结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for(let [key, value] of map) {
//     console.log(key + " is " + value);
// }
// first is hello
// second is world

// 扩展：Map和对象和Set的区别
// 对象的键必须为字符串！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！!!!!!!1
// Map类似Object，不过可以使用其他类型作为其键值。！！！！！！！！！！！！！！！！！！！！！！！！！！！
// Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。！！！！！！！！！！！！！

// 1、Map
// var m = new Map([[100, 'Michael'], [101, 'Bob'], [102, 'Tracy']]);
// console.log(m[100]); // undefined
// console.log(m.get(100)); // Michael

// var m = new Map(); // 空Map
// m.set('Adam', 67); // 添加新的key-value
// m.set('Bob', 59);
// m.has('Adam'); // 是否存在key 'Adam': true
// m.get('Adam'); // 67
// m.delete('Adam'); // 删除key 'Adam'
// m.get('Adam'); // undefined

// var m = new Map();
// m.set('Adam', 67);
// m.set('Adam', 88);
// m.get('Adam'); // 88

// 2、Set
// var s1 = new Set();
// var s2 = new Set([1, 2, 3]);
// var s3 = new Set([1, 2, 3, 3, '3']);
// console.log(s3); // Set {1, 2, 3, "3"}
// 通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：
// s3.add(4);
// s3.add(3);
// s3.add('3');
// console.log(s3); // Set {1, 2, 3, "3"}
// 通过delete(key)方法可以删除元素：
// var s = new Set([1, 2, 3]);
// console.log(s);
// s.delete(3);
// console.log(s);

// 7、输入模块的指定方法
// 加载模块时，往往需要输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");