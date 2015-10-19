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
    if(LastPointer<window.pageYOffset){
    	document.getElementById("nav-wrap").className="nav-closed";
    }else{
    	document.getElementById("nav-wrap").className="";
    }
    LastPointer = window.pageYOffset;
    /*document.title = LastPointer;*/
}



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


