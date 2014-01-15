function importScript(scriptName) {
	$(body).append("<script src=" + scriptName + ".js></script>");
}

function saveFontPackAsXML() {
	var pack = new FontPack();
	pack.saveAsXML();
}

function saveThemeAsZIP() {
	var zip = new JSZip();
	zip.folder("themixr");

	var fontPack = new FontPack();
	zip.file("themixr/fonts_" + fontPack.lang + ".xml", fontPack.toXML());

	var context = document.getElementById("ilixi-ui-canvas");
	var img = new Image();
	img.src = context.toDataURL();
	zip.file("themixr/ui-pack.png", img.src.substr(img.src.indexOf(',') + 1), {
		base64 : true
	});

	content = zip.generate({
		type : "blob"
	});
	saveAs(content, "themixr.zip");
}