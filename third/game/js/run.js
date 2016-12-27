//真正运行的程序
window.onload=function(){
    var clientW=document.documentElement.clientWidth;
    var clientH=document.documentElement.clientHeight;
    var canvas=document.querySelector("canvas");
    var cobj=canvas.getContext("2d");
    canvas.width=clientW;
    canvas.height=clientH;
    //获取图片的值***********************
    var runs=document.querySelectorAll(".run");
    var jumps=document.querySelectorAll(".jump");
    var hinderimg=document.querySelectorAll(".hinder");
    //获取声音的参数***********************
    var vrun=document.querySelector(".vrun");
    var vjump=document.querySelector(".vjump");
    var hit=document.querySelector(".hit");
    var ball=document.querySelector(".ball");
    //获取进度条***********************
    var progress=document.querySelector(".progress");
    var gameobj=new game(canvas,cobj,runs,jumps,hinderimg,vrun,vjump,hit,ball,progress);  //调用游戏的主类

    var start=$(".start");
    var mask=$(".mask");
    var startBtn=$(".btn:eq(0)");
    startBtn.one("click",function(){
        gameobj.play(start,mask);
    })





}

