$(document).ready(function($){

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(e){
    e.preventDefault();
		$('.cd-menu-icon').toggleClass('is-clicked');
		$('.cd-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
        $('#brand').attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAk1BMVEUAAAA1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTU1NTXfYcGbAAAAMHRSTlMAIJAQgPBvUALgKQaxlgw/+sKKSaXROC/0aCMTYcga5pLqTtRcqnZZVc26QzPZfJuwyCtTAAAL7UlEQVR42uzc6ZaaMBQA4KtHmLAqIBwWcaE67jP3/Z+uPZ0wUOrUjgRIYr7/ejSGuwUERVEURVEURVEURVEURVEUhQ/LS5FMnN0pvxobLcZfYm1jXPPTzpkkxWUJyi9ulIzt6wzvmF3tcRK58LRGh4lt4LcY9uQwgidjXXR7hQ9a2frFgidh6raGLWm2boLsrMAxkBHDCSTeYO5hp+Ftm6PtTPR9EJlplrnkFzfLUjMK9vrEsY8bvE3bHaQM+lYxj/GG/F0vTOvuq81Cf8/xhnheyLa/TH+DTcburUgJfANJi7edgU0bX6L45W49bAidlyU8aPnihNjgbeW4HNOx1gg08+0IWhpt5813Hacgumg3a6SwMwEmyLmRWGe7CARGCg/rjPUUmJquDazzCgJiIvsfWDN7P0MHzu8zrPmxF3G5yOGKNd4ihY6kCw9rrgfhlis4YmXmnKFTZ2eGlWMAIjFPWFn1UQaZ/gorJ3EKr6z+O4fbDHqRbcP6Xs5ABJau1UJVAD0KasFL0wXogqJaCswD6FmQ1xIj72WXu6592AIGUNR+rDXXPVBgYClOCAyCJDGWDH7zYjbHT34Kg0l9/DTnNNAHVfK2IxhUtMPSisfNZVXRStvD4PZaFbm4S4tmiCWfi8OqkY+lkLMSdRt/5sApcGIaIhVvgR+1S/CVpy72FUsON5fi0uMpWt2OXB4nt0tMV3xFq9uRa8VFeEhmZfO6AA4tPj9eAkMjY6Q8znJOyfSQGhMYlGsjtQZurZGyXRhQliOlA8d0pPIMBjO68ljI/KsMvI5gIGaZBnPuzzfTvEyKJgzisik7exBAORHZXGAAF61MMiCEMm1rA6xWVK7VGwjirVytCPpV7atXEMbrQHvL3IhQMjQlZdwyoUdpmQeHbyEeWq1VCr1ZGmKuVbVaxhJ6kl1FXatqta4Z9MLyRIxXzdbHs6AHZC7yWlWrNSfQPV+8muF2BeFD5xLRatG/vfUVcqd08OiAwNZ0djqFTi1pgWWD0Gxabi2hM1UiDEFwYQ8pke7fmPv51T1p3PkwfIsfOJ+LcvFVzFjoAutmuRWb0AnryP05zgMh5WhBF3waFEESXoe16ZkWJ5yepX6fSUvGMzCX0bEMl2f0j1nQaisD1uYSVO5NTkenUwEdX3N3n0wbI3qQEABTLr0IObv/qq09nZu6wNJa8LHMV147qIYier8oT/dAMkHo8xgRMGPRt+Ti5jm2pnQbWKxbAx8k5DNu4TJNwkzYyIhaBmw4UmbCRkZ0WLUFMgxHv2azbONO+Bvvjzq2TfUnYCCQOLp/8JnV8SSXZJJ8d8acE2irkG7Y8OX4oYCWSChp7X6jjg8JtHPA3w4gNTbfkvyQ45zwHibXz0t5NUuORuYXaCP/yBMgPfpFGfTkPD7AzlhA5yqtO4EjPIFj254ufYpU+EdCTFsOkw2u/9GF8SnD+uHXa7J3hX93iJoLj1lIdgT9X5OoBB5zlO9Y9Sd7Z4OdNgwE4SW4AYxxIPwEmpYHjU1bQ4ruf7o2qLwCNa5GmBJ75zvCPEuWRrO7RfQu+Zs91faVovCc9HRBgV4masj8t/juss7O+3k3ftn1PtNO30lbkv/BfGovwt6xma0oYmveSAUmtjKvRRFru5hiz+N/R1TR8bzepXUK27qy8FuH3amuQ5blwW8dDjWuQpGOl3/X07gK9+uwh0qs71/4xtpnQYXWrxB1WFcqFIT76nTkKZeRR7Qtqkv1F0qCW/Ft+zXWMupXTMPuP23YynoRhYxhU2umyyM9pAebyyOtW5ZIAv/aOlq3LJEGetKa29IyUYltxjAH7ZlUVJKCNk1Q9QYqlzdfCcSVSEcoqyiqFYH7e43zyUV8xHb42Oyodeb2PG2zIxY3JlrifkUhwAnP7+Wf4R/rWeKLlQI/Qj/DlijFJrQjKGq0EaVsbPQIslbf6USy6/OMWOpNrf778cfSdHP+dFSglOP/tepd5ev8g+Mxyz15NAM8h0DUggjQq09jPz/ugaU10pYlPeUr4H1mWirBzjEEYtqf693GAXBdgGOGWkL7xEyfFHgN46Oh++VwCTycKSoWKOMeSZzFUlG+ejmq33Yo1iFchgjc4G/GkkcHJtkQGAsB4UUagBYNAM0/ANrKAHywAOBTmBOsRYHh8z0AgyHuMHL0G9oOJcOY5F+0F9/HO7JQjmEAN78ALjeezGh37oOq5Y4HLX+xWI7iLhYLnQrFolfqLRaLMwGxWPYLiMWCcnex2KqgWCw+HQJi0YYHxKJZCohF/89TLDYbA8RiG7s8mvlisUGiu1hsvQmIxaaugFhsFwyIxUbU1xMrVtLiPFcsNs8HxOJYBnexOPADEQsnveUomeTOEsRSOt116w+J2RO1DhnGgvDlhkOKmsaSH0BsrD8Fo+gXvR/JBldza1zIKjP+qmH2BHJMuIqW5ojxYtgVhIFxoVOZwWpnxGoELyaPD9tJ+WJVZmRfrlgPqTnPOOmWLFZlhkHmiBUOTDGv39q3FGsGjBm9sljxXd/8k0FYpliVGWB7Ktbk1bjQX7XLE6syo5FPxFr1jSPZc2liVWbo9s/27rQ5USAIwHBjFkXw4BIPEBavxGvt///rtrKCQwiGzK47PVb18zlW4ltxZgQGPsRyQvy+vv2t1Xa75dM8zr0a68XDmtmhs3vt9XqJP8iwzoygRTzvCjssed2quQGyxkiyQ6wa62VZm/R+TC0Q0tfQrKU8qv1uKCxpLgIUsfyPrQZj+GQ0P2OVeSKK1UOSS7VErBlWeHcyWJsMK3KDJpa1Jhm1DGxgbuCukY8V6xFJLHgjmBCbY3kpfGWcoxDSxLIm+G5tgZTHx7o48LV0gsIrSSxY4R8JyHh8LB9aVefNPCaJZS2vA+0CFDIkWgkvE7wZksSCQOLP/V+xthZ8R5phybVJYsEBld7oQcSSn90iV/SliWW7ivcB12O5U5nHMZUWJLFgKDXDPD7WD/g2Zy3ePE2s2MR3pgFK1GP1HanJu2Q6JLGgq3SMr8dK/vLczYomlrNWeO6iHitzJCfvUkgTCyJUe/myITtiCVaGBdOiiQU/UdlW4HqsVHqXVulEFGvUVzUj1mN5IGmKpS5RLAhQ0YxYj7UDQfJzGFLFghDVXN1Wj2WDrBALE7JYcSYxkT8ulmuBrB0WZmSx4CjxDfVxsc4gLcDSC1ks8NsvXHp8rANIs7G0oIvl7JUt5EWs8F9eHNHFAnt2b0rWKlaKpRVhLEjwagNtKDe2ifffo4wFF1RzjFnE8p831mjfuoJ59On7540FRo5Nh005VqOx27iS51iN5nj1C6p0imXoEwv8pm+4HKuZFTYcAeFYdzjLz7U41j3xGa/mUOJYd6X9ei2Odd8iq9XiWF+w84+1ONZXTuaHFYROsabaxYLIrK5OOVZrLfFbOFaLUy4O0HGsNnaGV8sFx2plnPFqtuFYreIlFrocq9VogAWfY7WyOlg42Byr1dzFKzfhWELrrhnf4FhtjD0WzFeO1ca5YGlncaw2yQwL6zHHamNPUIxcHKuFM0QxcnGsNkGGpW2kRaxE31gQh3jjL54jloOlCygW9LE0S6xniAVYCkG10U+8Wb89Q6wcCx6oF63xZrLSP9YECxkQcLom3iwD3WNtsZQChXjo4s1+EyuOFUnF+lX5aRr2AYXMt5XGGku9/QBLHlAJlii4w6O2sUYulqZAxVpNsMJLFnrGggOWPAvIWG9rrHAvRy1jJfiO/lFyVs/Dqmx41C/WyMR7OxSjXQwqRVsXq/rDo6NXLPBRuLzATRoiLh1QatGp32dum9hqYnUl7sRQyIt/Jmt8cUnuOzpKPKyZ/OylusSCLn6wDzvDQ46FAJSzOznW9be/VgsdYlke3penoJ4ThCZ+ZnrD7sp2SGNBmmMD2gWFsxK9avI9ZSyIZlinwYLCOXbO2Ig0FhxNbEL/0JNFdzDTLRZM+3iH+Qa0nGg3yLSKBXGIjcIUdGC8/Rj0tYkFEEzwk8EJNDKK5p3B2a3FSsXoqi4WWMEBq/KODTpKT1Bl7fHKHIO0uF++eCr/2s3Qy11Ec73dRRYwxhhjjDHGGGOMMcYYq/kNwgwcR0ctRcIAAAAASUVORK5CYII=");
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
        $('#brand').attr('src',"data:image/png;base64,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");
			});
		}
	});
});

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

function parallaxbubbles(){
	var resume = document.getElementById('n-resume-frame')
	var picture = document.getElementById('n-picture')
 	var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 	resume.style.marginTop = 65 - scrolltop * .1 + 'px'
	picture.style.left = 20 - scrolltop * .1 + 'px'
	picture.style.top = 125 - scrolltop * .1 + 'px'
}

window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
