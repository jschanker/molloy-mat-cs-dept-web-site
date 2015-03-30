$(document).ready(function() {
	$("#topContent").css('margin-top', $("nav").outerHeight(false));
	$(window).on('DOMContentLoaded load resize scroll', function() {
		$("#topContent").css('margin-top', $("nav").outerHeight(false));
	});
});