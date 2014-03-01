// 날자를 읽기 편하게 보여줘용(YYYY-mm-dd HH:ii:ss)
//COMMENT: 형식도 바꿀 수 있게 하면 어떨까요?!
//COMMENT: new 로 생성해야 하는 class 이기 때문에 module 패키지로 이동하였습니다.
clean.module.Timestamp = function() {
	
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
