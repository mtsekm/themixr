var theme = new Style();
var themeContainer;

// initialise
$(function() {
	themeContainer = new ILXContainer("#ilixi-ui-canvas", 0, 0, 800, 600);
	themeContainer.init();
	createThemeElements();
	themeContainer.paint();

	$("#accordion").accordion({
		heightStyle : "content"
	});

	$("#FontTab").tabs();
	$("#PBTab").tabs();

	// PushButton Default
	$("#PBDefBGGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBDefBGGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(70,70,70,1) 0%", "rgba(30,30,30,1) 100%"]
	});

	$("#PBDefBorderGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBDefBorderGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(100,100,100,1) 0%", "rgba(50,50,50,1) 100%"]
	});
	
	// PushButton Pressed
	$("#PBPreBGGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBPreBGGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(30,30,30,1) 0%", "rgba(70,70,70,1) 100%"]
	});

	$("#PBPreBorderGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBPreBorderGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(100,100,100,1) 0%", "rgba(50,50,50,1) 100%"]
	});

	// PushButton Exposed
	$("#PBExpBGGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBExpBGGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(90,90,90,1) 0%", "rgba(50,50,50,1) 100%"]
	});

	$("#PBExpBorderGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBExpBorderGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(120,120,120,1) 0%", "rgba(90,90,90,1) 100%"]
	});
	
	// PushButton Disabled
	$("#PBDisBGGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBDisBGGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(30,30,30,1) 0%", "rgba(30,30,30,1) 100%"]
	});

	$("#PBDisBorderGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBDisBorderGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(80,80,80,1) 0%", "rgba(30,30,30,1) 100%"]
	});
	
	// PushButton Focused
	$("#PBFocBGGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBFocBGGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(30,30,150,.1) 0%", "rgba(70,70,180,.1) 100%"]
	});

	$("#PBFocBorderGrad").gradientPicker({
		change : function(points, styles) {
			theme.PBFocBorderGrad = points;
			themeContainer.paint();
		},
		controlPoints : ["rgba(100,100,180,.8) 0%", "rgba(50,50,150,.8) 100%"]
	});
});

// This function creates all elements in ui-pack
function createThemeElements() {
	var pbDefault = new PushButton(themeContainer, 10, 10, 100, 50);
	themeContainer.addWidget(pbDefault);

	var pbPressed = new PushButton(themeContainer, 120, 10, 100, 50);
	pbPressed.state = StatePressed;
	themeContainer.addWidget(pbPressed);

	var pbExposed = new PushButton(themeContainer, 230, 10, 100, 50);
	pbExposed.state = StateExposed;
	themeContainer.addWidget(pbExposed);

	var pbDisabled = new PushButton(themeContainer, 340, 10, 100, 50);
	pbDisabled.state = StateDisabled;
	themeContainer.addWidget(pbDisabled);

	var pbFocused = new PushButton(themeContainer, 450, 10, 100, 50);
	pbFocused.state = StateFocused;
	themeContainer.addWidget(pbFocused);
}
