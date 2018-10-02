$(document).ready(function() {

	 /* Scroller */
	 $(window).scroll(function() {
	 	var scroll = $(window).scrollTop();

	 	if ($('body').find('.scroller_screen').length) {
	 		var scroller = $('.scroller_screen');
	 		if (scroll > scroller.offset().top) {
	 			scroller.addClass('scroll_start');

	 			if (scroll > (scroller.offset().top + $('.scroller_screen').height() - $(window).height())) {
	 				scroller.addClass('scroll_end');
	 			} 
	 			else {
	 				scroller.removeClass('scroll_end');
	 			}
	 		} 
	 		else {
	 			scroller.removeClass('scroll_start');
	 		}
	 	}

	 	$('.recent_work').each(function() {
	 		var scrollerScreen = $(this);
	 		var scrollerPosition = scrollerScreen.offset().top - ($(window).height() / 2);
	 		if (scroll > scrollerPosition) {
	 			var scrollerData = scrollerScreen.data('img');
	 			var colorData = scrollerScreen.data('color');
	 			scrollerScreen.addClass('active').siblings().removeClass('active');
	 			$('.recent_img_wrap').find('.recent_work_img.'+colorData).addClass('active').siblings().removeClass('active');
	 			$('.recent_work_cover.'+colorData).addClass('active').siblings().removeClass('active');
	 			$('.items__recent-slide.'+colorData).addClass('active').siblings().removeClass('active');
	 		}
	 	});
	 }).scroll();


	var inP = $( '.default-input, .default-textarea' );

	inP.on('blur', function () {
		if (!this.value) {
			$(this).parent('.form-items').removeClass('focus');
		} else {
			$(this).parent('.form-items').addClass('focus');
		}
	}).on('focus', function () {
		$(this).parent('.form-items').addClass('focus');
		$('.default__form-button').removeClass('active');
		$('.form-items').removeClass('shake');
	});

	//accordeon
	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
	$(".accordeon dd").first().show();

	$('.vertical-slider').slick({
		vertical: true,
		verticalSwiping: true,
		infinite: false,
		speed: 500,
		arrows: false,
		dots: true,
		appendDots: $('.dotted-slide'),
	});

	// $('.instagram-carousel').slick({
	// 	dots: false,
 //  infinite: true,
 //  speed: 1000,
 //  slidesToShow: 1,
 //  centerMode: true,
 //  centerPadding: '60px',
 //  variableWidth: true
	// });

	$('.instagram-carousel').owlCarousel({
		loop:true,
		margin:25,
		center:true,
		autoWidth:true,
		nav:false,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 1000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});

	// ---- *** ---

	/* Popup Window */

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	/* Popup Window End */

	// $('.log-in__name').click(function(e){
	// 	e.preventDefault();
	// 	$('.log-in__info').toggleClass('active');
	// });

	// $(document).mouseup(function (e) {
	// 	var container = $(".log-in");
	// 	if (container.has(e.target).length === 0){
	// 		$('.log-in__info').removeClass('active');
	// 	}
	// });

});