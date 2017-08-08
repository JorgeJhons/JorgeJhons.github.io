$(document).ready(function(){
	$('.btn-up').hide();

	$(window).scroll(function(){
		if ($(this).scrollTop()>50) {
			$('.btn-up').fadeIn('500');
		} else {
			$('.btn-up').fadeOut('500');
		}
	});

	$('.btn-up').click(function(){
		$('body,html').animate({
			scrollTop:0
		},500);
	});
});