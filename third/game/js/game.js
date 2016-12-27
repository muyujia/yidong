//构建人物形象
function person(canvas,cobj,runs,jumps){
    this.canvas=canvas;
    this.cobj=cobj;
    this.runs=runs;
    this.jumps=jumps;
    this.x=0;
    this.y=400;
    this.width=120;
    this.height=120;
    this.speedx=5;
    this.speedy=5;
    this.g=3;
    this.status="runs";
    this.state=0;
    this.num=0;
    this.life=3;
}
person.prototype={
    draw:function(){
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.drawImage(this[this.status][this.state],0,0,224,224,0,0,this.width,this.height);    //把一张图片画到画布上
        this.cobj.restore();
    }
}

//障碍物的设置
function hinder(canvas,cobj,hinderimg){
    this.canvas=canvas;
    this.cobj=cobj;
    this.hinderimg=hinderimg;
    this.state=0;
    this.x=canvas.width-20;
    this.y=450;
    this.width=84;
    this.height=60;
    this.hinspeed=6;
}
hinder.prototype={
    draw:function(){
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.drawImage(this.hinderimg[this.state],0,0,564,400,0,0,this.width,this.height);
        this.cobj.restore();
    }

}

//血的设置
function liuxue(canvas,cobj,x,y){
    this.canvas=canvas;
    this.cobj=cobj;
    this.x=x;
    this.y=y;
    this.w=canvas.width;
    this.h=canvas.height;
    this.r=2+3*Math.random();
    this.color="red";
    this.speedx=1+2*Math.random();
    this.speedy=-2+1*Math.random();
    this.g=0.3;
    this.speedr=0.1;
}
liuxue.prototype={
    draw:function(){
        this.cobj.save();
        this.cobj.translate(this.x,this.y);
        this.cobj.beginPath();
        this.cobj.fillStyle=this.color;
        this.cobj.arc(0,0,this.r,0,Math.PI*2);
        this.cobj.fill();
        this.cobj.restore();
    },
    update:function(){
        this.x+=this.speedx;
        this.speedy+=this.g;
        this.y+=this.speedy;
        this.r-=this.speedr;
    }
};
function xue(canvas,cobj,x,y){
    var arr=[];
    for(var i=0;i<30;i++){
        var obj=new liuxue(canvas,cobj,x,y);
        //obj.x=x;
        //obj.y=y;
        arr.push(obj);
    }

    var t=setInterval(function(){
        cobj.clearRect(0,0,this.w,this.h);
        for(var i=0;i<arr.length;i++){
            arr[i].draw();
            arr[i].update();
            if(arr[i].r<0){
                arr.splice(i,1);
            }
        }
        if(arr.length==0){
            clearInterval(t);
        }
    },50)
}

//子弹的设置
function zidan(canvas,cobj){
    this.canvas=canvas;
    this.cobj=cobj;
    this.x=0;
    this.y=0;
    this.width=35;
    this.height=10;
    this.color="lightgreen";
    this.speedx=5;
    this.jia=1;
}
zidan.prototype= {
    draw: function () {
        this.cobj.save();
        this.cobj.translate(this.x, this.y);
        this.cobj.fillStyle = this.color;
        this.cobj.fillRect(0, 0, this.width, this.height);
        this.cobj.restore();
    }
}

//游戏的主类，整合一系列对象
function game(canvas,cobj,runs,jumps,hinderimg,vrun,vjump,hit,ball,progress){
    this.canvas=canvas;
    this.cobj=cobj;
    this.width=canvas.width;
    this.height=canvas.height;
    this.vrun=vrun;
    this.vjump=vjump;
    this.hit=hit;
    this.ball=ball;
    this.progress=progress;
    this.backx=0;
    this.backspeed=5;
    this.person=new person(canvas,cobj,runs,jumps);
    this.hinderimg=hinderimg;
    this.hinderimgArr=[];
    this.speedx=5;
    this.score=0;
    this.isfire=true;
    this.zidan=new zidan(canvas,cobj);
    this.num=0;
    this.rand=(1+Math.ceil(3*Math.random()))*1000;
    this.ts={};
    this.flag=true;
    this.inita=0;
    this.speeda=5;
    this.r=100;
    this.y=this.person.y;
    this.flag2=true;
    this.step=1;
    this.stepspeed=2;
    this.current=0;
}
game.prototype={
    play:function(start,mask){
        this.name=prompt("请输入你的昵称","muyu");
        start.css("animation","start1 2s ease forwards");
        mask.css("animation","mask1 2s ease forwards");
        this.run();
        this.jump();
        this.mouse();
    },
    run:function() {
        var that = this;
        that.vrun.play();
        //var top=0;
        that.ts.t1 = setInterval(function () {
            that.move();
        }, 50)
    },
    move:function(){
        var that=this;
        that.num+=50;   //多长时间出一个障碍物
        that.cobj.clearRect(0,0,that.width,that.height);
        that.person.num++;   //用来计算显示的图片
        that.person.speedx=3;
        that.person.backspeed=3;
        if(that.person.status=="runs"){
            that.person.state=that.person.num%6;
        }else{
            that.person.state=0;
        }
//让人物的x发生变化 *******************************
        that.person.x+=that.person.speedx;
        if(that.person.x>that.width/3){
            that.person.x=that.width/3;
        }
//操作障碍物 *******************************
        if(that.num%that.rand==0){
            that.num=0;
            that.rand=(1+Math.ceil(3*Math.random()))*1000;
            var obj=new hinder(that.canvas,that.cobj,that.hinderimg);
            obj.state=Math.floor(that.hinderimg.length*Math.random());
            that.hinderimgArr.push(obj);
        }
        for(var i=0;i<that.hinderimgArr.length;i++) {
            that.hinderimgArr[i].x -= that.speedx;
            that.hinderimgArr[i].draw();
            if (hitPix(that.canvas, that.cobj, that.person, that.hinderimgArr[i])) {
                if (!that.hinderimgArr[i].flag) {
                    that.person.life--;
                    that.hit.play();
                    document.querySelectorAll("span")[0].innerHTML=that.person.life;
                    that.progress.style.width=(that.person.life*100)+"px";
                    xue(that.canvas,that.cobj,that.person.x+that.person.width/2,that.person.y+that.person.height/1.5);
                }
                that.hinderimgArr[i].flag = true;
                if (that.person.life<0) {
                    //alert("Game over");
                    var messages=localStorage.messages?JSON.parse(localStorage.messages):[];
                    var temp={name:that.name,score:that.score};
                    if(messages.length>0){
                        //排序
                        messages.sort(function(a,b){
                            return a.score< b.score;
                        })
                        if(temp.score>messages[messages.length-1].score){
                            if(messages.length==5){
                                messages[messages.length-1]=temp;
                            }else if(messages.length<5){
                                messages.push(temp);
                            }
                        }
                    }else{
                        messages.push(temp);
                    }
                    //messages.push(temp);
                    localStorage.messages=JSON.stringify(messages);
                    that.over();
                    return;
                    location.reload();
                }
            }
            if(that.hinderimgArr[i].x+that.hinderimgArr[i].width<that.person.x){
                if(!that.hinderimgArr[i].flag&&!that.hinderimgArr[i].flag1){
                    that.score++;
                    document.querySelectorAll("span")[1].innerHTML=that.score;
                    //console.log(that.score);
                }
                that.hinderimgArr[i].flag=true;
            }
        }

//操作子弹 *******************************
        if(that.isfire){
            that.zidan.y = that.person.y + that.person.height/2;
            that.zidan.speedx+=that.zidan.jia;
            that.zidan.x+=that.zidan.speedx;
            that.zidan.draw();
        }
        //if(hitPix(that.canvas,that.cobj,that.zidan,that.hinderimgArr[i])){
        //    that.hinderimgArr.splice(i,1);
        //    that.score++;
        //    document.querySelectorAll("span")[1].innerHTML=that.score;
        //}
        //if(that.zidan.x>800){
        //    that.isfire=false;
        //}

//操作背景 *******************************
        that.backx-=that.backspeed;
        that.canvas.style.backgroundPositionX=that.backx+"px";
        that.person.draw();
        //that.person.speedy+=that.person.g;
        //top+=that.person.speedy;
        //if(top>420){
        //    top=420;
        //}else{
        //    that.speedy+=that.person.g;
        //    top+=that.person.speedy;
        //}
        //that.person.y=top;
    },
    over:function(){
       for(var i in this.ts){
           clearInterval(this.ts[i]);
       }
       var over=document.querySelector(".over");
       over.style.animation="start 2s ease forwards";
       this.vrun.pause();
       var scoreEle=document.querySelector(".scoreEle");
       scoreEle.innerHTML=this.score;
       var lis=document.querySelector(".over ul");
       //var ul=document.getElementsByTagName("ul");
       var str="";
       var messages=localStorage.messages?JSON.parse(localStorage.messages):[];
       for(var i=0;i<messages.length;i++){
           str+="<li>"+messages[i].name+":"+messages[i].score+"</li>";
           lis.innerHTML=str;
       }
       this.again();
   },
    again:function(){
        var againbtn=document.querySelector(".again");
        var that=this;
        againbtn.onclick=function(){
            var over=document.querySelector(".over");
            over.style.animation="start1 2s ease forwards";
            that.person.x=0;
            that.person.y=400;
            that.score=0;
            that.person.life=3;
            that.hinderimgArr=[];
            that.inita=0;
            that.y=that.person.y;
            that.run();
            startBtn.onclick=null;
        }
    },
    jump:function() {
        var that=this;
        var flag=true;
        document.onkeydown = function (e) {
            if (e.keyCode == 32) {
                if (that.flag2) {
                    for (var i in that.ts) {
                        clearInterval(that.ts[i]);
                    }
                    that.vrun.pause();
                    that.flag2 = false;
                }else{
                    that.ts.t1 = setInterval(function () {
                        that.move()
                    }, 50);
                    if (!that.flag) {
                        clearInterval(that.ts.t2);
                        that.ts.t2 = setInterval(function () {
                            that.move2();
                        }, 50);
                    }
                    that.flag2 = true;
                }
            }else if (e.keyCode == 38) {
                if (!flag) {
                    return;
                }
                that.flag = false;
                that.vjump.play();
                that.vrun.pause();
                that.person.status = "runs";
                that.ts.t2 = setInterval(function () {
                    that.move2();
                }, 50)
            }
        }
    },
    move2:function(){
        var that=this;
        that.inita+=that.speeda;
        if(that.inita>=180){
            that.person.y=that.y;
            clearInterval(that.ts.t2);
            that.flag=true;
            that.person.status="runs";
            that.vrun.play();
            that.inita=0;
        }else{
            var top=Math.sin(that.inita*Math.PI/180)*that.r;
            that.person.y=that.y-top;
            that.person.status="jumps";
        }
    },
    mouse:function() {
        var that = this;
        document.querySelector(".mask").onclick = function () {
            that.ball.play();
            that.isfire=true;
            that.zidan.x=that.person.x+that.person.width/2;
            that.zidan.y=that.person.y+that.person.height/2;
            that.zidan.speedx =5;
        }
     },


}
