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