// 각 값에 callback 처리한 배열을 구한다
clean.array.map = function(object, callback) {
	// REQUIRED: object
	// REQUIRED: callback

	var result = [];

	// callback 처리한 값의 배열을 반환
	clean.object.each(object, function(arg) {
		result.push(callback(arg));
	});

	return result;
};
