/**
 * 입력된 값이 정해진 문자열로만 이루어졌는지 확인
 * @param target   확인할 문자열
 * @param search   제한할 문자열들
 * @returns {Boolean}
 */
clean.is.containsCharsOnly = function(target, search) {
	//REQUIRED: target, search
	
	for ( var i = 0; i < target.length; i++) {
		if (search.indexOf(target.charAt(i)) == -1)
			return false;
	}
	return true;
};