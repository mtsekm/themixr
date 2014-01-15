function Style() {
	// PushButton parameters
	this.PBRadius = 4;
	this.PBBorderWidth = 2;
	this.PBShadow = 0;

	// PushButton Default
	this.PBDefBGGrad
	this.PBDefBorderGrad

	// PushButton Pressed
	this.PBPreBGGrad
	this.PBPreBorderGrad

	// PushButton Exposed
	this.PBExpBGGrad
	this.PBExpBorderGrad

	// PushButton Disabled
	this.PBDisBGGrad
	this.PBDisBorderGrad

	// PushButton Focused
	this.PBFocBGGrad
	this.PBFocBorderGrad

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
