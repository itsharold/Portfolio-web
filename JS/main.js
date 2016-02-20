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
/*animate on scroll*/
var $animation_elements = $('.bar');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
/*end of animate on scroll*/


/*Transition on load page*/
$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(1000);



$('a').not('.menu a, a.sb-close').click(function() {
    if(this.href.indexOf("http")==-1){
        alert(this.href);
        event.preventDefault();

        newLocation = this.href;

        $('body').fadeOut(1000, newpage);
    }
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

scrollme.init_if = function() { return( $( window ).width() > 500 ); }

