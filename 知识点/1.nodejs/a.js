// function fun1(){
//     alert("it workes")
// }
// fun1()
// 第二种方法使用了块作用域来申明function防止污染全局变量
// (function(){})()
(function (){
    function fun1(){
        alert("it works")
    }
    fun1()
})()
// alert执行的时候，html内容是一片空白的，
// 当点击确定后，才出现，这就是JS阻塞浏览器渲染导致的结果。


// JS模块化工具requirejs教程
// 相当于C++里面的include
// 基本API
// require会定义三个变量：define,require,requirejs，其中require === requirejs，一般使用require更简短
// define 从名字就可以看出这个api是用来定义一个模块
// require 加载依赖模块，并执行加载完后的回调函数