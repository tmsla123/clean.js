// 조건에 해당하지 않는 객체만 배열로 반환
clean.array.reject = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var result = [];

	clean.object.each(object, function(arg) {
		// 조건에 안맞으면!
		if(!callback(arg)) {
			result.push(arg);
		}
	});

	return result;
};
