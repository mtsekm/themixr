function Style() {
	// PushButton parameters
	this.PBGradBG
	this.PBGradBorder
	this.PBRadius = 4;
	this.PBBorderWidth = 4;

	this.draw = function() {
		var context = document.getElementById("ilixi-ui-canvas").getContext("2d");
		context.canvas.height = 500;
		context.canvas.width = 500;
		context.clearRect(0, 0, 500, 500);
		//context.fillStyle = "rgba(100,100,100,0.1)";
		//context.fillRect(0, 0, 500, 500);

		var pbDefault = new Box(20, 20, 100, 50);
		drawPushButton(context, pbDefault);
		
		var pbPressed = new Box(130, 20, 100, 50);
		drawPushButton(context, pbPressed);
	}

	this.toXML = function() {
		var xmlString = '<?xml version="1.0"?>\n';
		return xmlString;
	}

	this.saveAsXML = function() {
		var blob = new Blob([this.toXML()], {
			type : "text/plain;charset=utf-8"
		});
		saveAs(blob, "style.xml");
	}

	this.saveAsPNG = function() {
		var context = document.getElementById("ilixi-ui-canvas");
		context.toBlob(function(blob) {
			saveAs(blob, "ui-pack.png");
		});
	}
}

function drawPushButton(context, box) {
	var p = new Painter(context);

	// Draw frame
	var brush = new Brush();
	brush.setGradient(theme.PBGradBG, context, box, 1);
	p.setBrush(brush);
	p.roundRect(box.x, box.y, box.w, box.h, theme.PBRadius, false);

	// Draw border
	var pen = new Pen();
	pen.setGradient(theme.PBGradBorder, context, box, 1);
	pen.setLineWidth(theme.PBBorderWidth);
	p.setPen(pen);
	p.roundRect(box.x, box.y, box.w, box.h, theme.PBRadius, true);

}