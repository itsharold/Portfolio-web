function OpenSB(){var e=document.getElementById("sidebar");e.className="sb-open"}function CloseSB(){var e=document.getElementById("sidebar");e.className=" "}var LastPointer=0;window.onscroll=function(){LastPointer<window.pageYOffset&&LastPointer>=0?document.getElementById("nav-wrap").className="nav-closed":document.getElementById("nav-wrap").className="",LastPointer=window.pageYOffset},$(document).ready(function(){function e(){window.location=newLocation}$("body").css("display","none"),$("body").fadeIn(1e3),$("a").not(".menu a, a.sb-close").click(function(){event.preventDefault(),newLocation=this.href,$("body").fadeOut(1e3,e)})}),$(document).ready(function(){$(".owl-carousel").owlCarousel({items:1,loop:!0,nav:!0,navText:["<span class='arrows-arrow-left'></span>","<span class='arrows-arrow-right'></span>"]})}),$(document).ready(function(){$(".counter").counterUp({delay:10,time:1e3})}),$(document).ready(function(){$("#vision-slideshow").hover(function(){$(this).attr("src","../Images/slideshow.gif")},function(){$(this).attr("src","../Images/slideshow.jpg")})});