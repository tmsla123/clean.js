// 요기는 패키지 정보를 담고있어요.
// 헤헤

// 패키지 정보에요!
( typeof global === 'undefined' ? window : global).clean = {
	array : {},
	object : {},
	date : {},
	string : {},
	is : {},
	to : {},
	valid : {}
};

// 배열의 요소를 각각 처리한다!
clean.array.each = function(array, callback) {
	//REQUIRED: array
	//REQUIRED: callback(elem, index of elem){...}
	
	var
	// 인덱스에요.
	index, leng;

	// 모든 요소를 둘러봅니다.
	for ( index = 0, leng = array.length; index < leng; index++) {
		// 요소를 callback으로 쏴줘요!
		// callback 에서 elem 혹은 this로 개별 변수에 접근합니다.
		callback.apply(array[index], [array[index], index]);
	}
};

// 날자를 읽기 편하게 보여줘용(YYYY-mm-dd HH:ii:ss)
clean.date.getTimeStamp = function() {
	
	//요 내부꺼는 좀더 간단하게 할수있음 알려주세용.. 무식하게 돌리는거라.... 따로 함수로 빼긴 그렇고...
	this.leadingZeros = function(n, digits) {
		//REQUIRED: n: 숫자에요~!
		//REQUIRED: search: 0을 표시해줄 자릿수예요!!
		
		var zero = ''; //0을 표시해줄 변수하나 대입해줘요.
		n = n.toString(); //n값이 숫자일지 몰르니 문자열로 바꿔줍시다.

		
		if (n.length < digits) { //n 값의 길이가 digits 보다 작으면!
			for (i = 0; i < digits - n.length; i++) //씐나게 ditgits보다 적은만큼 아래 씐나게 for 돌면서 0을 추가해줘요~ 
				zero += '0';
		}

		//싄나게 000 같이 만들어준거와 n값을 붙여서 값을 전달해줘요~ 당연히 문자열로요~
		return zero + n;
	}

	var d = new Date();
	var result =
	this.leadingZeros(d.getFullYear(), 4) + '-' +
	this.leadingZeros(d.getMonth() + 1, 2) + '-' +
	this.leadingZeros(d.getDate(), 2) + ' ' +

	this.leadingZeros(d.getHours(), 2) + ':' +
	this.leadingZeros(d.getMinutes(), 2) + ':' +
	this.leadingZeros(d.getSeconds(), 2);

	return result;
}
// 지금이 언제냐?
clean.date.now = function() {
	// 지금은 지금이다!
	return new Date();
};

/**
 * 입력된 값이 정해진 문자열로만 이루어졌는지 확인
 * @param target   확인할 문자열
 * @param search   제한할 문자열들
 * @param allowEmptyString true 일 경우 빈 문자열도 맞는걸로
 * @returns {Boolean}
 */
clean.is.containsCharsOnly = function(target, search, allowEmptyString) {
	//REQUIRED: target
	//REQUIRED: search
	//OPTIONAL: allowEmptyString

	var
	// 정규표현식을 사용합시다!
	r = new RegExp("^[" + search + "]"+(allowEmptyString?"*":"+")+"$");
	return r.test(target);
};

// 정수인가?
clean.is.integer = function(target) {
	//REQUIRED: target: 정수인지 확인할 대상

	// target을 숫자로 바꾸고 원래 대상이랑 완줘니 똑같은지 보면 되겠습니당.
	return (clean.to.integer(target) === target);
};

// 숫잔가?
clean.is.number = function(target) {
	//REQUIRED: target: 숫잔지 확인할 대상

	// float으로 바꾸었을때, 숫자가 아닌것이 아니고,
	// isFinite(유한 수)가 통과되면 이것은 숫자다.
	//return isNaN(parseFloat(target)) === false && isFinite(target) === true;
	
	// 제길.. 위 코드보다 우리껄 쓰는게 좋자나???
	return (clean.to.number(target) === target);
};

// 문자열인가?
clean.is.string = function(target) {
	//REQUIRED: target

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	// return toString.call(target) == '[object String]';

        // IE에서 toString에 접근하기 위해서는 Object.prototype.toString으로 접근해야합니다.
        // 브라우져에 상관없이 쓸 수 있는 typeof을 쓰는 건 어떨가요?
        return typeof target === 'string';
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

// 문자열에서 해당문자가 포함되었는지 확인합니다
clean.string.contains = function(target, search) {
	//REQUIRED: target: 대상문자열입니다!
	//REQUIRED: search: 확인할 문자열입니다!

	// search를 찾아가지고 인덱스를 확인합니다!
	return target.indexOf(search) >= 0;
};
// 문자열에서 HTML 태그를 escape 합니다.
clean.string.escapeHtml = (function(){
	var regExAmp = /&/g, regExGt = />/g, regExLt = /</g,
		regExQuot = /"/g, //"
		regExApos = /'/g; //'
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 HTML 태그를 escape한후 반환합니다.
		return !target ? '' : target.replace( regExAmp, '&amp;' )
			.replace( regExGt, '&gt;' )
			.replace( regExLt, '&lt;' )
			.replace( regExQuot, '&quot;' )
			.replace( regExApos, '&apos;' );
	};
})();

//전화번호에 하이픈을 넣어서 반환한다
clean.string.hyphenOnPhoneNum = function(target) {

	var RegNotNum = /[^0-9]/g;
	var RegPhonNum = "";
	var DataForm = "";

	if (str == "" || str == null)
		return "";

	str = str.replace(RegNotNum, '');

	if (str.length < 4)
		return str;

	if (str.length > 3 && str.length < 7) {
		DataForm = "$1-$2";
		RegPhonNum = /([0-9]{3})([0-9]+)/;
	} else if (str.length == 7) {
		DataForm = "$1-$2";
		RegPhonNum = /([0-9]{3})([0-9]{4})/;
	} else if (str.length == 8) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{4})([0-9]{2})([0-9]+)/;
	} else if (str.length == 9) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{2})([0-9]{3})([0-9]+)/;
	} else if (str.length == 10) {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{3})([0-9]{3})([0-9]+)/;
	} else {
		DataForm = "$1-$2-$3";
		RegPhonNum = /([0-9]{3})([0-9]{4})([0-9]+)/;
	}

	while (RegPhonNum.test(str)) {
		str = str.replace(RegPhonNum, DataForm);
	}

	return str;
};

// 랜덤 문자열을 반환하는 함수입니다.
clean.string.random = function(size) {
	//REQUIRED: size: 올매나 긴 문자열을 만들건지 ㅋ

	var
	// 너, 문자열.
	str = '',

	// 랜덤하게 생성 가능한 character 셋
	possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

	// index!
	i;

	// size까지 돌면서
	for ( i = 0; i < size; i += 1) {
		// 문자열에서 랜덤하게 하나의 char을 끄집어 와 추가합니다!
		str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
	}

	// 마지막으로 반! 환!
	return str;
};

// 문자열에서 특정 문자열을 모두 제거한다!
clean.string.removeAll = function(target, search) {
	//REQUIRED: target: 대상 문자열입니다!
	//REQUIRED: search: 제거할 문자열입니다!

	// search를 찾아가지고 빈 문자열로 교체합니다.
	// 이러면 모두 제거가 되겠죵?
	return clean.string.replaceAll(target, search, '');
};

// 문자열에서 특정 문자열을 모두 변경한다!
clean.string.replaceAll = function(target, search, replace) {
	//REQUIRED: target: 바꿀 대상의 문자열입니다!
	//REQUIRED: search: 바꿀 문자열입니다!
	//REQUIRED: replace: 바뀔 문자열입니다!

	// search를 찾아가지고 쪼갠뒤에 replace로 바꿔서 붙힙니다.
	return target.split(search).join(replace);
};

// 문자열에서 HTML 태그를 삭제합니다.
clean.string.stripTag = (function(){
	var regExTag;
	regExTag = /(<([^>]+)>)/ig;
	return function( target ){
		//REQUIRED: target: 바꿀 대상의 문자열입니다!
		// target에 문제가 있으면 빈문자열 아니면 문자열에서 태그를 제거한후 반환합니다.
		return !target ? "" : target.replace( regExTag, "" );
	};
})();

// 문자열을 trim 합니다.
clean.string.trim = (function(){
	var regExTrim;
	// trim 을 지원하면
	if( !!String.prototype.trim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.trim();
		};
	// trim 을 지원하지 않으면
	}else{
		regExTrim = /^\s*|\s*$/g;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();

// 정수로 바꾼다!
clean.to.integer = function(thing) {
	//REQUIRED: thing: 변경할 대상
	
	// 헐.. 무쟈게 심플하네요.
	//TODO: 설명을 부탁드립니다!
	return thing | 0;
};

// 숫자로 바꾼다!
clean.to.number = function(thing) {
	//REQUIRED: thing: 변경할 대상

	// 이거 말고 더 조은 수단이 있나요? 궁금...
	// 10진수 실수로 파싱합니다.
	return parseFloat(thing, 10);
};

// 문자열로 바꾼다!
clean.to.string = function(thing) {
	//REQUIRED: thing

	return String(thing);
};

