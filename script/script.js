$(document).ready(function(){
		
			var scroll_start = 0;
			var offset = $('#start').offset();

				$(document).scroll(function() {
					scroll_start=$(this).scrollTop();
					if(scroll_start > offset.top) {
						$(".navbar").addClass('bg-cloud').removeClass('borderNav').addClass('brand');
						}
						else {
							$(".navbar").removeClass('bg-cloud').addClass('borderNav');
							
						}
					}
				);
			
		$('.page-scroll a').click( function() {
			var page= $(this).attr('href');
			var speed = 500;

			$('html, body').animate({ scrollTop: $(page).offset().top + 50 }, speed);
			return false;		
		}); 
	
});
