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