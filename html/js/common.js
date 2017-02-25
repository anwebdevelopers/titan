$(function() {

	//Адаптивный слайдер
	$(document).ready(function(){
	  $(".main-header__slider-wrapper").owlCarousel({
	  	loop: true,
	  	items: 1,
	  	autoplay: true
	  });
	});

	$(document).ready(function(){
	   var owl = $(".reviews__slider-wrapper");
	  $(".reviews__slider-wrapper").owlCarousel({
	  	loop: true,
	  	nav: true,
	  	navText: '',
	  	responsive:{
	        0:{
	            items:1,

	        },
	        1024:{
	            items:2,
	        }
	    }
	  	
	  });
	  $(".reviews__slider-nav-next").click(function(){
		owl.trigger("next.owl.carousel");
		});
	  $(".reviews__slider-nav-prev").click(function(){
		owl.trigger("prev.owl.carousel");
	  });
	});
	$(document).ready(function(){
	   var owl = $(".main-footer__slider-wrapper");
	  $(".main-footer__slider-wrapper").owlCarousel({
	  	loop: true,
	  	nav: true,
	  	navText: '',
	  	responsive:{
	        0:{
	            items:1,

	        },
	        768:{
	            items:3,

	        },
	        1024:{
	            items:4,
	        }
	    }
	  	
	  });
	  $(".main-footer__slider-next").click(function(){
		owl.trigger("next.owl.carousel");
		});
	  $(".main-footer__slider-prev").click(function(){
		owl.trigger("prev.owl.carousel");
	  });
	});

	//menu
	$(document).ready(function(){
		$(".main-header__nav-btn").click(function(){
			$(".main-header__nav-wrapper ul").slideToggle();
		});
	});
	//удаляем display:none при изменении экрана
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 767 && $(".main-header__nav-wrapper ul").is(':hidden')) {
	      $(".main-header__nav-wrapper ul").removeAttr('style');
	    }
	});
	

	//pagination

	$('.pag a').on('click', ScrollToReview);

	$('.pag-next').bind('click', function(){
	    var nextElement = $('.pag.active').next('li').find('a[data-toggle="tab"]');
	    if(nextElement.html()===undefined){
	        $('.pag').first().tab('show');
	    }else{
	        nextElement.tab('show');
	    }
	    ScrollToReview();
		return false;
	});

	$('.pag-prev').bind('click', function(){
	    var previousElement = $('.pag.active').prev('li').find('a[data-toggle="tab"]');
	    if(previousElement.html()===undefined){
	        $('.pag').last().tab('show');
	    }else{
	        previousElement.tab('show');
	    }
	    ScrollToReview();
		return false;
	});

	function ScrollToReview(){
		$('html, body').animate({
	        scrollTop: $("#review-block").offset().top - 20
	    }, 1500);
	}

	$('.main-reviews__item-link a').click(function() {
		$('html, body').animate({
	        scrollTop: $(".add-reviews").offset().top - 20
	    }, 1500);
	});
	
	

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#reviews").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
			}, 3000);
		});
		return false;
	});

	$('.add-reviews__form').on('submit', function(){
		if ( $(this).find('input').val() ) {
			alert('Ваш комментарий получен, после проверки модератором он будет размещен на сайте.');
		}
		return false;
	});

	$("#contacts").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
			}, 3000);
		});
		return false;
	});

	$('.contacts__form').on('submit', function(){
		if ( $(this).find('input').val() ) {
			alert('Вашe cообщение отправлено, мы свяжемся с вами как можно скорее.');
		}
		return false;
	});
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
