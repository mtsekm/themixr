var theme = new Style();

// initialise controls
$(function() {
	$("#accordion").accordion({
		heightStyle : "content"
	});

	$("#FontTab").tabs();

	$('#PBSolidColor').ColorPicker({
		color : '#EFEFEF',
		onShow : function(colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide : function(colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange : function(hsb, hex, rgb) {
			$('#colorSelector div').css('backgroundColor', '#' + hex);
		}
	});

	$("#pushButtonBG").gradientPicker({
		change : function(points, styles) {
			theme.PBGradBG = points;
			theme.draw();
		},
		controlPoints : ["rgba(70,70,70,1) 0%", "rgba(30,30,30,1) 100%"]
	});

	$("#pushButtonBorder").gradientPicker({
		change : function(points, styles) {
			theme.PBGradBorder = points;
			theme.draw();
		},
		controlPoints : ["rgba(100,100,100,1) 0%", "rgba(50,50,50,1) 100%"]
	});
});

function importScript(scriptName) {
	$(body).append("<script src=" + scriptName + ".js></script>");
}

