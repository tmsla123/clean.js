// 배열들의 합집합을 구한다.
clean.array.union = function() {
	// OPTIONAL array, array, array...

	var result = [];
	
	for(var i in arguments)  {
		// 배열인 경우
		if(clean.is.array(arguments[i])) {
			// 모두 포함
			clean.array.each(arguments[i], function(value) {
				result.push(value);
			});
		}
	}

	// 유니크한 값만 고르기!
	return clean.array.unique(result);
}
