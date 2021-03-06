var links = [
	{ name: 'SB', url: 'http://nicolaeaston5.github.io/' },
	{ name: 'ADMM', url: 'http://nicolaeaston5.github.io/admm.html' },
	{ name: 'MED', url: 'http://nicolaeaston5.github.io/filtering.html' },
	{ name: 'ADD', url: 'http://nicolaeaston5.github.io/' }
];

// From https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function myRedirect( url ) {
	document.getElementById("redirect_anchor").href = url;
	window.location.href = url;
}

const defaultRedirect = 'https://nicolaeaston5.github.io/';
var target = getParameterByName('target');
var redirected = false;

// If there's no target do default
if(target == null) {
	myRedirect(defaultRedirect);
} else {
	// Try and redirect to target
	links.forEach( link => {
		if( target === link.name ) {
			redirected = true;
			myRedirect(link.url);
		}
	});
	// Else redirect to default
	if(!redirected) {
		myRedirect(defaultRedirect);	
	}
}
