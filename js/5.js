function y_ipad(){
 var ua = navigator.userAgent.toLowerCase();
 if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android")
 {
  //移动端处理
 }
}
var text="该以怎样的速度去生活，才能与你重逢.";
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

