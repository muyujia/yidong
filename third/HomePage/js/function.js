// 2016.8.29
// 1.解决通过类名获取元素的兼容问题
function getClass(classname,father){
// 默认值的设置
var father=father||document;
// 判断浏览器
// 现代浏览器的判断
if (father.getElementsByClassName){
	return father.getElementsByClassName(classname);
   // alert("现代")
}
// IE浏览器的判断
else{
// 定义一个all获取全部的标签名
	var all=father.getElementsByTagName("*")
// 定义一个新的数组
	var newarr=[];
// 所有标签名的遍历
	for (var i = 0; i < all.length; i++) {
	if(checkrep(classname,all[i].className)){
		newarr.push(all[i]);
	}
};
// 返回新数组的值
	return newarr;
	// alert("ie");		
 }
}
// 调用函数实现条件真假判断
	function checkrep(val,string){
// 将字符串转换为数组
    var arr= string.split(" ");
    // 数组的遍历
	for(var i in arr){
	// 判断数组中的值与字符串中的值是否相等
		if(val==arr[i]){
		// 条件为真返回真值
			return true;
		}
	}
	// 循环结束条件为假，返回false
	return false;
}


// 2016.8.30
// 2.解决获取样式的值的问题
function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}


// 2016.8.31
// 3.获取元素的兼容函数(可以支持标签、id、class)
function $(selector,father){
 var  father=father||document;
 // 判断字符里是否有空格，若有，用""来代替
  if(typeof selector=="string"){
  	 selector=selector.replace(/^\s*|\s*$/g,"");
    if(selector.charAt(0)=="."){
    	return getClass(selector.substring(1),father);
    }else if(selector.charAt(0)=="#"){
    	return document.getElementById(selector.substring(1));
    }else if(/^[a-z][1-6a-z]*/g.test(selector)){
    	return father.getElementsByTagName(selector);
    }
  }else if(typeof selector=="function" ){
  	// window.onload=function(){
  	// 	selector();
    addEvent(window,"load",function(){
      selector();
    })
  }  
}




// 2016.9.2
// 4.获取所有的子节点的兼容函数
// father:指定父节点
// type："a"只有元素节点
//       "b" 元素节点+文本节点
function getChild(father,type){
  type=type||"a";
  var all=father.childNodes;
  var newarr=[];
  // 遍历子节点的集合
  for (var i = 0; i <all.length; i++) {
    if(type=="a"){  //判断是何种类型的节点，此处为元素节点
      if(all[i].nodeType==1){
      newarr.push(all[i]);  //将子节点内容传入新数组中
      }
   }else if(type=="b"){   //此处为元素节点+文本节点
    if(all[i].nodeType==1||all[i].nodeType==3  
        &&all[i].nodeValue.replace(/^\s*|\s*$/g,"")!=""){
       newarr.push(all[i]);
     }
   }
   
  }; 
  return newarr;
}



//5. 获取第一个子节点
function getFirst(father){
  return getChild(father)[0];
}

// 6.获取最后一个子节点
function getLast(father){
  return getChild(father)[getChild(father).length-1];
}


// 7.获取指定的子节点
function getNum(father,xiabiao){
  return getChild(father)[xiabiao];
}


// 8.获取下一个兄弟节点
function getNext(obj){
  var next=obj.nextSibling;
  if(!next){
    return false;
  }
  while(next.nodeType==3||next.nodeType==8){
    next=next.nextSibling;
    if(!next){
    return false;
    }
  }
   return next;
}

// 9.获取上一个兄弟节点
function getPre(obj){
  var pre=obj.previousSibling;
  if(!pre){
    return false;
  }
  while(pre.nodeType==3||pre.nodeType==8){
    pre=pre.previousSibling;
    if(!pre){
    return false;
    }
  }
   return pre;
}

// 2016.9.6
// 10。事件绑定的兼容函数
function addEvent(obj,event,fun){
  obj[fun]=function(){
     fun.call(obj);
  }
  if(obj.attachEvent){
    obj.attachEvent("on"+event,obj[fun]);
  }else{
    obj.addEventListener(event,obj[fun],false)
  }
}



// 11.移除事件的兼容函数
function removeEvent(obj,event,fun){
  if(obj.detachEvent){
     obj.detachEvent("on"+event,obj[fun])
  }else{
    obj.removeEventListener(event,obj[fun],false)
  }
}



// 2016.9.7
// 12.鼠标的滚轮事件
function mouseWheel(obj,up,down){
  if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFn);//IE opera
  }else if(obj.addEventListener){
    obj.addEventListener("mousewheel",scrollFn,false); //chrome,safari,-webkit-
    obj.addEventListener("DOMMouseScroll",scrollFn,false); //ff
  }

function scrollFn(e){
  e=e||window.event;
  if(e.preventDefault){
    e.preventDefault;
  }else{
    e.returnValue=false;
  }
  var dir=e.detail||e.wheelDelta;
  if(dir==-3||dir==120){
    if(up){
      up()
    }
  }else if(dir==3||dir==-120){
     if(down){
      down()
    }
  }
}
}


// 13.2016.9.8
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/








