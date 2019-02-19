$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo.png" alt="муызкальная академия MusicWay">'
		},
		offCanvas: {
			position  : 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false
	});

	$('select').selectize({
		create: true,
		sortField: 'text'
	});

	$('.top-button').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top-button').addClass("active");
		} else {
			$('.top-button').removeClass("active");
		};
	});

	//Equal Height
	$('.s-specialization .wrapper').equalHeights();


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

// $(window).on('load', function() {
// 	$('.preloader').delay(1000).fadeOut('slow');
// });
