// 문자열에서 특정 문자열을 모두 변경한다!
clean.string.replaceAll = function(target, search, replace) {
	//REQUIRED: target: 바꿀 대상의 문자열입니다!
	//REQUIRED: search: 바꿀 문자열입니다!
	//REQUIRED: replace: 바뀔 문자열입니다!

	// search를 정규표현식으로다가 찾아가지고 replace로 바꿉니다.
	// g를 붙혓기 때매 전체적으로 바뀝니다.
	target.replace(new RegExp(RegExp.escape(search), 'g'), replace);
};
