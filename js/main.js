$(document).ready(function(){


	//Dropdown menu hover effect.
	$('.menu li').hover(
		function() {
			/* Stuff to do when the mouse enters the element */
			// $(this).find('.dropdown-menu').fadeIn('fast');
			$(this).find('.dropdown-menu').fadeIn('fast');	
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			// $(this).find('.dropdown-menu').fadeOut('fast');
			$(this).find('.dropdown-menu').fadeOut('fast');
			}
	);
	//Sub-menu dropdown hover effect. 
	$('#dropdown-l2-p').hover(
		function() {
			/* Stuff to do when the mouse enters the element */
			$('#dropdown-l2').fadeIn('fast');
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			$('#dropdown-l2').fadeOut('fast');
	});
	//Mobile menu slide down effect.
	$('.inner-m-menu').click(function() {
		/* Act on the event */
		$('.mobile-menu .inner-m-menu > ul').slideToggle('fast');
	});

	//Gallery change background on click
	var slideNumber = null;
	$('.img_link').on('click', function() {
		/* Act on the event */
		slideNumber = $(this).attr('id')[$(this).attr('id').length - 1];
		$('.img_holder').css({
			backgroundImage : 'url(\'../img/g'+slideNumber+'.jpg\')'
		});
		
	});





});