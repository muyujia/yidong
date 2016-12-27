//利用node.js创建一个服务器
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    var url="."+req.url;
    fs.readFile(url,function(error,data){
        if(error){
            res.write("找不到此页面");
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen(8090);