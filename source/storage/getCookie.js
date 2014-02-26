//쿠키를 로드해요!
clean.storage.getCookie = function (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{ //while open
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg) return get_cookie_val (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break;
	} //while close
	return null;
}