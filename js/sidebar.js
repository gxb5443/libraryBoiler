$(document).ready(function () {
	$('#libraryInfo > li > a').click(
		function () {
			if($(this).attr('class') != 'active') {
				$('#libraryInfo li div').slideUp();
				$(this).next().slideToggle();
				$('#libraryInfo li a').removeClass('active');
				$(this).addClass('active');
			} else {
				$('#libraryInfo li div').slideUp();
				$('#libraryInfo li a').removeClass('active');
			}

		}
	);

});