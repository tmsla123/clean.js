// 배열 요소가 포함되어있는지 확인
clean.array.contains = function(array, search) {
	// 배열이 아니거나 값이없으면 false
	if (!clean.is.array(array) || array.length == 0) return false;

	// 인덱스 검사
    if (array.indexOf === Array.prototype.indexOf) return array.indexOf(search) != -1;

    // indexOf가 없다면 값을 찾는다
    return clean.array.each(array, function(value) {
    	if(value === search) {
    		return true;
    	}
    });

    return false;
}
