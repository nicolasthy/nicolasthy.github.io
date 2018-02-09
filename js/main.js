$(document).ready(function($){
	$(window).scroll(function() {
		animateFeaturedCard($(window).scrollTop());
	});
});

var animateFeaturedCard = function(scroll) {
	$('.card-featured').each(function() {
		var cardContent = $(this).find('.card-featured_content');
		var cardContentOffsetTop = 75;
		var cardContentTranslate = cardContentOffsetTop - (scroll / 10);
		
		cardContent.css('top', cardContentTranslate);
	});
}
