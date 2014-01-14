function FontPack() {
	this.lang = $("#fontsLang").val();

	// ButtonFont
	this.buttonFontName = $("#buttonFont").val();
	this.buttonFontSize = $("#buttonFontSize").val();
	this.buttonFontStyle = $("#buttonFontStyle").val();

	// DefaultFont
	this.defaultFontName = $("#defaultFont").val();
	this.defaultFontSize = $("#defaultFontSize").val();
	this.defaultFontStyle = $("#defaultFontStyle").val();

	// InputFont
	this.inputFontName = $("#inputFont").val();
	this.inputFontSize = $("#inputFontSize").val();
	this.inputFontStyle = $("#inputFontStyle").val();

	// TitleFont
	this.titleFontName = $("#titleFont").val();
	this.titleFontSize = $("#titleFontSize").val();
	this.titleFontStyle = $("#titleFontStyle").val();

	// InfoFont
	this.infoFontName = $("#infoFont").val();
	this.infoFontSize = $("#infoFontSize").val();
	this.infoFontStyle = $("#infoFontStyle").val();

	this.toXML = function() {
		var xmlString = '<?xml version="1.0"?>\n';
		xmlString += '<!DOCTYPE FontPack PUBLIC "-//ilixi//DTD Fonts v2//EN" "http://www.ilixi.org/dtd/font_pack.dtd">\n';
		xmlString += '<FontPack>\n';
		xmlString += '\t<ButtonFont>\n\t\t<Name>' + this.buttonFontName + '</Name>\n\t\t<Size>' + this.buttonFontSize + '</Size>\n\t\t<FontStyle>' + this.buttonFontStyle + '</FontStyle>\n\t</ButtonFont>\n'
		xmlString += '\t<DefaultFont>\n\t\t<Name>' + this.defaultFontName + '</Name>\n\t\t<Size>' + this.defaultFontSize + '</Size>\n\t\t<FontStyle>' + this.defaultFontStyle + '</FontStyle>\n\t</DefaultFont>\n'
		xmlString += '\t<InputFont>\n\t\t<Name>' + this.inputFontName + '</Name>\n\t\t<Size>' + this.inputFontSize + '</Size>\n\t\t<FontStyle>' + this.inputFontStyle + '</FontStyle>\n\t</InputFont>\n'
		xmlString += '\t<TitleFont>\n\t\t<Name>' + this.titleFontName + '</Name>\n\t\t<Size>' + this.titleFontSize + '</Size>\n\t\t<FontStyle>' + this.titleFontStyle + '</FontStyle>\n\t</TitleFont>\n'
		xmlString += '\t<InfoFont>\n\t\t<Name>' + this.infoFontName + '</Name>\n\t\t<Size>' + this.infoFontSize + '</Size>\n\t\t<FontStyle>' + this.infoFontStyle + '</FontStyle>\n\t</InfoFont>\n'
		xmlString += '</FontPack>\n';
		return xmlString;
	}

	this.saveAsXML = function() {
		var blob = new Blob([this.toXML()], {
			type : "text/plain;charset=utf-8"
		});
		saveAs(blob, "fonts_" + this.lang + ".xml");
	}
}
