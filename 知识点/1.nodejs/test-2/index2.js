var fs = require("fs");

// var data = fs.readFileSync('input.txt');

// console.log("程序执行开始！");
// console.log(data.toString());
// console.log("程序执行结束！");

// 执行异步操作的函数 将回调函数作为最后一个参数
// 回调函数接收错误对象作为第一个参数
fs.readFile('input.txt',function(err, data){
    if(err)
    // return console.error(err);
    {
        console.log(err.stack);
        return;
    }
    console.log(data.toString() + " 加1234");
});
console.log("程序执行结束！");