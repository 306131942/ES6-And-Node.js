// 步骤一、引入 required 模块
// 我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require("http");

// 步骤二、创建服务器
// 接下来我们使用 http.createServer() 方法创建服务器，
// 并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。
http.createServer(function(require,response){
    // 发送HTTP头部
    // HTTP 状态值：200,ok
    // 内容类型： text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据
    response.end('Hello world');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');