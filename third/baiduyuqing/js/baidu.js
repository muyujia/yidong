$(function(){
//    var clientH=$(window).height();
//    var flag=true;
//    var num=0;
////swipe滑动实现整屏轮播
//    touch.on("body","swipeup","#fullpages",function(){
//        if(!flag){ return; }
//        num++;
//        if(num==$("section").length){
//            num=$("section").length-1;
//            return;
//        }
//        flag=false;
//        $("#fullpages").css("marginTop",-num*clientH);
//    })
//    touch.on("body","swipedown","#fullpages",function(){
//        if(!flag){return; }
//        num--;
//        if(num==-1){
//            num=0;
//        }
//        flag=false;
//        $("#fullpages").css("marginTop",-num*clientH);
//    })
////监听事件监听动画何时结束，并将开关重新打开
//    $("#fullpages")[0].addEventListener("webkitTransitionEnd",function(){
//        flag=true;
//       //    $(".move").each(function(index,obj){
//       //       if(num==0){
//       //           //console.log(num,index)
//       //           $(obj).find(".lmove").css({transform:"translate(0,0)"})
//       //           $(obj).find(".rmove").css({transform:"translate(0,0)"})
//       //           return;
//       //       }
//       //       if(num!==0){
//       //           if(num==index){
//       //              $(".lmove").eq(index).css({transform:"translate(0,0)"})
//       //              $(".rmove").eq(index).css({transform:"translate(0,0)"})
//       //           }else{
//       //               $(".lmove").eq(index).css({transform:"translate(30px,0)"})
//       //               $(".rmove").eq(index).css({transform:"translate(-30px,0)"})
//       //           }
//       //       }
//       //})
//        $("section").each(function(index,obj){
//            if(index==0){
//                return;
//            }
//            if(index==num){
//                console.log(num)
//                $(".left-img").eq(index).css({
//                    opacity:0,
//                    transform:"translate(0,0)"
//                });
//                $(".right-img").eq(index).css({
//                    opacity:0,
//                    transform:"translate(0,0)"
//                });
//            }else{
//                $(".left-img").eq(index).css({
//                    opacity:1,
//                    transform:"translate(50px,0)"
//                });
//                $(".right-img").eq(index).css({
//                    opacity:1,
//                    transform:"translate(-50px,0)"
//                });
//            }
//        })
//
//
//    })
//
//
//
//

    var h=$(window).height();
    var num=0;
    var flag=true;
    $(".fullpage").mousedown(function(e){
        e.preventDefault()
    })
    $(".fullpage").mousemove(function(e){
        e.preventDefault()
    })
    touch.on("body","swipeup",".fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        var les=$("section").length;
        if(num==les){
            num=les-1;
            return;
        }
        $(".fullpage").css("marginTop",-num*h);
        flag=false;
    });
    touch.on("body","swipedown",".fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        $(".fullpage").css("marginTop",-num*h);
        flag=false;
    })
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        /*每一屏动画*/

        $("section").each(function(index,obj){
            if(index==num){
                $(obj).find(".section-tittle").css({
                    transform: "translate(0,0)",
                    opacity: 1
                })
                $(obj).find(".brain").css({
                    transform: "translate(0,0)",
                    opacity: 1
                })
            }else{
                $(obj).find(".section-tittle").css({
                    transform: "translate(-150px,0)",
                    opacity: 0
                })
                $(obj).find(".brain").css({
                    transform: "translate(150px,0)",
                    opacity: 0
                })
            }
        })
    })
 //响应式菜单栏操作
    var flag2=true;
    $(".menu-option").click(function(){
       if(flag2){
          $(this).find(".topline").css({
              transform:"translate(0,5px) rotate(45deg)"
          })
           $(this).find(".botline").css({
               transform:"translate(0,-5px) rotate(-45deg)"
          })

           $(".menu a").each(function(index,obj){
               $(obj).css({opacity:0,transform:"rotateX(90deg)",animation:"menus 0.3s linear forwards "+0.2*index+"s"})
           })
           $(".menu").css("display","block");
         flag2=false;

       }else{
           $(this).find(".topline").css({
               transform:"translate(0,0px) rotate(0deg)"
           })
           $(this).find(".botline").css({
               transform:"translate(0,0px) rotate(0deg)"
           })

           $(".menu a").each(function(index,obj){
               $(obj).css({opacity:1,transform:"rotateX(0deg)",animation:"menus1 0.3s linear forwards "+(1.2-0.2*index)+"s"})
               setTimeout(function(){
                   $(".menu").css("display","none");
               },1200)
           })
           flag2=true;
       }
    })
//
$(window).resize(function(){
    var clientH=$(window).height();
    var clientW=$(window).width();
    $("#fullpages").css("marginTop",-num*clientH);
    if(clientW>1000){
        $(".menu a").css({
            animation:"none",
            opacity:0,
            transform:"rotate(90deg)"
      })
        $(".topline").css({
            transform:"translate(0,0) rotate(0deg)"
        })
        $(".botline").css({
            transform:"translate(0,0) rotate(0deg)"
        })
        flag2=true;
    }

})


    /*解决bug*/
    $(window).resize(function(){
        h=$(window).height();
        var clientW=$(window).width();
        $(".fullpage").css("marginTop",-num*h);
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacity:0,
                transform:"rotate(0deg)"
            });
            $(".menu-option-tline").css({
                transform:"translate(0,0) rotate(0deg)"
            });
            $(".menu-option-bline").css({
                transform:"translate(0,0) rotate(0deg)"
            });
            flag2=true;
        }
    })









})