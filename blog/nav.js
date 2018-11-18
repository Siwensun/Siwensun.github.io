
//window.onscroll = function() {scrollFunction()};

//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//    document.getElementById("navbar").style.top = "0";
//  } else {
//    document.getElementById("navbar").style.top = "-50px";
//  }
//}
var bodyClass = document.body.classList,
    lastScrollY = 0;
window.addEventListener('scroll', function(){
  var st = this.scrollY;
  // 　是否向上滑动页面
  if( st < lastScrollY) {
    bodyClass.remove('hideUp');
  }else{
    bodyClass.add('hideUp');
  }
  lastScrollY = st;
});
