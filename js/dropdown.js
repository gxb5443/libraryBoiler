$(document).ready(function () {
	$('li.hasMore').hover(
		function() {
			$('.dropdown', this).stop().fadeIn(250);
		},
		function() {
			$('.dropdown', this).stop().fadeOut(250);
		}
	);

});