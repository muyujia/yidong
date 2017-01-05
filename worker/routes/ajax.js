var express=require("express");
var route=express.Router();
route.use("/ajax",function(req,res){
    var data=[
        {name:"zs",phone:"13412389734",en:"z"},
        {name:"ls",phone:"13412389734",en:"l"},
        {name:"wu",phone:"13412389734",en:"w"},
        {name:"jq",phone:"13412389734",en:"j"},
        {name:"yb",phone:"13412389734",en:"y"},
        {name:"yyl",phone:"13412389734",en:"y"},
        {name:"st",phone:"13412389734",en:"s"},
        {name:"sw",phone:"13412389734",en:"s"},
        {name:"mx",phone:"13412389734",en:"m"},
        {name:"mt",phone:"13412389734",en:"m"},
        {name:"yb",phone:"13412389734",en:"y"},
        {name:"yyl",phone:"13412389734",en:"y"},
        {name:"st",phone:"13412389734",en:"s"},
        {name:"sw",phone:"13412389734",en:"s"},
        {name:"mx",phone:"13412389734",en:"m"},
        {name:"mt",phone:"13412389734",en:"m"}
    ]
    res.send(JSON.stringify(data));
})

module.exports=route;