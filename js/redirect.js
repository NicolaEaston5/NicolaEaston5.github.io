var links = [
	{ name: 'SB1', url: 'http://nicolaeaston5.github.io/SB1' }
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

var target = getParameterByName('target');
links.forEach( link => {
	if( target === link.name ) {
		myRedirect(link.url);
	}
});
