angular.module("directives",[])
 .directive("menu",function(){
     return{
         restrict:"A",     //ECMA识别4种
//              template:"<div>{{abc}}</div>",
         templateUrl:"demo.html",   //输入一个路径，显示的demo.html中的内容是通过ajax发起请求的
//              replace:true,       //要替换的内容中只有一个根标签，否则会报错
         transclude:true,    //将原来存在的东西保存下来，若想出现，则在标签中添加ng-transclude，就会出现在相应位置
         scope:{},      //每个指令上的scope是独立的
         link:function($scope,b,c){   //a就是当前指令的scope
             $scope.data=[
                 {name:"111",son:[
                     {name:"1-1"}, {name:"1-2"}, {name:"1-3"}
                 ]},
                 {name:"222",son:[
                     {name:"2-1"}, {name:"2-2"}, {name:"2-3"}
                 ]},
                 {name:"333",son:[
                     {name:"3-1"}, {name:"3-2"}, {name:"3-3"}
                 ]}

             ]
             $scope.a=0;
             $scope.change=function(id){
                 $scope.a=id;
             }
         }
     }
 })