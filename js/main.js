
$(function(textSizeAdjust) {
	var textAdjust = localStorage.getItem("text_size");
	console.log(textAdjust);
	if (localStorage.getItem("text_size")) {
		$("body").addClass(textAdjust);
	};
	$(".resizer li").click(function() {
		var textSize = $(this).attr("class");
		$("body").removeClass("small medium large").addClass(textSize);
		localStorage.setItem("text_size", textSize)
		return false;
	});
});

$(function(colourMode) {
	var colorMode = localStorage.getItem("grey_mode");
	console.log(colorMode);
	if (localStorage.getItem("grey_mode") == "true") {
		$("body").addClass("greyscale-on");
		$(".run-label").addClass("label-active");
	};
	$(".greyscale").click(function() {
		if (localStorage.getItem("grey_mode") == "true") {
			localStorage.setItem("grey_mode", "false")
		} else {
			localStorage.setItem("grey_mode", "true")
		}
		$("body").toggleClass("greyscale-on");
		$(".run-label").toggleClass("label-active");
		return false;
	});
});

$(function(colourMode) {
	$(".trigger-overlay").click(function() {
		$(".overlay").toggleClass("show-overlay");
	});
});