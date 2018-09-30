$(document).ready(function() {

	$('.vertical-slider').slick({
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		speed: 500,
		arrows: false,
		dots: true,
		appendDots: $('.dotted-slide'),
	});

	// ---- *** ---

	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	/* Popup Window End */

	$('.log-in__name').click(function(e){
		e.preventDefault();
		$('.log-in__info').toggleClass('active');
	});

	$(document).mouseup(function (e) {
		var container = $(".log-in");
		if (container.has(e.target).length === 0){
			$('.log-in__info').removeClass('active');
		}
	});

});