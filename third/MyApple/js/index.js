$(function(){
    //初始化菜单的宽高
    var clientW=$(window).width();
    var clientH=$(window).height();
    $(".son").css("width",clientW).css("height",clientH);
    $(".menu").click(function(){
        $(".son").slideToggle(100);
        //$(".banner").hide();
        //$(".pic-list").hide();
        //$(".footers").hide();
    })

    //轮播图
    var currentNum=0;
    var nextNum=0;
    var flag=true;
    var currentTime=0;
    function move(){
        nextNum++;
        if(nextNum==3){
            nextNum=0;
            flag=false;
        }
        $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
        $(".list:eq("+nextNum+")").animate({left:0},function(){
            $(".list:eq("+currentNum+")").animate({left:"100%",width:"100%",height:"100%"});
            currentNum=nextNum;
            currentTime=0;
            flag=true;
        }).css("zIndex",1);

    }


    //轮播点
    function move1(){
        currentTime+=50;
        var rate=currentTime/3000;
        if(rate>1){
            rate=1;
        }
        $(".progress").eq(currentNum).css({width:rate*100+"%"});
        if(flag===false){
            $(".progress").css({width:0});
        }
    }
    var t1=setInterval(move,3000);
    var t2=setInterval(move1,50);
    //setInterval中有操作的dom对象，当失去焦点的时候，setInterval就停止
    $(window).focus(function(){
        t1=setInterval(move,3000);
        t2=setInterval(move1,50);
    })
    $(window).blur(function(){
        clearInterval(t1);
        clearInterval(t2);
    })

    $(".banner").hover(function(){
        clearInterval(t1);
        $(".btn-list").find(".progress").css("width",0);
        $(".btn-list").eq(currentNum).find(".progress").css("width","100%");
    },function(){
        t1=setInterval(move,3000);
    })
    $(".btn-list").click(function(){
        nextNum=$(this).index(".btn-list");
        stop();
    })

    $(".leftbtn").click(function(){
        nextNum--;
        if(nextNum==-1){
            nextNum=2;
        }
        stop();
    })
    $(".rightbtn").click(function(){
        nextNum++;
        if(nextNum==3){
            nextNum=0;
        }
        stop();
    })


    function stop(){
        /* 定时器停止*/
        clearInterval(t1);
        clearInterval(t2);

        /*按钮的变化*/
        $(".btn-list").find(".progress").css("width",0);
        $(".btn-list").eq(nextNum).find(".progress").css("width","100%");

        /*轮播图发生变化*/
        if(nextNum>currentNum){
            $(".list:eq("+currentNum+")").animate({width:"80%",height:"80%"}).css("zIndex",0);
            $(".list:eq("+nextNum+")").animate({left:0},function(){
                $(".list:eq("+currentNum+")").css({
                   left:"100%", width:"100%",height:"100%"})
                currentNum=nextNum;
            }).css("zIndex",1)
        }else if(nextNum<currentNum){
            $(".list:eq("+currentNum+")").animate({left:"100%"}).css("zIndex",1);
            $(".list").eq(nextNum).css({
                width:"80%",height:"80%",left:0
            }).animate({width:"100%",height:"100%"},function(){
                currentNum=nextNum;
            })
        }
    }


    $(".foot-list").click(function(){
        var index=$(this).index(".foot-list");
        //alert(index);
        $(".foot-son").eq(index).slideToggle(100);
    })





})