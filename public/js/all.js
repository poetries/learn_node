"use strict";function Pencil(){var e=0;canvas.onmousedown=function(n){var n=window.event||n,t=n.pageX-this.offsetLeft,a=n.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(t,a),e=1},canvas.onmousemove=function(n){n=window.event||n;var t=n.pageX-this.offsetLeft,a=n.pageY-this.offsetTop;e&&(ctx.lineTo(t,a),ctx.stroke())},canvas.onmouseup=function(){e=0},canvas.onmouseout=function(){e=0}}function Pen(){setLineWidth(0)}function Tuya(){setLineWidth(4)}function setLineWidth(e){switch(e){case 0:ctx.lineWidth=1;break;case 1:ctx.lineWidth=3;break;case 2:ctx.lineWidth=5;break;case 3:ctx.lineWidth=8;break;case 4:ctx.lineWidth=30;break;default:ctx.lineWidth=1}}function LineW1(){setLineWidth(0)}function LineW3(){setLineWidth(1)}function LineW5(){setLineWidth(2)}function LineW8(){setLineWidth(3)}function Line(){canvas.onmousedown=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(n,t)},canvas.onmousemove=null,canvas.onmouseout=null,canvas.onmouseup=function(e){var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;ctx.lineTo(n,t),ctx.closePath(),ctx.stroke()}}function Square(){canvas.onmousedown=function(e){e=e||window.event,rectX=e.pageX-this.offsetLeft,rectY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=n-rectX,o=t-rectY;ctx.strokeRect(rectX,rectY,a,o)},canvas.onmousemove=null,canvas.onmouseout=null}function SquareFill(){canvas.onmousedown=function(e){e=e||window.event,rectX=e.pageX-this.offsetLeft,rectY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=n-rectX,o=t-rectY;ctx.fillRect(rectX,rectY,a,o)},canvas.onmousemove=null,canvas.onmouseout=null}function Poly(e){e=e||window.event,canvas.onmousedown=function(e){e=e||window.event,polyX=e.pageX-this.offsetLeft,polyY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(n,t);var a=2*polyX-n,o=t;ctx.lineTo(a,o);var i=2*(n-polyX),c=n-polyX,l=Math.sqrt(i*i-c*c);ctx.lineTo(polyX,t-l),ctx.closePath(),ctx.stroke()},canvas.onmousemove=null,canvas.onmouseout=null}function PolyFill(e){e=e||window.event,canvas.onmousedown=function(e){e=e||window.event,polyX=e.pageX-this.offsetLeft,polyY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;ctx.beginPath(),ctx.moveTo(n,t);var a=2*polyX-n,o=t;ctx.lineTo(a,o);var i=2*(n-polyX),c=n-polyX,l=Math.sqrt(i*i-c*c);ctx.lineTo(polyX,t-l),ctx.closePath(),ctx.fillStyle=color,ctx.fill()},canvas.onmousemove=null,canvas.onmouseout=null}function Circular(){canvas.onmousedown=function(e){e=e||window.event,arcX=e.pageX-this.offsetLeft,arcY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=n-arcX,o=t-arcY,i=Math.sqrt(a*a+o*o);ctx.beginPath(),ctx.arc(arcX,arcY,i,0,360,!1),ctx.closePath(),ctx.stroke()},canvas.onmousemove=null,canvas.onmouseout=null}function CircularFill(){canvas.onmousedown=function(e){e=e||window.event,arcX=e.pageX-this.offsetLeft,arcY=e.pageY-this.offsetTop},canvas.onmouseup=function(e){e=e||window.event;var n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=n-arcX,o=t-arcY,i=Math.sqrt(a*a+o*o);ctx.beginPath(),ctx.arc(arcX,arcY,i,0,360,!1),ctx.closePath(),ctx.fillStyle=color,ctx.fill()},canvas.onmousemove=null,canvas.onmouseout=null}function Color(){$(".showColor").bigColorpicker(function(e,n){color=n,ctx.strokeStyle=color}),$("#f333").bigColorpicker("f3","L",6)}function FrontColor(){canvas.onmousedown=function(e){ctx.fillStyle=color,ctx.fillRect(0,0,1100,550)},canvas.onmouseup=null,canvas.onmouseout=null,canvas.onmousemove=null}function Straw(){canvas.onmousedown=function(e){var e=e||window.event,n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=ctx.getImageData(n,t,1,1),o="rgb("+a.data[0]+","+a.data[1]+","+a.data[2]+")";ctx.strokeStyle=o,ctx.fillStyle=o,Pencil()},canvas.onmousemove=null,canvas.onmouseout=null,canvas.onmouseup=null}function Magnifier(){var e=window.prompt("请输入要放大的百分比(只接受整型)","100"),n=1090*e/100,t=550*e/100;canvas.style.widht=parseInt(n)+"px",canvas.style.height=parseInt(t)+"px"}function Font(){canvas.onmousedown=function(e){var e=e||window.event,n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop,a=window.prompt("请输入文字","");null!=a&&(ctx.fillStyle=color,ctx.fillText(a,n,t))},canvas.onmousemove=null,canvas.onmouseup=null,canvas.onmouseout=null}function Eraser(){canvas.onmousedown=function(e){var e=e||window.event,n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;ctx.clearRect(n-ctx.lineWidth,t-ctx.lineWidth,2*ctx.lineWidth,2*ctx.lineWidth),eraserFlag=1},canvas.onmousemove=function(e){var e=e||window.event,n=e.pageX-this.offsetLeft,t=e.pageY-this.offsetTop;eraserFlag&&(ctx.clearRect(n-ctx.lineWidth,t-ctx.lineWidth,3*ctx.lineWidth,3*ctx.lineWidth),saveImageToAry())},canvas.onmouseup=function(e){eraserFlag=0},canvas.onmouseout=function(e){eraserFlag=0}}function CancelPrev(){cancelIndex--,ctx.clearRect(0,0,canvas.width,canvas.height);var e=new Image,n=cancelList.length-1-cancelIndex,t=cancelList[n];e.src=t,e.onload=function(){ctx.drawImage(e,0,0,e.width,e.height,0,0,canvas.width,canvas.height)}}function Redo(){cancelIndex++,ctx.clearRect(0,0,canvas.width,canvas.height);var e=new Image,n=cancelList.length-1-cancelIndex,t=cancelList[n];e.src=t,e.onload=function(){ctx.drawImage(e,0,0,e.width,e.height,0,0,canvas.width,canvas.height)}}function ClearSceen(){ctx.clearRect(0,0,1100,550)}function Download(){var e=canvas.toDataURL("image/png"),n=function(e,n){var t=document.createElementNS("http://www.w3.org/1999/xhtml","a");t.href=e,t.download=n;var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(a)};n(e,"canvas.png")}function Saveimg(){save()}function init(){Pencil(),setLineWidth(2),initDrag()}function handleDragOver(e){e.stopPropagation(),e.preventDefault()}function isImage(e){switch(e){case"image/jpeg":case"image/png":case"image/gif":case"image/bmp":case"image/jpg":return!0;default:return!1}}function handleFileSelect(e){e.stopPropagation(),e.preventDefault();for(var n,t=e.dataTransfer.files,a=0;n=t[a];a++){var o=n.type?n.type:"n/a";reader=new FileReader,isImg=isImage(o),isImg&&(reader.onload=function(e){return function(e){var n=new Image;n.src=e.target.result;var t,a,o=0,i=0,c=960,l=580,s=1,r=n.width,d=n.height;a=c/r,t=l/d,(a<1||t<1)&&(s=a<=t?a:t),s<1&&(r*=s,d*=s),o=(c-r)/2,i=(l-d)/2,n.onload=function(){ctx.drawImage(n,0,0,n.width,n.height,o,i,r,d)}}}(n),reader.readAsDataURL(n))}}function item(e,n){var t='<div class="itemsDiv"><div class="item"><img src = '+e+' id="history_'+n+'"/><a href="javascript:void(0);" id="history_del_'+n+'">删除</a><a href="'+e+'" id="history_download_'+n+'" download="picture.png">下载</a></div></div>';$("#showHistory h2").after(t).fadeIn(400)}function addEventHander(e,n,t,a){document.attachEvent?e.attachEvent("on"+n,t):document.addEventListener&&e.addEventListener(n,t,a)}function getId(e){return document.getElementById(e)}var pencil=getId("pencil"),pen=getId("pen"),tuya=getId("tuya"),line=getId("line"),square=getId("square"),circular=getId("circular"),poly=getId("poly"),squareFill=getId("squareFill"),circularFill=getId("circularFill"),polyFill=getId("polyFill"),lineW_1=getId("lineW_1"),lineW_3=getId("lineW_3"),lineW_5=getId("lineW_5"),lineW_8=getId("lineW_8"),color=getId("color"),frontColor=getId("frontColor"),straw=getId("straw"),font=getId("font"),eraser=getId("eraser"),magnifier=getId("magnifier"),cancelPrev=getId("cancelPrev"),redo=getId("redo"),clearSceen=getId("clearSceen"),download=getId("download"),saveImg=getId("saveImg"),penType=[pencil,pen,tuya],lineType=[line,square,circular,poly,squareFill,circularFill,polyFill],colorType=[color,frontColor,straw,font,eraser,magnifier],funcType=[cancelPrev,redo,clearSceen,download,saveImg],lineWidths=[lineW_1,lineW_3,lineW_5,lineW_8],canvas=getId("canvas"),ctx=canvas.getContext("2d"),rectX=0,rectY=0,polyX=0,polyY=0,arcX=0,arcY=0,eraserFlag=0,color="#000",cancelList=new Array,cancelIndex=0,color="#000000",saveImageToAry=function(){cancelIndex=0;var e=canvas.toDataURL();cancelList.push(e)};$("#header ul.tool li.line").click(function(){$("#header .lineType").slideDown(300)}),$("#header .lineType p").click(function(){$(this).addClass("active").siblings().removeClass("active"),$("#header .lineType").slideUp(500)}),$("#header ul.tool li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$("#header ul.tool .lineType p").click(function(){$(this).addClass("active").siblings().removeClass("active")}),addEventHander(penType[0],"click",Pencil,!1),addEventHander(penType[1],"click",Pen,!1),addEventHander(penType[2],"click",Tuya,!1),addEventHander(lineType[0],"click",Line,!1),addEventHander(lineType[1],"click",Square,!1),addEventHander(lineType[2],"click",Circular,!1),addEventHander(lineType[3],"click",Poly,!1),addEventHander(lineType[4],"click",SquareFill,!1),addEventHander(lineType[5],"click",CircularFill,!1),addEventHander(lineType[6],"click",PolyFill,!1),addEventHander(colorType[0],"click",Color,!1),addEventHander(colorType[1],"click",FrontColor,!1),addEventHander(colorType[2],"click",Straw,!1),addEventHander(colorType[3],"click",Font,!1),addEventHander(colorType[4],"click",Eraser,!1),addEventHander(colorType[5],"click",Magnifier,!1),addEventHander(funcType[0],"click",Redo,!1),addEventHander(funcType[1],"click",CancelPrev,!1),addEventHander(funcType[2],"click",ClearSceen,!1),addEventHander(funcType[3],"click",Download,!1),addEventHander(funcType[4],"click",Saveimg,!1),addEventHander(lineWidths[0],"click",LineW1,!1),addEventHander(lineWidths[1],"click",LineW3,!1),addEventHander(lineWidths[2],"click",LineW5,!1),addEventHander(lineWidths[3],"click",LineW8,!1),window.onload=init;var initDrag=function(){var e=document.getElementById("canvas");e.addEventListener("dragover",handleDragOver,!1),e.addEventListener("drop",handleFileSelect,!1)},putStorage=function(e,n){window.localStorage.setItem(e,n)},getStorage=function(e){return window.localStorage.getItem(e)},removeStorage=function(e){window.localStorage.removeItem(e)},callBackStorage=function(e){initHistorty()},initHistorty=function(){for(var e=1;e<25;e++){var n=getStorage(e);null!=n&&""!=n&&item(n,e)}},save=function(){for(var e=1;e<=100;e++){var n=getStorage(e);if(null==n||""==n)return putStorage(e,canvas.toDataURL()),void item(canvas.toDataURL(),e)}};$(function(){window.addEventListener?window.addEventListener("storage",callBackStorage,!1):window.attachEvent("onstorage",callBackStorage),initHistorty(),$(".item a").live("click",function(){var e=$(this).attr("id");if("-1"!=e.indexOf("del")){var n=e.substring(e.length-1);removeStorage(n),$(this).parent().fadeOut(200,function(){$(this).remove()})}})});