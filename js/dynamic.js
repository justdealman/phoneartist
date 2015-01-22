$(document).ready(function() {
	$('.about').each(function() {
		var max = -1;
		$(this).children('div').find('ul li').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$(this).children('div').find('ul li').height(max);
	});
	if ( $('.about').length > 0 || $('.about').outerHeight() > 625 ) {
		$('.about').addClass('cover');
	}
	$('.business > div').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 1000,
		slideEasing: 'easeInOutQuad',
		play: 10000,
		pause: 2500
	});
	if ( $('.wrapper').height() > $(window).height() ) {
		$('body').append('<span class="gotop"></span>');
		$(window).bind('scroll', function() {
			if ( $(window).scrollTop() > $(window).height()/2 ) {
				$('.gotop').fadeIn(500);
			}
			else {
				$('.gotop').fadeOut(500);
			}
		});
		$('.gotop').bind('click', function() {
			$('body, html').animate({
				scrollTop: 0
			}, 1000);
		});
	}
	if ( $('.map').length > 0 ) {
		$('.map > div span').each(function() {
			$(this).css({
				'left': $(this).attr('data-left')+'px',
				'top': $(this).attr('data-top')+'px'
			});
		});
		$('.map > div span').hover(
			function() {
				$('.bubble').css({
					'left': $(this).offset().left+'px',
					'top': $(this).offset().top+'px',
				}).stop(true,true).fadeIn(500);
			},
			function() {
				$('.bubble').stop(true,true).fadeOut(500);
			}
		);
	}
	if ( $('.options').length > 0 ) {
		$('.options > ul li').bind('click', function() {
			$(this).parents('.options').css({
				'background': 'url("./img/option'+eval($(this).index()+1)+'_bg.jpg") no-repeat center center'
			});
			$(this).addClass('active').siblings().removeClass('active');
			$('.tabs > div:nth-child('+eval($(this).index()+1)+')').show().siblings().hide();
			return false;
		}).filter(':first').click();
		if ( $('.options').outerHeight() > 508 ) {
			$('.options').addClass('cover');
		}
	}
});