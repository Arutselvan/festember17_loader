//window.onload = function () { $('.loader').fadeOut(); }
anim();
function anim(){
	$(".koired").animate({height: "150px",width: "150px"},2500);
	$(".koiwhite").animate({height: "50px",width: "50px"},2500);
	$(".koired").animate({height: "50px",width: "50px"},2500);
	$(".koiwhite").animate({height: "150px",width: "150px"},2500,anim);
}
