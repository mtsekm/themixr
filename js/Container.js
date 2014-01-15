function ILXContainer(id, x, y, w, h) {
	var canvas = $(id);
	var self = this;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	var widgetsArray = [];

	var canvasPosition = {
		x : $(id).offsetLeft,
		y : $(id).offsetTop
	};

	this.init = function() {
		var context = document.getElementById("ilixi-ui-canvas").getContext("2d");
		context.canvas.width = self.w;
		context.canvas.height = self.h;
		context.clearRect(self.x, self.y, self.w, self.h);
	}

	this.getCanvasContext = function() {
		return canvas[0].getContext("2d");
	};

	this.addWidget = function(widget) {
		widgetsArray.push(widget);
	};

	this.paint = function() {
		this.getCanvasContext().clearRect(self.x, self.y, self.w, self.h);
		for (var i = 0; i < widgetsArray.length; i++)
			widgetsArray[i].compose();
	};

	//*************************************
	// Canvas event handlers
	//*************************************
	canvas.on('click', function(e) {
		var mouse = {
			x : e.pageX - canvasPosition.x,
			y : e.pageY - canvasPosition.y
		}

		for (var i = 0; i < widgetsArray.length; i++) {
			if (widgetsArray[i].handleClick(mouse))
				break;
		}
	});

	// do nothing in the event handler except canceling the event
	canvas.ondragstart = function(e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		if (e && e.stopPropagation) {
			e.stopPropagation();
		}
		return false;
	};

	// do nothing in the event handler except canceling the event
	canvas.onselectstart = function(e) {
		if (e && e.preventDefault) {
			e.preventDefault();
		}
		if (e && e.stopPropagation) {
			e.stopPropagation();
		}
		return false;
	};
}
