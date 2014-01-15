// Widget states
var StateDefault = 0;
var StatePressed = 2;
var StateExposed = 4;
var StateDisabled = 8;
var StateFocused = 16;

// Base widget class
function ILXWidget(container, x, y, w, h) {
	var self = this;
	var container = container;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.state = StateDefault;

	this.handleClick = function(mouse) {
		if (self.x < mouse.x && self.x + self.w > mouse.x && self.y < mouse.y && self.y + self.h > mouse.y) {
			compose();
			return true;
		}
		return false;
	}

	this.getBox = function() {
		return new Box(this.x, this.y, this.w, this.h);
	}

	this.getCanvas = function() {
		return container.getCanvasContext();
	}
}

// Override in child widgets
ILXWidget.prototype.compose = function() {
};

