function shape(canvas,copy,cobj){
    this.canvas=canvas;
    this.cobj=cobj;
    this.copy=copy;
    this.width=this.canvas.width;
    this.height=this.canvas.height;
    this.xpsize=10;
    this.canvasW=copy.offsetWidth;
    this.canvasW=copy.offsetHeight;
    this.type="line";
    this.style="stroke";
    this.strokeStyle="#000";
    this.fliiStyle="#000";
    this.lineWidth=1;
    this.bianNum=5;
    this.jiaoNum=5;
    this.history=[];
    this.isback=true;
    this.isshowxp=true;
}

shape.prototype= {
    init: function () {
        this.cobj.lineWidth = this.lineWidth;
        this.cobj.strokeStyle = this.strokeStyle;
        this.cobj.fillStyle = this.fillStyle;
    },
    draw: function () {
        var that = this;
        that.copy.onmousedown = function (e) {
            var sx = e.offsetX;
            var sy = e.offsetY;
            that.copy.onmousemove = function (e) {
                that.isback = true;
                that.init();
                var mx = e.offsetX;
                var my = e.offsetY;
                that.cobj.clearRect(0, 0, that.width, that.height);
                if (that.history.length > 0) {
                    that.cobj.putImageData(that.history[that.history.length - 1], 0, 0)
                }
                that.cobj.beginPath();
                that[that.type](sx, sy, mx, my);
            }
            that.copy.onmouseup = function () {
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
            }
        }
    },
    line: function (x, y, x1, y1) {
        var that = this;
        that.cobj.beginPath();
        that.cobj.moveTo(x, y);
        that.cobj.lineTo(x1, y1);
        that.cobj.stroke();
    },
    rect: function (x, y, x1, y1) {
        var that = this;
        that.cobj.beginPath();
        that.cobj.rect(x, y, x1 - x, y1 - y);
        that.cobj[this.style]();
    },
    arc: function (x, y, x1, y1) {
        var that = this;
        that.cobj.beginPath();
        var r = Math.abs(Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)));
        that.cobj.arc(x, y, r, 0, Math.PI * 2, true);
        that.cobj[this.style]();
    },
    duobian: function (x, y, x1, y1) {
        var angle = 360 / this.bianNum * Math.PI / 180;
        var r = Math.abs(Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)));
        this.cobj.beginPath();
        for (var i = 0; i < this.bianNum; i++) {
            this.cobj.lineTo(Math.cos(angle * i) * r + x, Math.sin(angle * i) * r + y);
        }
        this.cobj.closePath();
        this.cobj[this.style]();
    },
    duojiao: function (x, y, x1, y1) {
        var angle = 360 / (this.jiaoNum * 2) * Math.PI / 180;
        var r = Math.abs(Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y)));
        var r1 = r / 3;
        this.cobj.beginPath();
        for (var i = 0; i < this.jiaoNum * 2; i++) {
            if (i % 2 == 0) {
                this.cobj.lineTo(Math.cos(angle * i) * r + x, Math.sin(angle * i) * r + y);
            } else {
                this.cobj.lineTo(Math.cos(angle * i) * r1 + x, Math.sin(angle * i) * r1 + y);
            }
        }
        this.cobj.closePath();
        this.cobj[this.style]();
    },
    pencil: function () {
        var that = this;
        that.copy.onmousedown = function (e) {
            var sx = e.offsetX;
            var sy = e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(sx, sy);
            that.copy.onmousemove = function (e) {
                that.init();
                var mx = e.offsetX;
                var my = e.offsetY;
                that.cobj.clearRect(0, 0, that.width, that.height);
                if (that.history.length > 0) {
                    that.cobj.putImageData(that.history[that.history.length - 1], 0, 0);
                }
                that.cobj.lineTo(mx, my);
                that.cobj.stroke();

            }
            that.copy.onmouseup = function () {
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
            }
        }
    },
    eraser:function (xpobj) {
            var that = this;
            that.copy.onmousemove = function (e) {
                if(!that.isshowxp){return false;}
                var mx = e.offsetX;
                var my = e.offsetY;
                var lefts=mx - that.xpsize/2;
                var tops=my - that.xpsize/2;
                if (lefts<0) {lefts = 0;}
                if (lefts>that.width-that.xpsize) {
                    lefts=that.width-that.xpsize;
                }
                if (tops<0) {tops = 0;}
                if (tops>that.height-that.xpsize) {
                    tops=that.height-that.xpsize;
                }
                xpobj.css({
                    display:"block",
                    left:lefts,
                    top:tops,
                    width:that.xpsize+"px",
                    height:that.xpsize+"px"
               })
        }
        that.copy.onmousedown = function () {
            that.copy.onmousemove = function (e) {
                var mx = e.offsetX;
                var my = e.offsetY;
                var lefts=mx - that.xpsize/2;
                var tops=my - that.xpsize/2;
                if (lefts<0) {lefts = 0;}
                if (lefts>that.width-that.xpsize) {
                    lefts=that.width-that.xpsize;
                }
                if (tops<0) {tops = 0;}
                if (tops>that.height-that.xpsize) {
                    tops=that.height-that.xpsize;
                }
                xpobj.css({
                    display:"block",
                    left:lefts,
                    top:tops,
                    width:that.xpsize+"px",
                    height:that.xpsize+"px"
                })
                that.cobj.clearRect(lefts,tops,that.xpsize,that.xpsize);
            }

            that.copy.onmouseup = function () {
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
                that.eraser(xpobj);
            }

        }
    },
    select:function(selectobj){
        var that=this;
        that.copy.onmousedown=function(e){
            var sx= e.offsetX;
            var sy= e.offsetY;
            var minx,miny,w,h;
            that.init();
            that.copy.onmousemove=function(e){
                var ex= e.offsetX;
                var ey= e.offsetY;
                minx=sx>ex?endx:sx;
                miny=sy>ey?endy:sy;
                w=Math.abs(sx-ex);
                h=Math.abs(sy-ey);
                selectobj.css({
                    left:minx,
                    top:miny,
                    width:w,
                    height:h,
                    display:"block"
                })
            }
            that.copy.onmouseup=function(){
                that.copy.onmouseup=null;
                that.copy.onmousemove=null;
                that.temp=that.cobj.getImageData(minx,miny,w,h);
                that.cobj.clearRect(minx,miny,w,h);
                that.history.push(that.cobj.getImageData(0,0,that.canvas.width,that.canvas.height));
                that.cobj.putImageData(that.temp,minx,miny);
                that.drag(minx,miny,w,h,selectobj);
            }
        }
    },
    drag:function(x,y,w,h,selectobj) {
        var that = this;
        that.copy.onmousemove = function (e) {
            selectareaobj.css("cursor", "move");
        }
        that.copy.onmousedown = function (e) {
            var ax = selectobj.position().left;
            var ay = selectobj.position().top;
            var ox = e.clientX;
            var oy = e.clientY;
            that.copy.onmousemove = function (e) {
                that.cobj.clearRect(0, 0, that.canvas.width, that.canvas.height);
                if (that.history.length != 0) {
                    that.cobj.putImageData(that.history[that.history.length - 1], 0, 0);
                }
                var mx = e.clientX;
                var my = e.clientY;
                var lefts = (mx - ox) + ax;
                var tops = (my - oy) + ay;
                if (lefts < 0) { lefts = 0;}
                if (lefts > that.canvas.widht - w) {
                    lefts = that.canvas.width - w;
                }
                if (tops < 0) { tops = 0; }
                if (tops > that.canvas.height - h) {
                    tops = that.canvas.height - h;
                }
                selectobj.css({
                    left: lefts,
                    top: tops
                })
                x = lefts;
                y = tops;
                that.cobj.putImageData(that.temp, lefts, tops);
                that.select.style.border = "1px dotted #000";
            }
            that.copy.onmouseup = function () {
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
                that.drag(x, y, w, h, selectareaobj);
                that.select.style.border = "none";
            }
        }
    },
    //图像处理
    fanxiang:function(dataobj,x,y){
        //alert(123);
        for(var i=0;i<dataobj.width*dataobj.height;i++){
            dataobj.data[i*4+0]=255-dataobj.data[i*4+0];
            dataobj.data[i*4+1]=255-dataobj.data[i*4+1];
            dataobj.data[i*4+2]=255-dataobj.data[i*4+2];
            dataobj.data[i*4+3]=255;
        }
        this.cobj.putImageData(dataobj,x,y);
    },
    blur:function (dataobj,num,x,y) {
        var width = dataobj.width, height = dataobj.height;
        var arr=[];
        var num = num;
        for (var i = 0; i <height; i++) {//行
            for (var j = 0; j < width; j++) {//列  x
                var x1=j+num>width?j-num:j;
                var y1=i+num>height?i-num:i;
                var dataObj = this.cobj.getImageData(x1, y1,num, num);
                var r = 0, g = 0, b = 0;
                for (var k = 0; k < dataObj.width * dataObj.height; k++) {
                    r += dataObj.data[k * 4 + 0];
                    g += dataObj.data[k * 4 + 1];
                    b += dataObj.data[k * 4 + 2];
                }
                r = parseInt(r / (dataObj.width * dataObj.height));
                g = parseInt(g / (dataObj.width * dataObj.height));
                b = parseInt(b / (dataObj.width * dataObj.height));
                arr.push(r,g,b,255);
            }
        }
        for(var i=0;i<dataobj.data.length;i++){
            dataobj.data[i]=arr[i]
        }
        this.cobj.putImageData(dataobj,x,y);
    },
    msk:function (dataobj,num,x,y) {
    var width = dataobj.width, height = dataobj.height;
    var num = num;
    var w = width / num;
    var h = height / num;
    for (var i = 0; i < num; i++) {//行
        for (var j = 0; j < num; j++) {//列  x
            var dataObj = this.cobj.getImageData(j * w, i * h, w, h);
            var r = 0, g = 0, b = 0;
            for (var k = 0; k < dataObj.width * dataObj.height; k++) {
                r += dataObj.data[k * 4 + 0];
                g += dataObj.data[k * 4 + 1];
                b += dataObj.data[k * 4 + 2];
            }
            r = parseInt(r / (dataObj.width * dataObj.height));
            g = parseInt(g / (dataObj.width * dataObj.height));
            b = parseInt(b / (dataObj.width * dataObj.height));
            //console.log(r + "--" + g + "--" + b);
            for (var k = 0; k < dataObj.width * dataObj.height; k++) {
                dataObj.data[k * 4 + 0] = r;
                dataObj.data[k * 4 + 1] = g;
                dataObj.data[k * 4 + 2] = b;
            }
            this.cobj.putImageData(dataObj, x + j * w, y+i * h);
        }
    }
}




}