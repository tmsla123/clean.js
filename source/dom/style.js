// 1. 두번째 파라미터가 object면, element의 style을 지정한다!!
// 예) clean.dom.style(el, { fontSize : 16 });
// 2. 두번째 파라미터가 string이면, element의 style을 가져온다!!
// 예) clean.dom.style(el, 'fontSize'); -> 16
// TODO: 

clean.dom.style = function(el,data){
	
	if(clean.is.object(data) === true) {
		
	}
	
	
	else if(clean.is.string(data) === true) {
		
		return el.getAttribute(data);
	}

};
