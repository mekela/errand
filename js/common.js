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

	//menu
	$( ".menu_trigger" ).click(function() {
	  $( this ).next().slideToggle("slow");
	});



});
