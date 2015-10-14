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
