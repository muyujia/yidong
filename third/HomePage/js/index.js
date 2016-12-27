//用touch事件实现整屏滚动
//    var clientH=$(window).height();
//    var flag=true;
//    var num=0;
//   //阻止浏览器默认事件
//    $(".banbox").mousedown(function(e){
//        e.preventDefault();
//    })
//    $(".banbox").mousemove(function(e){
//        e.preventDefault();
//    })
////swipe滑动实现整屏轮播
//   touch.on("body","swipeup",".banbox",function(){
//        if(!flag){ return; }
//        num++;
//        if(num==$("section").length){
//            num=$("section").length-1;
//          return;
//        }
//       flag=false;
//        $(".banbox").css("marginTop",-num*clientH);
//    })
//    touch.on("body","swipedown",".banbox",function(){
//        if(!flag){return; }
//        num--;
//        if(num==-1){
//            num=0;
//        }
//        flag=false;
//        $(".banbox").css("marginTop",-num*clientH);
//   })
//
//    $(".banbox")[0].addEventListener("webkitTransitionEnd",function() {
//        flag=true;
//    })
$(function() {
    $("#fullpage").fullpage({
        menu: '#menu',
        scrollingSpeed: 1000, //滚动的速度
        anchors: ['page1', 'page2', 'page3', 'page4'],
        verticalCentered: false,
        navigation: true,  //是否显示项目导航
        navigationTooltips: ['首页', '关于我', '我的技能', '我的作品'],//项目导航的tip
        navigationPosition: 'right',  //项目导航的位置，left或者right
        lockAnchors: false,
        showActiveTooltip: false,
    })

    //响应式菜单栏
    var flag=true;
    $(".edit").click(function(){
        if(flag){
            $(".menu a").each(function(index,obj){
                $(obj).css({opacity:0,transform:"rotateX(90deg)",animation:"menus 0.3s linear forwards "+0.2*index+"s"})
            })
            $(".menu").css("display","block");
            flag=false;

        }else{
            $(".menu a").each(function(index,obj){
                $(obj).css({opacity:1,transform:"rotateX(0deg)",animation:"menus1 0.3s linear forwards "+(0.6-0.2*index)+"s"})
                setTimeout(function(){
                    $(".menu").css("display","none");
                },800)
            })
            flag=true;
        }
    })


    //手机上的图标转动
    $(".project").hover(function(){
        var index=$(this).index(".project");
        $(".project").eq(index).css("animation","rotat 1s linear forwards")
     },function(){
        var index=$(this).index(".project");
        $(".project").eq(index).css("animation","rotat1 1s linear forwards")
    })

    //第四屏轮播
    var lwidth=$(".exbox").width();
    var now=0;
    var next=0;
    $(".exbox>ul").hide().eq(0).show() ;
    function move(){
        next++;
        $(".exbox>ul").eq(next).show() ;
        if(next>$(".exbox>ul").length-1){
            next=0;
        }
        $(".exbox>ul").eq(now).css({left:0}).animate({left:-lwidth});
        $(".exbox>ul").eq(next).css({left:lwidth}).animate({left:0});
        now=next;
    }
    var t=setInterval(move,3000);
    $(".exbox").mouseover(function(){
        clearInterval(t);
    })
    $(".exbox").mouseout(function(){
        t=setInterval(move,5000)
    })
    $(".rbtn").click(function(){
        move();
    })
    $(".lbtn").click(function(){
        next--;
        $(".exbox>ul").eq(next).show() ;
        if(next<0){
            next=$(".exbox>ul").length-1;
        }
        $(".exbox>ul").eq(now).css({left:0}).animate({left:lwidth});
        $(".exbox>ul").eq(next).css({left:-lwidth}).animate({left:0});
        now=next;
    })






})