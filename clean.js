// 요기는 패키지 정보를 담고있어요.
// 헤헤

var
// root package
clean;

// 패키지 정보에요!
( typeof global === 'undefined' ? window : global).clean = clean = {

	info : {},

	// 데이터 처리
	array : {},
	object : {},
	date : {},
	string : {},

	// helpers
	is : {},
	to : {},
	valid : {},
	random : {},

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

// 배열에서 값들 찾아갖고 배열로 반환!
clean.array.filter = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값들
	finds = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			finds.push(value);
		}
	});

	// 최종적으로 찾은 값들 반환
	return finds;
};

// 배열에서 값 찾기
clean.array.find = function(array, check) {
	//REQUIRED: array
	//REQUIRED: check

	var
	// 찾은 값
	find;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// 검사가 일치하면!
		if (check(value) === true) {

			// 값을 삽입!
			find = value;
			
			// each 종료!
			return;
		}
	});

	// 최종적으로 찾은 값 반환
	return find;
};

// 배열의 첫번째 요소를 n만큼 반환한다.
clean.array.first = function(array, n) {
	//REQUIRED: array
	
	// 결과
	var result = [];
	// 배열길이
	var length=array.length;

	n = arguments[1] || 1;

	// 배열이고 사이즈가 0보다 크며 n이 양수인 경우
	if(clean.is.array(array) && length > 0 && n > 0) {
		result = array.slice(0, n);
	}

	return result;
};

// 배열의 마지막 요소를 n만큼 반환한다.
clean.array.last = function(array, n) {
	//REQUIRED: array
	
	// 결과
	var result = [];
	// 배열길이
	var length=array.length;

	n = arguments[1] || 1;

	// 배열이고 사이즈가 0보다 크며 n이 양수인 경우
	if(clean.is.array(array) && length > 0 && n > 0) {
		result = array.slice(-n);
	}

	return result;
};

// 배열에서 최대 값 찾기
clean.array.max = function(array) {
	//REQUIRED: array

	var
	// 찾은 최대값
	max;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// max가 아직 지정되지 않았거나 현재 값보다 작으면
		if (max === undefined || max < value) {
			// max를 현재 값으로 뙇!
			max = value;
		}
	});

	// 최종적으로 찾은 max값 반환
	return max;
};

// 배열에서 최소 값 찾기
clean.array.min = function(array) {
	//REQUIRED: array

	var
	// 찾은 최소값
	min;

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// min이 아직 지정되지 않았거나 현재 값보다 작으면
		if (min === undefined || min < value) {
			// min을 현재 값으로 뙇!
			min = value;
		}
	});

	// 최종적으로 찾은 min값 반환
	return min;
};

// 배열을 해당 범위만큼 만든다
clean.array.range = function(start, stop, step) {
	//REQUIRED: stop
	
	var array = [];
	var index;
	var argLength = arguments.length;

	// 인자가 정수가 아니면 빈 배열을 리턴
	for(index=0; index<argLength; index++) {
		if(clean.is.integer(arguments[index]) === false) {
			return array;
		}
	}
	
	// 인자가 하나인 경우 stop으로 간주
	if (arguments.length <= 1) {
    	stop = start;
    	start = 0;
    }

	step = arguments[2] || 1;
	for(index=start; index < stop; index = index + step) {
		array.push(index);
	}

	return array;
};

// 배열에서 유니크한 값만 뽑아낸다
clean.array.unique = function(array) {
	//REQUIRED: array
	
	// 결과
	var result = [];

	// 배열의 값을 하나씩 보면서,
	clean.array.each(array, function(value) {

		// value 를 포함하고 있지 않으면 푸시!
		if (!clean.object.contains(result, value)) {
			result.push(value);
		}
	});

	return result;
};

// 쿠키를 로드해요!
clean.cookie.get = function(name) {
	//REQUIRED: name

	var arg = name + '=';
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;

	while (i < clen) {

		var j = i + alen;

		if (document.cookie.substring(i, j) == arg) {
			return get_cookie_val(j);
		}

		i = document.cookie.indexOf(' ', i) + 1;

		if (i === 0) {
			break;
		}
	}

	// 없으면 undefined!
	return undefined;
};

// 쿠키를 셋팅해 보아요~
clean.cookie.set = function(name, value, expireDays) {
	//REQUIRED: name
	//REQUIRED: value
	//REQUIRED: expireDays

	var today = new Date();

	today.setDate(today.getDate() + expireDays);

	document.cookie = name + "=" + escape(value) + ";path=/; expires=" + today.toGMTString() + ";";
};

// 해당 쿠키의 value를 가져와요~
clean.cookie.value = function(offset) {
	//REQUIRED: offset

	var endstr = document.cookie.indexOf(';', offset);

	if (endstr === -1) {
		endstr = document.cookie.length;
	}

	return unescape(document.cookie.substring(offset, endstr));
};

//getMonth 달을 구한다. 혹시나 ...아주 나중에....
//진짜 나중에.... clean에서 다국어 지원한다면 요긴하게 쓰이겠지만...
//아마 안쓰일꺼예요.... 아 그냥 그렇다구
clean.dom.getMonth = function (int_month){
	//REQUIRED: month : 숫자값이예유~
	var month_array = new Array("1월", "2월", "3월",
						   "4월", "5월", "6월",
						   "7월", "8월", "9월",
						   "10월", "11월", "12월")
	return month_array[int_month]
}
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
	};

	var d = new Date();
	var result =
	this.leadingZeros(d.getFullYear(), 4) + '-' +
	this.leadingZeros(d.getMonth() + 1, 2) + '-' +
	this.leadingZeros(d.getDate(), 2) + ' ' +

	this.leadingZeros(d.getHours(), 2) + ':' +
	this.leadingZeros(d.getMinutes(), 2) + ':' +
	this.leadingZeros(d.getSeconds(), 2);

	return result;
};

// 지금이 언제냐?
clean.date.now = function() {
	// 지금은 지금이다!
	return new Date();
};

// clean.js의 셀렉터입니다!
clean.dom.find = function(selectors) {
	//REQUIRED: selectors: css스타일의 쿼리 값

	// 일단은... IE8이상에서 지원하는 querySelector으로 작성해 두었습니다!
	return document.querySelector(selectors);
};

// 문서 높이 구하기인데... 마땅히 어디다가 둘때가;;;
clean.dom.getDocHeight = function() {
	//REQUIRED: 현재 문서의 높히를 구해요!

	var d = document;
	return Math.max(
		Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
		Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
		Math.max(d.body.clientHeight, d.documentElement.clientHeight)
	);
};
// 브라우저 정보를 가져옵니다.
clean.info.browser = function() {
	//TODO: 현재 사용하는 브라우저를 깃점으로 해서 target은 없엠.
	//간단하게 체크하는거기에 좀더 세부적인 코드가 필요합니다.
	var browser = {a:navigator.userAgent.toLowerCase()}
	if (browser.chrome === true) {
		return "chrome";
	} else if (browser.ie6 === true) {
		return "ie6";
	} else if (browser.ie7 === true) {
		return "ie7";
	} else if (browser.ie8 === true) {
		return "ie8";
	} else if (browser.ie9 === true) {
		return "ie9";
	} else if (browser.ie10 === true) {
		return "ie10";
	} else if (browser.opera === true) {
		return "opera";
	} else if (browser.safari === true) {
		return "safari";
	} else if (browser.safari3 === true) {
		return "safari3";
	} else if (browser.mac === true) {
		return "mac";
	} else if (browser.firefox === true) {
		return "firefox";
	} else {
		return "none";
	}
};

// 디바이스 정보를 가져옵니다.
clean.info.device = function(target) {
	//TODO:
};

//TODO: arguments 객체인지 확인하는 기능이 필요합니다!!
// 배열인가?
clean.is.array = function(target) {
	//REQUIRED: target

	return target instanceof Array;
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

// 값이냐?
clean.is.element = function(target) {
	//REQUIRED: target: 함순지 확인할 대상

	// 그냥 타입을 체크하면 되는듯ㅋ 찡긋ㅋ
	return typeof target === 'function';
};

// target이 비었나??
clean.is.empty = function(target) {
	//REQUIRED: target

	var
	// isEmpty?
	// 일단은 비었다는 가정을 하고!!
	isEmpty = true;

	// target이 객체면!
	if (clean.is.object(target) === true) {

		// target의 값들을 돌아보는데,
		clean.object.each(target, function(value, key) {

			// 어? 비지 않았어?!?!
			// 비지 않았네?!?!?
			// 그럼 false!!!!
			isEmpty = false;

			// 더이상 돌아볼 필요도 없다.
			return false;
		});
	}

	// target이 문자열이면!!
	else if (clean.is.string(target) === true) {

		// 빈 문자열이면 얄짤없지!
		if (target === '') {
			isEmpty = false;
		}
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEmpty;
};

// target1, 2가 같냐?
clean.is.equal = function(target1, target2) {
	//REQUIRED: target1
	//REQUIRED: target2

	var
	// isEqual!
	// 일단은 같다고 가정하고 틀리면 false로 바꿔줍시다.
	isEqual = true;

	// target들이 둘다 객체면!!
	if (clean.is.object(target1) === true && clean.is.object(target2) === true) {

		// target1의 값들을 돌아보면서,
		clean.object.each(target1, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target2[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});

		// 이번엔 target2의 값들을 돌아보면서,
		clean.object.each(target2, function(value, key) {

			// target1과 target2의 값이 다르면!
			if (target1[key] !== value) {

				// 이런. 다르군.
				isEqual = false;

				// each 중단!
				return false;
			}
		});
	}

	//TODO: 다른 type들에 대해서도 필요합니다!!

	return isEqual;
};

// 니 함수냐?
clean.is.func = function(target) {
	//REQUIRED: target: 함순지 확인할 대상

	// 그냥 타입을 체크하면 되는듯ㅋ 찡긋ㅋ
	return typeof target === 'function';
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
/*
혹시나 몰라서; 또다른 방법으로;;
clean.is.number = function(target) {

	for(i=0; i<target.length; i++) {
		if(!(target.charCodeAt(i) > 47 && target.charCodeAt(i) < 58)) {
			return false;
		}
	}

	return true;
}
*/
// 객체인가?
clean.is.object = function(target) {
	//REQUIRED: target: 객체인지 확인할 대상

	// typeof로 후려쳤습니다.
	return typeof target === 'object';
};

// 문자열인가?
clean.is.string = function(target) {
	//REQUIRED: target

	// 일단 퍼왔는데... 더 좋은코드 있음 써주세요.
	// return toString.call(target) == '[object String]';

	// IE에서 toString에 접근하기 위해서는 Object.prototype.toString으로 접근해야합니다.
	// 브라우져에 상관없이 쓸 수 있는 typeof을 쓰는 건 어떨가요?
	// typeof (new String('abc')) === "object"라는 tipjs님의 말씀에 따라 instanceof 검사로직을 추가합니다.
	return typeof target === 'string' || target instanceof String;

	//COMMENT: 매우 만족합니당!
};

/**
 * 공통으로 사용되는 인터랙션에 관련된 스크립트를 모아둔 모듈.
 * @module valid
 * @submodule ui
 */
clean.module.Validator = (function(){
    "use strict";

    /**
     * 값 검증을 위한 객체.<br/>
     * method chain 형식으로 구현되어있다.</br>
     * TODO fail 시 기본 동작 지정에 대한 기능 구현을 붙이자. 가령 검증에 실패한 input에 대해 focus가 자동으로 할당된다던가...
     * ex) var valid = new Validator();
     *     valid.isNotEmpty($("#target"), "대상이 비었습니다")
     *          .isNotEmpty($("#target2"), "대상이 비었습니다2")
     *          .result();
     * @author TaeHee Kim
     * @class Validator
     * @param options.onlyFirstMessageNotify true인 경우, 에러 메시지가 여러개여도 최초의 메시지만 notify 된다. 기본값 true
     * @param options.notifier 에러 메시지를 notify할 함수. 기본동작은 alert함수.
     * @constructor
     */
    var Validator = function(options){
        var that = this;
        var addErrorMessageAndValidFalse = function(failMessage, failCallback){
            var failIndex = that.failMessageList.length;
            if(failMessage){
                that.failMessageList.push(failMessage);
            }
            if(failCallback){
                that.failCallbackMap[failIndex] = failCallback;
            }
            that.isValid = false;
        };

        var defaultNotifier = function(failMessage, failCallback){
            alert(failMessage);
            if(failCallback){
                failCallback();
            }
        };

        if(!options){
            options = {};
        }

        /**
         * @property isValid 검증 성공 여부.<br/>
         * 검증이 1개라도 실패했다면 해당 값은 false로 바뀐다.
         * @type {Boolean}
         */
        this.isValid = true;
        this.validCount = 0;

        this.failMessageList = [];
        this.failCallbackMap = {};
        this.onlyFirstMessageNofify = options.onlyFirstMessageNofify || true;
        this.notifier = options.notifier || defaultNotifier;

        /**
         * condition이 false인지 체크한다.<br/>
         * condition에 함수를 넘길경우 해당 함수를 실행하며,
         * 해당 함수는 실행결과값으로 true 혹은 false를 리턴해야 한다.<br/>
         * condition의 값이 false거나 실행결과가 false인 경우 검증 실패처리한다.
         * @param conditionOrFunction 검증 조건 혹은 검증을 실행할 function
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.is = function(conditionOrFunction, failMessage, failCallback){
            that.validCount++;
            var condition;
            var validResult;
            // condition에 function이 넘어온 경우 해당 function을 실행하고 결과값을 얻음
            if(typeof conditionOrFunction === "function"){
                validResult = conditionOrFunction();
                if(typeof validResult === "object"){
                    if(validResult.hasOwnProperty("condition") &&
                        validResult.hasOwnProperty("failMessage")){

                        failMessage = validResult.failMessage;
                        condition = validResult.condition;
                    }else{
                        throw new Error("함수 실행 결과는 boolean 형이거나 condition, " +
                            "failMessage를 담은 object여야 합니다. " + JSON.stringify(validResult));
                    }
                }else if(typeof validResult === "boolean"){
                    condition = validResult;
                }
            }else{
                condition = conditionOrFunction;
            }


            if(!condition){
                addErrorMessageAndValidFalse(failMessage, failCallback);
            }
            return that;
        };

        /**
         * value의 값이 비어있지 않은지 체크한다.
         * @method isNotEmpty
         * @param value 비어있는지 여부를 체크할 값
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.isNotEmpty = function(value, failMessage, failCallback){
            return that.is(value && value !== "", failMessage, failCallback);
        };

        /**
         * a와 b가 같은지 체크한다.<br/>
         * === 를 이용해 비교하므로, true와 'true'는 같지 않다고 판단한다.
         * @method equals
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.equals = function(a, b, failMessage, failCallback){
            return that.is(a === b, failMessage, failCallback);
        };

        /**
         * a와 b가 같지 않은지 체크한다.
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.notEquals = function(a, b, failMessage, failCallback){
            return that.is(a !== b, failMessage, failCallback);
        };

        this.isOnlyNumber = function(value, failMessage, failCallback){
            return that.is(/^\d+$/.test(value), failMessage, failCallback);
        };

        /**
         * 검증결과를 강제로 실패처리한다.
         * @method fail
         * @param failMessage
         * @chainable
         */
        this.fail = function(failMessage, failCallback){
            that.is(false, failMessage, failCallback);
        };

        /**
         * 검증 결과를 실행한다.<br/>
         * 만일 검증 결과가 false인 경우
         * 설정된 notifier를 실행한다.
         * run 호출 이후 method chaining은 종료되며, 검증결과를 반환한다.
         * @chainable
         */
        this.run = function(){
            var notifyCount;
            var i;
            if(!that.isValid && that.failMessageList.length > 0){
                if(that.onlyFirstMessageNofify){
                    notifyCount = 1;

                }else{
                    notifyCount = that.failMessageList.length;
                }
                for( i = 0 ; i < notifyCount; i++){
                    var failCallback = that.failCallbackMap[i];
                    that.notifier(that.failMessageList[i], failCallback);
                }
            }

            return that.isValid;
        };

        this.isPass = function(){
            return that.isValid;
        };

        this.isFail = function(){
            return !that.isValid;
        };
    };

    return Validator;
})();


// 객체 파워 복사!!!
clean.object.copy = function(object) {
	//REQUIRED: object

	//TODO: deep copy를 구현해야함!!
	//TODO: 이것을 하기 위해선 array copy와 date형 copy등이 필요함!!
};

// object를 살펴보면서, 이미 있는건 무시하고 없는건 defaults에서 넣어줍니당당
clean.object.defaults = function(object, defaults) {
	//REQUIRED: object
	//REQUIRED: defaults

	// defaults의 프로퍼티들을 살펴보면서,
	clean.object.each(defaults, function(value, key) {

		// 읎네???
		if (clean.object.has(object, key) === false) {

			// 자! 가져라!
			object[key] = value;
		}
	});
};

// 객체의 프로퍼티를 각각 처리한다!
clean.object.each = function(object, callback) {
	//REQUIRED: object
	//REQUIRED: callback

	var
	// 프로퍼티의 키에요.
	key;

	// 모든 프로퍼티를 둘러봅니다.
	for (key in object) {

		// 안전하게 객체에 잘 있나 확인하고,
		if (object.hasOwnProperty(key) === true) {

			// 프로퍼티의 값과 키를 callback으로 쏴줘요!
			// 만약 callback의 결과값이 false면 더이상 살펴보지 않고 중단!
			if (callback(object[key], key) === false) {
				break;
			}
		}
	}
};

// 객체 확!장!
clean.object.extend = function(object, extend) {
	//REQUIRED: object: 본래 객체
	//REQUIRED: extend: 확장 객체

	// 확장 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(extend, function(value, key) {

		// 본래 객체에 없는거면,
		if (clean.object.has(extend, key) === false) {

			// 과감하게 삽입!!!
			object[key] = value;
		}
	});
};

// object 내의 function들의 key을 반환해주는 기능!!!
clean.object.functionKeys = function(object) {
	//REQUIRED: object

	var
	// 쓕쓕 뽑아냅시다.
	functionKeys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 값이 function 이면!
		if (clean.is.func(value)) {
			
			// function key들을 솹윕!
			functionKeys.push(key);
		}
	});

	// 뽑아낸 funcion key들을 반환!
	return functionKeys;
};

// object에 특정 값이 있는지 확인합니다!!
clean.object.has = function(object, key) {
	//REQUIRED: object
	//REQUIRED: key

	// 너 그 값 안갖고있냐?
	return object[key] !== undefined;
};

// object를 key와 value의 순서를 바꾸어주는 기능!
clean.object.invert = function(object) {
	//REQUIRED: object

	var
	// 바꿔 바꿔~! 모든걸 다바꿔~!
	invert = {};

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// invert 객체의 value에 key를 값으로다가 삽입!!!
		invert[value] = key;
	});

	// 만들어진 invert 반환!
	return invert;
};

// object의 키들을 배열로 반환하는 함수
clean.object.keys = function(object) {
	//REQUIRED: object

	var
	// 키들의 배열
	keys = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// 키들을 배열에 넣습니다.
		keys.push(key);
	});

	// 최종적으로 키들의 배열 반환!
	return keys;
};

// object의 특정 값들을 제외하고 뽑아내는 기능!!!
clean.object.omit = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...: 제외할 값들의 key!!!

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	omit = {};

	// 객체의 프로퍼티를 일단 넣는다!
	clean.object.each(object, function(value, key) {

		// 쑤우우우욱~~
		omit[key] = value;
	});

	// omit 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워제거!
			// arguments의 value가 제거할 값들의 key니까 이렇게...
			delete omit[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return omit;
};

// object를 [key, value] 배열로 바꾸어주는 기능!!
clean.object.pairs = function(object) {
	//REQUIRED: object

	var
	// [key, value] 배열!
	pairs = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value, key) {

		// [key, value]를 배열에 넣습니다!
		pairs.push([key, value]);
	});

	// 최종적으로 [key, value] 배열 반환!
	return pairs;
};

// object의 특정 값들을 뽑아내는 기능!!!
clean.object.pick = function(object) {
	//REQUIRED: object
	//OPTIONAL: arguments[1], arguments[2]...

	var
	// 뽑아낸 값들을 갖고있을 객체!~!
	pick = {};

	// pick 함수를 실행할 때 넘어온 arguments 들을 돌아보면서...
	clean.object.each(arguments, function(value) {

		// 대상이 되는 object는 넘기고~~ 넘기고~~
		if (value !== object) {

			// 파워삽입!
			// arguments의 value가 뽑아낼 값들의 key니까 이렇게...
			pick[value] = object[value];
		}
	});

	// 뽑아낸 객체를 반환!~!
	return pick;
};

// object의 값들을 배열로 반환하는 함수
clean.object.values = function(object) {
	//REQUIRED: object

	var
	// 값들의 배열
	values = [];

	// 객체의 프로퍼티들을 살펴보면서,
	clean.object.each(object, function(value) {

		// 키들을 배열에 넣습니다.
		values.push(value);
	});

	// 최종적으로 값들의 배열 반환!
	return values;
};

// 랜덤 색상문자열 생성!
clean.random.color = function() {

    // #09ab77 같은 색상문자열 반환
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
};

// 랜덤 문자열을 반환하는 함수입니다.
clean.random.string = function(size) {
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

// 글자를 바이트 단위로 자릅니다
clean.string.cutByteString = function(message, maximum) {
	//REQUIRED: message : 자를 문자열
	//REQUIRED: maximum : 자를 바이트 크기.

	//안녕하세요, 3 이렇게 값을던지면
	//안.... 만 표시해줍니다~ 아시죠 한글은 2바이트씩!
	var nbytes = 0;
	var inc=0;
	var msg='';
	var msgMore = '...';
	var msglen = message.length;
	for (i=0; i<msglen; i++)
	{
		var ch = message.charAt(i);
		if ( escape(ch).length > 4 )
		{
			inc = 2;
		}else
		if ( ch == '\n' )
		{
			if ( message.charAt(i-1) != '\r' )
			{
				inc=1;
			}
		}else
		if ( ch=='<' || ch=='>')
		{
			inc=4;
		}else
		{
			inc =1;
		}
		if ( (nbytes + inc ) > maximum)
		{
			break;
		}
		nbytes += inc;
		msg += ch;
	}
    if (message != msg)
    	msg = msg + msgMore;
	return msg;
}
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
//target->str로 변경했습니당~
clean.string.hyphenOnPhoneNum = function(str, glue) {
	//REQUIRE : str
	//OPTIONAL : glue 하이픈이 아니라 다른 걸 쓰고 싶으면 여기에 설정합니다.
/* 대한민국의 전화번호 체계는 아래와 같습니다.


    XXXX-YYYY ? 같은 지역 안으로 전화를 걸 경우. 국번호 XXXX는 최대 4자리까지, 가입자 개별 번호 YYYY는 4자리로 구성되며, 국번호는 2부터 9까지의 숫자로 시작한다.
    0ZZ-XXXX-YYYY ? 다른 지역으로 전화를 걸 경우. 지역번호 ZZ는 최대 두 자리로, 2부터 6까지의 숫자로 시작한다.
    0NN-(0ZZ)-XXXX-YYYY ? 일반 전화가 아닌 다른 통신망으로 전화를 걸 경우. 통신망 식별번호 NN은 최대 4자리까지이다. 지역번호는 시외전화에서 다른 지역으로 전화를 걸 때만 사용한다.
    00N-PPP-QQQQQQQ ? 대한민국 바깥으로 전화를 걸 경우. 국제전화 통신망 식별번호 N은 최대 3자리까지이며, 국가 번호 PPP는 국제 표준을 따른다.
    (0ZZ)-1RRR ? 1로 시작하는 번호는 특수번호로 별도의 서비스를 제공하는 데 사용된다. 경우에 따라 지역번호가 필요한 경우도 있다.
- 출처 위키백과

따라서 순서대로 파싱하는 편이 편리합니다.

*/
	var RegNotNum = /[^0-9]/g;
	var res = [], cur = 0, len;
	
	if (str == "" || str == null)
		return "";

	str = clean.to.string(str);
	str = str.replace(RegNotNum, '');

	if (str.length < 4)
		return str;
		
	glue = glue || '-';
	len = str.length;
	
	
	while(cur < len){
		switch(str[cur]){
			case "0":
				// 앞에 뭔가 붙어있는 번호입니다.
				// 지역번호일수도 있고 휴대폰일 수도 있습니다.
				if( /[2-6]/.test(str[cur+1]) ){
					// 지역번호입니다.
					// 이게 2면 02 (서울) 그 외에는 세 자리가 지역번호가 됩니다.
					if( str[cur+1] == '2' ){
						res.push(str.substr(cur,2));
						cur += 2;
					}else{
						res.push(str.substr(cur,3));
						cur += 3;
					}
				}else{
					// 기타 특수 번호입니다.
					// 01X = 무선통신망
					// 08X = 시외전화
					// 07Y, 09Y = 예비
					// 070 = 인터넷전화
					// 00X = 국제전화
					// 085XX, 014XX, 003XX, 007XX 는 다섯자리, 013X는 네 자리, 그 외에는 세 자리를 끊습니다.
					if( /(85|14|03|07)/.test(str.substr(cur+1,2)) ){
						res.push(str.substr(cur,5));
						cur+=5;
					}else if( str.substr(cur+1,2) == '13'){
						res.push(str.substr(cur,4));
						cur += 4;
					}else {
						res.push(str.substr(cur,3));
						cur+=3;
					}
				}

				break;
			default:
				// 일반 전화번호입니다.
				// 사실 1로 시작하는 건 특수 번호지만 어차피 취급은 똑같습니다.
				
				if( len-cur == 8 ){
					res.push(str.substr(cur, 4));
					res.push(str.substr(cur+4));
					cur = len;
				}else if( len-cur == 7){
					res.push(str.substr(cur, 3));
					res.push(str.substr(cur+3));
					cur = len;
				}else{
					// 국제전화의 뒤쪽일 경우 길이가 위와 다를 수 있는데 
					// 경우의 수가 너무 많습니다.
					// 전문적인 전화번호 판독기가 아니므로 이 부분은 그냥 포기합니다.
					res.push(str.substr(cur));
					cur = len;
				}
				break;
			
			
		}
	}

	return res.join(glue);
};

// 문자열의 왼쪽을 trim 합니다.
clean.string.lTrim = (function(){
	var regExTrim;
	// lTrim 을 지원하면
	if( !!String.prototype.lTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.lTrim();
		};
	// lTrim 을 지원하지 않으면
	}else{
		regExTrim = /^\s+/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();

// 문자열의 오른쪽을 trim 합니다.역쉬 트림 수정하신분 세세함이 돋보입니다!
clean.string.rTrim = (function(){
	var regExTrim;
	// rTrim 을 지원하면
	if( !!String.prototype.rTrim ){
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.rTrim();
		};
	// rTrim 을 지원하지 않으면
	}else{
		regExTrim = /\s+$/;
		return function( target ){
			//REQUIRED: target: 바꿀 대상의 문자열입니다!
			return target.replace( regExTrim, '' );
		};
	}
})();
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

// 어떤 대상을 배열로 변경
clean.to.array = function(thing) {
	//REQUIRED: thing: 변경할 대상

	//TODO: 어똫게 array로 바꾸지?
};

// 정수로 바꾼다!
clean.to.integer = function(thing) {
	//REQUIRED: thing: 변경할 대상
	
/*
js의 비트연산자는 기본적으로 32비트 signed int를 대상으로 합니다. 
피연산자가 다른 형식일 경우 자동으로 해당 형식으로 변환한 뒤 연산
을 시도하구요.  이 과정이 단순히 parseInt를 사용하는지는 모르겠는
데, "0xff"같은 문자열도 16진수로 변환해서 처리를 해주더라구요. 스
펙문서를 제가 못 찾은건지 그건 확인을 못 해봤지만,  어쨌든 그래서
비트연산의 대상이 되면 소수점같은거 없는 깔끔한 정수가 됩니다.

또한, 반환값도 당연히 32비트 정수로 정해져 있기 때문에  null  NaN
undefined infinity 그런거 없이 무조건 0을 반환합니다.  예외도 발생
시키지 않구요.   이는 어떠한 값을 "반드시 정수일 것을 보장" 하기에
좋은 방법이라 은근히 많이 사용되는 잔스킬입니다.

같은 맥락에서 아래 것들도 같은 작용을 합니다.

~~v	// bitwise NOT
v<<0	// bitwise shift
*/
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

