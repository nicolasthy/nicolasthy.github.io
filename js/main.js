$(document).ready(function($){
	initProgressBar();
	getRecentTrack();
	$(window).scroll(function() {
		// animateFeaturedCard($(window).scrollTop());
		// animateProfil($(window).scrollTop());
		animateArticleSocial($(window).scrollTop());
		animateArticleNavBar($(window).scrollTop());
	});
});

var getRecentTrack = function() {
	var trackContainer = $('.about_listening');
	if(trackContainer.length > 0) {
		var getTracks = function() {
			$.get('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nicolasthy&limit=1&extended=1&api_key=cbf686449f9ddd212be0c08d7aebc60a&format=json', function(response) {
				var track = response.recenttracks.track[0];
				trackContainer.find('.about_listening_artist').html(" by " + track.artist.name);
				trackContainer.find('.about_listening_song').html(track.name);
				console.log(track);
			});
		}

		getTracks();
		setInterval(getTracks, 200000);
	}
}

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

var animateArticleSocial = function(scroll) {
	var socials = $('#articleSocials');
	if(socials.length > 0 && $(window).width() >= 1020) {
		var articleContent = $('.article_content').first();
		var articleContentOffsets = $('.article_content').first().offset();
		var socialPosition = (scroll - articleContentOffsets.top) + 140;
		if(socialPosition > (articleContent.height() - 140)) socialPosition = articleContent.height() - 140;
		if(articleContentOffsets.top <= scroll) socials.css('top', socialPosition);
	} else if(socials) {
		socials.css('top', 135);
	}
}

var animateArticleNavBar = function(scroll) {
	var navbar = $('#articleNavbar');
	if(scroll >= 525) {
		navbar.addClass('article_nav--visible');
	} else {
		navbar.removeClass('article_nav--visible');
	}
}

var initProgressBar = function() {
	if($('#articleNavbar').length > 0) {
		var progressColor = $('.article_header_content_category').first().css('color');
		var bar = new ProgressBar.Circle(articleNavbarProgress, {
			strokeWidth: 5,
			easing: 'linear',
			duration: 1400,
			color: progressColor,
			trailColor: 'transparent',
			trailWidth: 2,
			svgStyle: null
		});
		bar.set(0);

		$(window).scroll(function() {
			animateFixedNavBarLogo($(window).scrollTop(), bar);
		});
	}
}

var animateFixedNavBarLogo = function(scroll, bar) {
	if($('#articleNavbar').length > 0) {
		if($('.article_content').first().offset().top <= scroll) {
			var articleHeight = $('.article_content').first().height() - $(window).height() + $('.article_footer').first().height() + 80;
			var readingPosition = scroll - $('.article_content').first().offset().top
			var readingPositionPercent = (readingPosition * 100) / articleHeight;
			var readingProgress = (75 * readingPositionPercent) / 100;
			var readingProgressValue = readingProgress / 100;

			if(readingProgress > 5 ) {
				$('#articleNavbar').find('.article_nav_logo').addClass('article_nav_logo--progress');
			} else {
				$('#articleNavbar').find('.article_nav_logo').removeClass('article_nav_logo--progress');
			}
      
      		bar.set(readingProgressValue);
		}
	}
}