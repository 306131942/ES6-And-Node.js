
console.log('---------------Promise   start-----------------------')
// 1、Promise含义：异步编程的一种解决方案
//     promise对象有两个特点：
//       1.对象的状态不受外界影响，pending(进行中)、fulfiled(已完成)、rejected(已失败)
//       2.一旦状态改变，就不会再变，任何时候都可以得到这个结果，状态改变只有两种可能，称为（resolved）
//         (本章后面的resolved统一只指fulfilled状态，不包含rejected状态。)
//     作用：
//       可以将异步操作以同步操作的流程表达出来
//     如果某些时间不短重复发生，一般用Stream模式比部署Promise更好。

//   2、基本用法
es6规定，Promise对象是一个构造函数，用来生成Promise实例。
扩展构造函数回顾：特殊方法，创建对象时初始化对象，为对象成员变量赋初始值，与new一起使用。
一个类可以有多个构造函数 ，可根据其参数个数的不同或参数类型的不同来区分它们 即构造函数的重载。
var promise = new promise(function(resove, reject){
  // ... some code
  if (/*异步成功*/){
    resove(value);
  } else{
    reject(error);。
  }
});





console.log('---------------Promise   end-----------------------')