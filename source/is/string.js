// 문자열인가?
clean.is.string = function(target) {
	//REQUIRED: target

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	// return toString.call(target) == '[object String]';

        // IE에서 toString에 접근하기 위해서는 object.prototype.toString으로 접근해야합니다.
        // 브라우져에 상관없이 쓸 수 있는 typeof을 쓰는 건 어떨가요?
        return typeof target === 'string';
};
