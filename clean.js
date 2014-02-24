// 코어가 있어야될거같애서 만들었어요.
// 일단 패키지 정보를 담고있고요,
// 전체적으로 글로벌하게 쓰이는 기능들은 여기다 넣을라구요.
// 근데 마땅히 떠오르는게 없네요.
// 헤헤

console.log('안냐세영')

clean = {
	array : {},
	object : {},
	date : {},
	string : {},
	number : {}
};

// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback

	var
	// 인덱스에요.
	index;

	// 모든 요소를 둘러봅니다.
	for ( index = 0; index < array.length; index += 1) {
		// 요소를 callback으로 쏴줘요!
		callback(array[index]);
	}
};

// 지금이 언제냐?
clean.date.now = function() {
	// 지금은 지금이다!
	return new Date();
};

// 객체의 프로퍼티를 각각 처리한다!
clean.object.each = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var
	// 프로퍼티의 이름에요.
	name;

	// 모든 프로퍼티를 둘러봅니다.
	for (name in object) {

		// 안전하게 객체에 잘 있나 확인하고,
		if (object.hasOwnProperty(name) === true) {

			// 프로퍼티를 callback으로 쏴줘요!
			callback(object[name]);
		}
	}
};

