// 정수인가?
clean.is.integer = function(target) {
	//REQUIRED: target: 정수인지 확인할 대상

	return (clean.to.integer(target)===target);
};
