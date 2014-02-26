//전화번호에 하이픈을 넣어서 반환한다
//target->str로 변경했습니당~ 그리고 int 형으로 값들어가면 스크립트 에러나염~
clean.string.hyphenOnPhoneNum = function(str) {

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
};
