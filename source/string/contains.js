// 문자열에서 해당문자가 포함되었는지 확인합니다
clean.string.contains = function(target, search) {
	//REQUIRED: target: 대상문자열입니다!
	//REQUIRED: search: 확인할 문자열입니다!

	// search를 찾아가지고 인덱스를 확인합니다!
	return target.indexOf(search) >= 0;
};

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