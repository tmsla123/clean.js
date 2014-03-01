// 객에 대해 method 함수를 invoke 한다.
clean.array.invoke = function(obj, method) {
	// REQUIRED obj
	// REQUIRED method

	// argument가 있으면..
	var args =  Array.prototype.slice.call(arguments, 2);

	// 오브젝트를 돌면서
	return clean.array.map(obj, function(value) {
		// 함수 실행
		return (clean.is.func(method) ? method : value[method]).apply(value, args);
	});
};
