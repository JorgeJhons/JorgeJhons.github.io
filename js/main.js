$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop()>0) {
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