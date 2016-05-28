$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.advantages_wrap ul').bxSlider({
	 adaptiveHeight: true,
	 mode: 'vertical'
	});
});