$(function(){
    // 设置比例大小，进行比例布局
    function resize(originsize,type){
        var type=type||"x";
        var widths=document.documentElement.clientWidth;
        var heights=document.documentElement.clientHeight;
        if(type=="x"){
            var scale=widths/originsize*100;
        }else if(type=="y"){
            var scale=heights/originsize*100;
        }

        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }
    resize(1334,"y");


//banner轮播
    var clientW=$(".imgbox").width();
    var clientH=$(".imgbox").height();
    var now=0;
    var next=0;
    $(".imgbox>a").hide().eq(0).show() ;
    function move(){
        next++;
        $(".imgbox>a").eq(next).show() ;
        if(next>$(".imgbox>a").length-1){
            next=0;
        }
        $(".imgbox>a").eq(now).css({left:0}).animate({left:-clientW});
        $(".imgbox>a").eq(next).css({left:clientW}).animate({left:0});
        $(".dot>li").removeClass("active").eq(next).addClass("active");
        now=next;
    }
    var t=setInterval(move,2000)





})
