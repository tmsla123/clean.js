/** 
 * 문자열의 바이트 사이즈를 구합니다
 * 필요 없으심 지우심 됩니다.. -_ㅠ
 * @author Axsusia
 * @param str 체크대상 문자
 */
clean.string.byteSize = function(str){
	/**
	 * size : 현재 바이트 사이즈
	 * c : char
	 * i : 변수
	 * for 문 돌면서 size에 add add! > 끝
	 */
	var size, c, i;
	for(size=i=0;c=str.charCodeAt(i++);size+=c>>11?2:c>>7?2:1);
	return size;
}