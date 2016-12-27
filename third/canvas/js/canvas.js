$(function(){
    var canvasbox=document.querySelector(".canvasbox");
    var canvasboxW=canvasbox.offsetWidth;
    var canvasboxH=canvasbox.offsetHeight;
    var canvas=document.querySelector("canvas");
    var copy=document.querySelector(".copy");
    var cobj=canvas.getContext("2d");
    var xpmask=$(".xpmask")[0];
    var history=[];
    canvas.width=canvasboxW;
    canvas.height=canvasboxH;
    var drawobj=new shape(canvas,copy,cobj);
    var dataobj=cobj.getImageData(0,0,canvas.width,canvas.height);
    //下拉菜单操作
    $(".menu-list").click(function(){
        var index=$(".menu-list").index(this);
        $(".amlist").hide().eq(index).slideToggle(100);
        drawobj.isshowxp=false;
        $(".xp").css("display","none");
        $(".select").css("display","none");
    })


    //文件操作
    $(".amlist:eq(0) li").click(function(){
        var index=$(".amlist:eq(0) li").index(this);
        if(index==0){
            if(drawobj.history.length>0){
                var y=confirm("是否保存");
                if(y){
                    var url=canvas.toDataURL();
                    var newurl=url.replace("image/png","stream/octet");
                    location.href=newurls;
                }
            }
            cobj.clearRect(0,0,canvas.width,canvas.height);
            drawobj.history=[];
        }else if(index==1){
            if(drawobj.history.length==0){
                cobj.clearRect(0,0,canvas.width,canvas.height);
                setTimeout(function(){
                    alert("不能再后退了哦");
                },10)
            }else{
                if(drawobj.isback){
                    if(drawobj.history.length==1){
                        drawobj.history.pop();
                        cobj.clearRect(0,0,canvas.width,canvas.height);
                    }else{
                        drawobj.history.pop();
                        cobj.putImageData(drawobj.history[drawobj.history.length-1],0,0);

                    }
                }else{
                    cobj.putImageData(drawobj.history.pop(),0,0)
                }
                drawobj.isback=false;
            }
        }else if(index==2){
            var url=canvas.toDataURL();
            var newurl=url.replace("image/png","stream/octet");
            location.href=newurl;
        }
    })

    //画图形
    $(".amlist:eq(1) li").click(function(){
        var fn=$(this).attr("data-role");
        if(fn=="duobian"){
            drawobj.bianNum=prompt("请输入边数",drawobj.bianNum);
        }
        if(fn=="duojiao"){
            drawobj.bianNum=prompt("请输入角数",drawobj.jiaoNum);
        }
        if(fn!=="pencil") {
            //alert(fn);
            drawobj.type = fn;
            drawobj.draw();
        }else{
            drawobj.pencil();
        }
    })

    //画图的方式
    $(".amlist:eq(2) li").click(function(){
        var fn=$(this).attr("data-role");
        drawobj.style= fn;
        drawobj.draw();
    })

    //颜色的设置
    $(".amlist:eq(3) input").change(function(){
        drawobj[$(this).attr("data-role")]=$(this).val();
        drawobj.draw();
    })

    //线条的粗细
    $(".amlist:eq(4) li").click(function(){
        var num=$(this).attr("data-role");
        if(num!==null){
            drawobj.lineWidth=num;
            drawobj.draw();
        }
    })
    $(".amlist:eq(4) li input").change(function(){
        var num=$(this).val();
        drawobj.lineWidth=num;
        drawobj.draw();
    })



    //橡皮擦除
    $(".menu-list:eq(5) ").click(function(){
        drawobj.isshowxp=true;
        var xpobj=$(".xp");
        drawobj.eraser(xpobj);
    })

    $(".amlist:eq(5) li input").change(function(){
        drawobj.xpsize=$(this).val();
        $(".xp").css({
            width:$(this).val(),
            height:$(this).val()
        })
    })

    var file=document.querySelector("input");
    var img=document.querySelector("img");
    file.onchange=function(){
        alert(1)
        var fileobj=this.files[0];
        var reader=new FileReader();
        reader.readAsDataURL(fileobj);
        reader.onload=function(e){
            img.src= e.target.result;
            cobj.drawImage(img,0,0,canvas.width,canvas.height);
            dataobj=cobj.getImageData(0,0,canvas.width,canvas.height);
        }
    }

    //选择拖拽
    $(".menu-list:eq(6) ").click(function(){
        var selectobj=$(".select");
        drawobj.select(selectobj);
    })


    //将图像画到画布中
    $(".amlist:eq(7) input").click(function(){
        var file=document.querySelector("input[type='file']");
        var img=document.querySelector("img");
        file.onchange=function(){
            var fileObj=this.files[0];
            var reader=new FileReader();
            reader.readAsDataURL(fileObj);
            reader.onload=function(e){
                img.src= e.target.result;
                cobj.drawImage(img,0,0,500,300)
                dataobj=cobj.getImageData(0,0,500,300);
            }
        }
    })

    $(".amlist:eq(7) li").click(function(){
                var attr=this.getAttribute("data-role");
                if(attr=="fanxiang"){
                    //alert(1)
                    drawobj.fanxiang(dataobj,0,0)
                }else if(attr=="msk"){
                    //alert(2);
                    drawobj. msk(dataobj,50,0,0)
                }else if(attr=="blur"){
                    //alert(3);
                    drawobj. blur(dataobj,5,0,0)
                }


    })




})







