// get 방식으로 ajax 요청을 쏴쏴~~
clean.ajax.get = function(url, callback) {
	//REQUIRED: url
	//REQUIRED: callback

	var
	// http request
	httpRequest;

	if (window.XMLHttpRequest) {// Mozilla, Safari, ...
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {// IE
		try {
			httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (e) {
			}
		}
	}

	if (!httpRequest) {
		alert('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				callback(httpRequest.responseText);
			} else {
				alert('There was a problem with the request.');
			}
		}
	};
	httpRequest.open('GET', url);
	httpRequest.send();

};
