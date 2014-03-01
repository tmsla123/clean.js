// 요기는 패키지 정보를 담고있어요.
// 헤헤

var
// root package
clean;

// 패키지 정보에요!
( typeof global === 'undefined' ? window : global).clean = clean = {

	info : {},

	// 데이터 처리
	object : {},
	array : {},
	date : {},
	string : {},
	integer : {},
	bool : {},

	// helpers
	is : {},
	to : {},
	valid : {},
	helper : {},

	// 브라우저 전용 패키지들
	dom : {},
	cookie : {},

	// 모듈
	module : {}
};

// node.js에서 실행하면 node.js 모듈로 넘겨요!
if ( typeof exports !== 'undefined') {
	module.exports = clean;
}
