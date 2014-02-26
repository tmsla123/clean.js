//쿠키를 셋팅해 보아요~
clean.storage.setCookie = function ( name, value, expiredays ){
	var today_date = new Date();
	today_date.setDate( today_date.getDate() + expiredays );
	document.cookie = name + "=" + escape(value) + ";path=/; expires=" + today_date.toGMTString() + ";"
}
