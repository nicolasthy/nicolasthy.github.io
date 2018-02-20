$(document).ready(function($){
	$(window).scroll(function() {
		// animateFeaturedCard($(window).scrollTop());
		// animateProfil($(window).scrollTop());
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

var animateProfil = function(scroll) {
	$('.profil_picture--box').each(function() {
		var profilBox = $(this);
		var image = $(this).find('img').first();
		var profilBoxTranslate = -40 + (scroll / 30);
		
		profilBox.css('bottom', profilBoxTranslate * 1);
		image.css('bottom', profilBoxTranslate * 1.5);
	});
}
