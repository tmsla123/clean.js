//전화번호에 하이픈을 넣어서 반환한다
clean.String.hyphenOnPhoneNum = function(target) {
	
	
	var RegNotNum = /[^0-9]/g;
	var RegPhonNum = "";
	var DataForm = "";

	if (str == "" || str == null)
		return "";

	str = str.replace(RegNotNum, '');

	if (str.length < 4)
		return str;

	if (str.length > 3 && str.length < 7) {
		DataForm = "$1-$2";
		RegPhonNum = /([0-9]{3})([0-9]+)/;
	} else if (str.length == 7) {
		DataForm = "$1-$2";
		RegPhonNum = /([0-9]{3})([0-9]{4})/;
	} else if (str.length == 8) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{4})([0-9]{2})([0-9]+)/;
	} else if (str.length == 9) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/;
	} else if (str.length == 10) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
	} else {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/;
	}

	while (RegPhonNum.test(str)) {
		str = str.replace(RegPhonNum, DataForm);
	}
	
	return str;
	
}