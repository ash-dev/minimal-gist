$('.gist-data').each(function() {
	
	// target 6- or 3-digit hex codes
	var hex = /#([a-zA-Z0-9]+)/g,
	
	// what output will be
	spanhex = '<span style="color: #$1">#$1</span>';

	// replace
	this.innerHTML = this.innerHTML.replace(hex, spanhex);
	
});