function Box(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

function Color(r, g, b, a) {
	this.r = r;
	this.g = g;
	this.b = b;
	this.a = a || 1;
}

function Gradient(context, box, t2b) {
	var ctx = context;
	if (t2b)
		this.grd = ctx.createLinearGradient(box.x, box.y, box.x, box.y + box.h);
	else
		this.grd = ctx.createLinearGradient(box.x, box.y, box.x + box.w, box.y + box.h);

	this.addStop = function(pos, color) {
		this.grd.addColorStop(pos, "rgba(" + color.r + "," + color.g + "," + color.b + "," + color.a + ")");
	}

	this.addStopFromString = function(pos, color) {
		this.grd.addColorStop(pos, color);
	}
}

function Brush() {
	var useGradient = false;
	var clr = new Color(0, 0, 0, 1);
	var grad;

	this.setColor = function(color) {
		clr = color;
		useGradient = false;
	}

	this.setGradient = function(gradient) {
		grad = gradient;
		useGradient = true;
	}
	
	this.setGradient = function(element, context, box, direction) {
		if (element) {
			useGradient = true;
			grad = new Gradient(context, box, direction);
			for (var i = 0; i < element.length; i++) {
				grad.addStopFromString(element[i].position, element[i].color);
			}
		}
	}	

	this.applyBrush = function(context) {
		if (useGradient)
			context.fillStyle = grad.grd;
		else
			context.fillStyle = "rgba(" + clr.r + "," + clr.g + "," + clr.b + "," + clr.a + ")";
	}
}

function Pen() {
	var useGradient = false;
	var clr = new Color(0, 0, 0, 1);
	var grad;
	var width = 1;

	this.setColor = function(color) {
		clr = color;
		useGradient = false;
	}

	this.setGradient = function(gradient) {
		grad = gradient;
		useGradient = true;
	}

	this.setGradient = function(element, context, box, direction) {
		if (element) {
			useGradient = true;
			grad = new Gradient(context, box, direction);
			for (var i = 0; i < element.length; i++) {
				grad.addStopFromString(element[i].position, element[i].color);
			}
		}
	}

	this.setLineWidth = function(w) {
		width = w;
	}

	this.applyPen = function(context) {
		context.lineWidth = width;
		if (useGradient)
			context.strokeStyle = grad.grd;
		else
			context.strokeStyle = "rgba(" + clr.r + "," + clr.g + "," + clr.b + "," + clr.a + ")";
	}
}

function Painter(context) {
	var ctx = context;
	var pen = new Pen(ctx);
	var brush = new Brush(ctx);

	this.setBrush = function(Brush) {
		brush = Brush;
	}

	this.setPen = function(Pen) {
		pen = Pen;
	}

	this.roundRect = function roundRect(x, y, width, height, radius, stroke) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.closePath();

		if (stroke) {
			pen.applyPen(ctx);
			ctx.stroke();
		} else {
			brush.applyBrush(ctx);
			ctx.fill();
		}
	}
}

