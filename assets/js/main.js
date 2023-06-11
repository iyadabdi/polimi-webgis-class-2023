/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    closeButton: '.btn-close', // Specify the close button selector
  });
});



// Slideshow JavaScript code
var slideIndex = 0;
var timer;

// Initialize the slideshow
function initializeSlideshow() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the first slide and set the corresponding dot as active
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Start the automatic slideshow
  timer = setTimeout(function(){plusSlides(1)}, 5000);
}

// Move to the next or previous slide
function plusSlides(n) {
  clearTimeout(timer);

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Hide current slide and deactivate its dot
  slides[slideIndex].style.display = "none";
  dots[slideIndex].className = dots[slideIndex].className.replace(" active", "");

  // Increment or decrement the slideIndex and wrap around if necessary
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Show the next or previous slide and activate its dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Restart the timer
  timer = setTimeout(function(){plusSlides(1)}, 5000);
}

// Function to set the current slide
function currentSlide(n) {
  clearTimeout(timer);

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Hide current slide and deactivate its dot
  slides[slideIndex].style.display = "none";
  dots[slideIndex].className = dots[slideIndex].className.replace(" active", "");

  // Adjust for 1-based indexing in the HTML and set slideIndex to the given index
  slideIndex = n - 1;

  // Show the chosen slide and activate its dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";

  // Restart the timer
  timer = setTimeout(function(){plusSlides(1)}, 5000);
}

// Initialize the slideshow on page load
document.addEventListener("DOMContentLoaded", initializeSlideshow);



// Slideshow 2 JavaScript code
var slideIndex2 = 0;
var timer2;

// Initialize the second slideshow
function initializeSlideshow2() {
  var slides2 = document.getElementsByClassName("mySlides2");
  var dot2 = document.getElementsByClassName("dot2");

  // Hide all slides
  for (var i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (var i = 0; i < dot2.length; i++) {
    dot2[i].className = dot2[i].className.replace(" active2", "");
  }

  // Show the first slide and set the corresponding dot as active
  slides2[slideIndex2].style.display = "block";
  dot2[slideIndex2].className += " active2";

  // Start the automatic slideshow
  timer2 = setTimeout(plusSlides2, 3000);
}
// Function to set the current slide
function currentSlide2(n) {
  clearTimeout(timer2);

  var slides2 = document.getElementsByClassName("mySlides2");
  var dot2 = document.getElementsByClassName("dot2");

  // Hide current slide and deactivate its dot
  slides2[slideIndex2].style.display = "none";
  dot2[slideIndex2].className = dot2[slideIndex2].className.replace(" active2", "");

  // Adjust for 1-based indexing in the HTML and set slideIndex2 to the given index
  slideIndex2 = n - 1;

  // Show the chosen slide and activate its dot
  slides2[slideIndex2].style.display = "block";
  dot2[slideIndex2].className += " active2";

  // Restart the timer
  timer2 = setTimeout(function(){plusSlides2(1)}, 5000);
}

// Move to the next or previous slide
function plusSlides2(n) {
  clearTimeout(timer2);

  var slides2 = document.getElementsByClassName("mySlides2");
  var dot2 = document.getElementsByClassName("dot2");

  // Hide current slide and deactivate its dot
  slides2[slideIndex2].style.display = "none";
  dot2[slideIndex2].className = dot2[slideIndex2].className.replace(" active2", "");

  // Increment or decrement the slideIndex and wrap around if necessary
  slideIndex2 += n;
  if (slideIndex2 >= slides2.length) {
    slideIndex2 = 0;
  } else if (slideIndex2 < 0) {
    slideIndex2 = slides2.length - 1;
  }

  // Show the next or previous slide and activate its dot
  slides2[slideIndex2].style.display = "block";
  dot2[slideIndex2].className += " active2";

  // Restart the timer
  timer2 = setTimeout(function(){plusSlides2(1)}, 3000);
}


// Initialize the second slideshow on page load
document.addEventListener("DOMContentLoaded", initializeSlideshow2);
