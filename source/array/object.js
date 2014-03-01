// 키배열과 값배열을 가지고 객체 생성
clean.array.object = function(array, values) {
	//REQUIRED array
	//REQUIRED values

	var result = {};
	
	clean.object.each(array, function(key, index) {
		// 키값에 값을 집어넣는다!
		result[key] = values[index];
	});

	return result;
}
