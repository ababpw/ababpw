function y_ipad(){
 var ua = navigator.userAgent.toLowerCase();
 if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android")
 {
  //移动端处理
 }
}
var text="总在不停寻觅你的踪影，无论十字路口抑或梦境之中，明知你不在，却依然不停地找寻。.";
var delay=125;
var i=0;
function scrollit(){
txt.innerText=text.slice(0,i++);
if(i>text.length){
    i=0;
	$('#fos').fadeIn(4000);
    return;
}
else {
    setTimeout("scrollit()",delay);
  }
}

