function OpenSB (){
	/*alert("");*/
	var sidebar = document.getElementById("sidebar");
	sidebar.className="sb-open";
}
function CloseSB (){
	/*alert("");*/
	var sidebar = document.getElementById("sidebar");
	sidebar.className=" ";
}

var LastPointer = 0;
window.onscroll = function(){
    if(LastPointer<window.pageYOffset && LastPointer>=0){ 
    	document.getElementById("nav-wrap").className="nav-closed";
    }else{
    	document.getElementById("nav-wrap").className="";
    }
    LastPointer = window.pageYOffset;
    /*document.title = LastPointer;*/
}


/*Transition on load page*/
$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(1000);



$('a').not('.menu a, a.sb-close').click(function() {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(1000, newpage);

});

function newpage() {

window.location = newLocation;

}

});
/*!Transition on load page*/


/*Slider*/

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop:true,
    nav:true,
    navText: ["<span class='arrows-arrow-left'></span>","<span class='arrows-arrow-right'></span>"]
  });
});

/*!slider*/

/*counter*/
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
/*!counter*/


/*gif on hover*/
$(document).ready(function()
{
    $("#vision-slideshow").hover(
        function()
        {
            $(this).attr("src", "../Images/slideshow.gif");
        },
        function()
        {
            $(this).attr("src", "../Images/slideshow.jpg");
        }                         
    );                  
});
/*!gif on hover*/
