$(document).ready(function(){
	$('.introImg').removeClass('fadedLogoImg');
	$('.avro,.lifeScience').removeClass('fadedAvro');

	$(window).scroll(function(){
		fadeWatcher('h1,h2,h3,h4,h5,h6,p,img','fade');
	});

});


function fadeWatcher(selector,className){
	var arr = $(selector);
	for(var i = 0 ; i < arr.length ; i++){
		var windowPositionTop = $(window).scrollTop();
		var windowPositionBottom = $(window).height() + windowPositionTop;
		var topElement = $(arr[i]).offset().top;
		var bottomElement = $(arr[i]).height() + topElement;
		if(windowPositionBottom>topElement && windowPositionTop<bottomElement){
			$(arr[i]).removeClass(className);
		} else {
			$(arr[i]).addClass(className);	
		}
	}
}