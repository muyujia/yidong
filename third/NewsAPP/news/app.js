var express=require("express");
var mysql=require("./mysql");
var app=express();
app.listen(8090);

app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",function(req,res){

    mysql.query("select * from category",function(error,rows){
        res.render("index",{categorys:rows});
    })
})

app.get("/list/:id",function(req,res){
     var cid=req.params.id;
    mysql.query("select * from article where cid="+cid,function(error,rows){
        res.render("list",{lists:rows,imgs:rows});
    })
})

app.get("/show/:id",function(req,res){
    var id=req.params.id;
    mysql.query("select * from article where id="+id,function(error,rows){
        res.render("show",{shows:rows});
    })
})