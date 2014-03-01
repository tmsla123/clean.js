// 배열들의 교집합을 구한다.
clean.array.intersection = function() {
	// OPTIONAL array, array, array...

	// 인자로 들어온 배열들을 하나의 배열로!
	var arrays = Array.prototype.slice.call(arguments);

	// 필터링
	return clean.array.filter(arrays.shift(), function(value) {
		// 나머지 배열들에 대해서 각 배열들의 배열요소가 값과 일치하는지
		// 일치 한다면 필터에 걸린다!
		return clean.array.every(arrays, function(array) {
	        return array.indexOf(value) !== -1;
	    });
	});
}
