function PushButton(container, x, y, w, h) {
	ILXWidget.call(this, container, x, y, w, h);
}

PushButton.prototype = new ILXWidget();

PushButton.prototype.constructor = PushButton;

PushButton.prototype.compose = function() {
	var canvas = this.getCanvas();

	var p = new Painter(canvas);

	// Shadow
	if (this.state != StateFocused && theme.PBShadow > 0) {
		// canvas.fillStyle = 'red';
		canvas.shadowColor = '#999';
		canvas.shadowBlur = theme.PBShadow;
		canvas.shadowOffsetX = theme.PBShadow;
		canvas.shadowOffsetY = theme.PBShadow;
	}

	// Set brush for frame
	var brush = new Brush();
	if (this.state == StateDefault)
		brush.setGradient(theme.PBDefBGGrad, canvas, this.getBox(), 1);
	else if (this.state == StatePressed)
		brush.setGradient(theme.PBPreBGGrad, canvas, this.getBox(), 1);
	else if (this.state == StateExposed)
		brush.setGradient(theme.PBExpBGGrad, canvas, this.getBox(), 1);
	else if (this.state == StateDisabled)
		brush.setGradient(theme.PBDisBGGrad, canvas, this.getBox(), 1);
	else// Focused
		brush.setGradient(theme.PBFocBGGrad, canvas, this.getBox(), 1);
	p.setBrush(brush);

	// Set pen for border
	var pen = new Pen();
	if (this.state == StateDefault)
		pen.setGradient(theme.PBDefBorderGrad, canvas, this.getBox(), 1);
	else if (this.state == StatePressed)
		pen.setGradient(theme.PBPreBorderGrad, canvas, this.getBox(), 1);
	else if (this.state == StateExposed)
		pen.setGradient(theme.PBExpBorderGrad, canvas, this.getBox(), 1);
	else if (this.state == StateDisabled)
		pen.setGradient(theme.PBDisBorderGrad, canvas, this.getBox(), 1);
	else// Focused
		pen.setGradient(theme.PBFocBorderGrad, canvas, this.getBox(), 1);
	if (this.state == StateFocused)
		pen.setLineWidth(theme.PBBorderWidth);
	else
		pen.setLineWidth(theme.PBBorderWidth * 2);
	p.setPen(pen);

	p.roundRect(this.x, this.y, this.w, this.h, theme.PBRadius, DrawingMode.FillAndStroke);
	canvas.shadowColor = 0;
	canvas.shadowOffsetX = 0;
	canvas.shadowOffsetY = 0;
};
